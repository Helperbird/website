import Vue from 'vue/dist/vue.js';

async function load() {
	let isThere = document.getElementById('nav');
	if (isThere === null) return false;
	new Vue({
		el: '#nav',
		data: {
			openFeatures: false,
			openProducts: false,
			openCompare: false,
			closeMenu: false,
			openModal: false
		},
		methods: {
			handleFeatures: function() {
				this.openProducts = false;
				this.openCompare = false;
				this.openFeatures = !this.openFeatures;
			},
			handleModal: function() {
				this.openModal = !this.openModal;
			},
			handleProducts: function() {
				this.openFeatures = false;
				this.openCompare = false;
				this.openProducts = !this.openProducts;
			},
			handleCommon: function() {
				this.openFeatures = false;
				this.openProducts = false;
				this.openCompare = !this.openCompare;
			},
			handleMobileMenu: function() {
				this.closeMenu = !this.closeMenu;
			}
		},
		computed: {
			showFeatures: function() {
				return this.openFeatures;
			},
			showModal: function() {
				return this.openModal;
			},
			showCompare: function() {
				return this.openCompare;
			},
			showMenu: function() {
				return this.closeMenu;
			},
			showProducts: function() {
				return this.openProducts;
			}
		}
	});
}

export { load }; // a list of exported variables
