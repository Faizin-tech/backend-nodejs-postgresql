require('dotenv').config();
const {Client, Pool} = require('pg');
const mysql = require('mysql2');
const config = require('./config/configDB')
const express = require("express");
const helmet = require('helmet');
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const {
    NODE_ENV,
    PORT_DB,
    PORT_SERVER
} = process.env  

// let PORT;

// if (NODE_ENV === "production") {
//     PORT = PORT_SERVER
// } else {
//     PORT = PORT_SERVER
// }

const db = mysql.createConnection({
    host : config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
})

// Connnection to MySQL
db.connect((err) => {
    if (err) throw err;

    console.log('Mysql Connected...');
    db.end();
})

// Use Plugins
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan('dev'));

// Routes
const routes = require('./routes');
app.use('/', routes);

// const client = new Pool({
//     user: config.USER,
//     host: config.HOST,
//     password: config.PASSWORD,
//     database: config.DB
// })

// client.connect()
// .then(() => console.log('Connected to Server'))
// .catch(e => console.log(e.message))
// .finally(() => client.end())

// Automatic Migrate DB
// const dbMigate = require('./model/index')
// dbMigate.sequelize.sync();
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("Server running in port : " + PORT);
});