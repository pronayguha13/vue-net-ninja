<template>
  <div class="input-section">
    <input
      type="text"
      @input="onChangeHandler"
      :value="this.task.taskTitle"
      ref="title"
    />

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
      if (this.task.taskTitle?.length) {
        this.task = {};
        this.$emit("CreateTask", newTask);
      } else {
        this.$emit(
          "TaskCreationFailed",
          "warning",
          "Failed to Create todo",
          "Please add a title to the todo"
        );
        const titleInput = this.$refs.title;
        titleInput.focus();
      }
    },
  },
};
</script>
