const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize({ user: 'postgres', 
    host: process.env.DB_HOST, 
    database: process.env.DB_NAME, 
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, 
    port: process.env.DB_PORT, 
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  }

    
);
    
    module.exports = sequelize