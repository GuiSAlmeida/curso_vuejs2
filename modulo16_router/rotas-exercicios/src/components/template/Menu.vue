<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Init</a>
            </router-link>

            <router-link to="/user" tag="li" active-class="active">
                <a>Users</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
}
</script>

<style>

</style>