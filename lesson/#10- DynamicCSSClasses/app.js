new Vue({
    el: '#vue-app',

    data: {
        availabel: false,
        nearby: false
    },

    computed: {

    },

    methods: {
         compClasses:function (){
            return{
                availabel :this.availabel,
                nearby :this.nearby,

            }
         }
    }
})