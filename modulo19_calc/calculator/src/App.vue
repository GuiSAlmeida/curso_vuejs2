<template>
  <div id="app">
    <h1>Calculadora</h1>
    <calculator />
  </div>
</template>

<script>
import Calculator from './main/Calculator'

export default {
  components: {
    Calculator
  }
}
</script>

<style>
* {
  font-family: 'Roboto Mono', monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(to right, rgb(83,105,118), rgb(41,46,73));
}
</style>
