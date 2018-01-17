function ToDoList(id, title) {
    this.id = id;
    this.title = title;
    this.arrTasks = [];
    var that = this;
    this.service = new ToDoListService();

    this.getAllTasks = async function() {
        this.arrTasks = await this.service.getTasks();
        return this.arrTasks;
    }

    this.addTask = async function (title, deadline) {
        await this.service.addTask(title, deadline);
        console.log('1');
        // var task = new Task(this._findMaxIndex().id + 1, title, deadline);
        // this.arrTasks.push(task);
        // return task;
    };

    // this._findMaxIndex = function () {//уточнить по попводу столкновения интересов индексов и айдишников
    //     return this.arrTasks.reduce(function (prev, cur) {
    //         return cur.id > prev.id ? cur : prev;
    //     }, { id: 0 }); 
    // };

    this._findTaskIndex = async function (id, operation) {
        for (var i = 0; i < this.arrTasks.length; i++) {
            if (this.arrTasks[i].id === id) {
                await operation(i);
                break;
            }
        }
    };

    this.deleteTask = async function (id) {
        var that = this;
        await this._findTaskIndex(id, async function (deletionIndex) {
            await that.service.deleteTask(that.arrTasks[deletionIndex]);            
            //     that.arrTasks.splice(deletionIndex, 1);
        });
    };

    // this.updateTask = function (id, title, deadline) {
    //     this._findTaskIndex(id, function (updateIndex) {
    //         that.arrTasks[updateIndex].title = title;
    //         that.arrTasks[updateIndex].deadline = deadline;
    //     });
    // };

    this.checkTask = async function (id) {
        var that = this;
        await this._findTaskIndex(id, async function (checkingIndex) {
            await that.service.checkTask(that.arrTasks[checkingIndex]);
            // if (that.arrTasks[checkingIndex].isDone === true) {
            //     that.arrTasks[checkingIndex].isDone = false;
            // }
            // else that.arrTasks[checkingIndex].isDone = true;
        })
    };
};

function Task(id, title, deadline) {
    this.id = id;
    this.title = title;
    this.deadline = deadline;
    this.isDone = false;
}
