"""
The main post processor that orchestrates the other postprocessors (SW and PWA) and produces results based on their data
"""
from SW_processor import SWPostProcessor
from PWA_processor import PWAPostProcessor
import sys
import os
from misc import DataAggregator, FileInteractor, URLInteractor
import tldextract
import json
import random
import operator

def pick_n_random(array, n):
    """
    Pick n random item from array
    """
    result = []
    while n > 0:
        choice = random.choice(array)
        result.append(choice)
        array.remove(choice)
        n -= 1
    
    return result

def create_config_folders(config):
    """
    Creates config folders if these dont exist. if multiple folders in a single config item dont exist, create them as well
    """
    for folder in config:
        if "folder" in folder.lower():
            if not os.path.exists(os.path.join(os.getcwd(), config[folder])):
                print("creating", os.getcwd(), os.path.join(os.getcwd(), str(config[folder])))
                current_subdir = ""
                for subdir in config[folder].split("/"):
                    if not current_subdir:
                        current_subdir = subdir
                    else:
                        current_subdir = os.path.join(current_subdir, subdir)
                    if not os.path.exists(os.path.join(os.getcwd(), current_subdir)):
                        os.mkdir(os.path.join(os.getcwd(), current_subdir))

if __name__ == "__main__":
    url_interactor = URLInteractor()
    file_interactor = FileInteractor()
    data_aggregator = DataAggregator()
    extract = tldextract.TLDExtract()

    if len(sys.argv) == 2:
        if sys.argv[1] == "help" or sys.argv[1] == "--help" or sys.argv[1] == "--h":
            print("""
    Run the program with the following arguments:

    check resources: Filters the improper save all resources PWAs
    scrape: Scrapes the missing files (such as indexes and manifests)
    scrape imports: Scrape imports and additional imports if needed
    score: Score the found domains with audit tools
    count: Count the amount of index and manifest files
    all: set all of the above arguments
                  """)
            exit(0)
    # Set parameters of the current run based on arguments
    # Filters the improper save all resources PWAs
    check_resources = False
    # Scrapes the missing files (such as indexes and manifests)
    scrape = False
    # Scrape imports and additional imports if needed
    scrape_imports = False
    # Score the found domains with audit tools
    score = False
    # Count the amount of index and manifest files
    count = False
    # Set all arguments to true
    if len(sys.argv) == 2 and sys.argv[1] == "all":
        check_resources = True
        scrape = True
        scrape_imports = True
        score = True
        count = True
    else:
        if len(sys.argv) == 2 and sys.argv[1] == "scrape":
            scrape = True
        if len(sys.argv) == 3 and sys.argv[1] == "check" and sys.argv[2] == "resources":
            check_resources = True
        if "score" in sys.argv:
            score = True
        if len(sys.argv) == 3 and sys.argv[1] == "scrape" and sys.argv[2] == "imports":
            scrape_imports = True
        if len(sys.argv) == 2 and sys.argv[1] == "count":
            count = True
    print("args:\ncheck resources", check_resources, "\nscrape", scrape, "\nscrape imports", scrape_imports, "\nscore", score)

    config = json.load(open(os.path.join(os.getcwd(), "config.json")))
    create_config_folders(config)

    # Initialise folders for output
    webapp_base_folders = [os.path.join(os.getcwd(), config["PWAsFolder"])]
    sw_base_folder = os.path.join(os.getcwd(), config["SWsFolder"])
    whatruns_folders = [os.path.join(os.getcwd(), config["WhatRunsFolder"])]
    wappalyzer_folder = os.path.join(os.getcwd(), config["WappalyzerFolder"])
    ylt_scores_folders = [os.path.join(os.getcwd(), config["YellowLabToolsFolder"])]
    lighthouse_scores_folders = [os.path.join(os.getcwd(), config["LighthouseFolder"])]

    imported_scripts_folder = os.getcwd() + "/SWs/imported_scripts/"
    imported_scripts_folder = os.path.join(os.getcwd(), config["ImporedScriptsFolder"])

    sw_post_processor = SWPostProcessor(sw_base_folder)
    pwa_post_processor = PWAPostProcessor(webapp_base_folders)
    
    # Initialise CSV files
    lighthouse_csv_file = os.path.join(os.getcwd(), config["CSVFolder"], "final_lighthouse.csv")
    ylt_csv_file = os.path.join(os.getcwd(), config["CSVFolder"], "final_ylt.csv")
    features_csv_file = os.path.join(os.getcwd(), config["CSVFolder"], "final_features.csv")
    manifest_csv_file = os.path.join(os.getcwd(), config["CSVFolder"], "final_manifest.csv")
    sw_csv_file = os.path.join(os.getcwd(), config["CSVFolder"], "final_sw.csv")
    pwa_csv_file = os.path.join(os.getcwd(), config["CSVFolder"], "final_pwa.csv")

    # Initialise frameworks blacklist
    frameworks_blacklist = config["FrameworksBlacklist"]
    with open(wappalyzer_folder + "wappalyzer_template.csv", "r") as f:
        for l in f:
            for item in l.split(","):
                frameworks_blacklist.append(item.strip().strip('"'))
            break

    valid_linked_sw_paths = file_interactor.load_object_exists("valid_linked_sw_paths") or {}
    length = len(valid_linked_sw_paths)

    # Scrape missing files (indexes and manifest) in case a beautified SW is present
    if scrape:
        sw_post_processor.beautify_sws()
        sw_post_processor.get_missing_indexes()
        sw_post_processor.get_missing_manifests()
        valid_linked_sw_paths = sw_post_processor.set_valid_linked_sw_paths()

    if len(sw_post_processor.data_aggregator.json_manifest_loadfail):
        print("Loading manifests failed", sw_post_processor.data_aggregator.json_manifest_loadfail, len(sw_post_processor.data_aggregator.json_manifest_loadfail))

    no_content_resources = file_interactor.load_object_exists("no_content_sites") or {}
    yes_index = file_interactor.load_object_exists("yes_index") or {}
    print("no content", len(no_content_resources))
    print("yes content", len(yes_index))
    
    # Link PWA domains to SW domain
    usb_sw_linker = sw_post_processor.link_webapps_sws(os.getcwd() + "/local_vars/usb_sw_linker")

    # Get the linked SWs that have a linked manifest in their index page. Set the final sites based on the linked SWs
    multiple_domain_sites = config["ManualDomains"]
    domain_blacklist = config["DomainBlacklist"]
    valid_linked_sw_sites = sw_post_processor.get_valid_linked_sw_sites(valid_linked_sw_paths, multiple_domain_sites, domain_blacklist)
    final_sites, final_sw_paths = sw_post_processor.get_final_sites(valid_linked_sw_sites)

    print(len(valid_linked_sw_paths), len(valid_linked_sw_sites), scrape_imports)

    # Filter out the PWAs that were not downloaded properly by the save all resources tool
    correct_resources = file_interactor.load_object_exists("correct_resources") or {}
    if check_resources:
        correct_resources, no_content_resources = pwa_post_processor.get_correct_resources(final_sites, usb_sw_linker)
        print(len(correct_resources), "correct resources", len(no_content_resources), "no content resources")
        file_interactor.save_object(correct_resources, "correct_resources")

    # Show the amount of indexes found, as well as the amount of manfists. These are scraped based on the SWs domains
    if count:
        index_amount, manifest_amount = sw_post_processor.get_indexes_amount()
        print("Index amount", index_amount, "Manifest amount", manifest_amount, "PWAs amount", len(correct_resources))

    random_sites = file_interactor.load_object_exists("random_sites") or pick_n_random([dom + "." + valid_linked_sw_sites[dom] for dom \
                                                                                        in valid_linked_sw_sites], 30)
    print("Random sites", random_sites)

    # Get processed audit site
    if os.path.exists(ylt_csv_file):
        ylt_sites = data_aggregator.get_col_csv(ylt_csv_file, "website", sep=";")
    else:
        ylt_sites = []
    if os.path.exists(lighthouse_csv_file):
        lighthouse_sites = data_aggregator.get_col_csv(lighthouse_csv_file, "website", sep=";")
    else:
        lighthouse_sites = []

    # Score the web apps with the lighthouse and yellowlabtools audit tools
    if score:
        for dom in valid_linked_sw_sites:
            if valid_linked_sw_sites[dom] != "":
                site = dom + "." + valid_linked_sw_sites[dom]
            else:
                site = dom
            if site not in ylt_sites:
                sw_post_processor.get_missing_ylt(site, ylt_sites, ylt_scores_folders)
            if site not in lighthouse_sites:
                sw_post_processor.get_missing_lighthouse(site, lighthouse_sites, lighthouse_scores_folders)

        failed = set()
        for lighthouse_folder in lighthouse_scores_folders:
            failed = sw_post_processor.process_lighthouse_scores(lighthouse_folder, final_sites, lighthouse_csv_file, failed)
        for site in failed:
            sw_post_processor.run_lighthouse(site, lighthouse_scores_folders)

        failed = set()
        for ylt_folder in ylt_scores_folders:
            failed = sw_post_processor.process_yellowlabtools_scores(ylt_folder, final_sites, ylt_csv_file, failed)
        for site in failed:
            sw_post_processor.run_ylt(site, ylt_scores_folders)
    else:
        failed = set()
        if not os.path.exists(lighthouse_csv_file):
            for lighthouse_folder in lighthouse_scores_folders:
                failed = sw_post_processor.process_lighthouse_scores(lighthouse_folder, final_sites, lighthouse_csv_file, failed)
        if not os.path.exists(ylt_csv_file):
            for ylt_folder in ylt_scores_folders:
                failed = sw_post_processor.process_yellowlabtools_scores(ylt_folder, final_sites, ylt_csv_file, failed)

    # Get the SWs that do static "importScripts" imports
    static_sw_paths = sw_post_processor.get_static_sw_paths(valid_linked_sw_sites)
    url_local_file_linker = sw_post_processor.file_interactor.load_object_exists("url_local_file_linker")

    # Scrape imports when asked, else load it immediately
    if scrape_imports:
        sw_paths_urls, sw_paths_no_urls = sw_post_processor.filter_sw_importscripts(static_sw_paths)
        url_local_file_linker = sw_post_processor.sw_scrape_importscripts(sw_paths_urls, imported_scripts_folder)
        url_local_file_linker = sw_post_processor.get_all_imports_importsfolder(imported_scripts_folder, url_local_file_linker)
        file_interactor.save_object(url_local_file_linker, "url_local_file_linker")
        sw_post_processor.extract_sw_features_wrapper(sw_paths_urls, url_local_file_linker, final_sw_paths)
    else:
        url_local_file_linker = file_interactor.load_object_exists("url_local_file_linker")

    # Produce all results if the CSV files do not exist
    if not os.path.exists(sw_csv_file):
        sw_paths_urls, sw_paths_no_urls = sw_post_processor.filter_sw_importscripts(static_sw_paths)
        sw_post_processor.get_sw_results(final_sw_paths, sw_paths_urls, sw_csv_file)
    if not os.path.exists(pwa_csv_file):
        pwa_post_processor.get_webapp_results(correct_resources, pwa_csv_file)

    if not os.path.exists(manifest_csv_file) or not os.path.exists(features_csv_file):
        sw_post_processor.get_features_manifest_csvs(features_csv_file, manifest_csv_file, final_sw_paths)

    total = file_interactor.load_object_exists("frameworks_total") or {}

    if not total or not len(total):
        total = pwa_post_processor.get_frameworks_wappalyzer(wappalyzer_folder, frameworks_blacklist, final_sw_paths.keys())
        total = pwa_post_processor.get_frameworks_whatruns(whatruns_folders, correct_resources.keys(), frameworks_blacklist, total)
        file_interactor.save_object(total, "frameworks_total")

    i = 0
    while i != 20:
        if not total:
            break
        most_occurring = max(total.items(), key=operator.itemgetter(1))[0]       
        if True in [x.lower() in most_occurring.lower() for x in frameworks_blacklist]:
            del total[most_occurring]
            continue
        print("Frameworks most frequent", i + 1, "&", most_occurring, "&", total[most_occurring])
        del total[most_occurring]
        i += 1