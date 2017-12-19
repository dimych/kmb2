function Apple(name, isWinter) {
    this.name = name;
    this.isWinter = isWinter;
};

function Pear(name, type) {
    this.name = name;
    this.type = type;
};

function Orange(name, country) {
    this.name = name;
    this.country = country;
};

function Basket() {
    this.allAppleObject = [];
    this.allPearObject = [];
    this.allOrangeObject = [];

    this.addProduct = function (fruit) {
        if (fruit.constructor.name === 'Apple') {
            this.allAppleObject.push(fruit);
        } else if (fruit.constructor.name === 'Pear') {
            this.allPearObject.push(fruit); 
        } else if (fruit.constructor.name === 'Orange') {
            this.allOrangeObject.push(fruit); }       
    }

    this.getAllApples = function () {

    }
    this.getAllPears = function () {

    }
    this.getAllOrange = function () {

    }
    this.clear = function() {
    this.apples = [];
}
};


