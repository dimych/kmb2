function ToDoListService() {
    this.addTask = async function (title, deadline) {
        await $.ajax({
            type: 'POST',
            url: 'https://todo-backend-express.herokuapp.com/',
            success: function (d) {
                console.log('data');
            },
            fail: function (d) { },
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                title: title,
                order: deadline.split('-').join(''),
                completed: false
            })
        })
    }
    this.deleteTask = async function (task) {
        await $.ajax({
            type: 'DELETE',
            url: 'https://todo-backend-express.herokuapp.com/' + task.id,
            success: function (d) {
                console.log('check');
            },
            fail: function (d) { },
        })
    }
    this.getTasks = async function () {
        var arrTasks = [];
        await $.ajax({
            type: 'GET',
            url: 'https://todo-backend-express.herokuapp.com/',
            success: function (response) {
                for (var i in response) {
                    var task = {
                        title: response[i].title,
                        deadline: intToDate(response[i].order),
                        isDone: response[i].completed,
                        id: parseInt(response[i].url.split('.com/')[1])
                    };
                    arrTasks.push(task);
                }
            },
            fail: function (d) { },
        })
        return arrTasks;
    }
    this.checkTask = async function (task) {
        await $.ajax({
            type: 'PATCH',
            url: 'https://todo-backend-express.herokuapp.com/' + task.id,
            contentType: "application/json; charset=utf-8",            
            success: function (d) {
                console.log('check');
            },
            fail: function (d) { },
            data: JSON.stringify({
                completed: !task.isDone
            })
        })
    }
}    

intToDate = function(value) {
    value = '' + value;
    var day, month, year;
    year = value.substring(0,4);
    month = value.substring(4,6);
    day = value.substring(6,8);
    return [day,month,year].join('-');
}