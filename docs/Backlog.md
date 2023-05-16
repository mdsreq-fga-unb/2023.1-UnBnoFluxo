# Backlog

## Personas
Uma persona é o personagem fictício da user story que representa o usuário ideal do produto. Todas as histórias são escritas a partir da perspectiva de um tipo de usuário.

- **Estudante:** é o usuário principal da aplicação, refere-se ao estudante da Universidade de Brasilia que deseja fazer o seu planejamento de fluxo.


## Requisitos funcionais
Um requisito funcional é uma especificação de uma funcionalidade ou comportamento que um sistema ou software deve ser capaz de realizar. No caso do UnBnoFluxo esses requisitos serão modelados usando o modelo de Histórias de Usuário (US), Épicos (EP) e Temas (TM).


<table>
    <thead>
        <tr>
            <th>Tema</th>
            <th>Épico</th>
            <th>User Story</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="6">TM01 - Gerenciamento de Fluxogramas</td>
            <td rowspan="3">EP01 - Criação e Edição de Fluxogramas</td>
            <td>US02 - Upload de fluxograma</td>
        </tr>
        <tr>
            <td>US03 - Iniciar fluxograma em branco</td>
        </tr>
        <tr>
            <td>US04 - Mesclar fluxograma</td>
        </tr>
        <tr>
            <td rowspan="3">EP02 - Visualização e Organização de Fluxogramas</td>
            <td>US01 - Disponibilizar fluxograma padrão</td>
        </tr>
        <tr>
            <td>US05 - Reordenar componentes curriculares</td>
        </tr>
        <tr>
            <td>US11 - Download de fluxograma</td>
        </tr>
        <tr>
            <td rowspan="4">TM02 - Informações e Acompanhamento</td>
            <td rowspan="2">EP03 - Visualização e Acompanhamento de Disciplinas</td>
            <td>US06 - Visualizar requisitos</td>
        </tr>
        <tr>
            <td>US07 - Visualizar obrigatoriedade de componentes</td>
        </tr>
        <tr>
            <td rowspan="2">EP04 - Acompanhamento e Progresso do Curso</td>
            <td>US08 - Visualizar carga horária</td>
        </tr>
        <tr>
            <td>US15 - Exibir percentual do curso</td>
        </tr>
        <tr>
            <td rowspan="5">TM03 - Gestão de Componentes Curriculares</td>
            <td rowspan="2">EP05 - Criação e Edição de Componentes Curriculares</td>
            <td>US09 - Criar componente curricular</td>
        </tr>
        <tr>
            <td>US10 - Editar componente curricular</td>
        </tr>
        <tr>
            <td rowspan="3">EP06 - Organização e Classificação de Componentes Curriculares</td>
            <td>US12 - Pesquisar componente curricular</td>
        </tr>
        <tr>
            <td>US13 - Marcar matéria como concluída</td>
        </tr>
        <tr>
            <td>US14 - Apelidar componente curricular</td>
        </tr>
    </tbody>
</table>


## Priorização de Histórias de Usuário
**Obs:** A *Pontuação* (pts) é calculado com base nos critérios de viabilidade (v), complexidade (c) e valor de negócio (vn) da US referida. É atribuido para cada critério valores de 1 a 3 e realizada a equação:

```
pts =  v + c + vn
```

| Número | Nome                                      | Declaração                                                                                                                                                                                                      | Valor de negócio | Viabilidade | Complexidade | Pontuação |
| :----: | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------: | :---------: | :----------: | :-------: |
|  US04  | Mesclar fluxograma                        | Como estudante quero poder mesclar o fluxograma de diferentes cursos para o caso de eu estiver fazendo mudança de curso ou dupla graduação                                                                      |        3         |      3      |      3       |     9     |
|  US11  | Download de fluxograma                    | Como estudante quero poder fazer download do fluxograma que montei para não perder meu progresso                                                                                                                |        3         |      3      |      3       |     9     |
|  US06  | Visualizar requisitos                     | Como estudante quero poder visualizar a cadeia de requisitos de um determinado componente curricular para poder entender melhor qual preciso cursar primeiro                                                    |        3         |      3      |      3       |     9     |
|  US02  | Upload de fluxograma                      | Como estudante quero poder fazer upload de um fluxograma que já modifiquei para não perder meu progresso anterior                                                                                               |        3         |      2      |      3       |     8     |
|  US05  | Reordernar componentes curriculares       | Como estudante quero poder reorganizar os componentes curriculares movendo-os de um período para outro para ajudar meu planejamento futuro                                                                      |        3         |      2      |      3       |     8     |
|  US08  | Visualizar carga horária do período       | Como estudante quero poder visualizar a soma da carga horária de determinado período para saber se estou dentro dos limites de carga horária por período da faculdade                                      |        3         |      3      |      2       |     8     |
|  US07  | Visualizar obrigatoriedade de componentes | Como estudante quero poder visualizar o que é um componente curricular optativo ou obrigatório para me ajudar na priorização dos mesmos                                                                         |        3         |      3      |      2       |     8     |
|  US12  | Pesquisar componente curricular           | Como estudante quero poder pesquisar por um componente curricular em específico para adicioná-lo facilmente em meu fluxograma                                                                                   |        3         |      3      |      2       |     8     |
|  US13  | Marcar materia como reprovada             | Como estudante quero poder marcar uma componente curricular como "reprovado" para que saber quais componentes curriculares ainda preciso cursar                                                                 |        3         |      3      |      2       |     8     |
|  US13  | Marcar materia como concluida             | Como estudante quero poder marcar uma componente curricular como "concluído" para que ele seja contabilizado na carga horária dos componentes curriculares que ja cursei                                        |        3         |      3      |      2       |     8     |
|  US09  | Criar componente curricular               | Como estudante quero poder criar um componente curricular para poder contabilizar a carga horária de componentes como de módulo livre, monitorias e EJs, que não aparecem no fluxograma padrão da universidade. |        3         |      3      |      1       |     7     |
|  US10  | Editar componente curricular              | Como estudante quero poder alterar dados de um componente curricular em caso de módulo livre, para que possa descrever e contabilizar sua carga horária                                                         |        3         |      3      |      1       |     7     |
|  US15  | Adicionar apelido para materia            | Como estudante quero poder apelidar o componente curricular com abreviaturas ou nomes comuns entre os estudantes para melhorar minha visualização                                                               |        3         |      3      |      1       |     7     |
|  US03  | Iniciar fluxograma em branco              | Como estudante quero poder iniciar um fluxograma em branco para o caso do meu fluxograma não estar disponível                                                                                                   |        2         |      2      |      2       |     6     |
|  US01  | Disponibilizar fluxograma padrão          | Como estudante quero ter a minha disposição o fluxograma padrão da universidade já montado, para não precisar fazer esse trabalho manualmente                                                                   |        1         |      3      |      1       |     4     |
|  US16  | Exibir percentual do curso                | Como estudante quero poder ver o percentual já concluído do curso para saber quanto já concluí e quanto ainda falta do curso                                                                                    |        1         |      2      |      1       |     4     |


## Requisitos não-funcionais
Um requisito não funcional é uma especificação de uma característica ou propriedade do sistema ou software que não esta diretamente relacionada à sua funcionalidade, como desempenho, segurança, usabilidade, entre outras.

| Número | Categoria       | Declaração                                                                                                                                                                                                                                                   |
| :----: | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  RNF1  | Implementação   | O produto deve ser uma aplicação web                                                                                                                                                                                                                         |
|  RNF2  | Usabilidade     | O produto deve ser responsivo a diferentes tamanhos de tela e dispositivos                                                                                                                                                                                   |
|  RNF3  | Implemetação    | O front-end do produto deve ser desenvolvido utilizando react                                                                                                                                                                                                |
|  RNF4  | Implementação   | O back-end do produto deve ser desenvolvido utilizando java                                                                                                                                                                                                  |
|  RNF5  | Usabilidade     | A interface deve ser organizada de forma clara (Clara é: título do menu/seção indicar exatamente o que há em seu conteúdo, por exemplo: uma seção com nome "Montar meu fluxo" indica uma página onde o usuário poderá organizar as disciplinas do seu fluxo) |
|  RNF6  | Suportabilidade | A aplicação deverá rodar nos browsers mais comumente utilizados (Chrome, Safari, Edge, Opera) em suas versões recentes                                                                                                                                       |
|  RNF7  | Confiabilidade  | O sistema deve apresentar uma taxa de erro de no máximo 5% durante a execução de ações                                                                                                                                                                       |
|  RNF8  | Desempenho      | O sistema deve apresentar um tempo médio de resposta de no máximo 1000ms                                                                                                                                                                                     |


## Definição de Preparado (DOR)
- Requisito está representado por uma User Story
- Possui critério de aceitação
- US é INVEST (Independent, Negotiable, Valuable, Estimable, Small and Testable)
- US de interface gráfica tem wireframe desenhado
- Item do backlog foi avaliado (porque é necessário? como beneficia o cliente?)
- USs estão ordenadas por valor de negócio
- Cabe na sprint


## Definição de Pronto (DOD)
- Passa nos critérios de aceitação?
- Atende aos Requisitos Não Funcionais?
- Entrega um incremento do produto?

## MVP1
| User Story                                       | Sprint |
| ------------------------------------------------ | :----: |
| [US01] Disponibilizar fluxograma padrão          |   5    |
| [US03] Iniciar fluxograma em branco              |   5    |
| [US04] Mesclar fluxograma                        |   6    |
| [US02] Upload de fluxograma                      |   6    |
| [US11] Download de fluxograma                    |   6    |
| [US07] Visualizar obrigatoriedade de componentes |   6    |

## MVP2
| User Story                                 | Sprint |
| ------------------------------------------ | :----: |
| [US10] Editar componente curricular        |   7    |
| [US09] Criar componente curricular         |   7    |
| [US05] Reordernar componentes curriculares |   7    |
| [US06] Visualizar requisitos               |   8    |
| [US08] Visualizar carga horária            |   8    |
| [US12] Pesquisar componente curricular     |   8    |


## Histórico de revisão
|   Data   | Versão | Descrição               | Autor              |
| :------: | :----: | ----------------------- | ------------------ |
| 01/05/23 |  1.0   | Criação do documento    | Ricardo e Vinicius |
| 08/05/23 |  1.1   | Proposta de MVP1 e MVP2 | Todos              |
| 10/05/23 |  1.2   | Priorização no backlog  | Ricardo e João     |
| 15/05/23 |  1.3   | Critérios de aceite e divisão de Temas, Épicos e USs  | Ricardo e Vinícius     |
