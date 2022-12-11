var one = new Vue({
    el: '#vue-app-one',

    data: {
      title:'Vue App One'
    },

    computed: {
        greet:function(){
            return'Hello Ha1:)';
        }
    },

    methods: {
       
    }
});

var two = new Vue({
    el: '#vue-app-two',

    data: {
        title:'Vue App Two'
    },

    computed: {
        greet:function(){
            return'Hello Ha222:)';
        }
    },

    methods: {
        changeTitel:function(){
            one.title = "Title changed";
        }
    }
})


two.title = "Changed from outside";