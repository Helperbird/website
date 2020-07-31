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
    let educationYearly = document.getElementById('checkout-button-plan_G1OnSt8DIms1PY');
    let educationMonthly = document.getElementById('checkout-button-plan_G1O8Rztm6fFf4R ');
    let studentPricing = document.getElementById('checkout-button-plan_GDtSwhVHQXfaSw');
    let a11yCheckers = document.getElementsByClassName('helperbird-accessibility-buy-button');


    // Widget
    let widgetSmall = document.getElementsByClassName('helperbird-widget-small-montly');
    let widgetSmallYearly = document.getElementsByClassName('helperbird-widget-small-yearly');

    let widgetMediumMonthly = document.getElementsByClassName('helperbird-widget-medium-monthly');
    let widgetMediumYearly = document.getElementsByClassName('helperbird-widget-medium-yearly');

    let widgetLargeMonthly = document.getElementsByClassName('helperbird-widget-monthly');
    let widgetLargeYearly = document.getElementsByClassName('helperbird-widget-large');

    let widgetEnterprise = document.getElementsByClassName('helperbird-widget-enterprise');
    let widgetEnterpriseYearly = document.getElementsByClassName('helperbird-widget-enterprise-yearly');




    // Bundles 
    let smallBundle = document.getElementsByClassName('helperbird-bundle-small');
    let mediumBundle = document.getElementsByClassName('helperbird-bundle-medium');

    let largeBundle = document.getElementsByClassName('helperbird-bundle-large');
    let fullBundle = document.getElementsByClassName('helperbird-bundle-full');

    if (smallBundle.length !== 0) {


        for (var i = 0; i < smallBundle.length; i++) {
            smallBundle[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H64HxENE7uqpRK17GrIqFfW',
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
                    .then(function (result) {
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


    if (mediumBundle.length !== 0) {


        for (var i = 0; i < mediumBundle.length; i++) {
            mediumBundle[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H5ehQENE7uqpRK1VVDhl2em',
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
                    .then(function (result) {
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


    if (largeBundle.length !== 0) {


        for (var i = 0; i < largeBundle.length; i++) {
            largeBundle[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H5ehmENE7uqpRK1jifAiPty',
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
                    .then(function (result) {
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


    if (fullBundle.length !== 0) {


        for (var i = 0; i < fullBundle.length; i++) {
            fullBundle[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H63jAENE7uqpRK1RxJhmkmy',
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
                    .then(function (result) {
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


    if (widgetEnterpriseYearly.length !== 0) {


        for (var i = 0; i < widgetEnterpriseYearly.length; i++) {
            widgetEnterpriseYearly[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H9xPqENE7uqpRK1zEsky6Ws',
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
                    .then(function (result) {
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
            widgetEnterprise[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H9xPpENE7uqpRK1SZ6RF4lB',
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
                    .then(function (result) {
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
            widgetLargeYearly[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H9xPqENE7uqpRK1wtjQeEV0',
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
                    .then(function (result) {
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
            widgetLargeMonthly[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H9xPpENE7uqpRK1HKnR7pRZ',
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
                    .then(function (result) {
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
            widgetMediumYearly[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H9xPpENE7uqpRK1cluZa5YB',
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
                    .then(function (result) {
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
            widgetMediumMonthly[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'medium',
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
                    .then(function (result) {
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
            widgetSmallYearly[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'Basic-yearly',
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
                    .then(function (result) {
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
            widgetSmall[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'basic',
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
                    .then(function (result) {
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
            a11yCheckers[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                notyf.success('Loading.....');
                stripe.redirectToCheckout({
                        lineItems: [{
                            price: 'price_1H6SB0ENE7uqpRK1tFZO3Puk',
                            quantity: 1
                        }],
                        mode: 'subscription',
                        // Do not rely on the redirect to the successUrl for fulfilling
                        // purchases, customers may not always reach the success_url after
                        // a successful payment.
                        // Instead use one of the strategies described in
                        // https://stripe.com/docs/payments/checkout/fulfillment
                        successUrl: 'https://www.helperbird.com/success-a11y',
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