
// var Pusher = require('pusher-client');


// var pusher = new Pusher('de504dc5763aeef9ff52');
// var order_book_channel = pusher.subscribe('live_trades');

// order_book_channel.bind('trade', function(data) {
//     sails.sockets.blast('Bitstamp BTCUSD Ticker Update', data);
// })


var getJSON = require('get-json')

var ticker = null; 

function intervalFunct() {
    getJSON('https://www.bitstamp.net/api/v2/ticker/btcusd/', function(error, newTicker){
        // new ticker
        ticker = { 
            last_price: newTicker.last,
            best_bid: newTicker.bid, 
            best_ask: newTicker.ask 
        };
        sails.sockets.blast('Bitstamp BTCUSD Ticker Update', ticker);
    });
}

setInterval(intervalFunct, 
    1000
);