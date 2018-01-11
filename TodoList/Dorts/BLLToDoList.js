function ToDoList(id, title) {
    this.id = id;
    this.title = title;
    this.arrTasks = [];
    var that = this;    

    this.addTask = function (title, deadline) {
        var task = new Task(this._findMaxIndex().id + 1, title, deadline);
        this.arrTasks.push(task);
        return task;
    };

    this._findMaxIndex = function () {
        return this.arrTasks.reduce(function (prev, cur) {
            return cur.id > prev.id ? cur : prev;
        }, { id: 0 }); 
    };

    this._findTaskIndex = function (id, operation) {
        for (var i = 0; i < this.arrTasks.length; i++) {
            if (this.arrTasks[i].id === id) {
                operation(i);
                break;
            }
        }
    };

    this.deleteTask = function (id) {
        this._findTaskIndex(id, function (deletionIndex) {
            that.arrTasks.splice(deletionIndex, 1);
        });
    };

    this.updateTask = function (id, title, deadline) {
        this._findTaskIndex(id, function (updateIndex) {
            that.arrTasks[updateIndex].title = title;
            that.arrTasks[updateIndex].deadline = deadline;
        });
    };

    this.checkTask = function (id) {
        this._findTaskIndex(id, function (checkingIndex) {
            if (that.arrTasks[checkingIndex].isDone === true) {
                that.arrTasks[checkingIndex].isDone = false;
            }
            else that.arrTasks[checkingIndex].isDone = true;
        })
    };
};

function Task(id, title, deadline) {
    this.id = id;
    this.title = title;
    this.deadline = deadline;
    this.isDone = false;
}
