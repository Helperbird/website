import Vue from 'vue';
import { VueTyper } from 'vue-typer';


function load() {
	let isThere = document.getElementById('helperbird-website');
	console.log(isThere);
	new Vue({
		components: {
			
			VueTyper

		  },
		el: '#helperbird-website',
		data: {
			menus: false,
			mobileMenu: false,
			productModal: false,
		},
	 mounted() {
		console.log('mounted');
		},
		methods: {
			handleMenu(menu) {
				console.log(menu);
				if (this.menus !== menu) {
					this.menus = menu;
				} else {
					this.menus = null;
				}
			},

			handleModal() {

				this.productModal = !this.productModal;
			},

			handleMobileMenu() {

				this.mobileMenu = !this.mobileMenu;
			},

		},
		computed: {
			showMenu: function () {
				return this.menus;
			},

			showMobileMenu: function () {
				return this.mobileMenu;
			},

			showModal: function () {
				return this.productModal;
			},
		}
	});
}

export { load }; // a list of exported variables
