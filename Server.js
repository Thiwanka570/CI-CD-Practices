const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT; 
const DB_URI = process.env.MONGO_URI;

if (!DB_URI) {
    console.error('No MongoDB URI found in environment variables.');
    process.exit(1); 
}

mongoose.connect(DB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    });

    
