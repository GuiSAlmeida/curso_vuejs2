<template>
  <div id="app">
    <h1>Diretivas (Desafio)</h1>
    <hr />
    <!-- Exercício -->
    <!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
    <div v-overlay="{opacity: 0.2, zindex: -1}"></div>
    <button v-quando:click="executar">Executar</button>
  </div>
</template>

<script>
export default {
  directives: {
    quando: {
      bind(el, binding) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      },
    },
    overlay: {
      bind(el, binding) {
        el.style.backgroundColor = "#000";
        el.style.width = "100%";
        el.style.height = "100vh";
        el.style.position = "fixed";
        el.style.top = 0;
        el.style.left = 0;
		el.style.opacity= binding.value.opacity
		el.style.zIndex= binding.value.zindex
      },
    },
  },
  methods: {
    executar() {
      alert("clicou");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
