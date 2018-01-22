function SliderView() {
    this.butLeft = null;
    this.butRight = null;
    this.imageId = null;
    this.el = null;

    this._sliderLogic = new SliderLogic();

    this.render = function () {
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

    this.start = function (elId) {
        var elSelector = ('#' + elId);
        this.el = document.querySelector(elSelector);

        this.render();

        var that = this;
        this.butLeft = this.el.querySelector('.prev');
        this.butRight = this.el.querySelector('.next');
        this.imageId = this.el.querySelector('.image');

        this.cycledId = this.el.querySelector('#isCycled');

        this.butLeft.addEventListener('click', function (event) {
            that.next(event);
        });
        this.butRight.addEventListener('click', function (event) {
            that.prev(event);
        });

        this.cycledId.addEventListener('click', function (event) {
            that._sliderLogic.isCycled = this.checked;
        });
        this.imageId.src = this._sliderLogic.getCurrentImageUrl();

    };

    this.next = function (event) {
        this._sliderLogic.i++;
        this._sliderLogic.getNextImage();     
        this.imageId.src = this._sliderLogic.getCurrentImageUrl();
    };

    this.prev = function (event) {
        this._sliderLogic.i--;
        this._sliderLogic.getPrevImage();        
        this.imageId.src = this._sliderLogic.getCurrentImageUrl();
    };
}
var slider = new SliderView();

slider.start('slider');
