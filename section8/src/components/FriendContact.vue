<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "My Favorite Friend" : "" }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
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
            validator:function(value){
                return value === true || value === false
            }
        }
    },
  data() {
    return {
      detailsAreVisible:false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>