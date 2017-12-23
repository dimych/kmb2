var basket = new Basket();
basket.addProduct(apple1);
basket.addProduct(apple2);
basket.addProduct(orange1);
basket.addProduct(orange2);

console.log(basket.product);

var allApplesFromBasket = basket.getAllApples();
for (var i=0; i < basket.product.length; i++) {
    if (basket.product[i].constructor == Apple) 
	console.log(basket.product[i].name);
}


