<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? " - My Favorite Friend" : "" }}</h2>
    <button @click="toggleFavorite">Favorite switch</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
        <h1>{{ isFavorite }}</h1>
        <h1>{{ friendIsFavorite }}</h1>
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String,
            required:true
        },
        emailAddress:{
            type:String,
            required:true
        },
        isFavorite:{
            type:Boolean,
            required:false,
            default:false,
        }
    },
  data() {
    return {
      detailsAreVisible:false,
      friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
        this.$emit('toggle-favorite')
    }
  }
};
</script>