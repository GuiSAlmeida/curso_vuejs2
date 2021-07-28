export default {
    namespaced: true,
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        addProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        addProdutoAction: {
            root: false,  // passando true ele fica na raiz global store
            handler(context, payload) {
                setTimeout(() => {
                    context.commit('addProduto', payload)
                }, 1000)
            }
        }
    }
}