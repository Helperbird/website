const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
var fs = require('fs');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;

function generateHtmlPlugins(templateDir, location) {
	const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
	return templateFiles.map((item) => {
		// Split names and extension
		const parts = item.split('.');
		const name = parts[0];
		const extension = parts[1];
		let template = path.resolve(__dirname, `${templateDir}/${name}.${extension}`);

		if (!fs.existsSync(template)) {
			template = path.resolve(__dirname, `${templateDir}/index.pug`);
		}
		return new HTMLWebpackPlugin({
			filename: `${location}${name}.html`,
			template: template,
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		});
	});
}
// Call our function on our views directory.
indexFiles = generateHtmlPlugins('./app/templates/', '');
blogFiles = generateHtmlPlugins('./app/templates/blog/', 'blog/');
compareFiles = generateHtmlPlugins('./app/templates/compare/', 'compare/');
featuresFiles = generateHtmlPlugins('./app/templates/features/', 'features/');
partnersFiles = generateHtmlPlugins('./app/templates/partners/', 'partners/');
productsFiles = generateHtmlPlugins('./app/templates/products/', 'products/');
updatesFiles = generateHtmlPlugins('./app/templates/updates/', 'updates/');

const paths = [
	'/success-education',
	'/cancel',
	'/',
	'/feedback',
	'/compliance',
	'/testimonials',
	'/about',
	'/extension',
	'/products/widget',
	'/products/accessibility-checker',
	'/contact',
	'/pricing',
	'/support',
	'/sitemap',
	'/survey',
	'/firefox',
	'/features/',
	'/features/blacklist',
	'/features/zoom',
	'/features/text-to-speech',
	'/features/optical-character-recognition',
	'/features/screenshot',
	'/features/google-translate',
	'/features/styles',
	'/features/color-blindness',
	'/features/reader-mode-for-chrome-and-firefox',
	'/features/speech-to-text',
	'/features/ruler',
	'/features/notes',
	'/features/bookmarks',
	'/features/immersive-reader-for-chrome',
	'/features/shortcuts',
	'/features/analyze',
	'/features/adjust-letters-and-words',
	'/features/high-contrast',
	'/features/dictionary',
	'/features/cognitive-load',
	'/features/specialised-dyslexic-fonts',
	'/features/overlay',
	'/features/ad-blocker',
	'/features/cursor-control',
	'/features/privacy',
	'/features/annotation',
	'/sales',
	'/404',
	'/updates/24-1-1',
	'/updates/24-3-0',
	'/updates/24-2-4',
	'/updates/',
	'/updates/26-0-1',
	'/updates/25-1-0',
	'/updates/24-1-0',
	'/updates/24-2-2',
	'/updates/25-0-1',
	'/updates/25-0-0',
	'/updates/26-0-2',
	'/updates/24-1-2',
	'/updates/27-0-0',
	'/updates/27-1-0',
	'/updates/28-0-2',
	'/updates/30-0-0',
	'/updates/30-2-0',
	'/updates/30-3-0',
	'/blog/three-facts-about-dyslexia',
	'/blog/how-to-install-and-set-up-helperbird',
	'/blog/',
	'/blog/interview-with-dyslexic-founder-of-helperbird',
	'/blog/how-to-install-helperbird-in-edu-accounts',
	'/blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia',
	'/blog/signin',
	'/blog/positive-thoughts-might-benefit-dyslexic-students',
	'/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console',
	'/partners/sascharoos',
	'/partners/sprialisconsulting',
	'/welcome',
	'/terms-of-service',
	'/compare/immersive-reader-by-microsoft-alternative',
	'/compare/snap-and-read-alternative',
	'/compare/read-and-write-alternative',
	'/chrome',
	'/success',
	'/enterprise',
	'/edu',
	'/roadmap',
	'/reviews',
	'/edge',
	'/privacy',
	'/in-the-news'
];

module.exports = {
	mode: 'production',
	context: __dirname + '/app/',
	entry: {
		app: './assets/js/index.js'
	},
	plugins: [
		// new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),

		new CopyPlugin([
			{
				from: 'assets/setup/',
				to: ''
			},
			{
				from: 'assets/fonts/',
				to: 'assets/fonts/'
			},
			{
				from: 'assets/videos/',
				to: 'assets/videos/'
			},
			{
				from: 'assets/images/',
				to: 'assets/images/'
			},
			{
				from: '../node_modules/@fortawesome/fontawesome-free/svgs/solid/',
				to: 'assets/svgs'
			},
			{
				from: '../node_modules/@fortawesome/fontawesome-free/svgs/brands/',
				to: 'assets/svgs'
			},
			{
				from: '../node_modules/@fortawesome/fontawesome-free/svgs/regular/',
				to: 'assets/svgs'
			}
		]),

		new SitemapPlugin('https://www.helperbird.com', paths),
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast
			// and not allow any straggling "old" SWs to hang around

			exclude: [ /(?:cname|CNAME|app.css|robots.txt|.DS_Store)$/ ],
			clientsClaim: true,
			skipWaiting: true
		})
	]
		.concat(indexFiles)
		.concat(blogFiles)
		.concat(compareFiles)
		.concat(featuresFiles)
		.concat(partnersFiles)
		.concat(productsFiles)
		.concat(updatesFiles)
		.concat(new HTMLInlineCSSWebpackPlugin()),
	module: {
		rules: [
			{
				test: /\.mp4$/,
				use: 'file-loader?name=videos/[name].[ext]'
			},
			{
				test: /\.pug$/,
				use: 'pug-loader'
			},

			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},

			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=/fonts/[name].[ext]'
			},

			{
				test: /\.(png|jpe?g|gif|xml|ico|svg|woff2|webmanifest)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: './docs'
				}
			}
		]
	},
	output: {
		publicPath: '/',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'docs')
	}
};
