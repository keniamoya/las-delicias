var express = require('express');
var mysql = require('mysql');
var async = require('async');
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
    connection.query('select name, description, price, product_Image from Product where idProduct = ?', [id], function(err, rows, fileds) {
        if (err) throw err;
        res.render('product', { title: 'Las delicias', head: 'Producto especifico', product: rows[0] });
    })
});

module.exports = router;