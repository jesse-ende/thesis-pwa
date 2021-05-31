from __future__ import print_function  # for Python2
import multiprocessing
import os
import subprocess
from urllib import request
from urllib.request import urlopen, urlretrieve, quote
import jsbeautifier
import time
import gzip
from multiprocessing import Lock, Pool, Manager
from functools import partial
import json
import resource

# import guesslang

OKGREEN = '\033[92m'
FAIL = '\033[91m'
ENDC = '\033[0m'

def strip_urls(line, origin_urls=[]):
    http_start = 0
    urls = []
    while http_start := line.find("http", http_start):
        if http_start == -1:
            break
        http_end = line.find(line[http_start - 1], http_start)
        if line[http_start:http_end] not in urls and verify_url(line[http_start:http_end]) and line[http_start:http_end] not in origin_urls:
            urls.append(line[http_start:http_end])
        http_start += 1
    return urls

def strip_events(line):
    events = []
    event_start = 0
    listener = "addeventlistener"
    while event_start := line.find(listener, event_start):

        if event_start == -1:
            break
        event_start = event_start + len(listener) + 1

        if event_start + 1 <= len(line):
            event_end = line.find(line[event_start], event_start + 1)
        else:
            break
        if line[event_start:event_end] and event_start + 1 != event_end:
            events.append(line[event_start + 1:event_end])
        event_start += 1
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
            potential_events = strip_events(l)
            for event in potential_events:
                if event in events_check:
                    events.append(event)
            # print(OKGREEN, "event line", sub_l, "'start","end'", sub_l.split("addeventlistener"), ENDC)
                
    return events

def verify_url(url):
    if not url.startswith("http"):
        return False
    if not len(url.strip("http")) > 5:
        return False
    if url.endswith(".mp4") or url.endswith(".jpg"):
        return False
    return True

def get_url_path(rootdir, url):
    for website in os.listdir(rootdir):
        for subdir, _, files in os.walk(rootdir + website):
            for file in files:
                if file == url:
                    print("local file", file, "url", url)
                    return subdir + "/" + file
    return ""

def process_url(url, urls, rootdir, subdir, guess, invalid_urls, failed_attempts=0):
    all_url_texts = ""
    if not url.endswith(".js"):
        return ""
        # , failed_attempts
    
    url_replaced = f'{url.replace("/", "_")}' + "extra_js"
    url_file_path = subdir + "/" + url_replaced
    local_url_content_path = get_url_path(rootdir, url_replaced)

    if not os.path.exists(url_file_path) and local_url_content_path == "":
        # if local_url_content_path != "":
        # #  url in urls_content:
        #     print(OKGREEN, "url already opened", url, ENDC)
        #     total_output_content = open(local_url_content_path, "r").read()
        #     output_file = open(url_file_path, "w")
        #     output_file.write(total_output_content)
        #     output_file.close()

        if url in invalid_urls:
            return ""
            # , failed_attempts
        else:
            #  or os.path.exists(url_file_path)
            if not verify_url(url):
                return ""
                # , failed_attempts
            try:
                time.sleep(0.5)
                print(OKGREEN, "opening url", url, time.time(), ENDC)
                u = urlopen(url)
            except:
                invalid_urls.append(url)
                print(FAIL, "Could not open url", url, ENDC)
                return "failed opening url"
                # , failed_attempts
            # print(OKGREEN, "Successfully opened url", url, ENDC)
            total_output_content = ""
            try:
                decoded_content = u.read().decode('utf-8')
            except:
                print("decoding failed, trying unzipping")
                data = gzip.decompress(u.read())
                decoded_content = data.decode('utf-8')
            

            if not url.endswith(".js"):
                # guess = Guess()
                lock.acquire()
                if guess.language_name(decoded_content) != "JavaScript":
                    print(FAIL, "Url doesnt contain JS", url, ENDC)
                    # if url not in invalid_urls:
                    #     if len(invalid_urls) > 1000:
                    #         invalid_urls.append(url)
                    #         del invalid_urls[0]
                    lock.release()
                    return ""
                    # , failed_attempts
                lock.release()

            beautified_js = jsbeautifier.beautify(decoded_content.lower())
            for l in beautified_js.split("\n"):
                total_output_content += l + "\n"
                all_url_texts += l + "\n"

                if "http://" in l or "https://" in l:
                    new_urls = strip_urls(l, urls)
                    if new_urls != []:
                        temp_urls = []
                        for new_url in new_urls:
                            if new_url not in urls:
                                urls.append(new_url)
                        # print(OKGREEN, "new found urls", temp_urls, "urls", urls, ENDC)
                        # all_url_texts += process_urls(temp_urls, rootdir, subdir, guess, invalid_urls, failed_attempts)

        # print("Done reading url", url)
        total_output_content = total_output_content.strip()

        if total_output_content != "" and local_url_content_path == "":
        # url not in urls_content:
            with open(url_file_path, "w") as f:
            # output_file = open(url_file_path, "w")
                f.write(total_output_content)
            # urls_content[url] = url_file_path
            # output_file.close()

            # for new_url in new_urls:
                # if new_url not in urls:
                    # urls.append(new_url)
    else:
        if local_url_content_path != "":
            local_file_content = open(local_url_content_path, "r").read()
        else:
            local_file_content = open(url_file_path, "r").read()
        # if url not in urls_content:
        #     urls_content[url] = url_file_path

        for l in local_file_content.split("\n"):
            all_url_texts += l + "\n"

            if "http://" in l or "https://" in l:
                new_urls = strip_urls(l)
                if new_urls != []:
                    temp_urls = []
                    for new_url in new_urls:
                        if new_url not in urls and get_url_path(rootdir, f'{new_url.replace("/", "_")}' + "extra_js") == "":
                            urls.append(new_url)
                    # print(OKGREEN, "new found urls", temp_urls, ENDC)
                    # all_url_texts, failed_attempts += process_urls(temp_urls, rootdir, subdir, guess, invalid_urls, failed_attempts)
    return all_url_texts
    # , failed_attempts

def process_urls(urls, rootdir, subdir, guess, invalid_urls, failed_attempts=0):
    starttime = time.time()
    # print("start processing urls", urls, starttime)
    if failed_attempts == 5:
        print(FAIL, "too many failed attempts", ENDC)
        return ""
        # , failed_attempts

    all_url_texts = ""
    # if parallel:
    #     with Pool(4) as p:
    #         p.map(partial(process_url, urls=urls, subdir=subdir, urls_content=urls_content, guess=guess), urls)
    # else:
    for url in urls:
        # , failed_attempts
        url_texts = process_url(url, urls, rootdir, subdir, guess, invalid_urls, failed_attempts)
        if url_texts:
            if url_texts == "failed opening url":
                print(FAIL, "failed attempts", failed_attempts, ENDC)
                failed_attempts += 1
                if failed_attempts == 5:
                    return all_url_texts
                    # , failed_attempts
            else:
                all_url_texts += url_texts
        

    if time.time() - starttime > 5:
        print(OKGREEN, "done processing urls", time.time() - starttime, urls, ENDC)
    return all_url_texts
    # , failed_attempts

def get_js_urls(file, rootdir, subdir, guess, invalid_urls):
    file_urls = []
    print("processing urls", subdir, file)
    for l in open(subdir + "/" + file, "r"):
        if not "beautified" in file:
            # print("beautifying file", file)
            try:
                l = jsbeautifier.beautify(l.lower())
            except:
                print(FAIL, "beautifying went wrong", l)

        for sub_l in l.split("\n"):
            if "http://" in sub_l or "https://" in sub_l:
                # print("potentially new urls from origin", file, website, subdir, sub_l[:1000])
                new_urls = strip_urls(sub_l)
                # print("new urls", new_urls)
                for url in new_urls:
                    if url not in file_urls:
                        file_urls.append(url)
    if file_urls != []:

        # Recursively find and obtain all text of the urls found in the file and subsequent file_urls
        all_url_texts = process_urls(file_urls, rootdir, subdir, guess, invalid_urls)
        return all_url_texts

    return ""

def bytes_in_string(s):
    return len(s.encode('utf-8'))

def get_size_file_path(path):
    all_contents = ""
    for subdir, _, files in os.walk(path):
        for file in files:
            all_contents += open(subdir + "/" + file, "r").read()
    return bytes_in_string(all_contents)

def process_website(website, rootdir, websites_data, output_file_path, count):
    # if count == 5:
    #     return
    # sample_sites = ["www.pinterest.com", "www.oracle.com", "www.amazon.in", "www.aliexpress.com", "www.ebay.com", "soundcloud.com", "vk.com", "www.tumblr.com", "www.office.com", "twitter.com"]
    # sample_sites = ["www.aliexpress.com"]

    # if not website in sample_sites:
    #         return
    print("processing website", website)
    all_js = ""
    for subdir, _, files in os.walk(rootdir + website):
        starttime = time.time()
        for file in files:
            if file.endswith(".js") and "beautified" in file or "extra_js" in file:
                all_js += open(subdir + "/" + file, "r").read()
                # print("file", file)
    # print("total opening time", time.time() - starttime)

    temp_js_path = subdir + "/all_js.js"
    temp_js_file = open(temp_js_path, "w")
    temp_js_file.write(all_js)
    temp_js_file.close()

    starttime = time.time()
    # print("running lizard", temp_js_path)
    try:
        output = subprocess.check_output("lizard -l js " + temp_js_path , shell=True)
    except subprocess.CalledProcessError as exc:
        output = exc.output

    ccns = []
    for l in output.decode().split("\n"):
        # if avg:
        #     print("lizard", l)
        if "all_js" in l:
            if l.split()[1].isdigit():
                ccns.append(l.split()[1])
    
    output = subprocess.check_output("ohcount/bin/ohcount -i " + temp_js_path , shell=True)
    loc = 0
    for l in output.decode().split("\n"):
        if l.startswith("javascript"):
            loc += int(l.split()[1])
    os.remove(temp_js_path)

    bytes_all_js = bytes_in_string(all_js)
    events = get_file_events(all_js)
    output = subprocess.check_output("cd " + rootdir + website + " && ls", shell=True)
    SW_count = 0
    for l in output.decode().split("\n"):
        # print("sws count", l)
        if l and not l.startswith("https") and "beautified" not in l and "requests" not in l and "features.json" not in l and "manifest.json" not in l and "manifestError" not in l:
            SW_count += 1
    # print("events", events, "SWs", SW_count,  "size", bytes_all_js, "loc", loc)
   
    websites_data[website] = {"SWs": SW_count, "size": bytes_all_js, "events": events, "loc": loc, "ccns": ccns}
    # output_file = open(output_file_path, "w")
    # output_file.write(f'{website}, {SW_count}, {bytes_all_js}, "{events}", {loc}, "{ccns}"\n')
    # output_file.close()

    # count += 1


def get_all_js(website, rootdir):
    import guesslang
    guess = guesslang.Guess()

    # import random
    # time.sleep(random.randint(1,10))
    lock.acquire()
    import sys
    import objgraph
    print(resource.getrusage(resource.RUSAGE_SELF).ru_maxrss)
    print(objgraph.show_most_common_types())
    local_vars = list(locals().items())
    for var, obj in local_vars:
        print(var, sys.getsizeof(obj))
    print([(key, value) for key, value in globals().items()])
    print("rootdir", len(os.listdir(rootdir)))
    # print(website, "acq lock")

    # lang = guess.language_name("<DOCTYPE html>")
    # print(website, "made guess", lang)

    lock.release()
    print("Getting JS of", website, "...", time.time())

    # sample_sites = ["www.pinterest.com", "www.oracle.com", "www.amazon.in", "www.aliexpress.com", "www.ebay.com", "soundcloud.com", "vk.com", "www.tumblr.com", "www.office.com", "twitter.com"]
    # if not website in sample_sites:
    #     continue

    # print("get size file path", get_size_file_path(rootdir + website))
    # if get_size_file_path(rootdir + website) > 1 * 10**6:
    #     print(FAIL, "skipping", website, ENDC)
    #     continue
    # starttime = time.time()
    for subdir, _, files in os.walk(rootdir + website):
        for file in files:
            if "extra_js" in file or "all_js" in file or "beautified" not in file:
                continue
            extra_js_path = subdir + "/" + file.split(".")[0] + "extra_js.js"
            if not os.path.exists(extra_js_path):
                print("getting js for file", file)
                get_js_urls(file, rootdir, subdir, guess)
    del guess
    # print("first loop time", time.time() - starttime)

def populate_urls_content(rootdir, urls_content):
    for website in os.listdir(rootdir):
        for subdir, _, files in os.walk(rootdir + website):
            # print("populating urls content for", subdir)

            for file in files:
                file_content = ""
                with open(subdir + "/" + file, "r") as f:
                    for line in f:
                        file_content += line
                urls_content[file] = file_content

def init(l):
    global lock
    lock = l

def process_SWs():
    totaltime = time.time()
    csv_folder_path = os.getcwd() + "/CSVs/"
    website_data_file = csv_folder_path +  "SW.csv"
    progress_file_path = os.getcwd() + "/progress.txt"
    invalid_urls_file = os.getcwd() + "/invalid.txt"
    missing_manifest_file = os.getcwd() + "/missingManifest.txt"
    missing_requests_file = os.getcwd() + "/missingRequests.txt"
    missing_features_file = os.getcwd() + "/missingFeatures.txt"

    if not os.path.isdir(csv_folder_path):
        os.mkdir(csv_folder_path)

    if not os.path.exists(website_data_file):
        website_data_file = open(website_data_file, "w")
        website_data_file.write("name, SWs amount, size, events, loc, ccns\n")
        website_data_file.close()
    rootdir = os.getcwd() + "/first_sws/SWsbrowser/"

    websites_handled = []
    man = Manager()
    websites_data = man.dict()
    # urls_content = man.dict()
    invalid_urls = man.list([])

    # populate_urls_content(rootdir, urls_content)
    
    website_count, invalid_urls_count = 0, 0
    import threading
    l = multiprocessing.Lock()
    # guess = Guess()
    
    # pool = multiprocessing.Pool(processes=1, maxtasksperchild=10, initializer=init, initargs=(l,))
    if not os.path.exists(progress_file_path):
        open(progress_file_path, "w").close()
    if not os.path.exists(invalid_urls_file):
        open(invalid_urls_file, "w").close()
    if not os.path.exists(missing_manifest_file):
        open(missing_manifest_file, "w").close()
    if not os.path.exists(missing_requests_file):
        open(missing_requests_file, "w").close()
    if not os.path.exists(missing_features_file):
        open(missing_features_file, "w").close()
        
    import guesslang
    guess = guesslang.Guess()
    with open(progress_file_path, "r") as f:
        for l in f:
            websites_handled.append(l.strip())
    
    with open(invalid_urls_file, "r") as f:
        for l in f:
            invalid_urls.append(l.strip())

    for website in os.listdir(rootdir):
        if os.path.exists(rootdir + website + "/manifestError"):
            print(website, "doesnt have proper manifest")
            with open(missing_manifest_file, "a+") as f:
                f.write(website + "\n")
        if os.path.exists(rootdir + website + "/requests"):
            if os.path.getsize(rootdir + website + "/requests") == 0:
                print(website, "requests has size 0")
        # elif os.path.exists(rootdir + website + "/features.json"):
            # print(website, "has feautures.json")
            # if os.path.getsize(rootdir + website + "/features.json") == 0:
                # print(website, "features has size 0")

        # files_present = {"manifest": (True, True), "requests": (False, False), "features": (False, False)}
        # for subdir, _, files in os.walk(rootdir + website):
        #     for file in files:
        #         if "manifestError" in file:
        #             with open(missing_manifest_file, "a+"):
        #                 missing_manifest_file.write(website + "\n")
        #             files_present["manifest"][0] = False
        #             files_present["manifest"][1] = False
        #         elif "requests" in file:
        #             if get_size_file_path(subdir + "/" + file) == 0:
        #                 with open(missing_requests_file, "a+") as f:
        #                     f.write(website + "\n")
        #                 files_present["requests"][0] = True
        #             files_present["request"][1] = True
        #         elif "features" in file:
        #             if get_size_file_path(subdir + "/" + file) == 0:
        #                 with open(missing_features_file, "a+") as f:
        #                     f.write(website + "\n")
        #                 files_present["features"][0] = True
        #             files_present["features"][1] = True
        # for file_check in files_present:
        #     if files_present[file_check] == (False, False, _):
        #         with open(files_present[file_check][2], "a+") as f:
        #             f.write(website)
    # exit(0)
    websites_handled = []

    # pool.map(partial(get_all_js, rootdir=rootdir), os.listdir(rootdir)[0:1000])
    # for website in os.listdir(rootdir):
    #     # if website_count % 10 == 0:
    #         # with open(invalid_urls_file, "a+") as f:
    #         #     if len(invalid_urls) > 0:
    #         #         for i in range(invalid_urls_count, len(invalid_urls)):
    #         #             invalid_url = invalid_urls[i]
    #         #             f.write(invalid_url + "\n")
    #         #         invalid_urls_count += len(invalid_urls) - 1

    #     if website not in websites_handled:
    #         # print("websites handled", website, websites_handled)

    #         import sys
    #         import objgraph
    #         print(resource.getrusage(resource.RUSAGE_SELF).ru_maxrss)
    #         print(objgraph.show_most_common_types())
    #         local_vars = list(locals().items())
    #         for var, obj in local_vars:
    #             print(var, sys.getsizeof(obj))
    #         print([(key, value) for key, value in globals().items()])
    #         # print("rootdir", len(os.listdir(rootdir)))
    #         for subdir, _, files in os.walk(rootdir + website):
    #             for file in files:
    #                 if "extra_js" in file or "all_js" in file or "beautified" not in file:
    #                     continue
    #                 extra_js_path = subdir + "/" + file.split(".")[0] + "extra_js.js"
    #                 if not os.path.exists(extra_js_path):
    #                     print("getting js for file", file)
    #                     get_js_urls(file, rootdir, subdir, guess, invalid_urls)
    #         with open(progress_file_path, "a+") as f:
    #             f.write(website + "\n")
            
    #         website_count += 1

    # websites_processed = json.load(website_data_file)
    websites_processed = []
    # with open(website_data_file, "r") as f:
    #     for l in f:
    #         if l.split(",")[0] != "name":
    #             print("websites opened", l.split(",")[0])
    #             websites_processed.append(l.split(",")[0])

    # exit(1)

    for website in os.listdir(rootdir):
        if website not in websites_processed:
            print(website, "getting measurements")

            process_website(website, rootdir=rootdir, websites_data=websites_data, output_file_path=website_data_file, count=0)
            with open(website_data_file, "a+") as f:
                f.write(f'{website}, {websites_data[website]["SWs"]}, {websites_data[website]["size"]}, "{websites_data[website]["events"]}", {websites_data[website]["loc"]}, "{websites_data[website]["ccns"]}"\n')

    # website_data_file.close()
    # pool.map(partial(process_website, rootdir=rootdir, websites_data=websites_data, website_data_file=website_data_file, count=count), os.listdir(rootdir))
    # with Pool(4) as p:
    #     p.map(, )

        
        # sample = False

        # for sample_site in sample_sites:
        #     if sample_site in website:
        #         sample = True
        # if not sample:
        #     continue
        # count += 1
        # exit(0)
        # if count == 5:
            # break     

    with open(website_data_file.split(".csv")[0] + ".json", 'w') as fp:
        dump = json.dumps(dict(websites_data))
        print("json dump", dump)
        fp.write(dump)

    # website_data_file.close()
    # print("all websites data", websites_data, count)
    print("total time", time.time() - totaltime, "total websites analysed", len(websites_handled))
    # for website in websites_data:

# process_SWs()

def cleanup():
    rootdir = os.getcwd() + "/SWsbrowser/"
    for website in os.listdir(rootdir):
        for subdir, _, files in os.walk(rootdir + website):
            for file in files:
                if file.endswith("js") and "beautified" not in file:
                    if "extra_js" in file or "all_js" in file:
                        print("removing", subdir + "/" + file)
                        os.remove(subdir + "/" + file)

def filter_double_lines(path):
    lines = []
    with open(path, "r") as f:
        for l in f:
            if l not in lines:
                lines.append(l)
    print("lines length", len(lines))
    with open(path, "w") as f:
        for l in lines:
            f.write(l)

filter_double_lines(os.getcwd() + "/invalid.txt")