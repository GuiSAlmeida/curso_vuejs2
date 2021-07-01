<template>
    <div>
        <Rotulo nome="Nome">
            <input 
                type="text" 
                :value="value.name"
                @input="alteraNome"
            >
        </Rotulo>

        <Rotulo nome="Sobrenome">
            <input 
                type="text" 
                :value="value.surname"
                @input="alteraSobrenome"
            >
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    components: {
        Rotulo
    },
    methods: {
        alteraNome(event) {
            this.$emit('input', {
                name: event.target.value, 
                surname: this.value.surname
            })
        },
        alteraSobrenome(event) {
            this.$emit('input', {
                name: this.value.name, 
                surname: event.target.value
            })
        }
    }
}
</script>

