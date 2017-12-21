var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var index = require('./routes/index');
var product = require('./routes/Product_route');
var user = require('./routes/User_route');
var role=require('./routes/Role_route');
var sale=require('./routes/Sales_route');
var purchase=require('./routes/Purchase_route');
var cart=require('./routes/Cart_route');
var product_cat=require('./routes/Product_Category_route');
var design=require('./routes/Design_route');
var color=require('./routes/Color_route');
var supplier=require('./routes/Supplier_route');
var city=require('./routes/City_route');
var feedback=require('./routes/Feedback_route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/products', product);
app.use('/users',user);
app.use('/roles',role);
app.use('/sales',sale);
app.use('/purchase',purchase);
app.use('/cart',cart);
app.use('/product_cat',product_cat);
app.use('/design',design);
app.use('/color',color);
app.use('/supplier',supplier);
app.use('/city',city);
app.use('/feedback',feedback);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
