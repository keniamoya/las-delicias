/*const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var router = express.Router();
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../static')))
app.use(express.static(__dirname + '/public'));

module.exports = app;

*/

/* 
var routes = require('./app/routes/principal');
var cart = require('./app/routes/cart');

app.use('/', routes);
app.use('/', cart);
*/