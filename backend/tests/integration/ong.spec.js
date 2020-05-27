const request = require('supertest');
const app = require('../../src/app');

describe('ONG', ()=>{
    it('should be able to create a new ONG', async()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAE2",
            email: "contato@test.com",
            whatsapp: "37200000",
            city: "Lavras",
            uf: "MG"
        });
    });
});