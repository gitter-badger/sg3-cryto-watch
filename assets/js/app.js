console.log('starting..');

io.socket.on('connect', function () {
    io.socket.get('/bitfinex/btcusdTicker', function (data) {
    
    });
    io.socket.get('/bittrex/btcusdTicker',function(data){
        
    });
    io.socket.get('/bitstamp/btcusdTicker',function(data) {
        
    });
    
});

io.socket.on('Bitfinex BTCUSD Ticker Update', function (updateData) {
    console.log(updateData);
    $('#bitfinex-last-price').text(updateData.LAST_PRICE);
    $('#bitfinex-bid').text(updateData.BID);
    $('#bitfinex-ask').text(updateData.ASK);
});

io.socket.on('Bittrex BTCUSD Ticker Update', function (updateData) {
    console.log(updateData);
    $('#bittrex-last-price').text(updateData.Last);
    $('#bittrex-bid').text(updateData.Bid);
    $('#bittrex-ask').text(updateData.Ask);
});


io.socket.on('Gemini BTCUSD Ticker Update', function (updateData) {
    console.log(updateData);
    $('#gemini-last-price').text(updateData.last);
    $('#gemini-bid').text(updateData.bid);
    $('#gemini-ask').text(updateData.ask);
});

io.socket.on('Kraken BTCUSD Ticker Update', function (updateData) {
    console.log(updateData.result);
    $('#kraken-last-price').text(updateData.result.XXBTZUSD.c[0]);
    $('#kraken-bid').text(updateData.result.XXBTZUSD.b[0]);
    $('#kraken-ask').text(updateData.result.XXBTZUSD.a[0]);
});

io.socket.on('Bitstamp BTCUSD Ticker Update', function (updateData) {
    console.log(updateData.result);
    $('#bitstamp-last-price').text(updateData.price);
    
});

io.socket.on('Poloniex BTCUSD Ticker Update', function (updateData) {
    console.log(updateData.result);
    $('#poloniex-last-price').text(updateData.last);
    $('#poloniex-bid').text(updateData.highestBid);
    $('#poloniex-ask').text(updateData.lowestAsk);
});