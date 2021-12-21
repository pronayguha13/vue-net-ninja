const app = Vue.createApp({
  //template
  //   template: "<h2>This is the template</h2>",
  //data
  data() {
    return {
      showBook: true,
      bookTitle: "Harry Potter",
    };
  },
  methods: {
    changeTitle(event, bookName) {
      console.log("🚀 ~ file: app.js ~ line 13 ~ changeTitle ~ event", event);
      let tempTitle;
      //   let titles = ["Harry Potter", "New Title"];

      // tempTitle = "New Title";

      // this.bookTitle = tempTitle;
      this.bookTitle = bookName;
    },
    toggleShowBook() {
      let tempShowBook = this.showBook;
      this.showBook = !tempShowBook;
    },
  },
});

app.mount("#app");
