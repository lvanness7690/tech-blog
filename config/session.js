// config/session.js
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./connection');

const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'secret', // Use environment variable or fallback to default
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
};

module.exports = sessionConfig;
