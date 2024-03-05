const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize with the appropriate database configuration
const sequelize = process.env.NODE_ENV === 'production' ?
  new Sequelize(process.env.JAWSDB_URL) :
  new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

module.exports = sequelize;
