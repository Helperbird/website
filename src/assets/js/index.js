// css
import 'core-js/stable';
import 'notyf/notyf.min.css'; // for React and Vue
import 'regenerator-runtime/runtime';
import 'tailwindcss/tailwind.css';
import * as banner from './core/banner';
import * as pricing_table from './core/extension-pricing';
// Vue components
import * as navigation from './core/navigation';
import * as thirdParty from './core/third-party';
import * as Youtube from './core/youtube';


function load() {
	setTimeout(() => {

		Youtube.load();
		// Vue components load
		banner.load();

		pricing_table.load();

		thirdParty.crisp();
		thirdParty.tagManager();
		thirdParty.loadManager();
		navigation.load();
	}, 2000),
		{
			once: true
		};
}

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then((registration) => {})
			.catch((registrationError) => {});
	});
}

load();
