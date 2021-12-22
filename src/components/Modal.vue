<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <header>
        <img :src="getModalIcon" alt="" class="statusIcon" />
        <h3>{{ title }}</h3>
      </header>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
import warningIcon from "@/assets/warning.png";
import successIcon from "@/assets/check.png";
import errorIcon from "@/assets/cancel.png";

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
        icon_src = successIcon;
      } else if (this.status === "error") {
        icon_src = errorIcon;
      } else if (this.status === "warning") {
        icon_src = warningIcon;
      }
      return icon_src;
    },
  },
};
</script>

<style>
.backdrop {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  margin: 20% auto;
  background-color: #eee;
  width: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid rgb(133, 124, 124);
}

.modal header h3 {
  margin-left: 8px;
}

.statusIcon {
  height: 20px;
  width: 20px;
}
</style>
