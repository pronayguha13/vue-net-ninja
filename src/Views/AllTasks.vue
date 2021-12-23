<template>
  <h2>{{ random_number }}</h2>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    let random_number = ref(Math.ceil(Math.random() * 10));
    console.log(
      "🚀 ~ file: AllTasks.vue ~ line 10 ~ setup ~ random_number",
      random_number.value
    );
    return {
      random_number,
    };
  },
};
</script>

<style></style>
