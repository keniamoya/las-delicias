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

router.get('/', function(req, res, next) {
    var query1 = 'select * from category';
    var query2 = 'select * from products';

    var category = {};
    var products = {};

    async.parallel([
        function(parallel_done) {
            connection.query(query1, {}, function(err, results) {
                if (err) return parallel_done(err);
                category = results;
                parallel_done();
            });
        },
        function(parallel_done) {
            connection.query(query2, {}, function(err, results) {
                if (err) return parallel_done(err);
                products = results;
                parallel_done();
            });
        }
    ], function(err) {
        if (err) console.log(err);
        res.render('index', { title: 'Las delicias', category: category, products: products });
    });
});

module.exports = router;

/* GET home page. 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Las delicias', category: 'category' });
});
//GET users listing.
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.get('/', function(req, res, next) {
    connection.query('select * from category', function(err, rows, fileds) {
        if (err) throw err;
        res.render('index', { title: 'Las delicias', category: rows, products: 'productos' });
    })
});
*/