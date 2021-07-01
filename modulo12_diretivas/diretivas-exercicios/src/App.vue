<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="text"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:background.delay="'lightgreen'">Usando diretiva personalizada</p>
		<p v-destaque.delay="cor">Usando diretiva personalizada</p>

		<p v-destaque-local:background.delay.toggle="{color1: 'lightgreen', color2: 'red', delay: 2000, interval: 200}">Usando diretiva local personalizada</p>
		<p v-destaque-local.delay="{color1: 'lightgreen', delay: 5000}">Usando diretiva local personalizada</p>
	</div>
</template>

<script>
export default {
	directives: {
		"destaque-local": {
			bind(el, binding) {
				const applyColor = color => {
					if(!binding.arg) {
						el.style.color = color
						return
					}
					el.style.backgroundColor = color
				}

				let delay = 0
				if(binding.modifiers['delay']) delay = binding.value.delay


				const color1 = binding.value.color1
				const color2 = binding.value.color2
				let atual = color1

				setTimeout(() => {
					if(binding.modifiers['toggle']) {
						setInterval(() => {
							atual = atual === color1 ? color2 : color1
							applyColor(atual)
						}, binding.value.interval);
					} else {
						applyColor(color1)
					}
				}, delay);
			}
		}
	},
	data() {
		return {
			cor: 'yellow',
			text: 'Usando diretiva v-text'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
