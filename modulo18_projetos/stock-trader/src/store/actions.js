import Vue from 'vue'

export default {
  loadDataAction ({ commit }) {
    Vue.prototype.$http.get('data.json')
      .then(res => {
        const data = res.data
        if (data) {
          commit('setStocks', data.stocks)
          commit('setPortfolio', {
            funds: data.funds,
            stockPortfolio: data.stockPortfolio
          })
        }
      })
  }
}
