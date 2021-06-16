import Vue from 'vue'

export default new Vue({
    methods: {
        taskDeleted(task) {
            this.$emit('task-deleted', task)
        },
        onTaskDeleted(callback) {
            this.$on('task-deleted', callback)
        },
        taskStateChange(task) {
            this.$emit('task-state-change', task)
        },
        onTaskStateChange(callback) {
            this.$on('task-state-change', callback)
        }
    }
})