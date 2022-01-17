from filecmp import dircmp
from posixpath import join
# from SW_processor import URLInteractor
import SW_processor
import os
import pickle
from re import L, S, sub
import jsbeautifier
import numpy as np
import pandas as pd
from PWA_processor import compress_json_file, load_object
import subprocess
import tldextract
# import guesslang
import gzip
import json
import ast
import zipfile
import bs4
import requests
import random
import re
import validators
import shutil
import operator


class Output:
    def __init__(self) -> None:
        self.OKGREEN = '\033[92m'
        self.OKBLUE = '\033[94m'
        self.FAIL = '\033[91m'
        self.ENDC = '\033[0m'
        pass
    

    def print_color(self, string, color):
        print(color + str(string) + self.ENDC)
    
    def print_green(self, *strings):
        total = ""
        for string in strings:
            total += str(string) + " "
        self.print_color(str(total), self.OKGREEN)
    
    def print_blue(self, string):
        self.print_color(str(string), self.OKBLUE)
    
    def print_fail(self, *strings):
        total = ""
        for string in strings:
            total += str(string) + " "
        self.print_color(str(total), self.FAIL)

class FileInteractor:
    def __init__(self) -> None:
        pass

    def save_object(self, object, name, path="/local_vars/"):
        if not os.path.exists(os.getcwd() + path + name):
            f = open(os.getcwd() + path + name, "w")
            f.close()
        with open(os.getcwd() + path + name, "wb") as f:
            pickled = pickle.dumps(object)
            pickle.dump(pickled, f)

    def load_object(self, name, path="/local_vars/"):
        with open(os.getcwd() + path + name, "rb") as f:
            pickled = pickle.load(f)
            return pickle.loads(pickled)
        return None

    def load_object_exists(self, name, path="/local_vars/"):
        if os.path.exists(os.getcwd() + path + name):
            try:
                return self.load_object(name)
            except:
                print("Loading", name, "went wrong")
        return None
   
    def append_line(self, filepath, line):
        with open(filepath, "a+") as f:
            f.write(line)

    def read_line_seperated_file(self, filepath):
        res = []
        with open(filepath, "r") as f:
            for l in f:
                res.append(l.strip())
        return res

    def combine_file_contents(self, file_paths, no_duplicates=True):
        output_name, content = "", ""

        if len(file_paths) > 0:
            output_name = file_paths[0]
            if no_duplicates:
                content = set()
            else:
                content = open(output_name, "r").read()

        print("Combining files", file_paths, "file output name", output_name)

        for file_path in file_paths:
            file_content = open(file_path, "r").read()
            
            with open(file_path, "r") as f:
                count, total = 0, file_content.count("\n")
                for l in f:
                    print(count / total, end="\r")
                    # print(l)
                    count += 1
                    if no_duplicates:
                        content.add(l)
                    else:
                        content += l
        if no_duplicates:
            with open(output_name, "w") as f:
                for l in list(content):
                    # print(l)
                    f.write(l)
        else:
            with open(output_name, "w") as f:
                f.write(content)
    
    def zip_file(path, content):
        with gzip.open(path, 'wb', encoding='UTF-8') as zipfile:
            zipfile.write(content)

    def unzip_file(path):
        content = ""
        if os.path.exists(path):
            with gzip.open(path, 'rb', encoding='UTF-8') as zipfile:
                content = zipfile.read()
        return content

    def get_lines_from_file(file_path, line, starts_with=False):
        res = []
        with open(file_path, "r") as f:
            for l in f:
                if starts_with:
                    if l.startswith(line):
                        res.append(l.strip())
                elif line in l:
                    res.append(l.strip())
        return res
            

class DataAggregator:
    def __init__(self) -> None:
        self.file_interactor = FileInteractor()
        pass

    def string_csv_to_usb(self, string):
        return string.replace("-", "_")

    def string_usb_to_csv(self, string):
        return string.replace("_", "-").split(".zip")[0].split(" ")[0]

    def get_list_comma_seperated_line(line, sep=";"):
        lis = line.split(";")[1].strip("[]").split(",")
        lis = [str(x.strip().strip("'")) for x in lis]
        return line.split(";")[0], lis
    
    def get_features_from_file(self, path, return_json=False):
        if not os.path.exists(path):
            raise Exception("Path doesnt exist", path)

        file_handle = open(path)
        try:
            json_content = json.load(file_handle)
        except Exception as e:
            try:
                file_handle.close()
                file_handle = open(path, encoding='utf-8-sig')
                json_content = json.load(file_handle)
            except Exception as e2:
                print("error loading json 2", path)
                print(e2)
                raise Exception("error loading json")
            # pass
        if return_json:
            return json_content
        res = [(key, 1) if json_content[key] else (key, 0) for key in json_content]
        return res

    def get_line_file(self, substring, csv_file, starts_with=False, multiple=False):
        # with open(csv_file, "r") as f:
        # print("getting", substring, "from", csv_file)
        res = []
        content = open(csv_file, "r").read()
        for l in content.split("\n"):
            if not multiple:
                if not starts_with and substring in l:
                    return l
                elif l.startswith(substring):
                    return l
            else:
                if substring in l:
                    res.append(l)
        if multiple:
            return res

    def get_frameworks_wappalyzer(self, wappalyzer_folders, valid_websites):
        total = {}
        present = set()
        black_list = []
        with open(wappalyzer_folders[0] + "wappalyzer_template.csv", "r") as f:
            for l in f:
                if len(black_list) == 0:
                    for item in l.split(","):
                        black_list.append(item.strip('"'))
                    break
        black_list += ["technologieën", "more info", "statistiektool", "google analytics",\
                       "javascript-bibliotheken", "load balancer", "programmeertaal",\
                       "tagmanager", "javascript framework", "export", "ontwikkelingstool",\
                       "diverse", "lettertypescript", "database", "Outil de suivi de problèmes",\
                       "generate sales leads", "Find new prospects",\
                       "create a lead list", "ui-frameworks", "widget", "reclamebureau", "google tag manager",\
                       "php", "google remarketing tag", "google font api", "mysql", "enrich your data with",\
                       "automate technology lookups", "cloudflare", "wordpress", "cloudflare network",\
                       "godaddy", "upload a list", "font awesome", "wappalyzer for businesses", "see all apps",\
                       "our apis provide instant access", "google ads conversion", "nginx", "webpack", "node.js",\
                       "jquery ui", "apache", "swiper slider", "nuxt.js", "compare apis", "jsdelivr",\
                       "sentry", "firebase", "recaptcha", "amazon web services", "yandex.metrika", "owl carousel",\
                       "google hosted libraries", "elementor", "onesignal", "choices", "vimeo",\
                       "amazon cloudfront", "babel", "google optimize", "site kit", "xenforo",\
                       "hotjar", "plesk", "Sign up for a plan", "compare plans"]
        print(black_list)

        valid_websites = set(valid_websites)
        for wappalyzer_folder in wappalyzer_folders:
            for _, _, files in os.walk(wappalyzer_folder):
                for file in files:
                    current_frameworks = []
                    with open(wappalyzer_folder + file, "r") as f:
                        framework_present = False
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

        # i = 0
        # most_freq = {}

        # while i <= 20:
        #     if not total:
        #         break
        #     most_occurring = max(total.items(), key=operator.itemgetter(1))[0]
        #     print(i, most_occurring, total[most_occurring])
        #     del total[most_occurring]
        #     i += 1
        # print(total)
        return total

    def hasNumbers(self, inputString):
        return any(char.isdigit() for char in inputString)

    def get_frameworks_whatruns(self, whatruns_folders, valid_websites, total={}):
        count, small_content_count = 0, 0
        empty_whatruns, big_files, small_files, site_mismatch, non_empty, correct_files = [], [], [], [], set(), []
        
        no_duplicate_websites = []
        with open(os.getcwd() + "/no_dup_websites_final.txt", "r") as f:
            for l in f:
                no_duplicate_websites.append(l.strip())
        present, not_present = set(), []
        no_check = []
        black_list = ["Analytics", "Miscellaneous", "Advertising", "Sales and Marketing",\
                                                     "Javascript Graphics", "Programming Language", "Payment Processors",\
                                                     "Build CI Systems", "Maps", "Hosting Panel", "Search Engine",\
                                                     "Communication", "Font Script", "Web Server", "Web Server",\
                                                     "Operating System", "Rich Text Editors", "Dev Tools", "Cache",\
                                                     "Tag Managers", "Javascript Frameworks", "CDN",\
                                                     "Website Toolbox", "Affiliate Networks", "Awin"]
        for valid_site in valid_websites:
            print("processed whatruns", count / len(valid_websites), end="\r")
            count += 1
            for whatruns_folder in whatruns_folders:
                # print("whatruns folder", whatruns_folder)
                if valid_site in present:
                    break
                for _, _, files in os.walk(whatruns_folder):
                    if valid_site in present:
                        break
                    for file in files:
                        if valid_site in present:
                            break

                        if valid_site in self.string_usb_to_csv(file):
                            present.add(valid_site)
                        else:
                            continue
                        skip, temp = False, []
                        framework = False
                        if os.stat(whatruns_folder + file).st_size > 2000:
                            big_files.append(file.split(".txt")[0])
                            skip = True
                        elif os.stat(whatruns_folder + file).st_size < 100:
                            small_files.append(file.split(".txt")[0])
                            small = True
                            skip = True
                        elif os.stat(whatruns_folder + file).st_size > 100:
                            while file.split(".txt")[0] in small_files:
                                small_files.remove(file.split(".txt")[0])
                        with open(whatruns_folder + file, "r") as f:
                            if file.split(".txt")[0] in non_empty:
                                continue
                            res = ""
                            empty = False
                            for l in f:
                                l = l.strip()
                                if "What runs " + file.split(".txt")[0].split("www.")[0] in l:
                                    if os.stat(whatruns_folder + file).st_size > 25:
                                        if file.split(".txt")[0] not in correct_files:
                                            correct_files.append(file.split(".txt")[0])
                                    if file.split(".txt")[0] in big_files:
                                        print("What runs " + file.split(".txt")[0].split("www.")[0] in l)
                                        big_files.remove(file.split(".txt")[0])
                                elif "What runs ?" in l:
                                    skip = True
                                    break

                                if l:
                                    if "web framework" in l.lower():
                                        framework = True
                                        continue
                                    elif framework:
                                        if l not in black_list and "framework" not in l.lower() and "frameworks" not in l.lower():
                                            temp.append(l)
                                        else:
                                            break

                                    if "What runs ?" in l:
                                        empty = True
                                        if file.split(".txt")[0] not in empty_whatruns:
                                            if file.split(".txt")[0] not in non_empty:

                                                if "overbo" in file:
                                                    print("overbo empty", whatruns_folder)
                                                empty_whatruns.append(file.split(".txt")[0])
                                        break
                                    non_empty.add(file.split(".txt")[0])
                                    while file.split(".txt")[0] in empty_whatruns:
                                        empty_whatruns.remove(file.split(".txt")[0])
                                    while file.split(".txt")[0] in site_mismatch:
                                        site_mismatch.remove(file.split(".txt")[0])
                                if not skip:
                                    for l in temp:
                                        if l in total:
                                            total[l] += 1
                                        else:
                                            total[l] = 1
                                else:
                                    if valid_site in present:
                                        present.remove(valid_site)
        print("whatruns total", total, len(present), len(not_present))
        remaining_set = set(valid_websites)
        remaining_set.difference_update(set(present))
        print("remaining set", len(remaining_set), list(remaining_set)[:20])
        print("small files", len(small_files), small_files[:3], "big files", len(big_files), big_files[:3])
        i = 0
        most_freq = {}
        while len(most_freq) != 100:
            if not total:
                break
            most_occurring = max(total.items(), key=operator.itemgetter(1))[0]

            if most_occurring in ["Javascript Frameworks", "Analytics", "Tag Managers", "Web Server", "Web Framework", "Conectar",\
                                  "Advertising", "Programming Language", "Font Script", "Widgets", "CDN", "Miscellaneous", "Contraseña",\
                                  "Sales and Marketing", "buscar personas, #hashtags, @páginas,! Grupos", "COSTARRICENSES",\
                                  "Conéctese con amigos, familiares y el mundo que lo rodea.", "Ponte en contacto con tu familia, amigos o el mundo que te rodea.",\
                                  "Compartir", "Comparta los momentos importantes de su vida con sus seres queridos.",\
                                  "Descubrir", "Descubre gente nueva, crea nuevas conexiones y haz nuevos amigos.",\
                                  " Nombre de usuario o correo electrónico", "Recuérdame", "INICIAR SESIÓN¿Olvidó su contraseña?",\
                                  "Nombre de usuario", "Correo electrónico", "Nombre de usuario o correo electrónico",\
                                  "Estoy de acuerdo con Condiciones de uso y .", "REGISTRARSE",\
                                  "Costarricenses.cr es un proyecto oficial de AxiRED Internet Solutions Company, S.A.", "Involúcrese al WhatsApp  70 54 82 11",\
                                  "Copyright © 2021 por AxiRED | La agencia de publicidad", "Ingeniería web por los mejores, Ingeniería web por ZARZA.",\
                                  "Javascript Graphics", "Cache", "Build CI Systems", "Operating System", "CMS", "Captcha", "Dev Tools", "Communication",\
                                  "Video", "Ruby on Rails 6.0.2", "Ruby on Rails 6.0.4", "JavaServer Pages 2.2", "JavaServer Pages 2.3", "Website Toolbox", "Web Server Extensions"]:
                del total[most_occurring]
                continue
            
            print(i, most_occurring, total[most_occurring])

            i += 1
            if self.hasNumbers(most_occurring):
                # if "Ruby on Rails" in most_occurring:
                key = ""
                for part in most_occurring.split(" "):
                    if not self.hasNumbers(part):
                        key += part + " "
                key = key.strip()
                if key in most_freq:
                    most_freq[key] += total[most_occurring]
                else:
                    most_freq[key] = total[most_occurring]
            else:
                key = most_occurring
                if key in most_freq:
                    most_freq[key] += total[key]
                else:
                    most_freq[key] = total[key]
            del total[most_occurring]
        i = 1
        self.file_interactor.save_object(most_freq, "most_frequent_whatruns_frameworks")
        for key in most_freq:
            print("Whatruns most frequent", i, key, most_freq[key])
            if i == 20:
                break
            i += 1
                
    def check_non_kb_size_web_app():
        usb_folder = "/media/jesse/USB641/"
        temp_output_folder = "/home/jesse/Documents/temp_usb/"
        missing_sizes_txt_path = os.getcwd() + "/local_vars/missing_sizes.txt"
        if not os.path.exists(missing_sizes_txt_path):
            f = open(missing_sizes_txt_path, "w")
            f.close()
        extract = tldextract.TLDExtract()
        size_dict = FileInteractor.load_object("size_dict")

        no_duplicate_websites = []
        with open(os.getcwd() + "/no_dup_websites_final.txt", "r") as f:
            for l in f:
                no_duplicate_websites.append(l.strip())
        
        loc_sites = {}
        with open(os.getcwd() + "/CSVs/websiteLOC.csv", "r") as f:
            first = True
            for l in f:
                if first:
                    first = False
                    continue
                l = l.strip()
                if ", " in l:
                    l = l.split(", ")
                else:
                    l = l.split(",")
                ext = extract(l[0])
                l[0] = ext.domain + "." + ext.suffix
                if l[0] in loc_sites and l[1:] != loc_sites[l[0]]:
                    new_count = l.count("0") + l.count("0.0")
                    if loc_sites[l[0]].count("0") + loc_sites[l[0]].count("0.0") > new_count:
                        # print(l, len(loc_sites), loc_sites[l[0]], new_count, loc_sites[l[0]].count("0") + loc_sites[l[0]].count("0.0"))
                        loc_sites[l[0]] = l[1:]
                    # exit(0)
                loc_sites[l[0]] = l[1:]
        
        # usb_sites = []
        # for path, dirs, files in os.walk("/media/jesse/USB64/"):
        #     for file in files:
        #         usb_sites.append(file)
        #     for dir in dirs:
        #         usb_sites.append(dir)
        # save_object(usb_sites, "usb_sites")

        usb_sites = load_object("usb_sites")
        temp = {}
        for site in usb_sites:
            temp[site] = True
        usb_sites = temp
        print(len(usb_sites))

        missing_sizes_from_usb = {}
        if os.path.exists(missing_sizes_txt_path):
            with open(missing_sizes_txt_path, "r") as f:
                for l in f:
                    splitted = l.split(";")
                    splitted = [s.strip() for s in splitted]
                    missing_sizes_from_usb[splitted[0]] = splitted[1:]
        # missing_sizes_from_usb = load_object("missing_sizes_from_usb")
        print("missing sizes len", len(missing_sizes_from_usb), "loc sites len", len(loc_sites))
        c = 0
        for site in missing_sizes_from_usb:
            print(site, missing_sizes_from_usb[site], end=" ")
            if c == 20:
                break
            c += 1
        # for site in loc_sites:
        #     first = True
        #     for val in loc_sites[site]:
        #         if not first:
        #             if int(float(val)) == 0:
        #                 print(site, loc_sites[site])
        #                 break
        #         first = False

        present_sites, not_present_sites = {}, {}
        c, length = 0, len(loc_sites)
        zeros = {}
        for site in loc_sites:
            # print(site)
            # signal.signal(signal.SIGINT, signal_handler)
            if DataAggregator.string_usb_to_csv(site) in missing_sizes_from_usb:
                zeroes = [x == '0' for x in missing_sizes_from_usb[DataAggregator.string_usb_to_csv(site)]]
                print(site, zeroes, missing_sizes_from_usb[DataAggregator.string_usb_to_csv(site)])
                if True not in zeroes:
                # print("skipping", site)
                # exit(0)
                    c += 1
                    continue
            # print(string_usb_to_csv(site), string_usb_to_csv(site) in missing_sizes_from_usb)
            # exit(0)
            # site = "imagimake.com"
            # if int(float(loc_sites[site][0])) == 0:
            # for val in loc_sites[site]:
            #     if int(float(val)) == 0:
            size, html_count, css_count, js_count = 0, 0, 0, 0                        
            missing_usb_length = len(missing_sizes_from_usb)
            site = DataAggregator.string_csv_to_usb(site)
            for usb_site in usb_sites:

            # if usb_site in not_present_sites or usb_site in present_sites:
            #     c += 1
            #     continue
                # if samplesite in usb_site and samplesite in site.replace("_", "-"):
                #     print("found samplesite", samplesite, usb_site, site)
                # site = "mtruapehu.com"
                if site in usb_site:
                    unzip_output = None
                    print("site", site, "usb site", usb_site)
                    try:
                        usb_site = DataAggregator.string_csv_to_usb(usb_site)
                        # subprocess.check_output("mv " + website_folder + website + " " + website_folder + "b", shell=True)
                        if os.path.exists(usb_folder + usb_site.split(".zip")[0]) or os.path.exists(usb_folder + site):
                            existing_folder = ""
                            if os.path.exists(usb_folder + site):
                                existing_folder = site
                            else:
                                existing_folder = usb_site.split(".zip")[0]
                            for subdir, _, files in os.walk(temp_output_folder + "/b"):
                                for file in files:
                                    size += os.path.getsize(subdir + "/" + file)
                            if size != 0:
                                subprocess.check_output("rm -rf " + temp_output_folder + "b", shell=True)
                                size = 0
                            if not os.path.exists(temp_output_folder + "b"):
                                os.mkdir(temp_output_folder + "b")
                            subprocess.check_output("cp -r " + usb_folder + existing_folder + " " + temp_output_folder + "b", shell=True)
                        else:
                            # print("blegh")
                            unzip_output = subprocess.check_output("unzip -o " + usb_folder + usb_site + " -d " + temp_output_folder + "b", shell=True, stderr=subprocess.STDOUT)
                        # exit(0)
                    except subprocess.CalledProcessError as e:
                        print("unzipping failed, removing", site)
                        for subdir, _, files in os.walk(temp_output_folder + "/b"):
                            for file in files:
                                size += os.path.getsize(subdir + "/" + file)
                        if size == 0:
                            print("size zero", site)
                            exit(0)
                        size = 0
                    try:
                        print("running ohcount for", site, usb_site)
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
                    except Exception as e:
                        print("ohcount failed for", site)
                        exit(0)
                        # if unzip_output != None:
                            # unzip_output = unzip_output.decode()
                            # print("unzip output", unzip_output, "unzip output")
                        # print(e.stdout , "hoi")
                        # if not "File name too long\n" in e.stdout.decode():
                        #     print("returncode", e.returncode, "File name too long\n" in e.stdout.decode(), e.stdout)
                        #     exit(0)

                    for subdir, _, files in os.walk(temp_output_folder + "/b"):
                        for file in files:
                            size += os.path.getsize(subdir + "/" + file)
                    # print(site, loc_sites[string_usb_to_csv(site)], [size, html_count, css_count, js_count])
                    if size == 0:
                        subprocess.check_output("rm -rf " + temp_output_folder + "b", shell=True)
                        exit(0)
                    subprocess.check_output("rm -rf " + temp_output_folder + "b", shell=True)

                    FileInteractor.append_line(missing_sizes_txt_path, f'{DataAggregator.string_usb_to_csv(site)};{size};{html_count};{css_count};{js_count}\n')
                    missing_sizes_from_usb[DataAggregator.string_usb_to_csv(site)] = [size, html_count, css_count, js_count]
                    FileInteractor.save_object(missing_sizes_from_usb, "missing_sizes_from_usb")
                    # exit(0)
                    break

            # if len(missing_sizes_from_usb) == missing_usb_length:
            #     print(site, "missing size and not present usb")
            # break

            if site not in zeros:
                zeros[site] = True
            else:
                print("zero already present")
            # if samplesite in site:
                # print("loc only size zero", samplesite, site, int(float(loc_sites[site][0])))
            # if site not in size_dict:

            site = DataAggregator.string_csv_to_usb(site)
            present = False
                
            c += 1
        print("missing sizes from usb len", len(missing_sizes_from_usb))
    
    def get_col_csv(self, filepath, col_index, sep=";"):
        if type(col_index) == str:
            with open(filepath, "r") as f:
                for l in f:
                    temp = l.split(sep)
                    splitted = []
                    for item in temp:
                        splitted.append(item.strip())
                    col_index = splitted.index(col_index)
                    break
        temp = []
        with open(filepath, "r") as f:
            for l in f:
                l = l.strip()
                temp.append(l.split(sep)[col_index])
        return np.array(temp)

    def check_csv_col_zero(filepath, col_index, sep=";"):
        if type(col_index) == str:
            with open(filepath, "r") as f:
                for l in f:
                    temp = l.split(sep)
                    splitted = []
                    for item in temp:
                        splitted.append(item.strip())
                    print("l", l, splitted)
                    col_index = splitted.index(col_index)
                    break
        col = DataAggregator.get_col_csv(filepath, col_index, sep)
        col = np.delete(col, 0)
        col = np.array(col).astype(float)
        return (col == 0).nonzero()[0]

    def create_non_kb_size_webapps():
        no_duplicate_websites = []
        with open(os.getcwd() + "/no_dup_websites_final.txt", "r") as f:
            for l in f:
                no_duplicate_websites.append(l.strip())

        website_folder = "/media/jesse/USB64/"
        temp_output_folder = "/home/jesse/Documents/temp_usb/"
        # temp_output_folder = "/"
        size_dict = FileInteractor.load_object("size_dict")
        for subfolder, _, files in os.walk(website_folder):
            for website in files:
                if website.split(".zip")[0] in no_duplicate_websites and (website not in size_dict or size_dict[website] == 0):
                    print("handling", website)
                    if website.endswith(".zip"):
                        # print("files", file, subfolder)
                        # file = file.split(".zip")[0]
                        # ext = extract(file)
                        # if not ext.domain in webs_dic:
                            # webs_dic[ext.domain] = [ext.suffix]
                        # else:
                            # webs_dic[ext.domain].append(ext.suffix)    if website in no_duplicate_websites:
                        try:
                            # subprocess.check_output("7z e " + website_folder + website + "  -o/home/jesse/Documents/temp_usb -aoa", shell=True)
                            subprocess.check_output("unzip -o " + website_folder + website + " -d " + "/home/jesse/Documents/temp_usb", shell=True)
                        except:
                            print("extraction had error")
                        size = 0
                        for path, dirs, files in os.walk("/home/jesse/Documents/temp_usb"):
                            for f in files:
                                fp = os.path.join(path, f)
                                size += os.stat(fp).st_size
                        # subprocess.check_output("unzip -j -o " + website_folder + website + " -d " + "b", shell=True)
                        # size = os.stat("/home/jesse/Documents/temp_usb").st_size
                        # size = os.path.getsize("/home/jesse/Documents/temp_usb")
                        subprocess.check_output("rm -rf " + "/home/jesse/Documents/temp_usb", shell=True)
                        print("zip size", size)
                    else:
                        size = os.stat(website_folder + website).st_size
                        print("no zip", size)
                        exit(0)
                    size_dict[website.split(".zip")[0]] = size
                    FileInteractor.save_object(size_dict, "size_dict")

    def check_non_kb_size_sw():
        extract = tldextract.TLDExtract()

        no_duplicate_websites = []
        with open(os.getcwd() + "/no_dup_websites_final.txt", "r") as f:
            for l in f:
                no_duplicate_websites.append(l.strip())
        
        loc_sites = {}
        with open(os.getcwd() + "/CSVs/filtered_data.csv", "r") as f:
            first = True
            for l in f:
                if first:
                    first = False
                    continue
                l = l.strip()
                if ";" in l:
                    l = l.split(";")
                else:
                    l = l.split(",")
                ext = extract(l[0])
                l[0] = ext.domain + "." + ext.suffix
                if l[0] in loc_sites and l[1:] != loc_sites[l[0]]:
                    new_count = l.count("0") + l.count("0.0")
                    if loc_sites[l[0]].count("0") + loc_sites[l[0]].count("0.0") > new_count:
                        print(l, len(loc_sites), loc_sites[l[0]], new_count, loc_sites[l[0]].count("0") + loc_sites[l[0]].count("0.0"))
                        loc_sites[l[0]] = l[1:]
                    # exit(0)
                loc_sites[l[0]] = l[1:]
        count = 0 
        for site in loc_sites:
            # print(site, loc_sites[site])
            if int(float(loc_sites[site][1])) == 0:
                for val in loc_sites[site]:
                    if int(float(val)) == 0:
                        count += 1
                        print("site zero size sw", site)
                        break
        print(count)

    def strip_events(line):
        events = []
        event_start = 0
        listener = "addeventlistener"
        event_start = line.find(listener, event_start)
        while True:
            if event_start == -1:
                break

            event_start = event_start + len(listener) + 1

            if event_start + 1 <= len(line):
                event_end = line.find(line[event_start], event_start + 1)
            else:
                break
            if line[event_start:event_end] and event_start + 1 != event_end:
                events.append(line[event_start + 1:event_end])
            
            event_start = line.find(listener, event_start + 1)

        return events

    def get_file_events(file_content):
        events = []
        # file_content = jsbeautifier.beautify(file_content)
        for l in file_content.split("\n"):
            l = l.lower()
            # print("line", l)
            # if len(l) > 150:
            #     # print("file event l", l)
            #     l = jsbeautifier.beautify(l.lower())
            events_check = ["install", "activate", "message", "fetch", "sync", "push", "notificationclick", "notificationclose", "canmakepayment", "paymentrequest", "message", "messageerror"]
            # for event_check in events_check:
            if "addeventlistener" in l:
                potential_events = DataAggregator.strip_events(l)
                for event in potential_events:
                    if event in events_check:
                        events.append(event)
                # print(OKGREEN, "event line", sub_l, "'start","end'", sub_l.split("addeventlistener"), ENDC)
                    
        return events

class WebAppPostProcessor:
    def __init__(self) -> None:
        self.print_green = Output().print_green
        self.file_interactor = FileInteractor()
        self.data_aggregator = DataAggregator()
        pass

    def get_incorrect_resources(self, webapp_base_folder, ext=".html", valid_sw_paths={}):
        incorrect_resources = self.file_interactor.load_object_exists("incorrect_resources_sites2") or set()
        missing_sites_zip = self.file_interactor.load_object_exists("missing_sites_zip")
        incorrect_resources = set()

        not_present = set()
        for subdir, _,files in os.walk(webapp_base_folder):
            if subdir == webapp_base_folder:
                for file in files:
                    site = self.data_aggregator.string_usb_to_csv(file.split(" ")[0].split(".zip")[0])
                    if site.startswith("www."):
                        site = site[4:]
                    if site in valid_sw_paths:
                        if site in file:
                            with zipfile.ZipFile(os.path.join(subdir, file), 'r') as zip_ref:
                                for zfile in zip_ref.namelist():
                                    if site in incorrect_resources:
                                        break
                                    if zfile.endswith(ext) and site in zfile:
                                        zfile_info = zip_ref.getinfo(zfile)
                                        # print(zfile_info.file_size, zfile_info.compress_size)
                                        # with open(os.path.join(zip_ref, zfile), "r") as f:
                                        if zfile_info.file_size < 50000:

                                            content = zip_ref.read(zfile)
                                            if b"No content" in content or b"GIF89" in content:
                                                # print(file, site)
                                                print(site, zfile)
                                                incorrect_resources.add(site)
                                                break
                            print(len(incorrect_resources), files.index(file), len(not_present), end="\r")
                    else:
                        # print(site, "not present")
                        not_present.add((site, file))
            # else:
                # TODO
                # unzipped files in folders

        self.file_interactor.save_object(incorrect_resources, "incorrect_resources_sites")
        return incorrect_resources, not_present
        # print("not present", list(not_present)[:20])
    
    def get_webapp_results(self, final_webapp_paths, pwa_results_csv_file):
        with open(pwa_results_csv_file, "w") as f:
            f.write("website;size;html;css;js\n")

        for webapp in final_webapp_paths:
            print("path", final_webapp_paths[webapp])
            if final_webapp_paths[webapp].endswith(".zip"):
                # print("got zip")
                size, html_count, css_count, js_count, truth = web_app_post_processor.run_pwa_loc(final_webapp_paths[webapp])
            else:
                # print("got non zip")
                size, html_count, css_count, js_count, truth = web_app_post_processor.run_pwa_loc(final_webapp_paths[webapp], zipped=False)
            # file_interactor.append_line(pwa_results_csv_file, f'{webapp};{size};{html_count};{css_count};{js_count}\n')

    def run_pwa_loc(self, path, zipped=True):
        print("running pwa loc for", path, zipped, ".zip" in path, os.path.exists(path), os.stat(path) != 0)
        temp_output_folder = "/home/jesse/Documents/temp_usb/b"
        subprocess.check_output("rm -rf " + temp_output_folder, shell=True)
        os.mkdir(temp_output_folder)
            # if not ".zip" in path and os.path.exists(path) and os.stat(path) != 0:
        if not zipped:
            shutil.move(path, temp_output_folder)
            print("zip not needed")
        else:
            try:
                subprocess.check_output("unzip -o '" + path + "' -d " + temp_output_folder, shell=True, stderr=subprocess.STDOUT)
            except Exception as e:
                print("unzipping failed")
                size = 0
                for subdir, _, files in os.walk(temp_output_folder):
                    for file in files:
                        size += os.path.getsize(subdir + "/" + file)
                if size == 0:
                    print("big fail unzipping", path, "cmd unzip -o " + path + " -d " + temp_output_folder)
                    print(e)
                    return 0,0,0,0,False
                    exit(0)
            # subprocess.check_output("cp -r " + path + " " + temp_output_folder, shell=True)
        subdirs = [f for f in os.listdir(temp_output_folder) if os.path.isdir(os.path.join(temp_output_folder, f))]
        if len(subdirs) == 1:
            if "_DataURI" in subdirs:
                print(path, "datauri")
        subprocess.check_output("rm -rf " + temp_output_folder, shell=True)
        return 0, 0, 0, 0, True
        html_count, css_count, js_count, size = 0, 0, 0, 0
        output = subprocess.check_output("ohcount -i " + temp_output_folder, shell=True)
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
                else:
                    if "Examing" not in l and "Ohloh Line Count" not in l and "-------------" not in l and "Comment \%" not in l and "Language" not in l:
                        print("other ohcount", path, l)
        
        for subdir, _, files in os.walk(temp_output_folder):
            for file in files:
                size += os.path.getsize(subdir + "/" + file)
        subprocess.check_output("rm -rf " + temp_output_folder, shell=True)
        
        return size, html_count, css_count, js_count, True

    def get_usb_sites(self, webapp_base_folder):
        usb_sites = set()
        extract = tldextract.TLDExtract()
        # print("os listdir", os.listdir(webapp_base_folder))
        usb_files = [f for f in os.listdir(webapp_base_folder) if os.path.isfile(os.path.join(webapp_base_folder, f)) and ".zip" in f]
        for file in usb_files:
            if file.endswith(".zip"):
                file = file[:-4]
                # print(file)
            file = self.data_aggregator.string_usb_to_csv(file)
            ext = extract(file)
            usb_sites.add(ext.domain + "." + ext.suffix)

        usb_folders = [f for f in os.listdir(webapp_base_folder) if os.path.isdir(os.path.join(webapp_base_folder, f))]
        for folder in usb_folders:
            folder = self.data_aggregator.string_usb_to_csv(folder)
            ext = extract(folder)
            usb_sites.add(ext.domain + "." + ext.suffix)

        return usb_sites

    def get_final_webapp_paths(self, webapp_base_folder, final_sw_paths):
        extract = tldextract.TLDExtract()
        final_webapp_paths = self.file_interactor.load_object_exists("final_webapp_paths") or {}
        final_webapp_paths = {}
        if len(final_webapp_paths) == 0:
            webapp_path_mapping = {}
            for f_d in os.listdir(webapp_base_folder):
                f_d_splitted = f_d.split(" ")[0]
                if f_d_splitted.endswith(".zip"):
                    f_d_splitted = f_d_splitted[:-4]
                f_d_splitted = self.data_aggregator.string_usb_to_csv(f_d_splitted)
                ext = extract(f_d_splitted)
                webapp_path_mapping[ext.domain + "." + ext.suffix] = os.path.join(webapp_base_folder, f_d)
                if not os.path.exists(os.path.join(webapp_base_folder, f_d)):
                    print(os.path.join(webapp_base_folder, f_d), "doesnt exist")
                    exit(0)

            for site in final_sw_paths:
                ext = extract(site)
                if ext.domain + "." + ext.suffix in webapp_path_mapping:
                    final_webapp_paths[ext.domain + "." + ext.suffix] = webapp_path_mapping[ext.domain + "." + ext.suffix]
            file_interactor.save_object(final_webapp_paths, "final_webapp_paths")
        return final_webapp_paths

    def get_small_indexes(self, path):
        import time
        temp_folder = "/home/jesse/c/"
        no_content_output_path = os.getcwd() + "/local_vars/no_content_present.txt"
        # handled_output_path = os.getcwd() + "/local_vars/no_content_handled.txt"
        if not os.path.exists(temp_folder):
            os.mkdir(temp_folder)
        print(os.path.exists(temp_folder))
        # return
        handled = self.file_interactor.load_object_exists("no_content_handled") or set()
        no_content = self.file_interactor.load_object_exists("no_content") or set()

        for subdir, _, files in os.walk(path):
            # print(path, subdir)
            # time.sleep(0.5)
            if subdir == path:
                for file in files:
                    if file.endswith(".zip"):
                        file_site = file.split("/")[-1][:-4]
                        if file_site in handled or file_site in no_content:
                            continue
                    # self.print_green(subdir + " zip found " + file)
                    if file.endswith(".zip"):
                        # continue
                        
                        try:
                            shutil.rmtree(temp_folder)
                            os.mkdir(temp_folder)
                            big_index_found = False
                            small_content = ""
                            with zipfile.ZipFile(os.path.join(subdir, file), 'r') as zip_ref:
                                zip_ref.extractall(temp_folder)
                                for zipfolder, _, zipfiles in os.walk(temp_folder):
                                    for zfile in zipfiles:
                                        if not big_index_found:
                                            if ".html" in zfile and ".js" not in zfile:
                                                if os.stat(os.path.join(zipfolder, zfile)).st_size < 200:
                                                    content = open(os.path.join(zipfolder, zfile), "r").read()
                                                    small_content += content + "\n"
                                                else:
                                                    big_index_found = True
                            # if not big_index_found:
                            if "No Content" in small_content:
                                print("No content present", file)
                                no_content.add(file_site)
                                # self.file_interactor.append_line(no_content_output_path, "No content present " + str(file_site) + "\n")
                            handled.add(file_site)
                            # self.file_interactor.append_line(handled_output_path, "Handled " + str(subdir.strip(path).split("/")[0]) + "\n")
                        except Exception as e:
                            print("unzipping went wrong", file)
                            print(e)
                    else:
                        print("file unhandled", file)

                    self.file_interactor.save_object(handled, "no_content_handled")
                    self.file_interactor.save_object(no_content, "no_content")

            else:
                big_index_found = False
                small_content = ""
                subdir_site = subdir.strip(path).split("/")[0]
                if subdir_site in handled or subdir_site in no_content:
                    continue
                # continue
                for file in files:
                    if ".html" in file and ".js" not in file:
                        if os.stat(os.path.join(subdir, file)).st_size < 200:
                            content = open(os.path.join(subdir, file), "r").read()
                            small_content += content + "\n"
                        else:
                            big_index_found = True
                if "No content" in small_content or "GIF89" in small_content:
                    print("No content present", subdir)
                    no_content.add(subdir_site)
                    # self.file_interactor.append_line(no_content_output_path, "No content present " + str(subdir_site) + "\n")
                handled.add(subdir_site)
                # self.file_interactor.append_line(handled_output_path, "Handled " + str(subdir_site) + "\n")
            self.file_interactor.save_object(handled, "no_content_handled")
            self.file_interactor.save_object(no_content, "no_content")

class SWPostProcessor:
    def __init__(self) -> None:
        self.file_interactor = FileInteractor()
        self.print_green = Output().print_green
        self.print_red = Output().print_fail
        self.data_aggregator = DataAggregator()
        self.url_interactor = SW_processor.URLInteractor()
        self.webapp_post_processor = WebAppPostProcessor()
    
    def run_ylt(self, website, output_paths):
        # if not output_path.endswith("/"):
        #     output_path += "/"
        # if not output_path.startswith("/"):
        #     output_path = "/" + output_path
        print("running ylt", website)
        second_path = "/media/jesse/second_linux/Scores/yellowlabtools"
        output_path = output_paths[-1]
        # print(os.path.join(output_path, website)[:-1] + ".json", os.path.join(second_path, "www."+ website)[:-1] + ".json", os.stat(os.path.join(output_path, website)[:-1] + ".json"))
        if os.path.exists(os.path.join(second_path, website)[:-1] + ".json"):
            print(os.stat(os.path.join(second_path, website)[:-1] + ".json").st_size)
        elif os.path.exists(os.path.join(second_path, "www." + website)[:-1] + ".json"):
            print(os.stat(os.path.join(second_path, "www." + website)[:-1] + ".json").st_size)
        elif os.path.exists(os.path.join(output_path, website)[:-1] + ".json"):
            print(os.stat(os.path.join(output_path, website)[:-1] + ".json").st_size > 0)
        elif os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json"):
            print(os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json").st_size > 0)

        for output_path in output_paths:
            if os.path.exists(os.path.join(output_path, website)[:-1] + ".json") and os.stat(os.path.join(output_path, website)[:-1] + ".json").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json") and os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json").st_size > 0:
                return True
            if os.path.exists(os.path.join(second_path, website)[:-1] + ".json") and os.stat(os.path.join(second_path, website)[:-1] + ".json").st_size > 0:
                return True
            if os.path.exists(os.path.join(second_path, "www." + website)[:-1] + ".json") and os.stat(os.path.join(second_path, "www." + website)[:-1] + ".json").st_size > 0:
                return True
        try:
            subprocess.check_output("yellowlabtools --reporter=json " + "https://" + website + " > " + os.path.join(output_path, website) + ".json", shell=True, timeout=60)
            # compress_json_file(output_path + website + ".json")
            compress_json_file(os.path.join(output_path, website) + ".json")
        except:
            print("ylt failed for", website)
            self.remove_and_compress_json(output_path, ext=".gz")
            return False
        self.remove_and_compress_json(output_path, ext=".gz")

        return True

    def run_lighthouse(self, website, output_paths):
        output_path = output_paths[-1]

        for output_path in output_paths:
            if os.path.exists(os.path.join(output_path, website)[:-1] + ".json") and os.stat(os.path.join(output_path, website)[:-1] + ".json").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json") and os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, website)[:-1] + ".json.gz") and os.stat(os.path.join(output_path, website)[:-1] + ".json.gz").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json.gz") and os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json.gz").st_size > 0:
                return True
        try:
            subprocess.check_output("lighthouse --chrome-flags='--headless' " + "https://" + website + " --preset=desktop --output=json --output-path=" + output_path + website + ".json", shell=True)
            compress_json_file(os.path.join(output_path, website) + ".json")
        except:
            print("lighthouse failed for", website)
            return False
        return True
        # self.remove_and_compress_json(score_folder, ext=".gz")

    def check_lighthouse_score_file(self, file_path):
        _, scores = self.get_lighthouse_scores(file_path)
        if None in scores:
            return False
        return True

    def check_ylt_score_file(self, file_path):
        _, scores = self.get_ylt_scores(file_path)
        # print(scores, None in scores, not len(scores))
        if None in scores or not len(scores):
            return False
        return True

    def get_missing_audit(self, site, audit_sites, scores_folders, audit_func, audit_file_check_func, *audit_args):
        found = False
        for audit_site in audit_sites:
            if site in audit_site:
                found = True
                break
        if not found:
            for score_folder in scores_folders:
                if found:
                    break
                for score_file in os.listdir(score_folder):
                    if site in score_file and os.stat(os.path.join(score_folder, score_file)).st_size > 0:
                        if audit_file_check_func(os.path.join(score_folder, score_file)):
                            found = True
                            break
        if not found:
            if not site.startswith("www."):
                site = "www." + site
            print("no processing", audit_func, site, audit_args)
            if not audit_func(site, *audit_args[1:]):
                if site.startswith("www."):
                    site = site[4:]
                    # audit_args['site'] = site
                    # (*audit_args)[0] = site
                    audit_func(site, *audit_args[1:])
                else:
                    site = "www." + site
                    # (*audit_args)[0] = site
                    # audit_args['site'] = site
                    audit_func(site, *audit_args[1:])

    def get_missing_ylt(self, site, ylt_sites, scores_folders):
        self.get_missing_audit(site, ylt_sites, scores_folders, self.run_ylt, self.check_ylt_score_file, site, scores_folders)

    def get_missing_lighthouse(self, site, lighthouse_sites, scores_folders):
        self.get_missing_audit(site, lighthouse_sites, scores_folders, self.run_lighthouse, self.check_lighthouse_score_file, site, scores_folders)

    def remove_and_compress_json(self, folder, ext=".gz"):
        for f in os.listdir(folder):
            if not os.path.join(folder, f).endswith(ext):
                if os.stat(os.path.join(folder, f)).st_size > 0:
                    compress_json_file(os.path.join(folder, f))
                else:
                    os.remove(os.path.join(folder, f))

    def get_final_audit_csv(self, csv_file, col_name, filter_list, sep=","):
        filter_list_domains = [extract(x).domain for x in filter_list]
        filter_list_suffixes = [extract(x).suffix for x in filter_list]
        
        output_path = csv_file.split(".csv")[0] + "_final.csv"
        df = pd.read_csv(csv_file, sep=sep)
        col = df[col_name]
        new_df = pd.DataFrame()

        found_count = 0
        set_all = set()
        domain_set = set()
        append_count = 0

        for c in col:
            # if len(c.split(".")) >= 3:
            c_copy = c
            if c.startswith("ww."):
                print(c)
            if c.startswith("www."):
                c = c[4:]
                c_domain = c.split(".")[0]
            else:
                c_domain = c.split(".")[0]
            if len(c.split(".")) == 1 or c_domain in domain_set:
                continue
            c_suffix = c.split(".")[1]
            if c_domain not in domain_set and c_domain in filter_list_domains:
                if c_suffix in filter_list_suffixes[filter_list_domains.index(c_domain)]:
                    if "letsbit" in c:
                        self.print_green("got", c_domain, c_suffix, df[df[col_name] == c_copy])
                        # c_domain + "." +  filter_list_suffixes[filter_list_domains.index(c_domain)]])
                    new_row = df[df[col_name] == c_copy].copy()
                    new_row[col_name] = c_domain + "." + filter_list_suffixes[filter_list_domains.index(c_domain)]
                    if c_domain in domain_set:

                        print(new_row)

                    # print(new_row)
                    new_df = new_df.append(new_row)
                    append_count += 1
                    # c_domain + "." +  filter_list_suffixes[filter_list_domains.index(c_domain)]])

                    set_all.add(c_domain + "." +  filter_list_suffixes[filter_list_domains.index(c_domain)])

                    domain_set.add(c_domain)

        filter_list_set = set(filter_list)
        filter_list_set.difference_update(set_all)
        print(list(filter_list_set)[:100], len(filter_list_set))
        # file_interactor.save_object(filter_list_set, "filter_list")
        
        print("found", len(new_df), "of a total of", len(filter_list), "sites")
        print(found_count, len(set_all), len(domain_set), append_count)

        new_df.to_csv(output_path)

    def get_missing_indexes(self, sw_base_folder):
        for site in os.listdir(sw_base_folder):
            files = [f for f in os.listdir(os.path.join(sw_base_folder, site)) if os.path.isfile(os.path.join(sw_base_folder, site, f))]
            if "beautified.js" in files:
                # content = open(os.path.join(sw_base_folder, site, "beautified.js"), "r").read().strip()
                if "index.html" not in files or ("index.html" in files and os.stat(os.path.join(sw_base_folder, site, "index.html")).st_size == 0):
                    continue
                    index_content = self.url_interactor.get_content_url("https://" + site)
                    if not index_content:
                        index_content = self.url_interactor.get_content_url("https://www." + site)
                    if index_content:
                        if not os.path.exists(os.path.join(sw_base_folder, site, "index.html")):
                            with open(os.path.join(sw_base_folder, site, "index.html"), "w") as f:
                                f.write(index_content)
                        self.print_green("found index", site)
                    else:
                        self.print_red("no index", site)

    def get_missing_manifests(self, sw_base_folder):
        # valid_linked_sw_paths = self.file_interactor.load_object_exists("valid_linked_sw_paths") or {}
        # valid_linked_sw_paths = {}
        manifest_failed_scraping, manifest_succeeded_scraping = set(), set()
        for site in os.listdir(sw_base_folder):
            files = [f for f in os.listdir(os.path.join(sw_base_folder, site)) if os.path.isfile(os.path.join(sw_base_folder, site, f))]
            sw_folder = os.path.join(sw_base_folder, site)
            if "beautified.js" in files and "index.html" in files and os.stat(os.path.join(sw_folder, "index.html")).st_size > 0:
                # if site in valid_linked_sw_paths:
                #     continue
                # if (not os.path.exists(os.path.join(sw_folder, "manifest.json"))) or (os.path.exists(os.path.join(sw_folder, "manifest.json")) and os.stat(os.path.join(sw_folder, "manifest.json")).st_size == 0):
                # if os.path.exists(os.path.join(sw_folder, "index.html")) and os.stat(os.path.join(sw_folder, "index.html")).st_size > 0:
                index_content = open(os.path.join(sw_folder, "index.html"), "r").read()
                # else:
                #     index_content = self.url_interactor.get_content_url("https://" + site)
                # if not index_content:
                #     index_content = self.url_interactor.get_content_url("https://www." + site)

                if index_content:
                    # if not os.path.exists(os.path.join(sw_folder, "index.html")):
                    #     with open(os.path.join(sw_folder, "index.html"), "w") as f:
                    #         f.write(index_content)

                    manifest_urls = self.get_manifest_link_html(index_content, content=True)
                    if len(manifest_urls) == 0:
                        print(site, "no manifest urls")
                    else:
                        print("yes manifest urls")
                        # valid_linked_sw_paths[site] = os.path.join(sw_folder, "beautified.js")
                        continue
                        if not "manifest.json" in files:
                            for url in manifest_urls:
                                if "http" not in url:
                                    while url.startswith(".") or url.startswith("/"):
                                        url = url[1:]
                                    if site not in url:
                                        url = "https://" + site + "/" + url
                                    else:
                                        url = "https://" + url
                                if validators.url(url):
                                    succeed = self.scrape_manifest(url, site)
                                    if not succeed:
                                        self.print_red("not succeeded", url)
                                        manifest_failed_scraping.add(site)
                                    else:
                                        self.print_green("succeeded", site, url)
                                        manifest_succeeded_scraping.add(site)
                                        if site in manifest_failed_scraping:
                                            manifest_failed_scraping.remove(site)
                                else:
                                    sw_post_processor.print_red("no potential", sw_folder,  url)
                            # file_interactor.save_object(manifest_failed_scraping, "manifest_failed_scraping")
                        if "manifest.json" in files:
                            manifest_succeeded_scraping.add(site)
                            if site in manifest_failed_scraping:
                                manifest_failed_scraping.remove(site)
                else:
                    print(site, "no index content")
        #         self.file_interactor.save_object(manifest_failed_scraping, "manifest_failed_scraping")
        #         self.file_interactor.save_object(manifest_succeeded_scraping, "manifest_succeeded_scraping")

        # self.file_interactor.save_object(manifest_succeeded_scraping, "manifest_succeeded_scraping")
        # self.file_interactor.save_object(manifest_failed_scraping, "manifest_failed_scraping")

        # self.file_interactor.save_object(valid_linked_sw_paths, "valid_linked_sw_paths")
        # print("validlinkedswpathdslen", len(valid_linked_sw_paths))

    def set_valid_linked_sw_paths(self, sw_base_folder):
        valid_linked_sw_paths = {}
        length = len(os.listdir(sw_base_folder))
        count = 0
        for sw_folder in os.listdir(sw_base_folder):
            print(count / length, end="\r")
            count += 1
            site = sw_folder
            if site.startswith("www."):
                site = site[4:]
            sw_folder = os.path.join(sw_base_folder, sw_folder)
            if os.path.exists(os.path.join(sw_folder, "beautified.js")):
                if os.path.exists(os.path.join(sw_folder, "index.html")):
                    if os.path.exists(os.path.join(sw_folder, "manifest.json")) and os.stat(os.path.join(sw_folder, "manifest.json")).st_size > 0:
                        index_content = open(os.path.join(sw_folder, "index.html")).read()
                        manifest_urls = self.get_manifest_link_html(index_content, content=True)
                        if len(manifest_urls):
                            valid_linked_sw_paths[site] = os.path.join(sw_folder, "beautified.js")
        self.file_interactor.save_object(valid_linked_sw_paths, "valid_linked_sw_paths")
        return valid_linked_sw_paths
        #     if (not os.path.exists(os.path.join(sw_folder, "manifest.json"))) or (os.path.exists(os.path.join(sw_folder, "manifest.json")) and os.stat(os.path.join(sw_folder, "manifest.json")).st_size == 0):
        #         if sw_folder in manifest_failed_scraping and len(manifest_potential[sw_folder]) == 1:
        #             continue
        #         for url in manifest_potential[sw_folder]:
        #             if "http" not in url:
        #                 while url.startswith(".") or url.startswith("/"):
        #                     url = url[1:]
        #                 url = "http://" + sw_folder.split("http")[-1][len(sw_base_folder):] + "/" + url
        #             elif "https://" not in url:
        #                 if url.startswith("."):
        #                     url = url[1:]
        #                 if url.startswith("/"):
        #                     url = url[1:]
        #                 url = "https://" + sw_folder.split("/")[-1] + "/" + url
        #             # else:
        #                 # print("done nothing", url)
        #             if validators.url(url):
        #                 print("potential", sw_folder, url)
        #                 # c += 1
        #                 succeed = sw_post_processor.scrape_manifest(url, sw_folder)
        #                 if not succeed:
        #                     sw_post_processor.print_red("not succeeded", url)
        #                     manifest_failed_scraping.add(sw_folder)
        #                 else:
        #                     sw_post_processor.print_green("succeeded", sw_folder.split("/")[-1], url)
        #                     if sw_folder in manifest_failed_scraping:
        #                         manifest_failed_scraping.remove(sw_folder)
        #             else:
        #                 sw_post_processor.print_red("no potential", sw_folder,  url)
        #         file_interactor.save_object(manifest_failed_scraping, "manifest_failed_scraping")
        #     elif os.path.exists(os.path.join(sw_folder, "manifest.json")):
        #         if os.path.exists(os.path.join(sw_folder, "beautified.js")):
        #             valid_linked_sw_paths.add(os.path.join(sw_folder, "beautified.js"))
        # file_interactor.save_object(valid_linked_sw_paths, "valid_linked_sw_paths")

    def get_features_manifest_csvs(self, features_csv_file, manifest_csv_file, final_sw_paths):
        manifest_keys = ["background_color", "categories", "description", "dir", "display", "iarc_rating_id", "icons", "lang", "name", "orientation", "prefer_related_applications", "protocol_handlers", "related_applications", "scope", "screenshots", "short_name", "shortcuts", "start_url", "theme_color"]

        handle = open(features_csv_file, "w")
        handle.close()

        handle = open(manifest_csv_file, "w")
        handle.close()

        failed_features, failed_manifest = set(), set()
        print("getting features and manifest csv", len(final_sw_paths))
        for sw in final_sw_paths:
            feature_path = os.path.join(final_sw_paths[sw].split("beautified.js")[0], "features.json")
            try:
                feature_data = self.data_aggregator.get_features_from_file(feature_path, return_json=False)
            except Exception as e:
                failed_features.add(sw)
                print(sw, "failed", e)
                # exit(0)
                continue

            with open(features_csv_file, "a+") as f:
                if os.stat(features_csv_file).st_size == 0:
                    first_line = "website"
                    for item in feature_data:
                        first_line += f";{item[0]}"
                    f.write(first_line + "\n")
                website_line = sw
                for item in feature_data:
                    website_line += f";{item[1]}"
                f.write(website_line + "\n")

            manifest_path = os.path.join(final_sw_paths[sw].split("beautified.js")[0], "manifest.json")
            try:
                manifest_data = self.data_aggregator.get_features_from_file(manifest_path, return_json=True)
            except Exception as e:
                failed_manifest.add(sw)
                continue
            with open(manifest_csv_file, "a+") as f:
                if os.stat(manifest_csv_file).st_size == 0:
                    first_line = "website"
                    f.write("website" + ";" + ";".join(manifest_keys) + "\n")

                website_line = '"' + sw + '"'
                for key in manifest_keys:
                    if key in manifest_data:
                        website_line += ';"' + str(1) + '"'
                    else:
                        website_line += ';"' + str(0) + '"'
                if website_line == "":
                    print(sw_path, "empty line")
                    exit(0)
                f.write(website_line + "\n")
        # print(failed, "failed manifest feauteres")
        print("manifest", failed_manifest, len(failed_manifest))
        print("features", failed_features, len(failed_features))

    def get_single_domains(self, domain_suffix_mapping):
        res = {}
        top_1m_domain_mapping = self.file_interactor.load_object_exists("top1m_sites_domain_mapping")
        for dom in domain_suffix_mapping:
            if type(domain_suffix_mapping[dom]) == type(""):
                res[dom] = domain_suffix_mapping[dom]
                continue
            if len(domain_suffix_mapping[dom]) > 1:
                if dom in top_1m_domain_mapping:
                    for suffix in top_1m_domain_mapping[dom]:
                        if suffix in domain_suffix_mapping[dom]:
                            res[dom] = suffix
                            break
                else:
                    res[dom] = list(domain_suffix_mapping[dom])[0]
            else:
                if len(domain_suffix_mapping[dom]) == 1:
                    res[dom] = list(domain_suffix_mapping[dom])[0]
                else:
                    res[dom] = ''
        return res

    def remove_js_comments(self, string):
        pattern = r"(\".*?\"|\'.*?\')|(/\*.*?\*/|//[^\r\n]*$)"
        # first group captures quoted strings (double or single)
        # second group captures comments (//single-line or /* multi-line */)
        regex = re.compile(pattern, re.MULTILINE|re.DOTALL)
        def _replacer(match):
            # if the 2nd group (capturing comments) is not None,
            # it means we have captured a non-quoted (real) comment string.
            if match.group(2) is not None:
                return "" # so we will return empty to remove the comment
            else: # otherwise, we will return the 1st group
                return match.group(1) # captured quoted-string
        return regex.sub(_replacer, string)

    def scrape_manifest(self, url, sw_folder):
        if not os.path.exists(sw_folder):
            return False
        content = self.url_interactor.get_content_url(url)
        if content:
            try:
                json.loads(content)
            except Exception as e:
                print("loading json failed", url)
                try:
                    content = content.encode().decode("utf-8-sig")
                    json.loads(content)
                except Exception as e2:
                    print(e2)
                    return False
            with open(os.path.join(sw_folder, "manifest.json"), "w") as f:
                f.write(content)
            return True
                
        return False

    def get_all_imports_importsfolder(self, imported_scripts_folder, url_local_file_linker):
        new_found_urls = set()
        failed_urls = self.file_interactor.load_object_exists("failed_urls_extra_imports") or set()
        imported_scripts_linker = file_interactor.load_object_exists("imported_scripts_linker") or {}
        files = [os.path.join(imported_scripts_folder, f) for f in os.listdir(imported_scripts_folder) if os.path.isfile(os.path.join(imported_scripts_folder, f))]
        new_import_paths, _ = self.filter_sw_importscripts(files)
        folder_size = sum(os.path.getsize(os.path.join(imported_scripts_folder,f)) for f in os.listdir(imported_scripts_folder) if os.path.isfile(os.path.join(imported_scripts_folder, f)))
    
        for path in new_import_paths:
            for url in new_import_paths[path]:
                replaced_url = self.url_interactor.replace_url(url)
                new_file_path = os.path.join(imported_scripts_folder, replaced_url)[:255]
                if url in url_local_file_linker:
                    if path in imported_scripts_linker:
                        imported_scripts_linker[path].add(url_local_file_linker[url])
                    else:
                        imported_scripts_linker[path] = set([url_local_file_linker[url]])
                elif os.path.exists(new_file_path):
                    url_local_file_linker[url] = new_file_path
                    if path in imported_scripts_linker:
                        imported_scripts_linker[path].add(url_local_file_linker[url])
                    else:
                        imported_scripts_linker[path] = set([url_local_file_linker[url]])
                elif url not in new_found_urls and not os.path.exists(new_file_path):
                    new_found_urls.add((path, url))


        for (path, url) in new_found_urls:
            content = self.url_interactor.get_content_url(url)
            if content:
                content = jsbeautifier.beautify(content)
                if content.strip().startswith("<"):
                    continue

                for local_url in url_local_file_linker:
                    if content == open(url_local_file_linker[local_url]).read():
                        url_local_file_linker[url] = url_local_file_linker[local_url]
                        if path in imported_scripts_linker:
                            imported_scripts_linker[path].add(url_local_file_linker[local_url])
                        else:
                            imported_scripts_linker[path] = set([url_local_file_linker[local_url]])
                        break

                if url not in url_local_file_linker:
                    replaced_url = self.url_interactor.replace_url(url)
                    new_file_path = os.path.join(imported_scripts_folder, replaced_url)[:255]
                    with open(new_file_path, "w") as f:
                        f.write(content)
                    url_local_file_linker[url] = new_file_path
                    if path in imported_scripts_linker:
                        imported_scripts_linker[path].add(url_local_file_linker[url])
                    else:
                        imported_scripts_linker[path] = set([url_local_file_linker[url]])
            else:
                failed_urls.add(url)

        self.file_interactor.save_object(failed_urls, "failed_urls_extra_imports")
        self.file_interactor.save_object(imported_scripts_linker, "imported_scripts_linker")
        new_folder_size = sum(os.path.getsize(os.path.join(imported_scripts_folder, f)) for f in os.listdir(imported_scripts_folder) if os.path.isfile(os.path.join(imported_scripts_folder, f)))

        if folder_size < new_folder_size:
            url_local_file_linker = self.get_all_imports_importsfolder(imported_scripts_folder, url_local_file_linker)
        return url_local_file_linker

    def get_importscripts_sources(self, path):
        content = self.remove_js_comments(open(path, "r").read())
        try:
            import_urls = self.strip_importscripts_from_content(content, "(", ")")
        except:
            print("error stripping importscripts")
            print(content)
            exit(1)
        # print("import urls", import_urls)

        return import_urls
    
    def filter_sw_importscripts(self, paths_set):
        sw_paths_urls, sw_paths_no_urls = {}, set()
        # error_paths = set()
        for path in paths_set:
            importscript_strings_present = self.get_importscripts_sources(path)

            for importscript_string in importscript_strings_present:
                url = importscript_string
                # print("importscript string url", url)
                if "http" in path and "http" not in url:
                    while url.startswith(".") or url.startswith("/"):
                        url = url[1:]
                    url = "http" + self.url_interactor.inverse_replace_url(path.split("http")[-1]) + "/" + url
                elif "https://" not in url:
                    if url.startswith("."):
                        url = url[1:]
                    if url.startswith("/"):
                        url = url[1:]
                    url = "https://" + path.split(sw_base_folder)[1].split("/")[0] + "/" + url

                if validators.url(url):
                    if "${"in url:
                        self.print_red("whoops", url)
                    # self.print_green(url)
                    if path in sw_paths_urls:
                        sw_paths_urls[path].add(url)
                    else:
                        sw_paths_urls[path] = set([url])

            if path not in sw_paths_urls:
                sw_paths_no_urls.add(path)
        # print("error paths", len(error_paths))
        # self.file_interactor.save_object(error_paths, "error_paths")
        print( len(sw_paths_no_urls))
        return sw_paths_urls, sw_paths_no_urls
    
    def sw_scrape_importscripts(self, sw_paths_urls):
        imported_scripts_folder = os.getcwd() + "/SWs/imported_scripts/"
        url_local_file_linker = self.file_interactor.load_object_exists("url_local_file_linker") or {}
        failed_urls = self.file_interactor.load_object_exists("failed_urls") or {}
        for sw_path in sw_paths_urls:
            if sw_path in sw_paths_urls:
                for url in sw_paths_urls[sw_path]:
                    if "," in url:
                        print("comma url", sw_path, url)
                        exit(0)
                    elif "\\" in url:
                        print("backslash in url", sw_path, url)
                        exit(0)                    
                    failed_url_found = False
                    for other_sw_path in failed_urls:
                        if url in failed_urls[other_sw_path]:
                            failed_url_found = True
                    if failed_url_found or url in url_local_file_linker:
                        continue

                    files = [os.path.join(imported_scripts_folder, f) for f in os.listdir(imported_scripts_folder) if os.path.isfile(os.path.join(imported_scripts_folder, f))]
                    replaced_url = self.url_interactor.replace_url(url)
                    new_file_path = os.path.join(imported_scripts_folder, replaced_url)[:255]
                    if new_file_path in files:
                        url_local_file_linker[url] = new_file_path
                    else:
                        local_content_found = False
                        content = self.url_interactor.get_content_url(url)
                        if content:
                            content = jsbeautifier.beautify(content).strip()
                            if True in ["!doctype" and "html" in x.lower() for x in content.split("\n")]:
                                # time.sleep(10)
                                if sw_path in failed_urls:
                                    failed_urls[sw_path].add(url)
                                else:
                                    failed_urls[sw_path] = set([url])
                                # exit(0)
                                continue
                            # local_content_found = False
                            for file in files:
                                if content == open(file, "r").read():
                                    local_content_found = True
                                    # if sw_path in url_local_file_linker:
                                    url_local_file_linker[url] = file
                                    break
                            if not local_content_found:
                                with open(new_file_path, "w") as f:
                                    f.write(content)
                            # else:
                            #     print(url, file)
                        else:
                            if sw_path in failed_urls:
                                failed_urls[sw_path].add(url)
                            else:
                                failed_urls[sw_path] = set([url])
                    self.file_interactor.save_object(url_local_file_linker, "url_local_file_linker")
                    self.file_interactor.save_object(failed_urls, "failed_urls")
                    # print("failed", len(failed_urls), "succeeded", len(url_local_file_linker))

        return url_local_file_linker

    def get_sw_results(self, final_sw_paths, sw_paths_urls, sw_results_csv_file):
        with open(sw_results_csv_file, "w") as f:
            f.write("website;SWs count;size;events;loc;ccns\n")

        # sw_paths_urls = file_interactor.load_object_exists("sw_paths_urls")
        imported_scripts_linker = file_interactor.load_object_exists("imported_scripts_linker")
        url_local_file_linker = self.file_interactor.load_object_exists("url_local_file_linker")
        
        for sw_domain_suffix in final_sw_paths:
            sw = final_sw_paths[sw_domain_suffix]
            paths = set([sw])
            needs_processing = False
            if sw in sw_paths_urls:
                urls = sw_paths_urls[sw]
                for url in urls:
                    if url in url_local_file_linker:
                        paths.add(url_local_file_linker[url])
                        needs_processing = True
                    if url in url_local_file_linker and url_local_file_linker[url] in imported_scripts_linker:
                        for import_path in imported_scripts_linker[url_local_file_linker[url]]:
                            paths.add(import_path)
                            needs_processing = True
            # if needs_processing:
            #     print("needs processing", len(paths), sw)
            # continue
            sw_splitted = sw.split(sw_base_folder)[1].split("beautified.js")[0].strip("/")
            sw_ext = extract(sw_splitted)
            website, SW_count, size, events, loc, ccns = self.run_sw_loc(paths, sw_base_folder, sw)
            self.file_interactor.append_line(sw_results_csv_file, f'"{sw_domain_suffix}";"{SW_count}";"{size}";"{events}";"{loc}";"{ccns}"\n')
    
    def check_sw_paths_no_urls(self, sw_paths_no_urls):
        for path in sw_paths_no_urls:
            content = open(path, "r").read()
            if not "x-akam" in content:
                if "PUSH_SERVICE_SCRIPT" in content:
                    if "https://aswpsdkus.com/notify/v1/ua-sdk.min.js":
                        sw_paths_urls[path] = set(["https://aswpsdkus.com/notify/v1/ua-sdk.min.js"])
                        # print("URL PUSH SERVICE SCRIPT", path.split(sw_base_folder)[1:])
                    else:
                        print("PUSH SERVICE SCRIPT", path.split(sw_base_folder)[1:])
                elif "gravitec | client" in content:
                    print("GRAVITECH client", path.split(sw_base_folder)[1:])
                elif "workbox" in content:
                    print("WORKBOX", path.split(sw_base_folder)[1:])
                elif content.startswith("const swUrl ="):
                    print("CONST SWURL", path.split(sw_base_folder)[1:])
                elif "onesignal.com" in content:
                    print("ONESIGNAL.COM", path.split(sw_base_folder)[1:])
                else:
                    sw_post_processor.print_red(str(path.split(sw_base_folder)[1:]))

    def strip_importscripts_from_content(self, line, start_char, end_char):
        return_set = set()
        # importscripts_count, empty_sources = 0, 0
        line = str(line)
        line = line.strip().lower()
        start_index = line.find("importscripts")
        if start_index == -1:
            return return_set
        start_index += len("importscripts")
        substring_start = line.find(start_char, start_index)
        string_present = False

        while True:
            if substring_start == -1 or len(line) == 0 or start_index == -1:
                break

            current_index = start_index
            string_char = None

            while not line[current_index] == start_char:
                current_index += 1
                # if line[current_index] == "(":
                    # get_substring = True
                    # break
            current_index += 1
            sources = ""

            stop = False
            while not line[current_index] == end_char:
                if current_index == len(line) - 1:
                    stop = True
                    break
                sources += line[current_index]
                current_index += 1
            if stop:
                return return_set
            string_present = True
            sources = sources.split(",")
            for source in sources:
                # importscripts_count += 1
                source = source.strip()
                if source.startswith("'") or source.startswith("`") or source.startswith('"'):
                    if source.endswith("'") or source.endswith("`") or source.endswith('"'):
                        source = source.strip("`").strip("'").strip('"')
                        return_set.add(source)

            start_index = line.find("importscripts", current_index)                

        # print(importscripts_count, empty_sources)
        return return_set

    def get_highest_suffix(self, domain, suffixes):
        if len(suffixes) == 0:
            return None
        top1m_domain_suffix = self.file_interactor.load_object_exists("top1m_sites_domain_mapping")
        for top1m_domain in top1m_domain_suffix:
            if top1m_domain == domain:
                for suffix in top1m_domain_suffix[top1m_domain]:
                    if suffix in suffixes:
                        return suffix
                break
        return None

    def filter_csv(csv_path, sep=";"):
        data = {}
        with open(csv_path, "r") as f:
            for l in f:
                l = l.strip()
                l = l.split(sep)
                if l[0] not in data:
                    data[l[0]] = l[1:]
        extension = csv_path.split(".")[1]
        with open(csv_path.split(".")[0] + ".csv", "w") as f:
            for row in data:
                f.write(row + ";" + ";".join(data[row]) + "\n")

    def filter_csv_website_list(self, csv_path, website_list, output_csv_path, sep=";", strip_char='"'):
        first_line = "a"
        with open(csv_path, "r") as f:
            for l in f:
                if first_line:
                    if l.split(sep)[0].strip(strip_char) in website_list:
                        self.file_interactor.append_line(output_csv_path, l)
                        found = True
                    else:
                        for website in website_list:
                            if l.split(sep)[0].strip(strip_char) in website:
                                self.file_interactor.append_line(output_csv_path, l)
                                found = True
                                break
                else:
                    first_line = l
                    self.file_interactor.append_line(output_csv_path, l)
            if not found:
                print("not found", l)

    def run_pwa_loc_folder(self, folder_path, folder_text_mapping={}, convert_string=True, csv_path="", handled=[], missing=[], missing_check=True):
        if not csv_path:
            csv_path = os.getcwd() + "/CSVs/temp_pwa_loc.csv"
            # csv_path = os.getcwd() + "/local_vars/pwa_run_output.txt"
        if not os.path.exists(csv_path):
            with open(csv_path, "w") as f:
                f.write("website;size;html;css;js\n")
        elif len(handled) == 0:
            handled = self.data_aggregator.get_col_csv(csv_path, 0)
        print(len(handled))
        
        correct_in_missing = set()
        for subfolder in [d for d in os.listdir(folder_path) if os.path.isdir(os.path.join(folder_path,d))]:
            subfolder_temp = '%s' % subfolder
            subfolder = self.data_aggregator.string_usb_to_csv(subfolder)
            ext = extract(subfolder)
            correct_site = ext.domain + "." + ext.suffix
            if correct_site in missing:
                size, html_count, css_count, js_count, truth = self.run_pwa_loc(os.path.join(folder_path, subfolder_temp), zipped=False)
                print(subfolder, size, html_count, css_count, js_count, truth)
                correct_in_missing.add(correct_site)
                print("correct in missing", correct_site)
                self.file_interactor.append_line(csv_path, f'{self.data_aggregator.string_usb_to_csv(correct_site)};{size};{html_count};{css_count};{js_count}\n')
        
        diff = set(missing)
        diff.difference_update(correct_in_missing)
        print(diff)

        for subfolder, _, files in os.walk(folder_path):
            if subfolder != folder_path:
                break
            for website in files:
                website_mapping = website.split(".zip")[0]
                ext = extract(website_mapping)
                if missing_check and self.data_aggregator.string_usb_to_csv(ext.domain + "." + ext.suffix) not in diff:
                    continue

                # if " " in website_mapping:
                    # website_mapping = website_mapping.split(" ")[0]
                correct_site = ext.domain + "." + ext.suffix
                correct_site = self.data_aggregator.string_usb_to_csv(correct_site)
                # correct_site = self.data_aggregator.(correct_site)
                # if correct_site:
                #     print("correct site", correct_site)
                #     ext = extract(correct_site)
                #     if ext.domain + "." + ext.suffix in handled:
                #         print("handled already pwa")
                #         continue
                    # else:
                    #     print("not already handled", ext.domain, ext.suffix)
                # continue
                print("website first", website)
                website_first = website
                zip = False
                if ".zip" in website:
                    zip = True
                if " " in website:
                    website = website.split(" ")[0]
                
                if convert_string:
                    print("website mapping", website_mapping)
                    website_mapping = self.data_aggregator.string_csv_to_usb(website_mapping)
                # if website_mapping in folder_text_mapping:
                #     correct_site = folder_text_mapping[website_mapping]
                # else:
                #     for folder_site in folder_text_mapping:
                #         # print(website_mapping, folder_site)
                #         if website_mapping in self.data_aggregator.string_csv_to_usb(folder_site) and website_mapping in folder_text_mapping:
                #             correct_site = folder_text_mapping[website_mapping]
                #             break
                
                print(subfolder + "/" + website)
                size, html_count, css_count, js_count, truth = self.run_pwa_loc(os.path.join(subfolder, website_first), zipped=zip)
                print(website.split(".zip")[0], size, html_count, css_count, js_count)
                if correct_site and truth:
                    print(correct_site, size, html_count, css_count, js_count)
                    self.file_interactor.append_line(csv_path, f'{self.data_aggregator.string_usb_to_csv(correct_site)};{size};{html_count};{css_count};{js_count}\n')
                    if ext.domain + "." + ext.suffix in final_sites:
                        handled.append(ext.domain + "." + ext.suffix)

                # return

    def get_all_js(self, file_paths):
        all_js = ""
        for path in file_paths:
            all_js += open(path, "r").read() + "\n"
        return jsbeautifier.beautify(all_js).strip()

    def run_sw_loc(self, paths, sw_base_folder, sw, subfolder=os.getcwd() + "/SWs/temp/"):
        if not os.path.exists(subfolder):
            os.mkdir(subfolder)
        print("running sw loc for", paths, subfolder)
        website, SW_count, size, events, loc, ccns = "", 0, 0, [], 0, []
        website = sw_base_folder.strip("/").split("/")[-1]

        all_js = self.get_all_js(paths)
        temp_js_path = os.path.join(subfolder, "all_js.js")
        print("tempjspath", temp_js_path)
        with open(temp_js_path, "w") as f:
                f.write(all_js)

        output = subprocess.check_output("ohcount/bin/ohcount -i " + temp_js_path , shell=True)
        loc = 0
        for l in output.decode().split("\n"):
            if l.startswith("javascript"):
                loc += int(l.split()[1])

        try:
            output = subprocess.check_output("lizard -l js " + temp_js_path, shell=True)
        except subprocess.CalledProcessError as exc:
            output = exc.output
            self.print_red("output error " + output.decode()[:500])

        ccns = []
        for l in output.decode().split("\n"):
            if "all_js" in l:
                if l.split()[1].isdigit():
                    ccns.append(l.split()[1])

            size = os.stat(temp_js_path).st_size
            events = DataAggregator.get_file_events(all_js)

        output = subprocess.check_output("ls " + "/".join(sw.split("/")[:-1]), shell=True)
        for l in output.decode().split("\n"):
            # print("sws count", l)
            if l and not l.startswith("http") and "beautified" not in l and "requests" not in l and "features.json" not in l and "manifest" not in l and "imported_files" not in l and not "index.html" in l:
                print("sw file", l)
                SW_count += 1
        # print(website, SW_count, size, events, loc, ccns)

        return website, SW_count, size, events, loc, ccns

    def get_mapping_from_manual(path):
        mapping = {}
        with open(path, "r") as f:
            for l in f:
                if "," in l:
                    (text_site, folder_site) = l.strip().split(", ")
                    mapping[text_site] = folder_site
        return mapping

    def inverse_dic(dic):
        print("inverse dic len", len(dic))
        keys, values = [], []
        for key in dic:
            keys.append(key)
            values.append(dic[key])
        temp = {}
        for i in range(len(values)):
            temp[DataAggregator.string_csv_to_usb(values[i])] = keys[i]
        return temp

    def merge_csvs(origin_csv, destination_csv, sep=";"):
        origin_data = pd.read_csv(origin_csv, sep=";")
        destination_data = pd.read_csv(destination_csv, sep=";")
        # for key in origin_data:
            # print(key, destination_data.keys())
        if origin_data.keys()[0] != destination_data.keys()[0]:
            print("keys are different of csv files")
            return
        else:
            print("keys are valid")
        print("origin data len", len(origin_data))
        print("destination data len", len(destination_data))
        destination_data = pd.concat([destination_data, origin_data])
        print("destination data len", len(destination_data))
        destination_data.to_csv(os.getcwd() + "/CSVs/mergedwebsiteLOC.csv")
        return destination_data

    def get_text_folder_mapping(folder, text_path):
        extract = tldextract.TLDExtract()
        folder_sites, text_sites  = [], FileInteractor.read_line_seperated_file(text_path)
        text_sites_sorted = text_sites.copy()
        text_sites = set(text_sites)
        for subfolder, _, files in os.walk(folder):
            files = [os.path.join(subfolder, file) for file in files]
            files.sort(key=os.path.getctime)
            for file in files:
                file = file.split("/")[-1]
                file = file.split(".zip")[0]
                if " " in file:
                    file = file.split(" ")[0]
                folder_sites.append(DataAggregator.string_usb_to_csv(file))
        folder_sites = set(folder_sites)
        print(len(folder_sites), len(text_sites))

        text_folder_mapping = SWPostProcessor.get_mapping_from_manual(os.getcwd() + "/webapps_mapping_manual.txt")
        print("text folder mapping len", len(text_folder_mapping))

        for match in folder_sites.intersection(text_sites):
            text_folder_mapping[match] = match
            folder_sites.remove(match)
            text_sites.remove(match)
            text_sites_sorted.remove(match)

        print("text folder mapping len", len(text_folder_mapping))

        print(len(folder_sites), len(text_sites))

        remove_sites = []
        for folder_site in folder_sites:
            ext = extract(folder_site)
            full_match = False
            for text_site in text_sites:
                ext2 = extract(text_site)
                if ext.domain == ext2.domain:
                    remove_sites.append((folder_site, text_site))
                    full_match = True
                    break
            no_match = True
            if not full_match:
                for text_site in text_sites:
                    if ext.domain in text_site:
                        print("domain", ext.domain)
                        print("match", folder_site, text_site)
                        no_match = False

        print(remove_sites[:20])
        for (folder_site, text_site) in remove_sites:
            text_folder_mapping[text_site] = folder_site
            folder_sites.remove(folder_site)
            text_sites.remove(text_site)
            text_sites_sorted.remove(text_site)

        print("text folder mapping len", len(text_folder_mapping))

        folder_sites, text_sites = list(folder_sites), list(text_sites)
        with open(os.getcwd() + "/webapps_mapping.txt", "w") as f:
            for i in range(len(text_sites_sorted)):
                if i < len(folder_sites):
                    f.write(text_sites_sorted[i] + "\t\t\t\t\t" + folder_sites[i] + "\n")
                else:
                    f.write(text_sites_sorted[i] + "\n")

        print(len(text_folder_mapping), type(text_folder_mapping))
        print(len(folder_sites), len(text_sites))
        print(list(folder_sites)[:20], list(text_sites)[:20])
        return text_folder_mapping

    def get_overlap_folder_list(list, websites_list, check_files=True, extension=""):
        extract = tldextract.TLDExtract()
        if check_files:
            # for _, _, files in os.walk(folder_path):
                for file in list:
                    if extension:
                        file = file.split(extension)[0]
                    ext = extract(file)
                    for website in websites_list:
                        if ext.domain + "." + ext.suffix in website:
                            websites_list.remove(website)
                            break
        return websites_list

    def get_folders_double_manifest(self, folder_path):
        double, missing = [], []
        for subfolder, _, files in os.walk(folder_path):
            splitted = subfolder.split("/")
            manifest, manifest_error = False, False
            for file in files:
                # if splitted in double:
                    # break
                if file == "manifest.json":
                    manifest = True
                    break
                # elif file == "manifest":
                    # manifest_error = True
                # if manifest and manifest_error:
                    # double.append(splitted[-1])
                    # os.remove(subfolder + "/manifest")
                    # break
            if not manifest:
                missing.append(splitted[-1])
        output_file = os.getcwd() + "/missing_manifest.txt"
        if os.path.exists(output_file):
            content = ""
            for mis in missing:
                if mis != "":
                    content += mis + "\n"
            if content != "":
                self.file_interactor.append_line(mis + "\n")
        else:
            with open(os.getcwd() + "/missing_manifest.txt", "w") as f:
                for mis in missing:
                    if mis != "":
                        f.write(mis + "\n")
                
        return missing

    def check_zipped_folder_for_manifests(self, folder_path, local_filename="manifest_sites_usb"):
        manifest_sites = self.file_interactor.load_object_exists(local_filename)
        failed_unzipping_sites = self.file_interactor.load_object_exists("failed_unzipping_sites")
        missing_manifest_sites = self.file_interactor.load_object_exists("missing_manifest_sites_usb")

        if not manifest_sites:
            manifest_sites = []
        if not failed_unzipping_sites:
            failed_unzipping_sites = []
        if not missing_manifest_sites:
            missing_manifest_sites = []
        
        last_manifest_sites_length = len(manifest_sites)
        last_failed_unzipping_length = len(failed_unzipping_sites)
        last_missing_manifest_sites_length = len(missing_manifest_sites)

        for root, dirs, files in os.walk(folder_path):
            count, manifest_found = 0, False
            if last_manifest_sites_length != len(manifest_sites):
                self.file_interactor.save_object(manifest_sites, local_filename)
                last_manifest_sites_length = len(manifest_sites)
            if last_missing_manifest_sites_length != len(missing_manifest_sites):
                self.file_interactor.save_object(missing_manifest_sites, "missing_manifest_sites_usb")
                last_missing_manifest_sites_length = len(missing_manifest_sites)
            for file in files:
                if count % 10 == 0:
                    print("Percentage completed of files:", count / len(files) * 100, end="\r")
                count += 1

                if os.path.join(root, file) in manifest_sites or os.path.join(root, file) in failed_unzipping_sites or os.path.join(root) in missing_manifest_sites:
                    continue

                if last_manifest_sites_length != len(manifest_sites):
                    self.file_interactor.save_object(manifest_sites, local_filename)
                    last_manifest_sites_length = len(manifest_sites)
                if last_missing_manifest_sites_length != len(missing_manifest_sites):
                    self.file_interactor.save_object(missing_manifest_sites, "missing_manifest_sites_usb")
                    last_missing_manifest_sites_length = len(missing_manifest_sites)
                if last_failed_unzipping_length != len(failed_unzipping_sites):
                    self.file_interactor.save_object(failed_unzipping_sites, "failed_unzipping_sites")
                    last_failed_unzipping_length = len(failed_unzipping_sites)

                if file.endswith(".zip"):
                    try:
                        temp_folder = "/home/jesse/Documents/temp_usb/b/"
                        if not os.path.exists(temp_folder):
                            os.mkdir(temp_folder)
                        with zipfile.ZipFile(os.path.join(root, file), 'r') as zip_ref:
                            zip_ref.extractall(temp_folder)
                            for zipfolder, _, zipfiles in os.walk(temp_folder):
                                for zfile in zipfiles:
                                    if "manifest" in zfile:
                                        self.print_green(file + " " + zfile)
                                        if os.path.join(root, file) not in manifest_sites:
                                            manifest_sites.append(os.path.join(root, file))
                            if os.path.join(root, file) not in manifest_sites:
                                missing_manifest_sites.append(root)
                        subprocess.check_output("rm -rf " + temp_folder, shell=True)
                    
                    except Exception as e:
                        failed_unzipping_sites.append(os.path.join(root, file))
                        print("unzipping went wrong", root, file)
                        print(e)
                else:
                    if "manifest" in file:
                        if os.path.join(root, file) not in manifest_sites:
                            manifest_sites.append(os.path.join(root, file))
                            manifest_found = True

            if not manifest_found and root != folder_path:
                if os.path.join(root) not in missing_manifest_sites:
                    missing_manifest_sites.append(root)
                    manifest_found = False
            dircount = 0
            for dir in dirs:
                print("Percentage completed for dirs:", dircount / len(dirs) * 100, end="\r")
                dircount += 1
                found = True
                for site in manifest_sites:
                    if dir in site:
                        found = True
                        break
                for site in missing_manifest_sites:
                    if dir in site:
                        found = True
                        break
                if found:
                    continue
                manifest_found = False
                for sub_root, sub_dir, sub_files in os.walk(root + dir):
                    if sub_root in missing_manifest_sites:
                        break
                    print("processing", sub_root)
                    for sub_file in sub_files:
                        if "manifest" in sub_file:
                            manifest_found = True
                            if os.path.join(sub_root, sub_file) not in manifest_sites:
                                self.print_green(sub_file + " " + sub_root)
                                manifest_sites.append(os.path.join(sub_root, sub_file))
                            else:
                                break
                if not manifest_found:
                    if os.path.join(sub_root) not in missing_manifest_sites:
                        missing_manifest_sites.append(os.path.join(sub_root))
                if last_manifest_sites_length < len(manifest_sites):
                    self.file_interactor.save_object(manifest_sites, local_filename)
                    last_manifest_sites_length = len(manifest_sites)
                if last_missing_manifest_sites_length < len(missing_manifest_sites):
                    self.file_interactor.save_object(missing_manifest_sites, "missing_manifest_sites_usb")
                    last_missing_manifest_sites_length = len(missing_manifest_sites)
            break
        print()
        self.file_interactor.save_object(manifest_sites, local_filename)
        self.file_interactor.save_object(failed_unzipping_sites, "failed_unzipping_sites")
        self.file_interactor.save_object(missing_manifest_sites, "missing_manifest_sites_usb")

    def get_sites_from_paths(self, paths, base):
        header = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
        'Accept-Encoding': 'none',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'keep-alive'}
        header = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}

        print("getting sites from", len(paths), "paths")
        for path in paths:
            splitted = path.strip(base).split("/")
            if splitted[0] != "":
                for subfolder, _, files in os.walk(base + splitted[0]):
                    for file in files:
                        if ".html" in file:
                            links = self.get_manifest_link_html(os.path.join(subfolder, file))
                            for link in links:
                                if "http" not in link:
                                    url = "https://" + self.data_aggregator.string_usb_to_csv(splitted[0]) + link
                                else:
                                    url = link
                                try:
                                    # url = "https://gopriv.com/manifest.json"
                                    print("trying to open url", url)
                                    responses = requests.get(url, headers=header, timeout=60)
                                    manifest_content = responses.text
                                    self.print_green("opening url " + url + " ")
                                except Exception as e:
                                    print("Could not open url " + url)
                                    print("Error", e)
                                try:
                                    json.loads(manifest_content)
                                except:
                                    continue
                                if manifest_content != "":
                                    print("Manifest content", manifest_content)

    def get_manifest_link_html(self, path, content=False):
        if content:
            html = path
        else:
            try:
                with open(path, "r", encoding="utf8") as f:
                    html = f.read()
            except:
                with open(path, "r", encoding="utf8", errors="replace") as f:
                    html = f.read()
                # print("errored", html)
                return []

        links = []
        for link in bs4.BeautifulSoup(html, "html.parser", from_encoding="iso-8859-1").find_all('link', {'rel': "manifest"}):
            if link.has_attr('href'):
                links.append(link['href'])
        return links

    def get_manifests_sites(self, sw_base_folder, present=False):
        missing = []
        for subfolder, _, files in os.walk(sw_base_folder):
            manifest_present = False
            for file in files:
                if "manifest.json" in file:
                    if os.stat(os.path.join(subfolder, file)).st_size != 0:
                        manifest_present = True
                        break
            if present and manifest_present:
                splitted = subfolder.split("/")
                missing.append(splitted[-1])
            elif not present and not manifest_present:
                splitted = subfolder.split("/")
                missing.append(splitted[-1])
        return missing

    def get_missing_sws(self, sw_base_folder):
        missing = []
        for subfolder, _, files in os.walk(sw_base_folder):
            sw_present = False
            for file in files:
                if file == "beautified.js" or "extra_js.js" in file or ".json" in file or "requests" == file or "all_js_temp.js" == file or "https" in file or "manifestError" == file:
                    continue
                sw_present = True
                if os.stat(os.path.join(subfolder, file)).st_size == 0:
                    sw_present = False
            if not sw_present:
                splitted = subfolder.split("/")
                missing.append(splitted[-1])
        return missing

    def convert_site_list_usb_folder_names(site_list, folder, conversion_func=str):
        folder_sites = []
        for subfolder, _, files in os.walk(folder):
            for file in files:
                for site in site_list:
                    if site in conversion_func(file):
                        folder_sites.append(file)
                        break
        return folder_sites

    def check_correctness_manifest_usb(self, folder, site_list):
        gotone = 0
        for subfolder, _, files in os.walk(folder):
            for file in files:
                if len(site_list) == 0:
                    break
                for site in site_list:
                    # print("checking file", file, site)

                    converted_file = self.data_aggregator.string_usb_to_csv(file.split(".zip")[0].split(" ")[0])
                    if converted_file in site:
                        site_list.remove(site)
                        try:
                            temp_folder = "/home/jesse/Documents/temp_usb/b/"
                            if not os.path.exists(temp_folder):
                                os.mkdir(temp_folder)
                            if os.stat(temp_folder).st_size != 0:
                                subprocess.check_output("rm -rf " + temp_folder, shell=True)

                            with zipfile.ZipFile(os.path.join(subfolder, file), 'r') as zip_ref:
                                zip_ref.extractall(temp_folder)
                                manifest_links, add = [], 1
                                for zipfolder, _, zipfiles in os.walk(temp_folder):
                                    for zfile in zipfiles:
                                        if "index.html" in zfile:
                                            manifest_links = self.get_manifest_link_html(zipfolder + "/" + zfile)
                                        # print(zipfolder, zfile)
                                        if "manifest" in zfile:
                                            # manifest_content = open(zipfolder + zfile, "r").read()
                                            try:
                                                json.loads(open(zipfolder + "/" + zfile).read())
                                            except:
                                                print(file, zfile, "doesnt contain json")
                                                continue
                                            for link in manifest_links:
                                                if zfile in link:
                                                    gotone += add
                                                    add = 0

                                                    self.print_green(file + " " + zfile + " contains json and in manifest links")
                                            print(file, zfile, "contains json")
                            subprocess.check_output("rm -rf " + temp_folder, shell=True)
                        
                        except Exception as e:
                            print("unzipping went wrong", subfolder, file)
                            print(e)
                        break
        print("gotone", gotone)
        
    async def get_content_url_async(self, url, header):
        import aiohttp
        async with aiohttp.ClientSession(headers=header) as session:
            async with session.get(url, timeout=60) as resp:
                print(resp.status)
                print(await resp.text())
                return resp.read()


    def scrape_index_find_manifest(self, urls, folder, invalid_scraping_indexes):
        header = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}
        
        output_folder = os.getcwd() + "/missing_manifests_indexes/"
        if not os.path.exists(output_folder):
            os.mkdir(output_folder)
        # from selenium import webdriver
        # from selenium.webdriver.chrome.options import Options


        # options = Options()
        # options.headless = True
        # driver = webdriver.Chrome(options=options)
        # invalid_scraping_indexes = []
        count = 0
        for site in urls:
            print(site)
            count += 1
            if not site:
                continue
            if site in invalid_scraping_indexes:
                continue
            if not site.startswith("https://"):
                url = "https://" + site
            else:
                url = site
            content = ""
            local_file = output_folder + site.replace("-", "_").replace("/", "_")
            if os.path.exists(local_file):
                content = open(local_file, "r").read()
            if not content:
                import time
                start_time = time.time()
                content = self.get_content_url(url)
                print("requests took", time.time() - start_time, "for", url)
                if content:
                    print("content len", len(content))
                if not content:
                    invalid_scraping_indexes.append(site)
                    self.file_interactor.save_object(invalid_scraping_indexes, "invalid_scraping_indexes")
                    continue

            if content and not os.path.exists(local_file) or content and os.stat(local_file).st_size == 0:
                print("local file saving", local_file)
                with open(local_file, "w") as f:
                    f.write(content)
            if not content:
                print(site, "no content")
                continue
            print(site, "valid content")
            links = []
            for link in bs4.BeautifulSoup(content, "html.parser", from_encoding="iso-8859-1").find_all('link', {'rel': "manifest"}):
                if link.has_attr('href'):
                    links.append(link['href'])
            if len(links) > 0:
                print("links", links, site)
                for link in links:
                    while link.startswith("."):
                        link = link.strip(".")
                    while link.startswith("/"):
                        link = link.strip("/")

                    if link.startswith("https://"):
                        url = link
                    elif url.strip("https://") not in link:
                        if not url.endswith("/") and not link.startswith("/"):
                            url = url + "/" + link
                        else:
                            url = url + link
                    elif "http" not in link:
                        url = "https://" + link
                    else:
                        url = link
                    try:
                        # print("trying to open url", url)
                        responses = requests.get(url, headers=header, timeout=60)
                        manifest_content = responses.text
                        # self.print_green("opening url 2 " + url + " ")
                    except Exception as e:
                        print("Could not open url 2 " + url)
                        print("Error", e)
                        continue
                    try:
                        json.loads(manifest_content.encode().decode("utf-8-sig"))
                    except Exception as e:
                        print("invalid json", manifest_content[:200])
                        print(e, e.__class__.__name__)
                        invalid_scraping_indexes.append(site)
                        self.file_interactor.save_object(invalid_scraping_indexes, "invalid_scraping_indexes")
                        continue

                    if manifest_content != "":
                        print("Saving manifest content", folder + site + "/manifest.json")
                        try:
                            with open(folder + site + "/manifest.json", "w") as f:
                                f.write(json.dumps(json.loads(manifest_content.encode().decode("utf-8-sig")), sort_keys=True, indent=4))
                        except:
                            print("Saving json failed, retrying directly")
                            with open(folder + site + "/manifest.json", "w") as f:
                                f.write(json.dumps(manifest_content, sort_keys=True, indent=4))
                        print("Manifest content", len(manifest_content))
            # for link in bs4.BeautifulSoup(content, "html.parser", from_encoding="iso-8859-1").find_all('link', {"rel": "icon"}):
            #     if link.has_attr('href'):
            #         links.append(link['href'])
            # if len(links) > 0:
            #     print("icon link found", site, links)
            # else:
            #     print("no links found", site)
            #     for l in content.split("\n"):
            #         if "manifest" in l:
            #             print("manifest", l[:300])

                invalid_scraping_indexes.append(site)
                self.file_interactor.save_object(invalid_scraping_indexes, "invalid_scraping_indexes")

    def get_lighthouse_scores(self, score_file_path, failed=[]):
        if os.stat(score_file_path).st_size == 0:
            print("skippung")
            return
        scores = []
        if score_file_path.endswith("json.gz"):
            try:
                with gzip.open(score_file_path, 'rt', encoding='UTF-8') as zipfile:
                    l = json.load(zipfile)
                l = ast.literal_eval(l)
            except:
                print("decompressing failed", score_file_path)
                failed.append(score_file_path.split(".json")[0])
                return failed, scores
        else:
            l = json.load(open(score_file_path, "r"))

        for cat in ['performance', 'accessibility', 'seo', 'best-practices']:
            scores.append(l['categories'][cat]['score'])
        return failed, scores

    def get_ylt_scores(self, score_file_path, failed=[]):
        scores = []
        print(score_file_path)
        if score_file_path.endswith(".gz"):
            try:
                with gzip.open(score_file_path, 'r') as zip_ref:
                    content = zip_ref.read().decode("utf-8")
                scoreProfiles = "".join(content.split("scoreProfiles")[1].split(" ")[1:])[:-2]
                score_dic = ast.literal_eval(scoreProfiles)
                for complexity in ['domComplexity', 'cssComplexity', 'badJavascript', 'pageWeight', 'requests']:
                    scores.append(score_dic['generic']['categories'][complexity]['categoryScore'])
            except Exception as e:
                failed.append(score_file_path.split(".json")[0])
                print(str(e)[:1000])
                exit(0)
        else:
            try:
                if os.stat(score_file_path).st_size / 10 ** 6 > 100:
                    print("large", score_file_path)
                    import ijson
                    score_json = json.load(open(score_file_path, "r"))
                    score_json = ast.literal_eval(score_json)
                    for complexity in ['domComplexity', 'cssComplexity', 'badJavascript', 'pageWeight', 'requests']:
                        scores.append(sub_json[complexity]['categoryScore'])
                else:
                    json_string = open(score_file_path, "r").read()
                    score_json = json.loads(json_string)
            except Exception as e:
                import time
                time.sleep(2)
                print("json loads failed", score_file_path, str(e)[:2000], "hoi", scores)
                failed.append(score_file_path.split(".json")[0])

            if not len(scores):
                print("no score_json", score_file_path, len(score_json))
                for complexity in ['domComplexity', 'cssComplexity', 'badJavascript', 'pageWeight', 'requests']:
                    scores.append(score_json['scoreProfiles']['generic']['categories'][complexity]['categoryScore'])
        if len(scores):
            if None in scores:
                print("none in scores", score_file_path)
                exit(0)
            return failed, scores
        else:
            print(score_file_path, "no scores")
            exit(0)
        return failed, scores

    def process_lighthouse_scores(self, lighthouse_folder, non_duplicate_sites, output_file, failed=set()):
        extract = tldextract.TLDExtract()
        count = 0
        if not output_file:
            output_file = os.getcwd() + "/Scores/lighthouse_aggregated.csv"

        if not os.path.exists(output_file):
            with open(output_file, "w") as f:
                f.write("website;performance;accessibility;seo;best-practices\n")
        handled = self.data_aggregator.get_col_csv(output_file, 0)
        with open(output_file, "r") as f:
            for l in f:
                if not l.startswith("website"):
                    if "None" in l:
                        failed.add(l.split(";")[0])
                        print("None", l, l.split(";")[0])
        for subdir, _, score_files in os.walk(lighthouse_folder):
            for score_file in score_files:
                file_name = score_file.split(".json")[0]
                if file_name.startswith("www."):
                    file_name = file_name[4:]
                site = file_name.split(".json")[0]
                # failed, scores = self.get_lighthouse_scores(os.path.join(lighthouse_folder, score_file), failed)
                # if None in scores:
                #     failed.append(score_file.split(".json")[0])
                #     print("nones", score_file, scores)
                #     continue
                if site in handled or site not in non_duplicate_sites:
                    continue
                failed, scores = self.get_lighthouse_scores(os.path.join(lighthouse_folder, score_file), failed)
                if None in scores:
                    failed.add(score_file.split(".json")[0])
                    # print("nones", score_file, scores)
                    continue

                if score_file.split(".json")[0] in failed:
                    failed.remove(score_file.split(".json")[0])
                with open(output_file, "a+") as f:
                    f.write(site + ";" + ";".join([str(x) for x in scores]) + "\n")
                print(count, "lighthouse", score_file, scores)
                count += 1
        return failed

    def process_yellowlabtools_scores(self, yellowlabtools_folder, non_duplicate_sites, output_file, failed=set()):
        extract = tldextract.TLDExtract()
        
        if not output_file:
            output_file = os.getcwd() + "/Scores/ylt_aggregated.csv"
        if not os.path.exists(output_file):
            with open(output_file, "w") as f:
                f.write("website;domComplexity;cssComplexity;badJavascript;pageWeight;requests\n")

        handled = set(self.data_aggregator.get_col_csv(output_file, 0))
        for subdir, _, score_files in os.walk(yellowlabtools_folder):
            for score_file in score_files:
                # if "marieclair"  in score_file:
                #     continue
                file_name = score_file.split(".json.gz")[0]
                if file_name.startswith("www."):
                    file_name = file_name[4:]
                site = file_name.split(".json")[0]
                if site in handled or site not in non_duplicate_sites:
                    continue
                print("ylt processing site", site, yellowlabtools_folder, score_file, len(handled))

                if os.stat(os.path.join(yellowlabtools_folder, score_file)).st_size == 0:
                    self.print_red("no size", site, yellowlabtools_folder)
                    failed.add(site)
                    continue
                failed, scores = self.get_ylt_scores(os.path.join(yellowlabtools_folder, score_file), failed)
                print(len(handled), "ylt",  ";".join([str(x) for x in scores]), score_file)
                if len(scores):
                    if site in failed:
                        failed.remove(site)

                    with open(output_file, "a+") as f:
                        f.write(site + ";" + ";".join([str(x) for x in scores]) + "\n")
                    handled.add(site)
        return failed

    def check_ylt_csv(self, csv_path, list, local_var_name="filtered_ylt_pandas", output_path=""):
        filtered_data = self.file_interactor.load_object_exists(local_var_name)
        print(local_var_name)
        if (type(filtered_data) != type(pd.DataFrame()) and not filtered_data) or filtered_data.empty:
            filtered_data = pd.DataFrame()
            data = pd.read_csv(csv_path, sep=";")
            present, not_present, almost_present = [], [], []
            list_domains, list_domains_suffix = [], self.file_interactor.load_object_exists("list_domains_suffix") or ([], [])
            if not list_domains_suffix:
                for item in list:
                    ext = extract(item)
                    list_domains.append(ext.domain)
                    list_domains_suffix.append(ext.domain + "." + ext.suffix)

                self.file_interactor.save_object(list_domains_suffix, "list_domains_suffix")

            for website in data['website']:
                website_data = website
                if type(website) == type(""):
                    if "www." in website:
                        website = website[4:]
                    ext = extract(website)
                    if ext.domain + "." + ext.suffix in list_domains_suffix:
                        if website in present:
                            print(website, "already present")
                            continue
                        present.append(website)
                        filtered_data = filtered_data.append(data.loc[data['website'] == website_data], ignore_index=True)
                    else:
                        if ext.domain in list_domains:
                            almost_present.append(website)
                        else:
                            not_present.append(website)
            print(len(list), len(list_domains_suffix), len(present), len(not_present), len(almost_present))
            print(not_present[:10], almost_present[:10])
            print(len(filtered_data))
            filtered_data.to_csv(output_path)
        self.file_interactor.save_object(filtered_data, local_var_name)

    def extract_domain_suffix_list(website_list):
        temp = []
        extract = tldextract.TLDExtract()
        for site in website_list:
            ext = extract(site)
            temp.append(ext.domain + "." + ext.suffix)
        return temp

    def get_final_sites_list(self, raw_website_list):
        sw_domain_sites_list = SWPostProcessor.extract_domain_suffix_list(raw_website_list)
        (top1m_sites_domain_mapping, sw_sites_list_mapping) = (self.file_interactor.load_object_exists("top1m_sites_domain_mapping"), {}) or ({}, {})
        final_sites = self.file_interactor.load_object_exists("final_sites")
        extract = tldextract.TLDExtract()
        
        if not top1m_sites_domain_mapping:
            with open(os.getcwd() + "/top-1m.csv", "r") as f:
                for l in f:
                    ext = extract(l.split(",")[1])
                    if ext.domain not in top1m_sites_domain_mapping:
                        top1m_sites_domain_mapping[ext.domain] = [ext.suffix]
                    else:
                        top1m_sites_domain_mapping[ext.domain].append(ext.suffix)
            self.file_interactor.save_object(top1m_sites_domain_mapping, "top1m_sites_domain_mapping")

        usb_sites_domain_mapping = {}
        usb_sites = self.file_interactor.load_object_exists("usb_sites")
        for site in usb_sites:
            ext = extract(site)
            if ext.domain not in usb_sites_domain_mapping:
                usb_sites_domain_mapping[ext.domain] = [ext.suffix]
            else:
                usb_sites_domain_mapping[ext.domain].append(ext.suffix)
        
        print("top1m domains", len(top1m_sites_domain_mapping.keys()), "usb domains", len(usb_sites_domain_mapping.keys()))
        top1m_usb_overlap = set(usb_sites_domain_mapping)
        top1m_usb_overlap.difference_update(set(top1m_sites_domain_mapping.keys()))
        print("top1m usb missing", len(top1m_usb_overlap))

        sw_multiple_domains = set()
        for site in sw_domain_sites_list:
            ext = extract(site)
            if ext.domain not in sw_sites_list_mapping:
                sw_sites_list_mapping[ext.domain] = [ext.suffix]
            else:
                sw_multiple_domains.add(ext.domain)
                sw_sites_list_mapping[ext.domain].append(ext.suffix)

        usb_sites_set = set(usb_sites_domain_mapping.keys())
        sw_sites_set = set(sw_sites_list_mapping.keys())
        print("usb sites set", len(usb_sites_set), "sw sites set", len(sw_sites_set), "union length", len(usb_sites_set.intersection(sw_sites_set)))

        usb_sw_overlap = set(usb_sites_domain_mapping.keys())
        usb_sw_overlap.difference_update(set(sw_sites_list_mapping.keys()))

        print("usb sw missing", len(usb_sw_overlap), list(usb_sw_overlap))
        print("multiple domains", len(sw_multiple_domains), list(sw_multiple_domains)[:10], len(sw_sites_list_mapping.keys()))

        sw_usb_overlap = set(sw_sites_list_mapping.keys())
        # print("sw usb overlap len 1", len(sw_usb_overlap))
        sw_usb_overlap.difference_update(set(usb_sites_domain_mapping.keys()))
        # print("sw usb overlap len 2", len(sw_usb_overlap))

        sw_sites_set.difference_update(sw_usb_overlap)
        print("sw usb missing", len(sw_usb_overlap), list(sw_usb_overlap)[:10])
        print("final sites len", len(sw_sites_set), len(sw_sites_set.intersection(usb_sites_set)), list(sw_sites_set)[:10])
        print("feature in final", "feature" in final_sites, "tekfullfilmizle1", "tekfullfilmizle1" in final_sites)
        if len(final_sites) == 0:
            final_sites_set = sw_sites_set.copy()
            final_sites_set.add("ffm")
            final_sites_set.add("tekfullfilmizle1")
            final_sites_set.add("mejortorrento")

            usb_sw_linker = {}
            final_sites_domains = {}
            with open(os.getcwd() + "/local_vars/usb_sw_linker", "r") as f:
                for l in f:
                    l = l.strip()
                    usb_sw_linker[l.split(";")[0]] = l.split(";")[1]
            for usb_site in usb_sw_linker:
                ext = extract(usb_site)
                final_sites_domains[ext.domain] = ext.suffix
                final_sites[usb_site] = usb_sw_linker[usb_site]

            print("final sites after linekr", final_sites)
            unknown_domains = []
            c = 0
            for domain in final_sites_set:
                if not domain or domain in final_sites:
                    continue
                if (domain in sw_sites_list_mapping and domain + "." + sw_sites_list_mapping[domain][0] in final_sites) or (domain in usb_sites_domain_mapping and domain + "." + usb_sites_domain_mapping[domain][0] in final_sites):
                    continue
                domain_linker_check = [domain in y for y in [usb_sw_linker[x] for x in usb_sw_linker]]
                if domain in usb_sw_linker or True in domain_linker_check:
                    continue
                best_suffix = None
                if domain in top1m_sites_domain_mapping:
                    for suffix in sw_sites_list_mapping[domain]:
                        if suffix in top1m_sites_domain_mapping[domain]:
                            best_suffix = top1m_sites_domain_mapping[domain][top1m_sites_domain_mapping[domain].index(suffix)]
                            break
                # else:

                # for suffix in sw_sites_list_mapping[domain]:
                    # if domain in top1m_sites_domain_mapping and suffix in top1m_sites_domain_mapping[domain]:
                        # if best_suffix == None or best_suffix > top1m_sites_domain_mapping[domain].index(suffix):
                            # best_suffix = top1m_sites_domain_mapping[domain].index(suffix)                
                # if best_suffix == None:
                if domain in sw_sites_list_mapping and domain in usb_sites_domain_mapping:
                    if sw_sites_list_mapping[domain] == usb_sites_domain_mapping[domain] and len(sw_sites_list_mapping[domain]) == 1:
                        final_sites[domain + "." + usb_sites_domain_mapping[domain][0]] = domain + "." + sw_sites_list_mapping[domain][0]
                        continue
                    elif len(sw_sites_list_mapping[domain]) == 1 and sw_sites_list_mapping[domain][0] in usb_sites_domain_mapping[domain]:
                        final_sites[domain + "." + usb_sites_domain_mapping[domain][usb_sites_domain_mapping[domain].index(sw_sites_list_mapping[domain][0])]] = domain + "." + sw_sites_list_mapping[domain][0]
                        continue
                    elif len(usb_sites_domain_mapping[domain]) == 1 and usb_sites_domain_mapping[domain][0] in sw_sites_list_mapping[domain]:
                        final_sites[domain + "." + usb_sites_domain_mapping[domain][0]] = domain + "." + sw_sites_list_mapping[domain][sw_sites_list_mapping[domain].index(usb_sites_domain_mapping[domain][0])]
                        continue
                if "showbox" in domain:
                    print("showbox domain", best_suffix, sw_sites_list_mapping[domain])
                    print(usb_sites_domain_mapping[domain])
                    if domain in final_sites:
                        print(final_sites[domain])

                if best_suffix != None:
                    if best_suffix in sw_sites_list_mapping[domain] and best_suffix in usb_sites_domain_mapping[domain]:
                        final_sites[domain + "." + best_suffix] = domain + "." + best_suffix
                    else:
                        c+= 1
                        print(domain, sw_sites_list_mapping[domain], usb_sites_domain_mapping[domain])
                        # final_sites[domain] = top1m_sites_domain_mapping[domain][best_suffix]
                else:
                #     sub_domains = []
                #     for sub_domain in top1m_sites_domain_mapping:
                #         if domain:
                #             if domain in sub_domain:
                #                 sub_domains.append(sub_domain)
                #     best_suffixes_sub_domain = []
                #     for sub_domain in sub_domains:
                #         for suffix in sw_sites_list_mapping[domain]:
                #             if suffix in top1m_sites_domain_mapping[sub_domain]:
                #                 if best_suffix == None or best_suffix > top1m_sites_domain_mapping[sub_domain].index(suffix):
                #                     # print(sub_domain in top1m_sites_domain_mapping, top1m_sites_domain_mapping[sub_domain].index(suffix))
                #                     best_suffix = top1m_sites_domain_mapping[sub_domain].index(suffix)
                #         if best_suffix != None:
                #             # print("domain", domain + "." + suffix, "subdomain", sub_domain, top1m_sites_domain_mapping[sub_domain], best_suffix)
                #             best_suffixes_sub_domain.append((sub_domain, best_suffix))
                #             best_suffix = None
                #     # if best_suffixes_sub_domain != []:
                #         # print("best suffixes sub domain", best_suffixes_sub_domain, domain, suffix)
                #     # final_sites[domain] = top1m_sites_domain_mapping[sub_domain][best_suffix]
                    if best_suffix == None:
                        for suffix in sw_sites_list_mapping[domain]:
                            unknown_domains.append((domain, suffix))
            print("unknown", len(unknown_domains), list(unknown_domains)[:10])
            print(c)

        file_interactor.save_object(final_sites, "final_sites")
        print("final sites", len(final_sites))
        return final_sites

    def get_final_sites_manifests(self, final_sites, sw_base_folder):
        final_sites_manifests = file_interactor.load_object_exists("final_sites_manifests") or set()
        # final_sites_manifests = set()
        if len(final_sites_manifests) == 0:
            c = 0
            for usb_site in final_sites:
                sw_site = final_sites[usb_site]
                ext = extract(sw_site)
                for sw_folder in os.listdir(sw_base_folder):
                    if ext.domain + "." + ext.suffix in sw_folder:
                        manifestFound = False
                        for subdir, _, files in os.walk(os.path.join(sw_base_folder, sw_folder)):
                            for file in files:
                                if not manifestFound and "manifest.json" in file:
                                    manifestFound = True
                                    break
                            print(files, manifestFound)
                            
                        if manifestFound:
                            c += 1
                            final_sites_manifests.add((usb_site, sw_site))
            print(c)
            
            file_interactor.save_object(final_sites_manifests, "final_sites_manifests")
        return list(final_sites_manifests)
    
    def get_valid_sw_paths(self, sw_base_folder):
        valid_sw_paths = file_interactor.load_object_exists("valid_sw_paths") or {}

        sw_base_subdir_mapping = {}
        for subdir, _, _ in os.walk(sw_base_folder):
            subdir_site = subdir.split("/")[-1]
            if subdir_site.startswith("www."):
                subdir_site = ".".join(subdir_site.split(".")[1:])
            subdir_site = extract(subdir_site)
            sw_base_subdir_mapping[subdir_site.domain + "." + subdir_site.suffix] = subdir

        print("sw base subdir mapping", len(sw_base_subdir_mapping))
        for key in sw_base_subdir_mapping:
            print("sw base subdir mapping example", key, sw_base_subdir_mapping[key])
            break
        if not len(valid_sw_paths):
            for (_, sw_site) in final_sites_manifests:
                if sw_site in sw_base_subdir_mapping:
                    valid_sw_paths[sw_site] = sw_base_subdir_mapping[sw_site]
                    continue
                for sw_domain_suffix in sw_base_subdir_mapping:
                    subdir = sw_base_subdir_mapping[sw_domain_suffix]
                    subdir_site = subdir.split("/")[-1]
                    if subdir_site.startswith("www."):
                        subdir_site = ".".join(subdir_site.split(".")[1:])
                    subdir_site = extract(subdir_site)
                    if sw_site in subdir:
                        print(subdir_site)
                    if sw_site == subdir_site.domain + "." + subdir_site.suffix:
                        if subdir not in valid_sw_paths:
                            valid_sw_paths[sw_site] = sw_base_subdir_mapping[subdir]
                        else:
                            print("subdir in valid already", subdir, sw_site, valid_sw_paths[subdir])
        valid_sw_paths["www.trondheim.no"] = os.path.join(sw_base_folder, "www.trondheim.no")
        file_interactor.save_object(valid_sw_paths, "valid_sw_paths")
        return valid_sw_paths

    def save_manifest_from_links(self, manifest_links, site, output_folder):
        print("manifest links for local save", manifest_links, site)
        for link in manifest_links:
            no_https_start = False
            site_ext = extract(site)
            ext = extract(link)
            if not link.startswith("https"):
                no_https_start = True
            while link.startswith(".") or link.startswith("/"):
                link = link[1:]
            if no_https_start:
                link = "https://www." + site_ext.domain + "." + site_ext.suffix + "/" + link
            manifest_content = self.url_interactor.get_content_url(link)
            if manifest_content:
                try:
                    json.loads(manifest_content)
                except Exception as e:
                    print("loading json failed", link)
                    try:
                        manifest_content = manifest_content.encode().decode("utf-8-sig")
                        json.loads(manifest_content)
                    except Exception as e2:
                        print(e2)
                        continue
                    # print(e)
                    # continue
                with open(os.path.join(output_folder, "manifest.json"), "w") as f:
                    print("writing", manifest_content[:50], "to", os.path.join(output_folder, "manifest.json"))
                    f.write(manifest_content)
                break

    def get_index_usb_site(self, webapp_folder, usb_site):
        usb_files = [os.path.join(webapp_folder, f) for f in os.listdir(webapp_folder) if os.path.isfile(os.path.join(webapp_folder, f)) and ".zip" in f]
        temp_folder = "/home/jesse/c/"

        for file in usb_files:
            if usb_site in file:
                shutil.rmtree(temp_folder)
                os.mkdir(temp_folder)
                with zipfile.ZipFile(os.path.join(file), 'r') as zip_ref:
                    zip_files = zip_ref.namelist()
                    for zfile in zip_files:
                        if "index.html" in zfile:
                            try:
                                zip_ref.extract(zfile, temp_folder)
                            except:
                                print("unzipping failed")
                                continue
                            manifest_urls = self.get_manifest_link_html(os.path.join(temp_folder, zfile))
                            if manifest_urls and len(manifest_urls) > 0:
                                return manifest_urls
                    # zip_ref.extractall(temp_folder)
                    # for zipfolder, _, zipfiles in os.walk(temp_folder):
                    #     for zfile in zipfiles:
                    #         if "index.html" in zfile:
                    #             return self.get_manifest_link_html(os.path.join(zipfolder + "/" + zfile))
                                # return open(os.path.join(zipfolder + "/" + zfile), "rb").read()
                                # manifest_links = self.get_manifest_link_html(zipfolder + "/" + zfile)
        usb_folders = [os.path.join(webapp_folder, f) for f in os.listdir(webapp_folder) if os.path.isdir(os.path.join(webapp_folder, f))]
        for folder in usb_folders:
            folder = self.data_aggregator.string_usb_to_csv(folder)
            if usb_site in folder:
                for subfolder, _, files in os.walk(folder):
                    for file in files:
                        if file == "index.html":
                            return self.get_manifest_link_html(os.path.join(subfolder, file))
                            # open(os.path.join(subfolder, file), "r").read()
    
    def get_usb_sw_links(self, webapp_base_folder, sw_base_folder):
        extract = tldextract.TLDExtract()
        folders = [os.path.join(sw_base_folder, f) for f in os.listdir(sw_base_folder) if os.path.isdir(os.path.join(sw_base_folder, f))]

        usb_sites = self.webapp_post_processor.get_usb_sites(webapp_base_folder)

        usb_sw_linker = {}
        usb_sw_no_link = set()
        for folder in folders:
            if os.path.exists(os.path.join(folder, "/manifest.json")):
                if os.path.exists(os.path.join(folder, "/beautified.js")):
                    sw_ext = extract(folder.split("/")[-1])
                    if sw_ext.domain + "." + sw_ext.suffix in usb_sites:
                        usb_sw_linker[sw_ext.domain + "." + sw_ext.suffix] = sw_ext.domain + "." + sw_ext.suffix
                    else:
                        usb_sw_no_link.add(sw_ext.domain + "." + sw_ext.suffix)
        return usb_sw_linker, usb_sw_no_link

def pick_n_random(array, n):
    result = []
    while n > 0:
        choice = random.choice(array)
        result.append(choice)
        array.remove(choice)
        n -= 1
    
    return result

if __name__ == "__main__":
    debug = True
    filtered_sites = []
    with open(os.getcwd() + "/final_sites.txt", "r") as f:
        for l in f:
            filtered_sites.append(l.strip())

    url_interactor = SW_processor.URLInteractor()
    sw_post_processor = SWPostProcessor()
    web_app_post_processor = WebAppPostProcessor()
    file_interactor = FileInteractor()
    data_aggregator = DataAggregator()
    extract = tldextract.TLDExtract()
    
    sw_base_folder = os.getcwd() + "/SWs/last_sws_desktop_manifests/"
    webapp_base_folder = "/media/jesse/second_linux/usb_webapps/"
    imported_scripts_folder = os.getcwd() + "/SWs/imported_scripts/"
    webapp_base_folder = "/media/jesse/second_linux/non_zero_html/"
    
    valid_sw_paths = sw_post_processor.get_valid_sw_paths(sw_base_folder)
    # web_app_post_processor.get_small_indexes(webapp_base_folder)
    incorrect_resources_html, not_present_html = web_app_post_processor.get_incorrect_resources(webapp_base_folder, ".html", valid_sw_paths)
    incorrect_resources_js, not_present_js = web_app_post_processor.get_incorrect_resources(webapp_base_folder, ".js", valid_sw_paths)
    incorrect_resources_css, not_present_css = web_app_post_processor.get_incorrect_resources(webapp_base_folder, ".css", valid_sw_paths)
    if debug:
        print(len(incorrect_resources_html), "incorrect html", len(not_present_html), "missing html")
        print(len(incorrect_resources_js), "incorrect js", len(not_present_js), "missing js")
        print(len(incorrect_resources_css), "incorrect css", len(not_present_css), "missing css")

    missing_sites_zip = file_interactor.load_object_exists("missing_sites_zip")
    new_present = {}
    usb_sw_linker = {}
    with open(os.getcwd() + "/local_vars/usb_sw_linker", "r") as f:
        for l in f:
            l = l.strip()
            usb_sw_linker[l.split(";")[0]] = l.split(";")[1]

    missing_manifest_sw_folders = set()
    for sw_folder in os.listdir(sw_base_folder):
        site = sw_folder.split("/")[-1]
        site = extract(site).domain + "." + extract(site).suffix
        if site not in valid_sw_paths:
            # print("joe", site, os.path.join(sw_base_folder, sw_folder))
            missing_manifest_sw_folders.add(os.path.join(sw_base_folder, sw_folder))

    valid_linked_sw_paths = file_interactor.load_object_exists("valid_linked_sw_paths")
    if valid_linked_sw_paths == None or not len(valid_linked_sw_paths):
        # sw_post_processor.get_missing_indexes(sw_base_folder)
        # sw_post_processor.get_missing_manifests(sw_base_folder)
        valid_linked_sw_paths = sw_post_processor.set_valid_linked_sw_paths(sw_base_folder)

    for sw in valid_linked_sw_paths:
        size = os.stat(valid_linked_sw_paths[sw]).st_size
        # if size > 300 and size < 1200:
        #     sw_content = open(valid_linked_sw_paths[sw], "r").read()
        #     if "importscripts" not in sw_content.lower():
        #         print("no importscripts", sw)
        #     else:
        #         print("yes importscripts", sw)
        # index_content = open(valid_linked_sw_paths[sw].split("beautified.js")[0] + 'index.html', "r").read()
        # manifest_urls = sw_post_processor.get_manifest_link_html(index_content, content=True)
        # if not len(manifest_urls):
        #     print("no manifest urls", sw, valid_linked_sw_paths[sw])
    # exit(0)

    webapp_base_folders = ["/media/jesse/second_linux/non_zero_html/", "/media/jesse/second_linux/incorrect_resources/", "/media/jesse/second_linux/usb_webapps/"]

    webapp_site_sw_site_linker = file_interactor.load_object_exists("webapp_site_sw_site_linker") or set()
    sws = [x[1] for x in webapp_site_sw_site_linker]

    random_sites = file_interactor.load_object_exists("random_sites") or pick_n_random(final_sites_manifests, 30)
    print("random sites", random_sites)

    valid_linked_sw_paths_domain_suffix = file_interactor.load_object_exists("valid_linked_sw_paths_domain_suffix") or {}
    base_three_domains = {"renault": "fr", "properati": "com.ar", "pinterest": "com", "serene-production-ezycommerce.ezyflight": "se", "michaelpage": "com", "tastemade": "com.br", \
                     "mini": "co.uk", "emerald.widgetbot": "io", "underarmour": "co.jp", "chrono24": "com", "edreams": "com", "europcar": "co.uk", "gogocarto": "fr", "clasf": "com.br", \
                     "ifood": "com.br", "eventbrite": "co.uk", "fashiola": "co.uk", "avrotros": "nl", "adidas": "co.id", "cuponation": "com.mx", "centrum": "cz", "michelin": "ru", \
                     "ebay": "com", "pizzahut": "com.tw", "uol": "com.br", "wego": "co.in", "airbnb": "com", "habitissimo": "es", "supercheapauto": "com.au", "autofun": "co.th", \
                     "clearly": "ca", "developers.google": "com", "cloud.google": "com", "wne32.csb" : "app", "firebase.google": "com", "netbet": "de"}
    domain_blacklist = set(["renault", "pinterest", "centrum", "netbet", "widgetbot"])
    valid_linked_sw_paths_domain_suffix = {}
    three_domains_check = {}
    if len(valid_linked_sw_paths_domain_suffix) == 0:
        for site in valid_linked_sw_paths:
            if site.startswith("www."):
                site = site[4:]
            new_domain = ""
            if len(site.split(".")) == 2:
                domain = site.split(".")[0]
                suffix = site.split(".")[1]
            else:
                ext = extract(site)
                domain = ext.domain
                suffix = ext.suffix
                if domain in domain_blacklist:
                    continue
                domain = site.split(domain)[0] + domain

            if domain in base_three_domains:
                continue
            found = False
            for three_domain in base_three_domains:
                if domain in three_domain and suffix in base_three_domains[three_domain]:
                    found = True
                    break
            if found:
                continue

            if domain in valid_linked_sw_paths_domain_suffix:
                valid_linked_sw_paths_domain_suffix[domain].add(suffix)
                if len(domain.split(".")) > 1:
                    print("domain already present", site, domain, suffix)
            else:
                valid_linked_sw_paths_domain_suffix[domain] = set([suffix])
        for domain in base_three_domains:
            if domain in valid_linked_sw_paths_domain_suffix:
                print("three domain already in valid", domain, valid_linked_sw_paths_domain_suffix[domain])
                exit(0)
            valid_linked_sw_paths_domain_suffix[domain] = [base_three_domains[domain]]

        valid_linked_sw_paths_domain_suffix = sw_post_processor.get_single_domains(valid_linked_sw_paths_domain_suffix)
        # file_interactor.save_object(valid_linked_sw_paths_domain_suffix, "valid_linked_sw_paths_domain_suffix")

    valid_linked_sw_paths_domain_suffix = sw_post_processor.get_single_domains(valid_linked_sw_paths_domain_suffix)
    valid_linked_webapp_paths = file_interactor.load_object_exists("valid_linked_webapp_paths") or {}

    manifest_succeeded_scraping = file_interactor.load_object_exists("manifest_succeeded_scraping")
    final_sw_paths = file_interactor.load_object_exists("final_sw_paths") or {}
    # valid_linked_webapp_paths = {}
    if len(valid_linked_webapp_paths) == 0:
        for domain in valid_linked_sw_paths_domain_suffix:
            # if "filestash" not in domain:
            #     continue
            suffix = valid_linked_sw_paths_domain_suffix[domain]
            if domain + "." + suffix in valid_linked_webapp_paths:
                continue
            found = False
            for usb_site in usb_sw_linker:
                if domain + "." + suffix == usb_sw_linker[usb_site]:
                    for webapp_base_folder in webapp_base_folders:
                        for webapp_file in os.listdir(webapp_base_folder):
                            if found:
                                break
                            webapp_site = data_aggregator.string_usb_to_csv(webapp_file.split(" ")[0].split(".zip")[0])
                            if usb_site in webapp_site:
                                valid_linked_webapp_paths[domain + "." + suffix] = os.path.join(webapp_base_folder, webapp_file)
                                found = True
                                break
            for webapp_base_folder in webapp_base_folders:
                for webapp_file in os.listdir(webapp_base_folder):
                    if found:
                        break
                    webapp_site = data_aggregator.string_usb_to_csv(webapp_file.split(" ")[0].split(".zip")[0])

                    if domain + "." + suffix in webapp_site:
                        valid_linked_webapp_paths[domain + "." + suffix] = os.path.join(webapp_base_folder, webapp_file)
                        found = True
                        break
            if not found:
                if suffix:
                    print("webapp not found", "https://" + domain + "." + suffix)
                else:
                    print("webapp not found", "https://" + domain + suffix)
        # print(valid_linked_webapp_paths)
        # file_interactor.save_object(valid_linked_webapp_paths, "valid_linked_webapp_paths")
    # pwa_csv_file = os.getcwd() + "/CSVs/final_pwa.csv"

    # web_app_post_processor.get_webapp_results(valid_linked_webapp_paths, pwa_csv_file)
    
    ylt_scores_folders = [os.getcwd() + "/Scores/yellowlabtools", "/media/jesse/second_linux/Scores/yellowlabtools", "/media/jesse/second_linux/Scores/yellowlabtools_vm/yellowlabtools_vm", os.getcwd() + "/Scores/yellowlabtools"]
    final_ylt_csv = os.path.join(os.getcwd(), "CSVs", "final_ylt.csv")
    if os.path.exists(final_ylt_csv):
        ylt_sites = data_aggregator.get_col_csv(final_ylt_csv, "website", sep=";")
    else:
        ylt_sites = []

    lighthouse_scores_folders = ["/media/jesse/second_linux/Scores/lighthouse/", "/media/jesse/second_linux/Scores/lighthouse_vm/lighthouse/", os.getcwd() + "/Scores/lighthouse/"]
    final_lighthouse_csv = os.path.join(os.getcwd(), "CSVs", "final_lighthouse.csv")
    if os.path.exists(final_lighthouse_csv):
        lighthouse_sites = data_aggregator.get_col_csv(os.getcwd() + "/CSVs/final_lighthouse.csv", "website", sep=";")
    else:
        lighthouse_sites = []

    final_sites = file_interactor.load_object_exists("final_sites") or set()
    final_sw_paths = file_interactor.load_object_exists("final_sw_paths") or {}
    # final_sites, final_sw_paths = {}, {}
    if not len(final_sw_paths) or not len(final_sites):
        final_sites = set()
        final_sw_paths = {}
        for dom in valid_linked_sw_paths_domain_suffix:
            if valid_linked_sw_paths_domain_suffix[dom] != "":
                site = dom + "." + valid_linked_sw_paths_domain_suffix[dom]
            else:
                site = dom

            if site in final_sites:
                print("site already in final sites", site)
                exit(0)
            final_sites.add(site)
            for sw in os.listdir(sw_base_folder):
                if site == sw or "www." + site == sw:
                    final_sw_paths[site] = os.path.join(sw_base_folder, sw, "beautified.js")
                    break
            # sw_post_processor.get_missing_ylt(site, ylt_sites, ylt_scores_folders)
            # sw_post_processor.get_missing_lighthouse(site, lighthouse_sites, lighthouse_scores_folders)
        file_interactor.save_object(final_sites, "final_sites")
        file_interactor.save_object(final_sw_paths, "final_sw_paths")

    pwa_csv_file = os.getcwd() + "/CSVs/final_pwa.csv"
    sw_csv_file = os.getcwd() + "/CSVs/final_sw.csv"

    output_csv_path = os.getcwd() + "/CSVs/Final_sw_filtered.csv"
    # sw_post_processor.filter_csv_website_list(pwa_csv_file, final_sw_paths.keys(), output_csv_path)
    # sw_post_processor.filter_csv_website_list(sw_csv_file, final_sw_paths.keys(), output_csv_path)
    total = data_aggregator.get_frameworks_wappalyzer([os.getcwd() + x for x in ["/wappalyzer/"]], final_sw_paths.keys())
    data_aggregator.get_frameworks_whatruns([os.getcwd() + x for x in ["/whatruns_latest/", "/whatruns_bb/", "/whatruns_g/"]], final_sw_paths.keys(), total)


    features_csv_file = os.getcwd() + "/CSVs/final_features_temp.csv"
    manifest_csv_file = os.getcwd() + "/CSVs/final_manifest_temp.csv"

    # web_app_post_processor.get_webapp_results(valid_linked_webapp_paths, pwa_csv_file)
    # sw_post_processor.get_features_manifest_csvs(features_csv_file, manifest_csv_file, final_sw_paths)

    # output_csv_path = os.getcwd() + "/CSVs/Final_features_filtered.csv"
    # sw_post_processor.filter_csv_website_list(features_csv_file, final_sw_paths.keys(), output_csv_path)

    # output_csv_path = os.getcwd() + "/CSVs/Final_manifest_filtered.csv"
    # sw_post_processor.filter_csv_website_list(manifest_csv_file, final_sw_paths.keys(), output_csv_path)

    # output_csv_path = os.getcwd() + "/CSVs/Final_ylt_filtered.csv"
    # sw_post_processor.filter_csv_website_list(final_ylt_csv, final_sw_paths.keys(), output_csv_path)
    # print(list(final_sw_paths.keys())[:20], len(final_sw_paths.keys()), len(valid_linked_webapp_paths))
    exit(0)


    # whatruns_most_frequent = file_interactor.load_object_exists("most_frequent_whatruns_frameworks")
    # whatruns_most_frequent = None
    # if not whatruns_most_frequent:
    #     data_aggregator.get_frameworks_whatruns([os.getcwd() + x for x in ["/whatruns_latest/", "/whatruns_bb/", "/whatruns_g/"]], final_sw_paths.keys())
    #     whatruns_most_frequent = file_interactor.load_object_exists("most_frequent_whatruns_frameworks")
    # i = 1
    # for key in whatruns_most_frequent:
    #     print("Whatruns most frequent", i, "&", key, "&", whatruns_most_frequent[key])
    #     if i == 20:
    #         break
    #     i += 1
    # exit(0)

    failed = set()
    for lighthouse_folder in lighthouse_scores_folders:
        failed = sw_post_processor.process_lighthouse_scores(lighthouse_folder, final_sites, final_lighthouse_csv, failed)
    # print("failed", len(failed))
    # for site in failed:
    #     sw_post_processor.run_lighthouse(site, lighthouse_scores_folders)

    # # TODO no size prints
    failed = set()
    for ylt_folder in ylt_scores_folders:
        failed = sw_post_processor.process_yellowlabtools_scores(ylt_folder, final_sites, final_ylt_csv, failed)
    # print("final len", len(final_sites), len(failed))
    # for site in failed:
    #     sw_post_processor.run_ylt(site, ylt_scores_folders)

    # # exit(0)
    static_sw_paths = file_interactor.load_object_exists("static_sw_paths") or set()
    if not len(static_sw_paths):
        print("loading static importscripts")
        for sw_folder in os.listdir(sw_base_folder):
            for dom in valid_linked_sw_paths_domain_suffix:
                site = dom
                if valid_linked_sw_paths_domain_suffix[dom]:
                    site += "." + valid_linked_sw_paths_domain_suffix[dom]
                if site in sw_folder:
                    sw_path = os.path.join(sw_base_folder, sw_folder, "beautified.js")
                    # print(sw_path, sw_folder + sw_base_folder, type(sw_folder), type(sw_base_folder))
                    # print(os.path.join(sw_base_folder, sw_folder, "/beautified.js"))
                    if os.path.exists(sw_path):
                        content = sw_post_processor.remove_js_comments(open(sw_path, "r").read()).lower()
                        # print(content)
                        if "importscripts" in content.lower():
                            static_sw_paths.add(sw_path)
                    break

        file_interactor.save_object(static_sw_paths, "static_sw_paths")

    sw_paths_urls, sw_paths_no_urls = sw_post_processor.filter_sw_importscripts(static_sw_paths)
    url_local_file_linker = file_interactor.load_object_exists("url_local_file_linker")
    url_local_file_linker = None
    if not url_local_file_linker:
        url_local_file_linker = sw_post_processor.sw_scrape_importscripts(sw_paths_urls)
        file_interactor.save_object(url_local_file_linker, "url_local_file_linker")
    sw_csv_file = os.getcwd() + "/CSVs/final_sw.csv"
    print("urllocal linker len", len(url_local_file_linker))
    sw_post_processor.get_sw_results(final_sw_paths, sw_paths_urls, sw_csv_file)
    exit(0)

    # sw_post_processor.get_all_imports_importsfolder(imported_scripts_folder, url_local_file_linker)
    print("urllocal linker len", len(url_local_file_linker))

    # print("url local file linker length", len(url_local_file_linker), url_local_file_linker)
    # exit(0)

    features_csv_file = os.getcwd() + "/CSVs/final_features.csv"
    manifest_csv_file = os.getcwd() + "/CSVs/final_manifest.csv"
    sw_csv_file = os.getcwd() + "/CSVs/final_sw.csv"
    pwa_csv_file = os.getcwd() + "/CSVs/final_pwa.csv"

    # if not os.path.exists(features_csv_file) or not os.path.exists(manifest_csv_file) or os.path.exists(features_csv_file) and not os.stat(features_csv_file).st_size or \
    #    os.path.exists(manifest_csv_file) and not os.stat(manifest_csv_file).st_size:

    # if not os.path.exists(sw_csv_file):
    sw_post_processor.get_sw_results(final_sw_paths, sw_paths_urls, sw_csv_file)
    # if not os.path.exists(pwa_csv_file):
    web_app_post_processor.get_webapp_results(valid_linked_webapp_paths, pwa_csv_file)
    sw_post_processor.get_features_manifest_csvs(features_csv_file, manifest_csv_file, final_sw_paths)

    whatruns_most_frequent = file_interactor.load_object_exists("most_frequent_whatruns_frameworks")
    if not whatruns_most_frequent:
        data_aggregator.get_frameworks_whatruns([os.getcwd() + x for x in ["/whatruns_latest/", "/whatruns_bb/", "/whatruns_g/"]], final_sw_paths.keys())
        whatruns_most_frequent = file_interactor.load_object_exists("most_frequent_whatruns_frameworks")
    i = 1
    for key in whatruns_most_frequent:
        print("Whatruns most frequent", i, key, whatruns_most_frequent[key])
        if i == 20:
            break
        i += 1