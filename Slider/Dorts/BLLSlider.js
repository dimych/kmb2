function SliderLogic() {
    this._imageUrls = [];
    this.i = 0;
    this.isCycled = false;


    this._imageUrls.push('https://i.pinimg.com/736x/5e/d5/d1/5ed5d12f24b57a233ebf663e422e8076--fantasy-comics-star-wars-stuff.jpg');
    this._imageUrls.push('https://i.pinimg.com/originals/f9/92/53/f9925335be15456ecac2145943d12cdb.jpg');
    this._imageUrls.push('https://cs8.pikabu.ru/post_img/big/2016/03/07/6/1457343091122391132.jpg');
    this._imageUrls.push('https://cs8.pikabu.ru/post_img/big/2016/03/07/6/145734312411686039.jpg');
    this._imageUrls.push('https://ae01.alicdn.com/kf/HTB1we_AQFXXXXcZXpXXq6xXFXXX3/-font-b-Trends-b-font-International-font-b-Star-b-font-font-b-Wars-b.jpg');

    this.getCurrentImageUrl = function () {
        return this._imageUrls[this.i];
    }

    this.getNextImage = function () {
        if (this.i >= this._imageUrls.length) {
            if (this.isCycled) {
                this.i = 0;
            }
            else { this.i-- }
        }
    }
    this.getPrevImage = function () {
        if (this.i < 0) {
            if (this.isCycled) {
                this.i = this._imageUrls.length - 1;
            }
            else { this.i++ }
        }
    }

}