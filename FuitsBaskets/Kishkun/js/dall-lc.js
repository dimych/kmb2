// function Dal() {
//     this.save = function (object) {
//         var wrapper = {
//             name: object.constructor.name,
//             obj: object
//         }

//         var strSaveDal = JSON.stringify(wrapper);
//         localStorage.setItem('key', strSaveDal);
//     }

//     this.load = function () {
//         var strLoadDal = localStorage.getItem('key');
//         var wrapper = JSON.parse(strLoadDal);
//         return wrapper;

//         if (wrapper.name === 'Apple') {
//             var appleNewObject = new Apple();
//             appleNewObject.name = wrapper.obj.name;
//             appleNewObject.isWinter = wrapper.obj.isWinter;
//         }
//         console.log(wrapper);
//         //console.log(parseDal);
//     }
// }


function LocalStorageService() {
    this.save = function (key, object) {
        var wrapper = {
            name: object.constructor.name,
            obj: object
        }

        var strSaveDal = JSON.stringify(wrapper);
        localStorage.setItem(key, strSaveDal);
    };

    this.load = function (key) {
        var strLoadDal = localStorage.getItem(key);
        var wrapper = JSON.parse(strLoadDal);

        if (wrapper.name === 'Apple') {
            var appleNewObject = new Apple();
            appleNewObject.name = wrapper.obj.name;
            appleNewObject.isWinter = wrapper.obj.isWinter;
        }

        if (wrapper.name === 'Pear') {
            var appleNewObject = new Pear();
            appleNewObject.name = wrapper.obj.name;
            appleNewObject.type = wrapper.obj.type;
        }

        if (wrapper.name === 'Orange') {
            var appleNewObject = new Orange();
            appleNewObject.name = wrapper.obj.name;
            appleNewObject.country = wrapper.obj.country;
        }
        return wrapper;
    }
}



