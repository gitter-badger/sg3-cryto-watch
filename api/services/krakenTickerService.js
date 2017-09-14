var getJSON = require('get-json')

var ticker = null; 

function intervalFunct() {
    getJSON('https://api.kraken.com/0/public/Ticker?pair=xbtusd', function(error, newTicker){
        // new ticker
        ticker = { 
            last_price: newTicker.result.XXBTZUSD.c[0],
            best_bid: newTicker.result.XXBTZUSD.b[0], 
            best_ask: newTicker.result.XXBTZUSD.a[0] 
        };
        sails.sockets.blast('Kraken BTCUSD Ticker Update', ticker);
    });
}

setInterval(intervalFunct, 
    1000
);

setInterval(intervalFunct1,1000);
// Get Order Book Feed
function intervalFunct1() {
    getJSON('https://api.kraken.com/0/public/Depth',function(error, orderBookFeed){
        
    })
}
