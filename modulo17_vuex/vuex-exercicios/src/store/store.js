import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import params from './modules/params'

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { cart, params },
    getters,
    state: {
        nome: 'Gui',
        sobrenome: 'Almeida'
        // cart: {
        //     produtos: []
        // },
        // params: {
        //     quantidade: 1,
        //     preco: 1.99
        // }
    }
})