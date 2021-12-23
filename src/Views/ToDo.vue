<template>
  <h1>task title</h1>
  <p>Completed: No</p>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup(props, context) {
    const router = useRouter();

    console.log(router);
  },
};
</script>
