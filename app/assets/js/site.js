if (
	window.location.href === "http://127.0.0.1:8080/" || window.location.href === "http://127.0.0.1:8080" || window.location.href === "https://www.helperbird.com/" || window.location.href === "https://www.helperbird.com" || window.location.href === "https://helperbird.com/" || window.location.href === "https://helperbird.com" || window.location.href === "https://helperbird.com/pricing"
) {

	toastr.options = {
		"closeButton": false,
		"debug": false,
		"newestOnTop": false,
		"progressBar": true,
		"positionClass": "toast-bottom-left",
		"preventDuplicates": false,
		"showDuration": "1000",
		"hideDuration": "1000",
		"timeOut": "6000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	}

	toastr.options.onclick = function() {window.location.href = "https://www.helperbird.com/pricing"; };
	toastr.success("Click to learn more", "20% sale on right now!")
	
}