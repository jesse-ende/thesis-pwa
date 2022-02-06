from multiprocessing import process
from misc import Output, DataAggregator, FileInteractor, URLInteractor
import os
import subprocess
import tldextract
import validators
import re
import json
import jsbeautifier
import bs4
import gzip
import ast

# TODO add beautify_SWS function of other file
class SWPostProcessor:
    def __init__(self, path) -> None:
        self.sw_base_folder = path
        self.file_interactor = FileInteractor()
        self.print_green = Output().print_green
        self.print_red = Output().print_fail
        self.data_aggregator = DataAggregator()
        self.url_interactor = URLInteractor()
        self.extract = tldextract.TLDExtract()
    
    def link_webapps_sws(self, path):
        webapp_sw_linker = {}
        with open(path, "r") as f:
            for l in f:
                l = l.strip()
                webapp_sw_linker[l.split(";")[0]] = l.split(";")[1]
        return webapp_sw_linker

    def get_static_sw_paths(self, valid_linked_sw_sites):
        static_sw_paths = self.file_interactor.load_object_exists("static_sw_paths") or set()
        
        if not len(static_sw_paths):
            print("Loading static importscripts")
            for sw_folder in os.listdir(self.sw_base_folder):
                for dom in valid_linked_sw_sites:
                    site = dom
                    if valid_linked_sw_sites[dom]:
                        site += "." + valid_linked_sw_sites[dom]
                    if site in sw_folder:
                        sw_path = os.path.join(self.sw_base_folder, sw_folder, "beautified.js")
                        if os.path.exists(sw_path):
                            content = self.remove_js_comments(open(sw_path, "r").read()).lower()
                            if "importscripts" in content.lower():
                                static_sw_paths.add(sw_path)
                        break
            self.file_interactor.save_object(static_sw_paths, "static_sw_paths")

        return static_sw_paths
    
    def get_final_sites(self, valid_linked_sw_sites):
        final_sites = self.file_interactor.load_object_exists("final_sites") or set()
        final_sw_paths = self.file_interactor.load_object_exists("final_sw_paths") or {}

        if not len(final_sw_paths) or not len(final_sites):
            final_sites = set()
            final_sw_paths = {}
            for dom in valid_linked_sw_sites:
                if valid_linked_sw_sites[dom] != "":
                    site = dom + "." + valid_linked_sw_sites[dom]
                else:
                    site = dom

                if site in final_sites:
                    print("site already in final sites", site)
                    exit(0)
                final_sites.add(site)
                for sw in os.listdir(self.sw_base_folder):
                    if site == sw or "www." + site == sw:
                        final_sw_paths[site] = os.path.join(self.sw_base_folder, sw, "beautified.js")
                        break

            self.file_interactor.save_object(final_sites, "final_sites")
            self.file_interactor.save_object(final_sw_paths, "final_sw_paths")

        return final_sites, final_sw_paths

    def get_valid_linked_sw_sites(self, valid_linked_sw_paths):
        valid_linked_sw_sites = self.file_interactor.load_object_exists("valid_linked_sw_paths_domain_suffix") or {}

        if len(valid_linked_sw_sites) == 0:
            multiple_domain_sites = {"renault": "fr", "properati": "com.ar", "pinterest": "com", "serene-production-ezycommerce.ezyflight": "se", "michaelpage": "com",\
                                     "tastemade": "com.br", "mini": "co.uk", "emerald.widgetbot": "io", "underarmour": "co.jp", "chrono24": "com", "edreams": "com",\
                                     "europcar": "co.uk", "gogocarto": "fr", "clasf": "com.br", "ifood": "com.br", "eventbrite": "co.uk", "fashiola": "co.uk",\
                                     "avrotros": "nl", "adidas": "co.id", "cuponation": "com.mx", "centrum": "cz", "michelin": "ru", "ebay": "com", "pizzahut": "com.tw",\
                                     "uol": "com.br", "wego": "co.in", "airbnb": "com", "habitissimo": "es", "supercheapauto": "com.au", "autofun": "co.th",\
                                     "clearly": "ca", "developers.google": "com", "cloud.google": "com", "wne32.csb" : "app", "firebase.google": "com", "netbet": "de"}
            domain_blacklist = set(["renault", "pinterest", "centrum", "netbet", "widgetbot"])

            for site in valid_linked_sw_paths:
                if site.startswith("www."):
                    site = site[4:]
                if len(site.split(".")) == 2:
                    domain = site.split(".")[0]
                    suffix = site.split(".")[1]
                else:
                    ext = self.extract(site)
                    domain = ext.domain
                    suffix = ext.suffix
                    if domain in domain_blacklist:
                        continue
                    domain = site.split(domain)[0] + domain

                if domain in multiple_domain_sites:
                    continue
                found = False
                for multiple_domain in multiple_domain_sites:
                    if domain in multiple_domain and suffix in multiple_domain_sites[multiple_domain]:
                        found = True
                        break
                if found:
                    continue

                if domain in valid_linked_sw_sites:
                    valid_linked_sw_sites[domain].add(suffix)
                    if len(domain.split(".")) > 1:
                        print("domain already present", site, domain, suffix)
                else:
                    valid_linked_sw_sites[domain] = set([suffix])
            for domain in multiple_domain_sites:
                if domain in valid_linked_sw_sites:
                    print("multiple domain already in valid", domain, valid_linked_sw_sites[domain])
                    exit(0)
                valid_linked_sw_sites[domain] = [multiple_domain_sites[domain]]

        valid_linked_sw_sites = self.get_single_domains(valid_linked_sw_sites)
        self.file_interactor.save_object(valid_linked_sw_sites, "valid_linked_sw_sites")
        return valid_linked_sw_sites
    
    def run_ylt(self, website, output_paths):
        print("Running ylt", website)

        for output_path in output_paths:
            if os.path.exists(os.path.join(output_path, website)[:-1] + ".json") and os.stat(os.path.join(output_path, website)[:-1] + ".json").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json") and os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, website)[:-1] + ".json.gz") and os.stat(os.path.join(output_path, website)[:-1] + ".json.gz").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json.gz") and os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json.gz").st_size > 0:
                return True
        
        output_path = output_paths[-1]
        try:
            subprocess.check_output("yellowlabtools --reporter=json " + "https://" + website + " > " + os.path.join(output_path, website) + ".json", shell=True, timeout=60)
            self.data_aggregator.compress_json_file(os.path.join(output_path, website) + ".json")
        except:
            print("ylt failed for", website)
            self.remove_and_compress_json(output_path, ext=".gz")
            return False
        self.remove_and_compress_json(output_path, ext=".gz")

        return True

    def run_lighthouse(self, website, output_paths):
        print("Running lighthouse", website)

        for output_path in output_paths:
            if os.path.exists(os.path.join(output_path, website)[:-1] + ".json") and os.stat(os.path.join(output_path, website)[:-1] + ".json").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json") and os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, website)[:-1] + ".json.gz") and os.stat(os.path.join(output_path, website)[:-1] + ".json.gz").st_size > 0:
                return True
            if os.path.exists(os.path.join(output_path, "www." + website)[:-1] + ".json.gz") and os.stat(os.path.join(output_path, "www." + website)[:-1] + ".json.gz").st_size > 0:
                return True

        output_path = output_paths[-1]
        try:
            subprocess.check_output("lighthouse --chrome-flags='--headless' " + "https://" + website + " --preset=desktop --output=json --output-path=" + output_path + website + ".json", shell=True)
            self.data_aggregator.compress_json_file(os.path.join(output_path, website) + ".json")
        except:
            print("Lighthouse failed for", website)
            return False
        return True

    def check_lighthouse_score_file(self, file_path):
        _, scores = self.get_lighthouse_scores(file_path)
        if None in scores:
            return False
        return True

    def check_ylt_score_file(self, file_path):
        _, scores = self.get_ylt_scores(file_path)
        if None in scores or not len(scores):
            return False
        return True

    def get_missing_audit(self, site, audit_sites, scores_folders, audit_func, audit_file_check_func, *audit_args):
        found = False
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
                    self.data_aggregator.compress_json_file(os.path.join(folder, f))
                else:
                    os.remove(os.path.join(folder, f))

    def get_indexes_amount(self):
        sw_dirs = os.listdir(self.sw_base_folder)
        index_sites = self.file_interactor.load_object_exists("index_sites") or set()
        manifest_sites = self.file_interactor.load_object_exists("manifest_sites") or set()
        print("Getting index and manifest amounts")

        for site in sw_dirs:
            if site in manifest_sites and site not in index_sites:
                index_sites.add(site)
                manifest_sites.add(site)
                continue
            if site in index_sites or site in manifest_sites:
                continue
            files = [f for f in os.listdir(os.path.join(self.sw_base_folder, site)) if os.path.isfile(os.path.join(self.sw_base_folder, site, f))]
            if "index.html" in files:
                index_sites.add(site)
                index_content = open(os.path.join(self.sw_base_folder, site, "index.html"), "r").read()
                if len(self.get_manifest_link_html(index_content, content=True)):
                    if "manifest.json" in files:
                        manifest_sites.add(site)
                    else:
                        self.print_red(site, "has no manifest")
            self.file_interactor.save_object(index_sites, "index_sites")
            self.file_interactor.save_object(manifest_sites, "manifest_sites")

        return len(index_sites), len(manifest_sites)

    def get_missing_indexes(self):
        sw_dirs = os.listdir(self.sw_base_folder)
        for site in sw_dirs:
            print("Scraping missing indexes progress:", sw_dirs.index(site) / len(sw_dirs), end="\r")
            files = [f for f in os.listdir(os.path.join(self.sw_base_folder, site)) if os.path.isfile(os.path.join(self.sw_base_folder, site, f))]
            if "beautified.js" in files:
                if "index.html" not in files or ("index.html" in files and os.stat(os.path.join(self.sw_base_folder, site, "index.html")).st_size == 0):
                    index_content = self.url_interactor.get_content_url("https://" + site)
                    if index_content:
                        if not os.path.exists(os.path.join(self.sw_base_folder, site, "index.html")):
                            with open(os.path.join(self.sw_base_folder, site, "index.html"), "w") as f:
                                f.write(index_content)

    def get_missing_manifests(self, sw_base_folder):
        valid_linked_sw_paths = self.file_interactor.load_object_exists("valid_linked_sw_paths") or {}
        manifest_failed_scraping, manifest_succeeded_scraping = set(), set()
        for site in os.listdir(sw_base_folder):
            if site in valid_linked_sw_paths:
                    continue
            files = [f for f in os.listdir(os.path.join(sw_base_folder, site)) if os.path.isfile(os.path.join(sw_base_folder, site, f))]
            sw_folder = os.path.join(sw_base_folder, site)
            if "beautified.js" in files and "index.html" in files and os.stat(os.path.join(sw_folder, "index.html")).st_size > 0:
                if os.path.exists(os.path.join(sw_folder, "index.html")) and os.stat(os.path.join(sw_folder, "index.html")).st_size > 0:
                    index_content = open(os.path.join(sw_folder, "index.html"), "r").read()
                else:
                    index_content = self.url_interactor.get_content_url("https://" + site)

                if index_content:
                    if not os.path.exists(os.path.join(sw_folder, "index.html")):
                        with open(os.path.join(sw_folder, "index.html"), "w") as f:
                            f.write(index_content)
                    manifest_urls = self.get_manifest_link_html(index_content, content=True)
                    if len(manifest_urls):
                        valid_linked_sw_paths[site] = os.path.join(sw_folder, "beautified.js")
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
                                    self.print_red("no potential", sw_folder,  url)
                        if "manifest.json" in files:
                            manifest_succeeded_scraping.add(site)
                            if site in manifest_failed_scraping:
                                manifest_failed_scraping.remove(site)
                else:
                    print(site, "no index content")

            self.file_interactor.save_object(manifest_succeeded_scraping, "manifest_succeeded_scraping")
            self.file_interactor.save_object(manifest_failed_scraping, "manifest_failed_scraping")

        self.file_interactor.save_object(valid_linked_sw_paths, "valid_linked_sw_paths")

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

    def get_features_manifest_csvs(self, features_csv_file, manifest_csv_file, final_sw_paths):
        manifest_keys = ["background_color", "categories", "description", "dir", "display", "iarc_rating_id", "icons", "lang", "name", "orientation", "prefer_related_applications", "protocol_handlers", "related_applications", "scope", "screenshots", "short_name", "shortcuts", "start_url", "theme_color"]

        handle = open(features_csv_file, "w")
        handle.close()

        handle = open(manifest_csv_file, "w")
        handle.close()
        # features_temp, feature_same_count, feature_diff_count, diff_features = {}, 0, 0, []

        failed_features, failed_manifest = set(), set()
        # print("getting features and manifest csv", len(final_sw_paths))
        for sw in final_sw_paths:
            feature_path = os.path.join(final_sw_paths[sw].split("beautified.js")[0], "features.json")
            try:
                feature_data = self.data_aggregator.get_features_manifest_json_from_file(feature_path, return_json=False)
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
            except Exception as e:
                failed_features.add(sw)

            manifest_path = os.path.join(final_sw_paths[sw].split("beautified.js")[0], "manifest.json")
            try:
                manifest_data = self.data_aggregator.get_features_manifest_json_from_file(manifest_path, return_json=True)
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
                        print(manifest_path, "empty line")
                        exit(0)
                    f.write(website_line + "\n")
            except Exception as e:
                failed_manifest.add(sw)

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
        imported_scripts_linker = self.file_interactor.load_object_exists("imported_scripts_linker") or {}
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
            import_urls = self.strip_function_arguments_from_content(content, "(", ")", "importscripts")
        except Exception as e:
            print("error stripping importscripts", e)
            print(content)
            exit(1)
        # print("import urls", import_urls)

        return import_urls
    
    def filter_sw_importscripts(self, paths_set):
        sw_paths_urls, sw_paths_no_urls = {}, set()
        for path in paths_set:
            importscript_strings_present = self.get_importscripts_sources(path)
            for importscript_string in importscript_strings_present:
                url = importscript_string
                if "http" in path and "http" not in url:
                    while url.startswith(".") or url.startswith("/"):
                        url = url[1:]
                    url = "http" + self.url_interactor.inverse_replace_url(path.split("http")[-1]) + "/" + url
                elif "https://" not in url:
                    if url.startswith("."):
                        url = url[1:]
                    if url.startswith("/"):
                        url = url[1:]
                    try:
                        url = "https://" + path.split(self.sw_base_folder)[1].split("/")[0] + "/" + url
                    except:
                        continue

                if validators.url(url):
                    if path in sw_paths_urls:
                        sw_paths_urls[path].add(url)
                    else:
                        sw_paths_urls[path] = set([url])

            if path not in sw_paths_urls:
                sw_paths_no_urls.add(path)
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
                        if content != None:
                            try:
                                content = jsbeautifier.beautify(content).strip()
                            except:
                                if sw_path in failed_urls:
                                    failed_urls[sw_path].add(url)
                                else:
                                    failed_urls[sw_path] = set([url])
                                continue
                            if True in ["!doctype" and "html" in x.lower() for x in content.split("\n")] or content.lower().strip().startswith("<"):
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
                        else:
                            if sw_path in failed_urls:
                                failed_urls[sw_path].add(url)
                            else:
                                failed_urls[sw_path] = set([url])
                    self.file_interactor.save_object(url_local_file_linker, "url_local_file_linker")
                    self.file_interactor.save_object(failed_urls, "failed_urls")

        return url_local_file_linker

    def get_sw_results(self, final_sw_paths, sw_paths_urls, sw_results_csv_file):
        if not os.path.exists(sw_results_csv_file):
            with open(sw_results_csv_file, "w") as f:
                f.write("website;SWs count;size;events;loc;ccns\n")

        # sw_paths_urls = file_interactor.load_object_exists("sw_paths_urls")
        imported_scripts_linker = self.file_interactor.load_object_exists("imported_scripts_linker")
        url_local_file_linker = self.file_interactor.load_object_exists("url_local_file_linker")
        
        processed_sws = self.data_aggregator.get_col_csv(sw_results_csv_file, "website", strip_char='"')
        # self.data_aggregator.filter_csv(sw_results_csv_file, "website")
        # exit(0)

        for sw_domain_suffix in final_sw_paths:
            if sw_domain_suffix in processed_sws:
                continue
            sw = final_sw_paths[sw_domain_suffix]
            paths = set([sw])
            if sw in sw_paths_urls:
                urls = sw_paths_urls[sw]
                for url in urls:
                    if url in url_local_file_linker:
                        paths.add(url_local_file_linker[url])
                    if url in url_local_file_linker and url_local_file_linker[url] in imported_scripts_linker:
                        for import_path in imported_scripts_linker[url_local_file_linker[url]]:
                            paths.add(import_path)
            website, SW_count, size, events, loc, ccns = self.get_sw_metrics(paths, self.sw_base_folder, sw)
            self.file_interactor.append_line(sw_results_csv_file, f'"{sw_domain_suffix}";"{SW_count}";"{size}";"{events}";"{loc}";"{ccns}"\n')

    def strip_function_arguments_from_content(self, line, start_char, end_char, function_name):
        return_set = set()
        line = str(line)
        line = line.strip().lower()

        start_index = line.find(function_name)
        if start_index == -1:
            return return_set
        start_index += len(function_name)
        substring_start = line.find(start_char, start_index)

        while True:
            if substring_start == -1 or len(line) == 0 or start_index == -1:
                break

            current_index = start_index

            while not line[current_index] == start_char:
                current_index += 1
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
                for source in sources.split(","):
                    return_set.add(source)
                return return_set

            for source in sources.split(","):
                source = source.strip()
                if source.startswith("'") or source.startswith("`") or source.startswith('"'):
                    if source.endswith("'") or source.endswith("`") or source.endswith('"'):
                        source = source.strip("`").strip("'").strip('"')
                        return_set.add(source)
                    else:
                        return_set.add(source)
                else:
                    return_set.add(source)

            start_index = line.find(function_name, current_index)                

        return return_set

    def get_all_js(self, file_paths):
        all_js = ""
        for path in file_paths:
            if os.path.exists(path):
                all_js += open(path, "r").read() + "\n"
        return jsbeautifier.beautify(all_js).strip()

    def check_manifest_homescreen(self, sw_source_folder):
        try:
            manifest_data = self.data_aggregator.get_features_manifest_json_from_file(os.path.join(sw_source_folder, "manifest.json"), return_json=True)
        except:
            return False
        if "name" in manifest_data and manifest_data["name"]:
            if "icons" in manifest_data and manifest_data["icons"]:
                for icon in manifest_data["icons"]:
                    if "src" in icon and "sizes" in icon and "type" in icon:
                        return True
        return False

    def extract_sw_features_wrapper(self, sw_paths_urls, url_local_file_linker, final_sw_paths):
        imported_scripts_linker = self.file_interactor.load_object_exists("imported_scripts_linker")
        for sw_domain_suffix in final_sw_paths:
            sw = final_sw_paths[sw_domain_suffix]
            paths = set([sw])
            if sw in sw_paths_urls:
                urls = sw_paths_urls[sw]
                for url in urls:
                    if url in url_local_file_linker:
                        paths.add(url_local_file_linker[url])
                    if url in url_local_file_linker and url_local_file_linker[url] in imported_scripts_linker:
                        for import_path in imported_scripts_linker[url_local_file_linker[url]]:
                            paths.add(import_path)
            features = self.get_sw_features_from_js(os.path.join("/".join(sw.split("/")[:-1])), paths)
            if features:
                with open(os.path.join("/".join(sw.split("/")[:-1]), "features.json"), "w") as f:
                    json.dump(features, f)

    def get_sw_features_from_js(self, sw_source_folder, file_paths):
        all_js = ""
        for path in file_paths:
            all_js += open(path, "r").read() + "\n"
        all_js = self.remove_js_comments(all_js)
        all_js = all_js.lower()

        # TODO verwijder silent push uit latex en voeg background task en fetch toe. maak hem hetzelfde als deze lijst iig
        features = {"Offline Capabilities": False, "Push Notifications": False, "Add to Home Screen": False, "Background Sync": False, "Navigation Preload": False,\
                    "Storage Estimation": False, "Persistent Storage": False, "Web Share": False, "Media Session": False, "Media Capabilities": False,\
                    "Device Memory": False, "Getting Installed Related Apps": False, "Payment Request": False, "Credential Management": False,\
                    "Background Tasks": False, "Background Fetch": False}
        if "open" in all_js:
            args = self.strip_function_arguments_from_content(all_js, "(", ")", ".open")
            if len(args) >= 1:
                features["Offline Capabilities"] = True

        # Also includes "showNotification()"
        if "notification(" in all_js:
            features["Push Notifications"] = True        
        if self.check_manifest_homescreen(sw_source_folder):
            features["Add to Home Screen"] = True
        if "syncmanager" in all_js or "sync.register(" in all_js:
            features["Background Sync"] = True
        if "navigationpreload" in all_js and ".enable(" in all_js:
            features["Navigation Preload"] = True
        if "estimate(" in all_js:
            features["Storage Estimation"] = True
        if "persist(" in all_js or "persisted(" in all_js:
            features["Persistent Storage"] = True
        if "share(" in all_js or "canshare(" in all_js:
            features["Web Share"] = True
        if "mediametadata" in all_js or "mediasession" in all_js:
            features["Media Session"] = True
        if "mediacapabilities" in all_js:
            features["Media Capabilities"] = True
        if "devicememory" in all_js:
            features["Device Memory"] = True
        if "getinstalledrelatedapps" in all_js:
            features["Getting Installed Related Apps"] = True
        if "paymentrequest" in all_js or "canmakepayment(" in all_js:
            features["Payment Request"] = True
        if "federatedcredential" in all_js or "otpcredential" in all_js or "passwordcredential" in all_js or "publickeycredential" in all_js or "credential.id" in all_js or\
           "credential.type" in all_js:
            features["Credential Management"] = True
        if "requestidlecallback(" in all_js or "cancelidlecallback(" in all_js or "idledeadline" in all_js:
            features["Background Tasks"] = True
        if "backgroundfetchmanager" in all_js or "backgroundfetchregistration" in all_js or "backgroundfetchrecord" in all_js or "backgroundfetchevent" in all_js or\
            "backgroundfetchupdateuievent" in all_js or "backgroundfetch.fetch(" in all_js or "backgroundfetchevent" in all_js or "onbackgroundfetch" in all_js:
            features["Background Fetch"] = True

        if features["Push Notifications"]:
            print(features["Push Notifications"], file_paths)
        return features

    def get_sw_metrics(self, paths, sw_base_folder, sw, subfolder=os.getcwd() + "/SWs/temp/"):
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

        output = subprocess.check_output("cloc --csv " + temp_js_path , shell=True)
        loc = 0
        for l in output.decode().split("\n"):
            comma_splitted = l.lower().split(",")
            if len(comma_splitted) > 4:
                if comma_splitted[1] == "javascript":
                    loc += int(comma_splitted[4])

        try:
            output = subprocess.check_output("lizard -l js " + temp_js_path, shell=True)
        except subprocess.CalledProcessError as exc:
            # self.print_red("output error 1 " + output.decode()[:500])
            output = exc.output
            self.print_red("output error 2" + output.decode()[:500])
            # exit(0)

        ccns = []
        for l in output.decode().split("\n"):
            if "all_js" in l:
                if l.split()[1].isdigit():
                    ccns.append(l.split()[1])

        size = os.stat(temp_js_path).st_size
        events = self.data_aggregator.get_file_events(all_js)

        output = subprocess.check_output("ls " + "/".join(sw.split("/")[:-1]), shell=True)
        for l in output.decode().split("\n"):
            if l and not l.startswith("http") and "beautified" not in l and "requests" not in l and "features.json" not in l and "manifest" not in l and "imported_files" not in l and not "index.html" in l:
                print("sw file", l)
                SW_count += 1

        return website, SW_count, size, events, loc, ccns

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
                    score_json = json.load(open(score_file_path, "r"))
                    score_json = ast.literal_eval(score_json)
                    for complexity in ['domComplexity', 'cssComplexity', 'badJavascript', 'pageWeight', 'requests']:
                        scores.append(score_json[complexity]['categoryScore'])
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
                print("None in ylt scores", score_file_path)
                exit(0)
            return failed, scores
        else:
            print(score_file_path, "no ylt scores")
            exit(0)

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

    def process_yellowlabtools_scores(self, yellowlabtools_folder, non_duplicate_sites, output_file, failed=set([])):        
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