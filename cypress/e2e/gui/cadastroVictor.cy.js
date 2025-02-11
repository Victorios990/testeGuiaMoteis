import { faker } from '@faker-js/faker';
const randomName = faker.person.fullName();

describe('Realizar o meu cadastro de forma automatizada', () => {

    beforeEach(() => {
      cy.acessarTelaDeCadastro();
    });

    it('Cadastrar com todos os dados preenchidos e opçoes selecionadas (termo de uso, promoções e publicidade)', () => {  
        cy.get('#Nome').type(randomName);
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