const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app'); // Adjust the path to your Express app
const Park = require('../models/Park');

describe('Park Controller', () => {
    beforeAll(async () => {
        // Connect to a test database
        const url = 'mongodb://localhost:27017/carparking';
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        // Clean up and close the database connection
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    });


    // Test for getting all Parks
    it('should get all Parks', async () => {
        const response = await request(app).get('/parks');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
})
