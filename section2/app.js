const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        firstName: '',
        lastName: '',
        fullName:''
      };
    },
    watch:{
        counter(value){
            if(value > 50){
                this.counter = 0;
            }
        }
        // firstName(value){
        //     this.fullName = value + this.lastName
        // },
        // lastName(value){
        //     this.fullName = value + this.firstName
        // }
    },
    computed: {
      outputFullName(){
          if(this.firstName === '' || this.firstName ===''){
              return '';
          }
          return this.firstName + " " + this.lastName;
      }
    },
    methods: {
    //   outputFullname() {
    //     console.log('Running again...');
    //     if (this.name === '') {
    //       return '';
    //     }
    //     return this.name + ' ' + 'Kaga';
    //   },
      setName(event) {
        this.name = event.target.value;
      },
      add(num) {
        this.counter = this.counter + num;
      },
      reduce(num) {
        this.counter = this.counter - num;
        // this.counter--;
      },
      resetInput() {
        this.firstName = '';
        this.lastName = '';
      },
    },
  });
  
  app.mount('#events');
  