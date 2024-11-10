// swaggerConfig.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Web Stack API',
            version: '1.0.0',
            description: 'API documentation for Web Stack app',
        },
    },
    apis: ['./index.js'], // Adjust the path if you have other files with routes
};

const specs = swaggerJsdoc(options);
module.exports = specs;