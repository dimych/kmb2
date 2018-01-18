function Article(title, isReady, update) {
    this.title = title;
    this.isReady = isReady;

    this.render = function () {
        var newRow = articlesTable.insertRow(1);
        var cell0 = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        var cell2 = newRow.insertCell(2);
        var cell3 = newRow.insertCell(3);

        cell0.innerHTML = this.title;

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        cell1.appendChild(checkbox);

        var updateButton = document.createElement('a');
        updateButton.href = '';
        updateButton.classList.add('updateTask');
        updateButton.innerHTML = 'update';
        updateButton.addEventListener('click', updateTask);
        cell2.appendChild(updateButton);

        var deleteTask = document.createElement('a');
        deleteTask.href = '';
        deleteTask.classList.add('js-delete');
        deleteTask.innerHTML = '&#10006;';
        deleteTask.addEventListener('click', removeRowListener);
        cell3.appendChild(deleteTask);

        newArticleTitleInput.value = '';
        addNewArticleBtn.disabled = true;
    }
}
