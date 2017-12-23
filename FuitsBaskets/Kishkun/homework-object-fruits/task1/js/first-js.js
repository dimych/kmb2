var Apple = function(name, isWinter) {
    this.name = name;
    this.isWinter = isWinter;
}

var Pear = function(name, type) {
    this.name = name;
    this.type = type;
}

var Orange = function(name, country) {
    this.name = name;
    this.country = country;
}

var Basket = function() {
    this.product = [];
    this.addProduct = function(product) {
        this.product.push(product);
    }
    this.getAllApples = function() {}
    this.getAllPear = function() {}
    this.getAllOrange = function() {}
}
