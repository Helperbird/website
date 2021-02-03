import { loadStripe } from '@stripe/stripe-js';
import { Notyf } from 'notyf';

const notyf = new Notyf();

async function load() {
	const stripe = await loadStripe('pk_live_nEAFiiPwv8dNs2QI1aWIh06o00FWgK5zLu');
	let proYearly = document.getElementById('checkout-button-plan_FmS3HONbzTCxGl');
	let proMonthly = document.getElementById('checkout-button-1');
	let educationYearly = document.getElementById('checkout-button-plan_G1OnSt8DIms1PY');
	let educationMonthly = document.getElementById('checkout-button-plan_G1O8Rztm6fFf4R');
	let studentPricing = document.getElementById('checkout-button-plan_GDtSwhVHQXfaSw');
	let a11yCheckers = document.getElementsByClassName('helperbird-accessibility-buy-button');

	// Sale trigger
	let saleSchools = document.getElementById('sale-schools-button');

	// Widget
	let widgetSmall = document.getElementsByClassName('helperbird-widget-small-montly');
	let widgetSmallYearly = document.getElementsByClassName('helperbird-widget-small-yearly');

	let widgetMediumMonthly = document.getElementsByClassName('helperbird-widget-medium-monthly');
	let widgetMediumYearly = document.getElementsByClassName('helperbird-widget-medium-yearly');

	let widgetLargeMonthly = document.getElementsByClassName('helperbird-widget-monthly');
	let widgetLargeYearly = document.getElementsByClassName('helperbird-widget-large');

	let widgetEnterprise = document.getElementsByClassName('helperbird-widget-enterprise');
	let widgetEnterpriseYearly = document.getElementsByClassName('helperbird-widget-enterprise-yearly');

	if (saleSchools !== null) {
		saleSchools.addEventListener('click', () => {
			// When the customer clicks on the button, redirect
			// them to Checkout.

			notyf.success('Loading.....');
			stripe
				.redirectToCheckout({
					lineItems: [
						{
							price: 'price_1HXraQENE7uqpRK1TM0FgiXM',
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
						// If `redirectToCheckout` fails due to a browser or network
						// error, display the localized error message to your customer.
						notyf.error(error.message);
					}
				});
		});
	}

	if (widgetEnterpriseYearly.length !== 0) {
		for (var i = 0; i < widgetEnterpriseYearly.length; i++) {
			widgetEnterpriseYearly[i].addEventListener('click', function() {
				// When the customer clicks on the button, redirect
				// them to Checkout.
				stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: 'price_1Hb6i7ENE7uqpRK16JaSyrkZ',
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
					.then(function(result) {
						if (result.error) {
							// If `redirectToCheckout` fails due to a browser or network
							// error, display the localized error message to your customer.
							var displayError = document.getElementById('error-message');
							displayError.textContent = result.error.message;
						}
					});
			});
		}
	}

	if (widgetEnterprise.length !== 0) {
		for (var i = 0; i < widgetEnterprise.length; i++) {
			widgetEnterprise[i].addEventListener('click', function() {
				// When the customer clicks on the button, redirect
				// them to Checkout.
				stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: 'price_1HjCSJENE7uqpRK1Lzwpxhhh',
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
					.then(function(result) {
						if (result.error) {
							// If `redirectToCheckout` fails due to a browser or network
							// error, display the localized error message to your customer.
							var displayError = document.getElementById('error-message');
							displayError.textContent = result.error.message;
						}
					});
			});
		}
	}

	if (widgetLargeYearly.length !== 0) {
		for (var i = 0; i < widgetLargeYearly.length; i++) {
			widgetLargeYearly[i].addEventListener('click', function() {
				// When the customer clicks on the button, redirect
				// them to Checkout.
				stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: 'price_1HauAgENE7uqpRK1bGkSo3Nt',
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
					.then(function(result) {
						if (result.error) {
							// If `redirectToCheckout` fails due to a browser or network
							// error, display the localized error message to your customer.
							var displayError = document.getElementById('error-message');
							displayError.textContent = result.error.message;
						}
					});
			});
		}
	}

	if (widgetLargeMonthly.length !== 0) {
		for (var i = 0; i < widgetLargeMonthly.length; i++) {
			widgetLargeMonthly[i].addEventListener('click', function() {
				// When the customer clicks on the button, redirect
				// them to Checkout.
				stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: 'price_1HauAXENE7uqpRK1Xy4XxHY8',
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
					.then(function(result) {
						if (result.error) {
							// If `redirectToCheckout` fails due to a browser or network
							// error, display the localized error message to your customer.
							var displayError = document.getElementById('error-message');
							displayError.textContent = result.error.message;
						}
					});
			});
		}
	}

	if (widgetMediumYearly.length !== 0) {
		for (var i = 0; i < widgetMediumYearly.length; i++) {
			widgetMediumYearly[i].addEventListener('click', function() {
				// When the customer clicks on the button, redirect
				// them to Checkout.
				stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: 'price_1HauAgENE7uqpRK1bGkSo3Nt',
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
					.then(function(result) {
						if (result.error) {
							// If `redirectToCheckout` fails due to a browser or network
							// error, display the localized error message to your customer.
							var displayError = document.getElementById('error-message');
							displayError.textContent = result.error.message;
						}
					});
			});
		}
	}

	if (widgetMediumMonthly.length !== 0) {
		for (var i = 0; i < widgetMediumMonthly.length; i++) {
			widgetMediumMonthly[i].addEventListener('click', function() {
				// When the customer clicks on the button, redirect
				// them to Checkout.
				stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: 'price_1HauAXENE7uqpRK1Xy4XxHY8',
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
					.then(function(result) {
						if (result.error) {
							// If `redirectToCheckout` fails due to a browser or network
							// error, display the localized error message to your customer.
							var displayError = document.getElementById('error-message');
							displayError.textContent = result.error.message;
						}
					});
			});
		}
	}

	if (widgetSmallYearly.length !== 0) {
		for (var i = 0; i < widgetSmallYearly.length; i++) {
			widgetSmallYearly[i].addEventListener('click', function() {
				// When the customer clicks on the button, redirect
				// them to Checkout.
				stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: 'price_1HauAKENE7uqpRK1R6cap2jz',
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
					.then(function(result) {
						if (result.error) {
							// If `redirectToCheckout` fails due to a browser or network
							// error, display the localized error message to your customer.
							var displayError = document.getElementById('error-message');
							displayError.textContent = result.error.message;
						}
					});
			});
		}
	}

	if (widgetSmall.length !== 0) {
		for (var i = 0; i < widgetSmall.length; i++) {
			widgetSmall[i].addEventListener('click', function() {
				// When the customer clicks on the button, redirect
				// them to Checkout.
				stripe
					.redirectToCheckout({
						lineItems: [
							{
								price: 'price_1HauA7ENE7uqpRK12F2UlODP',
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
					.then(function(result) {
						if (result.error) {
							// If `redirectToCheckout` fails due to a browser or network
							// error, display the localized error message to your customer.
							var displayError = document.getElementById('error-message');
							displayError.textContent = result.error.message;
						}
					});
			});
		}
	}

	if (a11yCheckers.length !== 0) {
		for (var i = 0; i < a11yCheckers.length; i++) {
			a11yCheckers[i].addEventListener('click', function() {
				// When the customer clicks on the button, redirect
				// them to Checkout.
				notyf.success('Loading.....');
				stripe
					.redirectToCheckout({
						lineItems: [ { price: 'price_1HEehMENE7uqpRK1XQYKyaNR', quantity: 1 } ],
						mode: 'subscription',
						// Do not rely on the redirect to the successUrl for fulfilling
						// purchases, customers may not always reach the success_url after
						// a successful payment.
						// Instead use one of the strategies described in
						// https://stripe.com/docs/payments/checkout/fulfillment
						successUrl: 'https://www.helperbird.com/success-a11y',
						cancelUrl: 'https://www.helperbird.com/pricing'
					})
					.then(({ error }) => {
						if (result.error) {
							// If `redirectToCheckout` fails due to a browser or network

							notyf.error(error.message);
						}
					});
			});
		}
	}

	if (proMonthly !== null) {
		proMonthly.addEventListener('click', () => {
			// When the customer clicks on the button, redirect
			// them to Checkout.

			notyf.success('Loading.....');
			stripe
				.redirectToCheckout({
					lineItems: [
						{
							price: 'price_1HwsTqENE7uqpRK1rZ0WjoHF',
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
						// If `redirectToCheckout` fails due to a browser or network
						// error, display the localized error message to your customer.
						notyf.error(error.message);
					}
				});
		});
	}

	if (proYearly !== null) {
		proYearly.addEventListener('click', () => {
			// When the customer clicks on the button, redirect
			// them to Checkout.
			notyf.success('Loading.....');
			stripe
				.redirectToCheckout({
					lineItems: [
						{
							price: 'price_1HwsTqENE7uqpRK1QDcWrD5g',
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
						// If `redirectToCheckout` fails due to a browser or network
						// error, display the localized error message to your customer.
						notyf.error(error.message);
					}
				});
		});
	}

	if (educationYearly !== null) {
		educationYearly.addEventListener('click', () => {
			// When the customer clicks on the button, redirect
			// them to Checkout.
			// When the customer clicks on the button, redirect
			// them to Checkout.
			notyf.success('Loading.....');
			stripe
				.redirectToCheckout({
					lineItems: [
						{
							price: 'price_1HwthYENE7uqpRK11HU8zN2n',
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
						// If `redirectToCheckout` fails due to a browser or network
						// error, display the localized error message to your customer.
						notyf.error(error.message);
					}
				});
		});
	}

	if (educationMonthly !== null) {
		educationMonthly.addEventListener('click', () => {
			// When the customer clicks on the button, redirect
			// them to Checkout.
			// When the customer clicks on the button, redirect
			// them to Checkout.
			// When the customer clicks on the button, redirect
			// them to Checkout.
			notyf.success('Loading.....');
			stripe
				.redirectToCheckout({
					lineItems: [
						{
							price: 'price_1HwthYENE7uqpRK1MyIFS6Uh',
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
						// If `redirectToCheckout` fails due to a browser or network
						// error, display the localized error message to your customer.
						notyf.error(error.message);
					}
				});
		});
	}

	if (studentPricing !== null) {
		studentPricing.addEventListener('click', () => {
			// When the customer clicks on the button, redirect
			// them to Checkout.
			// When the customer clicks on the button, redirect
			// them to Checkout.
			// When the customer clicks on the button, redirect
			// them to Checkout.
			notyf.success('Loading.....');
			stripe
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
						// If `redirectToCheckout` fails due to a browser or network
						// error, display the localized error message to your customer.
						notyf.error(error.message);
					}
				});
		});
	}
}

export { load }; // a list of exported variables
