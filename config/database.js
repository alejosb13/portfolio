// const {db} 		= require ('./config');
require('dotenv').config()


let enviroment = {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "dev_portfolio",
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || "mysql",
    dialectOptions: {
        bigNumberStrings: true
    },
    logging: false

};


module.exports = enviroment;
