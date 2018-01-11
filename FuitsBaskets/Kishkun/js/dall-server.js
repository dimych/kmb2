
function ServerApiService() {
    $.ajax({
        type: 'Get',
        url: 'http://it-kamasutra.com/JSKMB',
        success: function(data) {
            console.log('ajax request')
        }
    });
}