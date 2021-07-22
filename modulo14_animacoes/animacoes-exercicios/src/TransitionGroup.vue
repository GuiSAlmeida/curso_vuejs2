<template>
  <div>
    <b-button @click="addAluno" class="mb-4">Adicionar aluno</b-button>
    <transition-group name="fade" tag="div" appear>
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removeAluno(i)">
          {{ aluno }}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alunos: ["Gui", "Deia", "Chokito", "Bulma"],
    };
  },
  methods: {
    addAluno() {
      const name = Math.random().toString(36).substring(2);
      this.alunos.push(name);
    },
    removeAluno(index) {
      this.alunos.splice(index, 1);
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-leave-active {
  position: absolute;
  width: 100%;
  transition: opacity 2s;
}


.fade-move {
  transition: transform 1s;
}
</style>