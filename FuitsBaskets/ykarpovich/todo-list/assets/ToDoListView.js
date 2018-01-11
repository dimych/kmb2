var titleList = $('#title-list');
var addNewListBtn = $('#add-list-btn');
var newTitleListInput = $('#new-list-title');

function showMoreBtn() {
    var $showMoreBtn = $('<button>').text('Show more').addClass('showMoreBtn');
    $('body').append($showMoreBtn);
}
showMoreBtn();