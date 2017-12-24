function Passenger(loginPassenger, passwordPassenger, firstNamePassenger, lastNamePassenger, mailPassenger, phoneNumber) {
    this.loginPassenger = loginPassenger;
    this.passwordPassenger = passwordPassenger;
    this.firstName = firstNamePassenger;
    this.lastName = lastNamePassenger;
    this.mail = mailPassenger;
    this.phoneNumber = phoneNumber;
    this.favoritesRoutes = [];
    this.favoritesCarriers = [];
    this.ownNotices = [];
    this.ownTickets = [];
    this.distance = 0;

    this.addToFavorites = function () { };
    this.delFromFavorites = function () { };
    this.buyTicket = function () { };
    this.bookTicket = function () { };
}