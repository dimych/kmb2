var a = {
    events: ['click', 'dblClick'],
    clickSubscribers: [],
    dblClickSubscribers: [],
    addEventListener: function (eventName, subscriber) {
        if (eventName == 'click') {
            this.clickSubscribers.push(subscriber);
        } else if (eventName == 'dblClick') {
            this.dblClickSubscribers.push(subscriber);
        }
    },
    _onClick: function (e) {
        for (var i = 0; i < this.clickSubscribers.length; i++) {
            this.clickSubscribers[i]();
        }
    },
    _onDblClick: function (e) {
        for (var i = 0; i < this.dblClickSubscribers.length; i++) {
            this.clickSubscribers[i]();
        }
    }
}


a.addEventListener('click', hasToClick);
a.addEventListener('click', mustClick);
a.addEventListener('dblClick', hasToDblClick);
a.addEventListener('dblClick', mustDblClick);

function hasToClick() { 
    alert('1');
};
function hasToDblClick() { 
    alert('2');
};
function mustClick() { 
    alert('3');
};
function mustDblClick() { 
    alert('4');
};




// events: ['click','mouseUp','mouseDown'],
// listeners: [];
// addEventListener: function (i, listener) {
//     setInterval(
//         function (i) {
//             if (this.events[i] == true) {
//                 listener();
//             } (), 1);
// }






// el: null,

//     start: function () {

//         el.addEventListener('click', function (e) { that.doShit(e) })

//     },

//     doShit: function () {
//         engine.state = 'off';
//     }
