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
    let checkoutButtonOne = document.getElementById('checkout-button-plan_FmS3HONbzTCxGl');
    let checkoutButtonTwo = document.getElementById('checkout-button-1');
    let checkoutButtonThree = document.getElementById('checkout-button-plan_G1O8Rztm6fFf4R');
    let checkoutButtonFour = document.getElementById('checkout-button-plan_G1OnSt8DIms1PY');
    let checkoutButtonStudent = document.getElementById('checkout-button-plan_GDtSwhVHQXfaSw');
    let checkoutButtonOnceOff = document.getElementById('checkout-button-sku_GOJJLiQ8d9juJm');

    if (checkoutButtonOne !== null) {
        checkoutButtonOne.addEventListener('click', () => {
            // When the customer clicks on the button, redirect
            // them to Checkout.

            notyf.success('Loading.....');
            stripe.redirectToCheckout({
                    items: [{
                        plan: 'plan_FmS3HONbzTCxGl',
                        quantity: 1
                    }],
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/support',
                    billingAddressCollection: 'required',
                })
                .then(({error}) => {
                    if (error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.

                        notyf.error(error.message);

                    }
                });
        });

    }




    if (checkoutButtonTwo !== null) {
        checkoutButtonTwo.addEventListener('click', () => {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            notyf.success('Loading.....');
            stripe.redirectToCheckout({
                    items: [{
                        plan: '1',
                        quantity: 1
                    }],
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/support',
                    billingAddressCollection: 'required',

                })
                .then(({error}) => {
                    if (error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.
                        notyf.error(error.message);
                    }
                });
        });


    }


    if (checkoutButtonOnceOff !== null) {
        checkoutButtonOnceOff.addEventListener('click', () => {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            notyf.success('Loading.....');
            stripe.redirectToCheckout({
                    items: [{
                        sku: 'sku_GOJJLiQ8d9juJm',
                        quantity: 1
                    }],
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/canceled',
                    billingAddressCollection: 'required',
                })
                .then(({error}) => {
                    if (error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.
                        notyf.error(error.message);
                    }
                });
        });
    }

    if (checkoutButtonThree !== null) {
        checkoutButtonThree.addEventListener('click', () => {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            notyf.success('Loading.....');
            stripe.redirectToCheckout({
                    items: [{
                        plan: 'plan_G1O8Rztm6fFf4R',
                        quantity: 1
                    }],

                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/cancel',
                    billingAddressCollection: 'required',
                })
                .then(({error}) => {
                    if (error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.
                        notyf.error(error.message);
                    }
                });
        });

    }


    if (checkoutButtonFour !== null) {
        checkoutButtonFour.addEventListener('click', () => {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            notyf.success('Loading.....');
            stripe.redirectToCheckout({
                    items: [{
                        plan: 'plan_G1OnSt8DIms1PY',
                        quantity: 1
                    }],

                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/cancel',
                    billingAddressCollection: 'required',
                })
                .then(({error}) => {
                    if (error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.
                        notyf.error(error.message);
                    }
                });
        });


    }


    if (checkoutButtonStudent !== null) {
        checkoutButtonStudent.addEventListener('click', () => {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            notyf.success('Loading.....');
            stripe.redirectToCheckout({
                    items: [{
                        plan: 'plan_GDtSwhVHQXfaSw',
                        quantity: 1
                    }],

                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success-education',
                    cancelUrl: 'https://www.helperbird.com/cancel',
                    billingAddressCollection: 'required',
                })
                .then(({error}) => {
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