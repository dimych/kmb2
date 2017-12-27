var onaddNewListBtnClick = function (e) {
    e.preventDefault();
    var newTitle = newTitleListInput.value;
    var newList = new List(newTitle);
    newList.render();
}
addNewListBtn.addEventListener('click', onaddNewListBtnClick);

var onnewTitleListInputChange = function (e) {
    var inputValue = e.target.value;
    if (inputValue == '') {
        addNewListBtn.disabled = true;
    } else {
        addNewListBtn.disabled = false;
    }
}
newTitleListInput.addEventListener('keyup', onnewTitleListInputChange);

var removeDivListener = function (e) {
    e.preventDefault();
    var clicked = e.target;
    var div = clicked.parentElement;
    var div1 = div.parentElement;
    div1.remove();
}