const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize({
  database: "cyrus",
  host: "localhost",
  port: 10000,
  dialect: "postgres",
});
    module.exports = sequelize