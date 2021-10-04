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

let PORT,
    CLIENT

if (NODE_ENV === "production") {
    PORT = PORT_SERVER
    CLIENT = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
} else {
    PORT = PORT_SERVER;
    CLIENT = new Pool({
        user: config.USER,
        host: config.HOST,
        password: config.PASSWORD,
        database: config.DB
    })
}

// Use Plugins
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send({
        'Version': '1.1.1',
        'Description': 'Submission Bibit',
    });
});

// Routes
const routes = require('./routes');
app.use('/', routes);

CLIENT.connect()
.then(() => console.log('Connected to Server'))
.catch(e => console.log(e.message))
.finally(() => CLIENT.end())

// Automatic Migrate DB
const dbMigate = require('./model/index')
dbMigate.sequelize.sync();


const server = app.listen(process.env.PORT || PORT , () => {
    console.log("Server running in port : " + PORT || PORT);
});

module.exports = server;

