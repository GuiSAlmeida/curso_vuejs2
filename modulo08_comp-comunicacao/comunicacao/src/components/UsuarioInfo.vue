<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
    <p>Idade do usuário: <strong>{{ idade }}</strong></p>

    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn">Reiniciar Nome (callback)</button>
  </div>
</template>

<script>
import eventBus from '@/eventBus'

export default {
  data() {
    return {
      nomeFilho: this.nome
    }
  },
  props: {
    nome: {
        type: String,
        default: 'Anonimo', // também pode receber uma função
        required: true
    },
    idade: Number,
    reiniciarFn: Function
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
    reiniciarNome() {
      this.nomeFilho = "Pedro";
      this.$emit('mudouNome', this.nomeFilho);
    }
  },
  created() {
    eventBus.$on('mudouIdade', idade => {
      this.idade = idade;
    })
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
