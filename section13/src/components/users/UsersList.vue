<template>
    <li @click="test" class="list-none">

    </li>
</template>

<script>
    export default {
        inject:['users'],
        methods:{
            test(){
                console.log(this.users)
            }
        },
        computed:{

        }
    }
</script>

<style lang="scss" scoped>

</style>