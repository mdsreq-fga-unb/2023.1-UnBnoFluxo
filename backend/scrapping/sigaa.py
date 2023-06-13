        url = 'https://sigaa.unb.br/sigaa/graduacao/curriculo/lista.jsf'
        response = requests.get(url)
        content = response.content

        site = BeautifulSoup(content, 'html.parser')
        period = site.select('#relatorio > table > tbody > tr:nth-child(20) > td > table > tbody > tr:nth-child(148)')
        period_name = period.find('td').get_text()
        print(f'{period_name}')