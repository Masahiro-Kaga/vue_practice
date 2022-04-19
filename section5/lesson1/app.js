const app1 = Vue.createApp({
    data(){
        return{
            userTodo:'',
            todoList:[]
        }
    },
    methods:{
        addTodo(){
            this.todoList.push(this.userTodo);
        }
    },
    watch:{

    },
    computed:{

    }

});

app1.mount("#section1");

const app2 = Vue.createApp({
    data(){
        return{
            favoriteMeal:"meat"
        }
    },
    template:`<p>{{favoriteMeal}}</p>`,
    methods:{

    },
    watch:{

    },
    computed:{

    }

});

app2.mount("#section2");
