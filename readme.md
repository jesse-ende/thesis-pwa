# PWA thesis

Hi! This is the source code repository for my thesis. The data to produce the results is in the CSVs folder. The 'results.py' script is used to produce the plots and summary statistics.

The 'SWIdentifier.js' can identify SWs in a bulk of URLs. The bulk of URLs that was used comes from the Tranco list. The identified SWs are processed with the 'post_processor.py'. In order to make the post processor work, several tools and packages are needed:

CLOC: https://github.com/AlDanial/cloc
Lizard: https://github.com/terryyin/lizard

Python packages:
validators: https://pypi.org/project/validators/
tldextract: https://pypi.org/project/tldextract/
jsbeautifier: https://pypi.org/project/jsbeautifier/
matplotlib: https://pypi.org/project/matplotlib/

Node packages:
puppeteer: https://github.com/puppeteer/puppeteer
puppeteer-cluster: https://github.com/thomasdondorf/puppeteer-cluster

Audit tools:
Yellow Lab Tools: https://github.com/YellowLabTools/YellowLabTools (use nvm 12.18.3 to run)
Lighthouse: https://github.com/GoogleChrome/lighthouse
