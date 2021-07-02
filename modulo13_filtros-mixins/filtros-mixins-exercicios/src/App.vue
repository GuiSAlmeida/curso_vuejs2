<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<h3>{{usuarioLogado}}</h3>
		<p>{{ cpf | inverter | cpfFormat }}</p>
		<input type="text" :value="cpf | inverter | cpfFormat">
		<hr>
		<Frutas/>
		<hr>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
		</div>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
import frutasMixin from './frutasMixin'
import usuarioLogado from '@/usuarioMixin'

export default {
	components: {
		Frutas
	},
	mixins: [
		frutasMixin,
		usuarioLogado
	],
	filters: {
		cpfFormat(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '01234567891'
		}
	},
    created() {
        // eslint-disable-next-line no-console
        console.log('Created app.vue')
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

input {
	font-size: 2.5rem;
}
</style>
