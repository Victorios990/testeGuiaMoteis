Cypress.Commands.add('acessarApiUrl', () => {
    cy.fixture('ambienteTestes').then(({ env: { apiUrl } }) => {
      Cypress.config('baseUrl', apiUrl);
      cy.log(`Base URL configurada: ${apiUrl}`);
    });
  });