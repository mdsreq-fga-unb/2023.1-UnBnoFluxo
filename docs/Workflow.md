## Workflow
  Um workflow é uma rotina de testes (jobs) que é ativada a partir de alguma ação (por exemplo: um commit) e executa um passo-a-passo (steps) que validará o funcionamento de uma determinada funcionalidade.
  Para este projeto, a equipe FluxoSquad irá utilizar um workflow para build, com testes unitários e testes de integração, que serão acionados a cada commit nas branches dev e main. Como o projeto será desenvolvido em React e Java, a seguinte estrutura de workflow será seguida:
  
1 - Será feito checkout do código;

2 - Serão configurados Node.js e Java para que os arquivos sejam corretamente compilados e executados;

3 - Serão instaladas as dependências (bibliotecas e frameworks) necessárias para o projeto;

4 - Serão executados testes unitários e de integração;

5 - O código será compilado e executado;

6 - Será feito o deploy da aplicação em um ambiente de testes a ser definido;

7 - Serão feitas alterações e correções conforme necessário, a partir do resultado do workflow.



