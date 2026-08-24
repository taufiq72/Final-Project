require('dotenv').config();
const pg = require('pg'); // <-- 1. Import pg secara eksplisit

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || 'postgres',
    logging: console.log
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || 'postgres',
    dialectModule: pg, // <-- 2. Paksa Sequelize memakai modul pg ini!
    logging: false,
    dialectOptions: {
    ssl: {
    require: true,
    rejectUnauthorized: false
  }
}
  }
};