const app = Vue.createApp({
    data(){
        return{
            boxA:false,
            boxB:false,
            boxC:false
        }
    },
    computed:{
        boxAclasses(){
            return {redBox:this.boxA}
        }
    },
    methods:{
        toggleBoxColor(typeofbox){
            switch(typeofbox){
                case 'a':
                    this.boxA = !this.boxA;
                    break;
                case 'b':
                    this.boxB = !this.boxB;
                    break;
                case 'c':
                    this.boxC = !this.boxC;
            }
        }
    }
});

app.mount('#styling')