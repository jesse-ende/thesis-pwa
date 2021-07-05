from genericpath import getmtime
import sys
import os
import subprocess
from multiprocessing import Pool, Manager
from functools import partial
from typing import ByteString



def process_PWA(website, folders, handled_websites, audit="ylt", retries=0, remove=True):
    # if website != "amoozesh365.ir":
    #     return

    # print("Processing web app of", website, "...", folders['website_folder'], "b")
    if "copy" in website:
        return
    if website not in handled_websites:
        temp_output_folder = "~/Documents/temp_usb/"

        website = website + ".zip"
        website = website.replace("-", "_")
        print("unzipping 1", website)
        size, html_count, css_count, js_count = 0, 0, 0, 0
        try:
            # subprocess.check_output("mv " + website_folder + website + " " + website_folder + "b", shell=True)
            subprocess.check_output("unzip -j -o " + folders['website_folder'] + website + " -d " + temp_output_folder + "b", shell=True)
            print("running ohcount for", website)
            output = subprocess.check_output("ohcount -i " + folders['website_folder'] + "b", shell=True)
            output = output.decode()
            for l in output.split("\n"):
                space_splitted = l.split()
                if space_splitted:
                    if space_splitted[0] == "html":
                        html_count += int(space_splitted[1])
                    elif space_splitted[0] == "css":
                        css_count += int(space_splitted[1])
                    elif space_splitted[0] == "javascript":
                        js_count += int(space_splitted[1])
                        # print("js lines", space_splitted[1])
            if ".zip" in website:
                website = website.split(".zip")[0].replace("_", "-")
            
            for subdir, _, files in os.walk(folders['website_folder'] + website):
                for file in files:
                    size += os.path.getsize(subdir + "/" + file)

            print(website, size, html_count, css_count, js_count)
        except:
            if ".zip" not in website:
                website = website + ".zip"
                website = website.replace("-", "_")
            print("unzipping failed, removing", website)
            # exit(0)
            subprocess.check_output("rm -rf " + temp_output_folder + "b", shell=True)
        if remove:
            try:
                if ".zip" not in website:
                    website = website + ".zip"
                    website = website.replace("-", "_")
                # website.split(".zip")[0]
                subprocess.check_output("rm -rf " + temp_output_folder + "b", shell=True)
                print("removed", temp_output_folder + "b", website.split(".zip")[0])
                # subprocess.check_output("mv " + website_folder + "b" + " " + website_folder + website, shell=True)
            # os.rmdir(website_folder + website.split(".zip")[0])
            except:
                print("removing failed", temp_output_folder + website)
                exit(0)
        if ".zip" in website:
            website = website.split(".zip")[0].replace("_", "-")

        # TODO uncomment
        with open(folders['output_file_loc_path'], "a+") as f:
            f.write(f"{website}, {size / 1000}, {html_count}, {css_count}, {js_count}\n")
        handled_websites.append(website)
        # exit(0)

    if ".zip" in website:
        website = website.split(".zip")[0].replace("_", "-")

    url = "https://" + website
    
    if audit == "ylt":
        print("ylt exists", os.path.exists(folders['yellowlabtools_folder'] + website + ".json.gz"), folders['yellowlabtools_folder'] + website + ".json.gz")
        if not os.path.exists(folders['yellowlabtools_folder'] + website + ".json.gz") and not os.path.exists(folders['yellowlabtools_folder'] + website + ".json"):
            print("running ylt for", website)
            # subprocess.check_output("yellowlabtools --reporter=xml " + url + " > " + folders['yellowlabtools_folder'] + website + ".json", shell=True)
            try:
                output = subprocess.check_output("yellowlabtools --reporter=json " + url + " > " + folders['yellowlabtools_folder'] + website + ".json", shell=True, timeout=300)
                if "Error: " in output:
                    print("1 ylt failed for", website)
                    exit(1)
                compress_json_file(folders['yellowlabtools_folder'] + website + ".json")
            except:
                print("2 ytl failed for", website)
                if retries < 3:
                    process_PWA(website, folders, handled_websites, retries=retries + 1)
        else:
            if os.path.exists(folders['yellowlabtools_folder'] + website + ".json.gz"):
                print("ylt size 0", os.stat(folders['yellowlabtools_folder'] + website + ".json.gz").st_size == 0, folders['yellowlabtools_folder'] + website + ".json.gz")
            if os.path.exists(folders['yellowlabtools_folder'] + website + ".json"):
                print("ylt size 0 2", os.stat(folders['yellowlabtools_folder'] + website + ".json").st_size == 0)
            if os.path.exists(folders['yellowlabtools_folder'] + website + ".json.gz") and os.stat(folders['yellowlabtools_folder'] + website + ".json.gz").st_size == 0 or os.path.exists(folders['yellowlabtools_folder'] + website + ".json") and os.stat(folders['yellowlabtools_folder'] + website + ".json").st_size == 0:
                try:
                    print("running ylt 2 for", website)
                    output = subprocess.check_output("yellowlabtools --reporter=json " + url + " > " + folders['yellowlabtools_folder'] + website + ".json", shell=True, timeout=300)
                    if "Error: " in output:
                        print("3 ylt failed for", website)
                        exit(1)
                    compress_json_file(folders['yellowlabtools_folder'] + website + ".json")
                except:
                    print("4 ytl failed for", website)
                    if retries < 3:
                        process_PWA(website, folders, handled_websites, retries=retries + 1)
        if os.path.exists(folders['yellowlabtools_folder'] + website + ".json"):
            compress_json_file(folders['yellowlabtools_folder'] + website + ".json")
    else:
        try:
            if not os.path.exists(folders['lighthouse_folder'] + website + ".json"):
                print(website, "lighthouse output path doesnt exist", folders['lighthouse_folder'] + website + ".json")
                print("running lighthouse for", website)
                subprocess.check_output("lighthouse --chrome-flags='--headless' " + url + " --preset=desktop --output=json --output-path=" + folders['lighthouse_folder'] + website + ".json", shell=True)
                return True
            else:
                if os.stat(folders['lighthouse_folder'] + website + ".json").st_size == 0:
                    print(website, "file size = 0")
                    subprocess.check_output("lighthouse --chrome-flags='--headless' " + url + " --preset=desktop --output=json --output-path=" + folders['lighthouse_folder'] + website + ".json", shell=True)
                    return True
        except:
            print("Lighthouse failed for website", website)
        
        return False

def rename_extra_js(website_folder, website):
    for subdir, _, files in os.walk(website_folder + website):
        for file in files:
            if file.endswith("extra_js"):
                new_file_name = file.split("extra_js")[0]
                if new_file_name.endswith(".js"):
                    new_file_name = new_file_name.split(".js")[0]
                print("new fn", new_file_name + "_extra_js.js")

                # exit(0)
                os.rename(subdir + "/" + file, new_file_name)
                # with open(subdir + "/" + file, "r") as f:
                #     print(f.read())
                #     print("website", website, file)
                #     exit(0)
# count = 0

def compress_json_file(path):
    import pickle
    import json
    import compress_json
    # global count
    if os.stat(path).st_size != 0:
        # if os.path.exists(path + ".gz"):
        #     return
        # print("compressing", path.split("lighthouse/")[1], os.stat(path).st_size / 1000)

        with open(path, "r") as f:
            try:
                joe = f.read()
            except:
                print("reading file failed")
                exit(0)
            if "Killing phantomas because" in joe or "<--- JS stacktrace --->" and "<--- Last few GCs --->" in joe:
                print("Removed", path, "prematurely")
                print(joe)
                os.remove(path)
                # exit(0)
                return
            # print(f.read())
            json_string = json.loads(joe)
        compress_json.dump(str(json_string), path + ".gz")
        # test = compress_json.load(path + ".gz")
        # print(len(test) / 1000)
        json_pickle = pickle.dumps(json_string)
        # with open(path.strip(".json") + ".pickle", "wb") as f:
        #     f.write(json_pickle)
        os.remove(path)
        # count += 1
        # if count == 10:

        # exit(0)

# tup3 = os.walk(os.getcwd() + "/Scores/yellowlabtools/")
# progress = 0
# for _, _, scores in tup3:
#     for scorefile in scores:
#         # print("scorefile", scorefile)
#         if not scorefile.endswith(".gz"):
#             compress_json_file(os.getcwd() + "/Scores/yellowlabtools/" + scorefile)
#         progress += 1
#         print("progress", str(progress / len(scores) * 100)[:15], "handled", scorefile[:20], end="\r")
# exit(1)
def unzip_remove_website(website_folder, folders, handled_websites, remove=False):
    import filecmp
    import hashlib
    niet_bereikbaar_zip = ""
    niet_bereikbaar_zip2 = ""
    temp_output_folder = "~/Documents/temp_usb/"
    folders['website_folder'] = temp_output_folder

    zipped_websites = []
    unzipped_websites = []
    legit_double_sites, double_sites, double_sites_original = [], [], []
    counter = 0
    need_handling = []

    website_folder = []
    with open(os.getcwd() + "/no_duplicate_websites.txt", "r") as f:
        for website in f:
            website_folder.append(website.strip())
    print(len(website_folder), website_folder[:10])
    # exit(1)

    for i in range(len(website_folder) - 1, 0, -1):
        website = website_folder[i]
        if website == " w":
            print(" website", website)
        # rename_extra_js(website_folder, website)
        if "(" in website:
            # print(website.split(" ")[0] + website.split(")")[1], website.split(" ")[0] + website.split(")")[1] in unzipped_websites, website.split(" ")[0] + website.split(")")[1] in zipped_websites)
            double_sites.append(website.split(" ")[0] + website.split(")")[1])
            double_sites_original.append(website)
            continue
        elif website in double_sites:
            legit_double_sites.append(website)
        if "(" not in website and "System Volume" not in website:
            need_handling.append(website)

            # print(website, "in double sites")
        # if "(" in website and website.split(" ")[0] + website.split(")")[1] in zipped_websites or "(" in website and website.split(" ")[0] + website.split(")")[1] in unzipped_websites:
        #     print("copy download", website, unzipped_websites[website.split(" ")[0] + website.split(")")[1]], zipped_websites[website.split(" ")[0] + website.split(")")[1]])
        # if "ied.eu" in website and ".zip" in website:
        #     niet_bereikbaar_zip = hashlib.sha256(open(website_folder + website, "rb").read()).digest()
        #     try:
        #         subprocess.check_output("unzip -o " + website_folder + website + " -d " + website_folder + website.split(".zip")[0], shell=True)
        #     except:
        #         print("unzipping failed")
        #         exit(0)

        #         continue
        #     niet_bereikbaar_zip = website_folder + website
        # elif "ied.eu (1)" in website:
        #     niet_bereikbaar_zip2 = website_folder + website
        # if niet_bereikbaar_zip and niet_bereikbaar_zip2:
        #     print("ied cmp", filecmp.cmp(niet_bereikbaar_zip2, niet_bereikbaar_zip))
        # print(website, website_folder, "progress", counter / 18522 * 100)
        # counter += 1
        # if niet_bereikbaar_zip and ".zip" in website:
        #     if filecmp.cmp(niet_bereikbaar_zip, website_folder + website):
        #         print(website, "gelijk aan niet breikbaarzip")
        # elif niet_bereikbaar_zip2 and filecmp.cmp(niet_bereikbaar_zip2, website_folder + website):
        #     print(website, "gelijk aan niet breikbaarzip222")
        if website.endswith(".zip"):
            zipped_websites.append(website)
        else:
            unzipped_websites.append(website)
    print(len(zipped_websites), len(unzipped_websites))
    for website in need_handling:
        if len(website) < 3:
            continue
        print(website)
        process_PWA(website.split(".zip")[0].replace("_", "-"), folders, handled_websites)

    if niet_bereikbaar_zip:
        print("niet_bereikbaar", niet_bereikbaar_zip, filecmp.cmp(niet_bereikbaar_zip, niet_bereikbaar_zip))
    # exit(1)
    # for website in legit_double_sites:
    #     if ".zip" in double_sites_original[double_sites.index(website)]:
    #         print(double_sites_original[double_sites.index(website)], "zip in double")
    #     else:
    #         print(double_sites_original[double_sites.index(website)], "no zip in double")
    #     os.remove(website_folder + double_sites_original[double_sites.index(website)])
    #     print("removed", double_sites_original[double_sites.index(website)])
    # exit(0)
    # for zipped_website in zipped_websites:
    #     if zipped_website.split(".zip")[0] in unzipped_websites:
    #         print("removing", zipped_website)
    #         os.remove(website_folder + zipped_website)
    #         exit(0)
    # exit(0)

    for website in zipped_websites:
        if website == "fheoggkfdfchfphceeifdbepaooicaho (30).zip" or website == "www.yves_rocher.pl (1).zip" or "(" in website or "tvarenasport" in website or "tutorials.de" in website or "bollywoodoffice.com" in website or "aceronline.ru" in website or "thredup.com" in website or "threadsmagazine.com" in website or "netralnews" in website:
            continue
        
        # if os.path.exists(folders['yellowlabtools_folder'] + website.split(".zip")[0] + ".json.gz"):
        #     if os.stat(os.path.exists(folders['yellowlabtools_folder'] + website.split(".zip")[0] + ".json.gz")).st_size == 0:

                # print(handled_websites,website.split(".zip")[0],  website.split(".zip")[0] in handled_websites)
                # exit(1)
                # if website.split(".zip")[0] in handled_websites:
                #     # print("skipping", website)
                #     continue
                # if website.split(".zip")[0] not in unzipped_websites:
                # print("unzipping 1", website)
                # try:
                #     # subprocess.check_output("mv " + website_folder + website + " " + website_folder + "b", shell=True)
                #     subprocess.check_output("unzip -j -o " + website_folder + website + " -d " + temp_output_folder + "b", shell=True)
                # except:
                #     print("unzipping failed, removing", website)
                #     # exit(0)
                #     subprocess.check_output("rm -rf " + temp_output_folder + "b", shell=True)
                    
                #     continue

        process_PWA(website.split(".zip")[0].replace("_", "-"), folders, handled_websites)
                # exit(0)
                    # continue
                # if remove:
                #     try:
                #         # website.split(".zip")[0]
                #         subprocess.check_output("rm -rf " + temp_output_folder + "b", shell=True)
                #         print("removed", temp_output_folder + "b", website.split(".zip")[0])
                #         # subprocess.check_output("mv " + website_folder + "b" + " " + website_folder + website, shell=True)
                #     # os.rmdir(website_folder + website.split(".zip")[0])
                #     except:
                #         print("removing failed", temp_output_folder + website)
                #         exit(0)
        # if not website.split(".zip")[0] in handled_websites:
        #     print("unzipping 2", website)
        #     try:
        #         # subprocess.check_output("mv " + website_folder + website + " " + website_folder + "b", shell=True)
        #         subprocess.check_output("unzip -j -o " + website_folder + website + " -d " + temp_output_folder + "b", shell=True)
        #     except:
        #         print("unzipping failed, removing", website)
        #         # exit(0)
        #         subprocess.check_output("rm -rf " + temp_output_folder + "b", shell=True)
                
        #         continue

        #     process_PWA(website.split(".zip")[0].replace("_", "-"), folders, handled_websites)
        #         # continue
        #     if remove:
        #         try:
        #             # website.split(".zip")[0]
        #             subprocess.check_output("rm -rf " + temp_output_folder + "b", shell=True)
        #             print("removed", temp_output_folder + "b", website.split(".zip")[0])
        #             # subprocess.check_output("mv " + website_folder + "b" + " " + website_folder + website, shell=True)
        #         # os.rmdir(website_folder + website.split(".zip")[0])
        #         except:
        #             print("removing failed", temp_output_folder + website)
        #             exit(0)
        #     # exit(0)
        # exit(1)
    # if remove:
    #     for website in unzipped_websites:
    #         if website + ".zip" in zipped_websites:
    #             os.remove(website_folder + website.split(".zip")[0])

def remove_duplicate_sites(all_urls, folders):
    all_sites_no_domain = {}
    skipped = {}
    overwritten, not_overwritten = [], 0
    total = 0
    import tldextract
    extract = tldextract.TLDExtract()
    domain_to_suffix = {}
    sw_websites, filtered_websites = [], []
    sw_folder = []
    
    with open(os.getcwd() + "/no_duplicate_websites.txt", "r") as f:
        for website in f:
            sw_folder.append(website.strip())
    print(len(sw_folder))
    exit(1)
    for sw_website in sw_folder:
        ext = extract(sw_website)
        sw_websites.append(sw_website)
        if ext.domain not in domain_to_suffix:
            domain_to_suffix[ext.domain] = [(sw_website, ext.suffix)]
            # domain_to_suffix.append(ext.domain)
        else:
            domain_to_suffix[ext.domain].append((sw_website, ext.suffix))
    domain_url = {}
    for url in all_urls:
        ext = extract(url)
        if ext.domain in domain_url:
            domain_url[ext.domain].append(ext.suffix)
        else:
            domain_url[ext.domain] = [ext.suffix]
    deletion = []
    for domain in domain_to_suffix:
        if len(domain_to_suffix[domain]) == 1:
            filtered_websites.append(domain_to_suffix[domain][0])
            deletion.append(domain)
    for dele in deletion:
        del domain_to_suffix[dele]
    print(sum([len(domain_to_suffix[x]) for x in domain_to_suffix]))
    # start_index = len(suffix_url)
    # exit(0)
    # for website in all_urls:
    non_existant_domains, non_existant_suffix = [], []
    for domain in domain_to_suffix:
        # min_index_suffix = start_index
        # highest_website = ""
        temp_suffix = [x[1] for x in domain_to_suffix[domain]]
        len_fil = len(filtered_websites)
        if domain not in domain_url:
            print("domain bestaat niet in all urls", domain)
            non_existant_domains.append(domain)
        else:
            for suffix in domain_url[domain]:
                if suffix in temp_suffix:
                    filtered_websites.append(domain_to_suffix[domain][temp_suffix.index(suffix)][0])
                    break
            if len_fil == len(filtered_websites):
                print("geen website gefilterd", domain_url[domain], domain_to_suffix[domain], domain)
                non_existant_suffix.append(domain)
                # exit(0)
            # else:
                # print(len(filtered_websites))
        # else:
            # print("no website found", domain)
            # exit(0)


    print(len(filtered_websites), len(non_existant_domains), len(non_existant_suffix))
    if len(filtered_websites) > 20:
        print("filtered", filtered_websites[:20])
    # exit(0)

    with open(folders['filtered_websites_file'], "w") as f:
        for website in filtered_websites:
            # print(all_sites_no_domain[website_no_domain])
            f.write(website[0] + "\n")

def folder_websites_to_txt(website_folder, output_file):
    with open(output_file, "w") as f:
        for website in os.listdir(website_folder):
            f.write(website + "\n")

# folder_websites_to_txt(os.getcwd() + "/first_sws/SWsbrowser", os.getcwd() + "/first_sws.txt")

def rename_websites_folder_names_char(char, replaced_char, rootdir):
    for folder in os.listdir(rootdir):
        print(folder.replace(char, replaced_char), folder)
        if "_" in folder:
            if not os.path.exists(rootdir + folder.replace(char, replaced_char)):
                os.mkdir(rootdir + folder.replace(char, replaced_char))
            os.removedirs(rootdir + folder)

# rename_websites_folder_names_char("_", "-", "/media/jesse/16E0-ED0D/missing/")
# exit(0)

def get_empty_ylt(website_folder):
    for website in os.listdir(website_folder):
        if os.stat(website_folder + website).st_size != 0:
            print(website)

# get_empty_ylt(os.getcwd() + "/Scores/yellowlabtools/")
# exit(0)
def get_missing_websites(rootfiles, sws_dir, output_dir):

    websites = []
    for website in os.listdir(sws_dir):
        # if website not in websites and "www." + website not in websites and website.replace("-", "_") not in websites:
        #     if "ludomah" in website:
        #         print("ludamah", website, website not in websites, "www." + website not in websites, website.replace("-", "_") not in websites)
        websites.append(website)
    # for w in websites:
    #     if "zip" in w:
    #         print("w", w)
    missing_websites = []
    
    root_websites = []
    for rootfile in rootfiles:
        if os.path.isfile(rootfile):
            print("handling", rootfile)

            with open(rootfile, "r") as f:
                for website in f:
                    website = website.strip()
                    if "trust" in website:
                        print("zip still in website", website)
                    if ".zip" in website:
                        website = website[:website.index(".zip")]
                    website = website.strip()
                    website = website.strip(" (1)")
                        # print(website)
                    if "(" in website:
                        website = website[:website.index(" ")]
                    if website not in websites and website.replace("_", "-") not in websites:
                        if not website.startswith("www.") and "www." + website not in websites:
                            if website not in missing_websites:
                                missing_websites.append(website)
                                if "trust.zone" in website:
                                    print("appending trust", website, website in websites)
                    if website not in root_websites:
                        root_websites.append(website)
        else:
            print("handling2", rootfile)

            for website in os.listdir(rootfile):
                website = website.strip()
                if "trust" in website:
                    print("zip still in website", website)
                if ".zip" in website:
                    website = website[:website.index(".zip")]
                website = website.strip()
                website = website.strip(" (1)")
                website = website.replace("_", "-")
                    # print(website)
                if "(" in website:
                    website = website[:website.index(" ")]
                if website not in websites and website.replace("_", "-") not in websites:
                    if not website.startswith("www.") and "www." + website not in websites:
                        if website not in missing_websites:
                            missing_websites.append(website)
                            if "trust.zone" in website:
                                print("appending trust", website)
                if website not in root_websites:
                        root_websites.append(website)
    print(root_websites[:11], len(missing_websites))
    print(len(websites), len(root_websites))
    for website in missing_websites:
        print(website)
    import tldextract
    extract = tldextract.TLDExtract()
    removed_websites = []
    for website in websites:
        for website2 in root_websites:
            if extract(website).suffix in website2:

                removed_websites.append(website)
                break
            # else:
            #     print("joe", extract(website).domain, website)

    print(len(websites), len(removed_websites), set(websites) - set(removed_websites))
    if output_dir:
        double = []

        if not os.path.exists(output_dir):
            os.mkdir(output_dir)
        for website in missing_websites:
            if "System Volume" not in website:
                try:
                    os.mkdir(output_dir + website)
                except:
                    print(website, "folder already exists")
                    double.append(website)
        print(double, len(double))

# get_missing_websites(["/media/jesse/16E0-ED0D/laatste/", "/media/jesse/USB64/"], os.getcwd() + "/last_sws/", "")
# exit(1)

if __name__ == "__main__":
    global OKGREEN
    global FAIL
    global ENDC
    OKGREEN = '\033[92m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'

    folders = {}
    folders['csv_folder_path'] = os.getcwd() + "/CSVs/"
    folders['scores_folder_path'] = os.getcwd() + "/Scores/"
    folders['website_folder'] = os.getcwd() + "/last_sws/"
    folders['lighthouse_folder'] = os.getcwd() + "/Scores/lighthouse/"
    folders['yellowlabtools_folder'] = os.getcwd() + "/Scores/yellowlabtools/"
    folders['urls_file'] = os.getcwd() + "/top-1m.csv"
    folders['sw_folder'] = os.getcwd() + "/last_sws/"
    folders['filtered_websites_file'] = os.getcwd() + "/no_duplicate_websites.txt"

    for folder in folders:
        if "folder" in folder and not os.path.isdir(folders[folder]):
            os.mkdir(folders[folder])

    folders['output_file_loc_path'] = folders['csv_folder_path'] + "websiteLOC.csv"
    
    if not os.path.exists(folders['output_file_loc_path']):
        output_file_loc = open(folders['output_file_loc_path'], "w")
        output_file_loc.write("website, size, html, css, js\n")
        output_file_loc.close()

    handled_websites = []
    with open(folders['output_file_loc_path'], "r") as f:
        for l in f:
            if l != "website, size, html, css, js\n" and "0, 0, 0, 0, 0" not in l:
                handled_websites.append(l.split(",")[0])
    unzip_remove_website("/media/jesse/USB64/", folders, handled_websites, True)
    exit(0)
    # with Pool(1) as p:
    #     p.map(partial(process_PWA, folders=folders, handled_websites=handled_websites), os.listdir(folders['website_folder']))
# processed = 0
# with open(os.getcwd() + "/last_sws.txt", "r") as f:
#     for website in f:
#         print("processed", processed, "/ 16611", processed / 16611 * 100)
#         website = website.strip()
#         process_PWA(website, folders, handled_websites, "")
#         processed += 1
        # if processed == 20:
            # break
all_urls = []
with open(folders['urls_file'], "r") as f:
    for l in f:
        all_urls.append(l.split(",")[1].strip())
        # all_urls[l.split(",")[1].strip()] = l.split(",")[0].strip()

remove_duplicate_sites(all_urls, folders)