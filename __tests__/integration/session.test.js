const request = require('supertest');
const app = require('../../src/app');

const factory = require('../factories');
const truncate = require('../utils/truncate');


describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('Should authenticate with valid credentials', async () => {
        const user = await factory.create('User', {
            password: '123123'
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123123'
            });
            console.log(response.body);
        
        expect(response.status).toBe(200);
    });

    it('Should not authenticate with invalid credentials', async () => {
        const user = await factory.create('User');

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            });
            console.log(response.body);
        
        expect(response.status).toBe(401);
    });

    it('Should receive a jwt when authenticated', async () => {
        const user = await factory.create('User', {
            password: '123123'
        });
 
         const response = await request(app)
             .post('/sessions')
             .send({
                 email: user.email,
                 password: '123123'
             });
         console.log(response.body);
         expect(response.body).toHaveProperty('token');
    });
});