from time import sleep
import requests
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup

url = 'https://sigaa.unb.br/sigaa/graduacao/curriculo/lista.jsf'
html = requests.get(url)
print(html.text)