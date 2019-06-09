const dbConnection = require('../../config/dbConnection');

module.exports = app => {

    /*app.get('/', (req, res) => {
        res.send('hola mundo kkkk')
    });*/

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