window.onload = function () {
    var todoList = [];
    if (localStorage.getItem('todo')!=undefined){//есл в локал сториж что-то есть
        todoList = JSON.parse(localStorage.getItem('todo'));//то он возвращает сохраненное
        out();//нужно вывести то что лежит в массиве на экран
    }
    document.getElementById('addBtn').onclick = function () { //находим кнопку по айди. А затем по её нажатию запускается функция
        var valueList = document.getElementById('listInput').value;//получили значение того дела, которое нужно добавить
        // {todo: Add Milk, check: false}//ассоциотивный массив
        var temp = {};
        temp.todo = valueList;//первоначальное значение пропертей
        temp.check = false;//первоначальное значение пропертей
        var i = todoList.length;//длинна массива в переменной
        todoList[i] = temp;//присвоение массивов
        // console.log(todoList);
        out();//вызов функции при созданиии строки
        localStorage.setItem('todo', JSON.stringify(todoList));//сохранение наших листов и преобразование их в строку
    }
    function out() {
        var out = '';//создание пустой строки
        for (var i in todoList) {
            //нужно проверить поле чека
            if (todoList[i].check == true) {
                out += '<input type = "checkbox" checked>';
            }
            else {
                out += '<input type="checkbox">';
            }
            out += todoList[i].todo + '<br>';//пустая строка плюс массив с проперти задачей плюс пустая строка
        }
        document.getElementById('outDiv').innerHTML = out;//находим див и приравниваем пустую строку к ней
    }
}