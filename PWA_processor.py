"""
The PWA post processor that performs all post processing related to the PWAs. This includes things as line of source code counting, filtering resources,

"""
from misc import Output, DataAggregator, FileInteractor
import os
import zipfile
import shutil
import subprocess

class PWAPostProcessor:
    def __init__(self, paths=[]) -> None:
        self.webapp_base_folders = paths
        self.print_green = Output().print_green
        self.print_red = Output().print_fail
        self.file_interactor = FileInteractor()
        self.data_aggregator = DataAggregator()

    def get_correct_resources(self, valid_sw_paths, webapp_url_linker={}):
        print("Checking local resources")
        incorrect_resources = set()
        not_present = set()
        no_content_sites = set()
        yes_index_mapping = self.file_interactor.load_object_exists("yes_index") or {}
        no_content_sites = self.file_interactor.load_object_exists("no_content_sites") or {}

        for webapp_base_folder in self.webapp_base_folders:
            for subdir, _, files in os.walk(webapp_base_folder):
                if subdir == webapp_base_folder:
                    for file in files:
                        original_file_site = file.split(" ")[0].split(".zip")[0]
                        site = self.data_aggregator.string_usb_to_csv(original_file_site)
                        if site.startswith("www."):
                            site = site[4:]
                        if site in yes_index_mapping or site in no_content_sites:
                            continue
                        if site in valid_sw_paths or site in webapp_url_linker:
                            if site in webapp_url_linker:
                                site = webapp_url_linker[site]
                            with zipfile.ZipFile(os.path.join(subdir, file), 'r') as zip_ref:
                                for zfile in zip_ref.namelist():
                                    if site in zfile or original_file_site in zfile:
                                        if site not in yes_index_mapping and ".htm" in zfile:
                                            content = ""
                                            try:
                                                content = zip_ref.read(zfile).decode("utf-8")
                                            except:
                                                try:
                                                    content = zip_ref.read(zfile).decode("utf-8-sig")
                                                except:
                                                    continue

                                            if "<!doctype" in content.lower() or "<html" in content.lower():
                                                if not "No Content: http" in content:
                                                    yes_index_mapping[site] = os.path.join(subdir, file)
                                                    break

        self.file_interactor.save_object(no_content_sites, "no_content_sites")
        self.file_interactor.save_object(yes_index_mapping, "yes_index_mapping")

        delete_sites = set()
        add_sites = {}
        for site in yes_index_mapping:
            if site in webapp_url_linker:
                temp = yes_index_mapping[site]
                add_sites[webapp_url_linker[site]] = temp
                delete_sites.add(site)

        for site in delete_sites:
            del yes_index_mapping[site]

        for site in add_sites:
            yes_index_mapping[site] = add_sites[site]

        delete_sites = set()
        add_sites = {}
        for site in no_content_sites:
            if site in webapp_url_linker:
                temp = no_content_sites[site]
                add_sites[webapp_url_linker[site]] = temp
                delete_sites.add(site)

        for site in delete_sites:
            del no_content_sites[site]

        for site in add_sites:
            no_content_sites[site] = add_sites[site]

        self.file_interactor.save_object(no_content_sites, "no_content_sites")
        self.file_interactor.save_object(yes_index_mapping, "yes_index")

        return yes_index_mapping, no_content_sites
    
    def get_webapp_results(self, final_webapp_paths, pwa_results_csv_file):
        """
        Get the results of the PWAs in 'final_webapp_paths'
        """
        if not os.path.exists(pwa_results_csv_file):
            with open(pwa_results_csv_file, "w") as f:
                f.write("website;size;html;css;js\n")
        processed_pwas = self.data_aggregator.get_col_csv(pwa_results_csv_file, "website", sep=";")
        lines = []
        with open(pwa_results_csv_file, "r") as f:
            for l in f:
                lines.append(l)

        print("Getting PWA results")
        for webapp in final_webapp_paths:
            if webapp not in processed_pwas:
                if final_webapp_paths[webapp].endswith(".zip"):
                    size, html_count, css_count, js_count, truth = self.get_pwa_metrics(final_webapp_paths[webapp], webapp)
                else:
                    size, html_count, css_count, js_count, truth = self.get_pwa_metrics(final_webapp_paths[webapp], webapp, zipped=False)
                self.file_interactor.append_line(pwa_results_csv_file, f'{webapp};{size};{html_count};{css_count};{js_count}\n')

    def get_pwa_metrics(self, path, webapp, zipped=True):
        """
        Get metrics related to PWAs
        """
        temp_output_folder = "/home/jesse/Documents/temp_usb/b"
        subprocess.check_output("rm -rf " + temp_output_folder, shell=True)
        os.mkdir(temp_output_folder)
        if not zipped:
            shutil.move(path, temp_output_folder)
        else:
            try:
                subprocess.check_output("unzip -o '" + path + "' -d " + temp_output_folder, shell=True, stderr=subprocess.STDOUT)
            except Exception as e:
                print("unzipping failed", webapp, e)
                size = 0                
                for subdir, _, files in os.walk(temp_output_folder):
                    for file in files:
                        size += os.path.getsize(subdir + "/" + file)
                if size == 0:
                    print("big fail unzipping", path, "cmd unzip -o " + path + " -d " + temp_output_folder)
                    print(e)
                    exit(0)

        html_count, css_count, js_count, size = 0, 0, 0, 0
        import time
        start = time.time()
        output = subprocess.check_output("cloc --csv --include-lang=JavaScript,HTML,CSS " + temp_output_folder, shell=True)
        print("getting loc took", time.time() - start, webapp)
        output = output.decode()
        for l in output.split("\n"):
            comma_splitted = l.lower().split(",")
            if len(comma_splitted) > 4:
                if comma_splitted[1] == "html":
                    html_count += int(comma_splitted[4])
                elif comma_splitted[1] == "css":
                    css_count += int(comma_splitted[4])
                elif comma_splitted[1] == "javascript":
                    js_count += int(comma_splitted[4])
        
        for subdir, _, files in os.walk(temp_output_folder):
            for file in files:
                size += os.path.getsize(subdir + "/" + file)
        subprocess.check_output("rm -rf " + temp_output_folder, shell=True)
        
        return size, html_count, css_count, js_count, True

    def get_frameworks_wappalyzer(self, wappalyzer_folder, black_list, valid_websites):
        """
        Extracts the web frameworks from all wappalyzer output files in 'wappalyzer_folder'
        """
        total = {}

        valid_websites = set(valid_websites)
        for _, _, files in os.walk(wappalyzer_folder):
            for file in files:
                current_frameworks = []
                with open(wappalyzer_folder + file, "r") as f:
                    for l in f:
                        if self.hasNumbers(l):
                            continue
                        l = l.strip()
                        if not l or l in current_frameworks:
                            continue
                        if True in [x.lower() in l.lower() for x in black_list] or l.lower() in black_list:
                            continue
                        else:
                            current_frameworks.append(l)
                            if l in total:
                                total[l] += 1
                            else:
                                total[l] = 1
        return total

    def hasNumbers(self, input_string):
        """
        Check whether 'input_string' contains digits
        """
        return any(char.isdigit() for char in input_string)

    def get_frameworks_whatruns(self, whatruns_folders, valid_websites, black_list, total={}):
        """
        Extracts the web frameworks from whatruns files stored in 'whatruns_folder
        """
        count = 0

        present = set()
        handled_files = set()
        number_whitelist = ["d3", "k2", "nvd3", "i18next"]
       
        valid_site_domains = self.file_interactor.load_object_exists("valid_site_domains") or {}
        folder_rank = {}
        for valid_site in valid_websites:
            print("valid site", valid_site)
            for whatruns_folder in whatruns_folders:
                for _, _, files in os.walk(whatruns_folder):
                    if valid_site in present:
                        break
                    
                    for file in files:
                        if valid_site in present:
                            break
                        if file in handled_files:
                            continue
                        if valid_site not in valid_site_domains:
                            valid_site_ext = self.extract(valid_site)
                            valid_site_domains[valid_site] = valid_site_ext
                        else:
                            valid_site_ext = valid_site_domains[valid_site]
                        if valid_site not in self.string_usb_to_csv(file) and valid_site_ext.domain not in self.string_usb_to_csv(file):
                            continue
                        print("count", count, whatruns_folder, file)
                        count += 1

                        skip, temp = False, []
                        site_present = False
                        if os.stat(whatruns_folder + file).st_size > 2000:
                            skip = True
                        elif os.stat(whatruns_folder + file).st_size < 50:
                            skip = True

                        with open(whatruns_folder + file, "r") as f:
                            site_check = file.split(".txt")[0]
                            if "www." in site_check:
                                site_check = site_check[4:]
                            for l in f:
                                l = l.strip()
                                if site_check in l and "What runs" in l or valid_site_ext.domain in l and "What runs" in l:
                                    site_present = file
                                    continue
                                elif "What runs ?" in l:
                                    skip = True
                                    break
                                if l:
                                    if "framework" in l.lower() or "library" in l.lower():
                                        continue
                                    if True not in [x.lower() in l.lower() for x in black_list]:
                                        if self.hasNumbers(l):
                                            if "jquery" in l.lower():
                                                if not self.hasNumbers("".join(l.split(" ")[1:])):
                                                    print("JQUERY", l)
                                            l = l.split(" ")[0]
                                            print("numbers", l)
                                        temp.append(l)

                        handled_files.add(file)
                        if not skip and site_present:
                            for l in temp:
                                if "jQuery 3.3.1" in l or self.hasNumbers(l):
                                    if l.lower() not in number_whitelist:
                                        print("jquery found or numbers found", l, temp)
                                        print(file, whatruns_folder)
                                        exit(0)
                                if l in total:
                                    total[l] += 1
                                else:
                                    total[l] = 1
                            if whatruns_folder in folder_rank:
                                folder_rank[whatruns_folder] += 1
                            else:
                                folder_rank[whatruns_folder] = 1
                            present.add(valid_site)

        self.file_interactor.save_object(valid_site_domains, "valid_site_domains")
        missing = 0
        for valid_site in valid_websites:
            if valid_site not in present:
                missing += 1
        print("Whatruns processed", count, "files")
        print("missing whatruns", missing, len(present))
        remaining_set = set(valid_websites)
        remaining_set.difference_update(set(present))
        print("remaining set", len(remaining_set), list(remaining_set)[:20])
        print("wecare.gr" in remaining_set)
        print("folder rank", folder_rank)
        return total