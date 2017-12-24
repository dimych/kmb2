function LocalStorageBasket() {
    this.save = function (key, object) {
        var wrapper = {
            name: object.constructor.name,
            object: object,
        }
        var str = JSON.stringify(wrapper);
        localStorage.setItem(key, str);
        console.log('save');
    };
    this.load = function (key) {
        var wrapperString = localStorage.getItem(key);
        var wrapper = JSON.parse(wrapperString);
        if (wrapper.object.name === 'Apple') {
            console.log('apple');
        }
        if (wrapper.object.name === 'Orange') {
            console.log('orange');
        }
        console.log('load');
        return wrapper;
    };
};

var dal = new LocalStorageBasket();

var apple = new Apple('BlaBlaCar', false);
var orange = new Orange('Malavita', 'circle');

dal.save('Apple', apple);
dal.save('Orange', orange);

dal.load('Apple');
dal.load('Orange');