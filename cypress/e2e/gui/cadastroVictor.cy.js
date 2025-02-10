describe('Realizar o meu cadastro de forma automatizada', () => {

    beforeEach(() => {
      cy.visit('cadastroUrl');
    });

    it('Cadastrar com todos os dados preenchidos e opçoes selecionadas (termo de uso, promoções e publicidade)', () => {
        cy.acessarTelaDeCadastro();
        cy.get('#Nome').type('Victor Almeida');
        cy.get('[for="sexo-Masculino"]').click();
        cy.get('#DataNascimento').type('11/04/1990');
        cy.get('#Cep').type('13456-456');
        cy.get('#Email').type('victor.laurentino90@gmail.com');
        cy.get('#ConfEmail').type('victor.laurentino90@gmail.com');
        cy.get('#Senha').type('*******');
        cy.get('#checkbox-descontos-email').click();
        cy.get('#checkbox-publicidade-email').click();
        cy.get('#checkbox-privacy').click();
        cy.get('.btCadastrar').should('be.visible').click();
        cy.screenshot();
    });

});