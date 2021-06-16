<template>
    <div 
        class="task"
        :class="stateClass"
        @click="taskStateChange(task)" >
        <span 
            class="close"
            @click.stop="taskDeleted(task)"
        >x</span>

        <p>{{task.name}}</p>
    </div>
</template>

<script>
import eventBus from "../eventBus";

export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        taskDeleted(task) {
            eventBus.taskDeleted(task)
        },
        taskStateChange(task) {
            eventBus.taskStateChange(task)
        }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task {
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .pending {
        border-left: 12px solid #b73229;
        background-color: #f44336;
    }

    .done {
        color: #ddd;
        border-left: 12px solid #0a8f08;
        background-color: #4caf50;
        text-decoration: line-through;
    }

    .pending .close {
        background-color: #b73229;
    }

    .done .close {
        background-color: #0a8f08;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
    }
</style>