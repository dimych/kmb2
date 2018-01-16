
function LocalStorageService() {
    this.save = function (key, object) {
        var wrapper = {
            name: object.constructor.name
        }
        var strSaveList = JSON.stringify(wrapper);
        localStorage.setItem(key, strSaveList);
    }

    this.load = function (key) {
        var strLoadList = localStorage.getItem(key);
        var wrapper = JSON.parse(strLoadList);
        if (wrapper.name === 'toDoList') {
            var newListToDo = new ListToDo();
            newListToDo.name = wrapper.obj.name;
        }
        return wrapper;
    }
}

var toDoListService = new LocalStorageService();


toDoListService.save('toDoList', myToDoList);
toDoListService.load('toDoList');