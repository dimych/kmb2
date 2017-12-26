var apple1 = new Apple('princ', true);
var apple2 = new Apple('antonovka', false);
var apple3 = new Apple('gorec', true);
var apple4 = new Apple('slava pobediteljam', false);
var apple5 = new Apple('naliv', false);

var pear1 = new Pear('konferncija', 1);
var pear2 = new Pear('konferncija+', 2);
var pear3 = new Pear('konferncija++', 4);
var pear4 = new Pear('konferncija', 3);
var pear5 = new Pear('konferncija', 5);

var orange1 = new Orange('an', 'Egypt');
var orange2 = new Orange('an', 'Argentina');
var orange3 = new Orange('an', 'Brazil');
var orange4 = new Orange('an', 'SAR');
var orange5 = new Orange('an', 'SAR');


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