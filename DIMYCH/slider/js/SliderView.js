function SliderView() {
    var that = this;
    this.showPrevBtn = null;
    this.showNextBtn = null; 
    this.slideImage = null; 
    
    this._logic = new SliderLogic();
   
    this.start = function (elId) {
       
        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        el.innerHTML = `
        <div class='itk-slider'>
            <button class='show-prev-btn'> PREV </button>
            <img class='slide-img' src=''>
            <button class='show-next-btn'> NEXT </button>
        </div>`;

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

        // subscribe to events
        this.showPrevBtn.addEventListener('click', function(e) {            
            that.onShowPrevBtnClick(e);
        });

        this.showNextBtn.addEventListener('click', function(e) {
            that.onShowNextBtnClick();
        });
       
        
        this.showPrevBtn.disabled = true;

        this._logic.init(function() {
            that.slideImage.src = that._logic.getCurrentImageUrl();
        });        

    };

    this.onShowPrevBtnClick = function (e) {
        
        this._logic.activatePrevImage();
       
        this.slideImage.src = this._logic.getCurrentImageUrl();
        this.showNextBtn.disabled = false;

        if (!this._logic.canMovePrev()) {
            this.showPrevBtn.disabled = true;
        }
    };   

    this.onShowNextBtnClick = function (e) {
        
        this._logic.activateNextImage();
        this.slideImage.src = this._logic.getCurrentImageUrl();

        this.showPrevBtn.disabled = false;

        if (!this._logic.canMoveNext()) {
            this.showNextBtn.disabled = true;
        }
    };
}

//68