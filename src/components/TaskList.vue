<template>
  <h1>List of tasks:</h1>
  <div v-if="taskList.length > 0">
    <ol v-for="(task, index) in taskList" :key="index">
      <li class="taskItem">
        <input
          type="checkbox"
          name="taskFinished"
          :id="index"
          :checked="task.completed"
          @click="toggleTaskFinishHandler(index)"
        />
        <p :class="{ completed: task.completed }">
          {{ task.title }}
        </p>
        <button class="deleteBtn">Delete</button>
      </li>
    </ol>
  </div>
  <div v-else>
    <h2>Fetching posts....</h2>
  </div>
</template>
<script>
export default {
  name: "taskList",
  props: ["taskList"],
  emits: ["finishTask"],
  methods: {
    toggleTaskFinishHandler(id) {
      this.$emit("finishTask", id);
    },
  },
};
</script>

<style>
.taskItem {
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
}

.completed {
  text-decoration-line: line-through;
}

.deleteBtn {
  background-color: crimson;
  color: #eee;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
}
</style>
