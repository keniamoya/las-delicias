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

router.get('/', function(req, res, next) {
    //var id = req.params.id;
    var query1 = 'select name, product_Image, price, quantity from OrderDetail, Product where Product.idProduct = OrderDetail.idProduct';
    var query2 = 'select * from OrderTable';

    var cart = {};
    var order = {};

    async.parallel([
        function(parallel_done) {
            connection.query(query1, {}, function(err, results) {
                if (err) return parallel_done(err);
                cart = results;
                parallel_done();
            });
        },
        function(parallel_done) {
            connection.query(query2, {}, function(err, results) {
                if (err) return parallel_done(err);
                order = results;
                parallel_done();
            });
        }
    ], function(err) {
        if (err) console.log(err);
        res.render('cart', { title: 'Las delicias', cart: cart, order: order });
    });
});

module.exports = router;