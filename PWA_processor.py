import gzip
from site import addsitepackages
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

    def get_valid_linked_webapp_paths(self, valid_linked_sw_sites, usb_sw_linker, correct_resources={}):
        multiple_domain_sites = {"renault": "fr", "properati": "com.ar", "pinterest": "com", "serene-production-ezycommerce.ezyflight": "se", "michaelpage": "com",\
                                    "tastemade": "com.br", "mini": "co.uk", "emerald.widgetbot": "io", "underarmour": "co.jp", "chrono24": "com", "edreams": "com",\
                                    "europcar": "co.uk", "gogocarto": "fr", "clasf": "com.br", "ifood": "com.br", "eventbrite": "co.uk", "fashiola": "co.uk",\
                                    "avrotros": "nl", "adidas": "co.id", "cuponation": "com.mx", "centrum": "cz", "michelin": "ru", "ebay": "com", "pizzahut": "com.tw",\
                                    "uol": "com.br", "wego": "co.in", "airbnb": "com", "habitissimo": "es", "supercheapauto": "com.au", "autofun": "co.th",\
                                    "clearly": "ca", "developers.google": "com", "cloud.google": "com", "wne32.csb" : "app", "firebase.google": "com", "netbet": "de"}
        valid_linked_webapp_paths = self.file_interactor.load_object_exists("valid_linked_webapp_paths") or {}
        valid_linked_webapp_paths = {}
        if len(valid_linked_webapp_paths) == 0:
            for resource in correct_resources:
                print(correct_resources.index(resource) / len(correct_resources), end="\r")
                found = False
                for webapp_base_folder in self.webapp_base_folders:
                    for webapp_file in os.listdir(webapp_base_folder):
                        if found:
                            break
                        webapp_site = self.data_aggregator.string_usb_to_csv(webapp_file.split(" ")[0].split(".zip")[0])
                        if resource in webapp_site:
                            valid_linked_webapp_paths[resource] = os.path.join(webapp_base_folder, webapp_file)
                            found = True
                            break
            return valid_linked_webapp_paths

            for domain in valid_linked_sw_sites:
                site = domain
                suffix = valid_linked_sw_sites[domain]
                if suffix:
                    site += "." + suffix
                usb_site = ""
                for webapp_site in usb_sw_linker:
                    if site == usb_sw_linker[webapp_site]:
                        usb_site = usb_sw_linker[webapp_site]
                        break
                if site in valid_linked_webapp_paths or site not in correct_resources and usb_site not in correct_resources:
                    found_resource = False
                    for res in correct_resources:
                        if res in site or res in usb_site:
                            found_resource = True
                            break
                    #  and usb_site not in correct_resources):
                    if not found_resource:
                        print("skipping site", site, site in valid_linked_webapp_paths)

                        continue
                found = False
                for usb_site in usb_sw_linker:
                    if site == usb_sw_linker[usb_site]:
                        for webapp_base_folder in self.webapp_base_folders:
                            for webapp_file in os.listdir(webapp_base_folder):
                                if found:
                                    break
                                webapp_site = self.data_aggregator.string_usb_to_csv(webapp_file.split(" ")[0].split(".zip")[0])
                                if usb_site in webapp_site:
                                    valid_linked_webapp_paths[site] = os.path.join(webapp_base_folder, webapp_file)
                                    found = True
                                    break
                if not found:
                    for webapp_base_folder in self.webapp_base_folders:
                        for webapp_file in os.listdir(webapp_base_folder):
                            if found:
                                break
                            webapp_site = self.data_aggregator.string_usb_to_csv(webapp_file.split(" ")[0].split(".zip")[0])
                            if site in webapp_site:
                                valid_linked_webapp_paths[site] = os.path.join(webapp_base_folder, webapp_file)
                                found = True
                                break
                if not found:
                    if suffix:
                        print("webapp not found", "https://" + site)
                    else:
                        print("webapp not found", "https://" + site)
            self.file_interactor.save_object(valid_linked_webapp_paths, "valid_linked_webapp_paths")

        return valid_linked_webapp_paths

    def get_correct_resources(self, valid_sw_paths, webapp_url_linker={}):
        print("Checking local resources")
        incorrect_resources = set()
        not_present = set()
        no_content_sites = set()
        yes_index_mapping = self.file_interactor.load_object_exists("yes_index") or {}
        no_content_sites = self.file_interactor.load_object_exists("no_content_sites") or {}
        # yes_index_mapping = {}


        for webapp_base_folder in self.webapp_base_folders:
            # if len(yes_index_mapping):
            #     break
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
                                    # print(site, zfile)
                                    if site in zfile or original_file_site in zfile:
                                        if site not in yes_index_mapping and ".htm" in zfile:
                                            #  and len(zfile.split("/")) == 2:
                                            content = ""
                                            try:
                                                content = zip_ref.read(zfile).decode("utf-8")
                                            except:
                                                # print("decode error 1", zfile, file)
                                                try:
                                                    content = zip_ref.read(zfile).decode("utf-8-sig")
                                                except:
                                                    # print("decode error 2", zfile, file)
                                                    continue
                                            # print(site, zfile, content[:30])

                                            if "<!doctype" in content.lower() or "<html" in content.lower():
                                                if not "No Content: http" in content:
                                                    yes_index_mapping[site] = os.path.join(subdir, file)
                                                    break

                                if not site in yes_index_mapping:
                                    for zfile in zip_ref.namelist():
                                        if site in zfile or original_file_site in zfile:
                                            if ".htm" in zfile:
                                                content = ""
                                                try:
                                                    content = zip_ref.read(zfile).decode("utf-8")
                                                except:
                                                    # print("decode error 1", zfile, file)
                                                    try:
                                                        content = zip_ref.read(zfile).decode("utf-8-sig")
                                                    except:
                                                        # print("decode error 2", zfile, file)
                                                        continue
                                                if "No Content: " in content:
                                                    no_content_sites[site] = os.path.join(subdir, file)
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
        if not os.path.exists(pwa_results_csv_file):
            with open(pwa_results_csv_file, "w") as f:
                f.write("website;size;html;css;js\n")
        processed_pwas = self.data_aggregator.get_col_csv(pwa_results_csv_file, "website", sep=",")

        print("Getting PWA results")
        for webapp in final_webapp_paths:
            if webapp not in processed_pwas:
                if final_webapp_paths[webapp].endswith(".zip"):
                    size, html_count, css_count, js_count, truth = self.get_pwa_metrics(final_webapp_paths[webapp], webapp)
                else:
                    size, html_count, css_count, js_count, truth = self.get_pwa_metrics(final_webapp_paths[webapp], webapp, zipped=False)
                self.file_interactor.append_line(pwa_results_csv_file, f'{webapp},{size},{html_count},{css_count},{js_count}\n')

    def get_pwa_metrics(self, path, webapp, zipped=True):
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
