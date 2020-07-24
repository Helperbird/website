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

    let a11yCheckers = document.getElementsByClassName('helperbird-accessibility-buy-button');


    if (a11yCheckers.length !== 0) {

        
		for (var i = 0; i < a11yCheckers.length; i++) {
			a11yCheckers[i].addEventListener('click', function () {
                // When the customer clicks on the button, redirect
                // them to Checkout.
                notyf.success('Loading.....');
                stripe.redirectToCheckout({
                    lineItems: [{price: 'price_1H6SB0ENE7uqpRK1tFZO3Puk', quantity: 1}],
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



}

export {
    load
}; // a list of exported variables