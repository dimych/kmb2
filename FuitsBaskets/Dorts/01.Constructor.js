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
    this._allAppleObject = [];
    this._allPearObject = [];
    this._allOrangeObject = [];

    this.addProduct = function (fruit) {
        if (fruit.constructor.name === 'Apple') {
            this._allAppleObject.push(fruit);
            console.log('apple');
        } else if (fruit.constructor.name === 'Pear') {
            this._allPearObject.push(fruit);
            console.log('per');
        } else if (fruit.constructor.name === 'Orange') {
            this._allOrangeObject.push(fruit);
            console.log('orange');
        }
    }

    this.getAllApples = function () {
        var apples = [];
        for (var i = 0; i < this._allAppleObject.length; i++) {
            apples.push(this._allAppleObject[i]);
            console.log(apples[i].name)
        }
        return apples;
    }
    this.getAllPears = function () {

    }
    this.getAllOrange = function () {
        var oranges = [];
        for (var i = 0; i < this._allOrangeObject.length; i++) {
            oranges.push(this._allOrangeObject[i]);
            console.log(oranges[i].name)
        }
        return oranges;
    }
    this.clear = function () {
        this._allAppleObject = [];
        this._allOrangeObject = [];
        // console.log(this._allAppleObject);
        // console.log(this._allOrangeObject);
    }
};


