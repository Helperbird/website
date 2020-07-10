let eventArray = [];

export async function scanPage(context, errorCallback, options) {
	return new Promise(async (resolve, reject) => {
		const errors = {};

		function logError(err) {
			const { name } = err;

			errors[name] = errors[name] || [];
			errors[name].push(err);

			errorCallback(err);
		}

		for (const img of context.querySelectorAll('img')) {
			if (!img.hasAttribute('alt')) {
				logError(new ImageWithoutAltAttributeError(img));
			}
		}

		for (const a of context.querySelectorAll('a')) {
			if (a.hasAttribute('name') || elementIsHidden(a)) {
				continue;
			}
			if (a.getAttribute('href') == null && a.getAttribute('role') !== 'button') {
				logError(new LinkWithoutLabelOrRoleError(a));
			} else if (!accessibleText(a)) {
				logError(new ElementWithoutLabelError(a));
			}
		}

		for (const button of context.querySelectorAll('button')) {
			if (!elementIsHidden(button) && !accessibleText(button)) {
				logError(new ButtonWithoutLabelError(button));
			}
		}

		for (const label of context.querySelectorAll('label')) {
			// In case label.control isn't supported by browser, find the control manually (IE)
			const control =
				label.control || document.getElementById(label.getAttribute('for')) || label.querySelector('input');

			if (!control && !elementIsHidden(label)) {
				logError(new LabelMissingControlError(label));
			}
		}

		for (const input of context.querySelectorAll(
			'input[type=text], input[type=url], input[type=search], input[type=number], textarea'
		)) {
			// In case input.labels isn't supported by browser, find the control manually (IE)
			const inputLabel = input.labels
				? input.labels[0]
				: input.closest('label') || document.querySelector(`label[for="${input.id}"]`);
			if (!inputLabel && !elementIsHidden(input) && !input.hasAttribute('aria-label')) {
				logError(new InputMissingLabelError(input));
			}
		}
		if (options && options['ariaPairs']) {
			for (const selector in options['ariaPairs']) {
				const ARIAAttrsRequired = options['ariaPairs'][selector];
				for (const target of context.querySelectorAll(selector)) {
					const missingAttrs = [];

					for (const attr of ARIAAttrsRequired) {
						if (!target.hasAttribute(attr)) missingAttrs.push(attr);
					}

					if (missingAttrs.length > 0) {
						logError(new ARIAAttributeMissingError(target, missingAttrs.join(', ')));
					}
				}
			}
		}

		resolve(errors);
	});
}


export async function setup(){
    window.notifactions.popup('Issues found...');
    await scanPage(document, logError);
}




async function notificationsEvent(error, event) {
    notifactions.popup(`${error.message}`, 'error');
    let settings = await SETTINGS.get();

    if (settings.showConsole === true) {
        console.log(`<b>${error.name}</b>\n\n${error.message}`);
    }

    if (settings.preventDefault === true) {
        event.stopPropagation();
        event.preventDefault();
        event.stopImmediatePropagation();
        return false;
    }
};



async function logError(error) {
    error.element.classList.add('helperbird-accessibility-error');
    let eventHolder = notificationsEvent.bind(event, error);

    eventArray.push(eventHolder);
    error.element.addEventListener('click', eventArray[eventArray.length - 1], { once: false });
}

async function removeLogs() {
    var element = document.getElementsByClassName('helperbird-accessibility-error');
    if (element.length === 0) return false;
    for (var i = 0; i < element.length; i++) {
        element[i].removeEventListener('click', eventArray[i], {
            once: false
        });
        element[i].classList.remove('helperbird-accessibility-error');
    }
}

function errorSubclass(fn) {
	fn.prototype = new Error();
	fn.prototype.constructor = fn;
}

function ImageWithoutAltAttributeError(element) {
	this.name = 'ImageWithoutAltAttributeError';
	this.stack = new Error().stack;
	this.element = element;
	this.message = `Missing alt attribute on ${inspect(element)}`;
}
errorSubclass(ImageWithoutAltAttributeError);

function ElementWithoutLabelError(element) {
	this.name = 'ElementWithoutLabelError';
	this.stack = new Error().stack;
	this.element = element;
	this.message = `Missing text, title, or aria-label attribute on ${inspect(element)}`;
}
errorSubclass(ElementWithoutLabelError);

function LinkWithoutLabelOrRoleError(element) {
	this.name = 'LinkWithoutLabelOrRoleError';
	this.stack = new Error().stack;
	this.element = element;
	this.message = `Missing href or role=button on ${inspect(element)}`;
}
errorSubclass(LinkWithoutLabelOrRoleError);

function LabelMissingControlError(element) {
	this.name = 'LabelMissingControlError';
	this.stack = new Error().stack;
	this.element = element;
	this.message = `Label missing control on ${inspect(element)}`;
}
errorSubclass(LabelMissingControlError);

function InputMissingLabelError(element) {
	this.name = 'InputMissingLabelError';
	this.stack = new Error().stack;
	this.element = element;
	this.message = `Missing label for or aria-label attribute on ${inspect(element)}`;
}
errorSubclass(InputMissingLabelError);

function ButtonWithoutLabelError(element) {
	this.name = 'ButtonWithoutLabelError';
	this.stack = new Error().stack;
	this.element = element;
	this.message = `Missing text or aria-label attribute on ${inspect(element)}`;
}
errorSubclass(ButtonWithoutLabelError);

function ARIAAttributeMissingError(element, attr) {
	this.name = 'ARIAAttributeMissingError';
	this.stack = new Error().stack;
	this.element = element;
	this.message = `Missing ${attr} attribute on ${inspect(element)}`;
}
errorSubclass(ARIAAttributeMissingError);

function elementIsHidden(element) {
	return element.closest('[aria-hidden="true"], [hidden], [style*="display: none"]') != null;
}

function isText(value) {
	return typeof value === 'string' && !!value.trim();
}

function accessibleText(node) {
	switch (node.nodeType) {
		case Node.ELEMENT_NODE:
			if (
				isText(node.getAttribute('alt')) ||
				isText(node.getAttribute('aria-label')) ||
				isText(node.getAttribute('title'))
			)
				return true;
			for (let i = 0; i < node.childNodes.length; i++) {
				if (accessibleText(node.childNodes[i])) return true;
			}
			break;
		case Node.TEXT_NODE:
			return isText(node.data);
	}
}

function inspect(element) {
	let tagHTML = element.outerHTML;
	if (element.innerHTML) tagHTML = tagHTML.replace(element.innerHTML, '...');

	const parents = [];
	while (element) {
		if (element.nodeName === 'BODY') break;
		parents.push(selectors(element));
		if (element.id) break;
		element = element.parentNode;
	}
	return `"${parents.reverse().join(' > ')}". \n\n${tagHTML}`;
}

function selectors(element) {
	const components = [ element.nodeName.toLowerCase() ];
	if (element.id) components.push(`#${element.id}`);
	if (typeof element.hasAttribute === 'function' && element.hasAttribute('class')) {
		for (const name of element.getAttribute('class').split(/\s+/)) {
			if (name.match(/^js-/)) components.push(`.${name}`);
		}
	}

	return components.join('');
}
