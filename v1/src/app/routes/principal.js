var express = require('express');
var router = express.Router();

module.exports = app => {

    /* GET principal listing. */
    router.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });

    module.exports = router;

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

};

/*

const dbConnection = require('../../config/dbConnection');

module.exports = app => {

    const connection = dbConnection();

    app.get('/', (req, res) => {
        connection.query('SELECT * FROM category', (err, result) => {
            res.render('principal/principal', {
                category: result
            });
        });
    });

    app.post('/', (req, res) => {
        const { name_category, description_category } = req.body;
        connection.query('INSERT INTO category SET ? ', {
            name_category,
            description_category
        }, (err, result) => {
            res.redirect('/principal');
        });
    });
};
*/