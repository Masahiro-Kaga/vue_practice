<template>
    <li class="m-3 flex flex-col text-center justify-items-center rounded-md border-2 max-w-[300px] mx-auto" :class="roleClass">
        <h3>{{name}}</h3>
        <div>{{role}}</div>
    </li>
</template>

<script>
    export default {
        props:['name','role'],
        computed:{
            roleClass(){
                if(this.role === 'Engineer'){
                    return 'bg-[red]'
                }
                if(this.role === 'Consultant'){
                    return 'bg-[blue]'
                }
            }
        }
    }
</script>
