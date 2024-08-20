const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app'); // Adjust the path to your Express app
const User = require('../models/User');

describe('Park Controller', () => {
    beforeAll(async () => {
        const url = 'mongodb://localhost:27017/carparking';
        await mongoose.connect(url);
    });

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    });


 
it('should get all Users', async () => {
        const response = await request(app).get('/user');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
})
