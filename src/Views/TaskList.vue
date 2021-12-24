<template>
  <h2>User Name</h2>
</template>
<script>
import { ref } from "@vue";
export default {
  setup(props, context) {
    const user = ref(null);
    return {
      user,
    };
  },
};
</script>
