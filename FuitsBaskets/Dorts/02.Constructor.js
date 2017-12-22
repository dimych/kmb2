function Car(model, weight, _engine) {
    this.model = model;//string
    this.weight = weight;//number
    this._engine = _engine;
    this.hasTurboEngine = function(hasTurbo) {
        return this._engine.hasTurbo;
    };
};

function Engine(power, capacity, hasTurbo) {
    this.power = power;//number
    this.capacity = capacity;//number
    this.hasTurbo = hasTurbo;//boolean
};