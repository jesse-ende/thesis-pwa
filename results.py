import pandas as pd
import csv
import os
import matplotlib.pyplot as plt
import ast
from post_processor import FileInteractor
from pandas.core.frame import DataFrame
import scipy.stats as ss
from scipy import stats
import numpy as np
import scipy as sp
import gzip
import json
import pickle
import seaborn as sns
import tldextract
from matplotlib import rcParams

def fit_distribution_ks(data, name, scipy_func, _xlabel, _ylabel, figname, edges, hist_values):
    output_path = os.getcwd() + "/results/"
    if scipy_func == ss.lognorm:
        dist = "lognorm"
    elif scipy_func == ss.exponweib:
        dist = "weib"
    elif scipy_func == ss.norm:
        dist = "norm"
    elif scipy_func == ss.cauchy:
        dist = "cauchy"
    elif scipy_func == ss.gamma:
        dist = "gamma"
    elif scipy_func == ss.expon:
        dist = "exp"
    figname += dist

    params = scipy_func.fit(data)
    print("param fit", name, dist, params)
    if scipy_func == ss.lognorm or scipy_func == ss.exponweib or scipy_func == ss.gamma or scipy_func == ss.expon:
        X = scipy_func.rvs(*params, size=1000000)
    elif scipy_func == ss.norm or scipy_func == ss.cauchy:
        X = scipy_func.rvs(loc=params[0], scale=params[1], size=1000000)

    # X = scipy_func.rvs(loc=6.6, scale=-2.6* 10 ** -18, s=47, size=10000)
    # X = scipy_func.rvs(*params, size=10000)
    print(len(X))
    # P = scipy_func.fit(X)
    # print("p prop", P)
    ks_test_output = ss.ks_2samp(data, X)
    print("ks test", ks_test_output)
    print()

    if ks_test_output[1] < 0.05:
        return
    print("high p value", name, dist, params)
    hist_values2, edges2 = np.histogram(X, bins=100, density=True)
    plt.xlim([0, 250])
    plt.plot(edges2[:-1], hist_values2, color="blue")
    X2 = np.sort(data['size'])
    F2 = np.array(range(len(data['size'])))/float(len(data['size']))
    plt.plot(X2, F2, color="blue")
    print(X2)
    print(plt.xticks())
    plt.show()
    # exit(0)
    # plt.plot(edges[:-1], hist_values, color="grey")
    plt.show()
    # plt.hist(clipped, bins=bin_count, color="blue")
    plt.xlabel(_xlabel)
    plt.ylabel(_ylabel)
    plt.savefig(output_path + figname + ".pdf")
    plt.close()

def get_pwa_results(data, non_duplicate_sites):
    output_path = os.getcwd() + "/results/"
    if not os.path.exists(output_path):
        os.mkdir(output_path)
    print(data.keys())
    print(len(data), len(non_duplicate_sites))
    data = data[data['website'].isin(non_duplicate_sites)]

    print(data[data['html'] == 0], len(non_duplicate_sites))
    set_websites = set(non_duplicate_sites)
    # print(set_websites, len(set_websites))
    set_websites.difference_update(set(list(data['website'])))
    print(set_websites, len(set_websites))
    # file_interactor.save_object(set_websites, "missing_sites_zip")
    # return
    # data['size'] = data['size'] / 1000
    
    size = True
    if size:
        wa_sizes_kb = data['size'] / 1000
        data['size'] /= 1000
        print("pwa stats size avg", np.mean(data["size"]), "standard deviation", np.std(data['size']), "median", np.median(data['size']), np.quantile(data['size'], [0, 0.25, 0.5, 0.75, 1]))
        print("pwa stats max", data[data['size'] == max(data['size'])]['website'] + " " + str(max(data['size'])))
        print("pwa stats min", data[data['size'] == min(data['size'])]['website'] + " " + str(min(data['size'])))
        low, high = 0, int(np.ceil(wa_sizes_kb.max()))
        bins = np.linspace(low, high, 20000)
        # print("low", low, "high", high)
        # print("high", data[data['size'] >= 50000][['website', 'size']])
        size_threshold = 80000
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
        # plt.ylim([0, 2000])
        # edges = np.histogram_bin_edges(clipped, bins="fd")
        bin_count = 60
        # clipped = np.log(clipped)
        hist_values, edges = np.histogram(clipped, bins=bin_count, density=True)
        plt.xlim([0, edges[-2]])
        
        # X = ss.lognorm.rvs(0.954, loc=0.2, scale=5, size=10000)

        hist_values, edges = np.histogram(clipped, bins=bin_count, density=False)
        plt.plot(edges[:-1], hist_values, color="grey")
        # plt.show()
        # plt.hist(clipped, bins=bin_count, color="blue")
        plt.xlabel("Size (kB)")
        plt.ylabel("Occurrences")
        plt.savefig(output_path + "wa_size" + ".pdf")
        plt.close()
        
        hist_values, edges = np.histogram(clipped, bins=bin_count, density=True)

        for func in [ss.lognorm, ss.expon, ss.norm, ss.cauchy, ss.exponweib, ss.gamma]:
            fit_distribution_ks(data['size'], "wa size", func, "Size (MB)", "Occurrences", "wa_size_", edges, hist_values)

    loc = True
    fig, ax = plt.subplots(figsize=(8,8))

    if loc:
        def get_hist(col_name, threshold, bin_count, do_clip=False):

            print("pwa stats " + col_name + " avg " + str(np.mean(data[col_name])) + " standard deviation " + str(np.std(data[col_name])) + " median " + str(np.median(data[col_name])) + str(np.quantile(data[col_name], [0, 0.25, 0.5, 0.75, 1])))
            print("pwa stats max", col_name, data[data[col_name] == max(data[col_name])]['website'] + " " + str(max(data[col_name])))
            print("pwa stats min", col_name, data[data[col_name] == min(data[col_name])]['website'] + " " + "min val " + str(min(data[col_name])), "\nmin amount sites", len(data[data[col_name] == min(data[col_name])]))
            print("pwa stats 0", lang, data[data[col_name] == 0])
            # print("high", data[data[col_name] >= 50000][['website', col_name]])
            # end = -1
            # while bins[end] >col_namethreshold:
            #     end -= 1

            # bins = np.linspace(low, high, 10000)
            # print("bins", bins)

            bigger, smaller = 0, 20000
            print("bigger than thresh", threshold, data[data[col_name] > threshold][['website', col_name]])
            col_namecheck = 200
            bigger_smaller_than = data[col_name][data[col_name] >= bigger]
            bigger_smaller_than = bigger_smaller_than[data[col_name] <= smaller]

            threshold_data = data[data[col_name] != max(data[col_name])]
            clipped = np.clip(data[col_name], 0, max(threshold_data[col_name]))
            clipped = np.clip(data[col_name], 0, threshold)
            bin_count = 200
            if do_clip:
                hist_values, edges = np.histogram(clipped, bins=bin_count, density=False)
            else:
                hist_values, edges = np.histogram(data[col_name], bins=bin_count, density=False)

            return hist_values, edges
        all_data, colors, labels = [], [], []
        power = 3

        for lang in ["html", "css", "js"]:
            hist_values, edges = get_hist(lang, 400000, "fd", do_clip=False)
            threshold = 300000
            clipped = np.clip(data[lang], 0, threshold)

            color = "grey"
            if lang == "css":
                color = "blue"
            elif lang == "js":
                color = "red"
            colors.append(color)
            labels.append(lang.upper())
            all_data.append(clipped)

        bin_count = 20
        ax.hist(all_data, bins=bin_count, color=colors, label=labels)
        plt.legend()

        new_xticks = ax.get_xticks() / 10 ** power
        new_xticks = [int(x) for x in new_xticks]
        xticks_values = ax.get_xticks()
        plt.xticks(np.linspace(0, 300000, bin_count + 1) - 7500, [int(x / 10 ** power) for x in np.linspace(0, 300000, bin_count + 1)])

        plt.xlabel(f"Lines of code (x10$^{power}$)")
        plt.ylabel(f"Occurrences")            
        plt.savefig(output_path +  "all_languages_wa" + log + ".pdf")
        plt.close()

def get_audit_results(data, name, non_duplicate_sites=[]):
    output_path = os.getcwd() + "/results/"
    print(name, data.keys())
    plt.close()

    colors = ["grey", "blue", "red", "orange", "green", "purple"]
    unique_counts = []
    hist_edges = []
    smallest_width, heighest_bar = None, None
    max_length, longest_val = 0, ""

    all_data, all_keys = [], []
    mins, maxs, avgs, sds, _25th, _75th, medians = [], [], [], [], [], [], []
    for key in data.keys():
        plt.xlabel("Score")
        plt.ylabel("Occurrences")
        my_bins = np.linspace(-100, 100, 201)
        if name != "ylt":
            my_bins = np.linspace(0, 1, 100)
        if key == "website":
            continue
        print(key)
        
        print(name, "stats", key, "avg", np.mean(data[key]), "std", np.std(data[key]), np.quantile(data[key], [0, 0.25, 0.5, 0.75, 1]))

        if name == "ylt":
            plt.xlim([-105, 105])
        else:
            plt.xlim([0, 1.05])
        clipped = np.clip(data[key], -100, 100)
        if name == "lighthouse":
            clipped = np.clip(data[key], 0, 1)
        unique, counts = np.unique(clipped, return_counts=True)
        thresh = 0.75
        if name == "ylt":
            thresh = 75
        print(name, "stats max", key, max(unique), "max counts", counts[list(unique).index(max(unique))], "percentage larger", sum(counts[unique > thresh]) / sum(counts))
        print("counts", sum(counts[unique > 0.5]), "all counts", sum(counts))
        print(name, "stats min", key, min(unique), counts[list(unique).index(min(unique))])
        print(name, "min site", data[data[key] == min(unique)]['website'])
        mins.append(min(unique))
        maxs.append(max(unique))
        avgs.append(np.mean(data[key]))
        sds.append(np.std(data[key]))
        _25th.append(np.quantile(data[key], [0.25])[0])
        _75th.append(np.quantile(data[key], [0.75])[0])
        medians.append(np.median(data[key]))

        all_data.append(clipped)
        # all_data.append((unique, counts))
        all_keys.append(key)
        # plt.legend()
        # if name == "ylt":
        #     plt.legend(loc="upper left")
    # hist_values, edges, _ =
    print("\\textbf{Mean} & "," & ".join([str(x) for x in avgs]), "\\\\ \hline")
    print("\\textbf{Standard deviation} & ", " & ".join([str(x) for x in sds]), "\\\\ \hline")
    print("\\textbf{Minimum} & ", " & ".join([str(x) for x in mins]), "\\\\ \hline")
    print("\\textbf{25th-percentile} & ", " & ".join([str(x) for x in _25th]), "\\\\ \hline")
    print("\\textbf{Median} & ", " & ".join([str(x) for x in medians]), "\\\\ \hline")
    print("\\textbf{75th-percentile} & ", " & ".join([str(x) for x in _75th]), "\\\\ \hline")
    print("\\textbf{Maximum} & ", " & ".join([str(x) for x in maxs]), "\\\\ \hline")
    plt.hist(all_data, bins=my_bins, color=colors[:len(all_data)], label=all_keys, alpha=1, stacked=True, density=False)
    # sum = 0
    # for hist_val in hist_values:
    #     hist_max = max(hist_val)
    #     sum += hist_max
    #     print(hist_max, edges[list(hist_val).index(hist_max)])
    # print(sum)
    # print(name, hist_values)
    # current = []
    # for unique, counts in all_data:
    #     if len(current):
    #         plt.bar(unique, counts, bottom=current)
    #     else:
    #         plt.bar(unique, counts)
    #     current += unique
    plt.legend()
    if name == "ylt":
        locs, labels = plt.xticks()
        labels = locs

        print("locs", locs, "labels", labels)
        plt.xticks(locs - 0.5, [int(x) for x in labels])
        plt.xlim([-105, 105])

        plt.legend(loc="upper left")
        plt.savefig(output_path + name + "_all" + ".pdf")
        plt.xlim([80, 102])
        plt.xticks(np.linspace(80, 100, 11) - 0.5, [int(x) for x in np.linspace(80, 100, 11)])
        plt.hist(all_data, bins=my_bins, color=colors[:len(all_data)], label=all_keys, alpha=1, stacked=True, density=False)
        plt.savefig(output_path + name + "_all_zoomed" + ".pdf")
    else:
        plt.savefig(output_path + name + "_all" + ".pdf")
    plt.close()

    for key in data.keys():
        if key == "website":
            continue
        plt.xlabel(key + " score")
        plt.ylabel("Occurrences")
        my_bins = np.linspace(-100, 100, 201)
        if name != "ylt":
            my_bins = np.linspace(0, 1, 100)

        # if key != "badJavascript":
        #     continue
        if name == "ylt":
            plt.xlim([-105, 110])
        else:
            plt.xlim([0, 1.05])
        clipped = np.clip(data[key], -100, 100)
        if name == "lighthouse":
            clipped = np.clip(data[key], 0, 1)
        plt.hist(clipped, bins=my_bins, color=colors[list(data.keys()).index(key) - 1], label=key, density=False)

        # print(np.unique(data[key]))
        plt.legend()
        if name == "ylt":
            plt.legend(loc="upper left")
        # break
        plt.savefig(output_path + name + "_" + key + ".pdf")
        plt.close()
    return

def get_json_results(data, name):
    output_path = os.getcwd() + "/results/"
    if not os.path.exists(output_path):
        os.mkdir(output_path)
    xs, ys = [], []
    for key in data.keys():
        if key == "website" or key == "protocol_handlers":
            continue
        data[key] = data[key].astype("int")
        xs.append(key)
        ys.append(sum(data[key]))
        if sum(data[key]) < 100 and sum(data[key]) > 0:
            print(key, "between 100 and 0")
            print(data[data[key] == 1]['website'])
    plt.close()
    rcParams.update({'figure.autolayout': True})
    print(name, xs, ys)
    plt.barh(xs, ys, color="grey")
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

    sw_size = True
    if sw_size:

        print("sw stats size avg " + str(np.mean(data["size"])) + " standard deviation " + str(np.std(data['size'])) + " median " + str(np.median(data['size'])) + " " + str(np.quantile(data['size'], [0, 0.25, 0.5, 0.75, 1])))
        print("sw stats max", data[data['size'] == max(data['size'])]['website'] + " " + str(max(data['size'])))
        print("sw stats min", data[data['size'] == min(data['size'])]['website'] + " " + str(min(data['size'])), "\nsw stats min amount sites", len(data[data['size'] == min(data['size'])]))
    
        sw_sizes_kb = np.array(data['size'])
        low, high = 0, int(np.ceil(sw_sizes_kb.max()))
        bins = np.linspace(low, high, 20000)

        size_threshold = 500
        end = -1
        while bins[end] > size_threshold:
            end -= 1

        fig, ax = plt.subplots(figsize=(8,8))

        # bins = np.linspace(low, high, 10000)
        # print("bins", bins)

        bigger, smaller = 200, 100000
        # print("plotting values between", 0, bins[end])
        print(data[data['size'] > size_threshold][['website', 'size']])
        size_check = 200
        # print("sizes with value", size_check, len(sw_sizes_kb[sw_sizes_kb == size_check]))
        # bigger_smaller_than = sw_sizes_kb[np.where((sw_sizes_kb >= bigger) & (sw_sizes_kb <= smaller))]
        # print("amount of sizes between", bigger, "and", smaller, "than:", len(bigger_smaller_than), "=", len(bigger_smaller_than) / len(sw_sizes_kb) * 100, "%")
    
        clipped = np.clip(sw_sizes_kb, 0, size_threshold)

        bin_count = 500
        hist_values, edges = np.histogram(clipped, bins=bin_count, density=False)
    
        # log = "_log"
        log = ""
        if log:
            ax.set_yscale('log')
            # ax.set_xscale('log')
        plt.xlim([0, edges[-1]])
        plt.xlim([0, 250])

        # plt.plot(range(int(edges[-1])), [0 for _ in range(int(edges[-1]))])

        plt.plot(edges[:-1], hist_values, color="grey")
        # plt.hist(clipped, bins=bin_count, color="blue")
        plt.xlabel("Size (kB)")
        plt.ylabel("Occurrences")
        
        plt.savefig(output_path + "sw_size" + log + ".pdf")
        edges = []
        hist_values = []
        # plt.savefig(output_path + "sw_size_zoomed" + log + ".pdf")
        plt.close()

        for func in [ss.lognorm, ss.expon, ss.norm, ss.cauchy, ss.exponweib, ss.gamma]:
            fit_distribution_ks(data['size'], "sw size", func, "Size (kB)", "Occurrences", "sw_size_", edges, hist_values)
            # break
    
    sw_ccns = True
    if sw_ccns:
        # fig, ax = plt.subplots(figsize=(8,8))

        temp_ccns = []
        for ccn_list in data['ccns']:
            if ccn_list == "[]":
                temp_ccns.append(0)
            for ccn in ccn_list.split(","):
                ccn = ccn.replace("[", "").replace("]", "")
                ccn = ccn.replace("'", "")
                ccn = ccn.replace("[", "").replace("]", "")
                if ccn:
                    temp_ccns.append(int(ccn))
        flattened_ccns = np.array(temp_ccns)

        print("empty list", data[data['ccns'] == "[]"])
        print("sw stats ccns avg " + str(np.mean(flattened_ccns)) + " standard deviation " + str(np.std(flattened_ccns)) + " median " + str(np.median(flattened_ccns)) + " " + str(np.quantile(flattened_ccns, [0, 0.25, 0.5, 0.75, 1])))
        print("sw stats max" + " " + str(max(flattened_ccns)))
        print("sw ccns lower than", len(flattened_ccns[np.array(flattened_ccns) < 10]) / len(flattened_ccns))
        index, indexes = 0, []
        max_ccn = str(max(flattened_ccns))
        for row in data['ccns']:
            if max_ccn in row:
                indexes.append(index)
                print("index", index)
            index += 1
        print("ccns indexes", len(indexes), print(indexes))

        print("flattened len", len(flattened_ccns), type(flattened_ccns), np.where(flattened_ccns == 0))
        print("ccns avg", np.mean(flattened_ccns))
        print("ccns quantiles", np.quantile(flattened_ccns, [0, 0.25, 0.5, 0.75, 1]))
        print("ccns avg", np.mean(flattened_ccns), "standard deviation", np.std(flattened_ccns), "median", np.median(flattened_ccns), np.quantile(flattened_ccns, [0, 0.25, 0.5, 0.75, 1]))

        clipped = np.clip(flattened_ccns, 0, 20)

        unique, counts = np.unique(clipped, return_counts=True)
        # hist_values, edges = np.histogram(flattened_ccns, bins=200)
        # hist_values, edges = np.histogram(clipped, bins=20)

        # bin_centers = 0.5*(bin_edges[1:] + bin_edges[:-1])

        plt.yticks([0, 200000, 400000, 600000, 800000], [0, 20, 40, 60, 80])
        x_ticks_loc = [x for x in range(-2, 22, 2)]
        plt.xticks(x_ticks_loc, x_ticks_loc[:-1] + ["20+"])
            # [x for x in range(-2, 22, 2) if x < 20])
        plt.xlim([-1, 21])
        plt.bar(unique, counts, color="grey")
        plt.xlabel("Cyclomatic complexity")
        plt.ylabel(f'Occurrences ($x10^{4}$)')

        plt.savefig(output_path + "ccns" + ".pdf")
        plt.close()

    events = True
    if events:
        flattened_events = []
        for event_list in data["events"]:
            if len(event_list) > 0:
                event_list = event_list.split(",")
                # print("events list", event_list)
                for event in event_list:
                    event = event.replace("'", "").replace('"', "").replace("[", "").replace("]", "").replace(" ", "")
                    if event:
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
        plt.barh(unique, counts, color="grey")

        # plt.plot(bin_centers, hist)
        plt.xlabel("Occurrences")
        plt.ylabel("Event")
        # plt.show()
        plt.savefig(output_path + "events" + ".pdf")
        plt.close()

    loc = True
    if loc:
        print("sw stats loc avg " + str(np.mean(data["loc"])) + " standard deviation " + str(np.std(data['loc'])) + " median " + str(np.median(data['loc'])) + " " + str(np.quantile(data['loc'], [0, 0.25, 0.5, 0.75, 1])))
        print("sw stats max", data[data['loc'] == max(data['loc'])]['website'] + " " + str(max(data['loc'])))

        print("sw stats loc with size 0", data[data['loc'] == 0]['website'])

        print("high", data[data['loc'] >= 50000][['website', 'loc']])
        # end = -1
        # while bins[end] >col_namethreshold:
        #     end -= 1

        # bins = np.linspace(low, high, 10000)
        # print("bins", bins)
        threshold = 12500
        # threshold = 6000

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
        bin_count = 1000
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
        # plt.xlim([0, 13000])
                # plt.plot(edges[:-1], hist_values, color="grey")
                # plt.xticks([0, 5000, 10000, 15000, 20000, 25]000], [0, 5, 10, 15, 20, 25])
        plt.xticks([0, 2000, 4000, 6000, 8000, 10000], [0, 2, 4, 6, 8, 10])
        # plt.xlim([0, 1000])
        # plt.plot(js_edges[:-1], js_hist_values, color="grey")

        plt.hist(clipped, bins=bin_count, color="grey")
        # plt.legend()
        plt.xlabel("Lines of code (x10$^{3})$")
        plt.ylabel("Occurrences")
        
        plt.savefig(output_path + "sw_loc" + log + ".pdf")
        plt.close()

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

    file_interactor = FileInteractor()
    final_sites = file_interactor.load_object_exists("final_sw_paths")
    
    wa_data = pd.read_csv(os.getcwd() + "/CSVs/final_pwa.csv", sep=";")
    # wa_data = wa_data[wa_data['website'].isin(filtered_sites)]
    # wa_data = wa_data.drop_duplicates(subset=['website'])

    sw_data = pd.read_csv(os.getcwd() + "/CSVs/final_sw (copy).csv", sep=";")
    # sw_data = sw_data[sw_data['website'].isin(filtered_sites)]
    sw_data = sw_data.drop_duplicates(subset=['website'])
    print("pwa data len", len(wa_data), "sw data len", len(sw_data))
    set_sws = load_object("set_sws")

    features_data = pd.read_csv(os.getcwd() + "/CSVs/final_features.csv", sep=";")
    manifest_data = pd.read_csv(os.getcwd() + "/CSVs/final_manifest.csv", sep=";")

    ylt_data = pd.read_csv(os.getcwd() + "/CSVs/final_ylt.csv", sep=";")
    lighthouse_data = pd.read_csv(os.getcwd() + "/CSVs/final_lighthouse.csv", sep=";")

    print("final sites len", len(final_sites))
    # non_duplicate_sites = read_line_seperated_file(os.getcwd() + "/final_sites.txt")
    # filter_results_file(filtered_sites, sw_data)
    # get_sw_results(sw_data, list(set_sws))
    # get_pwa_results(wa_data, final_sites.keys())
    # get_json_results(features_data, "Feature")
    # get_json_results(manifest_data, "Manifest key")
    valid_linked_sw_paths = file_interactor.load_object_exists("valid_linked_sw_paths")
    get_audit_results(ylt_data, "ylt", valid_linked_sw_paths.keys())
    # get_audit_results(lighthouse_data, "Lighthouse")