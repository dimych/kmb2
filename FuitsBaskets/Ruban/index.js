BasketApp();
var b;
function BasketApp() {
    $('div').append('<select><option>Apple</option><option>Pear</option><option>Orange</option></select>');
    $('div').append('<button class = createFruits> Create Fruits</button>');

  var a = $("select").change(function () {
            var str = '';
            $("select option:selected").each(function () {
                str += $(this).text() + " ";
                console.log(str);
            });
            
            var nameListFruits;
            switch (this.value){
                case 'Apple':
                nameListFruits = newBasket._apples;
                break;
                case 'Pear':
                nameListFruits = newBasket._pears;
                break;
                case 'Orange':
                nameListFruits = newBasket._oranges;
                break
            }
            b = nameListFruits;
            return b;
        });
        $('.createFruits').on('click', function () {
            createListFruit(b)
        });
}
function createListFruit(a){
    $('div').append('<ul/>');
    for(var i = 0; i<a.length; i++){
        $('ul').append('<li>').append(a[i].name);
    }
    
}
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

var apple1 = new Apple('princ', true);
var apple2 = new Apple('antonovka', false);
var apple3 = new Apple('gorec', true);
var apple4 = new Apple('slava pobediteljam', false);
var apple5 = new Apple('naliv', false);

var pear1 = new Pear('konferncija', 1);
var pear2 = new Pear('konferncija', 1);
var pear3 = new Pear('konferncija', 1);
var pear4 = new Pear('konferncija', 1);
var pear5 = new Pear('konferncija', 1);

var orange1 = new Orange('an', 'Egypt');
var orange2 = new Orange('an', 'Argentina');
var orange3 = new Orange('an', 'Brazil');
var orange4 = new Orange('an', 'SAR');
var orange5 = new Orange('an', 'SAR');


function Basket() {

    this._apples = [];
    this._pears = [];
    this._oranges = [];

    this.addProduct = function (fruts) {
        if (fruts.constructor == Apple) this._apples.push(fruts);
        if (fruts.constructor == Pear) this._pears.push(fruts);
        if (fruts.constructor == Orange) this._oranges.push(fruts);

    }

    this.giveFruts = function (typeOfProduct) {
        if (typeOfProduct === Apple)
            for (i = 0; i < this._apples.length; i++) {
                console.log(this._apples[i]);
            }
        if (typeOfProduct === Pear)
            for (i = 0; i < this._pears.length; i++) {
                console.log(this._pears[i]);
            }
        if (typeOfProduct === Orange)
            for (i = 0; i < this._oranges.length; i++) {
                console.log(this._oranges[i]);
            }


    }

    this.clear = function () {
        this._apples = [];
        this._pears = [];
        this._oranges = [];
    }
}

var newBasket = new Basket();

newBasket.addProduct(apple1);
newBasket.addProduct(apple2);
newBasket.addProduct(apple3);
newBasket.addProduct(apple4);
newBasket.addProduct(apple5);

newBasket.addProduct(orange1);
newBasket.addProduct(orange2);
newBasket.addProduct(orange3);
newBasket.addProduct(orange4);
newBasket.addProduct(orange5);

newBasket.addProduct(pear1);
newBasket.addProduct(pear2);
newBasket.addProduct(pear3);
newBasket.addProduct(pear4);
newBasket.addProduct(pear5);

newBasket.giveFruts(Apple);
newBasket.giveFruts(Orange);
newBasket.giveFruts(Pear);
