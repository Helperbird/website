/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "146be2e60380f507d8c70a2bebdd85ad"
  },
  {
    "url": "404.png",
    "revision": "705c095a9e5869af74def9b4b87ac1e8"
  },
  {
    "url": "about/index.html",
    "revision": "85e3a877e23630dd4928f0ed06a79770"
  },
  {
    "url": "about/index.png",
    "revision": "d73e548ec1590e13f0c4757f575ed02d"
  },
  {
    "url": "accessibility-statement/index.html",
    "revision": "fee9a8a4e2b99e8c367365ffe8603845"
  },
  {
    "url": "accessibility-statement/index.png",
    "revision": "9aee207c0305383ff538a720d05c252a"
  },
  {
    "url": "assets/css/blog.css",
    "revision": "ee7c1673f5dce3c32e8da8729faed551"
  },
  {
    "url": "assets/css/help.css",
    "revision": "6a577bab7ea5980db1c659c7157d95ad"
  },
  {
    "url": "assets/css/styles.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/images/blog/4-key-strategies-for-communicating-your-child-needs-to-schools/4-key-strategies-for-communicating-your-child-needs-to-schools.png",
    "revision": "5abbd87340e5367acd7a8c9bdcea2764"
  },
  {
    "url": "assets/images/blog/4-ways-to-be-more-accessible-on-social-media/4-ways-to-be-more-accessible-on-social-media.png",
    "revision": "9af934bfb49e302db54d626c2405b668"
  },
  {
    "url": "assets/images/blog/6-famous-people-with-dyslexia/6-famous-people-with-dyslexia.png",
    "revision": "1ce47ad19817f3246940bc30f59abf63"
  },
  {
    "url": "assets/images/blog/announcing-helperbird-for-websites/announcing-helperbird-for-websites.png",
    "revision": "05dca29aef207c5fe647455534c70c27"
  },
  {
    "url": "assets/images/blog/best-careers-for-people-with-dyslexia/dyslexic-architect.jpg",
    "revision": "cc881a82644228bf0001b2204bc79f9d"
  },
  {
    "url": "assets/images/blog/best-careers-for-people-with-dyslexia/dyslexic-girl.jpg",
    "revision": "7dbe7bdeff382f340568d48b79940b87"
  },
  {
    "url": "assets/images/blog/best-careers-for-people-with-dyslexia/graphic-designer.jpg",
    "revision": "a7cff713188f24f77980473a0e7332be"
  },
  {
    "url": "assets/images/blog/extra/crash-the-cat.png",
    "revision": "07d2f577fd96de4e9cac5ccc9c802e95"
  },
  {
    "url": "assets/images/blog/extra/robert-gabriel.png",
    "revision": "40adf89bfd7961eab055fa60e45dffa8"
  },
  {
    "url": "assets/images/blog/headsup/immersive-reader-too.png",
    "revision": "1f49694a1a572adf6d0bf6a184d7bfb0"
  },
  {
    "url": "assets/images/blog/helperbird-dyslexia-solutions-jamies-story/helperbird-ruler.png",
    "revision": "6f0c61d8c02ae8fa1524fb1581ab842b"
  },
  {
    "url": "assets/images/blog/helperbird-pdf-reader-rorys-story/pdf-reader.png",
    "revision": "37a995f58e6de58ef1af5a537b992685"
  },
  {
    "url": "assets/images/blog/helperbirds-winner-of-the-2021-chromebook/helperbirds-winner-of-the-2021-chromebook.jpg",
    "revision": "1ce11bf8c75498807ba2ebd53f914308"
  },
  {
    "url": "assets/images/blog/helping-students-thrive-with-helperbirds-accessibility-tools/helperbird-tools.png",
    "revision": "cd4d927dbd3e60baf3cc9df0c87ae6aa"
  },
  {
    "url": "assets/images/blog/how-extracurriculars-boost-self-esteem-in-dyslexic-learners/how-extracurriculars-boost-self-esteem-in-dyslexic-learners.png",
    "revision": "61a65f28d52f19819db1985d1770f17d"
  },
  {
    "url": "assets/images/blog/how-to-avoid-wfh-burnout-and-maximize-productivity/avoid-wfh-burnout-and-maximize-productivity.jpg",
    "revision": "a2fbe5a246e9607f0d1e2c8baa9a8dd4"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_1.png",
    "revision": "22f72b7698c21a6483ba58075e85040e"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_2.png",
    "revision": "46ed6d569c8a5647bfba6ca9d55e28ce"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_3.png",
    "revision": "b616ca17c37a0240e202d70c8b5ec962"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_4.png",
    "revision": "b16aecc43116a9ab2772d3c2176f0367"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_5.png",
    "revision": "2e9b605d38a645aac1e65ab5548b04b9"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_6.png",
    "revision": "78daa61a9868f223f1aa452e44a8b5b6"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_7.png",
    "revision": "b2a28918f6091a84591edbe08e12422f"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_8.png",
    "revision": "24d419781defd0f45228065a5f4340d9"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_9.png",
    "revision": "4c1ec38a755de8b07d170a81222dc14b"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_1.png",
    "revision": "7f6fc9815a15daba8ee03177d571bf54"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_10.png",
    "revision": "dc49e9bd08dfca6de898ca0069b32c4b"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_2.png",
    "revision": "0d2475d94551cac7a0dbd4f737197425"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_3.png",
    "revision": "ff00ef81a7eccca2691b0b688d796364"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_4.png",
    "revision": "3c7f8a868066fc1bc9bfe35bfc791863"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_5.png",
    "revision": "d31bbc5a4cdc760dc903d08ffba67837"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_6.png",
    "revision": "e4d574e134450e7e336ac9449fd428b1"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_7.png",
    "revision": "b17c4b6fed896957f16914ef0e756af9"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_8.png",
    "revision": "a66517e66b32f2287669458133fae457"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_9.png",
    "revision": "e5e1d02e20ffdbdde0610a0a411a0158"
  },
  {
    "url": "assets/images/blog/how-to-keep-wfh-employees-engaged-and-motivated/how-to-keep-wfh-employees-engaged-and-motivated.jpg",
    "revision": "d074ec476a9ad522137fcf142ce6fca9"
  },
  {
    "url": "assets/images/blog/how-to-use-immersive-reader-in-google-docs/highlight-the-text-in-google-docs-to-use-immersive-reader.png",
    "revision": "d702e9b1c4509d622a884e3305c87318"
  },
  {
    "url": "assets/images/blog/how-to-use-immersive-reader-in-google-docs/how-to-turn-on-helperbirds-google-toolbar.png",
    "revision": "8f54bc47a1c4ffae61de3ce4612413dd"
  },
  {
    "url": "assets/images/blog/how-to-use-immersive-reader-in-google-docs/immersive-reader-loading-in-google-docs.png",
    "revision": "12e0962df1aa1ed8944b61f2feeb90a0"
  },
  {
    "url": "assets/images/blog/how-to-use-immersive-reader-in-google-docs/Screenshot 2024-02-01 at 11.52.18 PM.png",
    "revision": "12e0962df1aa1ed8944b61f2feeb90a0"
  },
  {
    "url": "assets/images/blog/immersive-reader-marketing-alexs-story/immersive-reader.png",
    "revision": "f8bc7c8b9dcf62fe63b745eb9eaf2d8e"
  },
  {
    "url": "assets/images/blog/new-blog-2022/10-essential-assistive-technology-tools.png",
    "revision": "125cf8c240b0c42b9cf46e6e7c1b6ca6"
  },
  {
    "url": "assets/images/blog/new-blog-2022/accessible-social-media.png",
    "revision": "00841be7fb287bb2bf8c1cb5d4088a36"
  },
  {
    "url": "assets/images/blog/new-blog-2022/add-safari-extensions.png",
    "revision": "d33dcea3b50a52f607ff501cb7bd6d8c"
  },
  {
    "url": "assets/images/blog/new-blog-2022/an-8-step-guide-to-creating-accessible-emails-for-those-with-dyslexia.png",
    "revision": "2e1245925a1116f7215d0a51cbac7eee"
  },
  {
    "url": "assets/images/blog/new-blog-2022/avoid-burnout.png",
    "revision": "35711df378d87a1db686c0be2ab9c457"
  },
  {
    "url": "assets/images/blog/new-blog-2022/best-careers-for-people-with-dyslexia.png",
    "revision": "f0bf06387858dfee0bd57beb9ecf37e5"
  },
  {
    "url": "assets/images/blog/new-blog-2022/boosting-classroom-accessibility.png",
    "revision": "fb31001c72269f2876187ff4db804dd9"
  },
  {
    "url": "assets/images/blog/new-blog-2022/celebrating-10-years-of-helperbird.png",
    "revision": "47d8b14615cfa601acef530bf3b0146f"
  },
  {
    "url": "assets/images/blog/new-blog-2022/chrome-extensions-teachers.png",
    "revision": "fc14da30fd0625c9891be6eea02bc527"
  },
  {
    "url": "assets/images/blog/new-blog-2022/coppa-ferpa.png",
    "revision": "ac745acca05830fcca96a94b0dfb1b0e"
  },
  {
    "url": "assets/images/blog/new-blog-2022/employees-engaged.png",
    "revision": "5b751f97d9dab2492cec865505574b6a"
  },
  {
    "url": "assets/images/blog/new-blog-2022/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird.png",
    "revision": "77594a799e5c73151bd025dd543265b9"
  },
  {
    "url": "assets/images/blog/new-blog-2022/film-tv-characters.png",
    "revision": "bdc4c2c30f99cb9c78cee20d3cbd6bb1"
  },
  {
    "url": "assets/images/blog/new-blog-2022/fostering-inclusivity-at-work.png",
    "revision": "4099bd11711f27c1a505b8ef9db2503e"
  },
  {
    "url": "assets/images/blog/new-blog-2022/importance-dyslexia-friendly-design-websites-apps.png",
    "revision": "9529d8c7ae25a44a06d08e03201e1325"
  },
  {
    "url": "assets/images/blog/new-blog-2022/ipad-productivity-apps.png",
    "revision": "f364dfa21b33d6f8a033066743864b64"
  },
  {
    "url": "assets/images/blog/new-blog-2022/ipads-in-class.png",
    "revision": "3c7a0d6600699f703ac840412cdae0d5"
  },
  {
    "url": "assets/images/blog/new-blog-2022/productivity-microsoft-edge.png",
    "revision": "0d171b2dfff6dfe7be9e69bb4d71a764"
  },
  {
    "url": "assets/images/blog/new-blog-2022/productivity-tips.png",
    "revision": "1632babe14f1f26348af5396738ec28a"
  },
  {
    "url": "assets/images/blog/new-blog-2022/redeem.png",
    "revision": "9c2a5c59258ed370ae40820a00422c29"
  },
  {
    "url": "assets/images/blog/new-blog-2022/safari-extensions.png",
    "revision": "092d29b4047e6b5e4d48a0aaf07a5cd3"
  },
  {
    "url": "assets/images/blog/positive/GOODDAY-01.png",
    "revision": "6cdf40ef60d56452ac58b1b51cdf9164"
  },
  {
    "url": "assets/images/blog/setup/setup_1.png",
    "revision": "d40c47575bca95f8d1c6e2537ea44a41"
  },
  {
    "url": "assets/images/blog/setup/setup_2.png",
    "revision": "a9f6838346c57b342858619fc65c03d2"
  },
  {
    "url": "assets/images/blog/setup/setup_3.png",
    "revision": "a859a31c5ee09332d692e772e49c5650"
  },
  {
    "url": "assets/images/blog/setup/setup_4.png",
    "revision": "81ef29f922cc33084ca73e43a2fab1b7"
  },
  {
    "url": "assets/images/blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work.jpg",
    "revision": "b7f06a93a37f219fa474aed5d39990f3"
  },
  {
    "url": "assets/images/blog/teacher-appreciation-week-2020-dyslexia-story/teacher-appreciation-week-2020-dyslexia-story.png",
    "revision": "40701ffe353d96081bc38ba1c6c7a9d7"
  },
  {
    "url": "assets/images/blog/thanksgiving/GIVE-THANKS-01.png",
    "revision": "1b5b4ff91b67a2bafef0814241ff2dd4"
  },
  {
    "url": "assets/images/blog/top-five-features-of-helperbird-to-help-your-students-in-2021/top-five-features-of-helperbird-to-help-your-students-in-2021.png",
    "revision": "1466f018c557c71f924a0d01f48765aa"
  },
  {
    "url": "assets/images/blog/top-five/helperbird.jpg",
    "revision": "8759e3b26bc055abaec09bc8c31e37fd"
  },
  {
    "url": "assets/images/blog/top-five/kapwing.png",
    "revision": "39777f1e0d3d9fecfdca4024209520b8"
  },
  {
    "url": "assets/images/blog/top-five/speechify.jpg",
    "revision": "558be60e841b3c5a9e47a689090a7302"
  },
  {
    "url": "assets/images/blog/top-five/toucan.jpg",
    "revision": "3a89209dfb3f0b06ca86e61c4af77ea5"
  },
  {
    "url": "assets/images/blog/tv-and-movie-characters-with-dyslexia/tv-and-movie-characters-with-dyslexia.png",
    "revision": "2f179dbc45428b2c7780aeddc1837525"
  },
  {
    "url": "assets/images/compare/helperbird.png",
    "revision": "92662e004feca1d86e375f24a169b336"
  },
  {
    "url": "assets/images/compare/menu/microsoft.png",
    "revision": "bb82549f0a4d56f80d8dfb29eecb4dfa"
  },
  {
    "url": "assets/images/compare/menu/read-and-write.png",
    "revision": "b5bdb02aa8a0544d8f9c146f29dac325"
  },
  {
    "url": "assets/images/compare/menu/snap-and-read.png",
    "revision": "3ac6e9e0907057ea8d32f69dd376b324"
  },
  {
    "url": "assets/images/compare/read.png",
    "revision": "a4daeea36491b4fd84730481ca689904"
  },
  {
    "url": "assets/images/compare/reader.png",
    "revision": "44be5c571cd236c376c414cdba7f3867"
  },
  {
    "url": "assets/images/compare/snap.png",
    "revision": "61568f08552c284359b3b6559dd976c4"
  },
  {
    "url": "assets/images/compare/snap.svg",
    "revision": "1baddbc4bbe2ebedd034613a9d0df934"
  },
  {
    "url": "assets/images/favicon.ico",
    "revision": "0b53a11c7110e4cb4ed5f0b196d88282"
  },
  {
    "url": "assets/images/fresh-start/cta-one.png",
    "revision": "af569344f5b26e7a910d9fb36a2f62bc"
  },
  {
    "url": "assets/images/fresh-start/reading.png",
    "revision": "5b324cc40c533bca482cf8d182b27612"
  },
  {
    "url": "assets/images/fresh-start/writing.png",
    "revision": "20d6db032b34b0de322fa660b5fed477"
  },
  {
    "url": "assets/images/graph/compare/immersive-reader-vs-helperbird.png",
    "revision": "f2e655500699bb7e4371f383328de445"
  },
  {
    "url": "assets/images/graph/compare/read-and-write-vs-helperbird.png",
    "revision": "367d551f936de1fee62be95dd90bb81b"
  },
  {
    "url": "assets/images/graph/compare/snap-and-read-vs-helperbird.png",
    "revision": "57634a28a50b1b360bd010b74448ec3b"
  },
  {
    "url": "assets/images/graph/feature/adjust-letter.png",
    "revision": "f15e5e8647eda76c749276bfd78e1fa7"
  },
  {
    "url": "assets/images/graph/feature/alt.png",
    "revision": "c91624ea614ac48c8fbe5a95da9d6fe0"
  },
  {
    "url": "assets/images/graph/twitter.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
  },
  {
    "url": "assets/images/guide/annonations/a-sticky-note-will-appear.png",
    "revision": "561ef0ea6a0853bb7c8c3af03e38c628"
  },
  {
    "url": "assets/images/guide/annonations/all-done.png",
    "revision": "1a7f3071410d1a18eb22ecde7461e2f0"
  },
  {
    "url": "assets/images/guide/annonations/highlight-the-text-you-want-use.png",
    "revision": "8cf8e34f13cb050d5fe888c7d64c9b6c"
  },
  {
    "url": "assets/images/guide/annonations/make-sure-highlight-menu-is-on.png",
    "revision": "a237aa689550e8f4df9bc3a9e7ca9646"
  },
  {
    "url": "assets/images/guide/annonations/you-can-change-the-color.png",
    "revision": "17930e4263f8ba6f322612f122ba319e"
  },
  {
    "url": "assets/images/guide/cancel/click-cancel.png",
    "revision": "594f423215f5c8b1089798263e77f7c3"
  },
  {
    "url": "assets/images/guide/cancel/click-manage.png",
    "revision": "41a7af28b3d92269dcd1eb5e8131fafa"
  },
  {
    "url": "assets/images/guide/cancel/confirm-with-cancel-button.png",
    "revision": "a0bc50a5ff1498109100f431a7d12e64"
  },
  {
    "url": "assets/images/guide/cancel/open-settings-cog-click-settings.png",
    "revision": "fac482a1c6209b2616c45dbca49647f9"
  },
  {
    "url": "assets/images/guide/cancel/you-are-now-cancel.png",
    "revision": "2cd2b061491d9029d81cec3c4b765f4f"
  },
  {
    "url": "assets/images/guide/menu_immersive_reader.png",
    "revision": "a2f35719cdc9a249087ee6278359ae63"
  },
  {
    "url": "assets/images/guide/reading-mode/open-the-helperbird-extension.png",
    "revision": "df3cf1cc2c64e4795e9bda61c369f4d8"
  },
  {
    "url": "assets/images/guide/reading-mode/turn-it-on.png",
    "revision": "202fa90f369280cac1e615bb4f2dc6e1"
  },
  {
    "url": "assets/images/guide/reading-mode/visit-website.png",
    "revision": "2980b86223f19181c35ee5e65d60fbc0"
  },
  {
    "url": "assets/images/guide/reading-mode/you-can-also-change-the-theme.png",
    "revision": "51c64f8b87da0290016571741a93cc86"
  },
  {
    "url": "assets/images/guide/shortcuts/input-the-keys-you-want-to-use.png",
    "revision": "dcc7d22112b556d3ca9851df84f63d68"
  },
  {
    "url": "assets/images/guide/shortcuts/open-menu-go-to-more-tools.png",
    "revision": "c638e9072cd43b281b3a9473cbb94d31"
  },
  {
    "url": "assets/images/guide/shortcuts/right-click-the-side-menu.png",
    "revision": "9f5a16e9b38d18adfac62b1dd7e97379"
  },
  {
    "url": "assets/images/home/chrome.png",
    "revision": "16b9ac116a44042bbecdb9db475fbf3a"
  },
  {
    "url": "assets/images/home/companies/nevada.png",
    "revision": "41a32a1bf7e3ee0133cd3d54ffcf178d"
  },
  {
    "url": "assets/images/home/companies/rio.png",
    "revision": "058c3c2332282debec81a68cdafc0e47"
  },
  {
    "url": "assets/images/home/companies/shell.png",
    "revision": "42535d5a188a372d32f8f34766376d12"
  },
  {
    "url": "assets/images/home/companies/sowashco.png",
    "revision": "feba1ef162c9913459f6048ccc9a43d5"
  },
  {
    "url": "assets/images/home/docs.png",
    "revision": "ff593ec78947b52c024c05e4685abdda"
  },
  {
    "url": "assets/images/home/edge.png",
    "revision": "08216bf8bb6261c731578bed2a5e7f3f"
  },
  {
    "url": "assets/images/home/firefox.png",
    "revision": "baa382278acf877d8c345a79f533893a"
  },
  {
    "url": "assets/images/home/heros/helperbird-ios-homepage.png",
    "revision": "fa00665c59d6f936c5027559074db742"
  },
  {
    "url": "assets/images/home/ios.png",
    "revision": "c86f344536a6a75966d46a1b0faba193"
  },
  {
    "url": "assets/images/home/safari.png",
    "revision": "b748bd8e260420ae375777e488116071"
  },
  {
    "url": "assets/images/home/screenshots/accessibility.png",
    "revision": "0f1563bc172c54369af4e8f8e5f5f91b"
  },
  {
    "url": "assets/images/home/screenshots/reading.png",
    "revision": "0ecb04573308bc13a92b7e72fea76c89"
  },
  {
    "url": "assets/images/home/screenshots/tools.png",
    "revision": "eeea0e8947bbc5ca30e9ceb96346b354"
  },
  {
    "url": "assets/images/home/screenshots/writing.png",
    "revision": "b515370b6fd5f8b3828a44bb886759c1"
  },
  {
    "url": "assets/images/home/slides.png",
    "revision": "5691702b1125ba1d12032b2efedee891"
  },
  {
    "url": "assets/images/logo/appsformypc.png",
    "revision": "f7f9f18050103bd19ab01564f972e0fc"
  },
  {
    "url": "assets/images/logo/cloverleafs.png",
    "revision": "0d67b0a5bc07107a9d383a2a7879c6fb"
  },
  {
    "url": "assets/images/logo/cloverleafs.svg",
    "revision": "aaad86e890035d8d9c9fe49a35b8dfd9"
  },
  {
    "url": "assets/images/logo/edlio.png",
    "revision": "5fdc9d4231ec7fb77cddb95d2e2c97f9"
  },
  {
    "url": "assets/images/logo/edutech.png",
    "revision": "41ea7192324050b6e1d10b46c7ee3238"
  },
  {
    "url": "assets/images/logo/gusto.png",
    "revision": "d19897f18bd26bddb0f41443265ae1fb"
  },
  {
    "url": "assets/images/logo/helperbird-logo.svg",
    "revision": "45fa3e4fe955e4d8a9fbde17cc2d728d"
  },
  {
    "url": "assets/images/logo/hope.jpg",
    "revision": "2dc8983c0f79228335cebd1c3f57dacc"
  },
  {
    "url": "assets/images/logo/howtogeek.png",
    "revision": "a8f74713c327c18f3a9ada9a94140b79"
  },
  {
    "url": "assets/images/logo/ilovefreesoftware.png",
    "revision": "bbbc48824a055368d91ce05e0ee92a5e"
  },
  {
    "url": "assets/images/logo/indiehackers_logo.png",
    "revision": "423d5d58b347972cc1af25fb9a817666"
  },
  {
    "url": "assets/images/logo/logo_pentahoV2.png",
    "revision": "be43d04e8ad12232daa1d457046f1b13"
  },
  {
    "url": "assets/images/logo/microsoft.png",
    "revision": "905988bf0068ecffde056777e70f904c"
  },
  {
    "url": "assets/images/logo/ncu.png",
    "revision": "519d9bda4fa58205cacf58b388c7a52d"
  },
  {
    "url": "assets/images/logo/neveda.png",
    "revision": "a1039f6a7d6b864b3194f826ddab2c09"
  },
  {
    "url": "assets/images/logo/nexus.png",
    "revision": "3644b734c2b12ecbd3d98e739d4d42a7"
  },
  {
    "url": "assets/images/logo/optologo.png",
    "revision": "59ce2f81a916e81f1c2ef767cf0399d0"
  },
  {
    "url": "assets/images/logo/producthunt.png",
    "revision": "a5bdbf158e8ce7a382b48fb20c2dedc9"
  },
  {
    "url": "assets/images/logo/rio-texas.png",
    "revision": "2d7714068d1d2abd07bfb5c6b75f7851"
  },
  {
    "url": "assets/images/logo/san.png",
    "revision": "bd0889493437ab04a2d995c98a2a0703"
  },
  {
    "url": "assets/images/logo/school.png",
    "revision": "8fdfb1d546fd298959337ac46d499ef7"
  },
  {
    "url": "assets/images/logo/smashing-magazine-logo.png",
    "revision": "db8c8d47ced753042cb9844457ecf010"
  },
  {
    "url": "assets/images/logo/softpedia.png",
    "revision": "d51adacdf6937d0ca53f6fdccd00f4fd"
  },
  {
    "url": "assets/images/logo/stars.svg",
    "revision": "b4bb97971d0b21587909d7fa5e2ba69f"
  },
  {
    "url": "assets/images/logo/tek.png",
    "revision": "c9b28d7b85aff2f1fafd8e2347901fdb"
  },
  {
    "url": "assets/images/logo/ticbeat-logo.png",
    "revision": "6b9e2090222b2cc60c99b7b518cd8802"
  },
  {
    "url": "assets/images/logo/toronto.png",
    "revision": "7d31e06dddb8d9c9a0208c0ddd855583"
  },
  {
    "url": "assets/images/logo/ucc.png",
    "revision": "e437023f5c1a0c268ca2df94bcac38db"
  },
  {
    "url": "assets/images/logo/Untitled design.svg",
    "revision": "45fa3e4fe955e4d8a9fbde17cc2d728d"
  },
  {
    "url": "assets/images/partners/adriana-garcia.jpg",
    "revision": "60acbf46eaaed2587d12479b50858b08"
  },
  {
    "url": "assets/images/partners/irene.png",
    "revision": "b2bec23e2a7bdf7bbdcb898e0dd6fb6c"
  },
  {
    "url": "assets/images/people/alan.png",
    "revision": "1566b63c4c11c2e7a58d2ef5716f402b"
  },
  {
    "url": "assets/images/people/ken.png",
    "revision": "c6fc8d6cc9e8ef9816e4cc3c4153db23"
  },
  {
    "url": "assets/images/people/rob-about-three.jpg",
    "revision": "0d003b2d96d462aa1ef7b39b6ee4ad58"
  },
  {
    "url": "assets/images/people/rob-about-two.jpg",
    "revision": "6a6dbc80833084b64857a48d0ed48889"
  },
  {
    "url": "assets/images/people/rob-about.png",
    "revision": "faaa91b441569b77be8302563da332d5"
  },
  {
    "url": "assets/images/people/rob.png",
    "revision": "3dde1bb55e45680c23ff5dfbfc71f7c8"
  },
  {
    "url": "assets/images/people/steve.png",
    "revision": "844089ab12d5fb50f9db287b657e9b93"
  },
  {
    "url": "assets/images/people/sue.png",
    "revision": "5230d42884bbee61427d29b5545e3f70"
  },
  {
    "url": "assets/images/products/chrome/helperbird-for-google-chrome.png",
    "revision": "2224e21ebb95c867d2e6386875f20e10"
  },
  {
    "url": "assets/images/products/edge/edge-screenshot.png",
    "revision": "ceadd25bfdfd3443bcf1cb7a25eab771"
  },
  {
    "url": "assets/images/products/firefox/firefox-screenshot.png",
    "revision": "95b266f38c52f42d2b30b72873b496d7"
  },
  {
    "url": "assets/images/products/google-docs/google-docs-screenshot-of-helperbird.png",
    "revision": "4f188fae8f942f839e8e9cbd7f56b9df"
  },
  {
    "url": "assets/images/products/google-docs/header-google-docs.png",
    "revision": "8aeed6d98942f5b178c9b77343a27c0f"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_eight.png",
    "revision": "43f9d5664c6558a0d59b4e3d7735bd27"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_five.png",
    "revision": "7bd04d19b84bb4b8516c2002f4116822"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_four.png",
    "revision": "86321bf9b04ef677d1cacf3d8fc61173"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_one.png",
    "revision": "5d38704c76bdc55813c553d0e5423586"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_seven.png",
    "revision": "bbd136bb347f17c503dcde349af577d9"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_six.png",
    "revision": "5d38704c76bdc55813c553d0e5423586"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_three.png",
    "revision": "574311dbedd8928fc45409b1337915ec"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_two.png",
    "revision": "bbd136bb347f17c503dcde349af577d9"
  },
  {
    "url": "assets/images/products/ipad-iphone/helperbird-iphone-ipad-screenshot.png",
    "revision": "8460c87f8abb068743df8b35b3da4f69"
  },
  {
    "url": "assets/images/products/ipad-iphone/helperbird-running-on-iphone.png",
    "revision": "724438748d697969ed4c338aac93499b"
  },
  {
    "url": "assets/images/products/ipad-iphone/helperbirds-iphone-app-running.png",
    "revision": "6d1fe815501c0e54124c75e12089c04d"
  },
  {
    "url": "assets/images/pwa/logo/128.png",
    "revision": "949a368273c88974cf8df76883d19353"
  },
  {
    "url": "assets/images/pwa/logo/144.png",
    "revision": "f6f3b6a69cf6cead4e27ae79547fd51e"
  },
  {
    "url": "assets/images/pwa/logo/16.png",
    "revision": "a81778e1af8de0c00a0ccfe8321b4d99"
  },
  {
    "url": "assets/images/pwa/logo/32.png",
    "revision": "d71ac3a4eab1ccf31646b6e2d9dd6f8e"
  },
  {
    "url": "assets/images/pwa/logo/48.png",
    "revision": "18d531130463fa4e07bc281b0ffce674"
  },
  {
    "url": "assets/images/pwa/logo/512.png",
    "revision": "f6f3b6a69cf6cead4e27ae79547fd51e"
  },
  {
    "url": "assets/images/pwa/logo/full.png",
    "revision": "f6f3b6a69cf6cead4e27ae79547fd51e"
  },
  {
    "url": "assets/images/pwa/logo/white-helperbird-background.png",
    "revision": "f835d1c38c3730bbdef45e9f23b6bfc4"
  },
  {
    "url": "assets/images/recommends/beeline.png",
    "revision": "c0e0c21cbd60668f134084fa51c5a841"
  },
  {
    "url": "assets/images/recommends/beeline.webp",
    "revision": "35e8ee54668988ecaa7fd3703f8efd20"
  },
  {
    "url": "assets/images/recommends/educhange.png",
    "revision": "6c966206621fce45611f756f5b7cb700"
  },
  {
    "url": "assets/images/recommends/lexend.png",
    "revision": "c912306123f65b2f8fb946af50876d71"
  },
  {
    "url": "assets/images/recommends/opendyslexic.png",
    "revision": "22f1d92e24080194afb303a69c4b27b2"
  },
  {
    "url": "assets/images/recommends/toucan (1).png",
    "revision": "2b1b26ff3090c171c165f24f2889b912"
  },
  {
    "url": "assets/images/recommends/toucan.png",
    "revision": "2b1b26ff3090c171c165f24f2889b912"
  },
  {
    "url": "assets/images/reviews/brad.png",
    "revision": "95188d08404d34fc6a4137f83296299e"
  },
  {
    "url": "assets/images/reviews/colm.png",
    "revision": "68b36dd240c57b3c32238f7e63bdfec1"
  },
  {
    "url": "assets/images/reviews/steven.png",
    "revision": "fe5ed1f553ad5eb8d559702c36ce4116"
  },
  {
    "url": "assets/images/reviews/susi.png",
    "revision": "d8593cc90567092bcdaea6de6a0c9807"
  },
  {
    "url": "assets/images/reviews/vladimir.jpg",
    "revision": "25416888a6b85a2f014ffbb22a325f7a"
  },
  {
    "url": "assets/images/social/android-chrome-192x192.png",
    "revision": "57c0ef1860d837efc960695033c7aa13"
  },
  {
    "url": "assets/images/social/android-chrome-512x512.png",
    "revision": "de4887ec904aca54e02b307c91fbf76f"
  },
  {
    "url": "assets/images/social/apple-touch-icon-precomposed.png",
    "revision": "75a46b60da6af0f122e2962fcdbf0d65"
  },
  {
    "url": "assets/images/social/apple-touch-icon.png",
    "revision": "75a46b60da6af0f122e2962fcdbf0d65"
  },
  {
    "url": "assets/images/social/favicon-16x16.png",
    "revision": "72352ece0e7fc65825ae28ed8a495021"
  },
  {
    "url": "assets/images/social/favicon-32x32.png",
    "revision": "df3e98d37bf5c662043b725b36a399ac"
  },
  {
    "url": "assets/images/social/favicon.ico",
    "revision": "67f7f6998bacf61358cf0f44c552c41c"
  },
  {
    "url": "assets/images/social/favicon.png",
    "revision": "712f812a95796355adbea8dd21db639b"
  },
  {
    "url": "assets/images/social/maskable_icon_x128.png",
    "revision": "09e88dff66b33f40e62e3a4c3befac66"
  },
  {
    "url": "assets/images/social/maskable_icon_x144.png",
    "revision": "b32373c9a2803e2135a950037bbdb6e1"
  },
  {
    "url": "assets/images/social/maskable_icon_x192.png",
    "revision": "853ee20970fb4af2738688d0d401548d"
  },
  {
    "url": "assets/images/social/maskable_icon_x384.png",
    "revision": "8dd900281a06098f4ac7dcc0b5eb7819"
  },
  {
    "url": "assets/images/social/maskable_icon_x48.png",
    "revision": "a6c7bfa3de2620aa6df43729c0a95616"
  },
  {
    "url": "assets/images/social/maskable_icon_x512.png",
    "revision": "5d1e472b42deab0cc63a9fc89b35e14b"
  },
  {
    "url": "assets/images/social/maskable_icon_x72.png",
    "revision": "2a6d6f4be8f015a0667ea2e4c3d65392"
  },
  {
    "url": "assets/images/social/maskable_icon_x96.png",
    "revision": "175de39f7d51d58446404c650b6b3cf0"
  },
  {
    "url": "assets/images/social/maskable_icon.png",
    "revision": "5d1e472b42deab0cc63a9fc89b35e14b"
  },
  {
    "url": "assets/images/social/mstile-150x150.png",
    "revision": "634011a10c98efaa6a1f3f95b3cac7c2"
  },
  {
    "url": "assets/images/social/safari-pinned-tab.svg",
    "revision": "8fa99aa859ecd9983a4e5bfd65b38ce6"
  },
  {
    "url": "assets/images/updates/24-1-0/controls.png",
    "revision": "fba0c0ae8029f0123f3fa88cfa4c00fd"
  },
  {
    "url": "assets/images/updates/24-1-0/full.png",
    "revision": "05fe31f87d8474c72a4c273da2133f58"
  },
  {
    "url": "assets/images/updates/24-1-0/loader.png",
    "revision": "7e182207d6dd87cee597516b747a9cc8"
  },
  {
    "url": "assets/images/updates/24-1-0/pause.png",
    "revision": "95a6164e6cd7b1271b5da489a40198fd"
  },
  {
    "url": "assets/images/updates/24-1-1/analyze-1.png",
    "revision": "3e01265da8220649b0eaa79ec364ba76"
  },
  {
    "url": "assets/images/updates/24-1-1/analyze.png",
    "revision": "66a430e9205d152f587cf6dfea4c09b6"
  },
  {
    "url": "assets/images/updates/24-1-2/analyze-1.png",
    "revision": "3e01265da8220649b0eaa79ec364ba76"
  },
  {
    "url": "assets/images/updates/24-1-2/analyze.png",
    "revision": "66a430e9205d152f587cf6dfea4c09b6"
  },
  {
    "url": "assets/images/updates/24-2-2/notes-1.png",
    "revision": "85dfdceae6698d7b2deac7466d4153dd"
  },
  {
    "url": "assets/images/updates/24-2-2/notes-2.png",
    "revision": "7e45fc8c0de41a9d32d7eadbc206d115"
  },
  {
    "url": "assets/images/updates/24-3-0/adblocker.png",
    "revision": "bd084ec37e76768500d1ca7309b35af3"
  },
  {
    "url": "assets/images/updates/24-3-0/font.png",
    "revision": "5d80959d14384ed82be97bb75a810a4f"
  },
  {
    "url": "assets/images/updates/24-3-0/reading-mode.png",
    "revision": "9438fff003ced5f2da00715203bac174"
  },
  {
    "url": "assets/images/updates/24-3-0/settings.png",
    "revision": "2c2d93fbd4e680a19abe94b1fac1bb81"
  },
  {
    "url": "assets/images/updates/24-3-0/time.png",
    "revision": "5e24b7b21a30c9b722527ad9c550ae70"
  },
  {
    "url": "assets/images/updates/25-0-0/font.png",
    "revision": "31da90dbecae8372a74ddb6ed919a8e0"
  },
  {
    "url": "assets/images/updates/25-0-0/line.png",
    "revision": "c3a1a8ca82a6929a9f8530d9ad151789"
  },
  {
    "url": "assets/images/updates/25-0-0/redesign.png",
    "revision": "4bec78b8fe6b6ac1b4e97c7bd1b93afb"
  },
  {
    "url": "assets/images/updates/25-0-0/shortcut.png",
    "revision": "93ee9c5c3f85bea12b48301379e4129b"
  },
  {
    "url": "assets/images/updates/25-1-0/ruler.png",
    "revision": "86d4409a110520acd79574aaeeccf473"
  },
  {
    "url": "assets/images/updates/26-0-1/dication.png",
    "revision": "1f85b9323ff78fa55161472b29659015"
  },
  {
    "url": "assets/images/updates/26-0-1/exported.png",
    "revision": "62ce04c1dd60ec5ab4bd14cbbc0bd400"
  },
  {
    "url": "assets/images/updates/26-0-1/extacted.png",
    "revision": "3f7d21e0ae25a35e27fdeb4971d98dd3"
  },
  {
    "url": "assets/images/updates/26-0-1/learn-more.png",
    "revision": "667cce21cdb27897497628737c6c1a9e"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-1.png",
    "revision": "4e7e169142285c7ba9bb4464a20bbedc"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-2.png",
    "revision": "4f92b786b29c618bf2143bf4b71ec2b9"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-3.png",
    "revision": "ea4ac62b31bf18c22990acddb0597027"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-4.png",
    "revision": "e3c0690f4cbf04777ea5679df6b4f0f4"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-5.png",
    "revision": "6ef82cc4b1388ec0727a8c2ca7bfe922"
  },
  {
    "url": "assets/images/updates/26-0-1/spacing.png",
    "revision": "dd1530bea7bd02ec7b740c2c9cd35523"
  },
  {
    "url": "assets/images/updates/26-1-1/highlights.png",
    "revision": "34e710f1bc72d7afc985f8e2cc881674"
  },
  {
    "url": "assets/images/updates/26-1-1/signin.png",
    "revision": "bf56b68d73df6d7b78f25f7c195e7daf"
  },
  {
    "url": "assets/images/updates/27-0-0/highlights.png",
    "revision": "d5d7318d31d9f209051783d159c9b67e"
  },
  {
    "url": "assets/images/updates/27-0-0/line.png",
    "revision": "fe88ddbe421558d68f3c35cbe25fa8a3"
  },
  {
    "url": "assets/images/updates/27-0-0/mute.png",
    "revision": "5a12bea33925841a348e117e7cd81b37"
  },
  {
    "url": "assets/images/updates/27-0-0/scroll.png",
    "revision": "34ec4368baeee173a0667b7fd02c059f"
  },
  {
    "url": "assets/images/updates/27-1-0/color.png",
    "revision": "f1a6be0b27d531017c20d2e081c0420e"
  },
  {
    "url": "assets/images/updates/27-1-0/notes.png",
    "revision": "4d3c17598144b35be1204206ab9de2dc"
  },
  {
    "url": "assets/images/updates/27-1-0/pin.png",
    "revision": "32b8984e20b5a2f02683f833110bc662"
  },
  {
    "url": "assets/images/updates/30-4-0/HBmenu1.png",
    "revision": "d947e60fc39024dc8e3e865df8e96027"
  },
  {
    "url": "assets/images/updates/30-4-0/HBmenu2.png",
    "revision": "fc5882b3b56d19eb5068af826ed2a7c2"
  },
  {
    "url": "assets/images/updates/33-0-0/banner.png",
    "revision": "c43b0094b3a1c7f54beb47e642fce219"
  },
  {
    "url": "assets/images/updates/33-0-0/design.png",
    "revision": "8f8f5ae6095166c25ea257c00ff4d76c"
  },
  {
    "url": "assets/images/updates/33-0-0/docs.png",
    "revision": "b8ad7bf9fa21fb01a52b142aa4c3ea9d"
  },
  {
    "url": "assets/images/updates/35-0-0/gray.png",
    "revision": "8a9b2997ad6628cab63cd97aff22bf47"
  },
  {
    "url": "assets/images/updates/35-0-0/reading.png",
    "revision": "40dec5e746cafeb99f85079e5d9148a8"
  },
  {
    "url": "assets/images/updates/40-0-0/design.png",
    "revision": "c04cd9814df39091c50d0741890c9a27"
  },
  {
    "url": "assets/images/updates/40-0-0/editor.png",
    "revision": "04d0423b42de0dd059366d6f1cf02cf3"
  },
  {
    "url": "assets/images/updates/40-0-0/lookup.png",
    "revision": "31fd60b2ae798fc0f8782c3e2239cd92"
  },
  {
    "url": "assets/images/updates/40-1-0/color.png",
    "revision": "810d367109db6323397cf8d25b3d4193"
  },
  {
    "url": "assets/images/updates/40-1-0/favourite.png",
    "revision": "bc8a455a155cda19490e5f196151b6df"
  },
  {
    "url": "assets/images/updates/40-1-0/pdf.png",
    "revision": "e41f08e3043f20c5d3b1fe8c6d06c907"
  },
  {
    "url": "assets/images/updates/40-1-0/searchbar.png",
    "revision": "66e4ea4f86e491c596e4cc4ba69a17ed"
  },
  {
    "url": "assets/images/updates/50-0-0/google.png",
    "revision": "e303a721f696624600a984b381d6d5d0"
  },
  {
    "url": "assets/images/updates/50-0-0/input.png",
    "revision": "727829de3936843e9de25b5df8d2ff2c"
  },
  {
    "url": "assets/images/updates/50-0-0/summarize.png",
    "revision": "f22570786542375db87744250bd35823"
  },
  {
    "url": "assets/images/updates/birthday/auto-scrolling.png",
    "revision": "b62370644a8f1fb51da8e055a45e1071"
  },
  {
    "url": "assets/images/updates/birthday/banner.png",
    "revision": "6695cba0c7389ec63d0a83206f81b5e2"
  },
  {
    "url": "assets/images/updates/birthday/google-docs-update-helperbird-2.png",
    "revision": "2ed86014a39bf8b7c8eed39fb61fb12c"
  },
  {
    "url": "assets/images/updates/birthday/google-docs-update-helperbird.png",
    "revision": "e5cd66e9675c67700220e6317bebebc0"
  },
  {
    "url": "assets/images/updates/birthday/helperbird-new-icons.png",
    "revision": "d724bd265bdc1081d6e98368e7721588"
  },
  {
    "url": "assets/images/updates/birthday/Love.png",
    "revision": "d7085402959209f58cb07a38dd621e3f"
  },
  {
    "url": "assets/images/updates/birthday/pdf-overlay.png",
    "revision": "82ecf83a3a58cd3039bbf107b7180b70"
  },
  {
    "url": "assets/images/updates/birthday/pdf-ruler.png",
    "revision": "9e7b3ebc40288bb3efdac55260dcf804"
  },
  {
    "url": "assets/images/updates/birthday/reading-mode-designs.png",
    "revision": "7d504a0d67b893a93cc6667d2cee52b1"
  },
  {
    "url": "assets/images/updates/birthday/reading-mode-redesign.png",
    "revision": "0d8e7672313d77d804c33e0d6b0f5998"
  },
  {
    "url": "assets/images/updates/birthday/reset.png",
    "revision": "7d3c15dcb73d343cab730740b46231ac"
  },
  {
    "url": "assets/images/updates/birthday/shortcuts.png",
    "revision": "5065a8bd27fa91a85e5fb27a28222137"
  },
  {
    "url": "assets/images/updates/birthday/voice-typing.png",
    "revision": "f27993db1345cad0bc740c1828562db5"
  },
  {
    "url": "assets/images/updates/kingfisher/accessibility.png",
    "revision": "0d26a163b694d8cdd05f3255b821171a"
  },
  {
    "url": "assets/images/updates/kingfisher/colors-paragraphs.png",
    "revision": "b501a2753b26a464d0627901bf3ae137"
  },
  {
    "url": "assets/images/updates/kingfisher/colors.png",
    "revision": "1a94fef73561cf034fe030b952958344"
  },
  {
    "url": "assets/images/updates/kingfisher/favioute.png",
    "revision": "dcb15d15f4961c64a13775b6f5bb7c8e"
  },
  {
    "url": "assets/images/updates/kingfisher/notes.png",
    "revision": "ece0b0e2ff1cd743c0873311bc5c122d"
  },
  {
    "url": "assets/images/updates/kingfisher/paragraphs.png",
    "revision": "f8a56f1a35fdb1df3840285f5336ba47"
  },
  {
    "url": "assets/images/updates/kingfisher/readers.png",
    "revision": "19051a8ecd3283de0650d8418f47a394"
  },
  {
    "url": "assets/images/updates/kingfisher/rulers.png",
    "revision": "94096eddbb96123711edd4ba3c744fbb"
  },
  {
    "url": "assets/images/updates/kingfisher/search.png",
    "revision": "60a232122bce6f4185b50ccb398265d5"
  },
  {
    "url": "assets/images/updates/kingfisher/speed.png",
    "revision": "c9bd996abb2790efb0e06bb588e2ab18"
  },
  {
    "url": "assets/images/updates/kingfisher/videos.png",
    "revision": "0fac06a24ffc434e87600d1b3ca6c9f9"
  },
  {
    "url": "assets/images/updates/robin/accessibility.png",
    "revision": "0d26a163b694d8cdd05f3255b821171a"
  },
  {
    "url": "assets/images/updates/robin/colors-paragraphs.png",
    "revision": "b501a2753b26a464d0627901bf3ae137"
  },
  {
    "url": "assets/images/updates/robin/colors.png",
    "revision": "1a94fef73561cf034fe030b952958344"
  },
  {
    "url": "assets/images/updates/robin/favioute.png",
    "revision": "dcb15d15f4961c64a13775b6f5bb7c8e"
  },
  {
    "url": "assets/images/updates/robin/notes.png",
    "revision": "ece0b0e2ff1cd743c0873311bc5c122d"
  },
  {
    "url": "assets/images/updates/robin/paragraphs.png",
    "revision": "f8a56f1a35fdb1df3840285f5336ba47"
  },
  {
    "url": "assets/images/updates/robin/phonics.png",
    "revision": "505979a697dea6c3ec547dcdfa46f2a4"
  },
  {
    "url": "assets/images/updates/robin/readers.png",
    "revision": "19051a8ecd3283de0650d8418f47a394"
  },
  {
    "url": "assets/images/updates/robin/rulers.png",
    "revision": "94096eddbb96123711edd4ba3c744fbb"
  },
  {
    "url": "assets/images/updates/robin/search.png",
    "revision": "60a232122bce6f4185b50ccb398265d5"
  },
  {
    "url": "assets/images/updates/robin/speed.png",
    "revision": "c9bd996abb2790efb0e06bb588e2ab18"
  },
  {
    "url": "assets/images/updates/robin/videos.png",
    "revision": "0fac06a24ffc434e87600d1b3ca6c9f9"
  },
  {
    "url": "assets/images/uploads/add-a-heading.png",
    "revision": "d3afeb2e8d7fdd7d99918a09359dd6a7"
  },
  {
    "url": "assets/js/core/app.js",
    "revision": "0d8a245814852aef549d4454bebc9c91"
  },
  {
    "url": "assets/js/core/google-events.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/js/core/third-party.js",
    "revision": "8bd06322ac8e6817f3d53366d564bf0b"
  },
  {
    "url": "assets/js/core/youtube.js",
    "revision": "01c5fa9ef1159467c6823c275882179f"
  },
  {
    "url": "assets/js/index.js",
    "revision": "9c4909346822294493f76ae9436e2847"
  },
  {
    "url": "assets/js/main.bundle.js",
    "revision": "c6c05902e86194ac0d1cd3addef98979"
  },
  {
    "url": "assets/js/main.css",
    "revision": "97c426fa73621f3ced6e0290840371cd"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.html",
    "revision": "4b428d3b5d715ad4efb688b919c48339"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.png",
    "revision": "4d74e75cb116139230da54ebf81f6bff"
  },
  {
    "url": "blog/4-key-strategies-for-communicating-your-child-needs-to-school/index.html",
    "revision": "3ab401961dc7286d9306c6406a2b07fb"
  },
  {
    "url": "blog/4-key-strategies-for-communicating-your-child-needs-to-school/index.png",
    "revision": "4b91a4496f0a111e83907ffa1df1f6f2"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.html",
    "revision": "4f07d8808c94c0e9af2dc4474ee4ce00"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.png",
    "revision": "7a83dedffddf0682184e8c111dca2532"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "d6574c5b031148c2b9b0d28c3da2e94e"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.png",
    "revision": "3b62b938c6e7c2644bea3aa4a62c5a5e"
  },
  {
    "url": "blog/7-steps-to-create-personalised-learning-plans-for-students/index.html",
    "revision": "7d49a6d3be08a24fb2c6ecd400f99e5d"
  },
  {
    "url": "blog/7-steps-to-create-personalised-learning-plans-for-students/index.png",
    "revision": "f9413d1c1275d41a86be133eafbdd05c"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "5754dfc5528355448c47b3986b9bd732"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.png",
    "revision": "6b78ba83d51d3019bd49055002ed5a03"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "3efd72e91b499ad58acdfc468c3bab43"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.png",
    "revision": "58632803dcd69b60038ccf1dd6330491"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "f3763d7514d7b566e2d72b10fd125f1d"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.png",
    "revision": "c6aeacdb96f35bc702d7137504d3ca2e"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.html",
    "revision": "a961a04d7905309ee879088c84046faf"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.png",
    "revision": "a056654e362017180bf9ba16628f6c15"
  },
  {
    "url": "blog/celebrating-10-years-of-helperbird/index.html",
    "revision": "e06a23a1b01ab222dc457489af03c33c"
  },
  {
    "url": "blog/celebrating-10-years-of-helperbird/index.png",
    "revision": "3efead1a7735c445386327d660d2516f"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.html",
    "revision": "44096dba5743d09b7afc80b9e489e9de"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.png",
    "revision": "aa7eb8115b33f9857a408db74b72999d"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.html",
    "revision": "84c2464bd41c229fd9efa15051cd1ed1"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.png",
    "revision": "2c0be92517fe5cbc5b5e2499dc95872d"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.html",
    "revision": "9ab214c44b32bf46ae36542215423fd9"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.png",
    "revision": "3a55e0a35d3efcfe157510a0db9204b6"
  },
  {
    "url": "blog/heads-up-helperbirds-got-immersive-reader-too-extension-free/index.html",
    "revision": "a8f6ae9e89c520b379a3161d77a789e5"
  },
  {
    "url": "blog/heads-up-helperbirds-got-immersive-reader-too-extension-free/index.png",
    "revision": "cf0431ff27105717a9479a773e4b30fd"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.html",
    "revision": "656d6474121707e930d34fc794e62c77"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.png",
    "revision": "5c532b928d132d061b33033b3e757d2a"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.html",
    "revision": "48204f17f31573847737675857b79f07"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.png",
    "revision": "60f3bb5eccfc52cccafdecf25f0bc825"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.html",
    "revision": "b861cdd0f42177c36de5b70d08a56b84"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.png",
    "revision": "bfcdd986c3952b521a0fa6fd2e5a31da"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "a2fa4786f593aeb003bbbc0c90215f69"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.png",
    "revision": "05bcb5ec934971f2275cef56b765ec25"
  },
  {
    "url": "blog/helping-students-thrive-with-helperbirds-accessibility-tools/index.html",
    "revision": "e1ffbe5f163422d643dd13481c457a6f"
  },
  {
    "url": "blog/helping-students-thrive-with-helperbirds-accessibility-tools/index.png",
    "revision": "242c82899f21a8688cf7be4607e1f624"
  },
  {
    "url": "blog/how-extracurriculars-boost-self-esteem-in-dyslexic-learners/index.html",
    "revision": "cd38a5d07dd2856e5c7cf1c3da728147"
  },
  {
    "url": "blog/how-extracurriculars-boost-self-esteem-in-dyslexic-learners/index.png",
    "revision": "e3e376946ca97c0cd5f97f1f6620d493"
  },
  {
    "url": "blog/how-helperbird-can-support-homebound-learning-for-recovering-students/index.html",
    "revision": "2009dc329f86cc4bccc4f893d8ae2bfc"
  },
  {
    "url": "blog/how-helperbird-can-support-homebound-learning-for-recovering-students/index.png",
    "revision": "30f35355f519ec38ce198e12e4053f9c"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "96287696b3857ead01a7b866dffab14e"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.png",
    "revision": "bbeaa9e99210f7bde69fc4de0b8965b0"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "f2c6b4bf47f9d0c8c07b69f60a7cfa0f"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.png",
    "revision": "3e8128aef90c0d6c1b89468fda50056e"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "0a71e585579de68449672e2b0ee4e9fa"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.png",
    "revision": "86158575242df3838df2ffd57e37d6f6"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "e1d02b896051ac55aaae7bd330893085"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.png",
    "revision": "824cc7a8302c082d84c9d3e5b0089ccd"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "fdeacdd17d8e19ca94896a539587d20a"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.png",
    "revision": "458bfac3cabe2c6bb35c46febb64a429"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.html",
    "revision": "6ff96930a23dd2da7696ba82eea17d82"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.png",
    "revision": "bcbcd7bc7675a837ede9d50bcca455ae"
  },
  {
    "url": "blog/index.html",
    "revision": "eeb08716b63941860a9bea2aef8bf26e"
  },
  {
    "url": "blog/index.png",
    "revision": "bcc3e662977584207cb07f84a6998a44"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "982d56f8228e766c62cfe09f88b42462"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.png",
    "revision": "9679806a64a6851a4412b3aa46c1bac6"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "200e3fd1b7300b89140fe69cdd739a09"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.png",
    "revision": "5f4be626ad5a45c7d2fedbaa34b97b7e"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "5d51e39882383f012868426ea92d7ce4"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.png",
    "revision": "9575babd87f29a023b05444054d595fb"
  },
  {
    "url": "blog/reword-function-student-success-story/index.html",
    "revision": "e19cfe66cbdafad4f84d51dfb0f89ae7"
  },
  {
    "url": "blog/reword-function-student-success-story/index.png",
    "revision": "a4ec73425f5f10e3330268320f8f114b"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.html",
    "revision": "9f4b8a8b0a8f386d3e4be7da3df1acae"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.png",
    "revision": "4400663ee9f606c9bc7c832e0f5ca3b5"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "47e54dc0d7d40bc66e36070cc2fd1a04"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.png",
    "revision": "01ebe1541c7f967b621491088e50b561"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "af8eab3c274c2c7721f325339646432e"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.png",
    "revision": "452d4e8557f7664ba0db68b9e49a7718"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "c1bae1492c00898bbb59e7dc20ef47a5"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.png",
    "revision": "7b29c99874ad50438fc90b4d2009b24e"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "b90cdf98de5c1a2b86781d55447d2548"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.png",
    "revision": "6d4de0704a19ffeee27d3318021d722c"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "1abed09fca23ef179bb0130e5816e9fc"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.png",
    "revision": "f23f528aa1d9bcafbd7c6345de58e46f"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "107b9f4d3f5c8479ec0df390145a9c95"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.png",
    "revision": "1e55f7a58e067bde42189a38c6d80845"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "6d49f421fec8e121f7733f3757004a63"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.png",
    "revision": "a08b57d3c12073ed036ac54723c85dea"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "58206608ebdf600af0f0d389dddefe8d"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.png",
    "revision": "6bc4b01575a1968a762881381ede2723"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "72fa6a9a6841219843a5560a71120f6d"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.png",
    "revision": "7407d17a7d63e915a6ff35805d2500de"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "65a828e865966b98c2c2c52e1a4614e5"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.png",
    "revision": "83206967ee26cb90132a47d73d25ada1"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "fe204b5c05a8229e61fa7bfce7c97ab8"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.png",
    "revision": "a72348b42a763fff4838b2229153d56e"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "069c134b0721d49b25a56155f8745305"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.png",
    "revision": "c9b1f72d0ed66eb65a5aede39170952a"
  },
  {
    "url": "chrome/index.html",
    "revision": "04b1cfadd9f115cf96b3d9fdc5b82e98"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.html",
    "revision": "8bcb1aa1488c2a630d0177e59e6e1336"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.png",
    "revision": "819c07b52a3e982ede47014587ac0217"
  },
  {
    "url": "compare/index.html",
    "revision": "bf9968da0182727ef650eaf48790a1af"
  },
  {
    "url": "compare/index.png",
    "revision": "2e859817dff77bee017ffb99853e6936"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "f39f5b4119bacc1c7e2dc6ade5e2fc08"
  },
  {
    "url": "compare/read-and-write-alternative/index.png",
    "revision": "35bfa7c07559c6db37ec9b6c1fdd6755"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "af2a34f1b1749668d95bc5dfa7b2987b"
  },
  {
    "url": "compare/snap-and-read-alternative/index.png",
    "revision": "14674aad30a1ca1875541c73b117cf87"
  },
  {
    "url": "compliance/index.html",
    "revision": "ed70aaf4adbfce432a0cd74f2ab472ff"
  },
  {
    "url": "compliance/index.png",
    "revision": "267fee6ba41bfd409948e803150a9344"
  },
  {
    "url": "contact/index.html",
    "revision": "8dffbd7cb3f3573627d2e26841841082"
  },
  {
    "url": "contact/index.png",
    "revision": "75577815a9127c1f398977b3b83575d2"
  },
  {
    "url": "edge/index.html",
    "revision": "e53e0afa2f09618359d1d2f2a88593e1"
  },
  {
    "url": "edu/index.html",
    "revision": "dbacba243757cbffff43211a569026ac"
  },
  {
    "url": "edu/index.png",
    "revision": "1614a96c22921d097817ce81a0b11ac5"
  },
  {
    "url": "enterprise/index.html",
    "revision": "e53adca853569c90aef7605064944256"
  },
  {
    "url": "enterprise/index.png",
    "revision": "ad1af8d3a578b806d6bded1077d3c3bd"
  },
  {
    "url": "extension/index.html",
    "revision": "47d18f3546966d1fc56d38585973e3f7"
  },
  {
    "url": "extension/index.png",
    "revision": "f3d3108022ad121a9bbb7a2d2bccf039"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "1d370f12122a562388101c852640dd01"
  },
  {
    "url": "features/adjust-letters-and-words/index.png",
    "revision": "4c053c69e3a28494e79be9af92cc3e52"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "1c33c44389a531ebef0cd0e7dd3ca86c"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.png",
    "revision": "7426ac3344cbcecaa9b4761b4bb7dea2"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "7d041a4f09c0e76956a40ae482ac1fac"
  },
  {
    "url": "features/analyze/index.png",
    "revision": "c7e26494dd04ff0fdaf4465a45118119"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "a600676b9b4a7931ae542f874fd929cb"
  },
  {
    "url": "features/annotation/index.png",
    "revision": "1cf7ea0ba3d98257af1577a7026ccd7c"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "1b7cb0c938589574538ff542c84ff072"
  },
  {
    "url": "features/auto-scroll/index.png",
    "revision": "b5a1ba515d6c180057f1a91cbf3bf8ce"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "bfb8ca6997e1ca52767ea61bf3661f93"
  },
  {
    "url": "features/bookmarks/index.png",
    "revision": "dd25b297879e816c9ec989a111deef3a"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "fa5d453dbcd28f3190b0c9bb73d430c4"
  },
  {
    "url": "features/color-blindness/index.png",
    "revision": "320f408a60256fa424679f68bbb4bd2a"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "cd3bf48f261c291c593555ad55c6be57"
  },
  {
    "url": "features/cursor-control/index.png",
    "revision": "d5cf1f5042d8c07ff582a3cf502338c8"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "5441a81dad498468369a98a4157cb28b"
  },
  {
    "url": "features/dictionary/index.png",
    "revision": "e7af7fa7e92ebd53c09c99a129f4a662"
  },
  {
    "url": "features/editor/index.html",
    "revision": "eff8f26a6fa1dde13e166cc397f44902"
  },
  {
    "url": "features/editor/index.png",
    "revision": "73e4784ddf6e274bb1d8d78d587e3a26"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "6f867a22e6c45f8f8e6193005f3bd107"
  },
  {
    "url": "features/font-sizes/index.png",
    "revision": "ddc518a2a5bc110f0a173334ab6bd834"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "b3bbe74ff459bfc36e21b3eb88150309"
  },
  {
    "url": "features/google-translate/index.png",
    "revision": "d438bc4cfb404c066f5130f385f7f7d2"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "6d1b1ab247de0103cfc367d264c08993"
  },
  {
    "url": "features/gray-hue-overlay/index.png",
    "revision": "03b7d4811de1fb5b746a8f1ac3e39a06"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "dbf304f158f848bc869a737f441c7cb4"
  },
  {
    "url": "features/hide-images/index.png",
    "revision": "96cc4d22534dad2994341ad15050b953"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "d4f82272b5c5e0767f8963ab989a09b8"
  },
  {
    "url": "features/high-contrast/index.png",
    "revision": "bfdca07daff3f02d1971b008229a8b52"
  },
  {
    "url": "features/highlight-menu/index.html",
    "revision": "ee15a621ad45606bffce940e3faccfee"
  },
  {
    "url": "features/highlight-menu/index.png",
    "revision": "e43c6c6d0c79ffe7b86113f652b1f01f"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "1c5a505b40ae45229ba7923b801ef62f"
  },
  {
    "url": "features/highlight-paragraphs/index.png",
    "revision": "92c804b8f76ab5eb941468f19862861c"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "1b2009af374ca0c8940b8d53fbdecc32"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.png",
    "revision": "c4d0ac0aca79f37bcb6730ac5f24e011"
  },
  {
    "url": "features/index.html",
    "revision": "bf9a173edc7d179cdb606a8cd7bc5090"
  },
  {
    "url": "features/index.png",
    "revision": "804cd692a6f130844fb42f982155fbc1"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "e1ec9b0e5a1f1fbab07f17a09e158fec"
  },
  {
    "url": "features/mute-videos/index.png",
    "revision": "e3eb32b765f8d5f944d5fd3f77c11e0a"
  },
  {
    "url": "features/notes/index.html",
    "revision": "fa0d1896684c4cd993863b957cae0468"
  },
  {
    "url": "features/notes/index.png",
    "revision": "b49d61249ac65edf1eeabda088515ec1"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "7671c3930e2e007c5c439282e0797f23"
  },
  {
    "url": "features/optical-character-recognition/index.png",
    "revision": "6cb70582566fd42f243f5499992f0494"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "3bf5a578884c3e13081de7da8f9ed8d6"
  },
  {
    "url": "features/overlay/index.png",
    "revision": "3a1dc2218a135ac26966328c534787b6"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "ec84b5b1814eca9a1e95607003cebedf"
  },
  {
    "url": "features/paragraph-widths/index.png",
    "revision": "72d9cf91ce9ce12f9fa6ecb75bd3faac"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "d707e7f4ba25362e062c9d0113bf0afd"
  },
  {
    "url": "features/pdfs/index.png",
    "revision": "8bddafc220b30ccaee204af29dcd8d20"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "9314a20e3f9ab9ec3a1645d6beccf240"
  },
  {
    "url": "features/printing-tool/index.png",
    "revision": "5c7a033ec12157394726e746792b6797"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "7183800fe9b9afca0695c44a03886936"
  },
  {
    "url": "features/privacy/index.png",
    "revision": "f99636300d30a943cc681190b5f61fd5"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "afa071f4929d3c5379426a72763b83b5"
  },
  {
    "url": "features/reading-guide/index.png",
    "revision": "0ac4f34af6c76852a54bcb000c00c027"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.html",
    "revision": "f98fa33788c0f29a19069f29e480e955"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.png",
    "revision": "49e5f4c10de0b3722e4300006ba043d4"
  },
  {
    "url": "features/reword-and-simplify-websites/index.html",
    "revision": "10bccce75d19d5bf31b8980dfe36e3fb"
  },
  {
    "url": "features/reword-and-simplify-websites/index.png",
    "revision": "8a177b98125fb8fcec142a893f6adc5d"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "edbefab819181e19392b98daa31ac83b"
  },
  {
    "url": "features/ruler/index.png",
    "revision": "55586186bb226cc0425ab23f084fe7d4"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "681d32e9800d8c5a9f28831364ff247b"
  },
  {
    "url": "features/screenshot/index.png",
    "revision": "c589342a9c5f7f5add560cf3f3de6aaa"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "b1be85046e0a84d1cb21e0b374d5438e"
  },
  {
    "url": "features/shortcuts/index.png",
    "revision": "1b04811d67706f94d515bd835e813976"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "b6831db9cc93fc5eb65485e805db497e"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.png",
    "revision": "6e56f8459d107c0016afb938d059532d"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "64bba0e3101a76cc9761045c29d7fe75"
  },
  {
    "url": "features/speech-to-text/index.png",
    "revision": "4ca4836bd584b76b70c1ef70d20709a8"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "dd6f63f7b85f920ed68870e93309807e"
  },
  {
    "url": "features/speed-reading-extension/index.png",
    "revision": "9ca54234dc7d55d22df67490c22cfa25"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "af51135ec45c050381412a79b499e26b"
  },
  {
    "url": "features/spell-check/index.png",
    "revision": "25b6d5025b86fc8ef66c29ec95c55947"
  },
  {
    "url": "features/styles/index.html",
    "revision": "5a70b445e794221de0838da591b5b7bf"
  },
  {
    "url": "features/styles/index.png",
    "revision": "944deafb7b23814f97310e6f65f984b1"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "dc00d97a21771961e6030df0c93b8d36"
  },
  {
    "url": "features/summarizing-tool/index.png",
    "revision": "41640846fcda32ddcf17bbae4a30e304"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "8d48f8affbcc058941193531c6c3d85f"
  },
  {
    "url": "features/text-align/index.png",
    "revision": "c96a2e3ca7e06e4190e822ecc0e5f15f"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "3e1e7464e3f333c3a502546fad403371"
  },
  {
    "url": "features/text-to-speech/index.png",
    "revision": "a95da60c94b64152dfb20fea347e0964"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.html",
    "revision": "86723aa175dd294009ebf35a1c3acec7"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.png",
    "revision": "b08f7de0e205af8a863a0667b19c25e7"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "4f378f386062b2d7806b971bfef3ad05"
  },
  {
    "url": "features/word-prediction/index.png",
    "revision": "0218dfa620c53bfa1b9f88fc53355c57"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "d2d23758faa8c073825dc712489aabfa"
  },
  {
    "url": "features/zoom/index.png",
    "revision": "ef49935619769bf8483f9d29fe334f7c"
  },
  {
    "url": "feedback/index.html",
    "revision": "72891e0491ae9b786c0ff67308aabeec"
  },
  {
    "url": "feedback/index.png",
    "revision": "b8b3a1b03234aa34b4a498d376c7f58f"
  },
  {
    "url": "firefox/index.html",
    "revision": "f859ff141e1697b800c318bd689bdb9f"
  },
  {
    "url": "googlea4b2e0ff05c168d5.html",
    "revision": "aa0eccb4cbb6ff839fea067690997e45"
  },
  {
    "url": "googlea4b2e0ff05c168d5.png",
    "revision": "a87affc91bbdc7568da902f0fdcf3267"
  },
  {
    "url": "guides/index.html",
    "revision": "b69edbee23242c52be9c53cdc203bcc5"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.html",
    "revision": "a97886fcef7e263596e1a5ad9838028b"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.png",
    "revision": "ccbe2549f9c03027c2e1454732d82b61"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.html",
    "revision": "3f89ce4c9c9ee1d4ca360cab5c3061c6"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.png",
    "revision": "83a7f19dc171ceca18b209bb1fcb2ffa"
  },
  {
    "url": "help/feature-not-supported-on-page/index.html",
    "revision": "4e6a87e631b2f78dd9a5307593a488d0"
  },
  {
    "url": "help/feature-not-supported-on-page/index.png",
    "revision": "e9d9c024a3be318a3dfa97ed4e919da1"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.html",
    "revision": "b45f2330496eaf32599283ba8ffd89fd"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.png",
    "revision": "6993cfbe3ed6a9db4488344b744fcca8"
  },
  {
    "url": "help/helperbird-for-google-classroom/index.html",
    "revision": "a506a6ab547acf5913806b6a2911cf54"
  },
  {
    "url": "help/helperbird-for-google-classroom/index.png",
    "revision": "40392afa3c7c419a301da22d1f31cfe3"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "c139d9ab7d4a986ea284fb85261c6410"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.png",
    "revision": "2c94d6f43223733d603deed283417575"
  },
  {
    "url": "help/helperbird-for-google-drive/index.html",
    "revision": "6b1491b4d7f2fccc4416cc0d1be82205"
  },
  {
    "url": "help/helperbird-for-google-drive/index.png",
    "revision": "96a324f34498f73ff15fe9048b2e79c3"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "5774f9ffae64b21c97b80271075b83bb"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.png",
    "revision": "81128ef0c54b09d9e91a11ff52792b2b"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "864055416a95773e217718444202fa2d"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.png",
    "revision": "e57a5a03aba09d663a394faacb8f47ce"
  },
  {
    "url": "help/helperbird-for-powerpoint-online/index.html",
    "revision": "65e782a6fb99bd1906e8d004dbfcb110"
  },
  {
    "url": "help/helperbird-for-powerpoint-online/index.png",
    "revision": "d400f0cce363c2a373a16ba2aa90a388"
  },
  {
    "url": "help/helperbird-for-word-online/index.html",
    "revision": "6e1c52a1db9c9f246d73984c1ea4a0ea"
  },
  {
    "url": "help/helperbird-for-word-online/index.png",
    "revision": "f718746ec35820362558573b4094af17"
  },
  {
    "url": "help/how-to-access-our-helperbird-usage-dashboard/index.html",
    "revision": "fd7502cd0615bdcf389a897b3505f381"
  },
  {
    "url": "help/how-to-access-our-helperbird-usage-dashboard/index.png",
    "revision": "7a4e5fcecb740f15e128aba63f335cde"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "74b44b701e27d6171512316aac75c174"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.png",
    "revision": "c9fb42e00409a38851e9f1f19ee39984"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "f2e109cd66a02be034fdd340c0034332"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.png",
    "revision": "f281f8888e1048003e979e0fbd911de0"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "18e7c73186688d31ccdf072b7d197612"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.png",
    "revision": "0b2babdd8610515133882308a950e649"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "c4403aca3899b7b0fcf077001773148e"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.png",
    "revision": "fec5e88581309822e0732e927503a560"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "80f5e6de82451d4173aa0ec274ae1238"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "18318edca3b29c09306a2ef5983e6c9c"
  },
  {
    "url": "help/how-to-change-my-email/index.html",
    "revision": "580268fae1bdb3dc69919ea112ca3d3f"
  },
  {
    "url": "help/how-to-change-my-email/index.png",
    "revision": "b64fd00f6c89c1f9b945c036225dfbc1"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "5ef755fd27524bc5513150152c3ab6c2"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.png",
    "revision": "fee2798e1e147b285c2b5c441994bd2d"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "cda3c47b2d8dbeef5f0172ea08eb9e88"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.png",
    "revision": "69302dc301ec90e0ea5edd6411200d5b"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "19e34367efacaf91cc9c2dfaf94e4f51"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.png",
    "revision": "c46101ebd538f7a135fd3c06de3db274"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "097c7d4ee54f195c930388aae4fcfd82"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.png",
    "revision": "0d301146b3c2bc97f19f13101d9b7643"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "5d8c538f66f3d149147db96e64c6277b"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.png",
    "revision": "822009bffca1eec553b6278a5f723609"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "a23ea0f3ec8a36d5f9a4a2f3211fd318"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.png",
    "revision": "53a29641bfbd4f0a28afb52e808772bc"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "fb48be7c2558a97e61374ffe5ce2c6bf"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.png",
    "revision": "1cf79ed47e8c3a9fac08420602736fbb"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "7d4aa813fd74d8b11f538a12358fb889"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.png",
    "revision": "54b2366afb17cdfd9e15cf48bdb0c47c"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "75658bbf15b63edc6e1e89f603fe0e5c"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.png",
    "revision": "b19e6ae1250681a06cf6dff1ad403149"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "dba5ba24af7257d8f4b3ec888c2d35a0"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.png",
    "revision": "75e6d9e8e5abb91aab86823663e413db"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "7b26636cb62c3ee13270292b2e9c8cb2"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.png",
    "revision": "1cf79ed47e8c3a9fac08420602736fbb"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "dc819d9bf6d8475e5d5b79711a7036c8"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.png",
    "revision": "bd976f4b0a0a47135b776bb5146552cf"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "c246d0655c1c11e87a8dffd7a3f6f7c9"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.png",
    "revision": "6a1bcbdc4beefc6db04b836afbeac822"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "cf6d3c554619654772469d11c694e093"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.png",
    "revision": "f36aa1c027756470869c8633fe99c29b"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "c158e02396d390ec0c33e7880ae5dd61"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.png",
    "revision": "cc3df0a4f7e4f07da459f80daa37e2b8"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "f79f4eb0fbc7ef636ce2478468d60094"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.png",
    "revision": "f595f63ae4191a7a4d6ec807a069c432"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "a74f375804ae3121dfbef4726e333ac0"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.png",
    "revision": "4c388eefd57d56e301fc4719e7ca2da9"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "ddb906f7acf9162faad0061884a49441"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.png",
    "revision": "287ef8a47f9bdfa62c196ff34ab64ed4"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "7214f4f4205705d82647357357ac7b1f"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.png",
    "revision": "6a9b1bbfa83e0aefc64969ef260ae9f2"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.html",
    "revision": "52fea9ab512fce389dd3150c51d9c433"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.png",
    "revision": "6b1de43e04da15779f096934f80dc836"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "64bfd8289555e00f18ca4e01babcfddb"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.png",
    "revision": "c272eab5e0a5110f3b3857e6db2aacc4"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "d1f9c79c31cb5bb0eb6fdfeee4b56725"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.png",
    "revision": "63a11386ee4ef3e27a3aa396c91dd7fd"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "c007c1b6e726b796d69c1e1e73f8d785"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.png",
    "revision": "4d50728f6bc1a3079e12e68776225532"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "fdde39e5f98269771a3544758e747e91"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.png",
    "revision": "e77ba2dc4e225408d53037303a1e4f94"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "58eb6d89f24b3651f99f5731158c54b2"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.png",
    "revision": "b36de80923c3567e9b763d9f782982d2"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "127c7687f657fb7ca22a2bf03b6c8c23"
  },
  {
    "url": "help/how-to-pause-helperbird/index.png",
    "revision": "3c0dba3cfba7ed67f8ab712a200222db"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "a43f18fd0aaf6f36c675f4c7a4b3eed7"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.png",
    "revision": "7ad0329c10116c8828df150017c40a29"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "4e31cf7b5646a371617790ec4282dd2d"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.png",
    "revision": "518c93d79721d6a8d9c4e826f663e7ea"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "357bb38b955cac3a962a0aaddad4a337"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.png",
    "revision": "1c9a490d79176d7376176fea62c67f94"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "97bd8197549c7a45a265becac7a71477"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.png",
    "revision": "b794cdb9e4dc1e3fa7d3da6fd2a62f86"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "054680205c97817ae7ab27696842acd7"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.png",
    "revision": "cb941bf726f636256036b065e2618c54"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "63f2ecd3dac0cbdfbe011b967a7ccf6a"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.png",
    "revision": "a16f97cfe3f39771257bbb05894ee9ea"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "0a9723f6015286465265ab51fee79fae"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.png",
    "revision": "0d6dafb1f3c1a096268d969e8a83b38b"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "70ebc08e20cc0bba4161d0709799fe2e"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.png",
    "revision": "87f83f60b0ca2a0a7d0ad5fe26ca681a"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.html",
    "revision": "c4e54720e78aaf304b9d0198c7010ff3"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.png",
    "revision": "cf5800ab79bfedcb42f71aa900569b4d"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "ca77df370073d637f7cdd56df591d0c4"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.png",
    "revision": "55586186bb226cc0425ab23f084fe7d4"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "700968e9e6ec239dd28af486346ad1e6"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.png",
    "revision": "99b4342b97343246e1d49cf0d0b55d0b"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "d02308a4f38ae2c01c8cb75e3e6766bb"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.png",
    "revision": "a05028cf5c016cdccf7adf90d5d08689"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "5707972cdc9c2525d16a544e72fc9a6a"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.png",
    "revision": "cd8280a3b82d318eaeef26801189bd20"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.html",
    "revision": "9d4740b4851558b23cb63774bcec5cc1"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.png",
    "revision": "701dac6d31752921a5bb71c50d3836d2"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.html",
    "revision": "c859e27873c5605266db0c9f171f14e1"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.png",
    "revision": "f022fdf8d3e3c39fc1f7b8fac86d20a3"
  },
  {
    "url": "help/how-to-use-helperbird-media-features/index.html",
    "revision": "09e859e54f385c36a604970eba889a36"
  },
  {
    "url": "help/how-to-use-helperbird-media-features/index.png",
    "revision": "f022fdf8d3e3c39fc1f7b8fac86d20a3"
  },
  {
    "url": "help/how-to-use-helperbird-reading-features/index.html",
    "revision": "ab47c1ae470961bf7d9c6ba572d13917"
  },
  {
    "url": "help/how-to-use-helperbird-reading-features/index.png",
    "revision": "69054d6cf2c716c06de923cf9f3ac528"
  },
  {
    "url": "help/how-to-use-helperbird-reading-tools-and-features/index.html",
    "revision": "bbcb9cf15b443983bd4ae0bce35abccd"
  },
  {
    "url": "help/how-to-use-helperbird-reading-tools-and-features/index.png",
    "revision": "1a7b4e0d13987b81290c093076789fd7"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "3ea2a05d6a0905c1ee6b5cb1a51a3083"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.png",
    "revision": "bf3a3eaa7c0124dce6520455527a74af"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "0bac06aa4583ad371fd43ca8c8e28523"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.png",
    "revision": "2a23190667a428ed189274d6db55ef6c"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "2a9eff77d8280f2539a359343082bf00"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.png",
    "revision": "fd21e4df36b8bad2a507b89b365023d6"
  },
  {
    "url": "help/how-to-use-helperbirds-style-features/index.html",
    "revision": "5f27acb358c776052093bfd4b438cab1"
  },
  {
    "url": "help/how-to-use-helperbirds-style-features/index.png",
    "revision": "171d651cab83f101b5bb4e2c9ccfd434"
  },
  {
    "url": "help/how-to-use-helperbirds-writing-features/index.html",
    "revision": "201ca2912ed1d3da99f22e0132607593"
  },
  {
    "url": "help/how-to-use-helperbirds-writing-features/index.png",
    "revision": "650b287b4088a3a3ef7d393e3cc7d2fe"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "a19b6eee8ea7c183f9954291c1837754"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.png",
    "revision": "c4d0ac0aca79f37bcb6730ac5f24e011"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "e51296d9e45059c6dded70042ef959aa"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.png",
    "revision": "af16ea4bcbd2e1803d0d3fafa4e31449"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.html",
    "revision": "6ee4e32987326f30dec78e62e54298b1"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.png",
    "revision": "49e5f4c10de0b3722e4300006ba043d4"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "c3ba46329b8d3162a46dad2d33e10358"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.png",
    "revision": "f60b01c3ce2ca2e3488f4696b0dd06a1"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "894c4225d9a5716dc0717b42d9f2eb1f"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.png",
    "revision": "ffb3d789acd1da27ac14f271a0be5dde"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "52110f43c9b516b4a8cb2bfaf6239865"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.png",
    "revision": "9055e9ee71a2c2de0366ab0d1301a143"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.html",
    "revision": "b1ef99e84340cdab0bb7e0b01890c765"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.png",
    "revision": "e43c6c6d0c79ffe7b86113f652b1f01f"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "ca41e01987e4e545d6b7e48d96adc1e7"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.png",
    "revision": "73b86e5c2a1a503dd24d446144eef75c"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.html",
    "revision": "a46388e5c0a68de7c1adea749469a200"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.png",
    "revision": "be4a00575fd30da1b2b58653f228150a"
  },
  {
    "url": "help/how-to-use-the-volume-booster-feature/index.html",
    "revision": "cd527741848acc3a8dba7a03982ee6d4"
  },
  {
    "url": "help/how-to-use-the-volume-booster-feature/index.png",
    "revision": "1971c7c0e5b7c6c6a506e1e29205aa51"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "7613b80099021e53fcac57407de86c9b"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.png",
    "revision": "0218dfa620c53bfa1b9f88fc53355c57"
  },
  {
    "url": "help/index.html",
    "revision": "9da38eab456a18ff5d5ad2df7a3aecbd"
  },
  {
    "url": "help/index.png",
    "revision": "daf0c41cb58873112c6acbb823137c94"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.html",
    "revision": "d927a79cbcbaed03c228af2fed2b33b9"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.png",
    "revision": "d88d7b28ace0407be426518bf7c09308"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.html",
    "revision": "0b7a1bd4935283593afa2f99780233b3"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.png",
    "revision": "e87675d6edd12f0fdba15e2737b1ba07"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "2e6b5bda6864b1d86f1728a8207277f8"
  },
  {
    "url": "help/installing-helperbird/index.png",
    "revision": "e8f733409ecd812e28cb0e0803014e7b"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "be2e1fd68e71053b9924c2316cb754ef"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.png",
    "revision": "ae726e978c8f8f995fbd16a3c4759769"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.html",
    "revision": "07c469f6a61478972992e569b03e6169"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.png",
    "revision": "8d9b55c93547ad1caa46dcb09d1b1573"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.html",
    "revision": "4a532d687847334feb8d04911c904042"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.png",
    "revision": "b256dffd86ef9b5c970ee77979fc23ad"
  },
  {
    "url": "help/setting-chrome-storage-managed-keys/index.html",
    "revision": "8878f08c37b76c58087c334a91e3375e"
  },
  {
    "url": "help/setting-chrome-storage-managed-keys/index.png",
    "revision": "850cb88f4e69118ce1943b6e1af1614b"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.html",
    "revision": "6ea03fdb40874aa94f31c21bf4389c4d"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.png",
    "revision": "7adb93b484e7857d3dddd38d50d56cf5"
  },
  {
    "url": "help/sync-data-locally-or-remote-helperbird/index.html",
    "revision": "be05a8afee57d09d45fad4d8127f4dd9"
  },
  {
    "url": "help/sync-data-locally-or-remote-helperbird/index.png",
    "revision": "15c48e1edb586ef6f9c12d00468903ca"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.html",
    "revision": "240c5914e617f4f75c61127075505321"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.png",
    "revision": "f562f704c35ecdc38a145e0798436738"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.html",
    "revision": "0ad0d9b3349c86185b3b78995fc849f3"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.png",
    "revision": "3f5b54fb7cc5bd9b2db4ee1b7e5f0661"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "e69f749ca11d416ae8c7d7fae928218b"
  },
  {
    "url": "help/what-is-helperbird-free/index.png",
    "revision": "eb090d68e34fbfd938090be0dec5735a"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "0c4f43280ea3eea9a413ac3b0a1209fa"
  },
  {
    "url": "help/what-is-helperbird-pro/index.png",
    "revision": "3fadfc47888c5798b8d17f40e076628d"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "201511a7228506fe538507a0613b7cde"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.png",
    "revision": "49eb2fb3022046570a7e5f150f852352"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "9ff0569de80a1873b844f94db28482fc"
  },
  {
    "url": "in-the-news/index.png",
    "revision": "1e433f19067fa63407347bb2ace4c4f1"
  },
  {
    "url": "index.html",
    "revision": "7198e957565e6c225004c5a8c70cd463"
  },
  {
    "url": "index.png",
    "revision": "2930af88f2f66184eb65f60a4e06048a"
  },
  {
    "url": "key/index.html",
    "revision": "32f4ad6afad0fc126b432bf555ee0d0e"
  },
  {
    "url": "key/index.png",
    "revision": "e16bbb6de09f36b00cc23b2363bc1993"
  },
  {
    "url": "login/index.html",
    "revision": "ec43976a328da4964d7a5f47ef65c818"
  },
  {
    "url": "order/index.html",
    "revision": "cc99b0e7bb9f5a2271de89719ea2db8d"
  },
  {
    "url": "order/index.png",
    "revision": "04645d440cff06ae6614f680a4fd9f8b"
  },
  {
    "url": "partners/adriana-garcia/index.html",
    "revision": "b876e51e7a4cf2b11af5829dbc8f8c5f"
  },
  {
    "url": "partners/adriana-garcia/index.png",
    "revision": "551f388fbd5e2de86708b3507a32d57d"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.html",
    "revision": "7258ae45273fcc24ec63d766aebe0607"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.png",
    "revision": "7e978fceaf6a6585e805d23995d43a4b"
  },
  {
    "url": "partners/index.html",
    "revision": "fbad2f06d2b980fbb876a0cf4cdf078e"
  },
  {
    "url": "partners/index.png",
    "revision": "de4369e29e433881bf4e81cb2a5b05e2"
  },
  {
    "url": "partners/irene-hughes/index.html",
    "revision": "4de8a8637d3c733971fe43398c583d48"
  },
  {
    "url": "partners/irene-hughes/index.png",
    "revision": "5c61efc35204c2bf77950d079cdc1c32"
  },
  {
    "url": "partners/nova-proton/index.html",
    "revision": "f417433a901506facb53b593ab845f91"
  },
  {
    "url": "partners/nova-proton/index.png",
    "revision": "e8d0e14d9691222013db88806bfbf114"
  },
  {
    "url": "partners/paul-spencer/index.html",
    "revision": "c1dbd8a6b4a36d6baa3e1532c79f3a3c"
  },
  {
    "url": "partners/paul-spencer/index.png",
    "revision": "257cbb61b4e775e45cdd091510a94604"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "ab54b86d02d26077602c931c29609128"
  },
  {
    "url": "partners/sascharoos/index.png",
    "revision": "606848d5693b937e41fd6e7e5abb2e41"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "b9914f032217a416596d0802ea52e517"
  },
  {
    "url": "partners/sprialisconsulting/index.png",
    "revision": "52a34288362d9011a3a2a660039b17a1"
  },
  {
    "url": "pricing/index.html",
    "revision": "e6672071d5edc4e1cb37fa8a320bf081"
  },
  {
    "url": "pricing/index.png",
    "revision": "ac6d7ccfbe6c561ebaad75bc8ecb4df5"
  },
  {
    "url": "privacy/index.html",
    "revision": "910e29a66b15a086c2ba86148cd5e805"
  },
  {
    "url": "privacy/index.png",
    "revision": "bf03aa7b6d51ae924df64f26aff42861"
  },
  {
    "url": "products/chrome/index.html",
    "revision": "f6b9c82a30b259d91b2b6c51b172fad7"
  },
  {
    "url": "products/chrome/index.png",
    "revision": "5b08f2ceb190b59bd4dce34e8893b9da"
  },
  {
    "url": "products/edge/index.html",
    "revision": "f219109a18cdcddcb49d29ae91771315"
  },
  {
    "url": "products/edge/index.png",
    "revision": "fb692305ff970c383dbdecbd955424a5"
  },
  {
    "url": "products/firefox/index.html",
    "revision": "a188bfb0fb4d780b6c2d7b27cbcd137e"
  },
  {
    "url": "products/firefox/index.png",
    "revision": "b0fe9d34c3e0930821b497ae9cab5f2d"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "6175bdc5bf6ea2f45a697123fc7c5950"
  },
  {
    "url": "products/google-addon/index.png",
    "revision": "692f9b6902270a0be6f0198f39090bfd"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "cf7817fb1ca4da229eb59c3889cd825d"
  },
  {
    "url": "products/ipad/index.png",
    "revision": "cdf490e432a84cfabf19790da83fccfa"
  },
  {
    "url": "recommends/index.html",
    "revision": "347120bce87191460dc4b11d61e6d2a7"
  },
  {
    "url": "recommends/index.png",
    "revision": "8e3db93e5cd233b708163833b893df89"
  },
  {
    "url": "redeem/index.html",
    "revision": "6a5d4520a4c67c46f5b10deb0443c046"
  },
  {
    "url": "redeem/index.png",
    "revision": "11395316e8042e3edd7ac01ad55d0428"
  },
  {
    "url": "refund/index.html",
    "revision": "857e8c52d01c00d9a806148d8b16ef65"
  },
  {
    "url": "refund/index.png",
    "revision": "2871ab09944129faed6438a5b0112c70"
  },
  {
    "url": "reviews/index.html",
    "revision": "431f4003eff2f8e531bd98e0b1cf63d3"
  },
  {
    "url": "reviews/index.png",
    "revision": "567b9fa948a20e3e2bad91665d7d0773"
  },
  {
    "url": "sales/index.html",
    "revision": "a463385b9ab08cf77d6b2af218b57e6a"
  },
  {
    "url": "sales/index.png",
    "revision": "04645d440cff06ae6614f680a4fd9f8b"
  },
  {
    "url": "security/index.html",
    "revision": "222d7e71e3f2d3683d7f0baf83bf003e"
  },
  {
    "url": "security/index.png",
    "revision": "3bc2f86b4359d9ecaf11de1f18245fe1"
  },
  {
    "url": "sitemap/index.html",
    "revision": "732a5217a7a13691660badd5a6e0cda7"
  },
  {
    "url": "sitemap/index.png",
    "revision": "7d24e8009ef2a1b80634d8ac5cb7e661"
  },
  {
    "url": "success/index.html",
    "revision": "4bb25d90bc8f84fbf10705d1c178b6f4"
  },
  {
    "url": "success/index.png",
    "revision": "367f91d343e37907ba185fb2fd5b0fdb"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.html",
    "revision": "debaa387e0d209212014feb2986d582f"
  },
  {
    "url": "support/cancel/index.html",
    "revision": "82581bed0615fbbdcae0e46e3db2f5af"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "82581bed0615fbbdcae0e46e3db2f5af"
  },
  {
    "url": "support/how-to-change-my-email/index.html",
    "revision": "e2f73e3f3032afc737b343005bf706d2"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.html",
    "revision": "ec43976a328da4964d7a5f47ef65c818"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.html",
    "revision": "68ab92132193356a1fc4e0fd5de384d7"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.html",
    "revision": "29ff72c4d4ff6765ad04226ee353c9bf"
  },
  {
    "url": "support/how-to-use-reading-mode-in-google-chrome-firefox-edge/index.html",
    "revision": "103f48609f01ebdd762da374f476d757"
  },
  {
    "url": "support/how-to-use-reading-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.html",
    "revision": "103f48609f01ebdd762da374f476d757"
  },
  {
    "url": "support/index.html",
    "revision": "4c4042236acb87ed26cc92c905da0aa2"
  },
  {
    "url": "support/index.png",
    "revision": "e4977a66acae81dec924cf70c0f0806c"
  },
  {
    "url": "survey/index.html",
    "revision": "582929d2f9670f8715af20a3767acc38"
  },
  {
    "url": "survey/index.png",
    "revision": "b2ec3cf9ced4b88a516da0d35ab0d0d4"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "f3a7896756c4b95e9dbf1186afa894be"
  },
  {
    "url": "terms-of-service/index.png",
    "revision": "a98ab29a2f0316e320c3e5c0095235aa"
  },
  {
    "url": "testimonials/index.html",
    "revision": "d7938c2020b20aa7ad7a516b7f2b4ace"
  },
  {
    "url": "testimonials/index.png",
    "revision": "40b264cf44466cdd6555c4225cc57720"
  },
  {
    "url": "tutorials/index.html",
    "revision": "79710067e0cb5d8c013faf6e0992ee2b"
  },
  {
    "url": "tutorials/index.png",
    "revision": "41f34f3f03bf21b979ac501bc07effb8"
  },
  {
    "url": "updates/102-5-3/index.html",
    "revision": "4025b261b58ca71ecd235bb7a51f5713"
  },
  {
    "url": "updates/102-7-0/index.html",
    "revision": "4025b261b58ca71ecd235bb7a51f5713"
  },
  {
    "url": "updates/102-7-1/index.html",
    "revision": "4025b261b58ca71ecd235bb7a51f5713"
  },
  {
    "url": "updates/index.html",
    "revision": "98ef9e2297cfb5e660215e98759f1338"
  },
  {
    "url": "updates/index.png",
    "revision": "93f8507bfde2cbe9e7ccf6552a3a0a61"
  },
  {
    "url": "updates/robin/index.html",
    "revision": "4025b261b58ca71ecd235bb7a51f5713"
  },
  {
    "url": "usecases/index.html",
    "revision": "004ec3e461ef1a0f0b39833b6a48ec2c"
  },
  {
    "url": "usecases/index.png",
    "revision": "fbd835bdca6d4ae0bd48b317e863be80"
  },
  {
    "url": "welcome/index.html",
    "revision": "b0a2d385be552ebf82dd6a8727bea1e8"
  },
  {
    "url": "welcome/index.png",
    "revision": "cd84828f4a0f2eb9bb22a81f065c67bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
