<template>
  <li>
    <h2>{{friends[0].name}}</h2>
    <button @click="setVisibleStatus">{{detailsAreVisible ? "HIDE" : "SHOW"}}</button>
    <ul v-if="detailsAreVisible">
      <li>{{ friends[0].phone }}</li>
      <li>{{ friends[0].email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods:{
    setVisibleStatus(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>

<style>
</style>