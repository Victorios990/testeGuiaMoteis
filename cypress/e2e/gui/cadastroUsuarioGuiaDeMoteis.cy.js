describe('Teste para verificar os campos obrigatorios do Formulário de Cadastro', () => {

  beforeEach(() => {
    cy.acessarTelaDeCadastro();
  });

  it('Enviar todos os campos em branco', () => {
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });

  it('Cadastrar apenas o primeiro nome', () => {
    cy.get('#Nome').type('José');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });

  it('Cadastrar apenas o nome completo com numeros', () => {
    cy.get('#Nome').type('José Victor Conceição Laurentino de Almeida 2025');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });

  it('Cadastrar apenas o nome completo e o selecionar o sexo masculino', () => {
    cy.get('#Nome').type('José Victor Conceição Laurentino de Almeida');
    cy.get('#sexo-Masculino').click();
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });

  it('Cadastrar apenas o nome completo e o selecionar o sexo feminino', () => {
    cy.get('#Nome').type('Maria Bonita Teobaldina');
    cy.get('[for="sexo-Feminino"]').click();
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });

  it('Cadastrar apenas o campo Data de Nascimento com datas invalida - Um ano no futuro', () => {
    
    cy.get('#DataNascimento').type('09/02/2026');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.get('#qtip-2-content > .error').should('be.visible');
    cy.screenshot();
  });

  it('Cadastrar apenas o campo Data de Nascimento com datas invalida - 200 anos no passado', () => {
    cy.get('#DataNascimento').type('09/02/1825');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.get('#qtip-2-content > .error').should('be.visible');
    cy.screenshot();
  });
  
  it('Cadastrar apenas o e-mail valido', () => {
    cy.get('#Email').type('jose@jose');
    cy.get('#ConfEmail').type('jose@jose');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });

  it('Cadastrar apenas o e-mail invalido', () => {
    cy.get('#Email').type('jose@');
    cy.get('#ConfEmail').type('jose@');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });
  
  it('Cadastrar apenas o e-mail valido e o confirmar e-mail invalido', () => {
    cy.get('#Email').type('jose@jose');
    cy.get('#ConfEmail').type('jose@');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });
  
  it('Cadastrar apenas o e-mail valido e o confirmar e-mail invalido', () => {
    
    cy.get('#Email').type('jose@jose');
    cy.get('#ConfEmail').type('jose@');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });

  it('Cadastrar apenas uma senha fraca', () => {
    
    cy.get('#Senha').type('1234');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.screenshot();
  });

  it.only('Cadastrar com todos os dados preenchidos sem concordar com o termo de uso e politica de privacidade', () => {
    
    cy.get('#Nome').type('user_name');
    cy.get('#sexo-Masculino').click();
    cy.get('#DataNascimento').type('11/04/1990');
    cy.get('#Cep').type('73340-202');
    cy.get('#Email').type('user_email');
    cy.get('#ConfEmail').type('user_email');
    cy.get('#Senha').type('user_password');
    cy.get('.btCadastrar').should('be.visible').click();
    cy.get('.noty_text');
    cy.get('.noty_text').should('be.visible');
    cy.get('#qtip-0-content > .error').should('be.visible');
    cy.screenshot();
  });
});