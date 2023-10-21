function crisp() {
	setTimeout(() => {
		// Crisp
		window.$crisp = [];
		window.CRISP_WEBSITE_ID = 'ada9377d-ca07-4dc7-9119-264f4724a975';

		let d = document;
		let s = d.createElement('script');
		s.src = 'https://client.crisp.chat/l.js';
		s.async = 1;
		d.getElementsByTagName('head')[0].appendChild(s);
	}, 1000),
		{ once: true };
}

function tagManager() {
	setTimeout(() => {
		let d = document;
		let s = d.createElement('script');
		s.src = 'https://www.googletagmanager.com/gtag/js?id=UA-39444052-20';
		s.async = 1;
		d.getElementsByTagName('head')[0].appendChild(s);
	}, 2000),
		{ once: true };
}

// Function to retrieve URL parameters
function getURLParameters(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
}

function gtag() {
	window.dataLayer.push(arguments);
	dataLayer.push(arguments);
}

// Function to send event to Google Analytics
function sendEvent(eventName, eventCategory, eventLabel) {
	console.log(eventName, eventCategory, eventLabel);
	if (eventLabel && eventLabel.trim() !== '') {
		gtag('event', eventName, {
			event_category: eventCategory,
			event_label: eventLabel
		});
	}
}

function loadManager() {
	setTimeout(() => {
		window.dataLayer = window.dataLayer || [];

		gtag('js', new Date());
		gtag('config', 'AW-856875991');


		gtag('config', 'G-S5QCGL0CN9');

		// Get parameters from the current URL
		var params = getURLParameters(window.location.href);
		console.log(params);
		// Call function to send events
		sendEvent('domain_event', 'URL Parameters', params.domain);
		sendEvent('enterprise_event', 'URL Parameters - ' + params.domain, params.enterprise);
	}, 1000),
		{ once: true };
}

export { crisp, tagManager, loadManager }; // a list of exported variables
