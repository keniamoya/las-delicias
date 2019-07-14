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
    connection.query('select idProduct, name, description, price, product_Image from Product where idProduct = ?', [id], function(err, rows, fileds) {
        if (err) throw err;
        res.render('product', { title: 'Las delicias', product: rows[0] });
    })
});

router.post('/:id', function(req, res) {
    var id = req.params.id;
    var quantity = req.body.units;
    var spe = req.body.specification;

    var sql = "call saveProduct(?, ?, ?)";

    if (quantity != 0) {
        connection.query(sql, [id, quantity, spe], function(err, result) {
            if (err) throw err;
            console.log('Inserted!');
        });
    }
});

module.exports = router;