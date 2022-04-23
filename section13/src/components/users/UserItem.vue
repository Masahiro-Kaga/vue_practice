<template>
    <li class="m-3 flex flex-col text-center justify-items-center rounded-md border-2 max-w-[300px] mx-auto">
        <h3>{{name}}</h3>
        <div>{{role}}</div>
    </li>
</template>

<script>
    export default {
        props:['name','role']
    }
</script>
