"""
Miscellaneous package with features for debugging and scraping URLs
"""
import os
import requests
import pickle
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
        """
        Replace forward slashes in url with underscores for local file saving
        """
        return url.replace("/", "_")

    def inverse_replace_url(self, url):
        """
        Inverse of the 'replace_url' function
        """
        return url.replace("_", "/")
    
    def get_content_url(self, url):
        """
        Scrape URL 'url' and retry upon failure with "www." prepended to it
        """
        header = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}
        try:
            print("trying to open url", url)
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
        """
        Compress a local json file and remove the uncompressed original when succeeded
        """
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
        """
        Save a python object locally
        """
        if not os.path.exists(os.getcwd() + path + name):
            f = open(os.getcwd() + path + name, "w")
            f.close()
        with open(os.getcwd() + path + name, "wb") as f:
            pickled = pickle.dumps(object)
            pickle.dump(pickled, f)

    def load_object(self, name, path="/local_vars/"):
        """
        Load a locally saved python object
        """
        with open(os.getcwd() + path + name, "rb") as f:
            pickled = pickle.load(f)
            return pickle.loads(pickled)
        return None

    def load_object_exists(self, name, path="/local_vars/"):
        """
        Load a locally saved python object and return None if it doesnt exist
        """
        if os.path.exists(os.getcwd() + path + name):
            try:
                return self.load_object(name)
            except:
                print("Loading", name, "went wrong")
        return None
   
    def append_line(self, filepath, line):
        """
        Append a line to a file
        """
        with open(filepath, "a+") as f:
            f.write(line)

class DataAggregator:
    def __init__(self) -> None:
        self.file_interactor = FileInteractor()
        self.output = Output()
        self.print_green = self.output.print_green
        self.extract = tldextract.TLDExtract()
        self.json_manifest_loadfail = set()
        pass

    def string_csv_to_usb(self, string):
        """
        Convert a normal string to a PWA name string
        """
        return string.replace("-", "_")

    def string_usb_to_csv(self, string):
        """
        Inverse of 'string_csv_to_usb'
        """
        return string.replace("_", "-").split(".zip")[0].split(" ")[0]
    
    def get_features_manifest_json_from_file(self, path, return_json=False):
        """
        Gets the features and manifest keys from a json file and converst them in a boolean list if needed
        """
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

    def get_col_csv(self, filepath, col_index, sep=";", strip_char=""):
        """
        Extracts a column from a CSV file that is separated by 'sep'
        """
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