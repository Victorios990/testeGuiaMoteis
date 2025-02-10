it('Acessar a tela de cadastro', () => {
    cy.get('#error > p > a').click();
    cy.get('.primeiraVezGuia > .md-close').click();
    cy.get('#showModal').click();
    cy.get('.loginClick > p > a').click();
  });
