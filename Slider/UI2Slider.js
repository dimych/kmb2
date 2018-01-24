function SliderViewPretty() {
    SliderView.apply(this);
}

SliderViewPretty.prototype = new SliderView();
SliderViewPretty.prototype.constructor = SliderViewPretty;
SliderViewPretty.prototype._render = function () {
    SliderView.prototype._render.apply(this);
    this.el.innerHTML =  `
    <hr>
    <div class='block'>
    <button id='prev1' class='prev'>PREV</button>
    <img class='image' />
    <button id='next1' class='next'>NEXT</button>
    </div>
    <br>
    <div class='block'>
    <input type = "checkbox" id='isCycled'>CYCLED</input>
    </div>
    <hr>        
    `
};