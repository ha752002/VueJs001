new Vue({
    el: '#vue-app',
    data:{
        name:'',
        age:''
    },
    method: {
        logName: function(){
            console.log('you entered your name');
        },

        logAge: function(){
            console.log('you entered your Age');
        }
    }
})