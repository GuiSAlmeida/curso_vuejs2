<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="usuario in usuarios" 
                    :key="usuario.id"
                    @click="setUser(usuario)"
                    :class="{selected: usuario.id === user.id}"
                >
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import eventBus from '@/eventBus'

export default {
    data() {
        return {
            user: {}
        }
    },
    props: { 
        usuarios: Array,
    },
    methods: {
        setUser(user) {
            eventBus.setUser(user)
        }
    },
    created() {
        eventBus.onChangeUser(user => {
            this.user = user
        })
    }
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover,
    tbody tr.selected {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
