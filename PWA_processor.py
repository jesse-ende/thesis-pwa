from genericpath import getmtime
import sys
import os
import subprocess
from multiprocessing import Pool, Manager
from functools import partial
from typing import ByteString
import pickle
# from post_processor import get_empty_files_in_folder

all_sizes, all_sites = [], []
def process_PWA(website, folders, handled_websites, audit="ylt", retries=0, remove=True, writeResult=False, sizeOnly=False):
    handled_websites = []
    # if "twitter" not in website:
    #     return

    # print("Processing web app of", website, "...", folders['website_folder'], "b")
    if "copy" in website:
        return
    if "(" in website and "System Volume" in website or len(website) < 4:
        return
    
    if sizeOnly:
        if website not in handled_websites:
            temp_output_folder = "/home/jesse/Documents/temp_usb/"

            website = website + ".zip"
            website = website.replace("-", "_")
            # print("unzipping 1", website)
            size, html_count, css_count, js_count = 0, 0, 0, 0
            try:
                # subprocess.check_output("mv " + website_folder + website + " " + website_folder + "b", shell=True)
                subprocess.check_output("unzip -j -o " + folders['website_folder'] + website + " -d " + temp_output_folder + "b", shell=True)
                if not sizeOnly:
                    print("running ohcount for", website)
                    output = subprocess.check_output("ohcount -i " + temp_output_folder + "b", shell=True)
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
                for subdir, _, files in os.walk(temp_output_folder + "b"):
                    for file in files:
                        size += os.path.getsize(subdir + "/" + file)
                all_sizes.append(size)
                all_sites.append(website)
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
        if writeResult:
            with open(folders['output_file_loc_path'], "a+") as f:
                f.write(f"{website}, {size / 1000}, {html_count}, {css_count}, {js_count}\n")
        handled_websites.append(website)
        if os.path.exists(temp_output_folder + "b"):
            print("os walk", temp_output_folder + "b", os.path.getsize(temp_output_folder + "b"))
        else:
            print("os walk path doesnt exist", temp_output_folder + "b" )
        print("handled", f"{website}, {size / 1000}, {html_count}, {css_count}, {js_count}\n")
        return

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

def compress_json_file(path):
    import json
    import compress_json
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
                return
            json_string = json.loads(joe)
        compress_json.dump(str(json_string), path + ".gz")
        json_pickle = pickle.dumps(json_string)
        os.remove(path)

def save_object(object, name):
    if not os.path.exists(os.getcwd() + "/" + name):
        f = open(os.getcwd() + "/" + name, "w")
        f.close()
    with open(os.getcwd() + "/" + name, "wb") as f:
        pickled = pickle.dumps(object)
        pickle.dump(pickled, f)

def load_object(name):
    with open(os.getcwd() + "/" + name, "rb") as f:
        pickled = pickle.load(f)
        return pickle.loads(pickled)

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
    folders['yellowlabtools_folder'] = os.getcwd() + "/Scores/yellowlabtools_vm/"
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
    no_duplicate_websites = []
    with open(os.getcwd() + "/no_dup_websites_final.txt", "r") as f:
        for l in f:
            no_duplicate_websites.append(l.strip())

    # missing_ylt = get_empty_files_in_folder(os.getcwd() + "/Scores/yellowlabtools/")
    # with open(os.getcwd() + "/missing_ylt_sites.txt", "w") as f:

    #     for site in missing_ylt:
    #         f.write(site + "\n")
    # exit(0)
    missing_ylt = []
    with open(os.getcwd() + "/missing_ylt_sites.txt", "r") as f:
        for l in f:
            l = l.strip()
            missing_ylt.append(l)
    print(len(missing_ylt))
    # exit(0)
    can_start = False
    for website in missing_ylt:
        if "bmwhk.com" in website:
            can_start = True
        if can_start:
            process_PWA(website, folders, [], audit="ylt", retries=0, remove=True, writeResult=False)
        


    check_website_list_against_folder(no_duplicate_websites, folders['website_folder'])
    


    # print(len(no_duplicate_websites))

    # unzip_remove_website("/media/jesse/USB64/", folders, handled_websites, True)
    exit(0)
    # get_no_duplicate_urls(folders)

    website_folder = []
    with open(os.getcwd() + "/no_duplicate_websites.txt", "r") as f:
        for website in f:
            website_folder.append(website.strip())
    temp = []
    for i in range(len(website_folder) - 1, 0, -1):
        temp.append(website_folder[i])
    website_folder = temp
    folders['website_folder'] = website_folder
    with Pool(1) as p:
        p.map(partial(process_PWA, folders=folders, handled_websites=handled_websites), folders['website_folder'])
# processed = 0
# with open(os.getcwd() + "/last_sws.txt", "r") as f:
#     for website in f:
#         print("processed", processed, "/ 16611", processed / 16611 * 100)
#         website = website.strip()
#         process_PWA(website, folders, handled_websites, "")
#         processed += 1
        # if processed == 20:
            # break