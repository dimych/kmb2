function localStorageSever() {
    this.save = function (name, item) {
        alert(item.constuctor.name);
        var wrapper = {
            typeOfObject: item.constuctor.name,
            obj: item
        }
        var str = JSON.stringify(wrapper);
        localStorage.setItem(name, str);
    };
    // this.load = function (key) {
    //     var str = localStorage.getItem(key);
    //     return JSON.parse(str);
        
    // };
};
var carriersStorege = new localStorageSever();



$('.submitBtnC').on('click', function(){
    //event.preventDefault();
    var loginCarrier = $('.loginCarrier').val();
    var passwordCarrier = $('.passwordCarrier').val();
    var carrierName = $('.nameCarrier').val();
    var mailCarrier = $('.mailCarrier').val();
    var phoneNumber = $('.phoneNumberCarrier').val();
    
    var newCarrier = new  Carrier(loginCarrier, passwordCarrier, carrierName, mailCarrier, phoneNumber);
    console.log(newCarrier.constuctor.name);
    carriersStorege.save('carrier', newCarrier);
});
    