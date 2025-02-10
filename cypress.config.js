const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.guiademoteis.com.br/distrito-federal.com.br',
    cadastroUrl: 'https://www.guiademoteis.com.br/distrito-federal.com.br/cadastro',
    cadastroLocal: 'localhost:/workspaces/testeGuiaMoteis/formularioTeste.html',
       env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})