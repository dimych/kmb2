var addTaskBtn = document.getElementById('addBtn');
var tasks = document.querySelector('table');

addTaskBtn.addEventListener('click', createTask);

function createTask () {
var taskContent = $('#taskInput').val();
var newRow = $('<tr>');
var newTaskContent = $('<td>');
var newCheckbox = $('<td>');
newTaskContent.text(taskContent);
newCheckbox.append($('<input/>').attr({ type: 'checkbox'}))
$('table').append(newRow);
$(newRow).append(newTaskContent);
$(newRow).append(newCheckbox);
console.log($('#taskInput').val());
}