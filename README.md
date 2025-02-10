#### Testes de UI (Interface) com o Cypress 

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

Foram realizados screenshots de todos os testes e um video durante a execução foi gravado.
O formulario para o teste esta na pasta fixtures o arquivo formularioTeste.html
Utilizei um servidor local simples:
npm install -g http-server
e iniciei o seridor com o comando:
http-server

O teste esta em cypress/e2e/gui/cadastroCamposObrigatorios.cy.js


#### Testes de API com o Postman

Nesse teste foi utilizada a API mock disponibilizada no desafio: 
https://jsonplaceholder.typicode.com/users




# Tempo de resposta → A API consegue responder rapidamente sob carga?

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


# Erros de requisição → Existem falhas quando muitos usuários acessam ao mesmo tempo?

Erro Total: 0 erros (Taxa de erro 0.0%)
A API se comportou muito bem no que diz respeito à taxa de erro, sem registrar falhas durante o teste. Isso é um bom indicativo de que a aplicação é estável e robusta sob a carga de 100 requisições simultâneas.


# Uso de CPU/memória → O sistema se mantém estável?

Análise de CPU e Memória: Durante o teste, é importante monitorar o uso de CPU, memória e disco no servidor. Se o servidor estiver com alto uso de CPU ou memória, isso pode afetar o tempo de resposta, especialmente quando o número de requisições simultâneas aumenta.


# Conclusões
Performance Geral: A API se comportou bem em termos de tempos de resposta (média de 132 ms) e não apresentou erros, o que é um indicativo positivo de que a aplicação é estável sob carga.
Ajustes Necessários: A principal área de melhoria seria a redução dos picos de latência (tempo máximo de 1231 ms). Investigar os recursos do servidor, otimizar as consultas ao banco de dados e melhorar o cache pode ajudar a melhorar esses tempos.
Escalabilidade: Caso o tráfego da API aumente, será importante garantir que a infraestrutura seja capaz de escalar horizontalmente e suportar um número maior de requisições simultâneas.
O teste indica que a API pode lidar bem com uma carga moderada (100 requisições simultâneas), mas com ajustes na infraestrutura e otimizações no código, pode-se melhorar a capacidade de resposta em cenários de maior carga.