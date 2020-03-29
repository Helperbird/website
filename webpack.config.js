const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

const paths = [
  '/blog/',
  '/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console',
  '/blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia',
  '/blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia',
  '/blog/signin',
  '/compare/immersive-reader-by-microsoft-alternative',
  '/compare/read-and-write-alternative',
  '/features/blacklist',
  '/features/cognitive-load',
  '/features/color-blindness',
  '/features/dictionary',
  '/features/google-translate',
  '/features/high-contrast',
  '/features/immersive-reader-for-chrome',
  '/features/notes',
  '/features/overlay',
  '/features/privacy',
  '/features/reader-mode-for-chrome-and-firefox',
  '/features/ruler',
  '/features/screenshot',
  '/features/specialised-dyslexic-fonts',
  '/features/',
  '/features/speech-to-text',
  '/features/styles',
  '/features/text-to-speech',
  '/features/zoom',
  '/about',
  '/welcome',
  '/chrome',
  '/compliance',
  '/contact',
  '/edge',
  '/enterprise',
  '/feedback',
  '/firefox',
  '/in-the-news',
  '/pricing',
  '/privacy',
  '/roadmap',
  '/sales',
  '/sitemap',
  '/support',
  '/survey',
  '/terms-of-service',
  '/updates',
  '/'
];

module.exports = {
  mode: 'production',
  context: __dirname + '/app/',
  entry: {
    app: './assets/js/index.js',
  },
  plugins: [

    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'templates/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'templates/about.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'templates/404.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'support.html',
      template: 'templates/support.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/blacklist.html',
      template: './templates/features/blacklist.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/immersive-reader-for-chrome.html',
      template: './templates/features/immersive-reader-for-chrome.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/screenshot.html',
      template: './templates/features/screenshot.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/cognitive-load.html',
      template: './templates/features/cognitive-load.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/notes.html',
      template: './templates/features/notes.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/specialised-dyslexic-fonts.html',
      template: './templates/features/specialised-dyslexic-fonts.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/color-blindness.html',
      template: './templates/features/color-blindness.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/overlay.html',
      template: './templates/features/overlay.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/speech-to-text.html',
      template: './templates/features/speech-to-text.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/dictionary.html',
      template: './templates/features/dictionary.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/privacy.html',
      template: './templates/features/privacy.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/styles.html',
      template: './templates/features/styles.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/google-translate.html',
      template: './templates/features/google-translate.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/reader-mode-for-chrome-and-firefox.html',
      template: './templates/features/reader-mode-for-chrome-and-firefox.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/text-to-speech.html',
      template: './templates/features/text-to-speech.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/high-contrast.html',
      template: './templates/features/high-contrast.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/ruler.html',
      template: './templates/features/ruler.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'features/zoom.html',
      template: './templates/features/zoom.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'compare/read-and-write-alternative.html',
      template: 'templates/compare/read-and-write-alternative.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'compare/immersive-reader-by-microsoft-alternative.html',
      template: 'templates/compare/immersive-reader-by-microsoft-alternative.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console.html',
      template: 'templates/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'blog/index.html',
      template: 'templates/blog/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia.html',
      template: 'templates/blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'blog/signin.html',
      template: 'templates/blog/signin.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: 'templates/contact.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy.html',
      template: 'templates/privacy.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'terms-of-service.html',
      template: 'templates/terms-of-service.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'survey.html',
      template: 'templates/survey.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'reviews.html',
      template: 'templates/reviews.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'welcome.html',
      template: 'templates/welcome.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'cancel.html',
      template: 'templates/cancel.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'success.html',
      template: 'templates/success.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'success-education.html',
      template: 'templates/success-education.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'enterprise.html',
      template: 'templates/enterprise.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'roadmap.html',
      template: 'templates/roadmap.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'updates.html',
      template: 'templates/updates.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'sitemap.html',
      template: 'templates/sitemap.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'chrome.html',
      template: 'templates/chrome.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'sales.html',
      template: 'templates/sales.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'edge.html',
      template: 'templates/edge.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'firefox.html',
      template: 'templates/firefox.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'in-the-news.html',
      template: 'templates/in-the-news.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'feedback.html',
      template: 'templates/feedback.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'compliance.html',
      template: 'templates/compliance.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'pricing.html',
      template: 'templates/pricing.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HTMLInlineCSSWebpackPlugin(),
    new CopyPlugin([{
        from: 'assets/setup/',
        to: ''
      },
      {
        from: 'assets/images/',
        to: 'assets/images/'
      }, {
        from: '../node_modules/@fortawesome/fontawesome-free/svgs/solid/',
        to: 'assets/svgs'
      }, {
        from: '../node_modules/@fortawesome/fontawesome-free/svgs/brands/',
        to: 'assets/svgs'
      }, {
        from: '../node_modules/@fortawesome/fontawesome-free/svgs/regular/',
        to: 'assets/svgs'
      }
    ]),

    new SitemapPlugin('https://www.helperbird.com', paths),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around

      importsDirectory: 'assets/',
      exclude: [/cname|app.css|robots.txt|/],
      offlineGoogleAnalytics: true,
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    }, {
      test: /\.(png|jpe?g|gif|xml|ico|svg|webmanifest)$/i,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: './docs'
      }
    }, ],
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
};