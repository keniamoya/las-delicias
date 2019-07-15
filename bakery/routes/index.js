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
    var query1 = 'select * from Category';
    var query2 = 'select * from Product'; // where idCategory = ?';

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
            connection.query(query2, {}, function(err, results) { //[id], function(err, results) {
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