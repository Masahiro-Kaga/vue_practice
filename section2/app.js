const app = Vue.createApp({
  data() {
    return {
        counter:0
    }
  },
  methods: {
    addCount(){
        return this.counter++;
    },
    reduceCount(){
        return this.counter--;
    }
  },
});

app.mount("#user-info");
