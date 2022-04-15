const app = Vue.createApp({
  data() {
    return {
      name: "Masahiro Kaga",
      age: 39,
      agePlusFive: 44,
      favoriteNumber: 0,
      favoritePic:
        "https://imgs.search.brave.com/SSE_QxD9IDG-Sbey3KoNeU1n1R7M6UQuJ_JS_DpefPs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC9lLzMvNC8x/MDAxNDI2LWdvcmdl/cm91cy1wcmV0dHkt/d2ludGVyLWJhY2tn/cm91bmRzLTE5MjB4/MTIwMC5qcGc",
    };
  },
  methods: {
    favoriteNumberRandom() {
      return Math.round(Math.random());
    },
  },
});

app.mount("#user-info");
