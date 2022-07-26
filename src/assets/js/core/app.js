import Typewriter from 'typewriter-effect/dist/core';
import Vue from 'vue';
import { crisp, loadManager, tagManager } from './third-party';
import { youtube } from './youtube';
function load() {
	let isThere = document.getElementById('helperbird-website');

	new Vue({
		el: '#helperbird-website',
		data: {
			menus: false,
			mobileMenu: false,
			productModal: false,
			writer: null,

			// Pricing Table
			isYearly: false,
			proLink: '',
			studentLink: '',
			unlimitedLink: '',
			openModal: false,
			currency: 'usd',

			price: {
				monthly: {
					pro: '6.99',
					proLink: '',
					unlimited: '99.99',
					unlimitedLink: ''
				},
				yearly: {
					pro: '60.00',
					proLink: '',
					unlimited: '1,200',
					unlimitedLink: ''
				},
				student: '40',
				currency: '$',
				studentLink: ''
			}
		},
		mounted() {
			crisp();
			tagManager();
			loadManager();

			youtube();
			this.typer();
		},
		methods: {
			switchType: function () {
				this.isYearly = !this.isYearly;
			},

			handleModal: function () {
				this.openModal = !this.openModal;
			},

			typer() {
				let id = 'typewriter';

				let typerElement = document.getElementById(id);

				if (typerElement) {
					this.writer = new Typewriter(`#${id}`, {
						strings: [
							'Reader mode',
							'Speed reading',
							'Dyslexia support',
							'text to speech',
							'Voice typing',
							'Word prediction',
							'Text extracting',
							'Tooltip reader'
						],
						autoStart: true,
						loop: true,
						delay: 100
					});
				}
			},
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
			}
		},
		computed: {
			showYearly: function () {
				return this.isYearly;
			},
			showModal: function () {
				return this.openModal;
			},

			priceDetails: function () {
				switch (this.currency) {
					case 'aud':
						this.price.yearly.pro = '80.57';
						this.price.yearly.proLink = 'https://buy.stripe.com/aEUaFl0uMfYM98I9AW';

						this.price.yearly.unlimited = '1,600';
						this.price.yearly.unlimitedLink = 'https://buy.stripe.com/bIYbJp0uMaEs0CcaF2';

						this.price.monthly.pro = '9.39';
						this.price.monthly.proLink = 'https://buy.stripe.com/8wM4gXa5maEsbgQ9AV';

						this.price.monthly.unlimited = '134.27';
						this.price.monthly.unlimitedLink = 'https://buy.stripe.com/8wMcNtdhy8wk2Kk00n';

						this.price.student = '53.73';
						this.price.studentLink = 'https://buy.stripe.com/14kdRx6Ta27WdoYaF3';

						this.price.currency = '$';

						break;
					case 'usd':
						this.price.yearly.pro = '60.00';
						this.price.yearly.proLink = 'https://buy.stripe.com/4gw7t9gtK6oc98I8wJ';

						this.price.yearly.unlimited = '1,200';
						this.price.yearly.unlimitedLink = 'https://buy.stripe.com/3cs8xda5m4g44Ss9AU';

						this.price.monthly.pro = '6.99';
						this.price.monthly.proLink = 'https://buy.stripe.com/9AQ14Ldhy13S4Ss5kw';

						this.price.monthly.unlimited = '99.99';
						this.price.monthly.unlimitedLink = 'https://buy.stripe.com/dR6cNt4L2dQEfx69AE';

						this.price.student = '40';
						this.price.studentLink = 'https://buy.stripe.com/14k5l16Ta9Ao1Gg7ss';

						this.price.currency = '$';
						break;
					case 'cad':
						this.price.yearly.pro = '75.00';
						this.price.yearly.proLink = 'https://buy.stripe.com/eVaeVBfpGh2Q3OocNd';

						this.price.yearly.unlimited = '1,500';
						this.price.yearly.unlimitedLink = 'https://buy.stripe.com/28o8xdcdu6ocacM7sW';

						this.price.monthly.pro = '8.75';
						this.price.monthly.proLink = 'https://buy.stripe.com/bIY4gXb9qcMAet28wY';

						this.price.monthly.unlimited = '125';
						this.price.monthly.unlimitedLink = 'https://buy.stripe.com/9AQeVB4L2bIwacM7sV';

						this.price.student = '50.00';
						this.price.studentLink = 'https://buy.stripe.com/3cscNt3GY9AogBa4gG';

						this.price.currency = '$';
						break;
					case 'euro':
						this.price.yearly.pro = '60.00';
						this.price.yearly.proLink = 'https://buy.stripe.com/8wM9Bh4L2aEsacMfZv';

						this.price.yearly.unlimited = '1200';
						this.price.yearly.unlimitedLink = 'https://buy.stripe.com/4gw8xdgtK9Ao3Oo00z';

						this.price.monthly.pro = '5.99';
						this.price.monthly.proLink = 'https://buy.stripe.com/5kA5l17XefYMfx64gM';

						this.price.monthly.unlimited = '99.99';
						this.price.monthly.unlimitedLink = 'https://buy.stripe.com/8wM3cTcdubIwgBacNk';

						this.price.student = '40';
						this.price.studentLink = 'https://buy.stripe.com/eVa5l16Ta8wk2KkcNh';

						this.price.currency = '€';
						break;
					case 'gbp':
						this.price.yearly.pro = '50.00';
						this.price.yearly.proLink = 'https://buy.stripe.com/aEU9BhfpG5k8ckU5kW';

						this.price.yearly.unlimited = '1,200';
						this.price.yearly.unlimitedLink = 'https://buy.stripe.com/5kA00H7XebIw84E7t6';

						this.price.monthly.pro = '5.00';
						this.price.monthly.proLink = 'https://buy.stripe.com/9AQ8xd6Ta13Set29Bb';

						this.price.monthly.unlimited = '99.99';
						this.price.monthly.unlimitedLink = 'https://buy.stripe.com/aEU6p5elC4g470A6p1';

						this.price.student = '40';
						this.price.studentLink = 'https://buy.stripe.com/14keVBfpGdQEacM7t2';

						this.price.currency = '£';
						break;
					case 'nz':
						this.price.yearly.pro = '80.00';
						this.price.yearly.proLink = 'https://buy.stripe.com/28o7t9a5m7sg3Oo7t8';

						this.price.yearly.unlimited = '1,700';
						this.price.yearly.unlimitedLink = 'https://buy.stripe.com/9AQ7t9a5m27W84E6p7';

						this.price.monthly.pro = '8.50';
						this.price.monthly.proLink = 'https://buy.stripe.com/7sI6p591ifYM4SseVB';

						this.price.monthly.unlimited = '145.00';
						this.price.monthly.unlimitedLink = 'https://buy.stripe.com/6oE28P1yQeUI84EcNu';

						this.price.student = '50.00';
						this.price.studentLink = 'https://buy.stripe.com/cN2cNtgtKdQEbgQ3cR';

						this.price.currency = '$';
						break;
					default:
						this.price.yearly.pro = '60.00';
						this.price.yearly.proLink = 'https://buy.stripe.com/4gw7t9gtK6oc98I8wJ';

						this.price.yearly.unlimited = '1,200';
						this.price.yearly.unlimitedLink = 'https://buy.stripe.com/3cs8xda5m4g44Ss9AU';

						this.price.monthly.pro = '6.99';
						this.price.monthly.proLink = 'https://buy.stripe.com/9AQ14Ldhy13S4Ss5kw';

						this.price.monthly.unlimited = '99.99';
						this.price.monthly.unlimitedLink = 'https://buy.stripe.com/dR6cNt4L2dQEfx69AE';

						this.price.student = '40';
						this.price.studentLink = 'https://buy.stripe.com/14k5l16Ta9Ao1Gg7ss';

						this.price.currency = '$';
						break;
				}
				return this.price;
			},
			showMenu: function () {
				return this.menus;
			},

			showMobileMenu: function () {
				return this.mobileMenu;
			},

			showModal: function () {
				return this.productModal;
			}
		}
	});
}

export { load }; // a list of exported variables
