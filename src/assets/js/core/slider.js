import { tns } from 'tiny-slider/src/tiny-slider';

async function start() {
	let reviewExists = document.getElementsByClassName('owl-carousel-loader').length;

	if (reviewExists > 0) {
		tns({
			container: '.owl-carousel-loader',
			items: 3,
			center: true,
			slideBy: 'page',
			controls: false,
			arrowKeys: true,
			autoplay: true,
			autoHeight: false,
			mouseDrag: true,
			swipeAngle: false,
			speed: 2000
		});
	}
}

export { start }; // a list of exported variables
