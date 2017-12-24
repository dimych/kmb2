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
};