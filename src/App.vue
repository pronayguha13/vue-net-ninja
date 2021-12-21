<template>
  <Header />
  <h1>My First Vue app</h1>
  <TaskInput
    @CreateTask="createTaskHandler"
    @TaskCreationFailed="
      (status, title, content) => openModal(status, title, content)
    "
  />
  <TaskList
    v-bind:taskList="taskList"
    @FinishTask="(id) => finishTaskHandler(id)"
  />
  <Modal
    v-if="showModal"
    :title="modalTitle"
    :status="status"
    :content="modalContent"
    @close="closeModal"
  />
</template>

<script>
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
      console.log(`taskList:>>`, this.taskList);
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

    openModal(status, title, content) {
      this.modalTitle === title;
      this.modalContent = content;
      this.status = status;
      this.showModal = true;
      setTimeout(() => {
        this.closeModal();
      }, 1000);
    },

    closeModal() {
      this.modalTitle === "";
      this.modalContent = "";
      this.status = "";
      this.showModal = false;
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
