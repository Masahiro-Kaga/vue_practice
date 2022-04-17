const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    message() {
      console.log("Watcher is working...");
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 2000);
    },
  },
  computed: {
    message() {
      if (this.number < 37) {
        return "Not yet 37";
      } else if (this.number === 37) {
        return "You got it";
      } else {
        return "Too much";
      }
    },
  },
  methods: {
    addNumber(addNumber) {
      this.number = this.number + addNumber;
    },
  },
});

app.mount("#user-action");
