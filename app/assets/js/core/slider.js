import { tns } from 'tiny-slider/src/tiny-slider';


async function start() {
	let reviewExists = document.getElementsByClassName('owl-carousel-loader').length;

	if (reviewExists > 0) {
		tns({
			container: '.owl-carousel-loader',
			autoWidth: false,
			items: 2,
			controls: false,
			slideBy: 1,
			controls: false,
			autoplay: true,
			autoHeight: false,
			gutter: 10,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000
		});
	}
}

export { start }; // a list of exported variables
