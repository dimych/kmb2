function SliderLogic() {
    var that = this;

    this._imagesUrls = [];

    this._currentImageIndex = 0;
    //this._dataService = new SliderDataService();
    this._dataService = new SliderAjaxDataService();

    this.getCurrentImageUrl = function () {
        return this._imagesUrls[this._currentImageIndex];
    }

    this.canMovePrev = function () {
        var weAreOnTheLeftBorder = this._currentImageIndex === 0;
        return !weAreOnTheLeftBorder;
    }

    this.canMoveNext = function () {
        var weAreOnTheRightBorder = this._currentImageIndex === (this._imagesUrls.length - 1);
        return !weAreOnTheRightBorder;
    }

    this.activatePrevImage = function () {
        if (this.canMovePrev()) {
            this._currentImageIndex--;
        }
    }

    this.activateNextImage = function () {
        if (this.canMoveNext()) {
            this._currentImageIndex++;
        }
    }  

    this.init = function(callback) {
        // add new sub object
        this._dataService.getUrls(function(urls) {

            that._imagesUrls = urls;

            callback();
        })
    }
}