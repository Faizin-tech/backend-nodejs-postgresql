require('dotenv').config();
const config = require('./config/configDB')
const express = require("express");
const helmet = require('helmet');
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const compression = require('compression');

const {
    NODE_ENV,
    PORT_SERVER,
    ALLOW_URL_ACCESS
} = process.env  

let PORT;

    if (NODE_ENV === "production") {
        PORT = PORT_SERVER
    } else {
        PORT = PORT_SERVER;
    }
    
const   CLIENT = config.CLIENT,
        allowURL = ALLOW_URL_ACCESS,
        corsOptionsDelegate = function (req, callback) {
            var corsOptions;
            if (allowURL.indexOf(req.header('Origin')) !== -1) {
                corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
            } else {
                corsOptions = { origin: false } // disable CORS for this request
            }
            callback(null, corsOptions) // callback expects two parameters: error and options
        }

// Use Plugins
app.use(helmet());
app.use(compression());     //Compress Response
app.use(cors(corsOptionsDelegate));            //Set CORS Origin
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// Protect Backend


app.get('/', (req, res) => {
    res.send({
        'Version': '1.1.1',
        'Description': 'Submission Bibit',
    });
});

// Routes
const routes = require('./api/routes');
app.use('/', routes);

try {
    CLIENT.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Automatic Migrate DB
// const dbMigate = require('./api/models/index');
// dbMigate.sequelize.sync();


const server = app.listen(process.env.PORT || PORT , () => {
    console.log("Server running in port : " + PORT);
});

module.exports = server;

