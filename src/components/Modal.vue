<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal">
      <img :src="getModalIcon" alt="" />
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "status", "content"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  computed: {
    getModalIcon() {
      let icon_src = null;
      if (this.status === "success") {
        icon_src = "../assets/check.png";
      } else if (this.status === "error") {
        icon_src = "../assets/cancel.png";
      } else if (this.status === "warning") {
        icon_src = "../assets/warning.png";
      }
      return {};
    },
  },
};
</script>

<style></style>
