const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    development: {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432'),
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        logging: false,
    },
    test: {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432'),
        database: `${process.env.DB_NAME}_test`,  // Добавьте суффикс для тестов
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        logging: false,
    },
    production: {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432'),
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        logging: false,
    },
};
