const app = Vue.createApp({
    data(){
        return{
            firstBoxRed:false
        }
    },
    methods:{
        toggleBoxColor(){
            this.firstBoxRed = !this.firstBoxRed
            console.log(this.firstBoxRed)
        }
    }
});

app.mount('#styling')