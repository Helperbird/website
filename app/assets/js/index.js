// css
import '../css/styles.css';
import '../css/modal.css';
import '../css/override.css';
import '../css/table.css';

// Js
import * as stripe from './core/stripe';
import * as plan from './core/plans';
import * as widget from './core/plans-widget';
import * as youtube from './core/youtube';
import * as thirdParty from './core/third-party';
import * as slider from './core/slider';
import * as videos from './core/videos';
import * as features from './core/features';
import * as sliderHome from './core/slider-home';
import * as notifactions from './core/notifactions';
import * as a11y from './core/scanner';
import * as nav from './core/nav';


import 'lazysizes';
import  '@fortawesome/fontawesome-free/js/brands';
import  '@fortawesome/fontawesome-free/js/fontawesome';
import 'bootstrap/js/dist/modal';

// Make it public
window.videos = videos;
window.features = features;
window.notifactions = notifactions;
window.a11y = a11y;
window.nav = nav;




async function loader() {
	await stripe.load(); // Load Stripe
	await plan.eventListner(); // Pricing table
	await youtube.load();
	await thirdParty.crisp();
	await widget.eventListner();
	await sliderHome.initComparisons();
	let slideIndex = 1;
	await videos.showSlidesVideo(slideIndex);
	if (Math.random() < 0.5) {
		await notifactions.popup('<a href="https://www.helperbird.com/pricing">Try Helperbird Pro today</a>');
	} else {
		await notifactions.popup('<a href="https://www.helperbird.com/pricing">Try Helperbird Pro today</a>');
	}
	await thirdParty.tagManager();
	await slider.start();

	await thirdParty.loadManager();
	await nav.load();
}

loader();

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then((registration) => {})
			.catch((registrationError) => {});
	});
}
