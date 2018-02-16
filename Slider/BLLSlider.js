function SliderLogic(sliderData) {
    var that = this;
    this._imageUrls = [];
    this._i = 0;
    this._isCycled = false;
    this._dataService = sliderData;
    this.getCurrentImageUrl = function () {
        return this._imageUrls[this._i];
    };
    this.getNextImage = function () {
        if (this._i >= this._imageUrls.length) {
            if (this._isCycled) {
                this._i = 0;
            }
            else { this._i-- }
        }
    };
    this.getPrevImage = function () {
        if (this._i < 0) {
            if (this._isCycled) {
                this._i = this._imageUrls.length - 1;
            }
            else { this._i++ }
        }
    };
    this.activNextImage = function () {
        return this._i++;
    };
    this.activPrevImage = function () {
        return this._i--;
    };
    this.activCycled = function () {
        return this._isCycled = !this._isCycled
    };
    this.init = function (callBack) {
        this._dataService.getAllUrls(function (urls) {
            that._imageUrls = urls;
            callBack();
        });
    };
}