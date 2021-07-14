<template>
    <ul>
        <li v-for="aluno in alunos" :key="aluno">{{aluno}}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            alunos: ['Gui', 'Deia', 'Chokito', 'Bulma']
        }
    }
}
</script>