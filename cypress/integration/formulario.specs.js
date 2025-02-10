describe('Teste do formulário de cadastro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/formularioTeste.html');;
    });
  
    it('Deve exibir erro se os campos obrigatórios não forem preenchidos', () => {
      cy.get('button[type="submit"]').click();
      cy.get('#erroEmail').should('be.visible');
      cy.get('#erroConfirmacaoEmail').should('be.visible');
      cy.get('#erroSenha').should('be.visible');
    });
  
    it('Deve exibir erro se a senha for fraca', () => {
      cy.get('input[name="senha"]').type('12345');
      cy.get('button[type="submit"]').click();
      cy.get('#erroSenha').should('be.visible');
    });
  
    it('Deve exibir erro se os e-mails não coincidirem', () => {
      cy.get('input[name="email"]').type('teste@example.com');
      cy.get('input[name="confirmacaoEmail"]').type('diferente@example.com');
      cy.get('button[type="submit"]').click();
      cy.get('#erroConfirmacaoEmail').should('be.visible');
    });
  
    it('Deve enviar o formulário com dados corretos', () => {
      cy.get('input[name="email"]').type('teste@example.com');
      cy.get('input[name="confirmacaoEmail"]').type('teste@example.com');
      cy.get('input[name="senha"]').type('Senha123');
      cy.get('button[type="submit"]').click();
      cy.get('#mensagemSucesso').should('be.visible');
    });
  
  });
  