// css
import 'notyf/notyf.min.css'; // for React and Vue
import 'regenerator-runtime/runtime';
import 'tailwindcss/tailwind.css';
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


