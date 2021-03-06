import pandas as pd
import os
import matplotlib.pyplot as plt
from post_processor import FileInteractor
from scipy import stats
import numpy as np
import tldextract
from matplotlib import rcParams

def get_latex_stats(data):
    print("\\textbf{Mean} & " + (str(np.mean(data))), "\\\\ \hline")
    print("\\textbf{Standard deviation} & " + str(np.std(data)), "\\\\ \hline")
    print("\\textbf{Minimum} & " + str(min(data)), "\\\\ \hline")
    print("\\textbf{25th-percentile} & " + str(np.quantile(data, 0.25)), "\\\\ \hline")
    print("\\textbf{Median} & " + str(np.median(data)), "\\\\ \hline")
    print("\\textbf{75th-percentile} & " + str(np.quantile(data, 0.75)), "\\\\ \hline")
    print("\\textbf{Maximum} & " + str(max(data)), "\\\\ \hline")

def get_pwa_results(data, black_list):
    output_path = os.getcwd() + "/results/"
    if not os.path.exists(output_path):
        os.mkdir(output_path)
    
    data = data[~data['website'].isin(black_list)]
    file_add = ""
    size = True
    if size:
        wa_sizes_kb = data['size'] / 1000
        print("pwa stats size avg", np.mean(wa_sizes_kb), "standard deviation", np.std(wa_sizes_kb), "median", np.median(wa_sizes_kb), np.quantile(wa_sizes_kb, [0, 0.25, 0.5, 0.75, 1]))
        print("pwa stats min", data[data['size'] == min(data['size'])]['website'] + " " + str(min(wa_sizes_kb)))
        get_latex_stats(wa_sizes_kb)
        print("test mean", np.median(wa_sizes_kb))
        low, high = 0, int(np.ceil(wa_sizes_kb.max()))
        bins = np.linspace(low, high, 20000)
        size_threshold = 80000
        end = -1
        while bins[end] > size_threshold:
            end -= 1
        fig, ax = plt.subplots(figsize=(8,8))

        bins = np.linspace(low, high, 10000)

        bigger, smaller = 50000, 1000000
        print(data[data['size'] > size_threshold][['website', 'size']])
        bigger_smaller_than = wa_sizes_kb[wa_sizes_kb >= bigger]
        bigger_smaller_than = bigger_smaller_than[wa_sizes_kb <= smaller]

        clipped = np.clip(wa_sizes_kb, 0, size_threshold)

        bin_count = 60
        plt.boxplot(clipped)
        plt.xlabel("Size")
        frame1 = plt.gca()
        frame1.axes.xaxis.set_ticklabels([])
        plt.ylabel("kB")
        plt.savefig(output_path + "wa_size" + file_add + ".pdf")
        plt.savefig(output_path + "wa_size" + file_add + ".png")

        plt.close()

        plt.boxplot(wa_sizes_kb, vert=True)
        plt.ylim([-1000, 20000])
        plt.xlabel("Size")
        frame1 = plt.gca()
        frame1.axes.xaxis.set_ticklabels([])
        plt.ylabel("kB")

        plt.savefig(output_path + "wa_size_zoomed" + file_add + ".pdf")
        plt.savefig(output_path + "wa_size_zoomed" + file_add + ".png")

        plt.close()

    loc = True
    fig, ax = plt.subplots(figsize=(8,8))
    if loc:
        def get_hist(col_name, threshold, bin_count, do_clip=False):
            print(np.unique(data[col_name]))
            print("pwa stats " + col_name + " avg " + str(np.mean(data[col_name])) + " standard deviation " + str(np.std(data[col_name])) + " median " + str(np.median(data[col_name])) + str(np.quantile(data[col_name], [0, 0.25, 0.5, 0.75, 1])))
            print("pwa stats max", col_name, data[data[col_name] == max(data[col_name])]['website'] + " " + str(max(data[col_name])))
            print("pwa stats min", col_name, data[data[col_name] == min(data[col_name])]['website'] + " " + "min val " + str(min(data[col_name])), "\nmin amount sites", len(data[data[col_name] == min(data[col_name])]))
            print("pwa stats 0", lang, data[data[col_name] == 0])

            bigger, smaller = 0, 20000
            print("bigger than thresh", threshold, data[data[col_name] > threshold][['website', col_name]])
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

        summary_mean, summary_sd, summary_min, summary_25, summary_median, summary_75, summary_max = [], [], [], [], [], [], []
        for lang in ["html", "css", "js"]:
            data[lang] = data[lang].astype(int)
            
            threshold = 300000
            clipped = np.clip(data[lang], 0, threshold)
            summary_mean.append(str(int(np.round(np.mean(data[lang])))))
            summary_sd.append(str(int(np.round(np.std(data[lang])))))
            summary_min.append(str(int(np.round(min(data[lang])))))
            summary_25.append(str(int(np.round(np.quantile(data[lang], 0.25)))))
            summary_median.append(str(int(np.round(np.median(data[lang])))))
            summary_75.append(str(int(np.round(np.quantile(data[lang], 0.75)))))
            summary_max.append(str(int(np.round(max(data[lang])))))

            color = "grey"
            if lang == "css":
                color = "blue"
            elif lang == "js":
                color = "red"
            colors.append(color)
            labels.append(lang.upper())
            all_data.append(clipped)
    
        print("\\textbf{Mean} & "," & ".join([str(x) for x in summary_mean]), "\\\\ \hline")
        print("\\textbf{Standard deviation} & ", " & ".join([str(x) for x in summary_sd]), "\\\\ \hline")
        print("\\textbf{Minimum} & ", " & ".join([str(x) for x in summary_min]), "\\\\ \hline")
        print("\\textbf{25th-percentile} & ", " & ".join([str(x) for x in summary_25]), "\\\\ \hline")
        print("\\textbf{Median} & ", " & ".join([str(x) for x in summary_median]), "\\\\ \hline")
        print("\\textbf{75th-percentile} & ", " & ".join([str(x) for x in summary_75]), "\\\\ \hline")
        print("\\textbf{Maximum} & ", " & ".join([str(x) for x in summary_max]), "\\\\ \hline")

        bin_count = 20
        ax.hist(all_data, bins=bin_count, color=colors, label=labels)
        plt.legend()

        new_xticks = ax.get_xticks() / 10 ** power
        new_xticks = [int(x) for x in new_xticks]
        plt.xticks(np.linspace(0, 300000, bin_count + 1) - 7500, [int(x / 10 ** power) for x in np.linspace(0, 300000, bin_count + 1)])

        plt.xlabel(f"Lines of code (x10$^{power}$)")
        plt.ylabel(f"Occurrences")            
        plt.savefig(output_path +  "all_languages_wa" + file_add + ".pdf")
        plt.savefig(output_path +  "all_languages_wa" + file_add + ".png")

        plt.close()

def get_audit_results(data, name):
    output_path = os.getcwd() + "/results/"
    print(name, data.keys())
    plt.close()

    colors = ["grey", "blue", "red", "orange", "green", "purple"]

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
        all_keys.append(key)

    print("\\textbf{Mean} & "," & ".join([str(x) for x in avgs]), "\\\\ \hline")
    print("\\textbf{Standard deviation} & ", " & ".join([str(x) for x in sds]), "\\\\ \hline")
    print("\\textbf{Minimum} & ", " & ".join([str(x) for x in mins]), "\\\\ \hline")
    print("\\textbf{25th-percentile} & ", " & ".join([str(x) for x in _25th]), "\\\\ \hline")
    print("\\textbf{Median} & ", " & ".join([str(x) for x in medians]), "\\\\ \hline")
    print("\\textbf{75th-percentile} & ", " & ".join([str(x) for x in _75th]), "\\\\ \hline")
    print("\\textbf{Maximum} & ", " & ".join([str(x) for x in maxs]), "\\\\ \hline")
    plt.hist(all_data, bins=my_bins, color=colors[:len(all_data)], label=all_keys, alpha=1, stacked=True, density=False)
    plt.legend()

    if name == "ylt":
        locs, labels = plt.xticks()
        labels = locs

        print("locs", locs, "labels", labels)
        plt.xticks(locs - 0.5, [int(x) for x in labels])
        plt.xlim([-105, 105])

        plt.legend(loc="upper left")
        plt.savefig(output_path + name + "_all" + ".pdf")
        plt.savefig(output_path + name + "_all" + ".png")

        plt.xlim([80, 102])
        plt.xticks(np.linspace(80, 100, 11) - 0.5, [int(x) for x in np.linspace(80, 100, 11)])
        plt.hist(all_data, bins=my_bins, color=colors[:len(all_data)], label=all_keys, alpha=1, stacked=True, density=False)
        plt.savefig(output_path + name + "_all_zoomed" + ".pdf")
        plt.savefig(output_path + name + "_all_zoomed" + ".png")

    else:
        plt.savefig(output_path + name + "_all" + ".pdf")
        plt.savefig(output_path + name + "_all" + ".png")

    plt.close()

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
        print(key, sum(data[key]))
        if sum(data[key]) < 100 and sum(data[key]) > 0:
            print(key, "between 100 and 0")
            print(data[data[key] == 1]['website'])
    plt.close()
    rcParams.update({'figure.autolayout': True})
    sorted_indexes = np.argsort(ys)
    xs_sorted, ys_sorted = [], []
    for i in sorted_indexes:
        xs_sorted.append(xs[i])
        ys_sorted.append(ys[i])
    print(name, xs_sorted, ys_sorted)
    
    print(sorted_indexes)

    plt.barh(xs_sorted, ys_sorted, color="grey")
    plt.xlabel("Occurrences")
    plt.ylabel(name)
    plt.savefig(output_path + name + ".pdf")
    plt.savefig(output_path + name + ".png")


    print(ys)

def get_sw_results(data, non_duplicate_sites):
    output_path = os.getcwd() + "/results/"
    if not os.path.exists(output_path):
        os.mkdir(output_path)
    keys_lists = ['events']
    total = {}
    processed = 0
    output_folder = os.getcwd() + "/seperate_data/"

    data = data.drop_duplicates(subset=['website'], keep="last")
    data['size'] = data['size'] / 1000
    print("data len", len(data))

    sw_size = True
    if sw_size:

        print("sw stats size avg " + str(np.mean(data["size"])) + " standard deviation " + str(np.std(data['size'])) + " median " + str(np.median(data['size'])) + " " + str(np.quantile(data['size'], [0, 0.25, 0.5, 0.75, 1])))
        print("sw stats max", data[data['size'] == max(data['size'])]['website'] + " " + str(max(data['size'])))
        print("sw stats min", data[data['size'] == min(data['size'])]['website'] + " " + str(min(data['size'])), "\nsw stats min amount sites", len(data[data['size'] == min(data['size'])]))
    
        sw_sizes_kb = np.array(data['size'])
        low, high = 0, int(np.ceil(sw_sizes_kb.max()))
        bins = np.linspace(low, high, 20000)
        get_latex_stats(sw_sizes_kb)

        size_threshold = 500
        end = -1
        while bins[end] > size_threshold:
            end -= 1

        fig, ax = plt.subplots(figsize=(8,8))

        bigger, smaller = 200, 100000
        print(data[data['size'] > size_threshold][['website', 'size']])
        clipped = np.clip(sw_sizes_kb, 0, size_threshold)

        bin_count = 500
        hist_values, edges = np.histogram(clipped, bins=bin_count, density=False)

        log = ""
        if log:
            ax.set_yscale('log')

        plt.plot(edges[:-1], hist_values, color="grey")
        plt.xlabel("Size (kB)")
        plt.ylabel("Occurrences")
        
        plt.savefig(output_path + "sw_size" + log + ".pdf")
        plt.savefig(output_path + "sw_size" + log + ".png")

        edges = []
        hist_values = []

        plt.close()

    sw_ccns = True
    if sw_ccns:
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

        plt.yticks([0, 200000, 400000, 600000, 800000], [0, 20, 40, 60, 80])
        x_ticks_loc = [x for x in range(-2, 22, 2)]
        plt.xticks(x_ticks_loc, x_ticks_loc[:-1] + ["20+"])
        plt.xlim([-1, 21])
        plt.bar(unique, counts, color="grey")
        plt.xlabel("Cyclomatic complexity")
        plt.ylabel(f'Occurrences ($x10^{4}$)')

        plt.savefig(output_path + "ccns" + ".pdf")
        plt.savefig(output_path + "ccns" + ".png")

        plt.close()

    events = True
    if events:
        flattened_events = []
        for event_list in data["events"]:
            if len(event_list) > 0:
                event_list = event_list.split(",")
                for event in event_list:
                    event = event.replace("'", "").replace('"', "").replace("[", "").replace("]", "").replace(" ", "")
                    if event:
                        flattened_events.append(event)

        print("sw stats events avg", stats.mode(flattened_events, nan_policy="omit"))

        rcParams.update({'figure.autolayout': True})
        unique, counts = np.unique(flattened_events, return_counts=True)
        print("events", unique, counts)
        print(unique[:10])
        print(len(unique), len(counts))
        plt.gca().invert_yaxis()
        sorted_indexes = np.argsort(counts)[::-1]
        
        plt.barh(unique[sorted_indexes], counts[sorted_indexes], color="grey")

        plt.xlabel("Occurrences")
        plt.ylabel("Event")
        plt.savefig(output_path + "events" + ".pdf")
        plt.savefig(output_path + "events" + ".png")

        plt.close()

    loc = True
    if loc:
        print("sw stats loc avg " + str(np.mean(data["loc"])) + " standard deviation " + str(np.std(data['loc'])) + " median " + str(np.median(data['loc'])) + " " + str(np.quantile(data['loc'], [0, 0.25, 0.5, 0.75, 1])))
        print("sw stats max", data[data['loc'] == max(data['loc'])]['website'] + " " + str(max(data['loc'])))

        print("sw stats loc with size 0", data[data['loc'] == 0]['website'])

        print("high", data[data['loc'] >= 50000][['website', 'loc']])
        threshold = 12500

        bigger, smaller = 0, 20000
        print(data[data['loc'] > threshold][['website', 'loc']])
        bigger_smaller_than = data['loc'][data['loc'] >= bigger]
        bigger_smaller_than = bigger_smaller_than[data['loc'] <= smaller]
        print('loc', "amount between", bigger, "and", smaller, "than:", len(bigger_smaller_than), "=", len(bigger_smaller_than) / len(data['loc']) * 100, "%")

        clipped = np.clip(data['loc'], 0, threshold)

        bin_count = 1000
        hist_values, edges = np.histogram(clipped, bins=bin_count, density=False)
        fig, ax = plt.subplots(figsize=(8,8))
        log = "_log"
        log = ""
        if log:
            ax.set_yscale('log')

        plt.xlim([0, edges[-2]])
        plt.xticks([0, 2000, 4000, 6000, 8000, 10000], [0, 2, 4, 6, 8, 10])

        plt.hist(clipped, bins=bin_count, color="grey")
        plt.xlabel("Lines of code (x10$^{3})$")
        plt.ylabel("Occurrences")
        
        plt.savefig(output_path + "sw_loc" + log + ".pdf")
        plt.savefig(output_path + "sw_loc" + log + ".png")

        plt.close()

def filter_results_file(filtered_websites, results_file_path, sep=";", output_path="/CSVs/filtered_data.csv"):
    with open(results_file_path, "r") as f:
        c = []
        filtered_rows = []

        for l in f:
            l = l.strip()

            if len(filtered_rows) == 0:
                filtered_rows.append(l)
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

if __name__ == "__main__":

    file_interactor = FileInteractor()
    pwa_blacklist = []
    with open(os.getcwd() + "/pwa_blacklist.txt", "r") as f:
        for l in f:
            pwa_blacklist.append(l.strip())

    wa_data = pd.read_csv(os.getcwd() + "/CSVs/final_pwa.csv", sep=";")

    sw_data = pd.read_csv(os.getcwd() + "/CSVs/final_sw.csv", sep=";")
    sw_data = sw_data.drop_duplicates(subset=['website'])
    print("pwa data len", len(wa_data), "sw data len", len(sw_data))
    set_sws = file_interactor.load_object("set_sws")

    features_data = pd.read_csv(os.getcwd() + "/CSVs/final_features.csv", sep=";")
    manifest_data = pd.read_csv(os.getcwd() + "/CSVs/final_manifest.csv", sep=";")

    ylt_data = pd.read_csv(os.getcwd() + "/CSVs/final_ylt.csv", sep=";")
    lighthouse_data = pd.read_csv(os.getcwd() + "/CSVs/final_lighthouse.csv", sep=";")
    get_sw_results(sw_data, list(set_sws))
    get_pwa_results(wa_data, pwa_blacklist)
    get_json_results(features_data, "Feature")
    get_json_results(manifest_data, "Manifest key")
    get_audit_results(ylt_data, "ylt")
    get_audit_results(lighthouse_data, "Lighthouse")