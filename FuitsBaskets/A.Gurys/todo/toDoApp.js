function ToDoApp() {

    this.addTaskBtn = document.getElementById('addBtn');
    this.tasks = [];
    this.index = 0;
    this.toDoComp = toDoList1;
    var that = this;

    this.createTask = function () {
        var taskContent = $('#taskInput').val();
        var newRow = $('<tr>');
        var newTaskContent = $('<td>');
        var newCheckbox = $('<td>');
        newTaskContent.text(taskContent);
        newCheckbox.append($('<input/>').attr({ type: 'checkbox' }))
        $('table').append(newRow);
        $(newRow).append(newTaskContent);
        $(newRow).append(newCheckbox);
        console.log($('#taskInput').val());

        that.toDoComp.addTask(that.index, taskContent);
        that.index++;
    };

    this.init = function () {

        this.addTaskBtn.addEventListener('click', function (e) { that.createTask() });
    };
}

var toDoApp = new ToDoApp();
toDoApp.init();




