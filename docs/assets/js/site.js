setTimeout(() => {


    (function () {
        d = document;
        s = d.createElement("script");
        s.src = "https://js.stripe.com/v3";
        d.getElementsByTagName("head")[0].appendChild(s);
    })();

}, 1000), {
    once: true
}

setTimeout(() => {
    let stripe = Stripe('pk_live_nEAFiiPwv8dNs2QI1aWIh06o00FWgK5zLu');
    let checkoutButtonOne = document.getElementById('checkout-button-plan_FmS3HONbzTCxGl');
    let checkoutButtonTwo = document.getElementById('checkout-button-1');
    let checkoutButtonThree = document.getElementById('checkout-button-plan_G1O8Rztm6fFf4R');
    let checkoutButtonFour = document.getElementById('checkout-button-plan_G1OnSt8DIms1PY');
    let checkoutButtonStudent = document.getElementById('checkout-button-plan_GDtSwhVHQXfaSw');


    if (checkoutButtonOne !== null) {
        checkoutButtonOne.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            stripe.redirectToCheckout({
                    items: [{
                        plan: 'plan_FmS3HONbzTCxGl',
                        quantity: 1
                    }],
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/support',
                })
                .then(function (result) {
                    if (result.error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.
                        var displayError = document.getElementById('error-message');
                        displayError.textContent = result.error.message;
                    }
                });
        });

    }




    if (checkoutButtonTwo !== null) {
        checkoutButtonTwo.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            stripe.redirectToCheckout({
                    items: [{
                        plan: '1',
                        quantity: 1
                    }],
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/support',

                })
                .then(function (result) {
                    if (result.error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.
                        var displayError = document.getElementById('error-message');
                        displayError.textContent = result.error.message;
                    }
                });
        });


    }


    if (checkoutButtonThree !== null) {
        checkoutButtonThree.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            stripe.redirectToCheckout({
                    items: [{
                        plan: 'plan_G1O8Rztm6fFf4R',
                        quantity: 1
                    }],

                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'https://www.helperbird.com/success',
                    cancelUrl: 'https://www.helperbird.com/cancel',
                })
                .then(function (result) {
                    if (result.error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.
                        var displayError = document.getElementById('error-message');
                        displayError.textContent = result.error.message;
                    }
                });
        });

    }


    if (checkoutButtonFour !== null) {
        checkoutButtonFour.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            stripe.redirectToCheckout({
                items: [{plan: 'plan_G1OnSt8DIms1PY', quantity: 1}],
          
                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfillment
                successUrl: 'https://www.helperbird.com/success',
                cancelUrl: 'https://www.helperbird.com/cancel',
              })
              .then(function (result) {
                if (result.error) {
                  // If `redirectToCheckout` fails due to a browser or network
                  // error, display the localized error message to your customer.
                  var displayError = document.getElementById('error-message');
                  displayError.textContent = result.error.message;
                }
              });
        });


    }


    if (checkoutButtonStudent !== null) {
        checkoutButtonStudent.addEventListener('click', function () {
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            // When the customer clicks on the button, redirect
            // them to Checkout.
            stripe.redirectToCheckout({
                items: [{plan: 'plan_GDtSwhVHQXfaSw', quantity: 1}],
          
                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfillment
                successUrl: 'https://www.helperbird.com/success',
                cancelUrl: 'https://www.helperbird.com/cancel',
              })
              .then(function (result) {
                if (result.error) {
                  // If `redirectToCheckout` fails due to a browser or network
                  // error, display the localized error message to your customer.
                  var displayError = document.getElementById('error-message');
                  displayError.textContent = result.error.message;
                }
              });
        });


    }


}, 2000), {
    once: true
}
function enableUnderline() {
    try {

        if (window.google_tag_manager) {
            gtag('event', 'click', {
                'event_category': 'Try Features',
                'event_label': 'Enable underline',
                'value': 'enableUnderline'
            });
        }


    } catch (error) {

    }

    const idName = 'helperbird-blind-id';
    const CSS = ` a { text-decoration: none;     background: linear-gradient(to right, #bcbcbc 25%,#ffcd02 25%, #ffcd02 50%, #e84f47 50%, #e84f47 75%, #65c1ac 75%)  left bottom no-repeat; background-size: 100% 2px; }`;
    const HEAD = document.head || document.getElementsByTagName('head')[0];
    const STYLE = document.createElement('style');
    STYLE.setAttribute('id', idName);

    if (!disableFeature(idName)) {
        HEAD.appendChild(STYLE);
        STYLE.appendChild(document.createTextNode(CSS));
    }
}

function captureOutboundLink(url, newTab = false) {
    if (window.google_tag_manager || (window.ga && ga.create)) {
        gtag('event', 'click', {
            'event_category': 'outbound',
            'event_label': url,
            'transport_type': 'beacon',
            'event_callback': function () {

                if (newTab) {
                    var win = window.open(url, '_blank');
                    win.focus();
                } else {
                    document.location = url;
                }
            }
        });
    } else {
        if (newTab) {
            var win = window.open(url, '_blank');
            win.focus();
        } else {
            document.location = url;
        }
    }
}

function enableFontColor(color) {

    try {
        gtag('event', 'click', {
            'event_category': 'Try Features',
            'event_label': 'Enable font color',
            'value': 'enableFontColor'
        });

    } catch (error) {

    }

    if (color === null || color === undefined) {
        color = '#000';
    }
    const idName = 'helperbird-font-color-id';
    const CSS = `:not(a), :not(img)  { color: ${color} !important; }`;
    const HEAD = document.head || document.getElementsByTagName('head')[0];
    const STYLE = document.createElement('style');
    STYLE.setAttribute('id', idName);
    if (!disableFeature(idName)) {
        HEAD.appendChild(STYLE);
        STYLE.appendChild(document.createTextNode(CSS));
    }

}



function enableBackgroundColor(color) {

    try {
        gtag('event', 'click', {
            'event_category': 'Try Features',
            'event_label': 'Enable background color',
            'value': 'Enable background color'
        });

    } catch (error) {

    }

    if (color === null || color === undefined) {
        color = '#000';
    }
    const idName = 'helperbird-background-color-id';
    const CSS = `div:not(#helpebird), div:not(#helperbird-font-color-id), body, div:not(#helperbird-background-color-id),  div:not(#helperbird-tint-id){ background-color: ${color} !important; }`;
    const HEAD = document.head || document.getElementsByTagName('head')[0];
    const STYLE = document.createElement('style');
    STYLE.setAttribute('id', idName);

    if (!disableFeature(idName)) {
        HEAD.appendChild(STYLE);
        STYLE.appendChild(document.createTextNode(CSS));
    }

}

function enableTint(tint) {

    try {
        gtag('event', 'click', {
            'event_category': 'Try Features',
            'event_label': 'Enable tint',
            'value': 'Enable tint'
        });

    } catch (error) {

    }

    const idName = 'helperbird-tint-id';
    let elem = document.createElement('div');
    let rgb = hexToRGB(tint, 0.5);
    let style = `width: 100%;height: 100%;background-color:${rgb} !important ;position: fixed;top: 0;left: 0;z-index: 99999;pointer-events: none;`;
    elem.setAttribute('id', idName);
    elem.style.cssText = style;
    if (!disableFeature(idName)) {
        document.body.appendChild(elem);
    }

}

function reload() {
    window.location.reload();
}

function enableRuler(ruler, size, position) {


    try {

        gtag('event', 'click', {
            'event_category': 'Try Features',
            'event_label': 'Enable Ruler',
            'value': 'Enable Ruler'
        });

    } catch (error) {

    }
    const idName = 'helperbird-ruler-id';
    const ELEM = document.createElement('div');
    let rgb = hexToRGB(ruler, 0.5);
    let style = `width: 100%;height: ${size} !important;background-color:${rgb} !important ;position: fixed;top: ${position} ;left: 0;z-index: 99999;pointer-events: none;`;
    ELEM.setAttribute('id', idName);
    ELEM.style.cssText = style;
    if (!disableFeature(idName)) {
        document.body.appendChild(ELEM);
    }


}

function hexToRGB(hex, alpha) {
    if (hex === undefined || hex === null) return false;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
        return `rgb(${r}, ${g}, ${b})`;
    }
}

function enableStroke() {


    try {

        gtag('event', 'click', {
            'event_category': 'Try Features',
            'event_label': 'Enable Stroke',
            'value': 'Enable Stroke'
        });

    } catch (error) {

    }

    const CSS = ` p,h1,h2,h3,h4,h5,h6,b,a,li,lo,ul {   
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 1px;
	  -webkit-text-stroke-color: red; }`;
    const idName = 'helperbird-stroke-id';
    const HEAD = document.head || document.getElementsByTagName('head')[0];
    const STYLE = document.createElement('style');
    STYLE.setAttribute('id', idName);

    if (!disableFeature(idName)) {
        HEAD.appendChild(STYLE);
        STYLE.appendChild(document.createTextNode(CSS));
    }


}

function cognitiveLoad() {

    try {

        gtag('event', 'click', {
            'event_category': 'Try Features',
            'event_label': 'Enable cognitive load',
            'value': 'Enable cognitive load'
        });


    } catch (error) {

    }
    const CSS = ` 
  
    h1, h2, h3 , h4 , h5 , h6 ,p {     
  
        background: linear-gradient(to left, blue, red), linear-gradient(to left, blue, red) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        }
    
    
      `;

    const idName = 'helperbird-cognitive-id';

    const STYLE = document.createElement('style');
    STYLE.setAttribute('id', idName);
    STYLE.appendChild(document.createTextNode(CSS));

    if (!disableFeature(idName)) {
        const HEAD = document.head || document.getElementsByTagName('head')[0];
        HEAD.appendChild(STYLE);
    }
}

function enableFont() {
    try {
        gtag('event', 'click', {
            'event_category': 'Try Features',
            'event_label': 'Enable font',
            'value': 'Enable font'
        });


    } catch (error) {

    }
    const idName = 'helperbird';
    let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.setAttribute('id', idName);
    style.href = `assets/css/default.min.css`;

    if (!disableFeature(idName)) {
        document.head.appendChild(style);
    }

}

function disableFeature(id) {
    const ELEM = document.getElementById(id);

    try {
        gtag('event', 'click', {
            'event_category': 'Try Features',
            'event_label': 'Disable ' + id,
            'value': 'disable'
        });

    } catch (error) {

    }

    if (ELEM) {
        ELEM.parentNode.removeChild(ELEM);
        (document.head || document.documentElement).removeChild(ELEM);
        return true;
    } else {
        return false;
    }
}

function enableZoom(multiplier) {

    try {
        gtag('event', 'click', {
            'event_category': 'Try Features',
            'event_label': 'Button click',
            'value': 'enableZoom'
        });

    } catch (error) {

    }

    const classes = document.querySelectorAll('p,h1,h2,h3,h4,h5,h6,b,span,a,button,div,li,lo,ul');
    let i;
    for (i = 0; i < classes.length; ++i) {
        const currentFontSize = window.getComputedStyle(classes[i], null).getPropertyValue('font-size');

        if (currentFontSize === '') {
            currentFontSize = '24';
        }
        classes[i].website.fontSize = `${parseFloat(currentFontSize, 10) * multiplier}px`;
    }
}


function calc() {
    console.log(document.getElementById("annual").checked);

    const element = document.getElementById("checkout-button-1");
    element.classList.add("hide");

    const elementTwo = document.getElementById("checkout-button-plan_FmS3HONbzTCxGl");
    elementTwo.classList.add("hide");



    const element5 = document.getElementById("checkout-button-plan_G1OnSt8DIms1PY");
    element5.classList.add("hide");

    const element6 = document.getElementById("checkout-button-plan_G1O8Rztm6fFf4R");
    element6.classList.add("hide");




    if (document.getElementById("annual").checked) {

        document.getElementById('plusPricing').innerHTML = '$50.00 ';
        document.getElementById('enterprisePricing').innerHTML = '$1000 ';
        document.getElementById('plusPricingText').innerText = 'Yearly';

        document.getElementById('enterprisePricingText').innerText = 'Yearly';
        const element3 = document.getElementById("checkout-button-plan_FmS3HONbzTCxGl");
        element3.classList.remove("hide");

        const element2 = document.getElementById("checkout-button-plan_G1OnSt8DIms1PY");
        element2.classList.remove("hide");

    } else {

        document.getElementById('plusPricing').innerHTML = '$4.99 ';
        document.getElementById('plusPricingText').innerText = 'Monthly';
        document.getElementById('enterprisePricing').innerHTML = '$99.99 ';
        document.getElementById('enterprisePricingText').innerText = 'Monthly';


        
        const element4 = document.getElementById("checkout-button-plan_G1O8Rztm6fFf4R");
        element4.classList.remove("hide");

        const element = document.getElementById("checkout-button-1");
        element.classList.remove("hide");




    }
}
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
function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }

    function compareImages(img) {
        var slider, img, clicked = 0,
            w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");

        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchstop", slideFinish);

        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }

        function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }

        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}
setTimeout(() => {


	(function () {
		d = document;
		s = d.createElement("script");
		s.src = "https://kit.fontawesome.com/3ee1d7e02d.js";
		s.async = 1;
		d.getElementsByTagName("head")[0].appendChild(s);
	})();


	// Crisp
	window.$crisp = [];
	window.CRISP_WEBSITE_ID = "ada9377d-ca07-4dc7-9119-264f4724a975";
	(function () {
		d = document;
		s = d.createElement("script");
		s.src = "https://client.crisp.chat/l.js";
		s.async = 1;
		d.getElementsByTagName("head")[0].appendChild(s);
	})();



	(function () {
		d = document;
		s = d.createElement("script");
		s.src = "https://unpkg.com/typewriter-effect@2.3.1/dist/core.js";
		d.getElementsByTagName("head")[0].appendChild(s);
	})();





}, 2000), {
	once: true
}
const youtubeLazyLoad = document.querySelectorAll(".youtube_lazy_load");


if (youtubeLazyLoad.length > 0) {


    for (let i = 0; i < youtubeLazyLoad.length; i++) {
        // thumbnail image source.
        let source = "https://img.youtube.com/vi/" + youtubeLazyLoad[i].dataset.embed + "/sddefault.jpg";
        var image = new Image();
        image.src = source;
        image.alt = "Helperbird support feature";
        image.addEventListener("load", function () {
            youtubeLazyLoad[i].appendChild(image);
        }(i));

        youtubeLazyLoad[i].addEventListener("click", function () {

            var iframe = document.createElement("iframe");

            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("title", "Helperbird support feature");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

            this.innerHTML = "";
            this.appendChild(iframe);
        });
    }
}