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
        
    def get_frameworks_whatruns(self, whatruns_folders, valid_websites):
        total = {}
        count, small_content_count = 0, 0
        empty_whatruns, big_files, small_files, site_mismatch, non_empty, correct_files = [], [], [], [], [], []
        
        no_duplicate_websites = []
        with open(os.getcwd() + "/no_dup_websites_final.txt", "r") as f:
            for l in f:
                no_duplicate_websites.append(l.strip())
        present, not_present = [], []
        no_check = []
        for whatruns_folder in whatruns_folders:
            print("whatruns folder", whatruns_folder)
            for _, _, files in os.walk(whatruns_folder):
                for file in files:
                    file_check_name = file
                    if file.endswith(".txt"):
                        file_check_name = file[:-4]
                    if file.startswith("www."):
                        file_check_name = file_check_name[4:]
                    if not file_check_name:
                        no_check.append(file)
                    file_ext = extract(file_check_name)
                    if file_ext.domain + "." + file_ext.suffix in valid_websites:
                        if file_ext.domain + "." + file_ext.suffix not in present:
                            present.append(file_check_name)
                        else:
                            continue
                    else:
                        not_present.append(file_check_name)
                        continue
                    skip, temp = False, []
                    small = False
                    framework = False
                    if os.stat(whatruns_folder + file).st_size > 2000:
                        big_files.append(file.split(".txt")[0])
                    elif os.stat(whatruns_folder + file).st_size < 100:
                        small_files.append(file.split(".txt")[0])
                        small = True
                    elif os.stat(whatruns_folder + file).st_size > 100:
                        while file.split(".txt")[0] in small_files:
                            small_files.remove(file.split(".txt")[0])
                    with open(whatruns_folder + file, "r") as f:
                        if "overbo" in file:
                            print("overbo", whatruns_folder)
                        if file.split(".txt")[0] in non_empty:
                            continue
                        res = ""
                        l_count = 0
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

                            if l:
                                if "javaserver faces" in l.lower():
                                    print("Hosting panel", file)
                                if "web framework" in l.lower():
                                    framework = True
                                    continue
                                elif framework:
                                    if l not in ["Analytics", "Miscellaneous", "Advertising", "Sales and Marketing", "Javascript Graphics", "Programming Language", "Payment Processors", "Build CI Systems", "Maps", "Hosting Panel", "Search Engine", "Communication", "Font Script", "Web Server", "Web Server", "Operating System", "Rich Text Editors", "Dev Tools", "Cache", "Tag Managers", "Javascript Frameworks", "CDN"] and "framework" not in l.lower() and "frameworks" not in l.lower():
                                        temp.append(l)
                                    else:
                                        break
                                if empty:
                                    print(l_count, l)
                                res += l + "\n"
                                if "What runs ?" in l:
                                    empty = True
                                    if file.split(".txt")[0] not in empty_whatruns:
                                        if file.split(".txt")[0] not in non_empty:

                                            if "overbo" in file:
                                                print("overbo empty", whatruns_folder)
                                            empty_whatruns.append(file.split(".txt")[0])

                                    break
                                
                                non_empty.append(file.split(".txt")[0])
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
                    count += 1
                    if small:
                        if "What runs ?" in res:
                            small_content_count += 1

        print("whatruns total", total, len(present), len(not_present))
        remaining_set = set(valid_websites)
        remaining_set.difference_update(set(present))
        print("remaining set", len(remaining_set), list(remaining_set)[:20])
        print("small files", len(small_files), small_files[:3], "big files", len(big_files), big_files[:3])

        def hasNumbers(inputString):
            return any(char.isdigit() for char in inputString)

        import operator
        i = 0
        most_freq = {}
        while len(most_freq) != 20:
            if not total:
                break
            most_occurring = max(total.items(), key=operator.itemgetter(1))[0]

            if most_occurring in ["Javascript Frameworks", "Analytics", "Tag Managers", "Web Server", "Web Framework", "Conectar", "Advertising", "Programming Language", "Font Script", "Widgets", "CDN", "Miscellaneous", "Contraseña", "Sales and Marketing", "buscar personas, #hashtags, @páginas,! Grupos", "COSTARRICENSES", "Conéctese con amigos, familiares y el mundo que lo rodea.", "Ponte en contacto con tu familia, amigos o el mundo que te rodea.", "Compartir", "Comparta los momentos importantes de su vida con sus seres queridos.", "Descubrir", "Descubre gente nueva, crea nuevas conexiones y haz nuevos amigos.", " Nombre de usuario o correo electrónico", "Recuérdame", "INICIAR SESIÓN¿Olvidó su contraseña?", "Nombre de usuario", "Correo electrónico", "Nombre de usuario o correo electrónico", "Estoy de acuerdo con Condiciones de uso y .", "REGISTRARSE", "Costarricenses.cr es un proyecto oficial de AxiRED Internet Solutions Company, S.A.", "Involúcrese al WhatsApp  70 54 82 11", "Copyright © 2021 por AxiRED | La agencia de publicidad", "Ingeniería web por los mejores, Ingeniería web por ZARZA.", "Javascript Graphics", "Cache", "Build CI Systems", "Operating System", "CMS", "Captcha", "Dev Tools", "Communication", "Video", "Ruby on Rails 6.0.2", "Ruby on Rails 6.0.4", "JavaServer Pages 2.2", "JavaServer Pages 2.3"]:
                del total[most_occurring]
                continue

            i += 1
            if hasNumbers(most_occurring):
                # if "Ruby on Rails" in most_occurring:
                key = ""
                for part in most_occurring.split(" "):
                    if not hasNumbers(part):
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
                    print("l", l, splitted)
                    print("colindex", col_index)
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
    
    def get_webapp_results(self, pwa_results_csv_file, final_webapp_paths):
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
            file_interactor.append_line(pwa_results_csv_file, f'{webapp};{size};{html_count};{css_count};{js_count}\n')

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

    def set_valid_linked_sw_paths(self, manifest_potential):
        valid_linked_sw_paths = {}
        for sw_folder in manifest_potential:
            if (not os.path.exists(os.path.join(sw_folder, "manifest.json"))) or (os.path.exists(os.path.join(sw_folder, "manifest.json")) and os.stat(os.path.join(sw_folder, "manifest.json")).st_size == 0):
                if sw_folder in manifest_failed_scraping and len(manifest_potential[sw_folder]) == 1:
                    continue
                for url in manifest_potential[sw_folder]:
                    if "http" not in url:
                        while url.startswith(".") or url.startswith("/"):
                            url = url[1:]
                        url = "http://" + sw_folder.split("http")[-1][len(sw_base_folder):] + "/" + url
                    elif "https://" not in url:
                        if url.startswith("."):
                            url = url[1:]
                        if url.startswith("/"):
                            url = url[1:]
                        url = "https://" + sw_folder.split("/")[-1] + "/" + url
                    # else:
                        # print("done nothing", url)
                    if validators.url(url):
                        print("potential", sw_folder, url)
                        # c += 1
                        succeed = sw_post_processor.scrape_manifest(url, sw_folder)
                        if not succeed:
                            sw_post_processor.print_red("not succeeded", url)
                            manifest_failed_scraping.add(sw_folder)
                        else:
                            sw_post_processor.print_green("succeeded", sw_folder.split("/")[-1], url)
                            if sw_folder in manifest_failed_scraping:
                                manifest_failed_scraping.remove(sw_folder)
                    else:
                        sw_post_processor.print_red("no potential", sw_folder,  url)
                file_interactor.save_object(manifest_failed_scraping, "manifest_failed_scraping")
            elif os.path.exists(os.path.join(sw_folder, "manifest.json")):
                if os.path.exists(os.path.join(sw_folder, "beautified.js")):
                    valid_linked_sw_paths.add(os.path.join(sw_folder, "beautified.js"))
        file_interactor.save_object(valid_linked_sw_paths, "valid_linked_sw_paths")

    def get_features_manifest_csvs(self, features_csv_file, manifest_csv_file, final_sw_paths):
        manifest_keys = ["background_color", "categories", "description", "dir", "display", "iarc_rating_id", "icons", "lang", "name", "orientation", "prefer_related_applications", "protocol_handlers", "related_applications", "scope", "screenshots", "short_name", "shortcuts", "start_url", "theme_color"]

        # if not os.path.exists(features_csv_file):
        handle = open(features_csv_file, "w")
        handle.close()
    # if not os.path.exists(manifest_csv_file):
        handle = open(manifest_csv_file, "w")
        handle.close()

        failed = set()
        print("get features and manifest csv", len(final_sw_paths))
        for sw in final_sw_paths:
            feature_path = final_sw_paths[sw].split("beautified.js")[0] + "features.json"
            try:
                feature_data = self.data_aggregator.get_features_from_file(feature_path, return_json=False)
            except:
                print("failed")
                failed.add(sw)
                continue

            with open(features_csv_file, "a+") as f:
                if os.stat(features_csv_file).st_size == 0:
                    first_line = "website"
                    for item in feature_data:
                        first_line += f";{item[0]}"
                    f.write(first_line + "\n")
                ext = extract(sw)
                website_line = ext.domain + "." + ext.suffix
                for item in feature_data:
                    website_line += f";{item[1]}"
                f.write(website_line + "\n")

            json_data = self.data_aggregator.get_features_from_file(os.path.join(final_sw_paths[sw].split("beautified.js")[0], "manifest.json"), return_json=True)
            with open(manifest_csv_file, "a+") as f:
                ext = extract(sw)
                if os.stat(manifest_csv_file).st_size == 0:
                    first_line = "website"
                    # for item in manifest_data:
                    #     first_line += f";{item[0]}"
                    website = ext.domain + "." + ext.suffix
                    f.write("website" + ";" + ";".join(manifest_keys) + "\n")

                website_line = '"' + ext.domain + "." + ext.suffix + '"'
                
                for key in manifest_keys:
                    if key in json_data:
                        website_line += ';"' + str(1) + '"'
                    else:
                        website_line += ';"' + str(0) + '"'
                # website_line += '"'
                # print(website_line)
                if website_line == "":
                    print(sw_path, "empty line")
                    exit(0)
                # if manifest_write:
                f.write(website_line + "\n")
        print(failed)

    def get_final_sw_paths(self, sw_base_folder):
        added_domain_suffix_mapping = self.file_interactor.load_object_exists("sw_added_domain_suffix_mapping") or {}
        if len(added_domain_suffix_mapping) == 0:
            for sw in valid_linked_sw_paths:
                sw_splitted = sw.split(sw_base_folder)[1].split("beautified.js")[0].strip("/")
                sw_ext = extract(sw_splitted)
                if sw_ext.domain in added_domain_suffix_mapping:
                    added_domain_suffix_mapping[sw_ext.domain].add(sw_ext.suffix)
                else:
                    added_domain_suffix_mapping[sw_ext.domain] = set([sw_ext.suffix])
            self.file_interactor.save_object(added_domain_suffix_mapping, "sw_added_domain_suffix_mapping")

        final_sw_paths = self.file_interactor.load_object_exists("final_sw_paths") or {}
        if len(final_sw_paths) == 0:
            top_1m_domain_mapping = self.file_interactor.load_object_exists("top1m_sites_domain_mapping")
            for dom in added_domain_suffix_mapping:
                if len(added_domain_suffix_mapping[dom]) > 1:
                    for suffix in top_1m_domain_mapping[dom]:
                        if suffix in added_domain_suffix_mapping[dom]:
                            if os.path.exists(os.path.join(sw_base_folder, dom + "." + suffix)):
                                final_sw_paths[dom + "." + suffix] = os.path.join(sw_base_folder, dom + "." + suffix, "beautified.js")
                                break
                            elif os.path.exists(os.path.join("www.", sw_base_folder, dom + "." + suffix)):
                                final_sw_paths[dom + "." + suffix] = os.path.join("www.", sw_base_folder, dom + "." + suffix, "beautified.js")
                                break
                            else:
                                for sw_folder in os.listdir(sw_base_folder):
                                    sw_folder_splitted = sw_folder
                                    sw_folder_ext = extract(sw_folder_splitted)
                                    if dom + "." + suffix == sw_folder_ext.domain + "." + sw_folder_ext.suffix:
                                        final_sw_paths[dom + "." + suffix] = os.path.join(sw_base_folder, sw_folder, "beautified.js")
                                        break
                                break
                            # for sw_path in valid_linked_sw_paths:
                            #     sw_path_splitted = sw_path.split(sw_base_folder)[1].split("beautified.js")[0]
                            #     sw_path_ext = extract(sw_path_splitted)
                            #     # if sw_path_splitted.startswith("www."):
                            #         # sw_path_splitted = sw_path_splitted[4:]
                            #     # print(sw_path_splitted)
                            #     if dom + "." + suffix == sw_path_ext.domain + "." + sw_path_ext.suffix:
                            #         final_sw_paths[dom + "." + suffix] = sw_path
                            #         break
                            # break
                else:
                    suffix = list(added_domain_suffix_mapping[dom])[0]
                    if os.path.exists(os.path.join(sw_base_folder, dom + "." + suffix)):
                        final_sw_paths[dom + "." + suffix] = os.path.join(sw_base_folder, dom + "." + suffix, "beautified.js")
                    elif os.path.exists(os.path.join("www.", sw_base_folder, dom + "." + suffix)):
                        final_sw_paths[dom + "." + suffix] = os.path.join("www.", sw_base_folder, dom + "." + suffix, "beautified.js")
                    else:
                        for sw_path in valid_linked_sw_paths:
                            sw_path_splitted = sw_path.split(sw_base_folder)[1].split("beautified.js")[0]
                            sw_path_ext = extract(sw_path_splitted)
                            if dom == sw_path_ext.domain and suffix == sw_path_ext.suffix:
                                final_sw_paths[dom + "." + suffix] = sw_path
                                break
            self.file_interactor.save_object(final_sw_paths, "final_sw_paths")
        return final_sw_paths

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

    def get_potential_manifest_sws(self, sw_folders, manifest_potential, no_manifest_potential, empty_index):
        for folder in sw_folders:
            if folder in manifest_potential.keys() or folder in no_manifest_potential or folder in empty_index:
                continue
            if os.path.exists(os.path.join(folder, "beautified.js")):
                sw_ext = extract(folder.split("/")[-1])
                index_content = ""
                if sw_ext.domain + "." + sw_ext.suffix in usb_sites:
                    # print("present")
                    manifest_urls = sw_post_processor.get_index_usb_site(webapp_base_folder, sw_ext.domain + "." + sw_ext.suffix)
                    if manifest_urls and len(manifest_urls) == 0:
                        index_content = url_interactor.get_content_url("https://" + folder.split("/")[-1])
                    elif manifest_urls and len(manifest_urls) > 0:
                        manifest_potential[folder] = manifest_urls
                        continue
                    else:
                        index_content = url_interactor.get_content_url("https://" + folder.split("/")[-1])
                else:
                    index_content = url_interactor.get_content_url("https://" + folder.split("/")[-1])

                if not index_content:
                    print("empty index content", folder)
                    empty_index.add(folder)
                    continue
                manifest_urls = sw_post_processor.get_manifest_link_html(index_content, content=True)
                if len(manifest_urls) > 0:
                    with open(os.path.join(folder, "index.html"), "w") as f:
                        f.write(index_content)
                        # manifest_potential.add(folder)
                        manifest_potential[folder] = manifest_urls
                else:
                    no_manifest_potential.add(folder)

            file_interactor.save_object(manifest_potential, "manifest_potential")
            file_interactor.save_object(no_manifest_potential, "no_manifest_potential")
            file_interactor.save_object(empty_index, "empty_index")

            print(len(manifest_potential), len(no_manifest_potential), len(empty_index), sw_folders.index(folder), end="\r")

    def get_url_file_linker(self, imported_scripts_folder):
        url_local_file_linker = {}
        for file in os.listdir(imported_scripts_folder):
            url = file.split("/")[-1]
            url = self.url_interactor.inverse_replace_url(url)
            url_local_file_linker[url] = os.path.join(imported_scripts_folder, file)
        return url_local_file_linker

    def get_all_imports_importsfolder(self, imported_scripts_folder, url_local_file_linker):
        new_found_urls = set()
        failed_urls = self.file_interactor.load_object_exists("failed_urls_extra_imports") or set()
        imported_scripts_linker = file_interactor.load_object_exists("imported_scripts_linker") or {}
        files = [os.path.join(imported_scripts_folder, f) for f in os.listdir(imported_scripts_folder) if os.path.isfile(os.path.join(imported_scripts_folder, f))]
        new_import_paths, _ = self.filter_sw_importscripts(files)
        # folder_size = os.stat(imported_scripts_folder).st_size
        folder_size = sum(os.path.getsize(os.path.join(imported_scripts_folder,f)) for f in os.listdir(imported_scripts_folder) if os.path.isfile(os.path.join(imported_scripts_folder, f)))
    
        for path in new_import_paths:
            for url in new_import_paths[path]:
                print("new url potential", url)
                replaced_url = self.url_interactor.replace_url(url)
                new_file_path = os.path.join(imported_scripts_folder, replaced_url)[:255]
                if url in url_local_file_linker:
                    if path in imported_scripts_linker:
                        imported_scripts_linker[path].add(url_local_file_linker[url])
                    else:
                        imported_scripts_linker[path] = set([url_local_file_linker[url]])
                elif os.path.exists(new_file_path):
                    # self.print_green("url already present")
                    url_local_file_linker[url] = new_file_path
                    if path in imported_scripts_linker:
                        imported_scripts_linker[path].add(url_local_file_linker[url])
                    else:
                        imported_scripts_linker[path] = set([url_local_file_linker[url]])
                elif url not in new_found_urls and not os.path.exists(new_file_path):
                    print("added url new potential", url)
                    new_found_urls.add((path, url))

        print("imported scripts len", len(imported_scripts_linker), "\n\n\n\n")

        for (path, url) in new_found_urls:
            print("path", path, "url", url)
            content = self.url_interactor.get_content_url(url)
            if content:
                content = jsbeautifier.beautify(content)
                # if True in ["!doctype" and "html" in x.lower() for x in content.split("\n")]:
                if content.strip().startswith("<"):
                    print(content[:200], url, "doctype found")
                    continue

                for local_url in url_local_file_linker:
                    if content == open(url_local_file_linker[local_url]).read():
                        self.print_red("url already present")
                        url_local_file_linker[url] = url_local_file_linker[local_url]
                        if path in imported_scripts_linker:
                            imported_scripts_linker[path].add(url_local_file_linker[local_url])
                        else:
                            imported_scripts_linker[path] = set([url_local_file_linker[local_url]])
                        break

                if url not in url_local_file_linker:
                    replaced_url = self.url_interactor.replace_url(url)
                    self.print_green("saving new content new url", url)
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
            self.get_all_imports_importsfolder(imported_scripts_folder, url_local_file_linker)

    def check_beautified_doctype(self, sw_paths):
        correct, faulty = set(), set()
        semifaulty = set()
        for sw in sw_paths:
            content = open(sw, "r").read().lower()
            js = self.remove_js_comments(content)
            c = 0
            for l in js.split("\n"):
                if "doctype" in l and "html" in l and not "const" in l and c == 0:
                    faulty.add(sw)
                    break
                elif "doctype" in l and "html" in l:
                    semifaulty.add(sw)
                    break

                c += 1
            if sw not in faulty and sw not in semifaulty:
                correct.add(sw)
        return correct, faulty, semifaulty

    def get_importscripts_sources(self, path):
        content = self.remove_js_comments(open(path, "r").read())
        # print("content", content)
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
                else:
                    self.print_red("url not valid", url)

            if path not in sw_paths_urls:
                sw_paths_no_urls.add(path)
        # print("error paths", len(error_paths))
        # self.file_interactor.save_object(error_paths, "error_paths")
        print( len(sw_paths_no_urls))
        return sw_paths_urls, sw_paths_no_urls
    
    def sw_scrape_importscripts(self, sw_paths_urls):
        imported_scripts_folder = os.getcwd() + "/SWs/imported_scripts/"
        url_local_file_linker = self.file_interactor.load_object_exists("url_local_file_linker") or {}
        # url_url_linker = self.file_interactor.load_object_exists("url_url_linker") or {}
        failed_urls = self.file_interactor.load_object_exists("failed_urls") or {}
        # url_local_file_linker = {}
        # for webapp_file in valid_sw_paths:
        for sw_path in sw_paths_urls:
            # sw_path = valid_sw_paths[webapp_file] + "/beautified.js"
            # webapp_file = self.data_aggregator.string_csv_to_usb(webapp_file)
            if sw_path in sw_paths_urls:
                print("sw path web app file", sw_path)
                for url in sw_paths_urls[sw_path]:
                    print("url in scraper", url)
                    # if not url.startswith("http"):
                    #     if "jeeng-sw.js" in url:
                    #         url = "https://notification.jeeng.app/jeeng-sw.js"
                    #     else:
                    #         print(sw_path, "url", url)
                    #         print()
                    if "," in url:
                        print("comma url", sw_path, url)
                        exit(0)
                    elif "\\" in url:
                        print("backslash in url", sw_path, url)
                        exit(0)
                        # if "youtube.com" in url:
                        #     url = "https://www.youtube.com/s/desktop/df22805b/jsbin/serviceworker-notifications.vflset/serviceworker-notifications.js"
                        # elif "thestartmagazine" in url:
                        #     continue
                        # else:
                        #     print("backslash in url", sw_path, url)
                        #     # exit(0)
                        # # continue
                    
                    failed_url_found = False
                    for other_sw_path in failed_urls:
                        # print("failed urls", failed_urls[other_sw_path])
                        if url in failed_urls[other_sw_path]:
                            failed_url_found = True
                    if failed_url_found or url in url_local_file_linker:
                        continue

                    files = [os.path.join(imported_scripts_folder, f) for f in os.listdir(imported_scripts_folder) if os.path.isfile(os.path.join(imported_scripts_folder, f))]
                    replaced_url = self.url_interactor.replace_url(url)
                    new_file_path = os.path.join(imported_scripts_folder, replaced_url)[:255]
                    if new_file_path in files:
                        self.print_green("url already present")
                        url_local_file_linker[url] = new_file_path
                    else:
                        local_content_found = False
                        content = self.url_interactor.get_content_url(url)
                        if content:
                            content = jsbeautifier.beautify(content).strip()
                            if True in ["!doctype" and "html" in x.lower() for x in content.split("\n")]:
                                print(content[:200], url, "doctype found")
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
                                    # else:
                                    #     # url_local_file_linker[sw_path] = {}
                                    #     url_local_file_linker[sw_path][replaced_url] = file

                            if not local_content_found:
                                self.print_green("saving new local file")
                                with open(new_file_path, "w") as f:
                                    f.write(content)
                            else:
                                self.print_green("local file found")
                                print(url, file)
                        else:
                            if sw_path in failed_urls:
                                failed_urls[sw_path].add(url)
                            else:
                                failed_urls[sw_path] = set([url])

                    # if url == "https://ray.so/precache-manifest.c60c17ac1adeb1259465cef7eac77f3c.js":
                    #     print("exiting")
                    #     exit(0)
                    self.file_interactor.save_object(url_local_file_linker, "url_local_file_linker")
                    self.file_interactor.save_object(failed_urls, "failed_urls")
                    print("failed", len(failed_urls), "succeeded", len(url_local_file_linker))
                    # if len(imported_scripts_linker) > 5:
                    #     exit(0)
        return url_local_file_linker

    def get_sw_results(self, final_sw_paths):
        with open(sw_results_csv_file, "w") as f:
            f.write("website;SWs count;size;events;loc;ccns\n")

        sw_paths_urls = file_interactor.load_object_exists("sw_paths_urls")
        imported_scripts_linker = file_interactor.load_object_exists("imported_scripts_linker")
        url_local_file_linker = self.get_url_file_linker(imported_scripts_folder)
        
        for sw_domain_suffix in final_sw_paths:
            sw = final_sw_paths[sw_domain_suffix]
            paths = set([sw])
            needs_processing = False
            if sw in sw_paths_urls:
                urls = sw_paths_urls[sw]
                for url in urls:
                    if url in url_local_file_linker:
                        paths.add(url_local_file_linker[url])
                    if url in url_local_file_linker and url_local_file_linker[url] in imported_scripts_linker:
                        for import_path in imported_scripts_linker[url_local_file_linker[url]]:
                            paths.add(import_path)
                            needs_processing = True
            if needs_processing:
                print(sw, "needs processing", len(paths), paths)
            sw_splitted = sw.split(sw_base_folder)[1].split("beautified.js")[0].strip("/")
            sw_ext = extract(sw_splitted)
            print("running for", len(paths), sw)
            website, SW_count, size, events, loc, ccns = self.run_sw_loc(paths, sw_base_folder, sw)
            self.print_green(sw_ext.domain + "." + sw_ext.suffix, SW_count, size, events, loc, ccns)
            self.file_interactor.append_line(sw_results_csv_file, f'"{sw_ext.domain + "." + sw_ext.suffix}";"{SW_count}";"{size}";"{events}";"{loc}";"{ccns}"\n')
    

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

    def get_js_var_value(self, content, var, assignment_char="=", end_char=";"):
        # if len(content)
        # var = " " + var + " "
        content = content.split(" ")
        print(content[:10])
        start_index = content.index(var)
        print("start index", content[start_index], content[start_index + 1], content[start_index + 2])
        # start_index = content.find(var) + len(var)
        while True:
            # if start_index == -1:
                # break
            if assignment_char in content[start_index + 1]:
                print("returning var val", content[start_index + 1: start_index + 5])
                return " ".join(content[start_index + 1:]).split(end_char)[0].strip().strip(end_char).strip()
            elif assignment_char in content[start_index]:
                print("returning var val 2", content[start_index + 1: start_index + 5])
                return " ".join(content[start_index + 1:]).split(end_char)[0].strip().strip(end_char).strip("[]").strip(content[start_index]).strip()
            
                if "'" not in content[start_index + 2] and '"' not in content[start_index + 2] and "`" not in content[start_index + 2]:
                    new_var = []
                    for var in content[start_index + 2:]:
                        if var:
                            # print("new var var", var ,var[-1] != ";")
                            if var[-1] != ";":
                                new_var.append(var)
                            else:
                                break
                    # print("recursive var val", new_var)
                    # return self.get_js_var_value(" ".join(content), " ".join(new_var))
                    return None
                return content[start_index + 2].split(";")[0]
            # current_index = start_index
            # while not content[current_index].strip():
            #     current_index += 1
            
            # if content[current_index] == "=":
            #     current_index += 1
            # else:
            #     print("var value not found")
            #     return

            # while not content[current_index].strip():
                # current_index += 1

            # start_index = content.find(var, current_index)
            if var in content[start_index + 1:]:
                start_index = content.index(var, start_index + 1)
            else:
                break

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

    # def get_strings_from_js(self, path):
    #     total_string_set = set()
    #     # with open(path, "r") as f:
    #     l = open(path, "r").read()
    #     excluded_extensions = [".html", ".jpg", ".woff2", ".woff", ".css", ".png"]
    #         # for l in f:
    #     strings = []
    #     l = l.strip()
    #     filtered_l = ""
    #     for sub_l in l.split("\n"):
    #         sub_l = sub_l.strip()
    #         if not sub_l.startswith("//") and not sub_l.startswith("*") and not sub_l.startswith("/*"):
    #             filtered_l += sub_l + "\n"
    #     l = filtered_l.strip()
    #     if "'" in l:
    #         # self.print_green(l)
    #         for string in  self.strip_substring_from_lines([l], "'", add_start_char_length=False):
    #             if not " " in string and True not in [string.endswith(ext) for ext in excluded_extensions]:
    #                 #  not string.endswith(".css") and not string.endswith(".html") and not string.endswith(".jpg") and not string.endswith(".woff2"):
    #                 strings.append(string)
    #     if '"' in l:
    #         # self.print_green(l)
    #         for string in self.strip_substring_from_lines([l], '"', add_start_char_length=False):
    #             if not " " in string and True not in [string.endswith(ext) for ext in excluded_extensions]:
    #                 strings.append(string)
    #     if "`" in l:
    #         # self.print_green(l)
    #         for string in self.strip_substring_from_lines([l], "`", add_start_char_length=False):
    #             if not " " in string and True not in [string.endswith(ext) for ext in excluded_extensions]:
    #                 strings.append(string)
        
    #     # if len(strings):
    #     #     for string in strings:
    #     #         total_string_set.add(string)
    #     #     print(path, "strings", strings)

    #     # if not l or l.startswith("//") or l.startswith("*"):
    #         # continue
    #     for l in strings:
    #         if "'" in l and '"' in l:
    #             self.print_red("1 " + path + " " + l)
    #             # exit(0)
    #         elif "'" in l and "`" in l:
    #             self.print_red("2 " + path + " " + l)
    #             # exit(0)
    #         elif '"' in l and "`" in l:
    #             self.print_red("3 " + path + " " + l)
    #             # exit(0)
    #     return set(strings)

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
    # filter_csv(os.getcwd() + "/local_vars/missing_sizes.txt")

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
        website = sw_base_folder.strip("/").split("/")
        website = website[-1]

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
            # exit(0)

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

    def run_sw_loc_folder(folder_path, csv_path=""):
        handled = []
        if not csv_path:
            csv_path = os.getcwd() + "/CSVs/temp_sw_loc.csv"
            if not os.path.exists(csv_path):
                with open(csv_path, "w") as f:
                    f.write("name;sws amount;size;events;loc;ccns\n")
            else:
                handled = DataAggregator.get_col_csv(csv_path, 0)
        print(len(handled))

        for sw_base_folder in os.listdir(folder_path):
            website, SW_count, size, events, loc, ccns = DataAggregator.run_sw_loc(folder_path + sw_base_folder)
            print(f'{website};{SW_count};{size};{events};{loc};{ccns}\n')


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
        # print("html", html[:200])
        for link in bs4.BeautifulSoup(html, "html.parser", from_encoding="iso-8859-1").find_all('link', {'rel': "manifest"}):
            if link.has_attr('href'):
                links.append(link['href'])
        # if len(links) > 0:
        #     self.print_green(path[:100] + " manifest links " + str(links))
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
                # if gotone == 5:
                #     exit(0)
                # if "braun_russia" not in file:
                #     continue
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
            # if count == 10:
                # exit(0)
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
                        # exit(0)
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

    def process_lighthouse_scores(self, lighthouse_folder, non_duplicate_sites, output_file):
        extract = tldextract.TLDExtract()
        failed = []
        count = 0
        if not output_file:
            output_file = os.getcwd() + "/Scores/lighthouse_aggregated.csv"

        if not os.path.exists(output_file):
            with open(output_file, "w") as f:
                f.write("website;performance;accessibility;seo;best-practices\n")
        handled = self.data_aggregator.get_col_csv(output_file, 0)

        print(lighthouse_folder, len(handled))
        for subdir, _, score_files in os.walk(lighthouse_folder):
            print("score files len", len(score_files))
            for score_file in score_files:
                # score_file = "srv1.l-o-a-d-i-n-g.com.json.gz"
                print(score_file)
                zipped = False
                file_name = score_file.split(".json.gz")[0]
                if file_name.startswith("www."):
                    file_name = file_name[4:]
                if file_name in handled:
                    continue

                if score_file.endswith("json.gz"):
                    zipped = True
                # if zipped and score_file.strip(".json.gz") in handled or not zipped and score_file in handled:
                #     print("already handled", score_file)
                #     continue
                # isgood = False
                # if zipped and score_file.strip(".json.gz") in non_duplicate_sites or not zipped and score_file in handled:
                #     for site in non_duplicate_sites:
                #         if site == score_file.strip(".json.gz"):
                #             print(site, "FULL SITE in non dup", score_file)
                #             isct(file_name)
                #     # if ext.domain + "." + ext.suffix in non_duplicate_sites:
                #     #     continuegood = True
                #             break
                # else:
                #     ext = extract(score_file.strip(".json.gz"))
                #     for site in non_duplicate_sites:
                #         if ext.domain + "." + ext.suffix in site:
                #             print(site, "in non dup", score_file)
                #             isgood = True
                #             break

                # if not isgood:
                #     continue
                if os.stat(os.path.join(lighthouse_folder, score_file)).st_size == 0:
                    print("skippung")
                    continue
                if zipped:
                    try:
                        print("unzipping")
                        with gzip.open(os.path.join(lighthouse_folder, score_file), 'rt', encoding='UTF-8') as zipfile:
                            l = json.load(zipfile)
                            # l = l.replace('\"', "\'")
                        # l = json.load(compress_json.load(lighthouse_folder + score_file))
                    except:
                        print("decompressing failed", score_file)
                        failed.append(score_file)
                        continue
                else:
                    l = json.load(open(lighthouse_folder + score_file, "r"))
                l = ast.literal_eval(l)
                
                scores = []
                for cat in ['performance', 'accessibility', 'seo', 'best-practices']:
                    scores.append(l['categories'][cat]['score'])
                if scores == [None, None, None, None]:
                    failed.append(score_file.strip(".json.gz"))
                    print("nones", score_file, scores)
                    continue
                with open(output_file, "a+") as f:
                    f.write(file_name + ";" + ";".join([str(x) for x in scores]) + "\n")
                print(count, "lighthouse", score_file, scores)
                count += 1

        print(failed, len(failed))

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

    def process_yellowlabtools_scores(self, yellowlabtools_folder, non_duplicate_sites, output_file):
        extract = tldextract.TLDExtract()
        count = 0
        failed = []
        
        if not output_file:
            output_file = os.getcwd() + "/Scores/ylt_aggregated.csv"
        if not os.path.exists(output_file):
            with open(output_file, "w") as f:
                f.write("website;domComplexity;cssComplexity;badJavascript;pageWeight;requests\n")

        handled = self.data_aggregator.get_col_csv(output_file, 0)
        # with open(output_file, "w") as f:
        #     f.write('website;domComplexity;cssComplexity;badJavascript;pageWeight;requests\n')
        for subdir, _, score_files in os.walk(yellowlabtools_folder):
            for score_file in score_files:
                file_name = score_file.split(".json.gz")[0]
                if file_name.startswith("www."):
                    file_name = file_name[4:]
                if file_name in handled:
                    continue
                # continue

                # if score_file.endswith("json.gz"):
                #     isgood = False
                    # if score_file.strip(".json.gz") in non_duplicate_sites:
                    #     for site in non_duplicate_sites:
                    #         if site == score_file.strip(".json.gz"):
                    #             print(site, "FULL SITE in non dup", score_file)
                    #             isgood = True
                    #             break
                    # else:
                    # ext = extract(file_name)
                    # if ext.domain + "." + ext.suffix in non_duplicate_sites:
                    #     continue
                        # for site in non_duplicate_sites:
                        #     if ext.domain + "." + ext.suffix in site:
                        #         print(site, "in non dup", score_file)
                        #         isgood = True
                        #         break
                # if not isgood:
                #     print(score_file, "not good")
                #     continue
                # print("score file", score_file)
                if os.stat(os.path.join(yellowlabtools_folder, score_file)).st_size == 0:
                    continue
                # print("joe")
                if score_file.endswith(".gz"):
                    try:
                        with gzip.open(os.path.join(yellowlabtools_folder, score_file), 'rt', encoding='UTF-8') as zipfile:
                            l = json.load(zipfile.read())
                            print(len(l))

                    except:
                        failed.append(score_file)
                        # print("unzipping failed", score_file)
                        continue
                else:
                    try:
                        l = json.loads(open(os.path.join(yellowlabtools_folder, score_file), "r").read())
                    except:
                        continue
                        # l = json.loads('"[' + open(os.path.join(yellowlabtools_folder, score_file), "r").read() + ']"')
                        # l = json.load(open(os.path.join(yellowlabtools_folder, score_file), "r"))
                        # l = ast.literal_eval(l)
                    if not l:
                        continue

                    # l = ast.literal_eval(open(os.path.join(yellowlabtools_folder, score_file), "r").read())
                    # l = json.loads(open(os.path.join(yellowlabtools_folder, score_file), "r").read())
                # l = ";"
                # l = ast.literal_eval(l)

                scores = []
                # print("test", l['scoreProfiles']['generic'])
                # ['categories']['badJavascript']['categoryScore'])
                for complexity in ['domComplexity', 'cssComplexity', 'badJavascript', 'pageWeight', 'requests']:
                    scores.append(l['scoreProfiles']['generic']['categories'][complexity]['categoryScore'])
                print(count + len(handled), "ylt",  ";".join([str(x) for x in scores]), score_file)
                count += 1

                with open(output_file, "a+") as f:
                    f.write(file_name + ";" + ";".join([str(x) for x in scores]) + "\n")
        exit(0)
        # print(failed, len(failed))

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
        for subdir, _, files in os.walk(sw_base_folder):
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
                # print(len(valid_sw_paths))
                length = len(valid_sw_paths)
                
                for subdir in sw_base_subdir_mapping:
                    if sw_site in sw_base_subdir_mapping:
                        valid_sw_paths[sw_site] = sw_base_subdir_mapping[sw_site]
                        break
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

    def get_manifests_from_list(self, valid_sw_paths, list):
        for url_part in list:
            for sw_path in valid_sw_paths:
                if url_part in sw_path:
                    content = self.url_interactor.get_content_url("https://" + sw_path)
                    if content:
                        manifest_links = self.get_manifest_link_html(content)
                        self.save_manifest_from_links(manifest_links, sw_path, valid_sw_paths[sw_path])                        
                    else:
                        print(sw_path, "no content")

    def beautify_js_files(self, folder, exclusion_strings, file_name):
        extract = tldextract.TLDExtract()

        handled = []
        with open(os.getcwd() + "/languages_non_js_sws.txt", "r") as f:
            skip = False
            for l in f:
                if len(l.split()) == 2:
                    handled.append(l.split()[0].strip())
        print("handled", handled[:10])
        final_sites = []
        with open(os.getcwd() + "/final_sites.txt", "r") as f:
            for l in f:
                final_sites.append(l.strip())
        print(len(final_sites))
        # count = 0
        all_subdir_sites = []
        missing_beaut, missing_manifest = 0, 0
        for subdir, _, files in os.walk(folder):
            splitted = subdir.split("/")
            if not os.path.exists(os.path.join(subdir, "beautified.js")):
                missing_beaut += 1
            if not os.path.exists(os.path.join(subdir, "manifest.json")):
                missing_manifest += 1
            ext = extract(splitted[-1])
            all_subdir_sites.append(ext.domain + "." + ext.suffix)
            continue
            # if splitted[-1] in final_sites:
                # good.append(splitted[-1])
            # continue
            for file in files:
                skip = False
                for exclusion_string in exclusion_strings:
                    if exclusion_string in file:
                        skip = True
                        break
                if skip or file in handled:
                    continue
                # file = "beautified.js"
                # if "poppen.de" not in os.path.join(subdir, file):
                    # continue
                guess = guesslang.Guess()
                lang = guess.language_name(open(os.path.join(subdir, file), "r").read())
                beautified_content = jsbeautifier.beautify(open(os.path.join(subdir, file), "r").read())
                print("handling", file, "hopefully not empty")
                if beautified_content:
                    with open(os.getcwd() + "/languages_non_js_sws.txt", "a+") as f:
                        f.write(file + " " + str(len(beautified_content)) + "\n" + str(len(open(os.path.join(subdir, file), "r").read())) + " " + lang + "\n")
                    # print(beautified_content)
                    if lang != "JavaScript":
                        print(file, len(beautified_content))
                        print(lang)
                    print(file, len(beautified_content))
                    print(len(beautified_content), len(open(os.path.join(subdir, file), "r").read()), open(os.path.join(subdir, file), "r").read() == beautified_content)
                    with open(os.path.join(subdir, "beautified.js"), "w") as f:
                        f.write(beautified_content)
        # final_sites_test = extract_domain_suffix_list(all_subdir_sites)
        self.get_final_sites_list(all_subdir_sites)
        # good = get_overlap_folder_list(all_subdir_sites, final_sites)
        # print(len(good), good[:100], len(final_sites), final_sites, len(final_sites_test))
        print(missing_manifest, missing_beaut)

    def get_lines_with_substr_from_files(self, folder, substr, present_substr="http", file_extension=".js"):
        lines, not_present_lines = [], []
        no_sws = []
        for subdir, _, files in os.walk(folder):
            # sw_present = False
            for file in files:
                # if file == "beautified.js" or file == "beautified2.js" or "extra_js.js" in file or ".json" in file or "requests" == file or "all_js_temp.js" == file or "http" in file or "manifestError" == file:
                    # continue
                if not file == "beautified.js":
                    continue
                # sw_present = True
                no_sws.append(file)
                if file.endswith(file_extension):
                    with open(os.path.join(subdir, file), "r") as f:
                        for l in f:
                            l = l.strip()
                            if substr in l.lower():
                                # print(substr, "in", l, os.path.join(subdir, file))
                                if present_substr in l:
                                    # print("appending", l)
                                    lines.append((os.path.join(subdir, file), l))
                                else:
                                    not_present_lines.append((os.path.join(subdir, file), l))
            # if not sw_present:
        # if len(no_sws):
        #     print(len(no_sws), no_sws[:10])
        return lines, not_present_lines
        
    def strip_substring_from_lines(self, lines, start_char, present_char="", files=[], urls=False, add_start_char_length=True):
        modules, non_modules = set(), set()
        for i in range(len(lines)):
            raw_line = lines[i].lower()
            raw_line = raw_line.strip()
            splitted_line = raw_line.split(start_char)
            line = raw_line
            
            # if line.startswith("//") or start_char + "[" in line or len(line) > 10000 or present_char not in line:
            #     continue
            # for line in splitted_line:
            file = None
            # if line.count(")") > 1:
                # print("line", line, "has", line.count(")"), "closing braces")
                # continue
            if files != []:
                file = files[i]
            else:
                file = ""
            start_index, module_list_char = 0, None
            substring_start = line.find(start_char, start_index)
            # substring_start = 0

            while True:
                # if len(modules) > 20 or len(non_modules) > 20:
                #     break
                # print(file)
                if substring_start == -1 or len(line) == 0:
                    break

                if add_start_char_length:
                    substring_start = substring_start + len(start_char)
                # print("line len", len(line), start_char + "end")
                if substring_start < len(line) and line[substring_start] == "[":
                    substring_start += 1
                    module_list_char = line[substring_start]
                if substring_start < len(line):
                    substring_end = line.find(line[substring_start], substring_start + 1)
                else:
                    break
                if line[substring_start:substring_end].strip() and substring_start != substring_end:
                    module = line[substring_start + 1:substring_end].strip()
                    if module:
                        if urls:
                            if "http" in module:
                                modules.add((module, file))
                            else:
                                non_modules.add((module, file))
                        else:
                            modules.add((module, file))
                substring_start = line.find(start_char, substring_end + 1)
        
                if substring_end == -1:
                    break
        if not add_start_char_length:
            return [x[0] for x in modules]
        return modules, non_modules

# check_non_kb_size_sw()
# exit(0)
# webapps_csv_path = os.getcwd() + "/CSVs/websiteLOC.csv"
# webapps_loc_zero = get_col_csv(webapps_csv_path, "website", sep=",")[check_csv_col_zero(webapps_csv_path, "size", sep=",")]
# print(len(webapps_loc_zero), webapps_loc_zero[:20])
# sw_csv_path = os.getcwd() + "/CSVs/filtered_data.csv"
# webapps_loc_zero = get_col_csv(sw_csv_path, "name")[check_csv_col_zero(sw_csv_path, "size")]
# exit(0)

def check_sizes_web_apps():
    file_interactor = FileInteractor()
    no_duplicate_websites = []
    with open(os.getcwd() + "/no_dup_websites_final.txt", "r") as f:
        for l in f:
            no_duplicate_websites.append(l.strip())
    set_no_dup_sites = set(no_duplicate_websites)
    
    sizes = DataAggregator.get_col_csv(os.getcwd() + "/CSVs/filtered_data.csv", 2)
    filtered_names = DataAggregator.get_col_csv(os.getcwd() + "/CSVs/filtered_data.csv", 0)
    del filtered_names[0]
    del sizes[0]

    sizes = np.array(sizes).astype(int)
    filtered_names = np.array(filtered_names)
    print(type(sizes[0]), len(filtered_names[sizes == 0]), len(filtered_names[sizes != 0]))

    missing_sizes = []
    with open(os.getcwd() + "/missing_sizes_websites.txt", "r") as f:
        for l in f:
            l = l.strip()
            missing_sizes.append(l)

    filtered_names_set = set(filtered_names[sizes == 0])
    print("filtered names, no dup intersec", len(filtered_names_set.intersection(set_no_dup_sites)))

    for site in set(missing_sizes).intersection(filtered_names_set):
        filtered_names_set.remove(site)
    print("filtered names set", len(filtered_names_set))

    usb_sites = file_interactor.load_object("usb_sites")
    print("len usb sites", len(usb_sites), len(set(usb_sites).intersection(set(filtered_names))))
    temp = filtered_names_set.copy()
    temp = set(temp)
    temp.difference_update(set(usb_sites))
    print("temp len", len(temp))
    print(len(temp.intersection(set(missing_sizes))))

    missing_sizes_folder = []
    for dirpath, subfolders, files in os.walk(os.getcwd() + "/missing_sizes/"):
        # missing_sizes_folder = files
        for file in files:
            if "(" not in file:
                if ".zip" in file:
                    file = file.split(".zip")[0]
                if "_" in file:
                    file = file.replace("_", "-")
                missing_sizes_folder.append(file)
    temp = missing_sizes.copy()
    temp = set(temp)
    print("missing sizes folder", len(missing_sizes_folder), len(set(missing_sizes_folder).intersection(temp)))
    temp.difference_update(set(missing_sizes_folder))
    print("temp", len(temp), len(filtered_names_set.intersection(temp)), list(temp)[:20])

    with open(os.getcwd() + "/zero_sizes_sites.txt", "w") as f:
        for name in filtered_names_set:
            f.write(name + "\n")

    all_sites_temp = file_interactor.load_object("allsites", "/seperate_data")
    all_sites = []
    for site in all_sites_temp:
        all_sites.append(site.split(".zip")[0])
    # print("all sizes len", len(all_sites))
    
    for elem in set_no_dup_sites.intersection(set(all_sites)):
        set_no_dup_sites.remove(elem)
    print('hoi')
    # print(len(no_duplicate_websites), len(all_sites), len(set(no_duplicate_websites).intersection(set(all_sites))), len(set(no_duplicate_websites).union(all_sites)))
    print(len(set_no_dup_sites))
# check_sizes_web_apps()
# exit(0)


def rename_extra_js(website_folder, website):
    for subdir, _, files in os.walk(website_folder + website):
        for file in files:
            if file.endswith("extra_js"):
                new_file_path = file.split("extra_js")[0]
                if new_file_path.endswith(".js"):
                    new_file_path = new_file_path.split(".js")[0]
                print("new fn", new_file_path + "_extra_js.js")
                os.rename(subdir + "/" + file, new_file_path)

def unzip_remove_website(website_folder, folders, handled_websites, remove=False):
    import filecmp
    import hashlib

    extract = tldextract.TLDExtract()

    niet_bereikbaar_zip = ""
    niet_bereikbaar_zip2 = ""
    temp_output_folder = "~/Documents/temp_usb/"
    folders['website_folder'] = "/media/jesse/USB64/"

    zipped_websites = []
    unzipped_websites = []
    legit_double_sites, double_sites, double_sites_original = [], [], []
    counter = 0

    output_folder = os.getcwd() + "/seperate_data/"
    handled_websites = []
    with open(output_folder + "allsites", "rb") as f:
        pickled = pickle.load(f)
        handled_websites = pickle.loads(pickled)
    no_duplicate_websites = []
    with open(os.getcwd() + "/no_dup_websites_final.txt", "r") as f:
        for l in f:
            no_duplicate_websites.append(l.strip())
    need_handling = no_duplicate_websites

    # website_folder = []
    # with open(os.getcwd() + "/no_duplicate_websites.txt", "r") as f:
    #     for website in f:
    #         website_folder.append(website.strip())
    # print(len(website_folder), website_folder[:10])
    # exit(1)

    need_handling = []
    check, no_check, check_diff_domain = [], [], []
    temp = []
    c = 0
    for website in no_duplicate_websites:
        temp.append(website.replace("-", "_"))
    no_duplicate_websites = temp
    webs_dic = {}
    for webs in os.listdir(website_folder):
        ext = extract(webs)
        if not ext.domain in webs_dic:
            webs_dic[ext.domain] = [ext.suffix]
        else:
            webs_dic[ext.domain].append(ext.suffix)
    if not os.path.exists(os.getcwd() + "/webs_dic"):
        for subfolder, _, files in os.walk(website_folder):
            for file in files:
                if file.endswith(".zip"):
                    print("files", file, subfolder)
                    file = file.split(".zip")[0]
                    ext = extract(file)
                    if not ext.domain in webs_dic:
                        webs_dic[ext.domain] = [ext.suffix]
                    else:
                        webs_dic[ext.domain].append(ext.suffix)

        with open(os.getcwd() + "/webs_dic", "wb") as f:
            pickled = pickle.dumps(webs_dic)
            pickle.dump(pickled, f)
    else:
        with open(os.getcwd() + "/webs_dic", "rb") as f:
            pickled = pickle.load(f)
            webs_dic = pickle.loads(pickled)

    print(website_folder, len(webs_dic))
    # exit(0)
    for website in no_duplicate_websites:
        print("progress", c / 16611 * 100, end="\r")
        ext = extract(website)
        print(ext.domain, ext.suffix)
        if ext.domain in webs_dic and ext.suffix in webs_dic[ext.domain]:
            check.append(website)
        elif ext.domain in webs_dic:
            check_diff_domain.append(website)
        else:
            no_check.append(website)
        c += 1
    print("progress", c / 16611 * 100)
    
    # with open(os.getcwd() + "/missing_sites_usb_underscore", "wb") as f:
    #     pickled = pickle.dumps(set(no_duplicate_websites).difference(set(check)))
    #     pickle.dump(pickled, f)
    # missing_sites = None
    # with open(os.getcwd() + "/missing_sites_usb_underscore", "rb") as f:
    #     pickled = pickle.load(f)
    #     missing_sites = list(pickle.loads(pickled))
    # print(len(missing_sites), missing_sites[:50])
    exit(0)
    for website in os.listdir(website_folder):
    # range(len(website_folder) - 1, 0, -1):
        # website = website_folder[i]
        if len(website) < 2:
            # print(" website", website)
            continue
        c += 1
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
            if ".zip" in website:
                website = website.split(".zip")[0]
            ext = extract(website)
            breakt = False
            for webs in no_duplicate_websites:
                if ext.domain + '.' + ext.suffix in webs:
                    del no_duplicate_websites[no_duplicate_websites.index(webs)]
                    check.append(website)
                    breakt = True
                    break
                elif website in webs:
                    del no_duplicate_websites[no_duplicate_websites.index(webs)]
                    check.append(website)
                    breakt = True
                    break
            if not breakt:
                no_check.append(website)
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
    print("c", c)
    # process_PWA("twitter.com", folders, [], writeResult=False, remove=False)
    # exit(0)
    print(no_check[:20])
    print("check len", len(check), len(no_check), len(check) + len(no_check), len(no_duplicate_websites), len(set(no_duplicate_websites).difference(set(check)).difference(no_check)))
    print(len(handled_websites), len(need_handling), len(no_duplicate_websites))
    # exit(0)
    c = []
    for website in need_handling:
        if len(website) < 3 and len(website) != 1:
            c.append(website)
            print("too short")
            continue
        else:
            continue
        # print(website)
        process_PWA(website.split(".zip")[0].replace("_", "-"), folders, handled_websites, remove=True, writeResult=False, sizeOnly=True)
    print("c", c)
    print("allsizes", len(all_sizes), max(all_sizes), min(all_sizes))
    print("allsites", len(all_sites), all_sites[all_sizes.index(max(all_sizes))], all_sites[all_sizes.index(min(all_sizes))])

    with open(output_folder + "allsizes", "wb") as f:
        pickled = pickle.dumps(all_sizes)
        pickle.dump(pickled, f)
    with open(output_folder + "allsites", "wb") as f:
        pickled = pickle.dumps(all_sites)
        pickle.dump(pickled, f)

    with open(os.getcwd() + "/allsizes.txt", "w") as f:
        f.write(str(all_sizes))
    with open(os.getcwd() + "/allsites.txt", "w") as f:
        f.write(str(all_sites))
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

def check_overlap_sw_webapps_sites():
    file_interactor = FileInteractor()
    extract = tldextract.TLDExtract()
    filtered_sites = []
    with open(os.getcwd() + "/final_sites.txt", "r") as f:
        for l in f:
            filtered_sites.append(l.strip())
    sw_sites, webapps_sites = DataAggregator.get_col_csv(os.getcwd() + "/CSVs/filtered_data.csv", 0), DataAggregator.get_col_csv(os.getcwd() + "/CSVs/websiteLOC2.csv", 0, sep=";")
    print(len(sw_sites), len(set(webapps_sites)))

    set_sws, set_webapps = set(), set()
    set_webapps_dic, set_sws_dic = {}, {}
    for webapp in webapps_sites:
        ext = extract(webapp)
        set_webapps_dic[webapp] = ext.domain + "." + ext.suffix
    for sw in sw_sites:
        ext = extract(sw)
        if "2" in ext.domain:
            print(ext.domain + "." + ext.suffix)
        set_sws_dic[sw] = ext.domain + "." + ext.suffix

    filtered_sites_webapps, filtered_sites_sws = set(), set()
    # filtered_sites_wa_sw = []
    p, filtered_len = 0, len(filtered_sites)
    for filtered_site in filtered_sites:
        print(p / filtered_len * 100, end="\r")
        p += 1
        # if "xradio" not in filtered_site:
        c = 0
        #     continue
        ext = extract(filtered_site)
        stripped_website = ext.domain + "." + ext.suffix
        # print("stripped", [stripped_website])
        # for site in set_webapps_dic:
            # ext2 = extract(site)
            # stripped_webapp_site = ext2.domain + "." + ext2.suffix
            # if stripped_website in site or site in stripped_website:
            # if stripped_website == set_webapps_dic[site]:
            #     if site in set_webapps:
            #         print(site, filtered_site, "already in set webapps")
            #     if filtered_site in filtered_sites_webapps:
            #         print(site, filtered_site, "already in filtered sites webapps")
            #     set_webapps.add(site)
            #     filtered_sites_webapps.add(filtered_site)
            #     c += 1
            #     break

        for site in set_sws_dic:
            if stripped_website == set_sws_dic[site]:
                set_sws.add(site)
                filtered_sites_sws.add(filtered_site)
                c += 1
                # print("appending", [site], [filtered_site], "xradio.zone" in filtered_sites_sws)
                break
    #     if c != 2:
    #         print("filtered site", filtered_site, set_webapps[len(set_webapps) - 1], set_sws[len(set_sws) - 1])
    #         filtered_sites_wa_sw.append([filtered_site, set_webapps[len(set_webapps) - 1], set_sws[len(set_sws) - 1]])

    # save_object(filtered_sites_wa_sw, "filtered_sites_wa_sw")
    filtered_sites_wa_sw = file_interactor.load_object("filtered_sites_wa_sw")
    print("wasw", len(filtered_sites_wa_sw))
    file_interactor.save_object(set_webapps, "set_webapps")
    # file_interactor.save_object(set_sws, "set_sws")
    file_interactor.save_object(set_sws, "set_sws")
    file_interactor.save_object(filtered_sites_webapps, "filtered_sites_webapps")
    filtered_sites_sws, filtered_sites_webapps = file_interactor.load_object("filtered_sites_sws"), file_interactor.load_object("filtered_sites_webapps")
    
    set_filtered_sites = set(filtered_sites)
    print("len filtered sites set", len(set_filtered_sites), len(set_webapps), len(filtered_sites_webapps))

    set_sws, set_webapps, set_filtered_sites = file_interactor.load_object("set_sws"), file_interactor.load_object("set_webapps"), set(filtered_sites)

    print("len filtered sites set", len(set_filtered_sites), len(set_webapps))
    set_filtered_sites.difference_update(filtered_sites_webapps)
    
    with open(os.getcwd() + "/unmatched_webapps.txt", "w") as f:
        for unmatched_webapp in set_filtered_sites:
            f.write(unmatched_webapp + "\n")

    set_webapps.difference_update(set_filtered_sites)
    print("filtered sites set web apps diff", len(set_filtered_sites), len(set(filtered_sites_webapps)), len(set_webapps), list(set_filtered_sites)[:20], len(set_webapps))
    
    print("\n")
    set_filtered_sites = set(filtered_sites)
    print("len filtered sites set", len(set_filtered_sites), len(filtered_sites_sws))
    set_filtered_sites.difference_update(set(filtered_sites_sws))
    print("filtered sites set sws diff", len(set_filtered_sites), list(set_filtered_sites)[:20], "xradio.zone" in set_filtered_sites, "xradio.zone" in filtered_sites_sws)
    print("filtered sws", len(filtered_sites_sws), "filtered webapps", len(filtered_sites_webapps), "\n\n")

    exit(0)
    print(len(set_webapps), len(set(webapps_sites)))
    set_webapps.difference_update(set(webapps_sites))
    print(len(set_webapps), len(set(webapps_sites)))
    print(len(set_sws))
    print(len(webapps_sites), len(sw_sites), len(filtered_sites), len(set(webapps_sites).intersection(set(filtered_sites))), len(set(sw_sites).intersection(set(filtered_sites))))
    set_webapps = set(webapps_sites)
    set_webapps.difference_update(set(filtered_sites))
    print(list(set_webapps)[:20])
    set_sws = set(sw_sites).intersection(set(filtered_sites))
    # print(list(set_webapps)[:20], len(set_webapps))
    set_webapps.difference_update(set_sws)
    print(len(set_webapps))

# check_overlap_sw_webapps_sites()
# exit(0)

def check_overlap_audits():
    extract = tldextract.TLDExtract()
    filtered_sites = []
    with open(os.getcwd() + "/final_sites.txt", "r") as f:
        for l in f:
            filtered_sites.append(l.strip())
    set_filtered_sites = set(filtered_sites)
    yellowlab_folder = os.getcwd() + "/Scores/yellowlabtools/"
    lighthouse_folder = os.getcwd() + "/Scores/lighthouse_vm/"

    set_yellowlab, set_lighthouse = set(), set()
    set_lighthouse_dic, set_yellowlab_dic = {}, {}
    for subfolder, _, websites in os.walk(lighthouse_folder):
        for website in websites:
            website = website.split(".json")[0]
            ext = extract(website)
            set_lighthouse_dic[website] = ext.domain + "." + ext.suffix
    for _, _, websites in os.walk(yellowlab_folder):
        for website in websites:
            website = website.split(".json")[0]
            ext = extract(website)
            if "2" in ext.domain:
                print(ext.domain + "." + ext.suffix)
            set_yellowlab_dic[website] = ext.domain + "." + ext.suffix
    # print("len lighthouse", set_lighthouse_dic)
    print(set_yellowlab_dic)
    filtered_sites_yellowlab, filtered_sites_lighthouse = set(), set()
    p, filtered_len = 0, len(filtered_sites)
    # for filtered_site in filtered_sites:
    #     print(p / filtered_len * 100, end="\r")
    #     p += 1
    #     # if "xradio" not in filtered_site:
    #     c = 0
    #     #     continue
    #     ext = extract(filtered_site)
    #     stripped_website = ext.domain + "." + ext.suffix
    #     # print("stripped", [stripped_website])
    #     for site in set_lighthouse_dic:
    #         # ext2 = extract(site)
    #         # stripped_webapp_site = ext2.domain + "." + ext2.suffix
    #         # if stripped_website in site or site in stripped_website:
    #         if stripped_website == set_lighthouse_dic[site]:
    #             if site in set_lighthouse:
    #                 print(site, filtered_site, "already in set webapps")
    #             if filtered_site in filtered_sites_lighthouse:
    #                 print(site, filtered_site, "already in filtered sites webapps")
    #             set_lighthouse.add(site)
    #             filtered_sites_lighthouse.add(filtered_site)
    #             c += 1
    #             break

    #     for site in set_yellowlab_dic:
    #         if stripped_website == set_yellowlab_dic[site]:
    #             set_yellowlab.add(site)
    #             filtered_sites_yellowlab.add(filtered_site)
    #             c += 1
    #             # print("appending", [site], [filtered_site], "xradio.zone" in filtered_sites_sws)
    #             break
    # save_object(set_lighthouse, "set_lighthouse")
    # save_object(set_yellowlab, "set_yellowlab")
    # save_object(set_lighthouse_dic, "set_lighthouse_dic")
    # save_object(set_yellowlab_dic, "set_yellowlab_dic")
    # save_object(filtered_sites_lighthouse, "filtered_sites_lighthouse")
    # save_object(filtered_sites_yellowlab, "filtered_sites_yellowlab")

    set_lighthouse = load_object("set_lighthouse")
    set_yellowlab = load_object("set_yellowlab")
    set_lighthouse_dic = load_object("set_lighthouse_dic")
    set_yellowlab_dic = load_object("set_yellowlab_dic")
    filtered_sites_lighthouse = load_object("filtered_sites_lighthouse")
    filtered_sites_yellowlab = load_object("filtered_sites_yellowlab")
    print("lighthouse", len(set_lighthouse), "corresponding filtered set", len(filtered_sites_lighthouse), "yellowlab", len(set_yellowlab), "corresponding filtered set", len(filtered_sites_yellowlab))
    set_filtered_sites = set(filtered_sites)
    set_filtered_sites.difference_update(filtered_sites_lighthouse)
    print("diff lighthouse", len(set_filtered_sites))
    with open(os.getcwd() + "/unmatched_lighthouse.txt", "w") as f:
        for website in set_filtered_sites:
            f.write(website + "\n")
    set_filtered_sites = set(filtered_sites)
    set_filtered_sites.difference_update(filtered_sites_yellowlab)
    print("diff yellowlab", len(set_filtered_sites), list(set_filtered_sites)[:20])
    with open(os.getcwd() + "/unmatched_yellowlab.txt", "w") as f:
        for website in set_filtered_sites:
            f.write(website + "\n")

# check_overlap_audits()
# exit(0)

def find_missing_manifests():
    websites_folder = os.getcwd() + "/last_sws_copy/"
    missing_manifests_file = os.getcwd() + "/missing_manifests.txt"
    no_manifests = []
    for website in os.listdir(websites_folder):
        found = False
        for subfolder, _, files in os.walk(websites_folder + website):
            for file in files:
                if "manifest" in file:
                    found = True
                    if file != "manifest.json":
                        print(file)
                    break
        if not found:
            # print(website, "has no manifest")
            # for subfolder, _, files in os.walk(websites_folder + website):
            #     for file in files:
            #         print(file)
            print(website, "has no manifest")
            no_manifests.append(website)
    print(len(no_manifests))
    with open(missing_manifests_file, "w") as f:
        for manifest in no_manifests:
            f.write(manifest + "\n")

# find_missing_manifests()
# exit(0)

def remove_duplicate_sites(all_urls, folders):
    all_sites_no_domain = {}
    skipped = {}
    overwritten, not_overwritten = [], 0
    total = 0
    extract = tldextract.TLDExtract()
    domain_to_suffix = {}
    sw_websites, filtered_websites = [], []
    sw_base_folder = []
    
    with open(os.getcwd() + "/no_duplicate_websites.txt", "r") as f:
        for website in f:
            sw_base_folder.append(website.strip())
    print(len(sw_base_folder))
    exit(1)
    for sw_website in sw_base_folder:
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

def get_empty_files_in_folder(folder):
    empty = []
    for file in os.listdir(folder):
        if os.stat(folder + file).st_size == 0:
            empty.append(file.split(".json")[0])
    return empty

def run_ylt(website, output_path):
    # if not output_path.endswith("/"):
    #     output_path += "/"
    # if not output_path.startswith("/"):
    #     output_path = "/" + output_path
    second_path = "/media/jesse/second_linux/Scores/yellowlabtools"
    # print(os.path.join(output_path, website)[:-1] + ".json", os.path.join(second_path, "www."+ website)[:-1] + ".json", os.stat(os.path.join(output_path, website)[:-1] + ".json"))
    if os.path.exists(os.path.join(second_path, website)[:-1] + ".json"):
        print(os.stat(os.path.join(second_path, website)[:-1] + ".json"))
    elif os.path.exists(os.path.join(second_path, "www." + website)[:-1] + ".json"):
        print(os.stat(os.path.join(second_path, "www." + website)[:-1] + ".json"))
    elif os.path.exists(os.path.join(output_path, website)[:-1] + ".json"):
        print(os.stat(os.path.join(output_path, website)[:-1] + ".json") > 0)
    elif os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json"):
        print(os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json") > 0)

    if os.path.exists(os.path.join(output_path, website)[:-1] + ".json") and os.stat(os.path.join(output_path, website)[:-1] + ".json") > 0:
        return True
    if os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json") and os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json") > 0:
        return True
    if os.path.exists(os.path.join(second_path, website)[:-1] + ".json") and os.stat(os.path.join(second_path, website)[:-1] + ".json") > 0:
        return True
    if os.path.exists(os.path.join(second_path, "www." + website)[:-1] + ".json") and os.stat(os.path.join(second_path, "www." + website)[:-1] + ".json") > 0:
        return True
    try:
        subprocess.check_output("yellowlabtools --reporter=json " + "https://www." + website + " > " + os.path.join(output_path, website) + ".json", shell=True, timeout=60)
        # compress_json_file(output_path + website + ".json")
        compress_json_file(os.path.join(output_path, website) + ".json")
    except:
        print("ylt failed for", website)
        return False
    return True

def run_missing_ylt():
    output_path = os.getcwd() + "/Scores/yellowlabtools/"
    missing_ylt_sites = get_empty_files_in_folder(os.getcwd() + "/Scores/yellowlabtools/")
    no_duplicate_websites = []
    with open(os.getcwd() + "/no_dup_websites_final.txt", "r") as f:
        for l in f:
            no_duplicate_websites.append(l.strip())
    c = 0
    length = len(set(no_duplicate_websites).intersection(set(missing_ylt_sites)))
    for site in set(no_duplicate_websites).intersection(set(missing_ylt_sites)):
        print(length - c, "sites need handling", site)
        if c == 10:
            exit(0)
        run_ylt(site, output_path)
        c += 1
# run_missing_ylt()
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

def get_non_duplicate_websites(all_urls, folders):
    """
    all_urls: {domain: (latest added suffix, [suffixes]) (in order), domain2: (latest added suffix2, [suffixes2]) (in order)}
    """
    extract = tldextract.TLDExtract()
    no_duplicate_websites = {}
    for website in os.listdir(folders['website_folder']):
        domain = extract(website).domain
        if len(website) == 1:
            continue
        if domain in all_urls:
            if extract(website).suffix in all_urls[domain][1] and all_urls[domain][1].index(all_urls[domain][0]) >= all_urls[domain][1].index(extract(website).suffix):
                all_urls[domain] = (extract(website).suffix, all_urls[domain][1])
                no_duplicate_websites[domain] = website
            elif extract(website).suffix not in all_urls[domain][1] and domain not in no_duplicate_websites:
                no_duplicate_websites[domain] = website
        elif domain not in all_urls:
            no_duplicate_websites[domain] = website

    with open(os.getcwd() + "/no_dup_websites_final.txt", "w") as f:
        for domain in no_duplicate_websites:
            f.write(no_duplicate_websites[domain] + "\n")
    print(len(no_duplicate_websites))

def get_no_duplicate_urls(folders):
    all_urls = {}
    extract = tldextract.TLDExtract()
    c = 0
    if not os.path.exists(os.getcwd() + "/all_urls_dump"):
        with open(folders['urls_file'], "r") as f:
            for l in f:
                print("progress", c / 10000, end="\r")
                c += 1
                site = l.split(",")[1].strip()
                ext = extract(site)
                if ext.domain not in all_urls:
                    all_urls[ext.domain] = (ext.suffix, [ext.suffix])
                else:
                    temp = all_urls[ext.domain][1]
                    temp.append(ext.suffix)
                    all_urls[ext.domain] = (ext.suffix, temp)
                    # all_urls[ext.domain][1].append(ext.suffix)
                # all_urls[l.split(",")[1].strip()] = l.split(",")[0].strip()
        with open(os.getcwd() + "/all_urls_dump", "wb") as f:
            pickled = pickle.dumps(all_urls)
            pickle.dump(pickled, f)
    else:
        with open(os.getcwd() + "/all_urls_dump", "rb") as f:
            pickled = pickle.load(f)
            all_urls = pickle.loads(pickled)
        print(type(all_urls))

    print("all_urls len", len(all_urls))
    get_non_duplicate_websites(all_urls, folders)

def get_pwa_amount(rootdir):
    extract = tldextract.TLDExtract()
    websites = []
    for website in os.listdir(rootdir):
        if extract(website).domain not in websites:
            if len(extract(website).domain) < 2:
                print(extract(website).domain)
            websites.append(extract(website).domain)
    print(len(websites))

# get_pwa_amount(os.getcwd() + "/last_sws/")
# exit(0)

def check_website_list_against_folder(website_list, folder):
    present, not_present, folder_sites = [], [], []
    for website in os.listdir(folder):
        folder_sites.append(website)
    for website in website_list:
        if not website in folder_sites:
            not_present.append(website)
        else:
            present.append(website)
    print("not present", len(not_present), "present", len(present))

def pick_n_random(array, n):
    result = []
    while n > 0:
        choice = random.choice(array)
        result.append(choice)
        array.remove(choice)
        n -= 1
    
    return result

if __name__ == "__main__":
    # TODO: explain the final sites list
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
    
    # web_app_post_processor.get_small_indexes(webapp_base_folder)
    # exit(0)

    # this is origin of unknown urls
    all_sw_sites = []
    for subdir, _, _ in os.walk(sw_base_folder):
        splitted = subdir.split("/")
        all_sw_sites.append(splitted[-1])
    final_sites = file_interactor.load_object_exists("final_sites") or sw_post_processor.get_final_sites_list(all_sw_sites)
    final_sites_manifests = sw_post_processor.get_final_sites_manifests(final_sites, sw_base_folder)
    
    # These are used for manually inspecting the importScripts
    random_sites = file_interactor.load_object_exists("random_sites") or pick_n_random(final_sites_manifests, 30)

    valid_sw_paths = sw_post_processor.get_valid_sw_paths(sw_base_folder)
    
    print("valid sw paths len", len(valid_sw_paths))
    if len(valid_sw_paths) > 9782:
        print("too large vlid sw", len(valid_sw_paths))
        exit(0)

    paths_set, non_paths_set = (file_interactor.load_object_exists("paths_set"), set()) or (set(), set())
    http_paths = file_interactor.load_object_exists("http_paths") or set()
    print("pathset length", len(paths_set))
    old_path_set = paths_set.copy()    

    non_empty_sw = set(["hapi.dev", "coronatracker.com", "gamezop.com", "tusij.com", "streetlib.com", "otosaigon.com", "newslaundry.com", "angi.com"])
    static_sw_paths = file_interactor.load_object_exists("static_sw_paths") or set()
    if not len(static_sw_paths):
        for valid_sw_path in valid_sw_paths:
            sw_path = valid_sw_paths[valid_sw_path] + "/beautified.js"
            if os.path.exists(sw_path):
                content = sw_post_processor.remove_js_comments(open(sw_path, "r").read()).lower()
                if "importscripts" in content.lower():
                    static_sw_paths.add(sw_path)
    file_interactor.save_object(static_sw_paths, "static_sw_paths")
    count = 0
    sw_folders = [os.path.join(sw_base_folder, f) for f in os.listdir(sw_base_folder) if os.path.isdir(os.path.join(sw_base_folder, f))]

    usb_sites = web_app_post_processor.get_usb_sites(webapp_base_folder)

    url_local_file_linker = file_interactor.load_object_exists("url_local_file_linker")
    valid_linked_sw_paths = file_interactor.load_object_exists("valid_linked_sw_paths") or set()
    added_sw_domains = file_interactor.load_object_exists("added_sw_domains")
    sw_paths_urls = file_interactor.load_object_exists("sw_paths_urls")
    imported_scripts_linker = file_interactor.load_object_exists("imported_scripts_linker")

    # Uncomment to scrape additional imports recursively
    # sw_post_processor.get_all_imports_importsfolder(imported_scripts_folder, url_local_file_linker)

    manifest_potential = file_interactor.load_object_exists("manifest_potential") or {}
    no_manifest_potential = file_interactor.load_object_exists("no_manifest_potential") or set()
    empty_index = file_interactor.load_object_exists("empty_index") or set()

    if len(manifest_potential) == 0 or len(no_manifest_potential) == 0 or len(empty_index) == 0:
        sw_post_processor.get_potential_manifest_sws(sw_folders, manifest_potential, no_manifest_potential, empty_index)

    if not valid_linked_sw_paths or len(valid_linked_sw_paths) == 0:
        sw_post_processor.set_valid_linked_sw_paths(manifest_potential)

    # domain + "." + suffix -> beautified path
    final_sw_paths = sw_post_processor.get_final_sw_paths(sw_base_folder)
    print("final sw paths len", len(final_sw_paths))

    # domain + "." + suffix -> webapp folder/zipfile
    final_webapp_paths = web_app_post_processor.get_final_webapp_paths(webapp_base_folder, final_sw_paths)
    print("final web app paths len", len(final_webapp_paths))
    pwa_results_csv_file = os.getcwd() + "/CSVs/pwa_results_final.csv"
    if not os.path.exists(pwa_results_csv_file):
        web_app_post_processor.get_webapp_results(pwa_results_csv_file, final_webapp_paths)

        pwa_df = pd.read_csv(pwa_results_csv_file, sep=";")
        pwa_df = pwa_df[pwa_df.website.isin(final_webapp_paths)]
        pwa_df = pwa_df.reset_index(drop=True)
        pwa_df.to_csv(os.getcwd() + "/CSVs/pwa_results_final_final.csv", sep=";")
    
    sw_results_csv_file = os.getcwd() + "/CSVs/sw_results_final.csv"
    if not os.path.exists(sw_results_csv_file):
        sw_post_processor.get_sw_results(final_sw_paths)

    features_csv_file = os.getcwd() + "/CSVs/features.csv"
    manifest_csv_file = os.getcwd() + "/CSVs/manifest.csv"
    if not os.path.exists(features_csv_file) or not os.path.exists(manifest_csv_file):
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

    scores_folder = "/media/jesse/second_linux/Scores/"
    
    yellowlabtools_csv_file = os.getcwd() + "/CSVs/ylt_aggregated.csv"
    if not os.path.exists(yellowlabtools_csv_file):
        sw_post_processor.process_yellowlabtools_scores(os.path.join(scores_folder, "yellowlabtools"), final_sw_paths.keys(), yellowlabtools_csv_file)
    # exit(0)

    yellowlabtools_csv_file_final = os.getcwd() + "/CSVs/ylt_aggregated_final.csv"
    if not os.path.exists(yellowlabtools_csv_file_final):
        sw_post_processor.get_final_audit_csv(yellowlabtools_csv_file, 'website', final_sw_paths.keys())

    # ytl_missing_list = file_interactor.load_object_exists("filter_list")
    # scores_folder = os.getcwd() + "/Scores"

    # for site in ytl_missing_list:
    #     print("run ylt for", site)
    #     run_ylt(site, os.path.join(scores_folder, "yellowlabtools"))
        # exit(0)
    
    # yellowlabtools_csv_file = os.getcwd() + "/CSVs/ylt_aggregated2.csv"
    # sw_post_processor.process_yellowlabtools_scores(os.path.join(scores_folder, "yellowlabtools"), final_sw_paths.keys(), yellowlabtools_csv_file)
    
    # df = pd.read_csv(yellowlabtools_csv_file, sep=";")
    # df = df[df.website.isin(final_sw_paths)]
    # df = df.reset_index(drop=True)
    # df.to_csv(os.getcwd() + "/CSVs/yellowlabtools_final.csv", sep=";")

    lighthouse_csv_file = os.getcwd() + "/CSVs/lighthouse_aggregated.csv"
    scores_folder = "/media/jesse/second_linux/Scores/"
    if not os.path.exists(lighthouse_csv_file):
        sw_post_processor.process_lighthouse_scores(os.path.join(scores_folder, "lighthouse_vm/lighthouse"), final_sw_paths.keys(), lighthouse_csv_file)

    lighthouse_csv_file_final = os.getcwd() + "/CSVs/lighthouse_aggregated_final.csv"
    if not os.path.exists(lighthouse_csv_file_final):
        sw_post_processor.get_final_audit_csv(lighthouse_csv_file, 'website', final_sw_paths.keys(), sep=";")

    # sw_post_processor.get_final_audit_scores(yellowlabtools_csv_file, lighthouse_csv_file, final_sw_paths.keys())


    exit(0)

    # for sw_path in static_sw_paths:
    #     if os.path.exists(sw_path):
    #         if os.path.exists(os.path.join("/".join(sw_path.split("/")[:-1]), "manifest.json")):
    #             count += 1
    print(c, b)
    c, b = 0, 0
    manifest_failed_scraping = file_interactor.load_object_exists("manifest_failed_scraping") or set()        

    c = 0
    added_sw_domains = set()
    not_added_sw_domains = set()
    for sw in valid_linked_sw_paths:
        sw_splitted = sw.split(sw_base_folder)[1].split("beautified.js")[0].strip("/")
        sw_ext = extract(sw_splitted)
        if sw_ext.domain + "." + sw_ext.suffix in usb_sites:
            if sw_ext.domain in not_added_sw_domains:
                not_added_sw_domains.remove(sw_ext.domain + "." + sw_ext.suffix)
            added_sw_domains.add(sw_ext.domain + "." + sw_ext.suffix)
            pass
        else:
            c += 1
            sw_post_processor.print_red("notpresent", sw, sw_ext.domain)
            if sw_ext.domain not in added_sw_domains:
                not_added_sw_domains.add(sw_ext.domain + "." + sw_ext.suffix)

    sws_in_webapps = added_sw_domains
    file_interactor.save_object(sws_in_webapps, "sws_in_webapps")
    file_interactor.save_object(added_sw_domains, "added_sw_domains")
    # sw_post_processor.run_pwa_loc
    print(c, len(added_sw_domains), len(not_added_sw_domains), len(valid_linked_sw_paths))
    exit(0)

    print(c, b)
    print("manifest potential", len(manifest_potential))
    print("no manifest potential", len(no_manifest_potential))
    print("empty indexes", len(empty_index))
    # correct, faulty, semifaulty = sw_post_processor.check_beautified_doctype(valid_linked_sw_paths)
    semifaulty = file_interactor.load_object_exists("semifaulty")
    file_interactor.save_object(semifaulty, "semifaulty")
    for sw_folder in semifaulty:
        base_folder = "/".join(sw_folder.split("/")[:-1])
        if os.path.exists(base_folder):
        # print("base", base_folder)
            files = [f for f in os.listdir(base_folder) if os.path.exists(os.path.join(base_folder, f)) and os.path.isfile(os.path.join(base_folder, f))]
            files = set(files)
            files.difference_update(set(["manifest.json", "features.json", "beautified.js", "requests", "index.html", "imported_files.txt", "manifestError"]))
            if len(files) == 1:
                print(len(files), base_folder.split("/")[-1], files)
                content = open(os.path.join(base_folder, list(files)[0]), "r").read()
                beautified = jsbeautifier.beautify(content)
                print(beautified[:100])
                with open(os.path.join(base_folder, "beautified.js"), "w") as f:
                    f.write(beautified)
    # print(len(correct), len(faulty), faulty, len(faulty))
    # print(semifaulty, len(semifaulty))
    exit(0)
    for (folder, manifest_urls) in manifest_potential:
        if os.path.exists(os.path.join(folder, "/manifest.json")):
            try:
                json_data = json.load(open(os.path.join(folder, "manifest.json")))
            except:
                try:
                    json_data = json.load(open(os.path.join(folder, "manifest.json"), encoding='utf-8-sig'))
                except:
                    for url in manifest_urls:
                        sw_post_processor.save_manifest_from_links(manifest_urls, folder.split("/")[-1], folder.split("/")[:-1])
                    # files_to_delete.append(sw_path)
                    print("whoops", folder.split("/")[-1])
        else:
            for url in manifest_urls:
                sw_post_processor.save_manifest_from_links(manifest_urls, folder.split("/")[-1], folder.split("/")[:-1])

    print(len(folders))
    print(count , len(static_sw_paths), list(static_sw_paths)[:4])

    # check of links nog uitgebreid kunnen worden. hoop dat er weinig zijn door manifest die mist
    usb_sw_link, usb_sw_no_link = sw_post_processor.get_usb_sw_links(webapp_base_folder, sw_base_folder)
    print("usb sw links", len(usb_sw_link), "usb sw no links", len(usb_sw_no_link))
    exit(0)

    sw_paths_urls = file_interactor.load_object_exists("sw_paths_urls") or {}
    sw_paths_no_urls = set()
    arc_urls = set(["https://arc.io/arc-sw-core.js", "https://arc.io/shared-worker.js", "https://arc.io/dedicated-worker.js"])

    black_list = ["reslightho.top", "watchtvseries.video", "myfreeblack", "ginfantage", "aviasales", "www.fux.com", "graphyincre", "aestheticnation", "escatedint", "thorithse", "rricultscarlo", "dredown", "guinnersh", "tuberel", "notroublead", "leasantcon", "planbee", "oolsconsor.online", "oolsconsor.online", "laturnitytas.space", "jistenbefor.space", "ctexcitize.online", "sysinbusine.fun", "agoda.cn", "edvisualtye.space", "arteisabello.space", "supervicesra.top", "pornerbros.com", "see.xxx", "htexamplerri.top", "gesfittedly.top", "wotofo", "universalstandard.com", "docusaurus.io", "barry.ca", "8greens"]
    # sw_post_processor.get_manifests_from_list(valid_sw_paths, black_list)
    
    sw_paths_urls = file_interactor.load_object_exists("sw_paths_urls") or set()
    sw_paths_urls = set()
    if len(sw_paths_urls) == 0:
        sw_paths_urls, sw_paths_no_urls = sw_post_processor.filter_sw_importscripts(static_sw_paths)
        print("checked", len(static_sw_paths), "paths and got", len(sw_paths_urls))

        file_interactor.save_object(sw_paths_urls, "sw_paths_urls")
        print("sw paths urls", sw_paths_urls)
        first_sw_paths_urls = sw_paths_urls.copy()
        file_interactor.save_object(first_sw_paths_urls, "first_sw_paths_urls")
    
    if len(sw_paths_no_urls) > 0:
        sw_post_processor.check_sw_paths_no_urls(sw_paths_no_urls)

    url_local_file_linker = file_interactor.load_object_exists("url_local_file_linker")
    url_local_file_linker = None
    if not url_local_file_linker:
        url_local_file_linker = sw_post_processor.sw_scrape_importscripts(sw_paths_urls)
        # print(url_local_file_linker[""])
    print(len(sw_paths_urls))
    # exit(0)

    imported_file_paths = set([url_local_file_linker[url] for url in url_local_file_linker.keys()])
    paths_set = set()
    for valid_sw_path in imported_file_paths:
        sw_path = valid_sw_path
        # sw_path = "/home/jesse/Documents/School/2/scriptie/thesis-pwa/SWs/last_sws_desktop_manifests/www.binary.me/beautified.js"
        if os.path.exists(sw_path):
        # import_script_lines, non_import_script_lines = sw_post_processor.get_lines_with_substr_from_files(sw_path, "importscripts", present_substr="")
            content = sw_post_processor.remove_js_comments(open(sw_path, "r").read()).lower()
            import_scripts_index = content.find("importscripts")
            while import_scripts_index != -1:
                paranthesis_index = import_scripts_index + len("importscripts")
                while not content[paranthesis_index]:
                    paranthesis_index += 1
                if content[paranthesis_index] == "(":
                    paths_set.add(sw_path)

                import_scripts_index = content.find("importscripts", import_scripts_index + 1)

    print("imported file paths len", len(imported_file_paths), len(paths_set))
    imported_paths_urls, _ = (file_interactor.load_object_exists("imported_paths_urls"), _) or sw_post_processor.filter_sw_importscripts(paths_set, black_list, arc_urls)
    # sw_post_processor.sw_scrape_importscripts(valid_sw_paths, imported_paths_urls)

    error_paths = file_interactor.load_object_exists("error_paths")

    imported_scripts_folder = os.getcwd() + "/SWs/imported_scripts/"
    imported_files = [os.path.join(f) for f in os.listdir(imported_scripts_folder) if os.path.isfile(os.path.join(imported_scripts_folder, f))]
    
    count = 0
    not_present, newline_urls = set(), set()
    for path in imported_paths_urls:
        # print("sw path url", path, imported_paths_urls[path])
        for url in imported_paths_urls[path]:
            if url_interactor.replace_url(url) in imported_files:
                count += 1
            else:
                if not "\n" in url:
                    not_present.add(url)
                else:
                    if not "cdn.jsdelivr" in url and not "https://storage.googleapis.com/workbox-cdn/" in url and "googleanalytics" not in url:
                        newline_urls.add((path, url))
    file_interactor.save_object(imported_paths_urls, "imported_paths_urls")

    # beautified.js path -> urls set
    first_imported_paths_urls = file_interactor.load_object_exists("first_sw_paths_urls")

    sw_all_import_paths = file_interactor.load_object_exists("sw_all_import_paths") or {}
    # if not len(sw_all_import_paths):
    paths = [valid_sw_paths[x] for x in non_empty_sw]
    if len(sw_all_import_paths) == 0:
        for path in first_imported_paths_urls:
            for url in first_imported_paths_urls[path]:
        # for path in paths:
            # path += "/beautified.js"
            # print(path)
            # if path not in sw_paths_urls:
                # continue
            # print(sw_paths_urls[path])
                for url in sw_paths_urls[path]:
                    if url in url_local_file_linker:
                        if path in sw_all_import_paths:
                            sw_all_import_paths[path].add(url_local_file_linker[url])
                        else:
                            sw_all_import_paths[path] = set([url_local_file_linker[url]])
                        # break
                        if url_local_file_linker[url] in imported_paths_urls:
                            for url2 in imported_paths_urls[url_local_file_linker[url]]:
                                if url2 in url_local_file_linker:
                                    print("\n\n", url, url2, imported_paths_urls[url_local_file_linker[url]])
                                    print(url2 in url_local_file_linker)
                                    if path in sw_all_import_paths:
                                        sw_all_import_paths[path].add(url_local_file_linker[url2])
                                    else:
                                        sw_all_import_paths[path] = set([url_local_file_linker[url2]])

        file_interactor.save_object(sw_all_import_paths, "sw_all_import_paths")    

    # for sw in sw_all_import_paths:
        # print(sw, sw_all_import_paths["/home/jesse/Documents/School/2/scriptie/thesis-pwa/SWs/last_sws_desktop_manifests/hapi.dev/beautified.js"])


    # imported urls from urls set -> extra urls set
    # for imported_path in imported_paths_urls:
    #     print("imported", imported_path, imported_paths_urls[imported_path])
    #     break

    # if not os.path.exists(os.getcwd() + "/local_vars/sw_run_output.txt") or os.stat(os.getcwd() + "/local_vars/sw_run_output.txt").st_size == 0:
        # sw_post_processor.get_sw_results(valid_sw_paths, sw_all_import_paths)
    # else:
    #     result_lines = ["name;sws amount;size;events;loc;ccns"]
    #     with open(os.getcwd() + "/local_vars/sw_run_output.txt", "r") as f:
    #         for l in f:
    #             l = l.strip("sw run output ")
    #             print(l)
    #             result_lines.append(l)
    

    filtered_final_sites = {}
    # swsite -> swsite folder
    for sw_path in valid_sw_paths:
        print("valid sw paths", sw_path, valid_sw_paths[sw_path])
        break
    # usbsite -> swsite
    count = 0
    pwa_result_lines, sw_results_lines = [], []
    pwa_results_file = os.getcwd() + "/CSVs/websiteLOC2.csv"
    sw_results_file = os.getcwd() + "/CSVs/sw_results.csv"

    pwa_results_file = os.getcwd() + "/local_vars/pwa_run_output.txt"
    sw_results_file = os.getcwd() + "/local_vars/sw_run_output.txt"
    pwa_lines, sw_lines = (file_interactor.load_object_exists("pwa_lines"), file_interactor.load_object_exists("sw_lines")) or (set(), set())

    # pwa_lines, sw_lines = set(), set()
    if not len(pwa_lines) or not len(sw_lines):
        for usb_site in final_sites:
            if final_sites[usb_site] in valid_sw_paths:
                raw_pwa_line = data_aggregator.get_line_file(usb_site + ";", pwa_results_file, starts_with=True)
                if not raw_pwa_line:
                    raw_pwa_line = data_aggregator.get_line_file(usb_site + ";", pwa_results_file, starts_with=False)
                pwa_lines.add(raw_pwa_line)

                raw_sw_line = data_aggregator.get_line_file("sw run output " + final_sites[usb_site] + ";", sw_results_file, starts_with=True)
                if not raw_sw_line:
                    raw_sw_lines = data_aggregator.get_line_file(final_sites[usb_site] + ";", sw_results_file, starts_with=False, multiple=True)
                    if len(raw_sw_lines) == 1:
                        raw_sw_line = raw_sw_lines[0]
                    else:
                        for line in raw_sw_lines:
                            site = line.split(";")[0].split(" ")[-1]
                            ext = extract(site)
                            if ext.domain + "." + ext.suffix == final_sites[usb_site]:
                                raw_sw_line = line

                sw_lines.add(raw_sw_line)                

    file_interactor.save_object(pwa_lines, "pwa_lines")
    file_interactor.save_object(sw_lines, "sw_lines")

    pwa_check = set()
    for line in pwa_lines:
        if line:
            ext = extract(line.split(";")[0])
            pwa_check.add(ext.domain + "." + ext.suffix)

    present, missing = set(), set()

    for usb_site in final_sites:
        if final_sites[usb_site] in valid_sw_paths:
            ext = extract(usb_site)
            if ext.domain + "." + ext.suffix not in pwa_check:
                missing.add(usb_site)
            else:
                present.add(usb_site)

    pwa_results_csv_file = os.getcwd() + "/CSVs/pwa_results.csv"
    if len(missing) == 0:
        print("pwa missing 0")
        if not os.path.exists(pwa_results_csv_file):
            with open(pwa_results_csv_file, "w") as f:
                f.write("website;size;html;css;js\n")
                for line in pwa_lines:
                    print("pwa line", line,)
                    website = line.split(";")[0]
                    ext = extract(website)
                    print('"' + website + '";"' + '";"'.join(line.split(";")[1:]) + '"' + "\n")
                    website = ext.domain + "." + ext.suffix
                    f.write('"' + website + '";"' + '";"'.join(line.split(";")[1:]) + '"' + "\n")

    # sw_post_processor.run_pwa_loc_folder("/media/second_linux/usb_webapps", csv_path=os.getcwd() + "/local_vars/pwa_run_output.txt", handled=list(present), missing=missing, missing_check=False)

    print(count, len(valid_sw_paths))
    check = set()
    for line in sw_lines:
        if line:
            line = "".join(line.split("sw run output")[0:]).split(";")[0].strip()
            site = line.split(";")[0].split(" ")[-1]
            ext = extract(site)
            check.add(ext.domain + "." + ext.suffix)

    print(len(check))
    print(len(pwa_lines), len(sw_lines))
    missing = set()
    for sw_site in valid_sw_paths:
        sw_site = sw_site.split("/")[-1]
        present = False
        ext = extract(sw_site)
        if ext.domain + "." + ext.suffix not in check:
            print(ext.domain, ext.suffix)
            missing.add(sw_site)
    print(len(missing))

    sw_results_csv_file = os.getcwd() + "/CSVs/sw_results.csv"

    # TODO check sites in nonempty sw, komen niet goed in csv
    if len(missing) == 0:
        print("sw missiing 0")
        if not os.path.exists(sw_results_csv_file):
            with open(sw_results_csv_file, "a+") as f:
                f.write("website;SWs amount;size;events;loc;ccns\n")
                for line in sw_lines:
                    # print("sw line 1", line)
                    if line.startswith("sw run "):
                        website = line.split(" ")[3].split(";")[0]
                    else:
                        website = line.split(";")[0]
                    ext = extract(website)
                    website = ext.domain + "." + ext.suffix
                    
                    if line.startswith("sw run "):
                        f.write('"' + website + '";"1";"' + '";"'.join("".join(line.split(" ")[3:]).split(";")[2:]) + '"' + "\n")
                    else:
                        f.write('"' + website + '";"1";"' + '";"'.join(line.split(";")[2:]) + '"' + "\n")

    print("missing", len(missing), list(missing))
    non_empty_sw = [os.path.join(sw_base_folder, x, "beautified.js") for x in non_empty_sw]
    print(non_empty_sw)
    sw_post_processor.get_sw_results(valid_sw_paths, sw_all_import_paths, missing=non_empty_sw)

    if not os.path.exists(features_csv_file):
        handle = open(features_csv_file, "w")
        handle.close()
    if not os.path.exists(manifest_csv_file):
        handle = open(manifest_csv_file, "w")
        handle.close()
    
    valid_sw_paths["elle.com"] = "elle.com.br/"
    valid_sw_paths["aidog.app"] = "www.aidog.app/"
    valid_sw_paths["makerobos.com"] = "www.makerobos.com/"
    valid_sw_paths["vk.com"] = "220vk.com"

    files_to_delete = file_interactor.load_object_exists("files_to_delete") or []
    files_to_delete = []
    print("files to del len", len(files_to_delete), files_to_delete)

    for sw_path in files_to_delete:
        if sw_path in valid_sw_paths:
            print(sw_path, "not in valid")
            del valid_sw_paths[sw_path]
            exit(0)
    
    feature_write = False
    if os.stat(features_csv_file).st_size / 1000 < 100:
        feature_write = True
    
    manifest_write = False
    if os.stat(manifest_csv_file).st_size / 1000 < 100:
        manifest_write = True

    # del valid_sw_paths['hervalnoticias.com.br']
    if False:
        for sw_path in valid_sw_paths:
            # print("yolo", sw_path)

            # if "spycentre.com" in sw_path or "tamaris.com" in sw_path or "enterprisekia.com" in sw_path or "entrepreneurfox.com" in sw_path or "asusvn.com" in sw_path or "orthodoxalbania.org" in sw_path or sw_path == "nsnews.com":
                # print("skipping")
                # continue
            # if not os.path.exists(valid_sw_paths[sw_path]):
            #     print("sw path", sw_path, valid_sw_paths[sw_path], "doesnt exist")
            #     continue
            feature_data = data_aggregator.get_features_from_file(os.path.join(sw_base_folder, valid_sw_paths[sw_path], "features.json"))
            with open(features_csv_file, "a+") as f:
                if os.stat(features_csv_file).st_size == 0:
                    first_line = "website"
                    for item in feature_data:
                        first_line += f";{item[0]}"
                    f.write(first_line + "\n")
                ext = extract(sw_path)
                website_line = ext.domain + "." + ext.suffix
                for item in feature_data:
                    website_line += f";{item[1]}"
                if feature_write:
                    f.write(website_line + "\n")
            manifest_path = os.path.join(sw_base_folder, valid_sw_paths[sw_path], "manifest.json")
            # manifest_data = data_aggregator.get_features_from_file(os.path.join(sw_base_folder, valid_sw_paths[sw_path], "manifest.json"))
            json_data = ""
            try:
                json_data = json.load(open(manifest_path))
            except:
                try:
                    json_data = json.load(open(manifest_path, encoding='utf-8-sig'))
                except:
                    files_to_delete.append(sw_path)
                    print("whoops")
                    # exit(0)
                    continue
            if not json_data:
                files_to_delete.append(sw_path)
                exit(0)
                continue
            else:
                with open(manifest_csv_file, "a+") as f:
                    if os.stat(manifest_csv_file).st_size == 0:
                        first_line = "website"
                        # for item in manifest_data:
                        #     first_line += f";{item[0]}"
                        ext = extract(sw_path)
                        website = ext.domain + "." + ext.suffix
                        f.write("website" + ";" + ";".join(manifest_keys) + "\n")
                    ext = extract(sw_path)

                    website_line = '"' + ext.domain + "." + ext.suffix + '"'
                    
                    for key in manifest_keys:
                        if key in json_data:
                            website_line += ';"' + str(1) + '"'
                        else:
                            website_line += ';"' + str(0) + '"'
                    # website_line += '"'
                    # print(website_line)
                    if website_line == "":
                        print(sw_path, "empty line")
                        exit(0)
                    if manifest_write:
                        f.write(website_line + "\n")

    file_interactor.save_object(valid_sw_paths, "valid_sw_paths")
    file_interactor.save_object(files_to_delete, "files_to_delete")

    for sw_path in files_to_delete:
        if sw_path in valid_sw_paths:
            print(sw_path, "not in valid")
            del valid_sw_paths[sw_path]
    file_interactor.save_object(valid_sw_paths, "valid_sw_paths")

    valid_webapps = []
    for usb_site in final_sites:
        if final_sites[usb_site] in valid_sw_paths:
            valid_webapps.append(usb_site)

    
    print([x for x in valid_sw_paths][:2], [valid_sw_paths[x] for x in valid_sw_paths][:2])
    print(valid_webapps[:2], len(valid_sw_paths))

    sw_post_processor.check_ylt_csv("/media/second_linux/Scores/ylt_aggregated.csv", [x for x in valid_sw_paths] + valid_webapps)

    sw_post_processor.check_ylt_csv("/media/second_linux/Scores/lighthouse_aggregated.csv", [x for x in valid_sw_paths] + valid_webapps, local_var_name="lighthouse_filtered_pandas", output_path=os.getcwd() + "/CSVs/filtered_ligthouse.csv")