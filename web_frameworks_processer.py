import os

def process_web_frameworks():
    input_folder = os.getcwd() + "/../atbswp/whatrunsoutput/"
    output_file = open(os.getcwd() + "/CSVs/web_frameworks.csv", "w")
    frameworks = []
    for input_file in os.listdir(input_folder):
        site_frameworks = [input_file]
        for l in open(input_folder + input_file):
            l = l.strip().lower()
            if l and "what runs" not in l:
                site_frameworks.append(l)
        frameworks.append(site_frameworks)
        if len(site_frameworks) > 1:
            output_file.write(", ".join(site_frameworks) + "\n")
        else:
            print(input_file, "did not have any frameworks")
    
    frequent_frameworks = {}
    framework_amount = 0
    for i in range(len(frameworks)):
        framework_amount += len(frameworks[i])
        for j in range(len(frameworks)):
            if i < j:
                for framework in frameworks[i]:
                    if framework in frameworks[j]:
                        if framework in frequent_frameworks:
                            frequent_frameworks[framework] += 1
                        else:
                            frequent_frameworks[framework] = 1
    print(frequent_frameworks, sum(frequent_frameworks.values()), framework_amount)

process_web_frameworks()