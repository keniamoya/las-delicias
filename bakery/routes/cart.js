var express = require('express');
var mysql = require('mysql');

var router = express.Router();

const connection = mysql.createConnection({
    host: 'database-1.cvwujr4q7dqs.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Pepito123',
    database: 'Delicias_db'
});

router.get('/', function(req, res, next) {
    connection.query('select Product.idProduct as id, name, product_Image, price, sum(quantity) as quantity from OrderDetail, Product where Product.idProduct = OrderDetail.idProduct group by Product.idProduct', {}, function(err, result, fileds) {
        if (err) throw err;
        res.render('cart', { title: 'Las delicias', cart: result });
    })
});

router.post('/delete', function(req, res) {
    var id = req.body.idProduct;
    connection.query('delete from OrderDetail where idProduct = ?', [id], function(err, result) {
        if (err) throw err;
        res.redirect('/cart');
        console.log('Deleted!');
    });
});

router.post('/update', function(req, res) {
    var id = req.body.idProduct2;
    var quantity = req.body.quantityProduct;
    connection.query('update OrderDetail set quantity = ? where idProduct = ?;', [quantity, id], function(err, result) {
        if (err) throw err;
        res.redirect('/cart');
        console.log('Updated!');
    });
});

router.post('/checkout', function(req, res) {
    connection.query('delete from OrderDetail where idOrder = 1', {}, function(err, result) {
        if (err) throw err;
        res.redirect('/');
        console.log('Clean!');
    });
});

module.exports = router;