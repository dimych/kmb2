var List = function (list) {
    this.list = list;
    this.render = function () {
        var listContainer = document.createElement('div');
        var listik = document.createElement('div');
        var deletebtn = document.createElement('div');

        titleList.appendChild(listContainer);
        listContainer.appendChild(listik);
        listContainer.appendChild(deletebtn);
        listik.classList.add('js-delete');
        deletebtn.classList.add('js-delete');
        listik.innerHTML = this.list;

        var deleteLink = document.createElement('a');
        deleteLink.href = '';
        deleteLink.innerHTML = 'delete';
        deleteLink.addEventListener('click', removeDivListener);
        deletebtn.appendChild(deleteLink);

        newTitleListInput.value = '';
        addNewTitleBtn.disabled = true;
    }
}