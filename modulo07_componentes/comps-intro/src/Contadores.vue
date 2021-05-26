<template>
  <div class="contadores">
    <h1>Contadores</h1>
    <Contador v-for="i in 5" :key="i" />
  </div>
</template>

<script>
import Contador from "./Contador";

export default {
  components: {
    Contador,
  },
};
</script>
