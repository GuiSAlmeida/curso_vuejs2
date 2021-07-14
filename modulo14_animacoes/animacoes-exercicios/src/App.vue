<template>
  <div id="app" class="container">
    <h1>Animações</h1>
    <hr />

    <TransitionGroup/>
  </div>
</template>

<script>
import TransitionGroup from './TransitionGroup.vue'

export default {
  components: {
    TransitionGroup
  }
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
  font-size: 1.5rem;
}
</style>
