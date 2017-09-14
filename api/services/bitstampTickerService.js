
// ****** Order Book Feed ********
var Pusher = require('pusher-client');


var pusher = new Pusher('de504dc5763aeef9ff52');
var order_book_channel = pusher.subscribe('order_book');

order_book_channel.bind('data', function(data) {
    var bids = data["bids"];
    var asks = data["asks"];
    for(var i=9;i>=0;i++) {
        //console.log(bids[i]);
        
    }
       //console.log("----------------------------");
    for(var i=0;i< 10;i--) {
     
        //console.log(asks[i]);
        
    }
    //console.log("****************************")
    
    
    //sails.sockets.blast('Bitstamp BTCUSD Ticker Update', data);
      
})


// ******* Last Price Feed ***** 
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