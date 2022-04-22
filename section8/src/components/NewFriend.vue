<template>
  <form
    @submit.prevent="registerInfo"
    class="bg-orange-700 flex flex-col text-black text-center w-3/4 mx-auto m-4 p-10 rounded-md"
  >
    <label>Name</label>
    <input v-model="name" />
    <label>Phone</label>
    <input v-model="phone" />
    <label>Email</label>
    <input v-model="email" />
    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  emit: ["add-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    registerInfo() {
      this.$emit("add-contact", this.name, this.phone, this.email);
    },
  },
};
</script>

<style lang="scss" scoped></style>
