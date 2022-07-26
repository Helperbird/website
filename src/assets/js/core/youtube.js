function youtube() {
	const youtubeLazyLoad = document.querySelectorAll('.youtube_lazy_load');

	if (youtubeLazyLoad.length > 0) {
		for (let i = 0; i < youtubeLazyLoad.length; i++) {
			// thumbnail image source.
			let source = `https://img.youtube.com/vi/${youtubeLazyLoad[i].dataset.embed}/sddefault.jpg`;
			const image = new Image();
			image.src = source;
			image.class = 'w-full';
			image.alt = 'Helperbird support feature';
			image.addEventListener(
				'load',
				(() => {
					youtubeLazyLoad[i].appendChild(image);
				})(i)
			);

			youtubeLazyLoad[i].addEventListener('click', function () {
				const iframe = document.createElement('iframe');

				iframe.setAttribute('frameborder', '0');
				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('width', '100%');
				iframe.setAttribute('height', '310px');
				iframe.setAttribute('title', 'Helperbird support feature');
				iframe.setAttribute(
					'src',
					`https://www.youtube.com/embed/${this.dataset.embed}?rel=0&showinfo=0&autoplay=1`
				);

				this.innerHTML = '';
				this.appendChild(iframe);
			});
		}
	}
}

export { youtube }; // a list of exported variables
