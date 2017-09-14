console.log('starting..');

io.socket.on('connect', function () {
    
});

io.socket.on('Bitfinex BTCUSD Ticker Update', function (ticker) {
    console.log('Bitfinex:', ticker);
    $('#bitfinex-last-price').text(ticker.last_price);
    $('#bitfinex-bid').text(ticker.best_bid);
    $('#bitfinex-ask').text(ticker.best_ask);
});

io.socket.on('Bittrex BTCUSD Ticker Update', function (ticker) {
    console.log('Bittrex:', ticker);
    $('#bittrex-last-price').text(ticker.last_price);
    $('#bittrex-bid').text(ticker.best_bid);
    $('#bittrex-ask').text(ticker.best_ask);
});


io.socket.on('Gemini BTCUSD Ticker Update', function (ticker) {
    console.log('Gemini:', ticker);
    $('#gemini-last-price').text(ticker.last_price);
    $('#gemini-bid').text(ticker.best_bid);
    $('#gemini-ask').text(ticker.best_ask);
});

io.socket.on('Kraken BTCUSD Ticker Update', function (updateData) {
    console.log('Kraken:', updateData.result);
    $('#kraken-last-price').text(updateData.result.XXBTZUSD.c[0]);
    $('#kraken-bid').text(updateData.result.XXBTZUSD.b[0]);
    $('#kraken-ask').text(updateData.result.XXBTZUSD.a[0]);
});

io.socket.on('Bitstamp BTCUSD Ticker Update', function (ticker) {
    console.log('Bitstamp:', ticker);
    $('#bitstamp-last-price').text(ticker.last_price);
    $('#bitstamp-bid').text(ticker.best_bid);
    $('#bitstamp-ask').text(ticker.best_ask);
});

io.socket.on('Poloniex BTCUSD Ticker Update', function (updateData) {
    console.log('Poloniex:', updateData);
    $('#poloniex-last-price').text(updateData.last);
    $('#poloniex-bid').text(updateData.highestBid);
    $('#poloniex-ask').text(updateData.lowestAsk);
});