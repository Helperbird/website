import Vue from 'vue/dist/vue.js';

async function load() {
	let isThere = document.getElementById('pricing-table-widget');
	if (isThere === null) return false;

	new Vue({
		el: '#pricing-table-widget',
		data: {
			isYearly: false,

			proLink: '',
			standardLink:'',
			unlimitedLink:''
		},

		created: function () {


			this.proLink = this.isYearly ? "https://buy.stripe.com/9AQ5l13GYeUI5Ww6oF" : "https://buy.stripe.com/28o28P1yQbIw5Ww7sI";
			
		
			
			this.standardLink = this.isYearly ? "https://buy.stripe.com/4gwaFl1yQ6ocdoY4gv" : "https://buy.stripe.com/6oEfZFelC8wk98IaES";


			this.unlimitedLink = this.isYearly ? "https://buy.stripe.com/dR6bJp2CU13S98I3cv" : "https://buy.stripe.com/3cseVB3GYbIwet24gy";
			
		},
		methods: {
			switchType: function() {
				this.isYearly = !this.isYearly;

				this.proLink = this.isYearly ? "https://buy.stripe.com/9AQ5l13GYeUI5Ww6oF" : "https://buy.stripe.com/28o28P1yQbIw5Ww7sI";
			
		
			
				this.standardLink = this.isYearly ? "https://buy.stripe.com/4gwaFl1yQ6ocdoY4gv" : "https://buy.stripe.com/6oEfZFelC8wk98IaES";
	

				this.unlimitedLink = this.isYearly ? "https://buy.stripe.com/dR6bJp2CU13S98I3cv" : "https://buy.stripe.com/3cseVB3GYbIwet24gy";
				
			}
		},
		computed: {
			showYearly: function() {
				return this.isYearly;
			}
		}
	});
}

export { load }; // a list of exported variables
