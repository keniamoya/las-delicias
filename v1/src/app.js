var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');

const app = express();

var principalRouter = require('./app/routes/principal');
var cartRouter = require('./app/routes/cart');



// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../static')))
app.use(express.static(__dirname + '/public'));

app.use('/', principalRouter);
app.use('/cart', cartRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;



/*
const app = require('./config/server');

require('./app/routes/principal')(app);

// starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

*********************************************************

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var routes = require('./app/routes/principal');
var cart = require('./app/routes/cart');

const app = express();


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../static')))
app.use(express.static(__dirname + '/public'));

app.use('/', routes);
app.use('/cart', cart);

app.use(function(req, res, next) {
    var err = new Error('Pagina no encontrada')
    err.status = 404;
    next(err);
})


*/