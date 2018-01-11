//temp widjetId
var wdId = 321;

function Task(widgetId, title) {
    this.id = null;
    this.widgetId = widgetId;
    this.title = title;

    // this.guid = null;
}
function List() {
    var that = this;
    this.tasksList = [];
    this.getList = function () {
        //set list to user
        console.log(this.tasksList);
        var list = this.tasksList;
    }

    this.removeTask = function (id) {
        this._makeOperationByIndex(id, function (neededId) {
            that.tasksList.splice(neededId, 1);
        });
    }
    this.addTask = function (body) {
        var task = new Task(wdId, body);
        task.id = this._makeUniqueId();
        // task.id = "123";//test should be unique
        this.tasksList.push(task);
        // console.log(this.tasksList);
    }
    this.updateTaks = function (taskId, newTitle) {
        this._makeOperationByIndex(taskId, function(neededId){
            that.tasksList[neededId].title = newTitle;
        });
    }
    this._makeOperationByIndex = function (id, operation) {
        for (var i = 0; i < this.tasksList.length; i++) {
            if (this.tasksList[i].id === id) {
                operation(i);
                break;
            }
        }
    }
    this._makeUniqueId = function(){
        var date = new Date();
        var time = date.getTime();
        return time;
    }
}


//also add widgetId to all requests
var makeList = new List();
makeList.addTask("lol");
makeList.removeTask("123");
makeList.updateTaks("123", "lol2");