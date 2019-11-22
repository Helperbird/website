setTimeout(() => {


    (function () {
        d = document;
        s = d.createElement("script");
        s.src = "https://js.stripe.com/v3";
        d.getElementsByTagName("head")[0].appendChild(s);
    })();

}, 1000), {
    once: true
}

setTimeout(() => {
    let stripe = Stripe('pk_live_nEAFiiPwv8dNs2QI1aWIh06o00FWgK5zLu');
    let checkoutButtonOne = document.getElementById('checkout-button-plan_FmS3HONbzTCxGl');
    let checkoutButtonTwo = document.getElementById('checkout-button-1');
    let checkoutButtonThree = document.getElementById('checkout-button-plan_G1O8Rztm6fFf4R');
    let checkoutButtonFour = document.getElementById('checkout-button-plan_G1OnSt8DIms1PY');
    let checkoutButtonStudent = document.getElementById('checkout-button-plan_GDtSwhVHQXfaSw');


    if (checkoutButtonOne !== null) {
        checkoutButtonOne.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
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




    if (checkoutButtonTwo !== null) {
        checkoutButtonTwo.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
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


    if (checkoutButtonThree !== null) {
        checkoutButtonThree.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
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


    if (checkoutButtonFour !== null) {
        checkoutButtonFour.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            stripe.redirectToCheckout({
                items: [{plan: 'plan_G1OnSt8DIms1PY', quantity: 1}],
          
                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfillment
                successUrl: 'https://www.helperbird.com/success',
                cancelUrl: 'https://www.helperbird.com/cancel',
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


    if (checkoutButtonStudent !== null) {
        checkoutButtonStudent.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            stripe.redirectToCheckout({
                items: [{plan: 'plan_GDtSwhVHQXfaSw', quantity: 1}],
          
                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfillment
                successUrl: 'https://www.helperbird.com/success',
                cancelUrl: 'https://www.helperbird.com/cancel',
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


}, 2000), {
    once: true
}