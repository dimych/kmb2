function Apple(name, isWinter) {
    this.name = name;
    this.isWinter = isWinter;
}

function Pear(name, type) {
    this.name = name;
    this.type = type;
}

function Orange(name, country) {
    this.name = name;
    this.country = country;
}

function Basket() {
    this._apples = [];
    this._pears = [];
    this._oranges = [];

    this.addProduct = function (fruits) {
        if (fruits.constructor == Apple) this._apples.push(fruits);
        if (fruits.constructor == Pear) this._pears.push(fruits);
        if (fruits.constructor == Orange) this._oranges.push(fruits);
    }

    this.getAllApples = function (typeOfProduct) {
        if (typeOfProduct === Apple)
            for (var i = 0; i < this._apples.length; i++) {
                console.log(this._apples[i]);
            }
    }

    this.getAllPear = function (typeOfProduct) {
        if (typeOfProduct === Pear)
            for (var i = 0; i < this._pears.length; i++) {
                console.log(this._pears[i]);
            }
    }

    this.getAllOrange = function (typeOfProduct) {
        if (typeOfProduct === Orange)
            for (var i = 0; i < this._oranges.length; i++) {
                console.log(this._oranges[i]);
            }
    }

    this.clear = function () {
        this._apples = [];
        this._pears = [];
        this._oranges = [];
    }

    this._dallLs = new LocalStorageService();


    this._dallLs.save('Apple', apple1);
    this._dallLs.save('Pear', pear1);
    this._dallLs.save('Orange', orange1);

    this._dallLs.load('Apple');
    this._dallLs.load('Pear');
    this._dallLs.load('Orange');

    this._dallServer = new ServerApiService();
    
}

