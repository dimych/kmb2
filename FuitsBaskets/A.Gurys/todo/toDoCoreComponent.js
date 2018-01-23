function Task(id, content) {
    this.id = id;
    this.taskToDo = content;
    // this.deadline = deadline;
    // this.isDone = False;
}

function ToDoList() {
    var that = this;
    // this.id = id;
    this.taskList = [];

    this.addTask = function (id, content) {
        var task = new Task(id, content);
        this.taskList.push(task);
    };

    this._findTaskIndex = function (id, operation) {
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id === id) {
                operation(i);
                break;
            }
        }
    };

    this.deleteTask = function (id) {

        this._findTaskIndex(id, function (deletionIndex) {
            that.taskList.splice(deletionIndex, 1);
        });

    };
    // this.updateTask = function (id) {
    // };

    // this.checkTask = function (id) {
    // };
}

var toDoList1 = new ToDoList();
// toDoList.addTask('taskId', 'buy burger');
// alert(toDoList.taskList);

























