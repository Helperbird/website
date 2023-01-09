import Typewriter from "typewriter-effect/dist/core";
import Vue from "vue";
import { crisp, loadManager, tagManager } from "./third-party";
import { youtube } from "./youtube";
function load() {
	let isThere = document.getElementById("helperbird-website");

	new Vue({
		el: "#helperbird-website",
		data: {
			menus: false,
			mobileMenu: false,
			productModal: false,
			writer: null,

			// Pricing Table
			isYearly: true,
			proLink: "",
			studentLink: "",
			unlimitedLink: "",
			openModal: false,
			currency: "usd",
			docsMenu: false,
			selectedTab: 0,
			price: {
				monthly: {
					pro: "6.99",
					proLink: "",
					unlimited: "99.99",
					unlimitedLink: "",
				},
				yearly: {
					pro: "60.00",
					proLink: "",
					unlimited: "1,200",
					unlimitedLink: "",
				},
				student: "40",
				currency: "$",
				studentLink: "",
			},
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
				let id = "typewriter";

				let typerElement = document.getElementById(id);

				if (typerElement) {
					this.writer = new Typewriter(`#${id}`, {
						strings: [
							"Accessibility",
							"Productivity",
							"Reading support",
							"Aweb",
							"Dyslexia support",
							"Text to speech",
							"Voice typing",
							"Word prediction",
							"Text extracting",
							"Reading",
							"Writing",
							"Note taking",
							"Speed reading",
							"Tooltip reader",
						],
						autoStart: true,
						loop: true,
						delay: 200,
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
			},
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
					case "aud": {
						this.price.yearly.pro = "80.57";
						this.price.yearly.proLink =
							"https://buy.stripe.com/aEUaFl0uMfYM98I9AW?prefilled_promo_code=2023sale";

						this.price.yearly.unlimited = "1,600";
						this.price.yearly.unlimitedLink =
							"https://buy.stripe.com/bIYbJp0uMaEs0CcaF2?prefilled_promo_code=2023sale";

						this.price.monthly.pro = "9.39";
						this.price.monthly.proLink =
							"https://buy.stripe.com/8wM4gXa5maEsbgQ9AV?prefilled_promo_code=2023sale";

						this.price.monthly.unlimited = "134.27";
						this.price.monthly.unlimitedLink =
							"https://buy.stripe.com/8wMcNtdhy8wk2Kk00n?prefilled_promo_code=2023sale";

						this.price.student = "53.73";
						this.price.studentLink =
							"https://buy.stripe.com/14kdRx6Ta27WdoYaF3?prefilled_promo_code=2023sale";

						this.price.currency = "$";

						break;
					}
					case "usd": {
						this.price.yearly.pro = "60.00";
						this.price.yearly.proLink =
							"https://buy.stripe.com/4gw7t9gtK6oc98I8wJ?prefilled_promo_code=2023sale";

						this.price.yearly.unlimited = "1,200";
						this.price.yearly.unlimitedLink =
							"https://buy.stripe.com/3cs8xda5m4g44Ss9AU?prefilled_promo_code=2023sale";

						this.price.monthly.pro = "6.99";
						this.price.monthly.proLink =
							"https://buy.stripe.com/9AQ14Ldhy13S4Ss5kw?prefilled_promo_code=2023sale";

						this.price.monthly.unlimited = "99.99";
						this.price.monthly.unlimitedLink =
							"https://buy.stripe.com/dR6cNt4L2dQEfx69AE?prefilled_promo_code=2023sale";

						this.price.student = "40";
						this.price.studentLink =
							"https://buy.stripe.com/14k5l16Ta9Ao1Gg7ss?prefilled_promo_code=2023sale";

						this.price.currency = "$";
						break;
					}
					case "cad": {
						this.price.yearly.pro = "75.00";
						this.price.yearly.proLink =
							"https://buy.stripe.com/eVaeVBfpGh2Q3OocNd?prefilled_promo_code=2023sale";

						this.price.yearly.unlimited = "1,500";
						this.price.yearly.unlimitedLink =
							"https://buy.stripe.com/28o8xdcdu6ocacM7sW?prefilled_promo_code=2023sale";

						this.price.monthly.pro = "8.75";
						this.price.monthly.proLink =
							"https://buy.stripe.com/bIY4gXb9qcMAet28wY?prefilled_promo_code=2023sale";

						this.price.monthly.unlimited = "125";
						this.price.monthly.unlimitedLink =
							"https://buy.stripe.com/9AQeVB4L2bIwacM7sV?prefilled_promo_code=2023sale";

						this.price.student = "50.00";
						this.price.studentLink =
							"https://buy.stripe.com/3cscNt3GY9AogBa4gG?prefilled_promo_code=2023sale";

						this.price.currency = "$";
						break;
					}
					case "euro": {
						this.price.yearly.pro = "60.00";
						this.price.yearly.proLink =
							"https://buy.stripe.com/8wM9Bh4L2aEsacMfZv?prefilled_promo_code=2023sale";

						this.price.yearly.unlimited = "1200";
						this.price.yearly.unlimitedLink =
							"https://buy.stripe.com/4gw8xdgtK9Ao3Oo00z?prefilled_promo_code=2023sale";

						this.price.monthly.pro = "5.99";
						this.price.monthly.proLink =
							"https://buy.stripe.com/5kA5l17XefYMfx64gM?prefilled_promo_code=2023sale";

						this.price.monthly.unlimited = "99.99";
						this.price.monthly.unlimitedLink =
							"https://buy.stripe.com/8wM3cTcdubIwgBacNk?prefilled_promo_code=2023sale";

						this.price.student = "40";
						this.price.studentLink =
							"https://buy.stripe.com/eVa5l16Ta8wk2KkcNh?prefilled_promo_code=2023sale";

						this.price.currency = "€";
						break;
					}
					case "gbp": {
						this.price.yearly.pro = "50.00";
						this.price.yearly.proLink =
							"https://buy.stripe.com/aEU9BhfpG5k8ckU5kW?prefilled_promo_code=2023sale";

						this.price.yearly.unlimited = "1,200";
						this.price.yearly.unlimitedLink =
							"https://buy.stripe.com/5kA00H7XebIw84E7t6?prefilled_promo_code=2023sale";

						this.price.monthly.pro = "5.00";
						this.price.monthly.proLink =
							"https://buy.stripe.com/9AQ8xd6Ta13Set29Bb?prefilled_promo_code=2023sale";

						this.price.monthly.unlimited = "99.99";
						this.price.monthly.unlimitedLink =
							"https://buy.stripe.com/aEU6p5elC4g470A6p1?prefilled_promo_code=2023sale";

						this.price.student = "40";
						this.price.studentLink =
							"https://buy.stripe.com/14keVBfpGdQEacM7t?prefilled_promo_code=2023sale2";

						this.price.currency = "£";
						break;
					}
					case "nz": {
						this.price.yearly.pro = "80.00";
						this.price.yearly.proLink =
							"https://buy.stripe.com/28o7t9a5m7sg3Oo7t8?prefilled_promo_code=2023sale";

						this.price.yearly.unlimited = "1,700";
						this.price.yearly.unlimitedLink =
							"https://buy.stripe.com/9AQ7t9a5m27W84E6p7?prefilled_promo_code=2023sale";

						this.price.monthly.pro = "8.50";
						this.price.monthly.proLink =
							"https://buy.stripe.com/7sI6p591ifYM4SseVB?prefilled_promo_code=2023sale";

						this.price.monthly.unlimited = "145.00";
						this.price.monthly.unlimitedLink =
							"https://buy.stripe.com/6oE28P1yQeUI84EcNu?prefilled_promo_code=2023sale";

						this.price.student = "50.00";
						this.price.studentLink =
							"https://buy.stripe.com/cN2cNtgtKdQEbgQ3cR?prefilled_promo_code=2023sale";

						this.price.currency = "$";
						break;
					}
					default:
						this.price.yearly.pro = "60.00";
						this.price.yearly.proLink =
							"https://buy.stripe.com/4gw7t9gtK6oc98I8wJ?prefilled_promo_code=2023sale";

						this.price.yearly.unlimited = "1,200";
						this.price.yearly.unlimitedLink =
							"https://buy.stripe.com/3cs8xda5m4g44Ss9AU?prefilled_promo_code=2023sale";

						this.price.monthly.pro = "6.99";
						this.price.monthly.proLink =
							"https://buy.stripe.com/9AQ14Ldhy13S4Ss5kw?prefilled_promo_code=2023sale";

						this.price.monthly.unlimited = "99.99";
						this.price.monthly.unlimitedLink =
							"https://buy.stripe.com/dR6cNt4L2dQEfx69AE?prefilled_promo_code=2023sale";

						this.price.student = "40";
						this.price.studentLink =
							"https://buy.stripe.com/14k5l16Ta9Ao1Gg7ss?prefilled_promo_code=2023sale";

						this.price.currency = "$";
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
			},
		},
	});
}

export { load }; // a list of exported variables
