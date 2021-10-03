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

let PORT;

if (NODE_ENV === "production") {
    PORT = PORT_SERVER
} else {
    PORT = PORT_SERVER
}

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

// Automatic Migrate DB Postgre
// const dbMigate = require('./model/index')
// dbMigate.sequelize.sync();

const server = app.listen(PORT, () => {
    console.log("Server running in port : " + PORT);
});

function findFirstStringInBracket(str){   
    if(str.length > 0){ 
        let indexFirstBracketFound = str.indexOf("(");    	  
        let indexLastBracketFound = str.indexOf(")");    	  
        let wordsAfterFirstBracket = str.substr( indexFirstBracketFound + 1, (indexLastBracketFound - indexFirstBracketFound) -1 );
        console.log(wordsAfterFirstBracket)  	      
        
        return(indexFirstBracketFound >= 0 && indexLastBracketFound >= 0)
            ? wordsAfterFirstBracket
            : '' 


        // console.log(indexFirstBracketFound, indexLastBracketFound);
        // if(indexFirstBracketFound >= 0){ 
        //     let wordsAfterFirstBracket = str.substr( indexFirstBracketFound );  	      
        //     console.log(wordsAfterFirstBracket);
        //     if(wordsAfterFirstBracket){ 
        //         wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);  	         
        //         console.log(wordsAfterFirstBracket);
        //         let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");  	         
                
        //         if(indexClosingBracketFound >= 0){  	          
        //             console.log(wordsAfterFirstBracket.substring(0, indexClosingBracketFound)); 
        //         } else {  	          
        //             return '';  	         
        //         } 
        //     } else {  	         
        //         return ''; 
        //     } 
        // } else {       	
        //     return ''; 
        // } 
    } else {      
        return ''; 
    } 
}

findFirstStringInBracket('aku suka sama (keke)')

module.exports = server;

