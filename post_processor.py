from SW_processor import SWPostProcessor
from PWA_processor import PWAPostProcessor
import tldextract
import sys
import os
from misc import DataAggregator, FileInteractor, URLInteractor
import tldextract
# import guesslang
import random
import operator

def pick_n_random(array, n):
    result = []
    while n > 0:
        choice = random.choice(array)
        result.append(choice)
        array.remove(choice)
        n -= 1
    
    return result

if __name__ == "__main__":
    check_resources = False
    scrape = False
    scrape_imports = False
    score = False
    count = False
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
    webapp_base_folders = ["/media/jesse/second_linux/non_zero_html/", "/media/jesse/second_linux/incorrect_resources/", "/media/jesse/second_linux/usb_webapps/"]
    sw_base_folder = os.getcwd() + "/SWs/last_sws_desktop_manifests/"
    whatruns_folders = ["/whatruns_latest/", "/whatruns_g/", "/whatruns_bb/"]
    wappalyzer_folder = os.getcwd() + "/wappalyzer/"

    imported_scripts_folder = os.getcwd() + "/SWs/imported_scripts/"

    url_interactor = URLInteractor()
    sw_post_processor = SWPostProcessor(sw_base_folder)
    pwa_post_processor = PWAPostProcessor(webapp_base_folders)
    file_interactor = FileInteractor()
    data_aggregator = DataAggregator()
    extract = tldextract.TLDExtract()
    
    lighthouse_csv_file = os.path.join(os.getcwd(), "CSVs", "final_lighthouse.csv")
    ylt_csv_file = os.path.join(os.getcwd(), "CSVs", "final_ylt.csv")
    features_csv_file = os.getcwd() + "/CSVs/final_features.csv"
    manifest_csv_file = os.getcwd() + "/CSVs/final_manifest.csv"
    sw_csv_file = os.getcwd() + "/CSVs/final_sw.csv"
    pwa_csv_file = os.getcwd() + "/CSVs/final_pwa.csv"

    valid_linked_sw_paths = file_interactor.load_object_exists("valid_linked_sw_paths")
    length = len(valid_linked_sw_paths)
    if scrape:
        sw_post_processor.get_missing_indexes(sw_base_folder)
        sw_post_processor.get_missing_manifests(sw_base_folder)
        valid_linked_sw_paths = sw_post_processor.set_valid_linked_sw_paths(sw_base_folder)

    no_content_resources = file_interactor.load_object_exists("no_content_sites")
    yes_index = file_interactor.load_object_exists("yes_index")
    print("no content", len(no_content_resources))
    print("yes content", len(yes_index))
    exit(0)

    
    usb_sw_linker = sw_post_processor.link_webapps_sws(os.getcwd() + "/local_vars/usb_sw_linker")

    webapp_base_folders = ["/media/jesse/second_linux/non_zero_html/", "/media/jesse/second_linux/incorrect_resources/", "/media/jesse/second_linux/usb_webapps/"]

    valid_linked_sw_sites = sw_post_processor.get_valid_linked_sw_sites(valid_linked_sw_paths)
    final_sites, final_sw_paths = sw_post_processor.get_final_sites(valid_linked_sw_sites)

    print(len(valid_linked_sw_paths), len(valid_linked_sw_sites), scrape_imports)

    correct_resources = file_interactor.load_object_exists("correct_resources") or set()
    if check_resources:
        correct_resources, no_content_resources = pwa_post_processor.get_correct_resources(final_sites, usb_sw_linker)
        print(len(correct_resources), "correct resources", len(no_content_resources), "no content resources")
        # correct_resources.update(no_content_resources)
        print(len(correct_resources), "correct resources", len(no_content_resources), "no content resources")
        file_interactor.save_object(correct_resources, "correct_resources")
        exit(0)

    if count:
        index_amount, manifest_amount = sw_post_processor.get_indexes_amount()
        print("Index amount", index_amount, "Manifest amount", manifest_amount, "PWAs amount", len(correct_resources))

    random_sites = file_interactor.load_object_exists("random_sites") or pick_n_random([dom + "." + valid_linked_sw_sites[dom] for dom \
                                                                                        in valid_linked_sw_sites], 30)
    print("Random sites", random_sites)

    # valid_linked_webapp_paths = pwa_post_processor.get_valid_linked_webapp_paths(valid_linked_sw_sites, usb_sw_linker, correct_resources)    
    # print("valid web apps len", len(valid_linked_webapp_paths), len(correct_resources))

    ylt_scores_folders = [os.getcwd() + "/Scores/yellowlabtools", "/media/jesse/second_linux/Scores/yellowlabtools", "/media/jesse/second_linux/Scores/yellowlabtools_vm/yellowlabtools_vm", os.getcwd() + "/Scores/yellowlabtools"]
    if os.path.exists(ylt_csv_file):
        ylt_sites = data_aggregator.get_col_csv(ylt_csv_file, "website", sep=";")
    else:
        ylt_sites = []

    lighthouse_scores_folders = ["/media/jesse/second_linux/Scores/lighthouse/", "/media/jesse/second_linux/Scores/lighthouse_vm/lighthouse/", os.getcwd() + "/Scores/lighthouse/"]
    if os.path.exists(lighthouse_csv_file):
        lighthouse_sites = data_aggregator.get_col_csv(lighthouse_csv_file, "website", sep=";")
    else:
        lighthouse_sites = []

    if scrape:
        for dom in valid_linked_sw_sites:
            if valid_linked_sw_sites[dom] != "":
                site = dom + "." + valid_linked_sw_sites[dom]
            else:
                site = dom
            if site not in ylt_sites and score:
                sw_post_processor.get_missing_ylt(site, ylt_sites, ylt_scores_folders)
            if site not in lighthouse_sites and score:
                sw_post_processor.get_missing_lighthouse(site, lighthouse_sites, lighthouse_scores_folders)

    if len(sw_post_processor.data_aggregator.json_manifest_loadfail):
        print("Loading manifests failed", sw_post_processor.data_aggregator.json_manifest_loadfail, len(sw_post_processor.data_aggregator.json_manifest_loadfail))

    if score:
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

    static_sw_paths = sw_post_processor.get_static_sw_paths(valid_linked_sw_sites)
    url_local_file_linker = sw_post_processor.file_interactor.load_object_exists("url_local_file_linker")

    if scrape_imports:
        sw_paths_urls, sw_paths_no_urls = sw_post_processor.filter_sw_importscripts(static_sw_paths)
        url_local_file_linker = sw_post_processor.sw_scrape_importscripts(sw_paths_urls)
        url_local_file_linker = sw_post_processor.get_all_imports_importsfolder(imported_scripts_folder, url_local_file_linker)
        file_interactor.save_object(url_local_file_linker, "url_local_file_linker")
        sw_post_processor.extract_sw_features_wrapper(sw_paths_urls, url_local_file_linker, final_sw_paths)
    else:
        url_local_file_linker = file_interactor.load_object_exists("url_local_file_linker")

    if not os.path.exists(sw_csv_file):
        sw_paths_urls, sw_paths_no_urls = sw_post_processor.filter_sw_importscripts(static_sw_paths)
        sw_post_processor.get_sw_results(final_sw_paths, sw_paths_urls, sw_csv_file)
    if not os.path.exists(pwa_csv_file):
        pwa_post_processor.get_webapp_results(correct_resources, pwa_csv_file)
    
    pwa_post_processor.get_webapp_results(correct_resources, pwa_csv_file)
    

    if not os.path.exists(manifest_csv_file) or not os.path.exists(features_csv_file):
        sw_post_processor.get_features_manifest_csvs(features_csv_file, manifest_csv_file, final_sw_paths)

    # import subprocess
    # import shutil
    # for sw in correct_resources:
    #     path = correct_resources[sw]
    #     temp_output_folder = "/home/jesse/Documents/temp_usb/b"
    #     subprocess.check_output("rm -rf " + temp_output_folder, shell=True)
    #     os.mkdir(temp_output_folder)
    #     # if not zipped:
    #     if not os.path.exists(path):
    #         continue
    #     shutil.move(path, temp_output_folder)
    #     try:
            
    #         subprocess.check_output("unzip -o '" + path + "' -d " + temp_output_folder, shell=True, stderr=subprocess.STDOUT)
    #         try:
    #             for subdir, _, files in os.walk(temp_output_folder):
    #                 for file in files:
    #                     with open(os.path.join(temp_output_folder, file), "r") as f:
    #                         if "chromeerror" in f.read():
    #                             print("Error chrome", file, sw, correct_resources[sw])
    #         except Exception as e1:
    #             print("read fail probably", e1, file)

    #     except Exception as e:
    #         print("unzipping failed", sw, e)

    total = file_interactor.load_object_exists("frameworks_total") or {}
    # total = data_aggregator.get_frameworks_whatruns([os.getcwd() + x for x in whatruns_folders], final_sw_paths.keys(), total)
    # exit(0)
    if not total or not len(total):
        total = data_aggregator.get_frameworks_wappalyzer(wappalyzer_folder, final_sw_paths.keys())
        total = data_aggregator.get_frameworks_whatruns([os.getcwd() + x for x in whatruns_folders], correct_resources.keys(), total)
        file_interactor.save_object(total, "frameworks_total")

    frameworks_blacklist = ["video", "twitter", "gallery", "infer", "captcha", "newrelic", "comscore", "varnish", "lightbox", "lazyload",\
                            "criteo", "ubuntu", "scorecardresearch", "iis", "windows server", "google plus", "comments and reviews",\
                            "addthis", "litespeed", "google adwords", "amazon ad system", "gravatar", "mediavine", "bing ads",\
                            "wp rocket", "message board", "jquery easing", "disqus", "hoverintent", "taboola", "swfobject"]
    i = 1
    while i != 21:
        if not total:
            break
        most_occurring = max(total.items(), key=operator.itemgetter(1))[0]       
        if True in [x.lower() in most_occurring.lower() for x in frameworks_blacklist]:
            del total[most_occurring]
            continue
        print("Frameworks most frequent", i, "&", most_occurring, "&", total[most_occurring])
        del total[most_occurring]
        i += 1