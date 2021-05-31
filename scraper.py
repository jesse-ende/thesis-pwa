import requests
from bs4 import BeautifulSoup
# import urllib
# import selenium as se
# from selenium import webdriver

# options = se.webdriver.ChromeOptions()
# options.add_argument('headless')

# driver = se.webdriver.Chrome(chrome_options=options)
site = "twitter.com/sw.js"
url = "https://" + site
js = requests.get(url)
print(BeautifulSoup(js.content).prettify())

# driver = webdriver.PhantomJS()
# driver.get(url)
# js = driver.source
# print(js)

# page = requests.get(url)
# soup = BeautifulSoup(urllib.urlopen(url).read())
# soup = BeautifulSoup(page.content, 'html.parser')
# print(soup.findAll("script"))
# navigator = soup.find(id="navigator")

# print(navigator)