<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add [payload value]</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";

export default {
  components: {
    BaseContainer,
    TheCounter
  },
  methods:{
    addOne(){
      // this.$store.state.counter++;
      // this.$store.commit('increment');
      // this.$store.commit('increment',{value:10});
      this.$store.commit({
        type:'increment',
        value:200
      })
    }
  }
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
