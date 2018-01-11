// var inputTaskNameEl = document.querySelector('#imput-task-name');
// var buttonForAddTaskNameEl = document.querySelector('#add-task-name');
// var tableForTaskNameEl = document.querySelector('.containerTable');
var buttonForupdateTask;
var deleteLineA;
var arrStandartTask = [];

arrStandartTask.push('toDoList');
arrStandartTask.push('Slider');
arrStandartTask.push('Fruit Basket');

//creature taskList standart value
for (var i = 0; i < arrStandartTask.length; i++) {
    creatureNewLine(arrStandartTask[i]);
}
// buttonForAddTaskNameEl.addEventListener('click', onAddNewArticleButtonClick);
// fillAnArrayLinks();
// onButtonUpdateTaskClick();

// function onButtonUpdateTaskClick() {
//     buttonForupdateTask = document.querySelectorAll('#updateTask');
//     for (var i = 0; i < buttonForupdateTask.length; i++) {
//         buttonForupdateTask[i].addEventListener('click', updateTask)
//     }
// }
// function updateTask(e) {
//     e.preventDefault();
//     var clickedTask = e.target;
//     var thisTask = clickedTask.parentElement.parentElement.firstElementChild;
//     thisTask.innerHTML = '';
//     //create new elements for save new name task 
//     var newNameTask = document.createElement('input');
//     var saveNewNameTask = document.createElement('button');

//     newNameTask.className = 'inputForNewTaskName';
//     newNameTask.placeholder = 'input new task name';
//     newNameTask.type = 'text';

//     saveNewNameTask.className = 'buttonForNewTaskName';
//     saveNewNameTask.href = '';
//     saveNewNameTask.innerHTML = 'save';

//     thisTask.appendChild(newNameTask);
//     thisTask.appendChild(saveNewNameTask);
//     //после создания элементов их нужно убрать и вернуть новое имя таски
//     var buttonforSaveNewTaskName = document.querySelector('.buttonForNewTaskName');
//     buttonforSaveNewTaskName.addEventListener('click', function () {
//         var newNameTaskEl = document.querySelector('.inputForNewTaskName');
//         thisTask.innerHTML = newNameTaskEl.value;
//     });
// }
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
// function creatureNewLine(name) {
//     var newTitle = name;
//     var newRow = tableForTaskNameEl.insertRow(1);
//     var cell0 = newRow.insertCell(0);
//     var cell1 = newRow.insertCell(1);
//     var cell2 = newRow.insertCell(2);
//     var cell3 = newRow.insertCell(3);
//     //fill cell 0
//     cell0.innerHTML = newTitle;
//     //fill cell 1
//     var checkBox = document.createElement('input');
//     checkBox.type = 'checkBox';
//     cell1.appendChild(checkBox);
//     //fill cell 2
//     var buttonForUpdate = document.createElement('a');
//     buttonForUpdate.id = 'updateTask';
//     buttonForUpdate.href = '';
//     buttonForUpdate.innerHTML = 'update';
//     cell2.appendChild(buttonForUpdate);
//     //fill cell 3
//     var buttonToDeleteLine = document.createElement('a');
//     buttonToDeleteLine.id = 'deleteTask';
//     buttonToDeleteLine.href = '';
//     buttonToDeleteLine.innerHTML = 'delete';
//     cell3.appendChild(buttonToDeleteLine);

//     //clear input and fill out an array of links

//     inputTaskNameEl.value = '';
//     fillAnArrayLinks();
//     onButtonUpdateTaskClick();
// }
// function onAddNewArticleButtonClick(e) {
//     e.preventDefault();

//     var nameTask = inputTaskNameEl.value;
//     creatureNewLine(nameTask);
// }
