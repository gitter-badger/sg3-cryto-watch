var getJSON = require('get-json')

function intervalFunct() {
    getJSON('https://api.gemini.com/v1/pubticker/btcusd', function(error, response){
        sails.sockets.blast('Gemini BTCUSD Ticker Update', response);
    });
}

setInterval(intervalFunct, 
    1000
);