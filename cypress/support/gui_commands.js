Cypress.Commands.add('acessarTelaDeCadastro', () => {
  cy.visit('cadastroUrl');
  cy.get('#error > p > a').click();
  cy.get('.primeiraVezGuia > .md-close').click(); 
  cy.get('#showModal').click(); 
  cy.get('.loginClick > p > a').click(); 
});
