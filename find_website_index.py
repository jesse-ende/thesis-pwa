import os
import sys

count = 0
with open(os.getcwd() + "/top-1m.csv") as f:
    for l in f:
        if sys.argv[1] in l:
            print(count)
        count += 1