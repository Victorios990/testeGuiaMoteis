const request = require('supertest');
const baseURL = 'https://jsonplaceholder.typicode.com';

describe('Testes de API', () => {
  it('Deve retornar status 200 para GET', async () => {
    const response = await request(baseURL).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(10);
  });

  it('Deve retornar erro 400 para POST sem campo obrigatório', async () => {
    const response = await request(baseURL).post('/users').send({});
    expect(response.status).toBe(400);
  });

  it('Deve retornar erro 500 para falha no servidor', async () => {

    const response = await request(baseURL).get('/wrong-endpoint');
    expect(response.status).toBe(500);
  });
});
