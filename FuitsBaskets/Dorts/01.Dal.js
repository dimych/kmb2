function LocalStorageBasket() {
    this.save = function (key, object) {//ключ:значение - передаем название и то, что хотим переобразовать
        var wrapper = {
            name: object.constructor.name,
            object: object,
        }
        var str = JSON.stringify(wrapper);//передаём то, что хотим переобразовать в строку
        localStorage.setItem(key, str);//передаем название и переобразованную переменную с тем, что хотим переобразовать
        console.log('save');
    };
    this.load = function (key) {
        var wrapperString = localStorage.getItem(key);
        var wrapper = JSON.parse(wrapperString);
        var objWitoutType = wrapper.object;
        if (wrapper.name === 'Apple') {
            return new Apple();
        }
        if (wrapper.name === 'Orange') {
            return new Orange();
        }
        console.log('load');
        return objWitoutType;
    };
};

var dal = new LocalStorageBasket();
var apple = new Apple('BlaBlaCar', false);
dal.save('Array', apple);//передаем название массива и переменную-массива


dal.load('Array');

// var basket = basketApp.basket;
