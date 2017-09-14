const BFX = require('bitfinex-api-node')

const API_KEY = ''
const API_SECRET = ''

const opts = {
  version: 2,
  transform: true
}

const bws = new BFX(API_KEY, API_SECRET, opts).ws

bws.on('open', () => {
  bws.subscribeTicker('BTCUSD')
  bws.subscribeOrderBook('BTCUSD')
  bws.subscribeTrades('BTCUSD')
})


var ticker = null; 

bws.on('ticker', (pair, newTicker) => {
    // new ticker
    ticker = { 
      last_price: newTicker.LAST_PRICE,
      best_bid: newTicker.BID, 
      best_ask: newTicker.ASK 
    };
    // bradcast the update ticker
    sails.sockets.blast('Bitfinex BTCUSD Ticker Update', ticker);
})

bws.on('orderbook', (pair, book) => {
  console.log(book);
})

bws.on('error', console.error)

module.exports = {}