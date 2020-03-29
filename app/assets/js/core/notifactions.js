import {
    Notyf
} from 'notyf';
import 'notyf/notyf.min.css'; // for React and Vue
const notyf = new Notyf({
    ripple: true,
    duration: 6000
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