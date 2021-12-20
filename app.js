const app = Vue.createApp({
  //template
  //   template: "<h2>This is the template</h2>",
  //data
  data() {
    return {
      bookTitle: "Harry Potter",
    };
  },
  methods: {
    changeTitle() {
      let tempTitle;
      //   let titles = ["Harry Potter", "New Title"];

      tempTitle = "New Title";

      this.bookTitle = tempTitle;
    },
    logger(value) {
      console.log("🚀 ~ file: app.js ~ line 20 ~ logger ~ value", value);
    },
  },
});

app.mount("#app");
