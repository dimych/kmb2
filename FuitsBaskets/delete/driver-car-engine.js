

function Engine() {
    this.state = 'off';
    this.volume = '4L';
    this.cylinders = '6';
    this.start = function () {
        this.state = 'on';
    }
}

function Car() {
    this.make = 'Ford';
    this.model = 'Taurus';
    this.year = '1999';
    this.engine = new Engine();
}

function Driver(fn, ln, car) {
    this.firstName = fn;
    this.lastName = ln;
    this.sound = null;
    this.car = car;
    this.startCar = function () {
        this.sound = this.car.engine.start();
    }
}
var fordTaurus = new Car();
var billyBob = new Driver('Billy', 'Bob', fordTaurus);


billyBob.startCar();