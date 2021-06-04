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
