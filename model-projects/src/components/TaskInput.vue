<template>
  <div class="input-section">
    <input type="text" @input="onChangeHandler" :value="this.task.taskTitle" />

    <button @click="createTaskButtonClickHandler">Create Task</button>
  </div>
</template>

<script>
export default {
  name: "TaskInputSection",
  data() {
    return {
      task: {
        taskTitle: "",
        created_at: new Date(),
        isFinished: false,
      },
    };
  },

  methods: {
    onChangeHandler(event) {
      let newTitle = event.target.value;
      this.task.taskTitle = newTitle;
    },

    createTaskButtonClickHandler() {
      let newTask = this.task;
      newTask.created_at = new Date();
      this.task = {};
      this.$emit("create-task", newTask);
    },
  },
};
</script>
