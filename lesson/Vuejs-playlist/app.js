new Vue({
	el:'#vue-app',
	data:{
		age:25,
		name:'Shaun',
		job:'ninija',
		website:'http:www.thenetninja.co.uk',
		x: 0,
		y:0
	},

	methods: {
		// greet: function(time){
		// 	return 'Good' + time + ' '+ this.name;
		// }

		add: function(inc){
			this.age += inc;
		},

		subtract: function(dec){
			this.age -= dec;
		},

		updateXY: function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},

		click: function(){
			alert('You Clicked me');
		}
	}
})