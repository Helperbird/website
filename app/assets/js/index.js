
import '../css/styles.min.css';
import '../css/modal.min.css';
import '../css/override.min.css';
import '../css/dropdown.min.css';
// Js
import * as stripe from './core/stripe';
import * as dropdown from './core/dropdown';
import * as plan from './core/plans';
import * as youtube from './core/youtube';
import * as thirdParty from './core/third-party';
import * as slider from './core/slider';
import * as videos from './core/videos';
import * as reviews from './core/reviews';
import * as features from './core/features';
import * as images from './core/images';
import * as notifactions from './core/notifactions';
import * as webp from './core/webp'
// Make it public 
window.videos = videos;
window.reviews = reviews;
window.features = features;
window.images = images;

 webp.load();
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
    if (Math.random() < 0.5) {
        await notifactions.popup('<a href="https://www.helperbird.com/pricing">Try Helperbird for 7 days for Free</a>');
    } else {
        await notifactions.popup('<a href="https://www.helperbird.com/pricing">50% off summer sale on now!</a>');
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

            console.log('SW registration failed: ', registrationError);
        });
    });
}