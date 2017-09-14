var getJSON = require('get-json')

var ticker = null; 

function intervalFunct() {
    getJSON('https://api.gemini.com/v1/pubticker/btcusd', function(error, newTicker){
        // new ticker
        ticker = { 
            last_price: newTicker.last,
            best_bid: newTicker.bid, 
            best_ask: newTicker.ask 
        };
        sails.sockets.blast('Gemini BTCUSD Ticker Update', ticker);
    });
}

setInterval(intervalFunct, 
    1000
);