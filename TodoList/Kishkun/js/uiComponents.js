function ToDoListComponents() {
    this.render = function () {
        // '<div class="first-container"></div><hr />');
        // $('.first-container').append('<input type="text" class="my-field" />');
        // $('.first-container').append('<button class="list-btn">add</button>');
        // $('#wrapper').append('<div class="second-container"></div>');
        // $('.second-container').append('<ol class="list"></ol>');
        var listToDo = $.templates('#listToDo');
        var html = listToDo.render({
            name: 'what to buy'
        });
        $('#wrapper').append(html);
    }
}