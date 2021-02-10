import Vue from 'vue/dist/vue.js';
import { loadStripe } from '@stripe/stripe-js';
import { Notyf } from 'notyf';

async function load() {
	let isThere = document.getElementById('pricing-table-widget');
	if (isThere === null) return false;

	new Vue({
		el: '#pricing-table-widget',
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
									? 'price_1HauAgENE7uqpRK1bGkSo3Nt'
									: 'price_1HauAXENE7uqpRK1Xy4XxHY8',
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
			openStandard: function() {
				this.notyf.success('Loading.....');
				this.stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: this.isYearly
									? 'price_1HauAKENE7uqpRK1R6cap2jz'
									: 'price_1HauA7ENE7uqpRK12F2UlODP',
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
									? 'price_1HauAgENE7uqpRK1bGkSo3Nt'
									: 'price_1HauAXENE7uqpRK1Xy4XxHY8',
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
