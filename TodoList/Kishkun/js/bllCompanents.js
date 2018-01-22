function Task() {

}


var addNewArticleBtn = document.getElementById('add-article-btn');
var articlesTable = document.getElementById('articles-table');
var newArticleTitleInput = document.getElementById('new-article-title');

var onAddNewArticleBtnClick = function (e) {
    e.preventDefault();

    var newArticleTitleInput = document.getElementById('new-article-title');
    var newTitle = newArticleTitleInput.value;

    var newArticle = new Article(newTitle);

    newArticle.render();
}

addNewArticleBtn.addEventListener('click', onAddNewArticleBtnClick);

var onNewArticleTitleInputKeyUp = function (e) {

    var inputValue = e.target.value;
    if (inputValue == '') {
        addNewArticleBtn.disabled = true;
    } else {
        addNewArticleBtn.disabled = false;
    }
}

newArticleTitleInput.addEventListener('keyup', onNewArticleTitleInputKeyUp);


var buttonUpdate = document.querySelectorAll('.updateTask');
var updateTask = function(e) {
    e.preventDefault();
    var clickedTask = e.target;
    var thisTask = clickedTask.parentElement.parentElement.firstElementChild;
    thisTask.innerHTML = '';
    var newNameTask = document.createElement('input');
    var saveNewTask = document.createElement('button');

    newNameTask.classList.add('inputNewTask');
    newNameTask.placeholder = 'write new task name';
    newNameTask.type = 'text';

    saveNewTask.classList.add('buttonSaveNewTask');
    saveNewTask.innerHTML = 'save';
    thisTask.appendChild(newNameTask);
    thisTask.appendChild(saveNewTask);

    var buttonForSaveTaskName = document.querySelector('.buttonSaveNewTask');
    buttonForSaveTaskName.addEventListener('click', function() {
        var newNameTaskEl = document.querySelector('.inputNewTask');
        thisTask.innerHTML = newNameTaskEl.value;
    })

}
for (var i = 0; i < buttonUpdate.length; i++) {
    buttonUpdate[i].addEventListener('click', updateTask);
}




var deleteLinks = document.querySelectorAll('.js-delete');
var removeRowListener = function (e) {
    e.preventDefault();
    var clickedLink = e.target;
    var td = clickedLink.parentElement;
    var row = td.parentElement;
    row.remove();
}
for (var i = 0; i < deleteLinks.length; i++) {

    deleteLinks[i].addEventListener('click', removeRowListener);
}

for (var i = 0; i < articlesTitleObjects.length; i++) {
    var articleObject = articlesTitleObjects[i];
    articleObject.render();
}
