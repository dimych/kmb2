function ToDoList(title,id) {
	this.name = title;
	this.element = document.getElementById(id);
	this.tasks = [];
	
	var id = 0; //приватная переменная, не доступна извне

	this.addNewItem = function (nameItem, deadlineItem) {
		
		var task = new ToDoTask(this.deleteItem);
		task.name = nameItem;
		task.deadLine = deadlineItem;
		this.tasks.push(task);
		var taskElement = task.render();
		this.element.appendChild(taskElement);	
		id++;
		task.id = id;
	};


	this.completeItem = function (nameItem, deadlineItem) {
		//

		// body...
		console.log('item complete');
	};

	this.addTaskinList = function(){
		var nameTask = document.getElementById('taskName')
		if(nameTask.value) {
			whatToBuy.addNewItem(nameTask.value);
		};
		nameTask.value = "";
		console.log(whatToBuy.tasks);
	}

	var btnAdd = document.getElementById('BtnAdd')
	btnAdd.addEventListener('click',this.addTaskinList);

	var that = this;
	this.deleteItem = function (element,idTask) {
		
		that.element.removeChild(element);

		for (var index = 0; index < that.tasks.length; index++) {
			var element = that.tasks[index];
			if (element.id === idTask) {
				that.tasks.splice(index,1);	
				break;
			} 
		}


		console.log(whatToBuy.tasks);
	};

}

var whatToBuy = new ToDoList('Buy','todo-list');





console.log(whatToBuy.name);
var whatToLearn = new ToDoList('Learn');

