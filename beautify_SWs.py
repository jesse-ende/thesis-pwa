import os

import jsbeautifier

def beautify_sws(rootdir, diffdir):
    import guesslang
    guess = guesslang.Guess()
    diff_sites = []
    for website in os.listdir(diffdir):
        diff_sites.append(website)
    
    for website in os.listdir(rootdir):
        if website not in diff_sites:
            continue
        total_beautified_js = ""

        for subdir, _, files in os.walk(rootdir + website):
            for file in files:

                if "extra_js" not in file and "beautified" not in file and file != "requests" and not file.endswith(".json") and "all_js" not in file and "manifest" not in file and "emptySW" not in file:
                    # print("file", subdir + "/" + file, guess.language_name(open(subdir + "/" + file, "r").read()))
                    language = guess.language_name(open(subdir + "/" + file, "r").read())
                    if language != None:
                        print("language isnt none", language)
                        total_beautified_js += jsbeautifier.beautify_file(subdir + "/" + file)
                    else:
                        # print("file", subdir + "/" + file, language)
                        print("language is none", subdir + "/" + file)
                # if "beautified" in file:
                #     os.remove(subdir + "/" + file)
        if total_beautified_js != "":
            beautified_file = open(rootdir + website + "/" + "beautified.js", "w")
            beautified_file.write(total_beautified_js)
            beautified_file.close()

def delete_empty_beautified(rootdir, diffdir):
    for website in os.listdir(rootdir):
        beautied_path = rootdir + website + "/beautified.js"
        if os.path.exists(beautied_path):
            if os.stat(beautied_path).st_size == 0:
                print("deleting", beautied_path)
                os.remove(beautied_path)

beautify_sws(os.getcwd() + "/last_sws/", os.getcwd() + "/diff_2/")
# delete_empty_beautified(os.getcwd() + "/last_sws/", os.getcwd() + "/diff_2")