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
				pro: '80.57',
				proLink: 'https://buy.stripe.com/aEUaFl0uMfYM98I9AW',
				unlimited: '1600',
				unlimitedLink: 'https://buy.stripe.com/bIYbJp0uMaEs0CcaF2'
			},
			monthly: {
				pro: '9.39',
				proLink: 'https://buy.stripe.com/8wM4gXa5maEsbgQ9AV',
				unlimited: '134.27',
				unlimitedLink: 'https://buy.stripe.com/8wMcNtdhy8wk2Kk00n'
			},
			student: '53.73',
			currency: '$',
			studentLink: 'https://buy.stripe.com/14kdRx6Ta27WdoYaF3'
		},

		usd: {
			yearly: {
				pro: '60.00',
				proLink: 'https://buy.stripe.com/4gw7t9gtK6oc98I8wJ',

				unlimited: '1500',
				unlimitedLink: 'https://buy.stripe.com/3cs8xda5m4g44Ss9AU'
			},
			monthly: {
				pro: '6.99',
				proLink: 'https://buy.stripe.com/9AQ14Ldhy13S4Ss5kw',

				unlimited: '99.99',
				unlimitedLink: 'https://buy.stripe.com/dR6cNt4L2dQEfx69AE'
			},
			student: '40.00',
			studentLink: 'https://buy.stripe.com/14k5l16Ta9Ao1Gg7ss',
			currency: '$'
		},

		cad: {
			yearly: {
				pro: '75.00',
				proLink: 'https://buy.stripe.com/eVaeVBfpGh2Q3OocNd',
				unlimited: '1500',
				unlimitedLink: 'https://buy.stripe.com/28o8xdcdu6ocacM7sW'
			},
			monthly: {
				pro: '8.75',
				proLink: 'https://buy.stripe.com/bIY4gXb9qcMAet28wY',
				unlimited: '125',
				unlimitedLink: 'https://buy.stripe.com/9AQeVB4L2bIwacM7sV'
			},
			student: '50.00',
			studentLink: 'https://buy.stripe.com/3cscNt3GY9AogBa4gG',
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
