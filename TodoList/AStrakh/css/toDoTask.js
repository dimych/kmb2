function ToDoTask(delCallBack) {
	// body...
	
	this.id = 0;
	this.comleted = false;
	this.name = null;
	this.deadLine = null
	this._element = null;
	this._elementDel = null;
	this._delCallBack = delCallBack;

	this.render = function () {
		var liElement = document.createElement('li');
		liElement.innerHTML = this.name;
		liElement.id = this.name;
		this._element = liElement;
		this._initTask();

		var delBtn = document.createElement('button');
		delBtn.value = 'DEL';
		delBtn.innerHTML = 'X';
		this._elementDel = delBtn;
		this._delTask();

		liElement.appendChild(delBtn)
		return liElement;
	};

	this._initTask = function () {
		var that = this;
		this._element.addEventListener('click', function (event) {
			that._onOperationByClickAdd(event);
		});
	}


	this._onOperationByClickAdd = function (eventObject) {
		var clickedElement = eventObject.currentTarget;
		if (clickedElement !== eventObject.target) {
			return;
		}
		if (clickedElement.classList.contains('complete')) {
			clickedElement.classList.remove('complete');
			this.comleted = false;
		} else {
			clickedElement.classList.add('complete');
			this.comleted = true;
		}

	};

	this._delTask = function () {
		var that = this;
		this._elementDel.addEventListener('click', function (event) {
			that._onOperationByClickDel(event);
		});
	};

	this._onOperationByClickDel = function (eventObject) {
		// parentElement.removeChild(this._element);
		// this.delTask = true;
		this._delCallBack(this._element,this.id);
		
	};


}

