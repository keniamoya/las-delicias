var express = require('express');
var mysql = require('mysql');
var async = require('async');
var router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_category'
});

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    connection.query('select name_product, description_product, price, imagen from products where id_product = ?', [id], function(err, rows, fileds) {
        if (err) throw err;
        res.render('product', { title: 'Las delicias', head: 'Producto especifico', product: rows[0] });
    })
});

module.exports = router;