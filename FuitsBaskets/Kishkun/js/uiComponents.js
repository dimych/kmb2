
function BasketComponents() {

    this._basket = new Basket();
    this._basket.getAllPear();
    this._basket.getAllOrange();
    this._basket.getAllApples();

    this.render = function () {
        $('body').append('<div id="wrapper"></div>')
        $('#wrapper').append('<button class = createFruits>Create Fruits</button>');
        $('#wrapper').append('<button class = removeApple>Remove last apple</button>');
        $('#wrapper').append('<button class = removePear>Remove last pear</button>');
        $('#wrapper').append('<button class = removeOrange>Remove last pear</button>');
        $('#wrapper').append('<button class = clearBasket>Clear Basket</button><hr />');
        $('body').append('<div id="box"></div>')
        $('#box').append('<div id="fruitsBoxApple">Basket apples is Empty</div>');
        $('#box').append('<div id="fruitsBoxPear">Basket pears is Empty</div>');
        $('#box').append('<div id="fruitsBoxOrange">Basket oranges is Empty</div>');

        this.fruitsBoxApple = document.querySelector('#fruitsBoxApple');
        this.fruitsBoxPear = document.querySelector('#fruitsBoxPear');
        this.fruitsBoxOrange = document.querySelector('#fruitsBoxOrange');
        this.fruitsBox = document.querySelector('#box');
        this.fruitsButtons = document.querySelectorAll('button');
        var that = this;
        for (var i = 0; i < this.fruitsButtons.length; i++) {
            var fruitsButton = this.fruitsButtons[0];
            fruitsButton.addEventListener('click', function () {
                that.fruitsBoxApple.innerHTML = apple1.name + ', ' + apple2.name;
                that.fruitsBoxPear.innerHTML = pear1.name + ', ' + pear2.name;
                that.fruitsBoxOrange.innerHTML = orange1.name + ', ' + orange3.name;
            });
        }

    }
    this.toPutFruitsToBasket = function () {
        this._basket.addProduct(apple1);
        this._basket.addProduct(apple2);
        this._basket.addProduct(pear1);
        this._basket.addProduct(pear2);
        this._basket.addProduct(orange1);
        this._basket.addProduct(orange2);
        // this.basket.clear();

    }

    this.removeLastApple = function () {
        var that = this;
        var removeLastApple = this.fruitsButtons[1];
        removeLastApple.addEventListener('click', function () {
            that.fruitsBoxApple.innerHTML = apple1.name;
        });

        // $('.removeApple').on('click', function () {
        //     console.log('Remove last apple');
        // });
    }

    this.removeLastPear = function () {
        var that = this;
        var removeLastPear = this.fruitsButtons[2];
        removeLastPear.addEventListener('click', function () {
            that.fruitsBoxPear.innerHTML = pear1.name;
        });
        // $('.removePear').on('click', function () {
        //     console.log('Remove last pear');
        // });
    }

    this.removeLastOrange = function () {
        var that = this;
        var removeLastOrange = this.fruitsButtons[3];
        removeLastOrange.addEventListener('click', function () {
            that.fruitsBoxOrange.innerHTML = orange1.name;
        });
        // $('.removeOrange').on('click', function () {
        //     console.log('Remove last orange');
        // });
    }

    this.clearAllFruits = function() {
        var that = this;
        var clearButton = this.fruitsButtons[4];
        clearButton.addEventListener('click', function() {
            that.fruitsBox.innerHTML = 'Basket is empty';
            // console.log('clear box');
        });
    }

    // var fruitsButtons = document.querySelectorAll('button');

    // for (var i = 0; i < fruitsButtons.length; i++) {
    //     var fruitsButton = fruitsButtons[i];
    //     fruitsButton.addEventListener('click', function() {
    //         console.log('fruits-btn');
    //     });
    // }
}

