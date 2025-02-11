Cypress.Commands.add('acessarTelaDeCadastro', () => {
  cy.viewport(1920, 1080);
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  cy.fixture('ambienteTestes').then(({ env: { baseUrl } }) => {
    cy.visit(baseUrl)
  });
  cy.get('#error > p > a').click();
  cy.get('.primeiraVezGuia > .md-close').click();
  cy.get('#showModal').click();
  cy.get('.loginClick > p > a').click();
});

Cypress.Commands.add('acessarCadastroLocal', () => {
  cy.viewport(1920, 1080);
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  cy.fixture('ambienteTestes').then(({ env: { cadastroLocal } }) => {
    cy.visit(cadastroLocal)
  });
  cy.get('#error > p > a').click();
  cy.get('.primeiraVezGuia > .md-close').click();
  cy.get('#showModal').click();
  cy.get('.loginClick > p > a').click();
});
