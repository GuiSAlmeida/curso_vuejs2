<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade do usuário: <strong>{{ idade }}</strong></p>
    <button @click="alterarIdade">Alterar Idade</button>
  </div>
</template>

<script>
import eventBus from "@/eventBus";

export default {
  props: {
    idade: Number,
  },
  methods: {
    alterarIdade() {
      this.idade += 1;
      eventBus.alterarIdade(this.idade);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
