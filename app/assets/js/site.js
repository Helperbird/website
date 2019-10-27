setTimeout(() => {
	try {
		var app = document.getElementById('switchable');

		var typewriter = new Typewriter(app, {
			loop: true
		});

		typewriter
			.typeString('you')
			.pauseFor(1250)
			.deleteAll()
			.typeString('your dyslexia')
			.pauseFor(1250)
			.deleteAll()
			.typeString('your son')
			.deleteAll()
			.typeString('your brother')
			.pauseFor(1250)
			.deleteAll()
			.typeString('your sister')
			.pauseFor(1250)
			.deleteAll()
			.typeString('your daughter')
			.pauseFor(1250)
			.deleteAll()
			.typeString('your dad')
			.pauseFor(1250)
			.deleteAll()
			.typeString('everyone')
			.pauseFor(1250)
			.start();

	} catch (err) {
		//	console.log(err);
	}

}, 3000), {
	once: true
}


if (
	window.location.href === "http://127.0.0.1:8080/" || window.location.href === "http://127.0.0.1:8080" || window.location.href === "https://www.helperbird.com/" || window.location.href === "https://www.helperbird.com" || window.location.href === "https://helperbird.com/" || window.location.href === "https://helperbird.com"
) {
	var cusid_ele = document.getElementsByClassName('svg_header');
	if (cusid_ele.length > 0) {
		cusid_ele[Math.floor(Math.random() * cusid_ele.length)].classList.remove('display_none');

	}

}