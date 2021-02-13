import Vue from 'vue/dist/vue.js';

async function load() {
	let isThere = document.getElementById('banner');
	if (isThere === null) return false;
	new Vue({
		el: '#banner',
		data: {
			closeBanner: true,
		},
		methods: {
	
			handleBannerMenu: function() {
				this.closeBanner = !this.closeBanner;
			}
		},
		computed: {
		
			showBanner: function() {
				return this.closeBanner;
			},
		
		}
	});
}

export { load }; // a list of exported variables
