var express = require('express');
var mysql = require('mysql');
var router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_category'
});

/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query('select * from category', function(err, rows, fileds) {
        if (err) throw err;
        res.render('index', { title: 'Las delicias', category: rows });
    })
});


/* GET home page. 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Las delicias', category: 'category' });
});
//GET users listing.
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
*/

module.exports = router;