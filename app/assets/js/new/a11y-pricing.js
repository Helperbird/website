import Vue from 'vue/dist/vue.js';
import {loadStripe} from '@stripe/stripe-js';
import {Notyf} from 'notyf';


async function load() {
    let isThere = document.getElementById('pricing-table-a11y');
    if (isThere === null) 
        return false;
    

    new Vue({
        el: '#pricing-table-a11y',
        data: {
            eventArray: [],
            isYearly: false,
            stripe: await loadStripe('pk_live_nEAFiiPwv8dNs2QI1aWIh06o00FWgK5zLu'),
            notyf: new Notyf()
        },
        mounted() {
        
 
        },
        methods: {


            openPro: function () {
                this.notyf.success('Loading.....');
                this.stripe.redirectToCheckout({
                    lineItems: [
                        {
                            price: 'price_1HEehMENE7uqpRK1XQYKyaNR',
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
                }).then(({error}) => {
                    if (error) {
                        notyf.error(error.message);
                    }
                });
            }
        },
        computed: {
            showYearly: function () {
                return this.isYearly;
            }
        }
    });
}

export {
    load
}; // a list of exported variables
