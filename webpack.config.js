const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
	mode: 'development',
	context: __dirname + '/src/',
	entry: ['./assets/js/index.js', './assets/css/styles.css'],
	plugins: [new MiniCssExtractPlugin({ ignoreOrder: false }), new HTMLInlineCSSWebpackPlugin()],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.min.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.mp4$/,
				use: 'file-loader?name=videos/[name].[ext]'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							useRelativePath: false,
							name: '[name].[ext]',
							publicPath: 'fonts/icons/',
							outputPath: 'fonts/'
						}
					}
				]
			},

			{
				test: /\.(png|jpe?g|gif|xml|ico|svg|woff2|webmanifest)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: './docs'
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: false
						}
					},
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
			// `...`,
			new CssMinimizerPlugin()
		]
	},
	output: {
		path: path.resolve(__dirname, 'docs/assets/js/'),
		filename: 'main.bundle.js'
	}
};
