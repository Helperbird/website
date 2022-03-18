// css

import 'tailwindcss/tailwind.css';
import '../css/blog.css';
import '../css/help.css';
import * as app from './core/app';




app.load();


if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then((registration) => {})
			.catch((registrationError) => {});
	});
}


