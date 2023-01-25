const {createPool} = require('mysql2/promise')

const pool =  createPool({
    host: 'localhost',
    user: 'root',
    password:'alejandro',
    port: 3306,
    database: 'userdb'
})
module.exports = pool