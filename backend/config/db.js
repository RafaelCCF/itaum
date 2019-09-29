const bluebird = require('bluebird')
const mysql = require("mysql2/promise"); 

var pool;

module.exports = async function getPool() {
    if (pool){
        return pool
    }
    
    const config = {
        user: 'root',
        password: '',
        host: 'db',
        database: 'beers',
        port:3306,
        Promise: bluebird
    };
    pool = await mysql.createPool(config)
    
    return  pool;
}