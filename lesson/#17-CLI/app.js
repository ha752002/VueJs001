
new vue({
    el:'#vue-app',

    data: {
      output:'Your fav Food'
    },

    methods: {
        readRefs:function(){
            console.log(this.$refs.innerText);
            this.output = this.$refs.input.value;
        }
    }
});

