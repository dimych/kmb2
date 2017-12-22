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
        this._allOrangeObject = [];
    }
};

function BasketApp() {
    this.render = function () {
        var container = document.getElementById("container");
        var createFruitsBtn = document.createElement('button');
        var basketStateDiv = document.createElement('div');
        
        container.appendChild(createFruitsBtn);
        container.appendChild(basketStateDiv);        

        basketStateDiv.innerHTML = 'Basket is Empty';
        basketStateDiv.id = "basketStateId";

        createFruitsBtn.innerHTML = 'Create Fruits';

        createFruitsBtn.addEventListener("click", this.putFruitsToBasket.bind(this));
        createFruitsBtn.addEventListener("click", this.renderBasket.bind(this));
    };

    this.basket = new Basket();

    this.renderBasket = function (e) {
        var basketStateDiv = document.getElementById('basketStateId');
        basketStateDiv.innerHTML = '';
        var applesHeader = document.createElement('div');
        var orangesHeader = document.createElement('div');
        var applesContainer = document.createElement('div');
        var orangesContainer = document.createElement('div');
        applesContainer.className = 'basket-elements';
        orangesContainer.className = 'basket-elements';
        
        applesHeader.innerHTML ='Apples:';
        applesHeader.className = 'header';
        var apples = this.basket.getAllApples();
        for (var i in apples) {
            applesContainer.innerHTML += apples[i].name;
            applesContainer.innerHTML += '</br>';
        }

        orangesHeader.innerHTML ="Oranges:";
        orangesHeader.className = 'header';
        var oranges = this.basket.getAllOranges();
        for (var i in oranges) {
            orangesContainer.innerHTML += oranges[i].name;
            orangesContainer.innerHTML += '</br>';
        }
        
        basketStateDiv.appendChild(applesHeader);
        basketStateDiv.appendChild(applesContainer);
        basketStateDiv.appendChild(orangesHeader);
        basketStateDiv.appendChild(orangesContainer);
    };

    this.putFruitsToBasket = function (e) {
        this.basket.addProduct(apple1);
        this.basket.addProduct(apple2);
        console.log(this.basket.winterApplesCount===1);
        this.basket.addProduct(orange1);
        this.basket.addProduct(orange2);
    };

    this.removeLastApple = function () { };
    this.removeLastOrange = function () { };
};

