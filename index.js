var express = require('express');
var bodyParser = require('body-parser');

var carsRouter = require('./routes/cars');

var app     = express();
var port    = process.env.PORT || 3000;

app.set('views', './views');      // set views directory as default place for ejs to load views.
app.set('view engine', 'ejs');    // set express view engine to ejs.

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  console.log('%s request to %s from %s',
              req.method,
              req.path,
              req.ip
              );
  next();
});

app.use(express.static('public'));

// ROUTES

app.get('/', function(req, res, next) {
  // res.send("Express Rocks, and so does WDI! Aren't you glad it's Friday?");
  res.render('index');
});

app.get('/about', function(req, res, next) {
  res.render('about');
});

app.get('/contact', function(req, res, next) {
  res.render('contact');
});

app.use('/cars', carsRouter);

app.listen(port);
console.log('Server started on ' + port);



