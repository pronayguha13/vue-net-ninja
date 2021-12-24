<template>
  <Header />
  <h1>My First Vue app</h1>
  <!-- <TaskInput
    @CreateTask="createTaskHandler"
    @TaskCreationFailed="
      (status, title, content) => openModal(status, title, content)
    "
  />
  <TaskList
    v-bind:taskList="taskList"
    @finishTask="(id) => finishTaskHandler(id)"
  />
  <Modal
    v-if="showModal"
    :title="modalTitle"
    :status="status"
    :content="modalContent"
    @close="closeModal"
  /> -->
  <router-view />
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList.vue";
import Modal from "@/components/Modal";

export default {
  name: "App",
  components: {
    Header,
    TaskInput,
    TaskList,
    Modal,
  },
  data() {
    return {
      taskList: [],
      completedTaskList: [],
      deletedTaskList: [],
      showModal: false,
      modalTitle: "",
      modalContent: "",
      status: "",
    };
  },
  methods: {
    createTaskHandler(newTask) {
      let tempTaskList = this.taskList;

      tempTaskList.unshift(newTask);

      this.taskList = tempTaskList;
      this.openModal(
        "success",
        "ToDo created successfully",
        "We have added one more task to the list"
      );
    },

    finishTaskHandler(id) {
      const task = this.taskList[id];
      let prevStatus = task.completed;
      task.completed = !prevStatus;

      this.taskList[id] = task;
      if (!prevStatus) {
        this.openModal(
          "success",
          "ToDo completed",
          "Well done you have finished one more task"
        );
      } else {
        this.openModal("warning", "ToDo Unchecked", "Task added back again");
      }
    },

    openModal(status, title, content) {
      this.modalTitle = title;
      this.modalContent = content;
      this.status = status;
      this.showModal = true;
    },

    closeModal() {
      this.modalTitle === "";
      this.modalContent = "";
      this.status = "";
      this.showModal = false;
    },

    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        console.log(
          "🚀 ~ file: TaskList.vue ~ line 37 ~ fetchPosts ~ response",
          response.data
        );
        this.taskList = response.data;
      } catch (error) {
        console.log(
          "🚀 ~ file: TaskList.vue ~ line 43 ~ fetchPosts ~ error",
          error
        );
      }
    },
  },

  mounted() {
    this.fetchPosts();
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
