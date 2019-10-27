const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack');
process.traceDeprecation = false;

module.exports = {

  mode: 'development',
  context: __dirname + '/app/',
  entry: {
    'site.js': './assets/js/site.js', // remove unused
  },
  output: {
    path: path.resolve(__dirname, '/dist/help'),
    filename: '[name]'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [

    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        ie8: false,
        output: {
          comments: false
        }
      }
    })
  ]

};