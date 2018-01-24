function SliderView() {
    var that = this;
    this.butLeft = null;
    this.butRight = null;
    this.imageId = null;
    this.el = null;
    this._sliderLogic = new SliderLogic();
}
SliderView.prototype.start = function (elId) {
    var elSelector = ('#' + elId);
    this.el = document.querySelector(elSelector);
    this._render();
    this.butLeft = this.el.querySelector('.prev');
    this.butRight = this.el.querySelector('.next');
    this.imageId = this.el.querySelector('.image');
    this.cycledId = this.el.querySelector('#isCycled');
    var that = this;
    this.butLeft.addEventListener('click', function (event) {
        that.next(event);
    });
    this.butRight.addEventListener('click', function (event) {
        that.prev(event);
    });
    this.cycledId.addEventListener('click', function (event) {
        that._sliderLogic.activCycled();
    });
    this._sliderLogic.init(function(){
        that.imageId.src = that._sliderLogic.getCurrentImageUrl();        
    });
};
SliderView.prototype._render = function () {
    this.el.innerHTML = `
    <div class='block'>
    <button class='prev'>PREV</button>
    <img class='image' />
    <button class='next'>NEXT</button>
    </div>
    <br>
    <div class='block'>
    <input type = "checkbox" id='isCycled'>CYCLED</input>
    </div>        
    `;
};
SliderView.prototype.next = function (event) {
    this._sliderLogic.activNextImage();
    this._sliderLogic.getNextImage();
    this.imageId.src = this._sliderLogic.getCurrentImageUrl();
};
SliderView.prototype.prev = function (event) {
    this._sliderLogic.activPrevImage();
    this._sliderLogic.getPrevImage();
    this.imageId.src = this._sliderLogic.getCurrentImageUrl();
};
