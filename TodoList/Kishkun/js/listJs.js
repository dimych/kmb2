function ListToDo() {
    this.fieldEl = null;
    this.buttonAdd = null;
    this.listEl = null;

    this.start = function (elId) {
        var elSelector = '#' + elId;
        this.el = document.querySelector(elSelector);
        this.fieldEl = this.el.querySelector('.my-field');
        this.buttonAdd = this.el.querySelector('.list-btn');
        this.listEl = this.el.querySelector('.list');
        var that = this;
        this.buttonAdd.addEventListener('click', function (event) {
            that.onAddNewListClick(event);
        });
    };

    this.onAddNewListClick = function () {
        var liEl = document.createElement('li');
        var elValue = this.fieldEl.value;
        var textEl = document.createTextNode(elValue);
        liEl.appendChild(textEl);
        if (elValue === '') {
            alert('Add list!');
        } else {
            this.listEl.appendChild(liEl);
        };

        this.fieldEl.value = '';
    };
};






// var fieldEl = document.querySelector('.my-field');
// var buttonAdd = document.querySelector('.list-btn');
// var listEl = document.querySelector('.list');

// buttonAdd.addEventListener('click', onAddNewListClick);

// function onAddNewListClick() {
//     var liEl = document.createElement('li'); 
//     var elValue = fieldEl.value;
//     var textEl = document.createTextNode(elValue);
//     liEl.appendChild(textEl);
//          if (elValue === '') {
//            alert('Add list');
//          } else {
//            listEl.appendChild(liEl);
//          }
//          fieldEl.value = '';
// };
