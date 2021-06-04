import Vue from 'vue';

export default new Vue({
    methods: {
        setUser(user) {
            this.$emit('usuarioMudou', user)
        },
        onChangeUser(callback) {
            this.$on('usuarioMudou', callback)
        }
    }
});