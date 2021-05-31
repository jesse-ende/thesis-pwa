import os

import jsbeautifier

def beautify_sws():
    rootdir = os.getcwd() + "/first_sws/SWsbrowser/"

    for website in os.listdir(rootdir):
        total_beautified_js = ""

        for subdir, _, files in os.walk(rootdir + website):
            for file in files:
                if "extra_js" not in file and "beautified" not in file and file != "requests" and not file.endswith(".json") and "all_js" not in file:
                    print("file", subdir + "/" + file)
                    total_beautified_js += jsbeautifier.beautify_file(subdir + "/" + file)
                
                # if "beautified" in file:
                #     os.remove(subdir + "/" + file)
       
        beautified_file = open(rootdir + website + "/" + "beautified.js", "w")
        beautified_file.write(total_beautified_js)
        beautified_file.close()

beautify_sws()