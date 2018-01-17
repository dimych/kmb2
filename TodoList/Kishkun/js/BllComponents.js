function ListToDo() {
    this.start = function () {
        this._uiContainer = new ToDoListComponents();
        this._uiContainer.render();

        this.fieldEl = document.querySelector('.my-field');
        this.listEl = document.querySelector('.list');
        this.buttonAdd = document.querySelector('.list-btn');
        var that = this;
        this.buttonAdd.addEventListener('click', function (event) {
            that.onAddNewListClick(event);

        });


        this.onAddNewListClick = function () {
            // var liEl = document.createElement('li');
            // var elValue = this.fieldEl.value;
            // var textEl = document.createTextNode(elValue);
            // liEl.appendChild(textEl);
            // if (elValue === '') {
            //     alert('Add list!');
            // } else {
            //     this.listEl.appendChild(liEl);
            // };

            var creatEl = $.templates('#creatEl');
            var html = creatEl.render({
                title:  $('.my-field').val()
            });

            $('.list').append(html);

            this.fieldEl.value = '';

        };

    }

}


// var buttonToDelete = document.createElement('a');
// buttonToDelete.id = 'deleteTask';
// buttonToDelete.href = '';
// buttonToDelete.innerHTML = '\u00D7;
// liEl.appendChild(buttonToDelete);