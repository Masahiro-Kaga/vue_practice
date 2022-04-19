const app1 = Vue.createApp({
    data(){
        return{
            userTodo1:'',
            todoList1:[],
            userTodo2:'',
            todoList2:[],
            userTodo3:'',
            todoList3:[],
        }
    },
    methods:{
        addTodo1(){
            this.todoList1.push(this.userTodo1);
        },
        setText1(e){
            this.userTodo2 = e.target.value; 
        },
        addTodo2(){
            this.todoList2.push(this.userTodo2);
        },
        addTodo3(){
            this.userTodo3 = this.$refs.usertxt.value; 
            this.todoList3.push(this.userTodo3);
            // console.dir(this.$refs.usertxt);
            // console.log(this.$refs.usertxt);
        },
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
