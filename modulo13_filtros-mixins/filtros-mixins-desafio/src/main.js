import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('wordLength', (word) => {
	const wordParsed = word.split(' ')
	return wordParsed.reduce((term, w) => {
		return term.concat(`${w} (${w.length}) `)
	}, '')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
