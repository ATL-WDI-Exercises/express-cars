var express = require('express');
var Car     = require('../models/car');

var router = express.Router();

var cars = [
  new Car(0, 'Tesla', 'Model S', 2016),
  new Car(1, 'Nissan', 'Leaf', 2015),
  new Car(2, 'Chevy', 'Bolt', 2017)
];

// INDEX
router.get('/', function(req, res, next) {
  res.render('cars/index', { cars: cars });
});

// NEW
router.get('/new', function(req, res, next) {
  res.render('cars/new');
});

// SHOW
router.get('/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  var car = cars[id];
  res.render('cars/show', { car: car });
});

// CREATE
router.post('/', function(req, res, next) {
  console.log('req.body:', req.body);
  var car = req.body;
  var id = cars.length;
  cars.push(new Car(id, car.make, car.model, car.year));
  res.redirect('/cars');
});

// EDIT
// TODO: implement me

// UPDATE
// TODO: implement me

// DELETE
// TODO: implement me



module.exports = router;
