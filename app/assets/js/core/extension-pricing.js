import Vue from 'vue/dist/vue.js';



async function load() {
	let isThere = document.getElementById('pricing-table');
	if (isThere === null) return false;

	new Vue({
		el: '#pricing-table',
		data: {
			isYearly: false,
			proLink: '',
			studentLink:'',
			unlimitedLink:'',
			openModal: false
		},
		created: function () {

			this.proLink = this.isYearly ? "https://buy.stripe.com/aEUcNt1yQ27W4Ss5kn" : "https://buy.stripe.com/28ofZF1yQ6oc84E5kl";
			
		
			
			this.studentLink =  "https://buy.stripe.com/14k5l16Ta9Ao1Gg7ss" ;


			this.unlimitedLink = this.isYearly ? "https://buy.stripe.com/cN2bJpgtK7sg5Ww9AC" : "https://buy.stripe.com/dR6cNt4L2dQEfx69AE";
			
		},
		methods: {
			switchType: function() {
				this.isYearly = !this.isYearly;
			},

			handleModal: function() {
				this.openModal = !this.openModal;
			},


		},
		computed: {
			showYearly: function() {
				return this.isYearly;
			},
			showModal: function() {
				return this.openModal;
			},
		}
	});
}

export { load }; // a list of exported variables
