
var Pusher = require('pusher-client');


var pusher = new Pusher('de504dc5763aeef9ff52');
var order_book_channel = pusher.subscribe('live_trades');

order_book_channel.bind('trade', function(data) {
    sails.sockets.blast('Bitstamp BTCUSD Ticker Update', data);
})
