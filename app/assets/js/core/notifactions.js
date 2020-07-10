import {
    Notyf
} from 'notyf';
import 'notyf/notyf.min.css'; // for React and Vue
const notyf = new Notyf({
    ripple: true,
    duration: 5000,
    position: {
      x: 'left',
      y: 'bottom',
    }
});


async function popup(message) {
	setTimeout(() => {

        notyf.success(message);
	}, 2000), {
		once: true
	}

}


export {
    popup
}; // a list of exported variables