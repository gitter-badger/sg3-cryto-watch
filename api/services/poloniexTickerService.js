const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();
 
function intervalFunct() {    
    poloniex.returnTicker((err, ticker) => {
        if (err) {
            console.log(err.message);
        } else {
            sails.sockets.blast('Poloniex BTCUSD Ticker Update', ticker["USDT_BTC"]);
        }
    });
}

setInterval(intervalFunct, 1000);