const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
      demoObj: {
        firstName: "Masahiro",
        lastName: "Kaga",
        age: 39,
        favorite: "Snowboard",
      },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
  },
});

app.mount("#user-goals");
