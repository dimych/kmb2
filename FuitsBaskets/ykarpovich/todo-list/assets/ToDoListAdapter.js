function TodoListService() {
    this._linkToToDoList = "http://repetitora.net/api/JS/tasks?widgetId=321";
    this.send = function (text) {
        $.ajax({
            type: "POST",
            data: { title: text },
            url: this._linkToToDoList,
            success: function () { console.log("post work")}
        });
    }
    this.get = function (page, count, getResult) {
        var _linkToToDoListResult = this._linkToToDoList + "&page=" + page + "&count=" + count;
        console.log(_linkToToDoListResult);

        $.getJSON(_linkToToDoListResult, function (json) {
            var mappedResult = json.map(function (line) {
                console.log("from fnc" + JSON.stringify(line));
                return (JSON.stringify(line));
            });
            getResult(mappedResult);

        });
    }
    this.removeList = function(taskId){
        $.ajax({
            type: "DELETE",
            url:this._linkToToDoList + "?taskID=" + "&" +  taskId,
            success: function(){
                console.log("Delete susses");
            }
        });
    }
}

var getList = new TodoListService();
// getList.send("lol");
// getList.get(3);
// debugger;
getList.removeList("c691ec8f-4b34-4e6b-b17a-e94e6cd4cff0");
// function getResult(result) {
// };
// var result = getList.get(5, getResult);
// console.log();