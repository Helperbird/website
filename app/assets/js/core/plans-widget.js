async function calc() {
	let element = document.getElementById('checkout-button-startups');
	let elementTwo = document.getElementById('checkout-button-large');

	let elementFour = document.getElementById('checkout-button-enterprise');

	element.classList.add('hide');
	elementTwo.classList.add('hide');
	elementFour.classList.add('hide');

	if (document.getElementById('annual-widget').checked) {
		document.getElementById('startupPricing').innerHTML = '$300/yearly';
		document.getElementById('largePricing').innerHTML = '$1000/yearly';
		document.getElementById('enterprisePricing').innerHTML = '$2500/yearly';

		let element = document.getElementById('checkout-button-startups-monthly');
		let elementTwo = document.getElementById('checkout-button-large-monthly');

		let elementFour = document.getElementById('checkout-button-enterprise-monthly');

		element.classList.add('hide');
		elementTwo.classList.add('hide');

		elementFour.classList.add('hide');

		let elementYearly = document.getElementById('checkout-button-startups');
		let elementTwoYearly = document.getElementById('checkout-button-large');
		let elementFourYearly = document.getElementById('checkout-button-enterprise');

		elementYearly.classList.remove('hide');
		elementTwoYearly.classList.remove('hide');

		elementFourYearly.classList.remove('hide');
	} else {
		document.getElementById('startupPricing').innerHTML = '$30/monthly';
		document.getElementById('largePricing').innerHTML = '$99/monthly';
		document.getElementById('enterprisePricing').innerHTML = '$250/monthly';

		let element = document.getElementById('checkout-button-startups-monthly');
		let elementTwo = document.getElementById('checkout-button-large-monthly');

		let elementFour = document.getElementById('checkout-button-enterprise-monthly');

		element.classList.remove('hide');
		elementTwo.classList.remove('hide');

		elementFour.classList.remove('hide');

		let elementYearly = document.getElementById('checkout-button-startups');
		let elementTwoYearly = document.getElementById('checkout-button-large');

		let elementFourYearly = document.getElementById('checkout-button-enterprise');

		elementYearly.classList.add('hide');
		elementTwoYearly.classList.add('hide');

		elementFourYearly.classList.add('hide');
	}
}

async function eventListner() {
	let pricingTableSwitch = document.getElementById('annual-widget');

	if (pricingTableSwitch) {
		pricingTableSwitch.addEventListener('change', calc);
	}
}

export { calc, eventListner }; // a list of exported variables
