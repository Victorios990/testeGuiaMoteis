describe('Testes de Formulário de Cadastro', () => {

  beforeEach(() => {
    cy.acessarCadastroLocal();
  });
  it('Enviar o formulário sem qualquer informação', () => {
    cy.get('button').click();
    cy.get('#erroEmailObrigatorio');
    cy.screenshot();
  });

  it('Cadastrar o formulário apenas com o e-mail preenchido', () => {
    cy.get('#email').type('victor@teste.com');
    cy.get('button').click();
    cy.screenshot();
  });

  it('E-mail preenchido com o e-mail sem domínio', () => {
    cy.get('#email').type('victor@');
    cy.get('button').click();
    cy.screenshot();
  });

  it('Cadastrar o formulário com o e-mail e confirmação de e-mail preenchidos', () => {
    cy.get('#email').type('victor@teste.com');
    cy.get('#erroConfirmacaoEmailObrigatorio');
    cy.get('#confirmacaoEmail').type('victor@teste.com');
    cy.get('button').click();
    cy.screenshot();
  });

  it('Realizar todo o cadastro com uma senha fraca', () => {
    cy.get('#erroSenhaObrigatorio');
    cy.get('#senha').type('1234');
    cy.get('button').click();
    cy.screenshot();
  });

  it('Preencher todo o formulário com as informações corretas', () => {
    cy.get('#senha').type('123456');
    cy.get('button').click();
    cy.screenshot();
    cy.get('#mensagemSucesso');
    cy.screenshot();
  });
});