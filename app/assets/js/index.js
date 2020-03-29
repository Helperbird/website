import '../css/override.css';
import '../css/styles.css';
import '../css/modal.css';
// Js
import * as stripe from './core/stripe';
import * as plan from './core/plans';
import * as youtube from './core/youtube';
import * as thirdParty from './core/third-party';
import * as slider from './core/slider';
import * as videos from './core/videos';
import * as reviews from './core/reviews';
import * as features from './core/features';
import * as images from './core/images';
import * as notifactions from './core/notifactions';

// Make it public 
window.videos = videos;
window.reviews = reviews;
window.features = features;
window.images = images;


import '@fortawesome/fontawesome-free/js/all';

import 'bootstrap/js/dist/modal';

async function loader() {


    await stripe.load(); // Load Stripe
    await plan.eventListner(); // Pricing table 
    await youtube.load();
    await thirdParty.crisp();
    await slider.initComparisons();

    let slideIndex = 1;
    await videos.showSlidesVideo(slideIndex);
    await reviews.showReview(slideIndex);
    await notifactions.popup('<a href="https://www.helperbird.com/pricing">We have 20% off sale on now.</a>')
    await thirdParty.tagManager();
    await thirdParty.loadManager();
}

loader();


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {

            console.log('SW registered: ', registration);
        }).catch(registrationError => {

            console.log('SW registration failed: ', registrationError);
        });
    });
}