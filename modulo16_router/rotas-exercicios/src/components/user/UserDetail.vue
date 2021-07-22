<template>
	<div class="user-detail">
		<h3>Usário detalhe</h3>
        <hr>
        <p><strong>Cod:</strong> {{ id }}</p>

        <router-link 
            tag="button" 
            :to="{
                name: 'editUser', 
                params: { id }, 
                query: { language: 'pt' },
                hash: '#rodape'
            }"
            primario
        >
            Editar
        </router-link>
	</div>
</template>

<script>

export default {
    // data() {
        //     return {
            //         id: this.$route.params.id
    //     }
    // },
    // watch: {
        //     $route(to) {
            //         this.id = to.params.id
    //     }
    // },
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        // eslint-disable-next-line no-console
        console.log('antes rota usuario detalhe');
        next();
    }
}
</script>

<style>
</style>
