import os
import requests
import pickle
import gzip
import json
import tldextract
import numpy as np
import pandas as pd
import compress_json

class Output:
    def __init__(self) -> None:
        self.OKGREEN = '\033[92m'
        self.FAIL = '\033[91m'
        self.ENDC = '\033[0m'

    def print_color(self, string, color):
        print(color + str(string) + self.ENDC)
    
    def print_green(self, *strings):
        total = ""
        for string in strings:
            total += str(string) + " "
        self.print_color(str(total), self.OKGREEN)
    
    def print_fail(self, *strings):
        total = ""
        for string in strings:
            total += str(string) + " "
        self.print_color(str(total), self.FAIL)

class URLInteractor:
    def __init__(self) -> None:
        self.output = Output()
        self.data_aggregator = DataAggregator()
        self.print_green = self.output.print_green
        self.print_fail = self.output.print_fail

    def replace_url(self, url):
        return url.replace("/", "_")

    def inverse_replace_url(self, url):
        return url.replace("_", "/")
    
    def get_content_url(self, url):
        header = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}
        try:
                # print("trying to open url", url)
            responses = requests.get(url, headers=header, timeout=60)
            responses.raise_for_status()
            content = responses.text
            return content
        except:
            try:
                url = url[len("https://"):]
                if not url.startswith("www."):
                    url = "https://www." + url
                    responses = requests.get(url, headers=header, timeout=60)
                    responses.raise_for_status()
                    content = responses.text
                    return content
            except Exception as e:
                print("Could not open url " + url)
                print("Error", e, e.__class__.__name__)

class FileInteractor:
    def __init__(self) -> None:
        pass
    
    def compress_json_file(path):
        if os.stat(path).st_size != 0:
            with open(path, "r") as f:
                try:
                    file_content = f.read()
                except:
                    print("Compress json file failed")
                    exit(0)
                json_string = json.loads(file_content)
            compress_json.dump(str(json_string), path + ".gz")
            os.remove(path)

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
        self.output = Output()
        self.print_green = self.output.print_green
        self.extract = tldextract.TLDExtract()
        self.json_manifest_loadfail = set()
        pass

    def string_csv_to_usb(self, string):
        return string.replace("-", "_")

    def string_usb_to_csv(self, string):
        return string.replace("_", "-").split(".zip")[0].split(" ")[0]
    
    def get_features_manifest_json_from_file(self, path, return_json=False):
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
                self.json_manifest_loadfail.add(path)
                raise Exception("error loading json")
        if return_json:
            return json_content

        res = [(key, 1) if json_content[key] else (key, 0) for key in json_content]
        return res

    def get_frameworks_wappalyzer(self, wappalyzer_folder, valid_websites):
        total = {}
        black_list = []
        with open(wappalyzer_folder + "wappalyzer_template.csv", "r") as f:
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

    def hasNumbers(self, inputString):
        return any(char.isdigit() for char in inputString)

    def get_frameworks_whatruns(self, whatruns_folders, valid_websites, total={}):
        count = 0
        processed_files = set()

        present = set()
        handled_files = set()
        black_list = ["Analytics", "Miscellaneous", "Advertising", "Sales and Marketing",\
                      "Javascript Graphics", "Programming Language", "Payment Processors",\
                      "Build CI Systems", "Maps", "Hosting Panel", "Search Engine",\
                      "Communication", "Font Script", "Web Server", "Web Server",\
                      "Operating System", "Rich Text Editors", "Dev Tools", "Cache",\
                      "Tag Managers", "Javascript Frameworks", "CDN",\
                      "Website Toolbox", "Affiliate Networks", "Awin", "framework", "frameworks",\
                      "Google Tag Manager", "cloudflare", "google font api",]

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
                       "hotjar", "plesk", "Sign up for a plan", "compare plans", "cms", "facebook pixel", "Facebook",\
                       "google adsense", "doubleclick (dfp)", "embed js", "google ads", "shiv", "yoast seo",\
                       "twitter emoji", "async", "respond js", "33across", "thememintarrow-2018", "media2", \
                       "select2", "themethe7", "theme", "plugins", "comm100", "c3", "http", "auth0", "mookie1",\
                       "social9", "peer5", "g2crowd", "vid4u", "istat24", "jquery migrate"]
        number_whitelist = ["d3", "k2", "nvd3", "i18next"]
        # if most_occurring in ["Javascript Frameworks", "Analytics", "Tag Managers", "Web Server", "Web Framework", "Conectar",\
            #                       "Advertising", "Programming Language", "Font Script", "Widgets", "CDN", "Miscellaneous", "Contraseña",\
            #                       "Sales and Marketing", "buscar personas, #hashtags, @páginas,! Grupos", "COSTARRICENSES",\
            #                       "Conéctese con amigos, familiares y el mundo que lo rodea.", "Ponte en contacto con tu familia, amigos o el mundo que te rodea.",\
            #                       "Compartir", "Comparta los momentos importantes de su vida con sus seres queridos.",\
            #                       "Descubrir", "Descubre gente nueva, crea nuevas conexiones y haz nuevos amigos.",\
            #                       " Nombre de usuario o correo electrónico", "Recuérdame", "INICIAR SESIÓN¿Olvidó su contraseña?",\
            #                       "Nombre de usuario", "Correo electrónico", "Nombre de usuario o correo electrónico",\
            #                       "Estoy de acuerdo con Condiciones de uso y .", "REGISTRARSE",\
            #                       "Costarricenses.cr es un proyecto oficial de AxiRED Internet Solutions Company, S.A.", "Involúcrese al WhatsApp  70 54 82 11",\
            #                       "Copyright © 2021 por AxiRED | La agencia de publicidad", "Ingeniería web por los mejores, Ingeniería web por ZARZA.",\
            #                       "Javascript Graphics", "Cache", "Build CI Systems", "Operating System", "CMS", "Captcha", "Dev Tools", "Communication",\
            #                       "Video", "Ruby on Rails 6.0.2", "Ruby on Rails 6.0.4", "JavaServer Pages 2.2", "JavaServer Pages 2.3", "Website Toolbox", "Web Server Extensions"]:
         

        valid_site_domains = self.file_interactor.load_object_exists("valid_site_domains") or {}
        # valid_site_domains = {}
        # total = self.file_interactor.load_object_exists("tmptotal")
        # present = self.file_interactor.load_object_exists("tmppresent")
        folder_rank = {}
        for valid_site in valid_websites:
            print("valid site", valid_site)
            # self.file_interactor.save_object(total, "tmptotal")
            # self.file_interactor.save_object(present, "tmppresent")
            for whatruns_folder in whatruns_folders:
            # if "_g" not in whatruns_folder:
            #     continue
                for _, _, files in os.walk(whatruns_folder):
                # print("whatruns folder", whatruns_folder)
                    # print("oi")
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
                            # big_files.append(file.split(".txt")[0])
                            skip = True
                        elif os.stat(whatruns_folder + file).st_size < 50:
                            # small_files.append(file.split(".txt")[0])
                            skip = True
                        first_line = ""
                        with open(whatruns_folder + file, "r") as f:
                            # print("opening whatruns file", file)
                            framework_library = False
                            site_check = file.split(".txt")[0]
                            if "www." in site_check:
                                site_check = site_check[4:]
                            for l in f:
                                l = l.strip()
                                # print(l, site_check in l)
                                if site_check in l and "What runs" in l or valid_site_ext.domain in l and "What runs" in l:
                                    site_present = file
                                    continue
                                elif "What runs ?" in l:
                                    skip = True
                                    break
                                elif "What runs" in l:
                                    first_line = l
                                if l:
                                    if "framework" in l.lower() or "library" in l.lower():
                                        framework_library = True
                                        # self.print_green(framework_library, l)
                                        continue
                                    # if framework_library:
                                        # elif framework:
                                            # if l not in black_list and "framework" not in l.lower() and "frameworks" not in l.lower():
                                        # if "bootstrap" in l.lower():
                                        #     print("bootstrap l ", l)
                                        #     exit(0)
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
                            # if valid_site not in present:
                                # print("whatruns not skipping")
                            present.add(valid_site)
                        # else:
                            # if "buscar personas, #hashtags, @páginas,! Grupos" in open(whatruns_folder + file, "r").read():
                            #     print("sentence present")
                            # if os.stat(whatruns_folder + file).st_size > 50 and can_print:
                            #     print("whatruns skipping", whatruns_folder.split("/")[-2], file, os.stat(whatruns_folder + file).st_size, site_present, file.split(".txt")[0], site_check, first_line)
                            # if valid_site in present:
                                # present.remove(valid_site)
                        # processed_files.add(file)

        self.file_interactor.save_object(valid_site_domains, "valid_site_domains")
        missing = 0
        for valid_site in valid_websites:
            if valid_site not in present:
                # print("missing whatruns", valid_site)
                missing += 1
        print("Whatruns processed", count, "files")
        print("missing whatruns", missing, len(present))
        # print("whatruns total", total, len(present))
        remaining_set = set(valid_websites)
        remaining_set.difference_update(set(present))
        print("remaining set", len(remaining_set), list(remaining_set)[:20])
        print("wecare.gr" in remaining_set)
        print("folder rank", folder_rank)
        # print("small files", len(small_files), small_files[:3], "big files", len(big_files), big_files[:3])
        # exit(0)
        return total

    def get_col_csv(self, filepath, col_index, sep=";", strip_char=""):
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
        first = False
        with open(filepath, "r") as f:
            for l in f:
                if not first:
                    first = True
                    continue
                l = l.strip()
                if not strip_char:
                    temp.append(l.split(sep)[col_index])
                else:
                    temp.append(l.split(sep)[col_index].strip(strip_char))

        return np.array(temp)
    
    def filter_csv(self, filepath, unique_col, sep=";"):
        data = pd.read_csv(filepath, sep=sep)
        print("len before", len(data))
        data = data.drop_duplicates(subset=[unique_col], keep="last")
        print("len after", len(data))
        data.to_csv(filepath, sep=sep)

    def strip_events(self, line):
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

    def get_file_events(self, file_content):
        events = []
        for l in file_content.split("\n"):
            l = l.lower()
            events_check = ["install", "activate", "message", "fetch", "sync", "push", "notificationclick", "notificationclose", "canmakepayment", "paymentrequest", "message", "messageerror"]
            # for event_check in events_check:
            if "addeventlistener" in l:
                potential_events = self.strip_events(l)
                for event in potential_events:
                    if event in events_check:
                        events.append(event)
                    
        return events