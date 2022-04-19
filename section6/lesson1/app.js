const app = Vue.createApp({}).component("friend-contact", {
  template: `
        <li>
        <h2>{{friend.name}}</h2>
        <button @click="setVisibility">{{detailsAreVisible ? "Hide" : "Show" }} Details</button>
        <ul v-if="detailsAreVisible">
        <li>{{friend.phone}}</li>
        <li>{{friend.email}}</li>
        </ul>
        </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenzo",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
      setVisibility(){
          this.detailsAreVisible = !this.detailsAreVisible;
      }
  },
});

app.mount("#app");
