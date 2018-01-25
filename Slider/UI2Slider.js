function SliderViewPretty(sliderData) {
    SliderView.apply(this, [sliderData]);
}

SliderViewPretty.prototype = new SliderView();
SliderViewPretty.prototype.constructor = SliderViewPretty;
SliderViewPretty.prototype._render = function () {
    SliderView.prototype._render.apply(this);
    this.el.innerHTML =  `
    <hr>
    <div class='block'>
    <button id='prev1' class='prev'>NEXT</button>
    <img class='image' id ='image1'/>
    <button id='next1' class='next'>PREV</button>
    </div>
    <br>
    <div class='block'>
    <input type = "checkbox" id='isCycled'>CYCLED</input>
    </div>
    <hr>        
    `
};