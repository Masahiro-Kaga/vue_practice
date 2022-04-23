<template>
  <the-navigation @set-page="setPage"></the-navigation>
  <main><component :is="selectedPage"></component></main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";

export default {
  components: {
    TheNavigation,
    TeamsList,
    UsersList,
  },
  data() {
    return {
      selectedPage: "teams-list",
      
    };
  },
  methods: {
    setPage(pageType) {
      this.selectedPage = pageType;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
