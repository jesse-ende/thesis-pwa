import sys
import os
import subprocess
from multiprocessing import Pool, Manager
from functools import partial

csv_folder_path = os.getcwd() + "/CSVs/"
scores_folder_path = os.getcwd() + "/Scores/"
website_folder = os.getcwd() + "/Web_apps/"
lighthouse_folder = scores_folder_path + "lighthouse/"
yellowlabtools_folder = scores_folder_path + "yellowlabtools/"

if not os.path.isdir(csv_folder_path):
    os.mkdir(csv_folder_path)
if not os.path.isdir(scores_folder_path):
    os.mkdir(scores_folder_path)
if not os.path.isdir(lighthouse_folder):
    os.mkdir(lighthouse_folder)
if not os.path.isdir(yellowlabtools_folder):
    os.mkdir(yellowlabtools_folder)


output_file_loc_path = csv_folder_path +  "websiteLOC.csv"
if os.path.exists(output_file_loc_path):
    output_file_loc = open(output_file_loc_path, "w")
    output_file_loc.write("website, size, html, css, js\n")
    output_file_loc.close()

handled_websites = []
with open(output_file_loc_path, "r") as f:
    for l in f:
        if l != "website, size, html, css, js\n" and "0, 0, 0, 0, 0" not in l:
            handled_websites.append(l)

def process_PWA(website):
    # if website != "amoozesh365.ir":
    #     return

    print("Processing web app of", website, "...")
    if "copy" in website:
        return
    # if os.path.exists(lighthouse_folder + website + ".json"):
    if website not in handled_websites:
        size, html_count, css_count, js_count = 0, 0, 0, 0
        output = subprocess.check_output("ohcount -i " + website_folder + "'" + website + "'", shell=True)
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
        
        for subdir, _, files in os.walk(website_folder + website):
            for file in files:
                size += os.path.getsize(subdir + "/" + file)

        print(website, size, html_count, css_count, js_count)
        with open(output_file_loc_path, "a+") as f:
            f.write(f"{website}, {size / 1000}, {html_count}, {css_count}, {js_count}\n")

    url = "https://" + website
    
    if not os.path.exists(yellowlabtools_folder + website + ".json"):
        print("running ylt for", website)
        subprocess.check_output("yellowlabtools " + url + " > " + yellowlabtools_folder + website + ".json", shell=True)
    else:
        if os.stat(yellowlabtools_folder + website + ".json").st_size == 0:
            subprocess.check_output("yellowlabtools " + url + " > " + yellowlabtools_folder + website + ".json", shell=True)

    try:
        if not os.path.exists(lighthouse_folder + website + ".json"):
            print("running lighthouse for", website)
            subprocess.check_output("lighthouse " + url + " --preset=desktop --output json --output-path=" + lighthouse_folder + website + ".json", shell=True)
        else:
            if os.stat(lighthouse_folder + website + ".json").st_size == 0:
                subprocess.check_output("lighthouse " + url + " --preset=desktop --output json --output-path=" + lighthouse_folder + website + ".json", shell=True)
    except:
        print("Lighthouse failed for website", website)


# with Pool(1) as p:
#     p.map(process_PWA, os.listdir(website_folder))

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
zipped_websites = []
unzipped_websites = []
for website in os.listdir(website_folder):
    rename_extra_js(website_folder, website)
    if website.endswith(".zip"):
        zipped_websites.append(website)
    else:
        unzipped_websites.append(website)

for website in zipped_websites:
    if website.split(".zip")[0] not in unzipped_websites:
        subprocess.check_output("unzip -o " + website_folder + website + " -d " + website_folder + website.split(".zip")[0], shell=True)

for website in unzipped_websites:
    if website + ".zip" in zipped_websites:
        os.remove(website_folder + website + ".zip")

for website in os.listdir(website_folder):
    process_PWA(website)