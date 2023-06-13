from time import sleep
import requests
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
def login():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, slow_mo=50)
        page = browser.new_page()
        page.goto('https://sigaa.unb.br/sigaa/logar.do?dispatch=logOff')
        #localiza e preenche o login
        page.locator('//*[@id="conteudo"]/div[4]/form/table/tbody/tr[1]/td/input').click()
        page.locator('//*[@id="conteudo"]/div[4]/form/table/tbody/tr[1]/td/input').fill("170121267")
        #localiza e preenche a senha
        page.locator('//*[@id="conteudo"]/div[4]/form/table/tbody/tr[2]/td/input').click()
        page.locator('//*[@id="conteudo"]/div[4]/form/table/tbody/tr[2]/td/input').fill("Naoseind99")
        #clica no botão de login
        page.click('//*[@id="conteudo"]/div[4]/form/table/tfoot/tr/td/input')


        #Navegando ate os cursos
        page.click('//*[@id="menu_form_menu_discente_j_id_jsp_340461267_98_menu"]/table/tbody/tr/td[1]/span[2]')
        page.click('//*[@id="cmSubMenuID1"]/table/tbody/tr[18]/td[2]')
        page.click('//*[@id="cmSubMenuID6"]/table/tbody/tr[3]/td[2]')

        #Selecionando os cursos 
        page.click('//*[@id="busca:curso"]')
        for i in range(60):
            page.keyboard.press('ArrowDown')
        page.keyboard.press('Enter')
        page.click('//*[@id="busca:matriz"]')
        page.keyboard.press('ArrowDown')
        page.click
        page.click('//*[@id="busca"]/table/tfoot/tr/td/input[1]')
        page.click('//*[@id="resultado:relatorio"]/img')
        
        #extração de informações
        periods = page.locator('#relatorio > table').click
        #relatorio > table > tbody > tr:nth-child(1) > th
        print(periods)


login()   

