<template>
  <ul>
    <user-item
      v-for="user in users"
      :id="user.id"
      :name="user.fullName"
      :role="user.role"
      class="list-none"
    >
    </user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
    components:{
        UserItem,
    },
  inject: ["users"],
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped></style>
