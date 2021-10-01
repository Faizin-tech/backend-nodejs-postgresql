const {Client, Pool} = require('pg');
const config = require('./config/configDB')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const {
    NODE_ENV,
    PORT_DB,
    PORT_SERVER
} = process.env  

let PORT;

if (NODE_ENV === "production") {
    PORT = PORT_SERVER
} else {
    PORT = PORT_SERVER
}

const client = new Pool({
    user: config.USER,
    host: config.HOST,
    password: config.PASSWORD,
    database: config.DB
})

client.connect()
.then(() => console.log('Connected to Server'))
.catch(e => console.log(e.message))
.finally(() => client.end())

// Automatic Migrate DB Postgre
// const dbMigate = require('./model/index')
// dbMigate.sequelize.sync();

const server = app.listen(PORT, () => {
    console.log("Server running in port : " + PORT);
});

module.exports = server;

