const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();

var ticker = null; 
 
function intervalFunct() {    
    poloniex.returnTicker((err, newTicker) => {
        if (err) {
            console.log(err.message);
        } else {
            // new ticker
            ticker = { 
                last_price: newTicker["USDT_BTC"].last,
                best_bid: newTicker["USDT_BTC"].highestBid, 
                best_ask: newTicker["USDT_BTC"].lowestAsk 
            };
            sails.sockets.blast('Poloniex BTCUSD Ticker Update', ticker);
        }
    });
}

setInterval(intervalFunct, 1000);