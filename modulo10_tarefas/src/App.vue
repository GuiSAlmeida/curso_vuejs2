<template>
  <div id="app">
    <h1>Tarefas</h1>

    <TaskProgress :progress="progress" />

    <NewTask @add-task="addTask" />

    <TaskGrid :tasks="tasks" />
  </div>
</template>

<script>
import TaskGrid from "./components/TaskGrid";
import NewTask from "./components/NewTask";
import TaskProgress from "./components/TaskProgress";
import eventBus from "./eventBus";

export default {
  components: {
    TaskGrid,
    NewTask,
    TaskProgress,
  },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    progress() {
      const totalTasks = this.tasks.length;
      const doneTasks = this.tasks.filter((task) => !task.pending).length;
      return Math.round((doneTasks / totalTasks) * 100) || 0;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  },
  methods: {
    addTask(task) {
      const isNew = this.tasks.filter((t) => t.name === task.name).length == 0;
      if (isNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
      }
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1);
    },
    toggleTaskState(task) {
      const index = this.tasks.indexOf(task)
      this.tasks[index].pending = !this.tasks[index].pending;
    },
  },
  created() {
    const json = localStorage.getItem('tasks')
    this.tasks = JSON.parse(json) || []
    
    eventBus.onTaskDeleted(this.deleteTask);
    eventBus.onTaskStateChange(this.toggleTaskState);
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
