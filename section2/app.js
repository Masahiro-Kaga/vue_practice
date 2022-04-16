const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    confirmInput(event) {
      this.confirmName = event.target.value;
    },
    submitForm(event) {
      //   event.preventDefault();
      alert("Submitted");
    },
    addCount(num) {
      this.counter += num;
    },
    reduceCount(num) {
      this.counter -= num;
    },
    setName(e, lastName) {
    //   return (this.name = e.target.value + " " + lastName);
      return (this.name = e.target.value);
    },
    reset(){
    this.name = "";
    }
  },
});

app.mount("#user-info");
