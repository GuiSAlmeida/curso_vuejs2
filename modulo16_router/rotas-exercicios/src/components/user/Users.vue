<template>
    <div class="init">
        <h2>Users</h2>
        <hr>
        <router-view/>
        <button sucesso @click="toBegin">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        toBegin() {
            // this.$router.push('/')
            // this.$router.push({ path: '/' })
            this.$router.push({ name: 'home' })
        }
    }
}
</script>