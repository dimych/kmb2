function Carrier(loginCarrier, passwordCarrier, mailCarrier, phoneNumber, nameCarrier) {
    this.loginCarrier = loginCarrier;
    this.passwordCarrier = passwordCarrier;
    this.mailCarrier = mailCarrier;
    this.phoneNumber = phoneNumber;
    this.carrierName = nameCarrier;
    this.Minibuses = [];
    this.carrierRoutes = [];

    this.addMinibus = function () { };
    this.delMinibus = function () { };
    this.addRoute = function () { };
    this.delRoute = function () { };
    this.createBill = function () { };
}