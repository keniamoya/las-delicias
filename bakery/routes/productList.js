var express = require('express');
var mysql = require('mysql');
var router = express.Router();

const connection = mysql.createConnection({
    host: 'database-1.cvwujr4q7dqs.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Pepito123',
    database: 'Delicias_db'
});

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query('select * from Product where idCategory = ?', [id], function(err, rows) {
        if (err) throw err;
        res.render('productList', { title: 'Las delicias', products: rows });
    })
});

module.exports = router;