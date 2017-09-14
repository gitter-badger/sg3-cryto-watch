var getJSON = require('get-json')

function intervalFunct() {
    getJSON('https://api.kraken.com/0/public/Ticker?pair=xbtusd', function(error, response){
        sails.sockets.blast('Kraken BTCUSD Ticker Update', response);
    });
}

setInterval(intervalFunct, 
    1000
);