<template>
  <Header />
  <h1>My First Vue app</h1>
  <TaskInput @create-task="createTaskHandler" />
  <TaskList v-bind:taskList="taskList" @finish-task="finishTaskHandler" />
</template>

<script>
import Header from "@/components/Header";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "App",
  components: {
    Header,
    TaskInput,
    TaskList,
  },
  data() {
    return {
      taskList: [],
      completedTaskList: [],
      deletedTaskList: [],
    };
  },
  methods: {
    createTaskHandler(newTask) {
      let tempTaskList = this.taskList;

      tempTaskList.unshift(newTask);

      this.taskList = tempTaskList;
    },

    finishTaskHandler(id) {
      const task = this.taskList[id];
      let isFinishedStatus = !task.isFinished;

      task.isFinished = isFinishedStatus;

      this.taskList[id] = task;
    },
  },
};
</script>

<style>
body {
  width: 100vw;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
