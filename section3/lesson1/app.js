const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: ["masahiro","eri","kimiko","shinichi"],
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
    removeGoal(index){
      this.goals.splice(index,1);
    }
  },
});

app.mount("#user-goals");
