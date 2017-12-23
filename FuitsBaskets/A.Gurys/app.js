basketApp = {
    $addName: $('<input placeholder = "name your fruit" value = "Pear">'),
    $addSelect: $('<select><option>Apple</option><option selected>Pear</option><option>Orange</option></select>'),
    $addButton: $('<button>add</button>'),
    $giveSelect: $('<select><option>Apples</option><option>Pears</option><option>Oranges</option></select>'),
    $giveButton: $('<button>give</button>'),
    $clearSelect: $('<select><option>Apples</option><option>Pears</option><option>Oranges</option></select>'),
    $clearButton: $('<button>clear</button>'),
    $applePocket: $('#applePocket'),
    $pearPocket: $('#pearPocket'),
    $orangePocket: $('#orangePocket'),
    $saveButton: $('<button>save</button>'),
    $loadButton: $('<button>load</button>'),


    buildHTML: function () {
        $('#adding').append(this.$addName);
        $('#adding').append(this.$addSelect);
        $('#adding').append(this.$addButton);
        $('#giving').append(this.$giveSelect);
        $('#giving').append(this.$giveButton);
        $('#clearing').append(this.$clearSelect);
        $('#clearing').append(this.$clearButton);
        $('#controlling').append(this.$saveButton);
        $('#controlling').append(this.$loadButton);

        var that = this;
        this.$addButton.on('click', function (e) { that.addFruit(e) });
        this.$giveButton.on('click', function (e) { that.giveFruit(e) });
        this.$clearButton.on('click', function (e) { that.clearFruit(e) });
        this.$saveButton.on('click', saveLoader.save);
        this.$loadButton.on('click', saveLoader.load);
    },

    addFruit: function () {
        var fruitName = $('#adding input').val();
        var fruitType = $('#adding select option:selected').html();
        switch (fruitType) {
            case 'Apple':
                this.$applePocket.append('<li>' + fruitName + '</li>');
                basket.apples.push(fruitName = new Fruit(fruitName, fruitType));
                break;
            case 'Pear':
                this.$pearPocket.append('<li>' + fruitName + '</li>');
                basket.pears.push(fruitName = new Fruit(fruitName, fruitType));
                break;
            case 'Orange':
                this.$orangePocket.append('<li>' + fruitName + '</li>');
                basket.oranges.push(fruitName = new Fruit(fruitName, fruitType));
                break;
        }
    },

    giveFruit: function () {
        var fruitType = $('#giving select option:selected').html();
        switch (fruitType) {
            case 'Apples':
                alert(this.$applePocket.html());
                break;
            case 'Pears':
                alert(this.$pearPocket.html());
                break;
            case 'Oranges':
                alert(this.$orangePocket.html());
                break;
        }
    },

    clearFruit: function () {
        var fruitType = $('#clearing select option:selected').html();
        switch (fruitType) {
            case 'Apples':
                this.$applePocket.html('');
                basket.apples = [];
                break;
            case 'Pears':
                this.$pearPocket.html('');
                basket.pears = [];
                break;
            case 'Oranges':
                this.$orangePocket.html('');
                basket.oranges = [];
                break;
        }
    }
}
basketApp.buildHTML();