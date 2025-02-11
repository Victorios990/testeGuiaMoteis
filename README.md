01. Testes de UI (Interface) com o Cypress 

Funcionalidade: Testes de Formulário de Cadastro

  Cenário: Enviar o formulário sem qualquer informação
    Dado que o usuário acessa a página de cadastro
    Quando ele envia o formulário sem preencher nenhum campo
    Então ele deve ver a mensagem "Preencha este campo" em todos os campos obrigatórios

  Cenário: Cadastrar o formulário apenas com o e-mail preenchido
    Dado que o usuário preenche apenas o campo de e-mail
    Quando ele envia o formulário
    Então ele deve ver a mensagem "Preencha este campo" nos campos de confirmação de e-mail e senha

  Cenário: E-mail preenchido com o e-mail sem domínio
    Dado que o usuário preenche o campo de e-mail com um e-mail inválido (sem domínio)
    Quando ele envia o formulário
    Então ele deve ver a mensagem "Este campo é obrigatório e deve ser um e-mail válido" no campo de e-mail

  Cenário: Cadastrar o formulário com o e-mail e confirmação de e-mail preenchidos
    Dado que o usuário preenche os campos de e-mail e confirmação de e-mail com valores diferentes
    Quando ele envia o formulário
    Então ele deve ver a mensagem "Os e-mails não coincidem" no campo de confirmação de e-mail
    E ele deve ver a mensagem "Preencha este campo" no campo de senha

  Cenário: Realizar todo o cadastro com uma senha fraca (menos de 6 caracteres)
    Dado que o usuário preenche o formulário com uma senha de 4 caracteres
    Quando ele envia o formulário
    Então ele deve ver a mensagem "A senha deve ter pelo menos 6 caracteres" no campo de senha

  Cenário: Preencher todo o formulário com as informações corretas
    Dado que o usuário preenche todos os campos corretamente
    Quando ele envia o formulário
    Então o cadastro deve ser realizado com sucesso e ele deve ver a mensagem "Cadastro realizado com sucesso"



Relatório de Testes Automatizados – Cadastro de Usuário

1. URL do Teste
O teste foi realizado utilizando a seguinte URL:
https://victorios990.github.io/testeGuiaMoteis/

2. Estrutura do Teste
Foi desenvolvida uma página simples de cadastro contendo campos obrigatórios para a realização dos testes. O arquivo principal da página de cadastro é o "index.html", localizado na raiz do repositório.

3. Localização dos Testes Automatizados
Os testes automatizados estão armazenados no seguinte diretório:
\testeGuiaMoteis\cypress\e2e\gui

Nesse diretório, há três arquivos de testes contendo o script das automações:

cadastroCamposObrigatorios.cy.js: Contém a automação do formulário de cadastro, garantindo que todos os campos obrigatórios sejam preenchidos corretamente, 
conforme solicitado no desafio.
cadastroUsuarioGuiaDeMoteis.cy.js e cadastroUsuariosNomesAleatorios.cy.js: Implementam uma automação de cadastro de usuário diretamente no site "Guia de Motéis".
4. Relatório de Bugs e Melhorias
O repositório também contém o documento "relatorioDeBugsMelhorias.pdf", onde foram registrados:

Bugs identificados durante o processo de cadastro.
Sugestões de melhorias para a experiência do usuário.
Capturas de tela como evidências dos problemas encontrados.
Este relatório tem como objetivo documentar as validações realizadas e fornecer insumos para futuras correções e aprimoramentos na aplicação.
Nas pasta "reports" estão as evidencias em video e screenshots das automações

###########################################################################################

2. Testes de API com o Postman

Nesse teste foi utilizada a API mock disponibilizada no desafio: 
https://jsonplaceholder.typicode.com/users
Foi gerado relatorio com a ferramenta de linha de comando newman
Na pasta newman tem o arquivo "relatorioPostmanNewman.html" detalha os resultados obtidos no teste de api com o postman.

Resumo do Relatório de Testes - Postman
Resumo Geral:

Iterações com falhas: 10
Total de requisições: 50
Scripts pré-requisição: 50
Scripts de teste: 100
Total de asserções: 159
Duração total: 2.4s
Dados recebidos: 6.13KB
Tempo médio de resposta: 384ms
Total de falhas: 9
Resultados por Tipo de Requisição:
GET - Retornar Lista
URL: https://jsonplaceholder.typicode.com/users
Média de resposta: 303ms
Média de tamanho: 5.51KB
Status: 200
Testes: 2 passaram, 1 falhou
Falha: O cabeçalho Content-Type esperado era application/json, mas recebeu application/json; charset=utf-8.
POST - Post Data
URL: https://jsonplaceholder.typicode.com/users
Média de resposta: 388ms
Média de tamanho: 444B
Status: 201
Testes: 1 passou, 4 falharam
Falhas:
Esperado código 400 para erro de campo obrigatório, mas recebeu 201.
Esperado erro ao enviar sem informações, mas recebeu 201.
Esperado erro quando e-mails não coincidirem, mas recebeu 201.
Esperado campo 'mensagem' na resposta, mas não encontrado.
POST - Simular Erro 400
URL: https://jsonplaceholder.typicode.com/users
Média de resposta: 228ms
Média de tamanho: 14B
Status: 201
Testes: 1 passou, 4 falharam
Falhas: (idênticas ao POST anterior)
PUT - Update Data
URL: https://postman-rest-api-learner.glitch.me//info?id=1
Média de resposta: 762ms
Média de tamanho: 120B
Status: 200
Testes: Todos passaram.
DELETE - Delete Data
URL: https://postman-rest-api-learner.glitch.me//info?id=1
Média de resposta: 242ms
Média de tamanho: 55B
Status: 200
Testes: Todos passaram.
Principais Problemas Identificados:
Falhas no retorno esperado de erros (códigos 400 não são retornados corretamente).
Respostas JSON não seguem o formato esperado (Content-Type diferente).
Campos esperados na resposta não estão presentes.
Próximos Passos:
Revisar o backend para garantir que os erros sejam tratados corretamente.
Ajustar os testes no Postman para validar melhor o Content-Type.
Verificar os dados retornados para garantir que os campos necessários estejam presentes.

###########################################################################################

3. Testes de Performance - Jmeter

Na pasta "jmeter/html" tem um arquivo chamado  "relatorioExecucaoJmeter.html", é o dashboard gerado em um dos testes.

Resumo das Estatísticas dos Testes
Total de Testes Executados: 100
Falhas: 0 (Taxa de erro: 0.00%)
Tempo Total de Execução: 132.96 segundos
Tempo Mínimo de Resposta: 58 ms
Tempo Máximo de Resposta: 1231 ms
Tempo Médio de Resposta: 295.85 ms
Tempo P95 (95% das requisições): 1229.93 ms
Requisições por Segundo: 3.34
Desvio Padrão do Tempo de Resposta: 22.75
Esses dados indicam que todos os testes passaram sem falhas, com tempos de resposta variando entre 58 ms e 1231 ms. O tempo médio de resposta foi de 295.85 ms, e 95% das requisições foram atendidas em até 1229.93 ms.

Tempo de resposta → A API consegue responder rapidamente sob carga?

Tempo médio de resposta de 132.96 ms está dentro de um padrão bom para APIs de média complexidade, especialmente se a API realizar operações simples de leitura de dados. Esse valor mostra que, em média, a API está respondendo rapidamente, o que é um indicativo de boa performance.
Tempo mínimo de resposta: 58 ms

O tempo mínimo de 58 ms é baixo e indicativo de que algumas requisições estão sendo processadas rapidamente.
Tempo máximo de resposta: 1231 ms

O tempo máximo de resposta de 1231 ms é uma anomalia, considerando que a maioria das requisições levou menos de 200 ms para ser processada. Esse valor pode ser um pico de latência ocasionado por um gargalo temporário no servidor ou rede.

O tempo médio de resposta de 132.96 ms está dentro de um padrão bom para APIs de média complexidade, especialmente se a API realizar operações simples de leitura de dados. Esse valor mostra que, em média, a API está respondendo rapidamente, o que é um indicativo de boa performance.
Tempo mínimo de resposta: 58 ms
O tempo mínimo de 58 ms é baixo e indicativo de que algumas requisições estão sendo processadas rapidamente.
Tempo máximo de resposta: 1231 ms
O tempo máximo de resposta de 1231 ms é uma anomalia, considerando que a maioria das requisições levou menos de 200 ms para ser processada. Esse valor pode ser um pico de latência ocasionado por um gargalo temporário no servidor ou rede.

Erros de requisição → Existem falhas quando muitos usuários acessam ao mesmo tempo?

Erro Total: 0 erros (Taxa de erro 0.0%)
A API se comportou muito bem no que diz respeito à taxa de erro, sem registrar falhas durante o teste. Isso é um bom indicativo de que a aplicação é estável e robusta sob a carga de 100 requisições simultâneas.

Uso de CPU/memória → O sistema se mantém estável?

Análise de CPU e Memória: Durante o teste, é importante monitorar o uso de CPU, memória e disco no servidor. Se o servidor estiver com alto uso de CPU ou memória, isso pode afetar o tempo de resposta, especialmente quando o número de requisições simultâneas aumenta.

Conclusões
Performance Geral: A API se comportou bem em termos de tempos de resposta (média de 132 ms) e não apresentou erros, o que é um indicativo positivo de que a aplicação é estável sob carga.
Ajustes Necessários: A principal área de melhoria seria a redução dos picos de latência (tempo máximo de 1231 ms). Investigar os recursos do servidor, otimizar as consultas ao banco de dados e melhorar o cache pode ajudar a melhorar esses tempos.
Escalabilidade: Caso o tráfego da API aumente, será importante garantir que a infraestrutura seja capaz de escalar horizontalmente e suportar um número maior de requisições simultâneas.
O teste indica que a API pode lidar bem com uma carga moderada (100 requisições simultâneas), mas com ajustes na infraestrutura e otimizações no código, pode-se melhorar a capacidade de resposta em cenários de maior carga.
