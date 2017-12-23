function Car(model, weight, _engine) {
    this.model = model;
    this.weight = weight;
    this._engine = _engine;
    this.hasTurboEngine = function(hasTurbo) {
        return this._engine.hasTurbo;
    };
};

function Engine(power, capacity, hasTurbo) {
    this.power = power;
    this.capacity = capacity;
    this.hasTurbo = hasTurbo;
};