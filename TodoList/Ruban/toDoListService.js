//http://repetitora.net/api/JS/Tasks/?widgetid=1553
//пример get запроса. дальше параметры через &
// в пост запросе параметры передаются объектом
var arrayForTasksServise = [];
function GetTasks(){

    this.request = function(){
        $.ajax({
            type: 'GET',
            url: 'http://repetitora.net/api/JS/Tasks/?widgetid=1553&count=10',
            success: function(data){
                this.data = data;
                for(var i=0; i<this.data.length; i++){
                    arrayForTasksServise.push(data[i].id);
                    toDoList.GetTasks(data[i].title);
                }
                
                console.log('get');
                console.log(arrayForTasksServise);
            },
            
        });
    }
  
}
var requestOne = new GetTasks();
requestOne.request();


function CreateTask(){

    this.create = function(task){
        $.ajax({
            type: 'POST',
            url: 'http://repetitora.net/api/JS/Tasks/?widgetid=1553',
            success: function () {
                console.log('create');
            },
            data: {
                title: task
            }
        
        });
    }

}

function PutTask(){

    this.put = function(task){
        $.ajax({
            type: 'PUT',
            url: 'http://repetitora.net/api/JS/Tasks/?widgetid=1553',
            success: function () {
                console.log('Ok -put');
            },
            data: {
                taskId: 'ee9a3b92-4792-4d00-9618-edae5920bed5',
                title: task
                
            }
        
        });
    }

}

var newPutTest = new PutTask;
newPutTest.put('name');

// function DeleteTask(id){

//     this.delete = function(task){
//         $.ajax({
//             type: 'DELETE',
//             url: 'http://repetitora.net/api/JS/Tasks/',
//             success: function () {
//                 console.log('delete - ok');
//             },
//             data: {
//                 widgetid: 1553,
//                 taskId: id,
//             }
        
//         });
//     }

// }
// var deleteTest = new DeleteTask();
// setTimeout(deleted, 500);
// function deleted(){
//     for(var i = 0; i<arrayForTasksServise.length; i++){
//         deleteTest.delete(arrayForTasksServise[i]);
//         console.log('ok' + i);
//     }
// }



//var responseOne = new CreateTask();
//responseOne.create('taska');

// function TakeTask(name, checkbox){
//     this.task = {
//         name: name,
//         checkbox: checkbox,

//     }
    

// }

// var arrObjectTasks = [];
// function fillingObject(){
//     var container = document.querySelector('.containerTable');
//     var list = container.firstElementChild.childNodes;
//     list = Array.prototype.slice.call(list);
//     for(var i = 2; i<list.length; i++){
//         var propertyList = list[i].childNodes;
//         var namList = propertyList[0].innerHTML;
//         var check = false;
//         check = propertyList[1].firstElementChild.checked;
    
//         arrObjectTasks[i] = new TakeTask(namList, check);
//         console.log(arrObjectTasks[i].task.name, arrObjectTasks[i].task.checkbox);
//     }
    
    
    
// }
// fillingObject();

