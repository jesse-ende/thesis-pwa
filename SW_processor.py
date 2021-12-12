# from post_processor import save_object, load_object
import os
import subprocess
import jsbeautifier
import time
import gzip
from multiprocessing import Lock, Pool, Manager, cpu_count, set_start_method
from functools import partial
import json
import resource

from numpy import append
from numpy.lib.function_base import diff
from PWA_processor import load_object, save_object
import tldextract
import re
import sys
import pickle
# from guesslang import Guess
import requests
import post_processor 
# import DataAggregator, FileInteractor, Output
import tqdm
from requests_futures.sessions import FuturesSession

import asyncio
import aiohttp

# import grequests

# pbar = None
# file_interactor = FileInteractor()
# output = Output()
# load_object = file_interactor.load_object
# save_object = file_interactor.save_object

class URLInteractor:
    def __init__(self) -> None:
        self.output = post_processor.Output()
        self.data_aggregator = post_processor.DataAggregator()
        self.print_green = self.output.print_green
        self.print_blue = self.output.print_blue
        self.print_fail = self.output.print_fail
        pass

    def replace_url(self, url):
        return url.replace("/", "_")
        if url.endswith(".js"):
            url = url.split(".js")[0]
        return url.replace("/", "_") + "extra_js.js"

    def inverse_replace_url(self, url):
        return url.replace("_", "/")

    def strip_urls(self, line, origin_urls=[]):
        http_start = 0
        urls = []
        http_start = line.find("http", http_start)
        while True:
            if http_start == -1:
                break
            http_end = line.find(line[http_start - 1], http_start)
            if line[http_start:http_end] not in urls and self.verify_url(line[http_start:http_end]) and line[http_start:http_end] not in origin_urls:
                urls.append(line[http_start:http_end])
            http_start = line.find("http", http_start + 1)

        return urls

    def verify_url(self, url):
        if not url.startswith("http"):
            return False
        if not len(url.strip("http")) > 5:
            return False
        if url.endswith(".mp4") or url.endswith(".jpg") or url.endswith(".png"):
            return False
        return True

    def get_url_path(self, rootdir, url):
        for website in os.listdir(rootdir):
            for subdir, _, files in os.walk(rootdir + website):
                for file in files:
                    if file == url:
                        print("local file", subdir, file, "url", url)
                        return subdir + "/" + file
        return ""
    
    def get_urls_from_string(self, content, rootdir="", urls=[], all_url_texts=""):
        for l in content.split("\n"):
            all_url_texts += l + "\n"

            if "http://" in l or "https://" in l or "importscripts" in l.lower():
                new_urls = self.strip_urls(l)
                if new_urls != []:
                    temp_urls = []
                    for new_url in new_urls:
                        if new_url not in urls and self.get_url_path(rootdir, self.replace_url(new_url)) == "":
                            urls.append(new_url)
        return urls

    def check_url_redirects(self, url, urls=[], handled_redirect_mapping={}):
        header = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
        'Accept-Encoding': 'none',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'keep-alive'}
        global pbar

        if not pbar:
            pbar = tqdm.tqdm(total=100000, mininterval=1)
        if url not in handled_redirect_mapping:
            # return handled_redirect_mapping[url]
            try:
                # session = requests.Session()
                # retry = Retry(connect=3, backoff_factor=0.5)
                # adapter = HTTPAdapter(max_retries=retry)
                # session.mount('http://', adapter)
                # session.mount('https://', adapter)

                # responses = session.get(url)
                responses = requests.get(url, headers=header, timeout=30)
                # if responses:
                    # for response in responses.history:
                        # print(response.url)
                redirects = [x.url for x in responses.history]
                # self.print_green(str(urls.index(url)) + " opened url " + url + " " + str(redirects))
            except Exception as e:
                pass
                # self.print_fail(str(urls.index(url)) + " Could not open url " + url)
                # print(e)
                # print("failed opening url", url)
            finally:
                redirects = [x.url for x in responses.history]
                append_line(os.getcwd() + "/1mredirects.txt", url + ";" + str(redirects) + "\n")
                pbar.update(1)
    
    def get_url_redirects_async(self, urls):
        header = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
        'Accept-Encoding': 'none',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'keep-alive'}
        urls = urls[0]
        session = FuturesSession(max_workers=os.cpu_count() * 2)
        all_redirects = []
        responses = [session.get(url, timeout=30, headers=header) for url in urls]
        # responses = (grequests.get(u, timeout=30, headers=header) for u in urls)
        # grequests.map(responses)
        zipped_responses = zip(urls, responses)
        for base_url, response in zipped_responses:
            try:
                result = response.result()
                redirects = [x.url for x in result.history]
                all_redirects.append((base_url, redirects))
                # if len(redirects) != 0:
                    # url_interactor.print_green(base_url + " " + str(redirects))
            except Exception as e:
                # print("Error occured", type(e).__name__)
                error_name = type(e).__name__
                # if error_name == "SSLError" or error_name == "ConnectionError" or error_name == "ConnectTimeout":
                all_redirects.append((base_url, []))
                # else:
                    # print("unknown error", base_url, type(e).__name__, e)
                # print(base_url, "failed")
                # print(e)
                pass
            # url_interactor.print_green(base_url + " " + result.url + " " + str(result.history))
        for base_url, redirects in all_redirects:
            append_line(os.getcwd() + "/1mredirects2.txt", base_url + ";" + str(redirects) + "\n")


    def process_url(self, url, urls, rootdir, subdir, guess, invalid_urls, website):
        extract = tldextract.TLDExtract()
        all_url_texts = ""
        if url == "http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-contex":
            return ""
            # , failed_attempts
        local_url_folder = os.getcwd() + "/last_sws/"

        url_replaced = self.replace_url(url)
        if len(url_replaced) > 255:
            print("url too long for file, shortening")
            url_replaced = url_replaced[0:255]
        url_file_path = subdir + "/" + url_replaced
        local_url_content_path = self.get_url_path(local_url_folder, url_replaced)

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
                    # , failed_attempts
                try:
                    time.sleep(0.5)
                    self.print_green("opening url " + url + " " + time.time())
                    u = urlopen(url)
                except:
                    invalid_urls.append(url)
                    self.print_fail("Could not open url" + " " + url)
                    return "failed opening url"
                    # , failed_attempts
                total_output_content = ""
                try:
                    decoded_content = u.read().decode('utf-8')
                except:
                    self.print_fail("Decoding failed trying unzipping")
                    try:
                        data = gzip.decompress(u.read())
                        decoded_content = data.decode('utf-8')
                    except:
                        self.print_fail("Unzipping failed")
                        return ""

                print("decoded content successfully")
                if not decoded_content:
                    return ""

                # if not url.endswith(".js"):
                    # guess = Guess()
                # lock.acquire()
                if len(decoded_content) > 10000000:
                    lang = guess.language_name(decoded_content[0:10000000])
                else:
                    lang = guess.language_name(decoded_content)
                if extract(url).suffix:
                    print("lang", lang, "urls split suffix", url.split(extract(url).suffix))
                
                if lang != "JavaScript" and extract(url).suffix and not ".js" in url.split(extract(url).suffix)[1:][0]:
                    
                    self.print_fail("Url doesnt contain JS " + " " + url + " " + lang + " " + url.split(extract(url).suffix)[1:][0])
                    no_js_url_path = os.getcwd() + "/no_js_urls.txt"
                    if not os.path.exists(no_js_url_path):
                        open(no_js_url_path, "w").close()
                    with open(no_js_url_path, "a+") as f:
                        f.write(website + ", " + url + "\n")
                    if url not in invalid_urls:
                        if len(invalid_urls) > 10000:
                            invalid_urls.append(url)
                            del invalid_urls[0]
                    # lock.release()
                    return ""
                    # , failed_attempts
                # lock.release()
                print("guess does contain js or small content")

                beautified_js = jsbeautifier.beautify(decoded_content.lower())
                print("beautified js")
                for l in beautified_js.split("\n"):
                    total_output_content += l + "\n"
                    all_url_texts += l + "\n"
                    
                    # if "http://" in l or "https://" in l:
                    new_urls = get_urls_from_string(l, rootdir=rootdir)
                    # new_urls = strip_urls(l, urls)
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
                with open(url_file_path, "w") as f:
                    f.write(total_output_content)
        else:
            if local_url_content_path != "":
                local_file_content = open(local_url_content_path, "r").read()
            else:
                local_file_content = open(url_file_path, "r").read()
            
            if guess.language_name(local_file_content) != "JavaScript":
                self.print_fail("local file doesnt contain JS " + local_url_content_path + " " + url_file_path)
                return ""
            else:
                self.print_green("local file contains js " +  local_url_content_path)

            urls = get_urls_from_string(local_file_content, rootdir=rootdir, urls=urls, all_url_texts=all_url_texts)
            
        return all_url_texts
        # , failed_attempts
    
    def get_content_multiple_urls(self, urls_path_combined, output_folder):
        file_linker = output_folder + "linker.txt"
        if not os.path.exists(file_linker):
            file_handle = open(file_linker, "w")
            file_handle.close()
        if not os.path.exists(output_folder):
            os.mkdir(output_folder)

        for (url, origin_path) in urls_path_combined:
            imported_files_path = origin_path + "imported_files.txt"
            if not os.path.exists(imported_files_path):
                file_handle = open(imported_files_path, "w")
                file_handle.close()
            output_file = self.replace_url(url)
            present = False
            for subdir, _, files in os.walk(output_folder):
                if present:
                    break
                for file in files:
                    file_content = open(os.path.join(subdir, file), "r").read()
                    if file == output_file:
                        present = True
                        break
            if present:
                if "importscripts(" in file_content.lower():
                    for l in file_content:
                        if "importscripts" in l.lower():
                            print(l)
                remove_line(imported_files_path, f"{output_file};{file}\n")
                append_line(imported_files_path, f"{output_file};{file}\n")
                continue
            content = self.get_content_url(url)
            if content:
                if "importscripts(" in content.lower():
                    for l in content:
                        if "importscripts" in l.lower():
                            print(l)
                content = jsbeautifier.beautify(content).strip()
                present = False
                for subdir, _, files in os.walk(output_folder):
                    if present:
                        break
                    for file in files:
                        file_content = open(os.path.join(subdir, file), "r").read()
                        if file_content == content:
                            present = True
                            break
                if not present:
                    with open(os.path.join(output_folder, output_file), "w") as f:
                        f.write(content)
                    # exit(0)
                else:
                    if output_file + ";" + file not in open(file_linker, "r").read():
                        append_line(file_linker, f"{output_file};{file}\n")
                remove_line(imported_files_path, f"{output_file};{file}\n")
                append_line(imported_files_path, f"{output_file};{file}\n")
            else:
                print(output_file, origin_path, "no content")

        print("get multiple urls", len(urls_path_combined))

    def get_content_url(self, url):
        header = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}
        try:
                # print("trying to open url", url)
            responses = requests.get(url, headers=header, timeout=60)
            responses.raise_for_status()
            content = responses.text
            return content
            # self.print_green("opening url 1 " + url + " ")
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
        
    def get_substring_urls(self, urls, substr="", suffix=""):
        total = []
        for url in urls:
            if substr in url and suffix in url:
                total.append(url)
        return total
    
    def process_urls(self, urls, rootdir, subdir, guess, invalid_urls, website, failed_attempts=0):
        starttime = time.time()
        # print("start processing urls", urls, starttime)
        if failed_attempts == 5:
            self.print_fail("Too many failed attempts")
            return ""
            # , failed_attempts

        all_url_texts = ""
        # if parallel:
        #     with Pool(4) as p:
        #         p.map(partial(process_url, urls=urls, subdir=subdir, urls_content=urls_content, guess=guess), urls)
        # else:
        print("urls", urls, len(urls))
        for url in urls:
            # , failed_attempts
            url_texts = self.process_url(url, urls, rootdir, subdir, guess, invalid_urls, website)
            if url_texts:
                if url_texts == "failed opening url":
                    self.print_fail("Failed attempts: " + failed_attempts)
                    failed_attempts += 1
                    if failed_attempts == 5:
                        return all_url_texts
                        # , failed_attempts
                else:
                    all_url_texts += url_texts
            

        if time.time() - starttime > 5:
            self.print_green("Done processing urls " + time.time() - starttime + " " + urls)
        return all_url_texts
        # , failed_attempts
    
    def get_js_urls(self, file, rootdir, subdir, guess, invalid_urls, website):
        # TODO: check wat er mis is
        file_urls = []
        print("processing urls", subdir, file)
        for l in open(subdir + "/" + file, "r"):
            if not "beautified" in file:
                # print("beautifying file", file)
                try:
                    l = jsbeautifier.beautify(l.lower())
                except:
                    self.print_fail("beautifying went wrong " + l)
            
            # TODO uncomment
            # URLInteractor.(l, rootdir=rootdir, urls=file_urls)
        
            # if "http://" in l or "https://" in l:
            #     # print("potentially new urls from origin", file, website, subdir, l[:1000])
            #     new_urls = strip_urls(l)
            #     # print("new urls", new_urls)
            #     for url in new_urls:
            #         if url not in file_urls:
            #             file_urls.append(url)

        if file_urls != []:
            # Recursively find and obtain all text of the urls found in the file and subsequent file_urls
            all_url_texts = self.process_urls(file_urls, rootdir, subdir, guess, invalid_urls, website)
            return all_url_texts

        return ""


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

class Filters:
    def __init__(self) -> None:
        pass

    def get_file_events(self, file_content):
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

def bytes_in_string(s):
    return len(s.encode('utf-8'))

def get_size_file_path(path):
    all_contents = ""
    for subdir, _, files in os.walk(path):
        for file in files:
            all_contents += open(subdir + "/" + file, "r").read()
    return bytes_in_string(all_contents)

def process_website(website, rootdir, websites_data, output_file_path, count):
    sys.setrecursionlimit(1000000)
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
            content = open(subdir + "/" + file, "r").read()
            language = guess.language_name(content)
            if language == "JavaScript" or language == "TypeScript" or os.stat(subdir + "/" + file).st_size < 1000:
                if "beautified" in file or "http" in file:
                    print("js / ts found or small file", file, os.stat(subdir + "/" + file).st_size)
                    for l in content.split("\n"):
                        if l not in all_js:
                            all_js += l + "\n"
            else:
                print("no js found", file)
            # if file.endswith(".js") and "beautified" in file or "extra_js" in file:
                # all_js += 
                # print("file", file)
    # print("total opening time", time.time() - starttime)
    # print("len all js", len(all_js))
    # exit(0)
    temp_js_path = subdir + "/all_js.js"
    temp_js_file = open(temp_js_path, "w")
    temp_js_file.write(all_js)
    temp_js_file.close()

    starttime = time.time()
    print("running lizard", temp_js_path, sys.getsizeof(all_js))
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
        if l and not l.startswith("http") and "beautified" not in l and "requests" not in l and "features.json" not in l and "manifest" not in l:
            SW_count += 1
    # print("events", events, "SWs", SW_count,  "size", bytes_all_js, "loc", loc)
   
    # websites_data[website] = {"SWs": SW_count, "size": bytes_all_js, "events": events, "loc": loc, "ccns": ccns}
    website_data_file = os.getcwd() + "/CSVs/" + "SW_sep_test.csv"
    with open(website_data_file, "a+") as f:
        f.write(f'{website};{SW_count};{bytes_all_js};"{events}";{loc};"{ccns}"\n')

    del all_js

    local_vars = list(locals().items())
    vars, all_objs = [], []
    for var, obj in local_vars:
        vars.append(sys.getsizeof(obj))
        all_objs.append(obj)
        # print("var sizes", var, sys.getsizeof(obj))
    print("biggest opbject", max(vars))
    print("vars", vars)
    # print("size all vars", all_objs[vars.index(max(vars))])
    # output_file = open(output_file_path, "w")
    # output_file.write(f'{website}, {SW_count}, {bytes_all_js}, "{events}", {loc}, "{ccns}"\n')
    # output_file.close()

    # count += 1


# def get_all_js(website, rootdir):
#     import guesslang
#     guess = guesslang.Guess()

#     # import random
#     # time.sleep(random.randint(1,10))

#     # lock.acquire()
#     # import sys
#     # import objgraph
#     # print(resource.getrusage(resource.RUSAGE_SELF).ru_maxrss)
#     # print(objgraph.show_most_common_types())
#     # local_vars = list(locals().items())
#     # for var, obj in local_vars:
#     #     print(var, sys.getsizeof(obj))
#     # print([(key, value) for key, value in globals().items()])
#     # print("rootdir", len(os.listdir(rootdir)))
#     # print(website, "acq lock")

#     # lang = guess.language_name("<DOCTYPE html>")
#     # print(website, "made guess", lang)

#     # lock.release()

#     print("Getting JS of", website, "...", time.time())

#     # sample_sites = ["www.pinterest.com", "www.oracle.com", "www.amazon.in", "www.aliexpress.com", "www.ebay.com", "soundcloud.com", "vk.com", "www.tumblr.com", "www.office.com", "twitter.com"]
#     # if not website in sample_sites:
#     #     continue

#     # print("get size file path", get_size_file_path(rootdir + website))
#     # if get_size_file_path(rootdir + website) > 1 * 10**6:
#     #     print(FAIL, "skipping", website, ENDC)
#     #     continue
#     # starttime = time.time()
#     for subdir, _, files in os.walk(rootdir + website):
#         for file in files:
#             if "extra_js" in file or "all_js" in file or "beautified" not in file:
#                 continue
#             extra_js_path = subdir + "/" + file.split(".")[0] + "extra_js.js"
#             if not os.path.exists(extra_js_path):
#                 print("getting js for file", file)
#                 get_js_urls(file, rootdir, subdir, guess)
#     del guess
    # print("first loop time", time.time() - starttime)

# def populate_urls_content(rootdir, urls_content):
#     for website in os.listdir(rootdir):
#         for subdir, _, files in os.walk(rootdir + website):
#             # print("populating urls content for", subdir)

#             for file in files:
#                 file_content = ""
#                 with open(subdir + "/" + file, "r") as f:
#                     for line in f:
#                         file_content += line
#                 urls_content[file] = file_content

def init(l):
    global lock
    lock = l

def process_SWs():
    totaltime = time.time()
    csv_folder_path = os.getcwd() + "/CSVs/"
    website_data_file = csv_folder_path + "SW_diff_2.csv"
    progress_file_path = os.getcwd() + "/progress.txt"
    invalid_urls_file = os.getcwd() + "/invalid.txt"
    missing_manifest_file = os.getcwd() + "/missingManifest.txt"
    missing_requests_file = os.getcwd() + "/missingRequests.txt"
    missing_features_file = os.getcwd() + "/missingFeatures.txt"

    if not os.path.isdir(csv_folder_path):
        os.mkdir(csv_folder_path)

    if not os.path.exists(website_data_file):
        website_data_file_path = open(website_data_file, "w")
        website_data_file_path.write("name;SWs amount;size;events;loc;ccns\n")
        website_data_file_path.close()

    rootdir = os.getcwd() + "/last_sws/"

    diff_file = os.getcwd() + "/diff_2.txt"

    man = Manager()
    websites_data = man.dict()
    # urls_content = man.dict()
    invalid_urls = man.list([])

    # populate_urls_content(rootdir, urls_content)
    
    website_count, invalid_urls_count = 0, 0
    import threading
    l = multiprocessing.Lock()
    init(l)
    # guess = Guess()
    
    # pool = multiprocessing.Pool(processes=1, maxtasksperchild=10, initializer=init, initargs=(l,))
    if not os.path.exists(website_data_file):
        open(website_data_file, "w").close()
    if not os.path.exists(progress_file_path):
        # 
        open(progress_file_path, "w").close()
    if not os.path.exists(invalid_urls_file):
        open(invalid_urls_file, "w").close()
    if not os.path.exists(missing_manifest_file):
        open(missing_manifest_file, "w").close()
    if not os.path.exists(missing_requests_file):
        open(missing_requests_file, "w").close()
    if not os.path.exists(missing_features_file):
        open(missing_features_file, "w").close()

    guess = guesslang.Guess()
    
    # with open(invalid_urls_file, "r") as f:
    #     for l in f:
    #         invalid_urls.append(l.strip())

    missing_manifest = []
    with open(missing_manifest_file, "r") as f:
        for l in f:
            missing_manifest.append(l.strip())
    
    diff_websites = []
    with open(diff_file, "r") as f:
    # for website in os.listdir(diff_dir):
        for l in f:
            diff_websites.append(l.strip())

    for website in os.listdir(rootdir):
        if os.path.exists(rootdir + website + "/manifestError") and website not in missing_manifest:
            # print(website, "doesnt have proper manifest")
            with open(missing_manifest_file, "a+") as f:
                f.write(website + "\n")
        # if os.path.exists(rootdir + website + "/requests"):
        #     if os.path.getsize(rootdir + website + "/requests") == 0:
                # print(website, "requests has size 0")
        # if os.path.exists(rootdir + website + "/requests"):
            # if os.path.getsize(rootdir + website + "/features.json") == 0:
                # print(website, "features has size 0")
            # else:
                # print(website, "features doesnt exist")

    websites_handled = []

    # with open(progress_file_path, "r") as f:
    #     for l in f:
    #         if l.strip() not in websites_handled:
    #             websites_handled.append(l.strip("\n"))
    print("websites handled len", len(websites_handled))
    # exit(0)
    # pool.map(partial(get_all_js, rootdir=rootdir), os.listdir(rootdir)[0:1000])

    not_handled = []
    cheaptickets = False
    for website in os.listdir(rootdir):

        # if "kuwaitjobs" not in website:
        #     continue
        # else:
        #     for subdir, _, files in os.walk(rootdir + website):
        #         for file in files:
        #             # print(website, "getting js for file", file)

        #             if "extra_js" in file or "all_js" in file or "beautified" not in file:
        #                 continue
        #             extra_js_path = subdir + "/" + file.split(".")[0] + "extra_js.js"
        #             if not os.path.exists(extra_js_path):
        #                 print(website, "getting js for file", file)
        #                 get_js_urls(file, rootdir, subdir, guess, invalid_urls, website)
            # exit(0)
        # if website_count % 10 == 0:
        #     with open(invalid_urls_file, "a+") as f:
        #         if len(invalid_urls) > 0:
        #             for i in range(invalid_urls_count, len(invalid_urls)):
        #                 invalid_url = invalid_urls[i]
        #                 f.write(invalid_url + "\n")
        #             invalid_urls_count += len(invalid_urls) - 1
        # if "smolnews" in website:
        #     print("smolnews", website in websites_handled)
        # if "cheaptickets.ch" in website:
        #     cheaptickets = True
        if website == "www.whalestreet.xyz":
            continue
        if website not in websites_handled:

            # print("getting js of", website, rootdir + website)
            # import sys
            # import objgraph
            # print(resource.getrusage(resource.RUSAGE_SELF).ru_maxrss)
            # print(objgraph.show_most_common_types())
            # local_vars = list(locals().items())
            # for var, obj in local_vars:
            #     print(var, sys.getsizeof(obj))
            # print([(key, value) for key, value in globals().items()])

            for subdir, _, files in os.walk(rootdir + website):
                for file in files:
                    # print(website, "getting js for file", file)

                    if "extra_js" in file or "all_js" in file or "beautified" not in file:
                        continue
                    extra_js_path = subdir + "/" + file.split(".")[0] + "extra_js.js"
                    if not os.path.exists(extra_js_path):
                        print(website, "getting js for file", file)
                        get_js_urls(file, rootdir, subdir, guess, invalid_urls, website)
            with open(progress_file_path, "a+") as f:
                f.write(website + "\n")

            website_count += 1
        
        else:
            not_handled.append(website)

    print("skipped", len(not_handled), "websites")
    not_handled = []
    exit(0)

    no_ccns = []
    websites_processed = []
    with open(website_data_file, "r") as f:
        for l in f:
            if l.split(",")[0] != "name":
                print("websites opened", l.split(";")[0])
                websites_processed.append(l.split(";")[0])
                if l.strip().split(";")[5] == "[]":
                    no_ccns.append(website)
    print(no_ccns, len(no_ccns))

    # print(data['ccns'].astype('int32'))
    # exit(1)

    for website in os.listdir(rootdir):
        if website not in websites_processed and website in diff_websites:
            print(website, "getting measurements")
            # or

            process_website(website, rootdir=rootdir, websites_data=websites_data, output_file_path=website_data_file, count=0)
            
            # with open(website_data_file, "a+") as f:
            #     f.write(f'{website}, {websites_data[website]["SWs"]}, {websites_data[website]["size"]}, "{websites_data[website]["events"]}", {websites_data[website]["loc"]}, "{websites_data[website]["ccns"]}"\n')
            #     websites_data = {}
            # exit(0)
        else:
            not_handled.append(website)
            print(website, "already processed")
        
    print("skipped processing", len(not_handled), "websites")

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

    # with open(website_data_file.split(".csv")[0] + ".json", 'w') as fp:
    #     dump = json.dumps(dict(websites_data))
    #     print("json dump", dump)
    #     fp.write(dump)

    # website_data_file.close()
    # print("all websites data", websites_data, count)
    print("total time", time.time() - totaltime, "total websites analysed", len(websites_handled))
    # for website in websites_data:


def check_files():
    rootdir = os.getcwd() + "/second_sws/"
    for website in os.listdir(rootdir):
        for subdir, _, files in os.walk(rootdir + website):
            for file in files:
                if "extra_js" in file and "manifest" in file:
                    print("found manifest", subdir + "/" + file)
# check_files()

def cleanup():
    rootdir = os.getcwd() + "/SWs/last_sws_desktop_manifests/"
    for website in os.listdir(rootdir):
        for subdir, _, files in os.walk(rootdir + website):
            for file in files:
                # if "manifest" not in file and "beautified" not in file and "features.json" not in file and "requests" not in file:
                if "imported_files.txt" in file:
                # if file.endswith("js") and "beautified" not in file:
                    # if "extra_js" in file or "all_js" in file:
                    print("removing", subdir + "/" + file)
                    os.remove(subdir + "/" + file)
            print()

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

# filter_double_lines(os.getcwd() + "/invalid.txt")

def replace_extra_js(path):
    content = ""
    with open(path, "r") as f:
        content = f.read()
    if path.endswith("extra_js"):
        new_path = path.split("extra_js")[0]
        if new_path.endswith(".js"):

            new_path = new_path.strip(".js") + "extra_js.js"
            print("content", len(content))
            with open(new_path, "w") as f:
                f.write(content)
            print("checking path", path)
            print("new_path", new_path)

            return new_path

    return ""

def replace_files_subdir(rootdir):
    for website in os.listdir(rootdir):
        for subdir, _, files in os.walk(rootdir + website):
            for file in files:
                if replace_extra_js(subdir + "/" + file) != "":
                    os.remove(subdir + "/" + file)

# replace_files_subdir(os.getcwd() + "/first_sws/SWsbrowser/")

def folders_to_txt(rootdir, output_file_path):
    with open(output_file_path, "a+") as f:
        for website in os.listdir(rootdir):
            f.write(website + "\n")

# folders_to_txt(os.getcwd() + "/last_sws/", os.getcwd() + "/last_sws.txt")

def get_urls_from_string(content, website):
    import urlextract
    from urlextract import URLExtract
    extractor = URLExtract()
    url_count = 0
    urls = set()
    startlen = 0
    pattern = r"A-Za-z0-9-._~!$&\'()\*\+,;=:@/\?"
    endings = [".css", ".html"]
    for l in content:
        temp = extractor.find_urls(l)
        if len(temp) != 0:
            # print(l)
            for url in temp:
                urls.add((url, False))
        if "importscripts(" in l.lower():
            start = l.lower().find("importscripts(")
            # print("importscripts line", l)
            startlen = len(urls)
            while start != -1:
                end = l.lower().find(")", start)
                urls_temp = [re.sub(pattern, "", x) for x in l.lower()[start + len("importscripts("):end-1].split(",")]
                # print("urlstemp", urls_temp)
                # urls_temp = [x.replace("';)(", "").replace('"', "") for x in l.lower()[start + len("importscripts("):end].split(",")]
                for url in urls_temp:
                    urls_ending = [url.endswith(ending) for ending in endings]
                    if True in urls_ending:
                        continue
                    if "http" not in url:
                        url = "https://" + website + "/" + url
                    if url[0] == "'":
                        url = url[1:len(url)]
                    if url[len(url) - 1] == "'":
                        url = url[0:len(url) - 1]
                    print("import url", url, l)
                    urls.add((url, True))
                start = l.lower().find("importscripts(", end)
        continue

        if "http" in l:
            urls_re = re.findall(r'(https?://\S+)', l)
            urls_re = re.findall(r'(https?://[^\s]+)', l)
            # urls_re = re.findall('https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+', l)
            if urls_re:
                print("urls re line", l, urls_re)
                # urls_re = [x.strip(",';").strip('"') for x in urls_re]
                urls_re = [re.sub(pattern, "", x) for x in urls_re]
                print("urls re line 2", l, urls_re)
                for url in urls_re:
                    if '"' in url:
                        url = url.split('"')[0]
                    urls_ending = [url.endswith(ending) for ending in endings]
                    if True in urls_ending:
                        continue
                    print("url re before", url)
                    # if "http" not in url:
                    #     url = "https://" + website + "/" + url
                    if url and url[0] == "'":
                        url = url[1:len(url)]
                    if url and url[len(url) - 1] == "'":
                        url = url[0:len(url) - 1]
                    print("url re", url)
                    urls.add(url)
            url_count += len(urls)
    # if urls != set():
    #     print("all urls", urls)
    return urls

def get_local_content(rootdirs, filename):
    for rootdir in rootdirs:
        for subfolder in os.listdir(rootdir):
            for subdir, _, files in os.walk(rootdir + subfolder):
                for file in files:
                    # if subfolder == "www.ineventos.com":
                    #     print(file, "\n", filename, file == filename)
                    if file == filename or len(filename) > 255 and file in filename:
                        content = ""
                        with open(subdir + "/" + file, "r") as f:
                            content = f.read()
                        return content
    return ""

def read_line_seperated_file(filepath):
    res = []
    with open(filepath, "r") as f:
        for l in f:
            res.append(l.strip())
    return res


def append_line(filepath, line):
    with open(filepath, "a+") as f:
        f.write(line)

def remove_line(filepath, line):
    read_file_handle = open(filepath, "r")
    content = read_file_handle.read()
    prev_content_length = len(content)
    while line in content:
        content = content.replace(line, "")

    if prev_content_length != len(content):
        with open (filepath, "w") as f:
            f.write(content.strip() + "\n")

def remove_line_substring(filepath, present_strings):
    read_file_handle = open(filepath, "r")
    content = read_file_handle.read()
    removed = False
    for line in content.split("\n"):
        valid = True
        for present_string in present_strings:
            if present_string not in line:
                valid = False
                break
        if valid:
            removed = True
            remove_line(filepath, line)
            content = read_file_handle.read()
    # if not removed:
        # print("didnt remove line", line, "present strings", present_strings)

def scrape_website_js(website, rootdirs, invalid_urls, handled_sites):
    print(OKBLUE, "scraping", website, len(handled_sites), ENDC)
    invalid_urls_file = os.getcwd() + "/invalid.txt"
    accumulated_content = ""
    guess = guesslang.Guess()

    header = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
       'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
       'Accept-Encoding': 'none',
       'Accept-Language': 'en-US,en;q=0.8',
       'Connection': 'keep-alive'}
    if website in handled_sites:
        print(website, "already handled")
        return
    for subdir, _, files in os.walk(rootdirs[0] + website):

        for file in files:
            if "beautified" in file:
                print(website, file)
                urls = []
                with open(subdir + "/" + file, "r") as f:
                    accumulated_content += f.read() + "\n"
                    urls = get_urls_from_string(accumulated_content.split("\n"), website)

                new_urls = set()
                for (url, importScript) in urls:
                    if url in invalid_urls:
                        # print(FAIL, "invalid url", url, ENDC)
                        continue
                    # print("handling url", url)
                    content = get_local_content(rootdirs, replace_url(url).replace("'", "").strip())
                    save_locally = False
                    if content == "":
                        try:
                            time.sleep(0.5)
                            if not url.startswith("https://"):
                                url = "https://" + url
                            response = requests.get(url, timeout=60, headers=header)
                            content = response.text
                        except Exception as e:
                            invalid_urls.add(url)
                            append_line(invalid_urls_file, url)
                            # print("opening url", url, "failed")
                            # print(e)
                        # try:
                        #     content = u.read().decode('utf-8')
                        # except:
                        #     # print(FAIL, "decoding failed, trying unzipping", ENDC)
                        #     try:
                        #         data = gzip.decompress(u.read())
                        #         content = data.decode('utf-8')
                        #     except:
                        #         print(FAIL, "unzipping failed", url, ENDC)

                        # print("opened url succesfully", url, len(content))
                        if len(content) > 10000000:
                            lang = guess.language_name(content[0:10000000])
                        else:
                            lang = guess.language_name(content)

                        if importScript or not importScript and lang == "JavaScript":
                            if len(content) != 0 and content not in accumulated_content:
                                save_locally = True
                            # elif len(content) != 0 and content in accumulated_content:
                                # print("already in content", url)
                    else:
                        # print("local file", url)
                        if len(content) != 0 and content not in accumulated_content:
                            save_locally = True
                        # elif len(content) != 0 and content in accumulated_content:
                            # print("already in content", url)

                        # print("found js", content)
                    if save_locally:
                        content = jsbeautifier.beautify(content)
                        print(OKGREEN, "saving content", url, len(content), ENDC)
                        local_path = subdir + "/" + replace_url(url).replace("'", "")
                        if len(local_path) > 255:
                            local_path = local_path[:255]

                        if not os.path.exists(local_path):
                            f = open(local_path, "w")
                            f.close()
                        with open(local_path, "w") as f:
                            f.write(content)
                        
                        accumulated_content += content + "\n"

                    # print("content len", len(content), content in accumulated_content, importScript)
                    if len(content) != 0:
                        # print(OKGREEN, "found non 0 content", len(content), website, content in accumulated_content, ENDC)

                        temp_urls = get_urls_from_string(content, website)
                        for (temp_url, temp_import_script) in temp_urls:
                            if temp_url[0] == "'":
                                temp_url = temp_url[1:len(temp_url)]
                            if temp_url[len(temp_url) - 1] == "'":
                                temp_url = temp_url[0:len(temp_url) - 1]

                            urls.add((temp_url, temp_import_script))
    handled_sites.add(website)
    append_line(handled_sites_file, website + "\n")
    return

if __name__== "__main__":
    session = FuturesSession(max_workers=50)
    header = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
        'Accept-Encoding': 'none',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'keep-alive'}
    extract = tldextract.TLDExtract()
    file_interactor = post_processor.FileInteractor()
    sw_post_processor = post_processor.SWPostProcessor()
    data_aggregator = post_processor.DataAggregator()
    redirect_processing = False

    if len(sys.argv) == 2 and sys.argv[1] == "redirect":
        redirect_processing = True

    all_redirect_errors = file_interactor.load_object_exists("all_redirect_errors")
    if not all_redirect_errors:
        all_redirect_errors = {}
    print(all_redirect_errors)
    
    async def get_redirect_async(url, session):
        redirects, redirects2 = [], []
        try:
            # url = url[0]
            async with session.get(url=url, allow_redirects=True, timeout=30) as resp:
                redirects = set([str(x.url) for x in resp.history])
                redirects.add(str(resp.url))
                redirects = list(redirects)
        except Exception as e:
            if type(e).__name__ not in all_redirect_errors:
                if type(e).__name__ not in all_redirect_errors:
                    all_redirect_errors[type(e).__name__] = [url]
                else:
                    all_redirect_errors[type(e).__name__].append(url)
                file_interactor.save_object(all_redirect_errors, "all_redirect_errors")
            try:
                if url.startswith("https"):
                    url = url.strip("https")
                    url = "http" + url
                async with session.get(url=url, allow_redirects=True, timeout=30) as resp:
                    redirects = set([str(x.url) for x in resp.history])
                    redirects.add(str(resp.url))
                    redirects = list(redirects)
                return (url, redirects)
            except Exception as e2:
                pass
            pass
        return (url, redirects)

    async def url_wrapper_async(urls, unknown_redirects=[], unknown_url="", output_file=os.getcwd() + "/1mredirects.txt"):
        sem = asyncio.Semaphore(100)
        async with sem:
            async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=False), trust_env=True, headers=header) as session:
                redirects = await asyncio.gather(*[get_redirect_async(url, session) for url in urls])
                if unknown_url:
                    print(redirects, unknown_url, unknown_redirects)
                    overlap = set(redirects[0][1]).intersection(set(unknown_redirects))
                    final_redirects = redirects[0][1]
                    if overlap or unknown_url in final_redirects:
                        if unknown_url not in final_redirects:
                            final_redirects.append(unknown_url)
                        append_line(output_file, urls[0] + ";" + str(final_redirects) + "\n")
                        print("overlap", overlap, redirects)
                        return overlap
                return redirects

    set_start_method("forkserver", force=True)

    # file_interactor.combine_file_contents([os.getcwd() + "/1mredirects.txt", os.getcwd() + "/1mredirects2.txt"])
    # exit(0)
    
    usb_sites = file_interactor.load_object_exists("usb_sites")
    usb_domains_suffix = file_interactor.load_object_exists("usb_domains_suffix") or {}
    if not usb_sites or not usb_domains_suffix or len(usb_domains_suffix) == 0:
        usb_sites = set()
        usb_domains_suffix = {}
        with open(os.getcwd() + "/usb_contents.txt", "r") as f:
            for l in f:
                if l:
                    site = data_aggregator.string_usb_to_csv(l.strip())
                    usb_sites.add("https://" + site)
                    ext = extract(site)
                    if ext.domain not in usb_domains_suffix:
                        usb_domains_suffix[ext.domain] = [ext.suffix]
                    else:
                        if ext.suffix not in usb_domains_suffix[ext.domain]:
                            usb_domains_suffix[ext.domain].append(ext.suffix)
        file_interactor.save_object(usb_sites, "usb_sites")
        file_interactor.save_object(usb_domains_suffix, "usb_domains_suffix")

    pwa_redirects = file_interactor.load_object_exists("pwa_redirects")
    pwa_base_redirect_tuples = set()
    if not pwa_redirects:
        pwa_redirects = []
    (pwa_redirects_sites, pwa_redirects_need_handling) = (file_interactor.load_object_exists("pwa_redirects_sites"), set()) or (set(), set())
    if not pwa_redirects_sites:
        pwa_redirects_sites = set()
    for (site, redirects) in pwa_redirects:
        pwa_redirects_sites.add(site)
        for redirect in redirects:
            if (site, redirect) not in pwa_base_redirect_tuples:
                pwa_base_redirect_tuples.add((site, redirect))
        # for redirect in redirects:
            # if "http:" in redirect:
                # print("pwa redirects", site, redirects)
    for site in usb_sites:
        if data_aggregator.string_usb_to_csv(site) not in pwa_redirects_sites:
            pwa_redirects_need_handling.add(site)
    print("len pwa need handling", len(pwa_redirects_need_handling), type(pwa_redirects_need_handling) == 'class set')

    if type(pwa_redirects_need_handling) == type(set()):
        pwa_redirects_need_handling = list(pwa_redirects_need_handling)

    sw_domains_suffix = file_interactor.load_object_exists("sw_domains_suffix") or {}
    if len(sw_domains_suffix) == 0:
        prev_subfolder = None
        for subfolder, _, _ in os.walk(os.getcwd() + "/SWs/last_sws_desktop_manifests/"):
            if subfolder != prev_subfolder:
                splitted = subfolder.split("/last_sws_desktop_manifests/")[1]
                ext = extract(splitted)

                if ext.domain not in sw_domains_suffix:
                    sw_domains_suffix[ext.domain] = [ext.suffix]
                else:
                    if ext.suffix not in sw_domains_suffix[ext.domain]:
                        sw_domains_suffix[ext.domain].append(ext.suffix)
                prev_subfolder = subfolder
        file_interactor.save_object(sw_domains_suffix, "sw_domains_suffix")

    print("len sws domain", len(sw_domains_suffix), "len usb domain", len(usb_domains_suffix))
    set_sws_domains_suffix = set(sw_domains_suffix)
    set_usb_domains_suffix = set(usb_domains_suffix)

    set_sws_copy = set_sws_domains_suffix.copy()
    set_usb_copy = set_usb_domains_suffix.copy()

    set_sws_domains_suffix.difference_update(set_usb_domains_suffix)
    set_usb_domains_suffix.difference_update(set_sws_copy)

    if len(set_usb_copy) - len(set_usb_domains_suffix) < len(set_sws_copy) - len(set_sws_domains_suffix):
        smallest_set_domains = set_usb_copy.copy()
        smallest_set_domains.difference_update(set_usb_domains_suffix)
    else:
        smallest_set_domains = set_sws_copy.copy()
        smallest_set_domains.difference_update(set_sws_domains_suffix)

    print(len(smallest_set_domains), len(set_usb_domains_suffix), len(set_usb_copy), len(set_usb_copy) - len(set_usb_domains_suffix))
    print("len update sws set", len(set_sws_domains_suffix), "len update usb set", set_usb_domains_suffix)


    m1_domain_redirects = file_interactor.load_object_exists("m1_domain_redirects") or {}

    if len(m1_domain_redirects) == 0:
        with open(os.getcwd() + "/1mredirects.txt", "r") as f:
            for l in f:
                l = l.strip()
                if not l:
                    continue
                raw_site, raw_domain_redirects = post_processor.DataAggregator.get_list_comma_seperated_line(l)
                domain_redirects = []
                for domain_redirect in raw_domain_redirects:
                    if domain_redirect:
                        domain_redirects.append(domain_redirect)
                if len(domain_redirects) > 0:
                    site = extract(raw_site).domain + "." + extract(raw_site).suffix
                    if site not in m1_domain_redirects:
                        m1_domain_redirects[site] = set(domain_redirects)
                    else:
                        for redirect in domain_redirects:
                            m1_domain_redirects[site].add(redirect)

        file_interactor.save_object(m1_domain_redirects, "m1_domain_redirects")

    m1_domain_redirects_extracts = {}
    for site in m1_domain_redirects:
        ext = extract(site)
        if ext.domain in m1_domain_redirects_extracts:
            m1_domain_redirects_extracts[ext.domain].append(ext.suffix)
        else:
            m1_domain_redirects_extracts[ext.domain] = [ext.suffix]
    file_interactor.save_object(m1_domain_redirects_extracts, "m1_domain_redirects_extracts")
    sw_site_domain_redirects = file_interactor.load_object_exists("sw_site_domain_redirects") or {}
    
    # domains_overlap_redirects = set()
    # handled = set()
    # length = len(m1_domain_redirects)
    # for site in m1_domain_redirects:
    #     print(len(handled) / length)
    #     redirects_set = set(m1_domain_redirects[site])
    #     if site in handled:
    #         continue
    #     for site2 in m1_domain_redirects:
    #         if site != site2:
    #             if (site, site2) in domains_overlap_redirects or (site2, site) in domains_overlap_redirects:
    #                 continue
    #             overlap = redirects_set.intersection(set(m1_domain_redirects[site2]))
    #             if "failed opening url" not in overlap:
    #                 if len(overlap) > 0:
    #                     print(site, site2, len(overlap), overlap)
    #                     domains_overlap_redirects.add((site, site2))
        
    #     handled.add(site)

    #     file_interactor.save_object(domains_overlap_redirects, "domains_overlap_redirects")
    #     file_interactor.save_object(handled, "handled")

    # with open(os.getcwd() + "/1mredirects.txt", "r") as f:
    #     for l in f:
    #         l = l.strip()
    #         raw_site, raw_domain_redirects = post_processor.DataAggregator.get_list_comma_seperated_line(l)

    usb_domains_suffix_redirects = file_interactor.load_object_exists("usb_domains_suffix_redirects")
    if len(usb_domains_suffix_redirects) == 0:
        for domain in set_usb_domains_suffix:
            if len(usb_domains_suffix[domain]) != 1:
                highest_suffix = sw_post_processor.get_highest_suffix(domain, usb_domains_suffix[domain])
                if highest_suffix:
                    usb_domains_suffix[domain] = [highest_suffix]
                else:
                    continue
            else:
                highest_suffix = usb_domains_suffix[domain][0]

            if domain in usb_domains_suffix_redirects:
                continue

            if domain + "." + highest_suffix in m1_domain_redirects:
                if "failed opening url" not in m1_domain_redirects[domain + "." + highest_suffix]:
                    usb_domains_suffix_redirects[domain + "." + highest_suffix] = m1_domain_redirects[domain + "." + highest_suffix]
            else:
                for m1_domain in m1_domain_redirects:
                    if "failed opening url" not in m1_domain_redirects[m1_domain]:
                        for redirect in m1_domain_redirects[m1_domain]:
                            if domain + "." + highest_suffix in redirect:
                                if domain + "." + highest_suffix in usb_domains_suffix_redirects:
                                    for redirect in m1_domain_redirects[m1_domain]:
                                        usb_domains_suffix_redirects[m1_domain + "." + highest_suffix].add(redirect)
                                    break
                                else:
                                    usb_domains_suffix_redirects[m1_domain + "." + highest_suffix] = m1_domain_redirects[m1_domain]

    sw_domains_suffix_redirects = file_interactor.load_object_exists("sw_domains_suffix_redirects")
    print("usb_domains_suffix_redirects", len(usb_domains_suffix_redirects))

    test_domain = "dpgmedia"
    for domain in sw_domains_suffix:
        if test_domain in domain:
            highest_suffix = sw_post_processor.get_highest_suffix(domain, sw_domains_suffix[domain])
            print(test_domain, "test domain", domain, sw_domains_suffix[domain], highest_suffix)

    for domain in m1_domain_redirects:
        if test_domain in domain:
            print(test_domain, "m1 test domain", domain, m1_domain_redirects[domain])
            highest_suffix = sw_post_processor.get_highest_suffix(domain, m1_domain_redirects[domain])
            print("highest suffix", highest_suffix)
    # exit(0)
    # sw_domains_suffix_redirects = {}

    if len(sw_domains_suffix_redirects) == 0:
        for domain in sw_domains_suffix:
            if len(sw_domains_suffix[domain]) != 1:
                highest_suffix = sw_post_processor.get_highest_suffix(domain, sw_domains_suffix[domain])
                if highest_suffix:
                    sw_domains_suffix[domain] = [highest_suffix]
                else:
                    continue
            else:
                highest_suffix = sw_domains_suffix[domain][0]

            if domain in sw_domains_suffix_redirects or not highest_suffix or highest_suffix == "":
                continue

            if domain + "." + highest_suffix in m1_domain_redirects:
                if "iol" in domain:
                    print("iol in sw domain", domain, "highest suffix", highest_suffix, "m1 domain", domain + "." + highest_suffix, "redirects", m1_domain_redirects[domain + "." + highest_suffix])
                if "failed opening url" not in m1_domain_redirects[domain + "." + highest_suffix]:
                    sw_domains_suffix_redirects[domain + "." + highest_suffix] = m1_domain_redirects[domain + "." + highest_suffix]
            else:
                for m1_domain in m1_domain_redirects:
                    if not m1_domain:
                        continue
                    if m1_domain == "":
                        continue
                    if "failed opening url" in m1_domain_redirects[m1_domain]:
                        m1_domain_redirects[m1_domain].remove("failed opening url")
                    if len(m1_domain_redirects[m1_domain]) == 0:
                        continue
                    for redirect in m1_domain_redirects[m1_domain]:
                        if domain + "." + highest_suffix in redirect:
                            if domain + "." + highest_suffix in sw_domains_suffix_redirects:

                                if "iol" in m1_domain:
                                    print("iol in sw domain", domain, "highest suffix", highest_suffix, "m1 domain", m1_domain, "redirect", redirect)
                                for redirect in m1_domain_redirects[m1_domain]:
                                    sw_domains_suffix_redirects[m1_domain + "." + highest_suffix].add(redirect)
                                break
                            else:
                                if "iol" in m1_domain:
                                    print("iol in sw domain", domain, "highest suffix", highest_suffix, "m1 domain", m1_domain, "redirect", redirect)
                                sw_domains_suffix_redirects[m1_domain + "." + highest_suffix] = m1_domain_redirects[m1_domain]

    print("sw_domains_suffix_redirects", len(sw_domains_suffix_redirects))
    # sw_domains_suffix_redirects = file_interactor.load_object_exists("sw_domains_suffix_redirects")

    for usb_site in usb_domains_suffix_redirects:
        printed = False
        for sw_site in sw_domains_suffix_redirects:
            # print(usb_domains_suffix_redirects[usb_site], sw_domains_suffix_redirects[sw_site])
            overlap = usb_domains_suffix_redirects[usb_site].intersection(sw_domains_suffix_redirects[sw_site])
            if overlap and not printed:
                print("overlap", usb_site, "sw site", sw_site, "overlap", overlap)
                # printed = True

    file_interactor.save_object(usb_domains_suffix_redirects, "usb_domains_suffix_redirects")
    file_interactor.save_object(sw_domains_suffix_redirects, "sw_domains_suffix_redirects")
    print("sw_domains_suffix_redirects", len(sw_domains_suffix_redirects))
    exit(0)
    if len(sw_site_domain_redirects) > 0:
        save_object(sw_site_domain_redirects, "sw_site_domain_redirects")

    # TODO: check of missende sites (dus na diff update) te vinden zijn in redirects van elkaar. Desnoods nog filteren met extract domain en suffix, ook per redirect
    for domain in set_usb_domains_suffix:
        print("hanlding usb domain", domain)
        if not domain:
            continue
        if len(usb_domains_suffix[domain]) == 1:
            if usb_domains_suffix[domain][0]:
                for line in post_processor.FileInteractor.get_lines_from_file(os.getcwd() + "/1mredirects.txt", domain + "." + usb_domains_suffix[domain][0]):
                    raw_site, raw_domain_redirects = post_processor.DataAggregator.get_list_comma_seperated_line(line)
                    domain_redirects = []
                    for domain_redirect in raw_domain_redirects:
                        if domain_redirect:
                            domain_redirects.append(domain_redirect)
                    if len(domain_redirects) > 0:
                        site = extract(raw_site).domain + "." + extract(raw_site).suffix
                        print("domain redirects", domain, usb_domains_suffix[domain], domain_redirects, site)

                        for (site2, domain_redirects2) in sw_site_domain_redirects:
                            overlap = set(domain_redirects).intersection(domain_redirects2)
                            if len(overlap) > 0:
                                print("overlap", overlap)
                                exit(0)
                        

        else:
            print("too many suffixes usb domain", domain, usb_domains_suffix[domain])
    exit(0)

    handled = file_interactor.load_object_exists("handled") if file_interactor.load_object_exists("handled") else []
    redirects = file_interactor.load_object_exists("redirects") if file_interactor.load_object_exists("redirects") else set()
    base_redirect_tuples = file_interactor.load_object_exists("base_redirect_tuples") if file_interactor.load_object_exists("base_redirect_tuples") else set()
    handled_redirect_mapping = file_interactor.load_object_exists("handled_redirect_mapping") if file_interactor.load_object_exists("handled_redirect_mapping") else {}

    if not os.path.exists(os.getcwd() + "/1mredirects.txt"):
        f = open(os.getcwd() + "/1mredirects.txt", "w")
        f.close()
    else:
        if len(handled) != 0 or len(redirects) == 0 or len(handled_redirect_mapping) == 0 or len(base_redirect_tuples) == 0:
            handled = []
            redirects = set()
            base_redirect_tuples = set()
            handled_redirect_mapping = {}
            c = 0
            content = open(os.getcwd() + "/1mredirects.txt", "r").read()
            # with open(os.getcwd() + "/1mredirects.txt", "r") as f:
            length = len(content.split("\n"))
            for l in content.split("\n"):
                if not l:
                    continue
                # print(c / length, end="\r")
                c += 1
                l = l.strip()
                base_url = l.split(";")[0].strip("/")
                redirectstring = l.split(";")[1].strip("[]'").strip('"').replace("'", "")

                for redirect in redirectstring.split(","):
                    redirect = redirect.strip("/")
                    if redirect != base_url:
                        redirects.add(redirect)
                        if (base_url, redirect) not in base_redirect_tuples:
                            base_redirect_tuples.add((base_url, redirect))
                        if base_url in handled_redirect_mapping:
                            if redirect not in handled_redirect_mapping[base_url]:
                                handled_redirect_mapping[base_url].append(redirect)
                        else:
                            handled_redirect_mapping[base_url] = [redirect]
                if redirectstring:
                    handled.append(base_url)

            file_interactor.save_object(handled, "handled")
            file_interactor.save_object(redirects, "redirects")
            file_interactor.save_object(handled_redirect_mapping, "handled_redirect_mapping")
            file_interactor.save_object(base_redirect_tuples, "base_redirect_tuples")

    unknown_urls = [('punktmedyczny24', 'pl'), ('2bahiskenti', 'com'), ('almoman', 'co'), ('abesu', 'org'), ('paydaychurch', 'com'), ('dcmais', 'com.br'), ('dorbluess', 'best'), ('ixir', 'gen.tr'), ('lyublyukino', 'online'), ('24journal', 'ru'), ('123moviesme', 'info'), ('readyrewards', 'online'), ('unioni', 'se'), ('rudenude', 'com'), ('baybahis', 'com'), ('thedailygifts', 'club'), ('teliumnetwork', 'se'), ('darrellwaltripbuickgmc', 'com'), ('popimusic', 'ir'), ('activateoffers', 'com'), ('vip168sa', 'co'), ('join77bet', 'com'), ('drinksdirect', 'com'), ('holyheadhotspur', 'co.uk'), ('snaptube', 'dev'), ('mejortorrento', 'com'), ('bee', 'pl'), ('clebervieiranews', 'com.br'), ('eye', 'security'), ('gojom', 'pe'), ('apihf', 'com'), ('hycm', 'eu'), ('revolutionwatch', 'com'), ('hopetomorrows', 'online'), ('rpdrlatino', 'com'), ('socialminer', 'com'), ('kino-history', 'ru'), ('thesuppliercentral', 'com'), ('animefever', 'tv'), ('whirlpoolgroup', 'ru'), ('showbox', 'cam'), ('www', 'trondheim.no'), ('radio3da', 'com'), ('bulbheadinternational', 'com'), ('storyteller', 'travel'), ('meulink', 'social'), ('tnt-o', 'ru'), ('mssg', 'guru'), ('grata', 'com'), ('autokiniton', 'com'), ('meltygroup', 'com'), ('185.224.83.128', ''), ('garr', 'tv'), ('gridleycountryford', 'com'), ('anastonishing', 'online'), ('mailclick', 'biz'), ('sangamsweets', 'in'), ('subtorrents', 'ch'), ('advertoriale', 'com.ro'), ('weplananalytics', 'com'), ('lafinestralectora', 'cat'), ('dizimex', 'info'), ('berangkasilmu', 'com'), ('napapijri', 'nl'), ('dailyfilm', 'ir'), ('clearclouddns', 'com'), ('jeu-a-telecharger', 'fr'), ('theparadise', 'ng'), ('probiv', 'one'), ('freeplay777', 'com'), ('fastlylabs', 'com'), ('octafx', 'pro'), ('ket-noi', 'com'), ('planeta', 'pl'), ('onemarketer', 'cl'), ('topmoviez1', 'xyz'), ('camxpress', 'com'), ('149.3.170.35', ''), ('volleyballworld', 'com'), ('moods', 'no'), ('basslinepromotions', 'com'), ('vocal', 'chat'), ('keychevroletbuickgmcofnewport', 'com'), ('hookupshub', 'com'), ('escapeprogram', 'ru'), ('perfectxml', 'com'), ('desitvshow', 'su'), ('roman', 'co.uk'), ('lalajo21', 'com'), ('bluelogic', 'ai'), ('jeepofcolumbus', 'com'), ('mysatrapstage', 'com'), ('158.69.0.158', ''), ('pelisflix', 'li'), ('vmlyrcommerce', 'com'), ('herewebook', 'dk'), ('sarkarijobs', 'ind.in'), ('curio', 'nl'), ('9ensonbahis', 'com'), ('theninhotline', 'com'), ('kbisupdate', 'com'), ('34.101.125.59', ''), ('odellprinting', 'com'), ('bagallery', 'com'), ('hubwiser', 'fr'), ('trials', 'report'), ('brokenbad', 'biz'), ('newconverter', 'online'), ('octafxmy', 'net'), ('oprahdaily', 'com'), ('kto', 'bet'), ('lp-express', 'fr'), ('buckleaders', 'com'), ('mythiccraft', 'io'), ('gala-mart', 'by'), ('999club', 'com'), ('trippleforward', 'bar'), ('calmbyfire', 'com'), ('51.222.25.37', ''), ('angi', 'com'), ('alienhub', 'com'), ('thoroldtoday', 'ca'), ('jouganime', 'site'), ('tinytap', 'com'), ('faire', 'gouv.fr'), ('vepaar', 'com'), ('pclicious', 'net'), ('vavadahc7', 'com'), ('l-o-a-d-i-n-g', 'com'), ('connectif', 'ai'), ('4gsm', 'com'), ('films1080', 'club'), ('zaimmagaz', 'ru'), ('cc', 'chat'), ('poo', 'com'), ('superhydra', 'xyz'), ('cimalek', 'net'), ('princessmovies', 'io'), ('zbokepxyz', 'org'), ('stopthestealmovement', 'com'), ('tudoparanegocios', 'com'), ('planet-liebe', 'com'), ('freedsound', 'xyz'), ('realplaza', 'com'), ('teleprompter-online', 'com'), ('shortwaittimes', 'online'), ('158.69.0.212', ''), ('luhta', 'com'), ('erozers', 'com'), ('hattanmedia', 'com'), ('alenavisage', 'ru'), ('shortstorymarketing', 'com'), ('luckywinnerislucky', 'com'), ('coca-cola', 'com.br'), ('nalogiros', 'ru'), ('brooktaverner', 'org'), ('privadovpn', 'com'), ('conteshop', 'com'), ('fanverse', 'org'), ('toparticlesfree', 'xyz'), ('northbay', 'ca'), ('atg', 'co.uk'), ('bphgbi', 'org'), ('imgoingcalendar', 'com'), ('russian-porno', 'vip'), ('cyberstrategie', 'org'), ('ritter-sport', 'com'), ('assistdigital', 'it'), ('price9dollar', 'ga'), ('tuvturkistasyonlari', 'com'), ('autoparkcdjr', 'com'), ('allbanglanewspaper', 'co'), ('giamduonghuyet', 'online'), ('movieminions', 'org'), ('astromix', 'net'), ('youproxy', 'xyz'), ('yjc', 'news'), ('wegoreizen', 'nl'), ('quepasamedia', 'com'), ('edtechimpact', 'com'), ('portpos', 'com'), ('clustaar', 'io'), ('51.79.157.150', ''), ('dealblitz', 'com'), ('videoproxy', 'icu'), ('rocketprooriginate', 'com'), ('pelisestreno', 'com'), ('automatapi', 'xyz'), ('167.114.3.50', ''), ('unblocksource', 'org'), ('techno-rad', 'com'), ('leaps', 'org'), ('ne03', 'biz'), ('pwacademy', 'nl'), ('azantime', 'app'), ('npc', 'ba'), ('razvratnoe', 'su'), ('pieper', 'de'), ('sibinfotech', 'com'), ('mywardboard', 'online'), ('tncid', 'app'), ('vivian', 'com'), ('80s80s', 'de'), ('hdserial', 'live'), ('binomo-webtrade', 'com'), ('50five', 'com'), ('v-sys', 'org'), ('japanesemailorderbride', 'net'), ('rayljj012', 'com'), ('viennapass', 'de'), ('closer2event', 'com'), ('manabitimes', 'jp'), ('getmemex', 'com'), ('curriqunet', 'com'), ('baudasdicas', 'com.br'), ('iberojet', 'com'), ('pravnapomoc', 'app'), ('bookkeep', 'com'), ('bismarcktuerme', 'net'), ('musicirani', 'us'), ('anwap', 'pub'), ('lidya', 'info'), ('4filmyzilla', 'nl'), ('rmcmv', 'pw'), ('9filmyzilla', 'site'), ('51.79.239.232', ''), ('inscreen', 'tv'), ('epoch', 'org.il'), ('iitahfiz', 'edu.my'), ('cancoesdemedicina', 'online'), ('luzk', 'ru'), ('schneemannfoundation', 'org'), ('healivemall', 'com'), ('rooter', 'gg'), ('mrgreat', 'org'), ('reactivemarkets', 'com'), ('cinefilmeshd1', 'com'), ('4movierulz', 'art'), ('sgh', 'plus'), ('158.69.0.201', ''), ('adobedownloadrussia', 'com'), ('dynamiteit', 'nz'), ('printreach', 'com'), ('khafan', 'today'), ('bestlatinabrides', 'net'), ('miamasvin', 'net'), ('triniti', 'ai'), ('theloyaltyco', 'app'), ('coronafilmes', 'com'), ('animeyt', 'es'), ('morgenwirdes', 'de'), ('ztracks', 'icu'), ('pornozo', 'net'), ('gornergrat', 'ch')]

    c = 0
    pwa_sw_sites_overlap = file_interactor.load_object_exists("pwa_sw_sites_overlap") or set()
    pwa_sw_sites_non_overlap = file_interactor.load_object_exists("pwa_sw_sites_non_overlap") or set()
    # pwa_sw_sites_overlap = set()
    # pwa_sw_sites_non_overlap = set()
    temp = set()
    if pwa_sw_sites_overlap:
        check = "http://www"
        for ((base, redirect), (pwa_base, pwa_redirect)) in pwa_sw_sites_overlap:
            if base != check and redirect != check and pwa_base != check and pwa_redirect != check:
                temp.add(((base, redirect), (pwa_base, pwa_redirect)))
    print("len( temp", list(temp)[:50], len(temp))
    # length = len(base_redirect_tuples)
    # part = 0
    # for (base, redirect) in base_redirect_tuples:
    #     print(part / length, end="\r")
    #     part += 1
    #     for (pwa_base, pwa_redirect) in pwa_base_redirect_tuples:
    #         # if ((base, redirect), (pwa_base, pwa_redirect)) not in pwa_sw_sites_overlap:
    #         #     pwa_sw_sites_non_overlap.add(((base, redirect), (pwa_base, pwa_redirect)))
    #         #     continue
    #         # else:
    #         #     continue
    #         if redirect and pwa_redirect:
    #             if redirect in pwa_redirect or redirect in pwa_base or pwa_redirect in redirect or pwa_redirect in base:
    #                 c += 1
    #                 pwa_sw_sites_overlap.add(((base, redirect), (pwa_base, pwa_redirect)))
    #                 break
    # for item in list(pwa_sw_sites_overlap)[:100]:
    #     print(item)
    print("base tuples overlap", c, len(pwa_sw_sites_overlap), len(pwa_sw_sites_non_overlap), len(base_redirect_tuples), len(pwa_base_redirect_tuples))
    # file_interactor.save_object(pwa_sw_sites_overlap, "pwa_sw_sites_overlap")
    # file_interactor.save_object(pwa_sw_sites_non_overlap, "pwa_sw_sites_non_overlap")
    exit(0)
    unknown_urls_merged = set([domain + "." + suffix for (domain, suffix) in unknown_urls])
    print("unknown urls merged", len(unknown_urls_merged))
    set_unknown_urls = set(unknown_urls_merged)
    unknown_urls_found = file_interactor.load_object_exists("unknown_urls_found")
    # unknown_urls_found = None
    if not unknown_urls_found:
        unknown_urls_found = []
        for unknown_url in unknown_urls_merged:
            found = False
            for base_url in handled_redirect_mapping:
                if found:
                    break
                for redirect in handled_redirect_mapping[base_url]:
                    if unknown_url in redirect:
                        print("unknown url present", unknown_url, base_url)
                        unknown_urls_found.append((base_url, unknown_url))
                        found = True
                        break
                if not found:
                    for (_, redirects) in pwa_redirects:
                        for redirect in redirects:
                            if unknown_url in redirect:
                                print("unknown url present", unknown_url, base_url)
                                unknown_urls_found.append((base_url, unknown_url))
                                found = True
                                break
        file_interactor.save_object(unknown_urls_found, "unknown_urls_found")

    unknown_urls_merged.difference_update(set([unknown_url for (_, unknown_url) in unknown_urls_found]))
    unknown_urls_not_found = set(unknown_urls_merged)

    length = len(base_redirect_tuples)
    missing_manifests = file_interactor.load_object_exists("missing_manifests")
    if not missing_manifests:
        missing_manifests = []
        for subfolder, _, files in os.walk(os.getcwd() + "/SWs/last_sws_desktop_manifests/"):
            manifest_present = False
            for file in files:
                if "manifest.json" == file:
                    if os.stat(os.path.join(subfolder, file)).st_size != 0:
                        manifest_present = True
                        break
            if not manifest_present:
                splitted = subfolder.split("/")[-1]
                missing_manifests.append(splitted)
        file_interactor.save_object(missing_manifests, "missing_manifests")
    # unknown_urls_merged.difference_update(set(unknown_urls_missing_manifests))
    missing_manifests = sw_post_processor.get_manifests_sites(os.getcwd() + "/SWs/last_sws_desktop_manifests/", present=False)
    
    print("unknown urls manifest present", len(unknown_urls_merged), "len unknown urls", len(unknown_urls), "missingmanifests", len(missing_manifests), missing_manifests[:100])
    print("unknown urls not found", len(unknown_urls_not_found), list(unknown_urls_not_found))
    print("unknown urls found:", len(unknown_urls_found))

    redirect_unknown_mapping = file_interactor.load_object_exists("redirect_unknown_mapping") if file_interactor.load_object_exists("redirect_unknown_mapping") else set()
    # redirect_unknown_mapping = None
    if not redirect_unknown_mapping:
        redirect_unknown_mapping = []
        for domain_suffix in unknown_urls_merged:
            present = False
            for mapping in redirect_unknown_mapping:
                if domain_suffix == mapping[0]:
                    present = True
                    break
            if present:
                continue
            if domain_suffix:
                for (base_url, redirect) in base_redirect_tuples:
                    # for redirects in handled_redirect_mapping[base_url]:
                        # for redirect in redirects:
                    if base_url != redirect:
                        if domain_suffix in redirect:
                            # base_redirect_tuples.remove((base_url, redirect))
                            redirect_unknown_mapping.append((domain_suffix, base_url, redirect))
                            # print(domain_suffix, "in redirect'", redirect, base_url)
        print("len redirect unknown mapping", len(redirect_unknown_mapping))
        
        file_interactor.save_object(redirect_unknown_mapping, "redirect_unknown_mapping")
    else:
        print("redirect unknown mapping", len(redirect_unknown_mapping))
        for mapping in redirect_unknown_mapping:
            print(mapping)
    print("handled len", len(handled), len(set(handled)))

    all_urls = file_interactor.load_object("all_urls")
    if not all_urls:
        with open(os.getcwd() + "/top-1m.csv", "r") as f:
            for l in f:
                # print(len(urls) / 1000000, end="\r")
                url = "https://" + l.split(",")[1].strip()
                # if url not in handled:
                    # urls.append(url)
                    # if len(urls) > 100000:
                        # break
                all_urls.append(url)
        file_interactor.save_object(all_urls, "all_urls")

    urls = set(all_urls)
    urls.difference_update(set(handled))
    urls = list(urls)

    set_all_urls = set(all_urls)
    all_urls = list(set_all_urls)
    part_index = 0
    part_size = 100000

    if redirect_processing:
        chunksize, length = 1, 0
        pbar = tqdm.tqdm(total=int(len(pwa_redirects_need_handling) / chunksize), mininterval=1)
        for i in range(int(len(pwa_redirects_need_handling) / chunksize)):
            # responses = [session.head(url, timeout=30, headers=header) for url in urls[i * chunksize:i * chunksize + chunksize]]
            urls_part = pwa_redirects_need_handling[i * chunksize:i * chunksize + chunksize]
            length += len(pwa_redirects_need_handling)
            starttime = time.time()
            loop = asyncio.get_event_loop()
            url_redirects = loop.run_until_complete(url_wrapper_async(urls_part, output_file=os.getcwd() + "/1mredirects_pwa.txt"))

            for url, redirects in url_redirects:
                if len(redirects) != 0:
                    pwa_redirects.append((url, redirects))
                    remove_line_substring(os.getcwd() + "/1mredirects_pwa.txt", [url, "[]"])
                    append_line(os.getcwd() + "/1mredirects_pwa.txt", f"{url};{redirects}\n")
                else:
                    print("skipping", url)
            file_interactor.save_object(pwa_redirects, "pwa_redirects")
            pbar.update(chunksize)
            continue

        chunksize = 10
        i = 0
        length = 0
        urls_left = len(urls)
        all_redirects = []

        if len(sys.argv) == 1 or len(sys.argv) == 2 and sys.argv[1] != "hoi":
            exit(1)

        print("doing", int(100000 / chunksize), "iterations", len(urls), "need handling", len(all_urls) - len(set(handled)))
        print("urls", urls[:100], len(urls))

        for i in range(int(100000 / chunksize)):
            # responses = [session.head(url, timeout=30, headers=header) for url in urls[i * chunksize:i * chunksize + chunksize]]
            urls_part = urls[i * chunksize:i * chunksize + chunksize]
            length += len(urls)
            starttime = time.time()
            loop = asyncio.get_event_loop()
            url_redirects = loop.run_until_complete(url_wrapper_async(urls_part))

            for url, redirects in url_redirects:
                if len(redirects) != 0:
                    remove_line_substring(os.getcwd() + "/1mredirects.txt", [url, "[]"])
                    append_line(os.getcwd() + "/1mredirects.txt", f"{url};{redirects}\n")
                else:
                    print("skipping", url)
            pbar.update(chunksize)
            continue  

        # pool = Pool(os.cpu_count())
        # pool.map_async(url_interactor.check_url_redirects, urls, chunksize=10)
    
    rootdirs = [os.getcwd() + "/last_sws_copy/"]
    invalid_urls_file = os.getcwd() + "/invalid.txt"
    handled_sites_file = os.getcwd() + "/handled_urls.txt"

    # second_sws_folder = os.getcwd() + "/last_sws_copy/"
    if not os.path.exists(handled_sites_file):
        f = open(handled_sites_file, "w")
        f.close()

    invalid_urls = set(read_line_seperated_file(invalid_urls_file))
    handled_sites = set(read_line_seperated_file(handled_sites_file))
    need_handling = []
    set_sws = file_interactor.load_object("set_sws")

    for website in set_sws:
        # for website in websites:
        if website not in handled_sites:
            need_handling.append(website)

    c = 0
    with Pool(processes=4) as pool:
        pool.map(partial(scrape_website_js, rootdirs=rootdirs, invalid_urls=invalid_urls, handled_sites=handled_sites), need_handling)