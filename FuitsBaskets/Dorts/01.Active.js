basket.addProduct(apple1);
basket.addProduct(apple2);
basket.addProduct(orange1);
basket.addProduct(orange2);

var allApplesFromBasket = basket.getAllApples();
for (var i=0; i<allApplesFromBasket.length; i++) {
    console.log(allApplesFromBasket[i].name)
}

basket.clear();
var allApplesFromBasket = basket.getAllApples();
console.log(allApplesFromBasket.length === 0);
