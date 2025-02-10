describe('Testes de API para /users', () => {
   
    it('Deve retornar uma lista de usuários com status 200 e estrutura correta', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
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
            url: 'https://jsonplaceholder.typicode.com/users',
            body: {
                name: "Test User",
                username: "testuser",
                email: "testuser@example.com"
            },
            failOnStatusCode: false
        }).then((response) => {

            expect(response.status).to.be.oneOf([400, 500]);


            if (response.status === 400) {
                expect(response.body).to.have.property('error').that.is.a('string');
            } else if (response.status === 500) {
                expect(response.body).to.have.property('message').that.includes('Internal Server Error');
            }
        });
    });


    it('Deve simular um erro 500 (exemplo teórico)', () => {

        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users',
            failOnStatusCode: false
        }).then((response) => {

            if (response.status === 500) {
                expect(response.body).to.have.property('message').that.includes('Internal Server Error');
            }
        });
    });
});
