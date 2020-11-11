const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const fs = require('fs');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
		.concat(new HTMLInlineCSSWebpackPlugin())
		.concat(),
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
