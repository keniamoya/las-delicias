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
    res.render('search', { title: 'Las delicias' });
});

router.post('/', function(req, res, next) {
    var word = req.body.word;
    connection.query("select * from Product where name like ?", ['%' + word + '%'], function(err, result, fileds) {
        if (err) throw err;
        res.render('search', { title: 'Las delicias', products: result });
    })
});

module.exports = router;