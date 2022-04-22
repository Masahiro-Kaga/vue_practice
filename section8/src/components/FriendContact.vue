<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? " - My Favorite Friend" : "" }}</h2>
    <div class="flex flex-col md:mx-10 mx-36">
      <button class="my-2" @click="toggleFavorite">Favorite switch</button>
      <button class="my-2" @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li>
          <strong>Phone:</strong>
          {{ phoneNumber }}
          <h1>{{ isFavorite }}</h1>
        </li>
        <li>
          <strong>Email:</strong>
          {{ emailAddress }}
        </li>
      </ul>
      <button class="my-2" @click="deleteInfo">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteInfo(){
      this.$emit("delete-info");
    }
  },
};
</script>
