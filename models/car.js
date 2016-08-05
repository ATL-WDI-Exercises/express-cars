function Car(id, make, model, year) {
  this.id = id;
  this.make = make;
  this.model = model;
  this.year = year;
};
Car.prototype.toString = function() {
  return this.id    + ' : ' +
         this.make  + ' : ' +
         this.model + ' : ' +
         this.year;
};

module.exports = Car;
