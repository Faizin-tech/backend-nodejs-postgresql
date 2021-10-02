const mysql = require('mysql2');
const config = require('../config/configDB');
const User =  require('../model').user;

const pool = mysql.createPool({
    host: config.HOST,
    user: config.USER,
    database: config.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

const task1 =  async (req, res) => {

    try {
        
        const   addData = 'INSERT INTO `users` (`UserName`, `Parent`) VALUES ?;',
                dataToAdd = [ ['Ali', 2], ['Budi', 0], ['Cecep', 1] ],
                selectData = `SELECT id AS ID,UserName,(SELECT UserName FROM users B WHERE B.id = A.Parent) AS UserParent FROM users A`;

        pool.getConnection( (err, conn) => {
            conn.query(addData,
                [dataToAdd], 
                (err, rows, fields) => {
                    if (err) {
                        return res.status(400).json({
                            success: false,
                            message: err,
                        });
                    }
        
                    conn.query(selectData, (err, rows, fields) => {
                        
                        if (err) {
                            return res.status(400).json({
                                success: false,
                                message: err,
                            });
                        }
        
                        return res.status(200).json({
                            success: true,
                            message: `Success Get Data`,
                            data: rows
                        });
                    });
                });

                conn.release();
        }
        )
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    task1
}