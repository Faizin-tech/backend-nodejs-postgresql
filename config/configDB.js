require("dotenv").config();
const Seq = require('sequelize');

const {
    NODE_ENV,
    DB,
    HOST,
    USER,
    PASSWORD,
    PORT
} = process.env,

CLIENT = new Seq(DB, USER,PASSWORD, {
    host: HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    operatorAliases: 0,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = {
    CLIENT
}