import { Notyf } from 'notyf';

const notyf = new Notyf({
	ripple: true,
	duration: 5000,
	position: {
		x: 'center',
		y: 'bottom'
	}
});

async function popup(message) {
	setTimeout(() => {
		notyf.success(message);
	}, 2000),
		{
			once: true
		};
}

export { popup }; // a list of exported variables
