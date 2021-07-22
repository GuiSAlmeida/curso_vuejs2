<template>
  <div class="user-edit">
    <h3>Usário editar</h3>
    <hr />
    <p><strong>Cod:</strong> {{ id }} - {{ $route.params.id }}</p>
    <p><strong>Language:</strong> {{ $route.query.language }}</p>

    <button primario @click="confirm = true">Confirmar</button>

    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirm: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirm) {
      next()
    } else {
      if(confirm('tem certeza?')) {
        next()
      } else {
        next(false)
      }
    }
  }
};
</script>

<style>
#rodape {
  margin-top: 2000px;
}
</style>