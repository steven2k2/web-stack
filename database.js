require('dotenv').config();
const {Client} = require('pg');

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

const client = new Client(dbConfig);

function connectWithRetry(callback) {
    client.connect((err) => {
        if (err) {
            console.error('Error connecting to PostgreSQL:', err.message);
            console.log('Retrying in 5 seconds...');
            setTimeout(() => connectWithRetry(callback), 5000);
        } else {
            console.log('Connected to PostgreSQL database');
            if (callback) callback();
        }
    });
}

module.exports = {connectWithRetry, client};