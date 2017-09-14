const BFX = require('bitfinex-api-node')

const API_KEY = ''
const API_SECRET = ''

const opts = {
  version: 2,
  transform: true
}

const bws = new BFX(API_KEY, API_SECRET, opts).ws

bws.on('open', () => {
  console.log('bitfinex websocket connection open.');
  bws.subscribeTicker('BTCUSD')
  bws.subscribeOrderBook('BTCUSD')
  bws.subscribeTrades('BTCUSD')
})

bws.on('ticker', (pair, ticker) => {
    console.log(ticker);
    sails.sockets.blast('Bitfinex BTCUSD Ticker Update', ticker);
})

bws.on('error', console.error)

module.exports = {}