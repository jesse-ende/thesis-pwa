import pandas as pd
import csv
import os
import matplotlib.pyplot as plt
import ast

from pandas.core.frame import DataFrame
from scipy import stats
import numpy as np
import scipy as sp
import gzip
import json
import pickle
import seaborn as sns
import tldextract
from matplotlib import rcParams


def get_pwa_results(data, non_duplicate_sites):
    output_path = os.getcwd() + "/results/"
    if not os.path.exists(output_path):
        os.mkdir(output_path)
    print(data.keys())
    unique, counts = np.unique(data[data['size'] < 11000]['size'], return_counts=True)
    hist, bin_edges = np.histogram(data[data['size'] < 11000]['size'], bins=20)
    bin_centers = 0.5*(bin_edges[1:] + bin_edges[:-1])
    bin_centers = bin_centers[::-1]

    # data['size'] = data['size'] / 1000
    
    size = True
    if size:
        print("pwa stats size avg", np.mean(data["size"]), "standard deviation", np.std(data['size']), "median", np.median(data['size']), np.quantile(data['size'], [0, 0.25, 0.5, 0.75, 1]))
        print("pwa stats max", data[data['size'] == max(data['size'])]['website'] + " " + str(max(data['size'])))
        print("pwa stats min", data[data['size'] == min(data['size'])]['website'] + " " + str(min(data['size'])))
        wa_sizes_kb = data['size'] / 1000000
        low, high = 0, int(np.ceil(wa_sizes_kb.max()))
        bins = np.linspace(low, high, 20000)
        # print("low", low, "high", high)
        # print("high", data[data['size'] >= 50000][['website', 'size']])
        size_threshold = 80
        end = -1
        while bins[end] > size_threshold:
            end -= 1
        fig, ax = plt.subplots(figsize=(8,8))

        bins = np.linspace(low, high, 10000)
        # print("bins", bins)

        bigger, smaller = 50000, 1000000
        # print("plotting values between", 0, bins[end])
        print(data[data['size'] > size_threshold][['website', 'size']])
        size_check = 200
        # print("sizes with value", size_check, len(wa_sizes_kb[wa_sizes_kb == size_check]))
        bigger_smaller_than = wa_sizes_kb[wa_sizes_kb >= bigger]
        bigger_smaller_than = bigger_smaller_than[wa_sizes_kb <= smaller]
        # print("amount of sizes between", bigger, "and", smaller, "than:", len(bigger_smaller_than), "=", len(bigger_smaller_than) / len(wa_sizes_kb) * 100, "%")

        clipped = np.clip(wa_sizes_kb, 0, size_threshold)

        # print("bins[" + str(end) + "]", bins[end], "bins[0]", bins[0], "clipped last", len(clipped[clipped >= bins[end]]), "from original size", len(data.loc[data['size'] >= size_threshold]), "from np size array", len(wa_sizes_kb[wa_sizes_kb > size_threshold]))
        # plt.xlim([0, 10])
        # plt.ylim([0, 2000])
        # edges = np.histogram_bin_edges(clipped, bins="fd")
        bin_count = 60
        # clipped = np.log(clipped)
        hist_values, edges = np.histogram(clipped, bins=bin_count, density=False)

        # log = "_log"
        log = ""
        if log:
            ax.set_yscale('log')
            # ax.set_xscale('log')
        plt.xlim([0, edges[-2]])

        # plt.plot(range(int(edges[-1])), [0 for _ in range(int(edges[-1]))])
        
        plt.plot(edges[:-1], hist_values, color="grey")
        # plt.hist(clipped, bins=bin_count, color="blue")
        plt.xlabel("Size (MB)")
        plt.ylabel("Occurrences")
        
        plt.savefig(output_path + "wa_size" + log + ".pdf")
    
    loc = True

    if loc:
        def get_hist(col_name, threshold, bin_count, do_clip=False):
            print("pwa stats " + col_name + " avg " + str(np.mean(data[col_name])) + " standard deviation " + str(np.std(data[col_name])) + " median " + str(np.median(data[col_name])) + str(np.quantile(data[col_name], [0, 0.25, 0.5, 0.75, 1])))
            print("pwa stats max", col_name, data[data[col_name] == max(data[col_name])]['website'] + " " + str(max(data[col_name])))
            print("pwa stats min", col_name, data[data[col_name] == min(data[col_name])]['website'] + " " + str(min(data[col_name])))

            # print("high", data[data[col_name] >= 50000][['website', col_name]])
            # end = -1
            # while bins[end] >col_namethreshold:
            #     end -= 1

            # bins = np.linspace(low, high, 10000)
            # print("bins", bins)

            bigger, smaller = 0, 20000
            # print("plotting values between", 0, bins[end])
            print(data[data[col_name] > threshold][['website', col_name]])
            col_namecheck = 200
            # print(col_name with value",col_namecheck, len(wacol_name_kb[wacol_name_kb ==col_namecheck]))
            bigger_smaller_than = data[col_name][data[col_name] >= bigger]
            bigger_smaller_than = bigger_smaller_than[data[col_name] <= smaller]
            # print(col_name, "amount between", bigger, "and", smaller, "than:", len(bigger_smaller_than), "=", len(bigger_smaller_than) / len(data[col_name]) * 100, "%")

            threshold_data = data[data[col_name] != max(data[col_name])]
            clipped = np.clip(data[col_name], 0, max(threshold_data[col_name]))
            # print("bins[" + str(end) + "]", bins[end], "bins[0]", bins[0], "clipped last", len(clipped[clipped >= bins[end]]), "from original html", len(data.loc[data['html'] >= html_threshold]), "from np html array", len(wa_htmls_kb[wa_htmls_kb > html_threshold]))
            # plt.xlim([0, 10])
            # plt.ylim([0, 2000])
            # edges = np.histogram_bin_edges(clipped, bins="fd")
            bin_count = 150
            # clipped = np.log(clipped)
            if do_clip:
                hist_values, edges = np.histogram(clipped, bins=bin_count, density=False)
            else:
                hist_values, edges = np.histogram(data[col_name], bins=bin_count, density=False)

            return hist_values, edges

        for lang in ["css", "html", "js"]:
        # for lang in ['html']:
            hist_values, edges = get_hist(lang, 90000, "fd", do_clip=True)

            fig, ax = plt.subplots(figsize=(8,8))
            # log = "_log"
            log = ""
            if log:
                ax.set_yscale('log')
                # ax.set_xscale('log')
                # ax.set_ylim([0, 1200])
            # plt.xlim([0, max(css_edges[-1], max(js_edges[-1], html_edges[-1]))])
            # plt.xlim([0, 100000])
            # plt.xlim([0, html_edges[-1]])
            if lang == "css" :
                plt.xticks([0, 50000, 100000, 150000, 200000, 250000], [0, 5, 10, 15, 20, 25])
                plt.xlim([0, 250000])
                power = 4
            elif lang == "html":
                # plt.xticks([0, 50000, 100000, 150000, 200000, 250000, 3000000], [0, 5, 10, 15, 20, 25, 30])
                plt.xlim([0, max(data[lang])])
                # threshold_data = data[data[lang] != max(data[lang])]
                # plt.xlim([0, max(threshold_data[lang])])
                # print("maxxie", max(threshold_data[lang]))
                power = 4
            elif lang == "js":
                plt.xticks([0,100000,200000,300000,400000,500000,600000,700000], [0, 1,2,3,4,5,6,7])
                plt.xlim([0, 700000])
                power = 5
            # plt.plot(range(int(edges[-1])), [0 for _ in range(int(edges[-1]))])
            
            # plt.plot(html_edges[:-1], html_hist_values, color="gray")
            plt.plot(edges[:-1], hist_values, color="gray")
            # plt.plot(js_edges[:-1], js_hist_values, color="gray")

            # plt.hist(clipped, bins=bin_count, color="blue")
            # plt.legend()
            plt.xlabel(f"Lines of code (x10$^{power}$)")
            plt.ylabel(f"Occurrences")

            
            plt.savefig(output_path + lang + "_wa" + log + ".pdf")

def get_audit_results(data, name):
    output_path = os.getcwd() + "/results/"
    print(name, data.keys())

    for key in data.keys():
        if key == "website" or "Unnamed" in key:
            continue
        data[key] = data[data[key] != "None"][key]
        data[key] = data[data[key] != np.nan][key]
        data[key] = pd.to_numeric(data[key], downcast="float")
        data[key] = data[~np.isnan(data[key])][key]

        temp = []
        for val in data[key]:
            if not np.isnan(val):
                temp.append(val)
        # data[key] = data[data[key] != "nan"][key]
        print(name, key, "avg", np.mean(temp), "std", np.std(temp), np.quantile(temp, [0, 0.25, 0.5, 0.75, 1]))
        # print("ccns quantiles", np.quantile(flattened_ccns, [0, 0.25, 0.5, 0.75, 1]))

        un = np.unique(temp)
        print(len(un))
        # for i in un:
            # print(i, type(i), i == np.nan, np.isnan(i))
        if name == "Lighthouse":
            if key == "performance":
                bincount = 100
            elif key == "accessibility":
                bincount = 25
            elif key == "seo":
                bincount = 7
            else:
                bincount = 10
        else:
            bincount = 100

        print(len(temp))
        hist, edges = np.histogram(temp, bins=bincount)
        tics = [0, 2, 4, 6, 8, 10, 12, 14, 16]
        # plt.xticks([x * 1000 for x in tics], tics)
        plt.xlabel(key.capitalize() + " scores")
        plt.ylabel("Occurrences")
        plt.plot(edges[:-1], hist, color="gray")
        # plt.show()
        # break
        plt.savefig(output_path + name + "_" + key + ".pdf")
        plt.close()

def get_json_results(data, name):
    output_path = os.getcwd() + "/results/"
    if not os.path.exists(output_path):
        os.mkdir(output_path)
    xs, ys = [], []
    for key in data.keys():
        if key == "website":
            continue
        data[key] = data[key].astype("int")
        xs.append(key)
        ys.append(sum(data[key]))
        if sum(data[key]) < 100 and sum(data[key]) > 0:
            print(key, "between 100 and 0")
            print(data[data[key] == 1]['website'])
    rcParams.update({'figure.autolayout': True})
    print(name, xs, ys)
    plt.barh(xs, ys, color="gray")
    # plt.plot(bin_centers, hist)
    plt.xlabel("Occurrences")
    plt.ylabel(name)
    # plt.show()
    plt.savefig(output_path + name + ".pdf")

    print(ys)

def get_sw_results(data, non_duplicate_sites):
    output_path = os.getcwd() + "/results/"
    if not os.path.exists(output_path):
        os.mkdir(output_path)
    keys_lists = ['events']
    # print(type(data), data.head(), data.keys())
    # print(data['SWs amount'] == 1)
    total = {}
    processed = 0
    output_folder = os.getcwd() + "/seperate_data/"

    data = data.drop_duplicates(subset=['website'], keep="last")
    # data['size'] = data['size'].astype(int)
    # print("size head", data['size'].head())
    data['size'] = data['size'] / 1000
    # print("size head", data['size'].head())
    # exit(0)

    # sns.set_style('whitegrid')
    # sns.kdeplot(data['size'][data['size'] < 11000])
    # plt.show()
    print("data len", len(data))

    sw_size = False
    if sw_size:
        print("sw stats size avg " + str(np.mean(data["size"])) + " standard deviation " + str(np.std(data['size'])) + " median " + str(np.median(data['size'])) + " " + str(np.quantile(data['size'], [0, 0.25, 0.5, 0.75, 1])))
        print("sw stats max", data[data['size'] == max(data['size'])]['website'] + " " + str(max(data['size'])))
    
        sw_sizes_kb = np.array(data['size'])
        low, high = 0, int(np.ceil(sw_sizes_kb.max()))
        bins = np.linspace(low, high, 20000)

        size_threshold = 100000000
        end = -1
        while bins[end] > size_threshold:
            end -= 1

        fig, ax = plt.subplots(figsize=(8,8))

        bins = np.linspace(low, high, 10000)
        print("bins", bins)

        bigger, smaller = 200, 100000
        # print("plotting values between", 0, bins[end])
        print(data[data['size'] > size_threshold][['website', 'size']])
        size_check = 200
        # print("sizes with value", size_check, len(sw_sizes_kb[sw_sizes_kb == size_check]))
        bigger_smaller_than = sw_sizes_kb[np.where((sw_sizes_kb >= bigger) & (sw_sizes_kb <= smaller))]
        # print("amount of sizes between", bigger, "and", smaller, "than:", len(bigger_smaller_than), "=", len(bigger_smaller_than) / len(sw_sizes_kb) * 100, "%")
    
        clipped = np.clip(sw_sizes_kb, 0, size_threshold)

        # print("bins[" + str(end) + "]", bins[end], "bins[0]", bins[0], "clipped last", len(clipped[clipped >= bins[end]]), "from original size", len(data.loc[data['size'] >= size_threshold]), "from np size array", len(sw_sizes_kb[sw_sizes_kb > size_threshold]))
        # plt.xlim([0, 10])
        # plt.ylim([0, 2000])
        # edges = np.histogram_bin_edges(clipped, bins="fd")
        bin_count = 1000
        # clipped = np.log(clipped)
        hist_values, edges = np.histogram(clipped, bins=bin_count, density=False)
    
        # log = "_log"
        log = ""
        if log:
            ax.set_yscale('log')
            # ax.set_xscale('log')
        plt.xlim([0, edges[-1]])
        plt.xlim([0, 100])

        # plt.plot(range(int(edges[-1])), [0 for _ in range(int(edges[-1]))])
        
        plt.plot(edges[:-1], hist_values, color="grey")
        # plt.hist(clipped, bins=bin_count, color="blue")
        plt.xlabel("Size (kB)")
        plt.ylabel("Occurrences")
        print(edges[-1])
        
        plt.savefig(output_path + "sw_size_zoomed" + log + ".pdf")

    # for ccns in data['ccns']:
    #     temp = []
    #     for ccn in ccns.strip("]").strip("[").split(", "):
    #         print("ccn", ccn.replace("'", ""))
    #         if ccn.replace("'", ""):
    #             temp.append(int(ccn.replace("'", "")))
    #         # print(ccn.replace("'", ""))
    #     print("temp", temp)
    
    
    sw_ccns = False
    if sw_ccns:
        temp_ccns = []
        for ccn_list in data['ccns']:
            for ccn in ccn_list.split(","):
                ccn = ccn.replace("[", "").replace("]", "")
                ccn = ccn.replace("'", "")
                ccn = ccn.replace("[", "").replace("]", "")
                if ccn:
                    temp_ccns.append(int(ccn))
        # temp_ccns = [[int(ccn.replace("'", "")) if ccn.replace("'", "") else [] for ccn in ccns.strip("]").strip("[").split(",")] for ccns in data['ccns']]
        # save_object(temp_ccns, "temp_ccns")
        # temp_ccns = load_object("temp_ccns")

        flattened_ccns = temp_ccns
        # for list in temp_ccns:
        #     # if len(list) == 0:
        #     #     if val == 0:
        #     #             print("zero found\n\n\n\n")
        #     #     flattened_ccns.append(0)
        #     #     continue
        #     for val in list:
        #         if type(val) == int:
        #             flattened_ccns.append(val)
        #             if val == 0:
        #                 print("zero found\n\n\n\n")
        #         if type(val) == list:
        #             if val == 0:
        #                 print("zero found\n\n\n\n")
        #             flattened_ccns.append(0)
            # print("temp_ccns list", list, len(flattened_ccns))


        # data['ccns'] = temp_ccns
        print("sw stats ccns avg " + str(np.mean(flattened_ccns)) + " standard deviation " + str(np.std(flattened_ccns)) + " median " + str(np.median(flattened_ccns)) + " " + str(np.quantile(flattened_ccns, [0, 0.25, 0.5, 0.75, 1])))
        print("sw stats max" + " " + str(max(flattened_ccns)))

        print("flattened len", len(flattened_ccns), type(flattened_ccns), np.where(flattened_ccns == 0))
        print("ccns avg", np.mean(flattened_ccns))
        print("ccns quantiles", np.quantile(flattened_ccns, [0, 0.25, 0.5, 0.75, 1]))
        print("ccns avg", np.mean(flattened_ccns), "standard deviation", np.std(flattened_ccns), "median", np.median(flattened_ccns), np.quantile(flattened_ccns, [0, 0.25, 0.5, 0.75, 1]))

        clipped = np.clip(flattened_ccns, 0, 20)

        # unique, counts = np.unique(flattened_ccns, return_counts=True)
        hist, bin_edges = np.histogram(flattened_ccns, bins=100)
        # bin_centers = 0.5*(bin_edges[1:] + bin_edges[:-1])

        log = "_log"
        log = ""
        if log:
            plt.yscale('log')
        plt.yticks([0, 200000, 400000, 600000, 800000], [0, 20, 40, 60, 80])

        plt.plot(bin_edges[:-1], hist, color="grey")
        plt.xlabel("Cyclomatic complexity")
        plt.ylabel(f'Occurrences ($x10^{4}$)')

        plt.savefig(output_path + "ccns" + log + ".pdf")

    # sw_amount = True
    # if sw_amount:
    #     data['SWs count'] = data['SWs count'].astype(int)

    #     unique, counts = np.unique(data['SWs count'], return_counts=True)
    #     hist, bin_edges = np.histogram(data['SWs count'], bins=40)
    #     bin_centers = 0.5*(bin_edges[1:] + bin_edges[:-1])

    #     print("SWs count avg", np.mean(data["SWs count"]), np.quantile(data['SWs count'], [0, 0.25, 0.5, 0.75, 1]), "unique", unique, "counts", counts)
    #     print("sws count", data.loc[data['SWs count'] == 2])

    #     fig, ax = plt.subplots(figsize=(10,4))
    #     # plt.hist(bin_centers, hist)
    #     ax.bar(unique, counts)
    #     ax.set_xlabel("SWs count")
    #     ax.set_xticks(unique)
    #     # plt.show()
    #     plt.savefig(output_path + "SWs count" + ".pdf")
    #     plt.close()
    events = True
    if events:
        flattened_events = []
        for event_list in data["events"]:
            if len(event_list) > 0:
                event_list = event_list.split(",")
                print("events list", event_list)
                for event in event_list:
                    event = event.replace("'", "").replace('"', "").replace("[", "").replace("]", "").replace(" ", "")
                    if event:
                        print("appending", event, "end")
                        flattened_events.append(event)
        # exit(0)

        print("sw stats events avg", stats.mode(flattened_events, nan_policy="omit"))
        # print("events quantiles", np.quantile(flattened_events, [0, 0.25, 0.5, 0.75, 1]))

        rcParams.update({'figure.autolayout': True})
        unique, counts = np.unique(flattened_events, return_counts=True)
        print("events", unique, counts)
        print(unique[:10])
        print(len(unique), len(counts))
        plt.gca().invert_yaxis()
        # hist, bin_edges = np.histogram(data['events'], bins=40)
        # bin_centers = 0.5*(bin_edges[1:] + bin_edges[:-1])
        # plt.tight_layout()
        plt.barh(unique, counts, color="gray")

        # plt.plot(bin_centers, hist)
        plt.xlabel("Occurrences")
        plt.ylabel("Event")
        # plt.show()
        plt.savefig(output_path + "events" + ".pdf")

    loc = True
    if loc:
        print("sw stats loc avg " + str(np.mean(data["loc"])) + " standard deviation " + str(np.std(data['loc'])) + " median " + str(np.median(data['loc'])) + " " + str(np.quantile(data['loc'], [0, 0.25, 0.5, 0.75, 1])))
        print("sw stats max", data[data['loc'] == max(data['loc'])]['website'] + " " + str(max(data['loc'])))



        print("high", data[data['loc'] >= 50000][['website', 'loc']])
        # end = -1
        # while bins[end] >col_namethreshold:
        #     end -= 1

        # bins = np.linspace(low, high, 10000)
        # print("bins", bins)
        threshold = 12500

        bigger, smaller = 0, 20000
        # print("plotting values between", 0, bins[end])
        print(data[data['loc'] > threshold][['website', 'loc']])
        # print('loc' with value",'loc'check, len(wa'loc'_kb[wa'loc'_kb =='loc'check]))
        bigger_smaller_than = data['loc'][data['loc'] >= bigger]
        bigger_smaller_than = bigger_smaller_than[data['loc'] <= smaller]
        print('loc', "amount between", bigger, "and", smaller, "than:", len(bigger_smaller_than), "=", len(bigger_smaller_than) / len(data['loc']) * 100, "%")

        clipped = np.clip(data['loc'], 0, threshold)

        # print("bins[" + str(end) + "]", bins[end], "bins[0]", bins[0], "clipped last", len(clipped[clipped >= bins[end]]), "from original html", len(data.loc[data['html'] >= html_threshold]), "from np html array", len(wa_htmls_kb[wa_htmls_kb > html_threshold]))
        # plt.xlim([0, 10])
        # plt.ylim([0, 2000])
        # edges = np.histogram_bin_edges(clipped, bins="fd")
        bin_count = 24
        # clipped = np.log(clipped)
        # if do_clip:
        hist_values, edges = np.histogram(clipped, bins=bin_count, density=False)
        # else:
            # hist_values, edges = np.histogram(data['loc'], bins=bin_count, density=False)
        fig, ax = plt.subplots(figsize=(8,8))
        log = "_log"
        log = ""
        if log:
            ax.set_yscale('log')
            # ax.set_xscale('log')
            # ax.set_ylim([0, 1200])

        plt.xlim([0, edges[-2]])
        plt.plot(edges[:-1], hist_values, color="gray")
        # plt.xticks([0, 5000, 10000, 15000, 20000, 25000], [0, 5, 10, 15, 20, 25])
        plt.xticks([0, 2000, 4000, 6000, 8000, 10000], [0, 2, 4, 6, 8, 10])
        # plt.xlim([0, 1000])
        # plt.plot(js_edges[:-1], js_hist_values, color="gray")

        # plt.hist(clipped, bins=bin_count, color="blue")
        # plt.legend()
        plt.xlabel("Lines of code (x10$^{3})$")
        plt.ylabel("Occurrences")
        
        plt.savefig(output_path + "sw_loc" + log + ".pdf")

def search_keys(json_object, key_type, prev="", ke=""):
    print("\n\n")
    # keys = getattr(json_object, "keys", None)
    # print(json_object)
    # print("hasattr", hasattr(json_object, "keys"), json_object)
    if hasattr(json_object, 'keys'):
        # if json_object.keys() and type(json_object) == key_type:
        if prev:
            print("keys", json_object.keys(), prev)
        else:
            print("no keys", json_object.keys())
        for k in json_object.keys():
            search_keys(json_object[k], key_type, prev + str(json_object) + " " + str(k), k)
    else:
        print("no keyz", json_object)

def output_splitted_results(data, non_duplicate_sites):
    data = data.drop_duplicates(subset=['name'], keep="last")
    data = data[data['name'].isin(non_duplicate_sites)]

    output_folder = os.getcwd() + "/seperate_data/"
    if not os.path.exists(output_folder):
        os.mkdir(output_folder)
    for key in data:
        with open(output_folder + key, "wb") as f:
            pickled = pickle.dumps(data[key])
            pickle.dump(pickled, f)

def input_splitted_results(keys):
    output_folder = os.getcwd() + "/seperate_data/"
    data = pd.DataFrame()
    for key in keys:
        with open(output_folder + key, "rb") as f:
            pickled = pickle.load(f)
            input_data = pickle.loads(pickled)
            data[key] = input_data
    return data

def get_missing_sizes(size_folder, filtered_sites):
    print("start len", len(filtered_sites))
    for folder in os.listdir(size_folder):
        if ".zip" in folder:
            folder = folder.split(".zip")[0]
        if "_" in folder:
            folder = folder.replace("_", "-")
        if folder in filtered_sites:
            filtered_sites.remove(folder)
        # else:
        #     print("folder", folder)
    print("filterd len", len(filtered_sites))
    print(filtered_sites[:100])
    with open(os.getcwd() + "/missing_sizes_websites.txt", "w") as f:
        for site in filtered_sites:
            f.write(site + "\n")
    exit(0)

def filter_results_file(filtered_websites, results_file_path, sep=";", output_path="/CSVs/filtered_data.csv"):
    with open(results_file_path, "r") as f:
        c = []
        filtered_rows = []

        for l in f:
            l = l.strip()

            if len(filtered_rows) == 0:
                filtered_rows.append(l)
            # print(l)
            if l.split(sep)[0] in filtered_websites:
                filtered_rows.append(l)
                filtered_websites.remove(l.split(sep)[0])
            if l.split(sep)[1] == '3' and l.split(sep)[0] not in c:
                c.append(l.split(sep)[0])
    print("1 sw", len(c))
    print(len(filtered_rows))
    if not os.path.exists(os.getcwd() + output_path):
        f = open(os.getcwd() + output_path, "w")
        f.close()
    with open(os.getcwd() + output_path, "w") as f:
        for row in filtered_rows:
            f.write(row + "\n")

def get_col_csv(filepath, col_index, sep=";"):
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

def save_object(object, name, path="/local_vars/"):
    if not os.path.exists(os.getcwd() + path + name):
        f = open(os.getcwd() + path + name, "w")
        f.close()
    with open(os.getcwd() + path + name, "wb") as f:
        pickled = pickle.dumps(object)
        pickle.dump(pickled, f)

def load_object(name, path="/local_vars/"):
    with open(os.getcwd() + path + name, "rb") as f:
        pickled = pickle.load(f)
        return pickle.loads(pickled)

def read_line_seperated_file(filepath):
    res = []
    with open(filepath, "r") as f:
        for l in f:
            res.append(l.strip())
    return res

if __name__ == "__main__":

    filtered_sites = []
    with open(os.getcwd() + "/final_sites.txt", "r") as f:
        for l in f:
            filtered_sites.append(l.strip())

    wa_data = pd.read_csv(os.getcwd() + "/CSVs/pwa_results_final.csv", sep=";")
    # wa_data = wa_data[wa_data['website'].isin(filtered_sites)]
    wa_data = wa_data.drop_duplicates(subset=['website'])

    sw_data = pd.read_csv(os.getcwd() + "/CSVs/sw_results_final.csv", sep=";")
    # sw_data = sw_data[sw_data['website'].isin(filtered_sites)]
    sw_data = sw_data.drop_duplicates(subset=['website'])
    print("pwa data len", len(wa_data), "sw data len", len(sw_data))
    set_sws = load_object("set_sws")

    features_data = pd.read_csv(os.getcwd() + "/CSVs/features.csv", sep=";")
    manifest_data = pd.read_csv(os.getcwd() + "/CSVs/manifest.csv", sep=";")

    ylt_data = pd.read_csv(os.getcwd() + "/CSVs/ylt_aggregated_final.csv")
    lighthouse_data = pd.read_csv(os.getcwd() + "/CSVs/lighthouse_aggregated_final.csv", sep=",")

    # non_duplicate_sites = read_line_seperated_file(os.getcwd() + "/final_sites.txt")
    # filter_results_file(filtered_sites, sw_data)
    # get_sw_results(sw_data, list(set_sws))
    # get_pwa_results(wa_data, [])
    # get_json_results(features_data, "Feature")
    # get_json_results(manifest_data, "Manifest key")
    get_audit_results(ylt_data, "ylt")
    # get_audit_results(lighthouse_data, "Lighthouse")