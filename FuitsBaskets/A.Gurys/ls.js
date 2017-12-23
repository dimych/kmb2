function SaveLoader() {
    this.save = function (key, object) {
        alert('someday I will save you');
        
    },
        this.load = function () {
            alert('someday I will load you');
        };
}



























var saveLoader = new SaveLoader();

var apples = [{ h: 768 }, { k: 78 }];

saveLoader.save("apples", apples);

var applesFromDB = saveLoader.get("applaes");

