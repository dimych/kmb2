$('.loginBtn').on('click', function () {
    $('.button').hide();
    $('.enterForm').hide();
    $('.loginForm').show();
});
$('.clouseBtn').on('click', function () {
    $('.button').show();
    $('.enterForm').show();
    $('.loginForm').hide();
});
$('.registrationBtn').on('click', function () {
    location.href = "pages/registration_page.html"
});
$('.nextBtn').on('click', function () {
    if ($("input:checked").val() == 'Passenger') {
        $('.registrationFormPassenger').show();
        $('.registrationFormCarrier').hide();
        $('.selectTypeOfUser').hide();
    }
    else if (($("input:checked").val() == 'Carrier')) {
        $('.registrationFormPassenger').hide();
        $('.registrationFormCarrier').show();
        $('.selectTypeOfUser').hide();
    }
});
$('.submitBtn').on('click', function (event) {
    event.preventDefault();
    //location.href = "../index.html"
    
    // var loginPassenger = $('.loginPassenger').val();
    // var passwordPassenger = $('.passwordPassenger').val();
    // var firstNamePassenger = $('.firstNamePassenger').val();
    // var lastNamePassenger = $('.lastNamePassenger').val();
    // var mailPassenger = $('.mailPassenger').val();
    // var phoneNumber = $('.phoneNumber').val();
    // var newPassenger = new  Passenger(loginPassenger, passwordPassenger, firstNamePassenger, lastNamePassenger, mailPassenger, phoneNumber);
    // Passengers.push(newPassenger);
    // console.log(Passengers);



    // var loginCarrier = $('.loginCarrier').val();
    // var passwordCarrier = $('.passwordCarrier').val();
    // var carrierName = $('.nameCarrier').val();
    // var mailCarrier = $('.mailCarrier').val();
    // var phoneNumber = $('.phoneNumber').val();
    // var newCarrier = new  Carrier(loginCarrier, passwordCarrier, carrierName, mailCarrier, phoneNumber);
    // Carriers.push(newCarrier);
    // console.log(Carriers);




});