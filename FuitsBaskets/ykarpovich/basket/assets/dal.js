function saveBtn() {
    var $saveBtn = $('<button>').text('Save').addClass('saveBtn');
    $('body').append($saveBtn);
}
saveBtn();
$( ".saveBtn" ).click(function() {
    SaveLoader._setItemFromLocalStorage;
  });

function loadBtn() {
    var $loadBtn = $('<button>').text('Load').addClass('loadBtn');
    $('body').append($loadBtn);
}
loadBtn();
$( ".loadBtn" ).click(function() {
    SaveLoader._getItemFromLocalStorage;
  });

function SaveLoader() {
     this.getItemFromLocalStorage = function(key) {
        console.log("it's get")
        var localStorageKey = localStorage.getItem(key);
        return JSON.parse(localStorageKey);
    }

    this.setItemFromLocalStorage = function(key, array) {
        // var serArray = JSON.stringify(array);
        var wrapper = {
            typeOfObj : array.constructor.name,
            itemArray: array
        }
        localStorage.setItem(key, JSON.stringify(wrapper));
    }
}

var saveLoader = new SaveLoader();

var apple1 = new Apple('princ', true);

saveLoader.setItemFromLocalStorage("apples", apple1);
var tempApples = saveLoader.getItemFromLocalStorage("apples")
//temp cleaner
var $clearBtn = $('<button>').text('Clear').addClass('clearBtn');
$('body').append($clearBtn);
$( ".clearBtn" ).click(function() {
    localStorage.clear();
  });