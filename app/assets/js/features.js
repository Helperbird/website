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