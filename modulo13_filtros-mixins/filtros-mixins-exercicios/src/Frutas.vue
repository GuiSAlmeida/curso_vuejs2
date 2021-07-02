
<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import frutasMixin from '@/frutasMixin'
import usuarioLogado from '@/usuarioMixin'

export default {
	mixins: [
		frutasMixin,
        usuarioLogado
	],
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maçã', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    },
    created() {
        // eslint-disable-next-line no-console
        console.log('Created frutas.vue')
    }
}
</script>
