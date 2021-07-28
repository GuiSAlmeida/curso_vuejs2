<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Comprar!</button>
        </div>
    </Painel>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1
        }
    },
    methods: {
        // ...mapActions('cart', ['addProdutoAction']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // this.$store.state.produtos.push(produto)

            // com mutations
            // this.$store.commit('addProduto', produto)

            // com mapMutations
            // this.addProdutoAction(produto)

            this.$store.dispatch('cart/addProdutoAction', produto)

            // eslint-disable-next-line no-console
            console.log(this.$store)
        }
    },
    computed: {
        quantidade() {
            return this.$store.state.params.quantidade
        },
        preco() {
            return this.$store.state.params.preco
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
