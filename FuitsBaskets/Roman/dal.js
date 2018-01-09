var constructors = [Apple, Pear, Orange];
newBasket._apples;
newBasket._oranges;
newBasket._pears;

function localStorageBascket(constructors) {
  this.save = function (name, item) {
    var wrapper = {
      typeOfObject: item[0].constructor.name,
      obj: item
    }
    var str = JSON.stringify(wrapper);
    localStorage.setItem(name, str);
  };
  this.load = function (key) {
    var str = localStorage.getItem(key);
    var tempObj = JSON.parse(str);
    var typeOfFruit = tempObj.typeOfObject;
    switch (typeOfFruit) {
      case 'Apple':
        var newApple1 = new Apple(tempObj.obj[0].name, tempObj.obj[0].isWinter);
        var newApple2 = new Apple(tempObj.obj[1].name, tempObj.obj[1].isWinter);
        var newApple3 = new Apple(tempObj.obj[2].name, tempObj.obj[2].isWinter);
        var newApple4 = new Apple(tempObj.obj[3].name, tempObj.obj[3].isWinter);
        var newApple5 = new Apple(tempObj.obj[4].name, tempObj.obj[4].isWinter);
        console.log(newApple1);
        console.log(newApple2);
        console.log(newApple3);
        console.log(newApple4);
        console.log(newApple5);
        break;
      case 'Orange':
        var newOrange1 = new Orange(tempObj.obj[0].name, tempObj.obj[0].country);
        var newOrange2 = new Orange(tempObj.obj[1].name, tempObj.obj[1].country);
        var newOrange3 = new Orange(tempObj.obj[2].name, tempObj.obj[2].country);
        var newOrange4 = new Orange(tempObj.obj[3].name, tempObj.obj[3].country);
        var newOrange5 = new Orange(tempObj.obj[4].name, tempObj.obj[4].country);
        console.log(newOrange1);
        console.log(newOrange2);
        console.log(newOrange3);
        console.log(newOrange4);
        console.log(newOrange5);
        break;
      case 'Pear':
        var newPear1 = new Pear(tempObj.obj[0].name, tempObj.obj[0].type);
        var newPear2 = new Pear(tempObj.obj[1].name, tempObj.obj[1].type);
        var newPear3 = new Pear(tempObj.obj[2].name, tempObj.obj[2].type);
        var newPear4 = new Pear(tempObj.obj[3].name, tempObj.obj[3].type);
        var newPear5 = new Pear(tempObj.obj[4].name, tempObj.obj[4].type);
        console.log(newPear1);
        console.log(newPear2);
        console.log(newPear3);
        console.log(newPear4);
        console.log(newPear5);
        break;
    }
  };
};

var bascketStorege = new localStorageBascket(constructors);
bascketStorege.save('apple', newBasket._apples);
bascketStorege.load('apple');

bascketStorege.save('oranges', newBasket._oranges);
bascketStorege.load('oranges');

bascketStorege.save('pear', newBasket._pears);
bascketStorege.load('pear');



