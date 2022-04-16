const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName:''
    };
  },
  methods: {
      confirmInput(event){
        this.confirmName = event.target.value;
      },
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
