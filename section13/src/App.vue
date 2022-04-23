<template>
  <the-navigation @set-page="setPage"></the-navigation>
  <h3>{{selectedPage}}</h3>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
  export default {
    components:{
      TheNavigation
    },
    data(){
      return{
        selectedPage:"teams-item"

      }
    },
    methods:{
      setPage(pageType){
        this.selectedPage = pageType;
      }
    }
  }
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