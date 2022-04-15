const app = Vue.createApp({
    data(){
        return{
            courseGoalA:'Finish the course and learn Vue!',
            courseGoalB:'Master Vue and build amazing apps!',
            vueLink:'https://vuejs.org/'
        }
    },
    methods:{
        outputGoal(){
            return this.courseGoalA;
        }
    }
})

app.mount("#user-goal")