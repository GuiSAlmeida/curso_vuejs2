<template>
  <div>
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">
      Mostrar mensagem
    </b-button>

    <b-select v-model="animacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition name="fade" appear>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>

    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <transition :name="animacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
    </transition>

    <div class="mb-4">
      <b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">
        Info
      </b-button>

      <b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">
        Advertência
      </b-button>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>
  </div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia'
import AlertaInfo from './AlertaInfo'

export default {
  components: {
    AlertaAdvertencia,
    AlertaInfo
  },
  data() {
    return {
      animacao: "fade",
      exibir: false,
      msg: "Mensagem de info para usuário",
      componenteSelecionado: 'AlertaInfo'
    };
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 2s;
}

.fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
}

.slide-leave-active {
  animation: slide-out 2s ease;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 2s;
}
</style>