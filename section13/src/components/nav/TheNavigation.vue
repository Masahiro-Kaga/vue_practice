<template>
  <div class="h-24 bg-[blue] flex flex-row justify-center text-white">
    <button @click="setComponent('teams-list')" class="m-4 p-4 bg-[red] rounded-md">Team</button>
    <button @click="setComponent('users-list')" class="m-4 p-4 bg-[red] rounded-md">User</button>
  </div>
</template>

<script>
export default {
    emit:["set-page"],
    methods:{
        setComponent(page){
            this.$emit('set-page', page);
        }
    }
};
</script>

<style lang="scss" scoped></style>
