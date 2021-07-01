import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding) {
		let delay = 0
		if(binding.modifiers['delay']) delay = 2000

		setTimeout(() => {
			if(!binding.arg) {
				el.style.color = binding.value
				return
			}
			el.style.backgroundColor = binding.value
		}, delay);

	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
