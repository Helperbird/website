import Vue from 'vue/dist/vue.js';
import { loadStripe } from '@stripe/stripe-js';
import { Notyf } from 'notyf';

async function load() {
	let isThere = document.getElementById('pricing-table');
	if (isThere === null) return false;

	new Vue({
		el: '#pricing-table',
		data: {
			isYearly: false,
			stripe: await loadStripe('pk_live_nEAFiiPwv8dNs2QI1aWIh06o00FWgK5zLu'),
			notyf: new Notyf()
		},

		methods: {
			switchType: function() {
				this.isYearly = !this.isYearly;
			},

			openPro: function() {
				this.notyf.success('Loading.....');
				this.stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: this.isYearly
									? 'price_1HwsTqENE7uqpRK1QDcWrD5g'
									: 'price_1HwsTqENE7uqpRK1rZ0WjoHF',
								quantity: 1
							}
						],
						mode: 'subscription',
						// Do not rely on the redirect to the successUrl for fulfilling
						// purchases, customers may not always reach the success_url after
						// a successful payment.
						// Instead use one of the strategies described in
						// https://stripe.com/docs/payments/checkout/fulfillment
						successUrl: 'https://www.helperbird.com/success',
						cancelUrl: 'https://www.helperbird.com/pricing'
					})
					.then(({ error }) => {
						if (error) {
							notyf.error(error.message);
						}
					});
			},
			openStudent: function() {
				this.notyf.success('Loading.....');
				this.stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: 'price_1HwtjgENE7uqpRK1MMaQveG3',
								quantity: 1
							}
						],
						mode: 'subscription',
						// Do not rely on the redirect to the successUrl for fulfilling
						// purchases, customers may not always reach the success_url after
						// a successful payment.
						// Instead use one of the strategies described in
						// https://stripe.com/docs/payments/checkout/fulfillment
						successUrl: 'https://www.helperbird.com/success',
						cancelUrl: 'https://www.helperbird.com/pricing'
					})
					.then(({ error }) => {
						if (error) {
							notyf.error(error.message);
						}
					});
			},

			openUnlimited: function() {
				this.notyf.success('Loading.....');
				this.stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: this.isYearly
									? 'price_1HwthYENE7uqpRK1MyIFS6Uh'
									: 'price_1HwthYENE7uqpRK11HU8zN2n',
								quantity: 1
							}
						],
						mode: 'subscription',
						// Do not rely on the redirect to the successUrl for fulfilling
						// purchases, customers may not always reach the success_url after
						// a successful payment.
						// Instead use one of the strategies described in
						// https://stripe.com/docs/payments/checkout/fulfillment
						successUrl: 'https://www.helperbird.com/success',
						cancelUrl: 'https://www.helperbird.com/pricing'
					})
					.then(({ error }) => {
						if (error) {
							notyf.error(error.message);
						}
					});
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
