function Basket () {
  this.apples = [];
  this.pears = [];
  this.oranges = [];
}

function Fruit (fruitName, fruitType) {
    this.name = fruitName;
    this.type = fruitType;
}

basket = new Basket;