var bittrex = require('node.bittrex.api');

bittrex.options({ 
  'apikey' : '', 
  'apisecret' : '', 
  'stream' : false, 
  'verbose' : false, 
  'cleartext' : false 
});

var websocketsclient = bittrex.websockets.listen( function( data ) {
  if (data.M === 'updateSummaryState') {
    data.A.forEach(function(data_for) {
      data_for.Deltas.forEach(function(marketsDelta) {
        if (marketsDelta.MarketName === 'USDT-BTC') {
            sails.sockets.blast('Bittrex BTCUSD Ticker Update', marketsDelta);
        }
      });
    });
  }
});
