function ServerApiService() {
    // $.ajax({
    //     type: 'GET',
    //     url: 'test.php,
    //     success: function (data) {
    //         console.log('ajax request');
    //     },

    //     data: name, apple1
    // });


    // $.ajax({
    //     type: 'POST',
    //     url: 'test.php',
    //     success: function (data) {
    //         console.log('ajax request');
    //     },

    //     data: 'rest api/task1?id=56&page=1&count=4'
    // });

    $.ajax({
        type: "GET",
        url: "?page=2&whidgetId=2323&count=3",
        dataType: "script",
        success: function(data) {
            console.log('ajax request');
        },

        data: name, apple1
      });

}