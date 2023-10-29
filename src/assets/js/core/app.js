import Typewriter from 'typewriter-effect/dist/core';
import Vue from 'vue';
import { crisp, loadManager, tagManager } from './third-party';
import { youtube } from './youtube';

const load = () => {
	const isThere = document.getElementById('helperbird-website');

	if (!isThere) return;

	new Vue({
		el: '#helperbird-website',
		data: {
			menus: false,
			mobileMenu: false,
			productModal: false,
			writer: null,
			isYearly: true,
			proLink: '',
			studentLink: '',
			unlimitedLink: '',
			openModal: false,
			currency: 'usd',
			docsMenu: false,
			selectedTab: 0,
			price: getDefaultPrice()
		},
		mounted() {
			crisp();
			tagManager();
			loadManager();
			youtube();
			this.initializeTypewriters();
		},
		methods: {
			switchType() {
				this.isYearly = !this.isYearly;
			},
			handleModal() {
				this.openModal = !this.openModal;
			},
			initializeTypewriters() {
				this.initializeTypewriter('typewriter', [
					'Accessibility Tools',
					'PDF Reader',
					'Productivity Tools',
					'Reading Support',
					'Adapting the Web',
					'Dyslexia Support',
					'Text to Speech',
					'Voice Typing',
					'Word Prediction',
					'Reading Mode',
					'Text Extracting',
					'Reading tools',
					'Writing tools',
					'Note Taking',
					'Text to Speech',
					'Speed Reading',
					'Tooltip Reader',
					'Color Contrast Adjuster',
					'Magnifier Tool',
					'Dyslexic Font',
					'Screen Reader Friendly',
					'Keyboard Navigation',
					'Customizable Fonts',
					'High Contrast Mode',
					'Alt Text Support',
					'Language Translation',
					'Overlay Mode.',
					'Grammar Checker',
					'Simplified View',
					'Visual Highlighter'
				]);
				this.initializeTypewriter('typewriterProducts', [
					'Google Chrome',
					'Mozilla Firefox',
					'Micosoft Edge',
					'Google Docs',
					'Google Slides',
					'iPad',
					'iOs',
					'iPhone',
					'Safari'
				]);
			},
			initializeTypewriter(id, strings) {
				const typerElement = document.getElementById(id);
				if (typerElement) {
					this.writer = new Typewriter(`#${id}`, {
						strings,
						autoStart: true,
						loop: true,
						delay: 'natural'
					});
				}
			},
			handleMenu(menu) {
				this.menus = this.menus !== menu ? menu : null;
			},
			handleMobileMenu() {
				this.mobileMenu = !this.mobileMenu;
			}
		},
		computed: {
			showYearly() {
				return this.isYearly;
			},
			priceDetails() {
				return getPriceForCurrency(this.currency);
			},
			monthlyProPricing() {
				return calculateDiscountedPrice(this.priceDetails.monthly.pro);
			},
			yearlyProPricing() {
				return calculateDiscountedPrice(this.priceDetails.yearly.pro);
			},
			yearlyUnlimitedPricing() {
				return calculateDiscountedPrice(this.priceDetails.yearly.unlimited);
			},
			monthlyUnlimitedPricing() {
				return calculateDiscountedPrice(this.priceDetails.monthly.unlimited);
			},
			showModal() {
				return this.openModal;
			},
			showMenu() {
				return this.menus;
			},
			showMobileMenu() {
				return this.mobileMenu;
			}
		}
	});
};

const calculateDiscountedPrice = (originalPrice) => {
	const result = parseFloat(originalPrice) - parseFloat(originalPrice) / 3;
	return result.toFixed(2);
};

const getDefaultPrice = () => {
	return {
		monthly: {
			pro: '6.99',
			proLink: '',
			unlimited: '99.99',
			unlimitedLink: ''
		},
		yearly: {
			pro: '60.00',
			proLink: '',
			unlimited: '1500',
			unlimitedLink: ''
		},
		student: '40',
		currency: '$',
		studentLink: ''
	};
};

const getPriceForCurrency = (currency) => {
	const prices = {
		aud: {
			yearly: {
				pro: '100.00',
				proLink: 'https://buy.stripe.com/00g7urceof5i6D6fZ8',
				unlimited: '1800',
				unlimitedLink: 'https://buy.stripe.com/5kAbKHbak4qE7Ha28j'
			},
			monthly: {
				pro: '10.00',
				proLink: 'https://buy.stripe.com/eVa8yvdis4qE7HacMV',
				unlimited: '180.00',
				unlimitedLink: 'https://buy.stripe.com/00g5mj7Y89KY7Ha6oB'
			},
			student: '50.00',
			currency: '$',
			studentLink: 'https://buy.stripe.com/00g7urceof5i6D6fZ8'
		},

		usd: {
			yearly: {
				pro: '60.00',
				proLink: 'https://buy.stripe.com/7sI8yvceo0ao5z25kq', //Done

				unlimited: '1500',
				unlimitedLink: 'https://buy.stripe.com/5kA7urceo6yM3qU5ks' // done
			},
			monthly: {
				pro: '6.99',
				proLink: 'https://buy.stripe.com/00gaGDceocXad1udQX', //done 

				unlimited: '129.99',
				unlimitedLink: 'https://buy.stripe.com/6oEg0X2DO5uId1u004' //done
			},
			student: '40.00',
			studentLink: 'https://buy.stripe.com/7sI8yvceo0ao5z25kq', // Done
			currency: '$'
		},

		cad: {
			yearly: {
				pro: '80.00',
				proLink: 'https://buy.stripe.com/cN25mjbakcXa1iM4gu',
				unlimited: '1800',
				unlimitedLink: 'https://buy.stripe.com/9AQ8yv5Q06yM9PifZe'
			},
			monthly: {
				pro: '9.00',
				proLink: 'https://buy.stripe.com/eVacOL0vGg9m6D64gv',
				unlimited: '180',
				unlimitedLink: 'https://buy.stripe.com/5kAg0Xemw0ao7Ha14l'
			},
			student: '80.00',
			studentLink: 'https://buy.stripe.com/cN25mjbakcXa1iM4gu',
			currency: '$'
		},
		euro: {
			yearly: {
				pro: '60.00',
				proLink: 'https://buy.stripe.com/8wM9Bh4L2aEsacMfZv',
				unlimited: '1200',
				unlimitedLink: 'https://buy.stripe.com/4gw8xdgtK9Ao3Oo00z'
			},
			monthly: {
				pro: '5.99',
				proLink: 'https://buy.stripe.com/5kA5l17XefYMfx64gM',
				unlimited: '99.99',
				unlimitedLink: 'https://buy.stripe.com/8wM3cTcdubIwgBacNk'
			},
			student: '40.00',
			studentLink: 'https://buy.stripe.com/eVa5l16Ta8wk2KkcNh',
			currency: '€'
		},
		gbp: {
			yearly: {
				pro: '50.00',
				proLink: 'https://buy.stripe.com/aEU9BhfpG5k8ckU5kW',
				unlimited: '1500',
				unlimitedLink: 'https://buy.stripe.com/5kA00H7XebIw84E7t6'
			},
			monthly: {
				pro: '5.00',
				proLink: 'https://buy.stripe.com/9AQ8xd6Ta13Set29Bb',
				unlimited: '99.99',
				unlimitedLink: 'https://buy.stripe.com/aEU6p5elC4g470A6p1'
			},
			student: '40.00',
			studentLink: 'https://buy.stripe.com/14keVBfpGdQEacM7t2',
			currency: '£'
		},
		nz: {
			yearly: {
				pro: '80.00',
				proLink: 'https://buy.stripe.com/28o7t9a5m7sg3Oo7t8',
				unlimited: '1700',
				unlimitedLink: 'https://buy.stripe.com/9AQ7t9a5m27W84E6p7'
			},
			monthly: {
				pro: '8.50',
				proLink: 'https://buy.stripe.com/7sI6p591ifYM4SseVB',
				unlimited: '145.00',
				unlimitedLink: 'https://buy.stripe.com/6oE28P1yQeUI84EcNu'
			},
			student: '50.00',
			studentLink: 'https://buy.stripe.com/cN2cNtgtKdQEbgQ3cR',
			currency: '$'
		}
	};

	return prices[currency] || getDefaultPrice();
};

export { load };
