const mysql = require("mysql2");


const conn = {
    host: "localhost",
    prot: "3306",
    host: "localhost",
    user: "hr",
    password: "hr",
    database: "test",
    connectionLimit: 10,
};

let pool = mysql.createPool(conn);

query = (sql, values) =>{
    return new Promise((resolve, reject) =>{
        pool.query(sql, values, (err, results)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            resolve(results);
        })
    })
}

module.exports = {pool, query};