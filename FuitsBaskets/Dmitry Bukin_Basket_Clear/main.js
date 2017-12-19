function Apple(name, isWinter) {
	this.name = name;
	this.isWinter = isWinter;
};

function Pear (name, type) {
	this.name = name;
	this.type = type;
};

function Orange (name, country) {
	this.name = name;
	this.country = country;
};




function Basket() {
	this.fruts = [];
    this.addProduct = function (fruts) {
        this.fruts.push(fruts); 
    };
    
	this.getAllApples = function(){
		for (var i = 0; i < this.fruts.length; i++) {
      		if (this.fruts[i].constructor.name === 'Apple') {
        	console.log(this.fruts[i]);
      		}
		}
	};

	this.getAllPears = function(){
		for (var i = 0; i < this.fruts.length; i++) {
      		if (this.fruts[i].constructor.name === 'Pear') {
        	console.log(this.fruts[i]);
      		}
		}	
	};

	this.getAllOranges = function(){
		for (var i = 0; i < this.fruts.length; i++) {
      		if (this.fruts[i].constructor.name === 'Orange') {
        	console.log(this.fruts[i]);
      		}
		}
	};

	this.clear = function() {
		this.fruts = [];
		console.log(this.fruts);

	}
}


