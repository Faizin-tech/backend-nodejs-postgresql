const mysql = require('mysql2');
const config = require('../config/configDB');
const User =  require('../model').user;

// const pool = mysql.createPool({
//     host: config.HOST,
//     user: config.USER,
//     database: config.DB,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

const {Pool,Client} = require('pg');

const client = new Pool({
    user: config.USER,
    host: config.HOST,
    database: config.DB,
    password: config.PASSWORD,
    port: 5432,
});

const task1 =  async (req, res) => {

    client.query(
        `
            INSERT INTO "Users" ("UserName", "Parent", "createdAt", "updatedAt") VALUES ('Ali', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
            INSERT INTO "Users" ("UserName", "Parent", "createdAt", "updatedAt") VALUES ('Budi', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
            INSERT INTO "Users" ("UserName", "Parent", "createdAt", "updatedAt") VALUES ('Cecep', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

            SELECT "id" AS ID,"UserName",(SELECT "UserName" FROM "Users" B WHERE B."id" = A."Parent") AS UserParent FROM "Users" A
        `
        , (err, data) => {
        if (err) {
            console.log(err);
            return res.status(400).send({
                success: false,
                message: "Can't load users"
            });
        } else {
            return res.status(200).send({
                success: true,
                message: "Success Get Data",
                response: data[3].rows
            });
        }
    })

}

module.exports = {
    task1
}