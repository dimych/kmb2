function SliderViewPretty() {
    SliderView.apply(this);
}

SliderViewPretty.prototype = new SliderView();
SliderViewPretty.prototype.constructor = SliderViewPretty;
SliderViewPretty.prototype._render = function () {
    SliderView.prototype._render.apply(this);
    this.el.innerHTML += `<hr><hr>`
};