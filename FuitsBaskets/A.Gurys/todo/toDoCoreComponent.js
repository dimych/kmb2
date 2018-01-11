function Task(id, content, deadline) {
    this.id = id;
    this.taskToDo = content;
    this.deadline = deadline;
    this.isDone = true;
}

function ToDoList(id) {
    var that = this;
    this.id = id;
    this.taskList = [];
    this.addTask = function (id, content, deadline) {
        var task = new Task(id, content, deadline);
        this.taskList.push(task);
    };

    this._findTaskIndex = function (id, operation) {
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id === id) {
                operation(i);
                break;
            }
        }
    }

    this.deleteTask = function (id) {
        
         this._findTaskIndex(id, function(deletionIndex){
             that.taskList.splice(deletionIndex, 1);
         });
        
    };
    this.updateTask = function (id) {
    };

    this.checkTask = function (id) {
    };
}

var toDoList = new ToDoList('46');
// toDoList.addTask('taskId', 'buy burger', 'tomorrow');
// alert(toDoList.taskList);

























