function SaveLoader() {
    this.save = function (key, object) {
        var arrayString = JSON.stringify(object);
        localStorage.setItem(key, arrayString);
    },

    this.load = function (key) {
        var something = JSON.parse(localStorage.getItem(key));
        debugger;
        return something;
    };
}

function Wrapper (objectName) {
    this.key = objectName.constructor.name;
    this.object = objectName;
}

var saveLoader = new SaveLoader();

saveLoader.save('bam', basket.apples);
var array1 = saveLoader.load('bam');

