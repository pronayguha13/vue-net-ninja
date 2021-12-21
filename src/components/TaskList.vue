<template>
  <h1>List of tasks:</h1>
  <div v-if="taskList.length > 0">
    <ol v-for="(task, index) in taskList" :key="index">
      <li class="taskItem">
        <input
          type="checkbox"
          name="taskFinished"
          :id="index"
          :checked="task.isFinished"
          @click="toggleTaskFinishHandler(index)"
        />
        <p>{{ task.taskTitle }}</p>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "taskList",
  props: ["taskList"],
  methods: {
    toggleTaskFinishHandler(id) {
      this.$emit("FinishTask", id);
    },
  },
};
</script>

<style>
.taskItem {
  list-style: none;
  display: flex;
  align-items: center;
}
</style>
