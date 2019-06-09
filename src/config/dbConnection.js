const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost', //'sql3.freemysqlhosting.net',
        user: 'root', //'sql3294691',
        password: '', //'lasdelicias123',
        database: 'bd_category' //'sql3294691'
    });
}