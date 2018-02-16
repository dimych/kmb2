

function List(id){
    var that = this;
    this._getIndex = function(id, operation){
        for(var i = 0; i<this.tasks.length; i++){
            if(this.tasks[i].id === id){
                operation(i);
                break;
            } 
        }
    }

    this.tasks = [];
    this.GetTasks = function(name){
         var drowTask = new CreateLine(name);
         
    }
    this.updateTask = function(newTitle, id){

        this._getIndex(id, function(neededId){
            that.tasks[neededId].title = newTitle;
        });
        
    };

    this.deleteTask = function(id){
        this._getIndex(id, function(neededId){
            that.tasks.splice(neededId, 1);
        });
        
    };

    this.addTask = function(name, id){
        var newTask = new Task(name, id);
        this.tasks.push(newTask);
        var newLine = new CreateLine(name);
        var taskInServise = new CreateTask();
        taskInServise.create(name);
        // CreateLine(name);

    };

}

var buttonForAddTaskNameEl = document.querySelector('#add-task-name');


buttonForAddTaskNameEl.addEventListener('click', function(e){
    e.preventDefault();
    var inputTaskNameEl = document.querySelector('#imput-task-name');
    var nameTask = inputTaskNameEl.value;
    toDoList.addTask(nameTask);
});


function onButtonUpdateTaskClick() {
    buttonForupdateTask = document.querySelectorAll('#updateTask');
    for (var i = 0; i < buttonForupdateTask.length; i++) {
        buttonForupdateTask[i].addEventListener('click', updateTaskF)
    }
}
function updateTaskF(e) {
    e.preventDefault();
    var clickedTask = e.target;
    var thisTask = clickedTask.parentElement.parentElement.firstElementChild;
    thisTask.innerHTML = '';
    //create new elements for save new name task 
    var newNameTask = document.createElement('input');
    var saveNewNameTask = document.createElement('button');

    newNameTask.className = 'inputForNewTaskName';
    newNameTask.placeholder = 'input new task name';
    newNameTask.type = 'text';

    saveNewNameTask.className = 'buttonForNewTaskName';
    saveNewNameTask.href = '';
    saveNewNameTask.innerHTML = 'save';

    thisTask.appendChild(newNameTask);
    thisTask.appendChild(saveNewNameTask);
    //после создания элементов их нужно убрать и вернуть новое имя таски
    var buttonforSaveNewTaskName = document.querySelector('.buttonForNewTaskName');
    buttonforSaveNewTaskName.addEventListener('click', function () {
        var newNameTaskEl = document.querySelector('.inputForNewTaskName');
        thisTask.innerHTML = newNameTaskEl.value;
    });

    newPutTest.put(newNameTask, id);


}

function fillAnArrayLinks() {
    deleteLineA = document.querySelectorAll('#deleteTask');
    for (var i = 0; i < deleteLineA.length; i++) {
        deleteLineA[i].addEventListener('click', onDeleteArticleButtonClick);
    }
}
function onDeleteArticleButtonClick(e) {
    e.preventDefault();
    var clickedLink = e.target;
    var td = clickedLink.parentElement;
    var row = td.parentElement;
    row.remove();
}

var toDoList = new List();


// toDoList.addTask('buy bread', '0');
// toDoList.addTask('buy milk', '1');
// toDoList.addTask('buy milk', '2');
// console.log(toDoList.tasks);
// toDoList.deleteTask('1');
// toDoList.deleteTask('0');
// console.log(toDoList.tasks);
// toDoList.updateTask('buy pie', '2');
// console.log(toDoList.tasks);

onButtonUpdateTaskClick();
fillAnArrayLinks();