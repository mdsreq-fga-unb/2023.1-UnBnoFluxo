from time import sleep
import json
import re
from playwright.sync_api import sync_playwright

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=False, slow_mo=50)
    page = browser.new_page()
    page.goto('https://sigaa.unb.br/sigaa/public/curso/lista.jsf?nivel=G&aba=p-graduacao')
    page.click('//*[@id="formListagemCursos"]/table/tbody/tr[90]/td[7]/a')
    page.click('//*[@id="menu"]/ul/li[2]/span')
    page.click('//*[@id="menu"]/ul/li[2]/div/ul/li[1]/a')
    page.click('//*[@id="table_lt"]/tbody/tr[2]/td[3]/a[1]/img')
    page.click(f'//*[@id="tabs-semestres"]/ul/li[3]/a')
    page.click(f'//*[@id="tabs-semestres"]/ul/li[3]/a/em')
    periods = page.locator("//table[contains(@class,'subFormulario')]").all()
    courses = []
    for index, period in enumerate(periods):
        period_index = {"period": index}
        disciplines = []
        table_rows = period.locator('tr').all()
        for table_row in table_rows:
            formated_disciplines = table_row.inner_text().strip()
            parsed_disciplines = re.sub("\s+", " ", formated_disciplines)
            disciplines.append(parsed_disciplines)
            print(table_row.inner_text())
        period_index['disciplines'] = disciplines 
        courses.append(period_index)
    # //*[contains(text(),'Matriz Curricular: ')]/parent::*/td nome do curso
    with open('backend/scrapping/courses/eletronica.json', 'w') as json_file:
        json.dump(courses, json_file, ensure_ascii = False, indent = 2) 
    sleep(5)
   
        