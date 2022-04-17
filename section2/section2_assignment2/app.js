const app = Vue.createApp({
  data() {
    return {
        lastName:"kaga",
      insertedName:'go',
      confirmedName:''
    };
  },
  methods: {
    setInsertedName(event){
        this.insertedName = event.target.value + " ";
    },
    submitForm(){
        alert("Yeaaaaaa!")
    },
    showConfirmedName(event){
        this.confirmedName = event.target.value;
    }
  },
});

app.mount("#user-events");
