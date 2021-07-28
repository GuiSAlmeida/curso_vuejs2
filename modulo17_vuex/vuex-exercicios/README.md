# vuex

O Vuex é um **padrão de gerenciamento de estado + biblioteca** para aplicações Vue.js. Ele serve como um **store** centralizado para todos os componentes em uma aplicação, com regras garantindo que o estado só possa ser mutado de forma previsível.  

![ciclo](https://vuex.vuejs.org/vuex.png)
![image](https://user-images.githubusercontent.com/45276342/127239471-332e6dcb-4b1b-4fc0-a86e-19ee927214be.png)
## State
Estado central da aplicação.  

```
/src
    /store
        store.js
            state: {}
    
    main.js
        new Vue(store)

    /componentes
        componente.vue
            this.$store.state
```

## getters
função que retorna informação (dados).  
![getter](https://user-images.githubusercontent.com/45276342/127073358-b6c7029b-8589-475b-977b-af3cb2a7bce9.png)
```js
export default new Vuex.Store({
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state){
            state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    }
})
```

Acessando getters no componente por meio do `this.$store.getters` ou pelo método `mapGetters`.
```html
<template>
    <p>{{ total }}</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        total() {
            return this.$store.getters.valorTotal
        },
        ...mapGetters({
            total: 'valorTotal'
        })
    }
}
</script>
```

## Setters (Mutations)
Alteram o estado global da aplicação controlada pelo vuex.  
Por meio das `mutations` que possuem a finalidade de alterar a store diretamente,  
e por isso devem ser sempre **sincronas**.

![setter](https://user-images.githubusercontent.com/45276342/127151855-d9b7e2af-dbb1-45c2-96cd-fb7345756459.png)

```html
<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
            quantidade: 1,
            preco: 9.99,
        }
    },
    methods: {
        ...mapMutations(['addProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // sem mutations
            // this.$store.state.produtos.push(produto)

            // com mutations
            // this.$store.commit('addProduto', produto)

            // com mapMutations
            this.addProduto(produto)
        }
    }
}
</script>
```

## Actions
Trabalham com regras de negócio. Chamam mutations por meio de `commits`, Podemos realizar operações **assíncronas** dentro de uma action. 

![image](https://user-images.githubusercontent.com/45276342/127229758-71667b5d-06d3-4434-85d0-6bfd307a9332.png)

**dispatch**  
Método para disparar as actions.

```js
// no store
export default new Vuex.Store({
    state: {
        produtos: []
    },
    mutations: {
        addProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        addProdutoAction(context, payload) {
            context.commit('addProduto', payload)
        }
    }
})

// no componente
export default {
    methods: {
        adicionar() {
            this.$store.dispatch('addProdutoAction', produto)
        }
    }
}
```

**mapActions**  
Cria um função nos methods com mesmo nome da action criada no store.

```js
// no store
export default new Vuex.Store({
    state: {
        produtos: []
    },
    mutations: {
        addProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        addProdutoAction(context, payload) {
            context.commit('addProduto', payload)
        }
    }
})

// no componente
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions(['addProdutoAction']),
        adicionar() {
            this.addProdutoAction(produto)
        }
    }
}
```