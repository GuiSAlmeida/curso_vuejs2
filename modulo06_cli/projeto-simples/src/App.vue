<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Hello Vue",
    };
  },
};
</script>

<style>
#app {
  background-color: blueviolet;
}
</style>
