
// css
import '../css/styles.css';
import 'tiny-slider/dist/tiny-slider.css';
import 'notyf/notyf.min.css'; // for React and Vue

import * as Youtube from './core/youtube';
import * as reviewSlider from './core/slider';
import * as thirdParty from './core/third-party';
import * as a11y from './core/scanner';
import * as notifactions from './core/notifactions';

// Vue components
import * as navigation from './core/navigation';
import * as banner from './core/banner';
import * as pricing_table from './core/extension-pricing';
import * as widget_table from './core/widget-pricing';
import * as a11y_table from './core/a11y-pricing';


async function load() {
    reviewSlider.start();
    Youtube.load();
    
    // Vue components load
    navigation.load();
	banner.load();
    widget_table.load();
    pricing_table.load();
    a11y_table.load();
    
    
    thirdParty.crisp();
    thirdParty.tagManager();
    thirdParty.loadManager();

	
}

load();

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then((registration) => {})
			.catch((registrationError) => {});
	});
}

window.notifactions = notifactions;
window.a11y = a11y;
