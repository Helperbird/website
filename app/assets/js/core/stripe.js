import {
    loadStripe
} from '@stripe/stripe-js';
import {
    Notyf
} from 'notyf';
import 'notyf/notyf.min.css'; // for React and Vue
const notyf = new Notyf();



async function load() {





    const stripe = await loadStripe('pk_live_nEAFiiPwv8dNs2QI1aWIh06o00FWgK5zLu');
    let proMonthly = document.getElementById('checkout-button-plan_FmS3HONbzTCxGl');
    let proYearly = document.getElementById('checkout-button-1');
    let educationYearly = document.getElementById('checkout-button-plan_G1O8Rztm6fFf4R');
    let educationMonthly = document.getElementById('checkout-button-plan_G1OnSt8DIms1PY');
    let studentPricing = document.getElementById('checkout-button-plan_GDtSwhVHQXfaSw');
    let a11yCheckers = document.getElementsByClassName('helperbird-accessibility-buy-button');


    if (a11yCheckers.length !== 0) {

        
		for (var i = 0; i < a11yCheckers.length; i++) {
			a11yCheckers[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.

                notyf.success('Coming July 15th 2020....');
                return false;
                notyf.success('Loading.....');
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H2OvdENE7uqpRK1QXNcEJJB',
                            quantity: 1
                        }],
                        mode: 'subscription',
                        // Do not rely on the redirect to the successUrl for fulfilling
                        // purchases, customers may not always reach the success_url after
                        // a successful payment.
                        // Instead use one of the strategies described in
                        // https://stripe.com/docs/payments/checkout/fulfillment
                        successUrl: 'https://www.helperbird.com/success',
                        cancelUrl: 'https://www.helperbird.com/canceled',
                    })
                    .then(({
                        error
                    }) => {
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
            stripe.redirectToCheckout({


                    lineItems: [{
                        price: 'price_1Gs8aeENE7uqpRK1ENLxNh3F',
                        quantity: 1
                    }],
                    mode: 'subscription',
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/canceled',
                })
                .then(({
                    error
                }) => {
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
            stripe.redirectToCheckout({
                    lineItems: [{
                        price: '1',
                        quantity: 1
                    }],
                    mode: 'subscription',
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/canceled',


                })
                .then(({
                    error
                }) => {
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
            stripe.redirectToCheckout({
                    lineItems: [{
                        price: 'Education_Yearly',
                        quantity: 1
                    }],
                    mode: 'subscription',
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/canceled',
                })
                .then(({
                    error
                }) => {
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
            stripe.redirectToCheckout({
                    lineItems: [{
                        price: 'price_1GuonLENE7uqpRK1R3fgcfn1',
                        quantity: 1
                    }],
                    mode: 'subscription',
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/canceled',
                })
                .then(({
                    error
                }) => {
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
            stripe.redirectToCheckout({
                    lineItems: [{
                        price: 'price_1Gxm97ENE7uqpRK1VbHmB8cZ',
                        quantity: 1
                    }],
                    mode: 'subscription',
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/canceled',
                })
                .then(({
                    error
                }) => {
                    if (error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.
                        notyf.error(error.message);
                    }
                });
        });
    }

}

export {
    load
}; // a list of exported variables