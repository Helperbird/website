import '../css/styles.min.css';
import '../css/modal.min.css';
import '../css/override.min.css';
import '../css/dropdown.min.css';
// Js
import * as stripe from './core/stripe';
import * as dropdown from './core/dropdown';
import * as plan from './core/plans';
import * as widget from './core/plans-widget';
import * as youtube from './core/youtube';
import * as thirdParty from './core/third-party';
import * as slider from './core/slider';
import * as sliderHome from './core/slider-home';
import * as videos from './core/videos';
import * as reviews from './core/reviews';
import * as features from './core/features';
import * as images from './core/images';
import * as notifactions from './core/notifactions';
import * as a11y from './core/scanner';
import * as webp from './core/webp'
// Make it public 
window.videos = videos;
window.reviews = reviews;
window.features = features;
window.images = images;
window.notifactions = notifactions;
window.a11y = a11y;
webp.load();
import '@fortawesome/fontawesome-free/js/all';

import 'bootstrap/js/dist/modal';

async function loader() {


    await stripe.load(); // Load Stripe
    await plan.eventListner(); // Pricing table 
    await youtube.load();
    await thirdParty.crisp();
    await slider.initComparisons();
    await sliderHome.initComparisons();
    await widget.eventListner();

    let slideIndex = 1;
    await videos.showSlidesVideo(slideIndex);
    await reviews.showReview(slideIndex);
    if (Math.random() < 0.5) {
        await notifactions.popup('<a href="https://www.helperbird.com/pricing">Start your free 7 day trial</a>');
    } else {
        await notifactions.popup('<a href="https://www.helperbird.com/pricing">Start your free 7 day trial</a>');
    }
    await thirdParty.tagManager();
    await thirdParty.loadManager();
}


loader();


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {

            //console.log('SW registered: ', registration);
        }).catch(registrationError => {

            // console.log('SW registration failed: ', registrationError);
        });
    });
}