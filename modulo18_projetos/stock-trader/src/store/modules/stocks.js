import stocks from '@/data/stocks'

export default {
  state: {
    stocks: []
  },
  mutations: {
    setStocks (state, stocks) {
      state.stocks = stocks
    },
    randomStocks (state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
      })
    }
  },
  actions: {
    buyStockAction ({ commit }, order) {
      commit('buyStock', order)
    },
    initStocksAction ({ commit }) {
      commit('setStocks', stocks)
    },
    randomStocksAction ({ commit }) {
      commit('randomStocks')
    }
  },
  getters: {
    stocks (state) {
      return state.stocks
    }
  }
}
