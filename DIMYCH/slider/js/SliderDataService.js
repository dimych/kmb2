function SliderDataService() {
    
    this.getUrls = function(successCallback) {
        var imagesUrls = [];   
        imagesUrls.push('https://www.cstatic-images.com/car-pictures/main/USC50ALC051A021001.png');
        imagesUrls.push('https://img.autobytel.com/2017/chevrolet/corvette/2-800-oemexteriorfront1300-80986.jpg');
        imagesUrls.push('http://s3.caradvice.com.au/wp-content/uploads/2015/05/JAGUAR_F-TYPE.jpg');
        imagesUrls.push('http://moneyinc.com/wp-content/uploads/2016/08/2017-Lamborghini-Aventador-750x500.jpg');
    
        successCallback(imagesUrls);
    }
}


function SliderAjaxDataService() {
    // params: successCallback - function that has one parameter - array of images urls
    this.getUrls = function(successCallback) {
        $.ajax({
            url: 'http://repetitora.net/api/JS/Images',
            success: function(data) {
                var imageUrls = [];
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    const url = element.original;
                    imageUrls.push(url);                    
                }
                successCallback(imageUrls);
            }
        });
    }

}