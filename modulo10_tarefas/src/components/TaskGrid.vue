<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <Task 
                v-for="task in tasks" 
                :key="task.name"
                :task="task"
            >
                {{task.name}}
            </Task>
        </template>
        <p v-else class="no-task">Sua vida está em dia :)</p>
    </div>
</template>

<script>
import Task from './Task.vue'

export default {
    components: {
        Task
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
};
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #aaa;
        font-size: 1.7rem;
    }
</style>