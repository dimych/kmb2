var fruits = ['Apple', 'Pear', 'Orange'];
var applesAttr = ['true', 'false'];
var pearAttr = ['1', '2', '3'];
var orangeAttr = ['Bel', 'Rus', 'USA']

var i = 0;

function createUI() {
  var $fruitName = $('<select/>');
  var $typeAttr = $('<select/>');
  for (var i in applesAttr) {
    $typeAttr.append(new Option(applesAttr[i]));
  }
  $fruitName = $('<select/>').change(function () {
    $typeAttr.empty();
    if (this.value == 'Apple') {
      for (var i in applesAttr) {
        $typeAttr.append(new Option(applesAttr[i]));
      }
    }

    if (this.value == 'Pear') {
      for (var i in pearAttr) {
        $typeAttr.append(new Option(pearAttr[i]));
      }
    }

    if (this.value == 'Orange') {
      for (var i in orangeAttr) {
        $typeAttr.append(new Option(orangeAttr[i]));
      }
    }
  });
  for (var i in fruits) {
    $fruitName.append(new Option(fruits[i]));
  }
  var $buttonAdd = $('<button>').text('Add to Basket').click(function(){
    console.log($fruitName.this);
    // console.log($fruitName.this, $inputName.this, $typeAttr.this);
  });
  var $inputName = $('<input>').attr('placeholder', 'What fruit name?');
  var $div = $('<div>').text('Fruits List:')
  $('body').append($fruitName, $inputName, $typeAttr, $buttonAdd, $div);
}
createUI();

function Apple(name, isWinter) {
  this.name = name;
  this.isWinter = isWinter;

}
function Pear(name, type) {
  this.name = name;
  this.type = type;

}
function Orange(name, country) {
  this.name = name;
  this.country = country;
}

function Basket() {

  this._apples = [];
  this._pears = [];
  this._oranges = [];

}