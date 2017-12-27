
function localStorageList() {
    this.save = function (key, object) {
        var wrapper = {
            name: object.constructor.name,
        }
        var strSaveList = JSON.stringify(wrapper);
        localStorage.setItem(key, strSaveList);
    }

    this.load = function(key) {
        var strLoadList = localStorage.getItem(key);
        var wrapper = JSON.parse(strLoadList);
        if (wrapper.name === 'ListToDo') {
            var newListToDo = new ListToDo();
            newListToDo.name = wrapper.obj;
        }
    }
}









var localStorageToDoList = new localStorageList();

var listToDo = new ListToDo('new str');

localStorageToDoList.save('ToDoList', myToDoList);
localStorageToDoList.load('ToDoList');
