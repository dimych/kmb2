function Driver(fn, ln, car) {
    this.firstName = fn;
    this.lastName = ln;
    this.sound = null;
    this.car = car;
    this.startCar = function () {
        this.sound = this.car._engine.start();
    }
}