function Basket () {
  this.apples = [];
  this.pears = [];
  this.oranges = [];
}

var i = 1;

function Fruit (fruitName, fruitType) {
    this.name = fruitName + JSON.stringify(i);
    this.type = fruitType;
    i++;
}


basket = new Basket;