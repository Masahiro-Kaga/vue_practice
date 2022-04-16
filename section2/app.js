const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    submitForm(event) {
    //   event.preventDefault();
      alert('Submitted');
    },
    addCount() {
      return this.counter++;
    },
    reduceCount() {
      return this.counter--;
    },
    setName(e, lastName) {
      return (this.name = e.target.value + " " + lastName);
    },
  },
});

app.mount("#user-info");
