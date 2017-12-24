function Carrier(loginCarrier, passwordCarrier, carrierName, mailCarrier, phoneNumber) {
    this.loginCarrier = loginCarrier;
    this.passwordCarrier = passwordCarrier;
    this.mailCarrier = mailCarrier;
    this.carrierName = carrierName;
    this.phoneNumber = phoneNumber;
    this._Minibuses = [];
    this._carrierRoutes = [];

    this.addMinibus = function () { };
    this.delMinibus = function () { };
    this.addRoute = function () { };
    this.delRoute = function () { };
    this.createBill = function () { };
}