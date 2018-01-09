function Basket() {
    this._allAppleObject = [];
    this._allPearObject = [];
    this._allOrangeObject = [];
    this.winterApplesCount = 0;
    
    this.addProduct = function (fruit) {
        if (fruit.constructor.name === 'Apple') {
            this._allAppleObject.push(fruit);
            if (fruit.isWinter === true) {
                this.winterApplesCount++;
            }
        } else if (fruit.constructor.name === 'Pear') {
            this._allPearObject.push(fruit);
        } else if (fruit.constructor.name === 'Orange') {
            this._allOrangeObject.push(fruit);
        }
    }

    this.getAllApples = function () {
        var apples = [];
        for (var i = 0; i < this._allAppleObject.length; i++) {
            apples.push(this._allAppleObject[i]);
        }
        return apples;
    }
    this.getAllPears = function () {
        var pears = [];
        for (var i = 0; i < this._allPearObject.length; i++) {
            pears.push(this._allPearObject[i]);
        }
        return pears;
    }
    this.getAllOranges = function () {
        var oranges = [];
        for (var i = 0; i < this._allOrangeObject.length; i++) {
            oranges.push(this._allOrangeObject[i]);
        }
        return oranges;
    }
    this.clear = function () {
        this._allAppleObject = [];
        this._allPearObject = [];
        this._allOrangeObject = [];
    }

    this.popLastApple = function () {
        this._allAppleObject.pop();
    }
    this.popLastPear = function () {
        this._allPearObject.pop();
    }
    this.popLastOrange = function () {
        this._allOrangeObject.pop();
    }

    // this.save = function () {};
    // this.load = function () {};
    // this._dal = new LocalStorageBasket();
};