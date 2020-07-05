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
  "/success-education",
  "/cancel",
  "/friend/free",
  "/friend/dai",
  "/",
  "/feedback",
  "/compliance",
  "/testimonials",
  "/about",
  "/contact",
  "/pricing",
  "/support",
  "/sitemap",
  "/survey",
  "/firefox",
  "/features/",
  "/features/blacklist",
  "/features/zoom",
  "/features/text-to-speech",
  "/features/optical-character-recognition",
  "/features/screenshot",
  "/features/google-translate",
  "/features/styles",
  "/features/color-blindness",
  "/features/reader-mode-for-chrome-and-firefox",
  "/features/speech-to-text",
  "/features/ruler",
  "/features/notes",
  "/features/bookmarks",
  "/features/immersive-reader-for-chrome",
  "/features/shortcuts",
  "/features/analyze",
  "/features/adjust-letters-and-words",
  "/features/high-contrast",
  "/features/dictionary",
  "/features/cognitive-load",
  "/features/specialised-dyslexic-fonts",
  "/features/overlay",
  "/features/ad-blocker",
  "/features/cursor-control",
  "/features/privacy",
  "/sales",
  "/404",
  "/updates/24-1-1",
  "/updates/24-3-0",
  "/updates/24-2-4",
  "/updates/",
  "/updates/26-0-1",
  "/updates/25-1-0",
  "/updates/24-1-0",
  "/updates/24-2-2",
  "/updates/25-0-1",
  "/updates/25-0-0",
  "/updates/26-0-2",
  "/updates/24-1-2",
  "/blog/how-to-install-and-set-up-helperbird",
  "/blog/",
  "/blog/how-to-install-helperbird-in-edu-accounts",
  "/blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia",
  "/blog/signin",
  "/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console",
  "/partners/sascharoos",
  "/welcome",
  "/terms-of-service",
  "/compare/immersive-reader-by-microsoft-alternative",
  "/compare/snap-and-read-alternative",
  "/compare/read-and-write-alternative",
  "/chrome",
  "/success",
  "/enterprise",
  "/roadmap",
  "/reviews",
  "/edge",
  "/privacy",
  "/in-the-news"
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
      template: 'templates/index.pug',
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
      template: 'templates/about.pug',
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
      template: 'templates/404.pug',
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
      template: 'templates/support.pug',
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
      template: './templates/features/blacklist.pug',
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
      template: './templates/features/immersive-reader-for-chrome.pug',
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
      template: './templates/features/screenshot.pug',
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
      template: './templates/features/cognitive-load.pug',
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
      template: './templates/features/notes.pug',
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
      filename: 'features/analyze.html',
      template: './templates/features/analyze.pug',
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
      filename: 'features/bookmarks.html',
      template: './templates/features/bookmarks.pug',
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
      template: './templates/features/specialised-dyslexic-fonts.pug',
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
      template: './templates/features/color-blindness.pug',
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
      template: './templates/features/overlay.pug',
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
      template: './templates/features/speech-to-text.pug',
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
      template: './templates/features/dictionary.pug',
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
      template: './templates/features/privacy.pug',
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
      template: './templates/features/styles.pug',
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
      template: './templates/features/google-translate.pug',
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
      template: './templates/features/reader-mode-for-chrome-and-firefox.pug',
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
      template: './templates/features/text-to-speech.pug',
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
      template: './templates/features/high-contrast.pug',
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
      filename: 'friend/dai.html',
      template: './templates/friend/dai.pug',
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
      filename: 'friend/free.html',
      template: './templates/friend/free.pug',
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
      template: './templates/features/ruler.pug',
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
      filename: 'features/optical-character-recognition.html',
      template: 'templates/features/optical-character-recognition.pug',
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
      filename: 'features/cursor-control.html',
      template: 'templates/features/cursor-control.pug',
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
      filename: 'partners/sprialisconsulting.html',
      template: 'templates/partners/sascharoos.pug',
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
      filename: 'partners/sprialisconsulting.html',
      template: 'templates/partners/sprialisconsulting.pug',
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
      filename: 'blog/how-to-install-helperbird-in-edu-accounts.html',
      template: 'templates/blog/how-to-install-helperbird-in-edu-accounts.pug',
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
      filename: 'updates/26-0-2.html',
      template: 'templates/updates/26-0-2.pug',
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
      filename: 'updates/24-3-0.html',
      template: 'templates/updates/24-3-0.pug',
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
      filename: 'updates/26-0-1.html',
      template: 'templates/updates/26-0-1.pug',
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
      filename: 'updates/25-0-0.html',
      template: 'templates/updates/25-0-0.pug',
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
      filename: 'updates/25-1-0.html',
      template: 'templates/updates/25-1-0.pug',
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
      filename: 'updates/25-0-1.html',
      template: 'templates/updates/25-0-1.pug',
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
      filename: 'updates/24-1-0.html',
      template: 'templates/updates/24-1-0.pug',
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
      filename: 'updates/24-2-4.html',
      template: 'templates/updates/24-2-4.pug',
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
      filename: 'updates/24-2-2.html',
      template: 'templates/updates/24-2-2.pug',
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
      filename: 'updates/24-1-1.html',
      template: 'templates/updates/24-1-1.pug',
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
      filename: 'updates/24-1-2.html',
      template: 'templates/updates/24-1-2.pug',
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
      filename: 'features/index.html',
      template: 'templates/features/index.pug',
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
      filename: 'features/adjust-letters-and-words.html',
      template: 'templates/features/adjust-letters-and-words.pug',
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
      template: './templates/features/zoom.pug',
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
      filename: 'features/shortcuts.html',
      template: './templates/features/shortcuts.pug',
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
      filename: 'features/ad-blocker.html',
      template: './templates/features/ad-blocker.pug',
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
      filename: 'compare/snap-and-read-alternative.html',
      template: 'templates/compare/snap-and-read-alternative.pug',
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
      template: 'templates/compare/read-and-write-alternative.pug',
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
      template: 'templates/compare/immersive-reader-by-microsoft-alternative.pug',
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
      template: 'templates/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console.pug',
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
      filename: 'blog/how-to-install-and-set-up-helperbird.html',
      template: 'templates/blog/how-to-install-and-set-up-helperbird.pug',
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
      template: 'templates/blog/index.pug',
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
      template: 'templates/blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia.pug',
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
      template: 'templates/blog/signin.pug',
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
      template: 'templates/contact.pug',
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
      template: 'templates/privacy.pug',
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
      template: 'templates/terms-of-service.pug',
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
      template: 'templates/survey.pug',
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
      template: 'templates/reviews.pug',
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
      filename: 'testimonials.html',
      template: 'templates/testimonials.pug',
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
      template: 'templates/welcome.pug',
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
      template: 'templates/cancel.pug',
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
      template: 'templates/success.pug',
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
      template: 'templates/success-education.pug',
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
      template: 'templates/enterprise.pug',
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
      template: 'templates/roadmap.pug',
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
      filename: 'updates/index.html',
      template: 'templates/updates/index.pug',
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
      template: 'templates/sitemap.pug',
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
      template: 'templates/chrome.pug',
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
      template: 'templates/sales.pug',
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
      template: 'templates/edge.pug',
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
      template: 'templates/firefox.pug',
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
      template: 'templates/in-the-news.pug',
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
      template: 'templates/feedback.pug',
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
      template: 'templates/compliance.pug',
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
      template: 'templates/pricing.pug',
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



      exclude: [/(?:cname|CNAME|app.css|robots.txt|.DS_Store)$/],
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  module: {
    rules: [{
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },


      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
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
    ],
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
};