var fruits = ['Apple', 'Pear', 'Orange'];
var applesAttr = ['true', 'false'];
var pearAttr = ['1', '2', '3'];
var orangeAttr = ['Bel', 'Rus', 'USA']

var i = 0;

function createButton() {
  var $fruitName = $('<select/>');
  var $typeAttr = $('<select/>');
  for (var i in applesAttr) {
    $typeAttr.append(new Option(applesAttr[i]));
  }
  $fruitName = $('<select/>').change(function () {
    $typeAttr.empty();
    if (this.value == 'Apple') {
      for (var i in applesAttr) {
        $typeAttr.append(new Option(applesAttr[i]));
      }
    }

    if (this.value == 'Pear') {
      for (var i in pearAttr) {
        $typeAttr.append(new Option(pearAttr[i]));
      }
    }

    if (this.value == 'Orange') {
      for (var i in orangeAttr) {
        $typeAttr.append(new Option(orangeAttr[i]));
      }
    }
  });
  for (var i in fruits) {
    $fruitName.append(new Option(fruits[i]));
  }
  var $buttonAdd = $('<button>').text('Add to Basket');
  var $inputName = $('<input>').attr('placeholder', 'What fruit name?');
  $('body').append($fruitName, $inputName, $typeAttr, $buttonAdd);
}
createButton();

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



function addElementToBacsket() {

}

// var newBasket = new Basket();

// newBasket.addProduct(apple1);
// newBasket.addProduct(apple2);
// newBasket.addProduct(apple3);
// newBasket.addProduct(apple4);
// newBasket.addProduct(apple5);

// newBasket.addProduct(orange1);
// newBasket.addProduct(orange2);
// newBasket.addProduct(orange3);
// newBasket.addProduct(orange4);
// newBasket.addProduct(orange5);

// newBasket.addProduct(pear1);
// newBasket.addProduct(pear2);
// newBasket.addProduct(pear3);
// newBasket.addProduct(pear4);
// newBasket.addProduct(pear5);

// newBasket.giveFruts(Apple);
// newBasket.giveFruts(Orange);
// newBasket.giveFruts(Pear);

// var arr = [1, 2, 3, 4, 5];

// var arr2 = arr.map(function(num){
//   return num*2;
// });

// console.log(arr2);


// ________________________________________________________
// function Car(model, weight) {
//   this.model = model;
//   this.weigt = weight;
//   this._engine = {
//     power : 405,
//     capacity : 5,
//     hasTurbo : true
//   }
// }

// function Car(model, weight, engine) {
//   this.model = model;
//   this.weigt = weight;
//   this._engine = engine;
//   this.hasTurboEngine = function () {
//     (this._engine.hasTurbo == true) ? console.log(true) : console.log(false);   
//   }
// }

// function Engine(power, capacity, hasTurbo) {
//   this.power = power,
//   this.capacity = capacity,
//   this.hasTurbo = hasTurbo;
// }

// var turboE1 = new Engine (1.6, 5, true);
// var turboE2 = new Engine (2.0, 5, true);
// var turboE3 = new Engine (3.6, 5, false);
// var newCar1 = new Car ('volvo','2345 - 7', turboE1);
// var newCar2 = new Car ('bmw','6545 - 7', turboE2);
// var newCar3 = new Car ('jeep','2345 - 7', turboE3);

// newCar1.hasTurboEngine();
// newCar2.hasTurboEngine();
// newCar3.hasTurboEngine();