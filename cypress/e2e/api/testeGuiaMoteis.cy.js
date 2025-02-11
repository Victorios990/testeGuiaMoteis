describe('Testes de API para /users', () => {

    beforeEach(() => {
        cy.acessarApiUrl()
    });

    it('Deve retornar uma lista de usuários com status 200 e estrutura correta', () => {
        cy.request({
            method: 'GET',
            url: '/users',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body).to.have.length.greaterThan(0);
            response.body.forEach((user) => {
                expect(user).to.have.all.keys('id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company');
            });
        });
    });

    it('Deve tentar criar um usuário e verificar a resposta', () => {
        cy.request({
            method: 'POST',
            url: '/users',
            body: {
                name: "Joao Silva",
                username: "joaosilva",
                email: "joaosilva@example.com"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response).to.be.an('object');
            expect(response.body).to.have.all.keys('name', 'username', 'email', 'id');
        });
    });

    it('Deve simular um erro 500 (exemplo teórico)', () => {
        cy.request({
            method: 'GET',
            url: '/users',
            failOnStatusCode: false
        }).then((response) => {
            if (response.status === 500) {
                expect(response.body).to.have.property('message').that.includes('Internal Server Error');
            }
        });
    });
});