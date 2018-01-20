var arrayForTasksServise = [];

function ServerApiService() {
    this.request = function () {
        $.ajax({
            type: "GET",
            url: 'http://repetitora.net/api/JS/Tasks/?widgetid=1553&count=10',
            dataType: "script",
            success: function (data) {
                this.data = data;
                for (var i = 0; i < this.data.length; i++) {
                    arrayForTasksServise.push(data[i].id);
                    toDoList.GetTasks(data[i].title);
                }

                console.log('get');
                console.log(arrayForTasksServise);
            }

        });
    }

}

var requestOne = new ServerApiService();
requestOne.request();




