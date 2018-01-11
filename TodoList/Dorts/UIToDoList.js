var List = function (id, title) {
    this.list = new ToDoList(id, title);
    this.listContainer = document.createElement('div');
    this.listsContainer = document.getElementById('lists-container');
    // this.listElement = null;
    // this.listTitle = null;
    // this.listAddForm = null;
    // this.titleInput = null;
    // this.dateInput = null;
    // this.addNewTaskButton = null;
    // this.dateLabel = null;

    this.init = function () {
        var listElement = document.createElement('div');
        listElement.id = this.list.id;
        this.listsContainer.appendChild(listElement);
        var listTitle = document.createElement('div');
        listTitle.innerHTML = this.list.title;
        var listAddForm = document.createElement('form');
        listElement.appendChild(listTitle);
        listElement.appendChild(document.createElement('hr'));
        listElement.appendChild(this.listContainer);
        listElement.appendChild(document.createElement('hr'));
        listElement.appendChild(listAddForm);
        var titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.placeholder = 'Add new task...';
        var dateLabel = document.createElement('p');
        dateLabel.innerHTML = 'DeadLine: ';
        var dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.valueAsDate = new Date();
        var addNewTaskButton = document.createElement('button');
        addNewTaskButton.innerText = 'Add';
        addNewTaskButton.type = 'submit';
        addNewTaskButton.disabled = true;
        listAddForm.appendChild(titleInput);
        listAddForm.appendChild(dateLabel);
        listAddForm.appendChild(dateInput);
        listAddForm.appendChild(addNewTaskButton);
        var that = this;
        addNewTaskButton.addEventListener('click', function (e) { that.onaddNewListBtnClick(e, that)});
        titleInput.addEventListener('keyup', function (e) { that.onnewTitleListInputChange(e, that) });
    };

    this.onnewTitleListInputChange = function (e) {
        var inputValue = e.currentTarget.value;
        if (inputValue == '') {
            e.currentTarget.form[2].disabled = true;
        } else {
            e.currentTarget.form[2].disabled = false;
        }
    };

    this.onaddNewListBtnClick = function (e, that) {
        e.preventDefault();
        that.list.addTask(e.currentTarget.form[0].value, e.currentTarget.form[1].value);
        e.currentTarget.form[0].value = '';
        e.currentTarget.form[2].disabled = true;
        that.render();
    };

    this.deleteTaskClick = function (e, id, that) {
        e.preventDefault();
        that.list.deleteTask(id);
        that.render();
    };

    this.checkTaskClick = function (e, id, that) {
        e.preventDefault();
        that.list.checkTask(id);
        that.render();
    };

    this.renderTask = function (taska) {

        var taskContainer = document.createElement('div');
        var task = document.createElement('div');
        var taskTitle = document.createElement('p');
        var taskDeadline = document.createElement('p');
        var actionsPanel = document.createElement('div');
        var deleteLink = document.createElement('a');
        var checkboxIsDone = document.createElement('input');
        // var editLink = document.createElement('a');
        
        this.listContainer.appendChild(taskContainer);
        taskContainer.appendChild(task);
        taskContainer.appendChild(actionsPanel);
        task.appendChild(taskTitle);
        task.appendChild(taskDeadline);
        actionsPanel.appendChild(checkboxIsDone);
        // actionsPanel.appendChild(editLink);
        actionsPanel.appendChild(deleteLink);
        
        taskTitle.innerHTML = taska.title;
        taskDeadline.innerHTML = taska.deadline;
        checkboxIsDone.type = 'checkbox';
        deleteLink.innerHTML = '&#10008;';
        // editLink.innerHTML = '&#9999;';

        // taskContainer.id = taska.id;
        taskContainer.classList = taska.isDone?'line-through task':'task';
        checkboxIsDone.checked = taska.isDone;
        var that = this;
        deleteLink.addEventListener('click', function(e){that.deleteTaskClick(e, taska.id, that)});
        checkboxIsDone.addEventListener('click', function(e){that.checkTaskClick(e, taska.id, that)});
        // editLink.addEventListener('click', function(e){that.editTask(taska.id)});
    }

    this.render = function () {
        this.listContainer.innerHTML = '';
        for (var i in this.list.arrTasks) {
            this.renderTask(this.list.arrTasks[i]);
        }
    }
}

var list = new List(2, 'Home work');
list.init();

var list2 = new List(3, 'Bye products');
list2.init();