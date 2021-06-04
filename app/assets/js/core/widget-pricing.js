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

			this.proLink = this.isYearly ? "https://buy.stripe.com/14k8xd5P6eUI2KkfZ8" : "https://buy.stripe.com/3cs5l14L25k8acMaEL";
			
		
			
			this.standardLink = this.isYearly ? "https://buy.stripe.com/bIYeVBelC8wk2KkdQW" : "https://buy.stripe.com/3cs14La5m9Ao1Gg149";


			this.unlimitedLink = this.isYearly ? "https://buy.stripe.com/dR6dRx4L2fYMbgQdQZ" : "https://buy.stripe.com/eVaaFldhy5k898IfZ6";
			
		},
		methods: {
			switchType: function() {
				this.isYearly = !this.isYearly;

				this.proLink = this.isYearly ? "https://buy.stripe.com/14k8xd5P6eUI2KkfZ8" : "https://buy.stripe.com/3cs5l14L25k8acMaEL";
			
		
			
				this.standardLink = this.isYearly ? "https://buy.stripe.com/bIYeVBelC8wk2KkdQW" : "https://buy.stripe.com/3cs14La5m9Ao1Gg149";
	

				this.unlimitedLink = this.isYearly ? "https://buy.stripe.com/dR6dRx4L2fYMbgQdQZ" : "https://buy.stripe.com/eVaaFldhy5k898IfZ6";
				
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
