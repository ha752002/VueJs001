
Vue.component('greeting',{
    template:'<p> Hey , I am {{name}}.<button v-on:click="">Change Name</button> </p>',

    data:function(){
        return{
            name:'HA'
        }
    },

    methods:{
        changeName:function(){
            this.name='Phat';
        }
    }
})

new vue({
    el:'#vue-app-one'
});

new vue({
    el:'#vue-app-two'
})