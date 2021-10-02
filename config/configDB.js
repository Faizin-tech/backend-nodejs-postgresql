require("dotenv").config();

const {
    NODE_ENV,
    DB,
    HOST,
    USER,
    PASSWORD,
    PORT
} = process.env

module.exports = {
    HOST: HOST,
    USER: USER,
    PASSWORD: '',
    DB: DB,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}