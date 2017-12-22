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
};

function BasketApp() {
    this.basket = new Basket();

    this.addButton = function (name, method) {
        var buttonsContainer = document.getElementById('buttons');
        var btn = document.createElement('button');
        btn.className = 'button';
        btn.innerHTML = name;
        btn.addEventListener('click', method);
        btn.addEventListener('click', this.renderBasket.bind(this));
        buttonsContainer.appendChild(btn);
    }

    this.render = function () {
        var container = document.getElementById('container');
        var buttonsContainer = document.createElement('div');
        var basketStateDiv = document.createElement('div');

        container.appendChild(buttonsContainer);
        container.appendChild(basketStateDiv);
        basketStateDiv.id = 'basketStateId';
        basketStateDiv.className = 'basket';
        buttonsContainer.id = 'buttons';
        this.addButton('Create Fruits', this.putFruitsToBasket.bind(this));
        this.addButton('Clear All Fruits', this.basket.clear.bind(this.basket));
        this.addButton('Remove Last Apple', this.removeLastApple.bind(this));
        this.addButton('Remove Last Pear', this.removeLastPear.bind(this));
        this.addButton('Remove Last Orange', this.removeLastOrange.bind(this));
        this.renderBasket();
    };

    this.renderBasket = function (e) {
        var basketStateDiv = document.getElementById('basketStateId');
        var apples = this.basket.getAllApples();
        var oranges = this.basket.getAllOranges();
        var pears = this.basket.getAllPears();

        if (apples.length || oranges.length || pears.length) {
            basketStateDiv.innerHTML = '';
            var applesHeader = document.createElement('div');
            var orangesHeader = document.createElement('div');
            var applesContainer = document.createElement('div');
            var orangesContainer = document.createElement('div');
            applesContainer.className = 'basket-elements';
            orangesContainer.className = 'basket-elements';

            applesHeader.innerHTML = 'Apples:';
            applesHeader.className = 'header';
            for (var i in apples) {
                applesContainer.innerHTML += apples[i].name;
                applesContainer.innerHTML += '</br>';
            }

            orangesHeader.innerHTML = 'Oranges:';
            orangesHeader.className = 'header';
            for (var i in oranges) {
                orangesContainer.innerHTML += oranges[i].name;
                orangesContainer.innerHTML += '</br>';
            }

            basketStateDiv.appendChild(applesHeader);
            basketStateDiv.appendChild(applesContainer);
            basketStateDiv.appendChild(orangesHeader);
            basketStateDiv.appendChild(orangesContainer);
        } else {
            basketStateDiv.innerHTML = 'Basket is Empty';
        }
    };

    this.putFruitsToBasket = function (e) {
        this.basket.clear();
        this.basket.addProduct(apple1);
        this.basket.addProduct(apple2);
        console.log(this.basket.winterApplesCount === 1);
        this.basket.addProduct(orange1);
        this.basket.addProduct(orange2);
    };

    this.removeLastApple = function () {
        this.basket.popLastApple();
    };
    this.removeLastPear = function () {
        this.basket.popLastPear();
    };
    this.removeLastOrange = function () {
        this.basket.popLastOrange();
    };
};

