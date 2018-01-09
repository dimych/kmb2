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
            var applesContainer = document.createElement('div');

            var pearsHeader = document.createElement('div');
            var pearsContainer = document.createElement('div');

            var orangesHeader = document.createElement('div');
            var orangesContainer = document.createElement('div');


            applesContainer.className = 'basket-elements';
            pearsContainer.className = 'basket-elements';
            orangesContainer.className = 'basket-elements';

            applesHeader.innerHTML = 'Apples:';
            applesHeader.className = 'header';
            for (var i in apples) {
                applesContainer.innerHTML += apples[i].name;
                applesContainer.innerHTML += '</br>';
            }

            pearsHeader.innerHTML = 'Pears:';
            pearsHeader.className = 'header';
            for (var i in pears) {
                pearsContainer.innerHTML += pears[i].name;
                pearsContainer.innerHTML += '</br>';
            }

            orangesHeader.innerHTML = 'Oranges:';
            orangesHeader.className = 'header';
            for (var i in oranges) {
                orangesContainer.innerHTML += oranges[i].name;
                orangesContainer.innerHTML += '</br>';
            }

            basketStateDiv.appendChild(applesHeader);
            basketStateDiv.appendChild(applesContainer);
            basketStateDiv.appendChild(pearsHeader);
            basketStateDiv.appendChild(pearsContainer);
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
        this.basket.addProduct(pear1);
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

