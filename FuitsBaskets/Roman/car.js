function Car(model, weight) {
  this.model = model;
  this.weigt = weight;
  this._engine = {
    power : 405,
    capacity : 5,
    hasTurbo : true
  }
}

function Car(model, weight, engine) {
  this.model = model;
  this.weigt = weight;
  this._engine = engine;
  this.hasTurboEngine = function () {
    (this._engine.hasTurbo == true) ? console.log(true) : console.log(false);   
  }
}

function Engine(power, capacity, hasTurbo) {
  this.power = power,
  this.capacity = capacity,
  this.hasTurbo = hasTurbo;
}

var turboE1 = new Engine (1.6, 5, true);
var turboE2 = new Engine (2.0, 5, true);
var turboE3 = new Engine (3.6, 5, false);
var newCar1 = new Car ('volvo','2345 - 7', turboE1);
var newCar2 = new Car ('bmw','6545 - 7', turboE2);
var newCar3 = new Car ('jeep','2345 - 7', turboE3);

newCar1.hasTurboEngine();
newCar2.hasTurboEngine();
newCar3.hasTurboEngine();