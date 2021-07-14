<template>
  <div>
    <b-button variant="success" @click="exibir = !exibir">Alternar</b-button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-if="exibir" class="caixa"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exibir: true,
      larguraBase: 0,
    }
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1
      const temp = setInterval(() => {
        const novaLargura = this.larguraBase + (negativo ? -rodada * 10 : rodada * 10)
        el.style.width = `${novaLargura}px`
        rodada++
        if(rodada > 30){
          clearInterval(temp)
          done()
        }
      }, 20);

    },
    beforeEnter(el) {
      this.larguraBase = 0
      el.style.width = `${this.larguraBase}px`
    },
    enter(el, done) {
      this.animar(el, done, false)
    },
    // afterEnter(el) {
    //   console.log('afterEnter');
    // },
    // enterCancelled() {
    //   console.log('enterCancelled');
    // },
    beforeLeave(el) {
      this.larguraBase = 300
      el.style.width = `${this.larguraBase}px`
    },
    leave(el, done) {
      this.animar(el, done, true)
    },
    // afterLeave(el) {
    //   console.log('afterLeave');
    // },
    // leaveCancelled() {
    //   console.log('leaveCancelled');
    // }
  }
}
</script>

<style>
.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
</style>