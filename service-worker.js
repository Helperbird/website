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
    "revision": "65d7cf186d6823c010cf2ff1efebab79"
  },
  {
    "url": "404.png",
    "revision": "705c095a9e5869af74def9b4b87ac1e8"
  },
  {
    "url": "about/index.html",
    "revision": "3ec3f415155552daed207c6898a5934c"
  },
  {
    "url": "about/index.png",
    "revision": "d73e548ec1590e13f0c4757f575ed02d"
  },
  {
    "url": "accessibility-statement/index.html",
    "revision": "8d8e8bc10fc54b0db04daaf379cf35e1"
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
    "revision": "f7c291c2c58f84ba52f01a400c8a4a93"
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
    "url": "assets/images/fresh-start/cta-one-old.png",
    "revision": "af569344f5b26e7a910d9fb36a2f62bc"
  },
  {
    "url": "assets/images/fresh-start/cta-one.png",
    "revision": "cef371db0953c33485a2e2b37a339be1"
  },
  {
    "url": "assets/images/fresh-start/reading-old.png",
    "revision": "5b324cc40c533bca482cf8d182b27612"
  },
  {
    "url": "assets/images/fresh-start/reading.png",
    "revision": "fcf348852926fb6ab24b85a942ece25b"
  },
  {
    "url": "assets/images/fresh-start/writing-old.png",
    "revision": "20d6db032b34b0de322fa660b5fed477"
  },
  {
    "url": "assets/images/fresh-start/writing.png",
    "revision": "87d0cf19bc5e1be3cce10f21ada1941e"
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
    "revision": "845e3c27fdef2f51236f8c27c7576be9"
  },
  {
    "url": "assets/js/main.css",
    "revision": "89fcd8d2b36080d98165f66186b11e96"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.html",
    "revision": "5c8e2e7048cf374ae6fef27e67194cee"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.png",
    "revision": "4d74e75cb116139230da54ebf81f6bff"
  },
  {
    "url": "blog/4-key-strategies-for-communicating-your-child-needs-to-school/index.html",
    "revision": "902936930069840f4ceb351e2afdefac"
  },
  {
    "url": "blog/4-key-strategies-for-communicating-your-child-needs-to-school/index.png",
    "revision": "4b91a4496f0a111e83907ffa1df1f6f2"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.html",
    "revision": "eb2c007f85ecdc7f6d941082991e7dca"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.png",
    "revision": "7a83dedffddf0682184e8c111dca2532"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "64c618f7d14e853fd220eb8f6e35377a"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.png",
    "revision": "3b62b938c6e7c2644bea3aa4a62c5a5e"
  },
  {
    "url": "blog/7-steps-to-create-personalised-learning-plans-for-students/index.html",
    "revision": "cc0556a2209239c04c7641f252b0e5e7"
  },
  {
    "url": "blog/7-steps-to-create-personalised-learning-plans-for-students/index.png",
    "revision": "f9413d1c1275d41a86be133eafbdd05c"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "ff28aa9d9b4262d9b346d0ebaff26309"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.png",
    "revision": "6b78ba83d51d3019bd49055002ed5a03"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "03e151d285a25273d39551c9978e8872"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.png",
    "revision": "58632803dcd69b60038ccf1dd6330491"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "9c5e6b43364e4fea1a1f223631c9b9fe"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.png",
    "revision": "c6aeacdb96f35bc702d7137504d3ca2e"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.html",
    "revision": "6dc6c70a2e30dfadd54023e9ba368b7b"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.png",
    "revision": "a056654e362017180bf9ba16628f6c15"
  },
  {
    "url": "blog/celebrating-10-years-of-helperbird/index.html",
    "revision": "0a11d532695d87761ca7d66e61420578"
  },
  {
    "url": "blog/celebrating-10-years-of-helperbird/index.png",
    "revision": "3efead1a7735c445386327d660d2516f"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.html",
    "revision": "76beeae42a987324747cbe70c5d127b5"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.png",
    "revision": "aa7eb8115b33f9857a408db74b72999d"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.html",
    "revision": "0256cc415648b9543b11e4551097dab8"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.png",
    "revision": "2c0be92517fe5cbc5b5e2499dc95872d"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.html",
    "revision": "f5fdaea99a69a0190838dfce1d7060e2"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.png",
    "revision": "3a55e0a35d3efcfe157510a0db9204b6"
  },
  {
    "url": "blog/heads-up-helperbirds-got-immersive-reader-too-extension-free/index.html",
    "revision": "216bc6a95cb74aabbb835ec51f819030"
  },
  {
    "url": "blog/heads-up-helperbirds-got-immersive-reader-too-extension-free/index.png",
    "revision": "cf0431ff27105717a9479a773e4b30fd"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.html",
    "revision": "57a79ff17f9a4ce01cef640c7c295e0a"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.png",
    "revision": "5c532b928d132d061b33033b3e757d2a"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.html",
    "revision": "8713fb79a06a8d9a2b69210f8cca3851"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.png",
    "revision": "60f3bb5eccfc52cccafdecf25f0bc825"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.html",
    "revision": "08d70dec380be00312fd4d068a658125"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.png",
    "revision": "bfcdd986c3952b521a0fa6fd2e5a31da"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "909e945fd03e72c96794a57081463a8f"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.png",
    "revision": "05bcb5ec934971f2275cef56b765ec25"
  },
  {
    "url": "blog/helping-students-thrive-with-helperbirds-accessibility-tools/index.html",
    "revision": "b54c942702e69741d83fba869d62b949"
  },
  {
    "url": "blog/helping-students-thrive-with-helperbirds-accessibility-tools/index.png",
    "revision": "242c82899f21a8688cf7be4607e1f624"
  },
  {
    "url": "blog/how-extracurriculars-boost-self-esteem-in-dyslexic-learners/index.html",
    "revision": "5d7f1e9e9d5fd15385018809c6c8feb4"
  },
  {
    "url": "blog/how-extracurriculars-boost-self-esteem-in-dyslexic-learners/index.png",
    "revision": "e3e376946ca97c0cd5f97f1f6620d493"
  },
  {
    "url": "blog/how-helperbird-can-support-homebound-learning-for-recovering-students/index.html",
    "revision": "6dd110bda83b8d4ac50df44ae1ad1810"
  },
  {
    "url": "blog/how-helperbird-can-support-homebound-learning-for-recovering-students/index.png",
    "revision": "30f35355f519ec38ce198e12e4053f9c"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "97038543a01237a19b2390a33dba2b73"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.png",
    "revision": "bbeaa9e99210f7bde69fc4de0b8965b0"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "ded59cadbf2be96b1c563d4e9d5e25cb"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.png",
    "revision": "3e8128aef90c0d6c1b89468fda50056e"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "63aecc95cbd202b730f59fecd1aa5089"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.png",
    "revision": "86158575242df3838df2ffd57e37d6f6"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "03fd42ebcfe1506575e1bfee377b8a58"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.png",
    "revision": "824cc7a8302c082d84c9d3e5b0089ccd"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "0a210513d37adf9fca17b557fa7a6af0"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.png",
    "revision": "458bfac3cabe2c6bb35c46febb64a429"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.html",
    "revision": "718f9fc3694652da877c0bd293b8d597"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.png",
    "revision": "bcbcd7bc7675a837ede9d50bcca455ae"
  },
  {
    "url": "blog/index.html",
    "revision": "cb919c405a9ab3e003eea7e853eacac9"
  },
  {
    "url": "blog/index.png",
    "revision": "bcc3e662977584207cb07f84a6998a44"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "cd30c4a43430334e9637eb4a02862937"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.png",
    "revision": "9679806a64a6851a4412b3aa46c1bac6"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "a8d30d9debbbcfe2ca19964169c6217d"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.png",
    "revision": "5f4be626ad5a45c7d2fedbaa34b97b7e"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "eceb835eadecfa2b80c9be1b993237ce"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.png",
    "revision": "9575babd87f29a023b05444054d595fb"
  },
  {
    "url": "blog/reword-function-student-success-story/index.html",
    "revision": "6763d90659bc624de0ff0775b79bea81"
  },
  {
    "url": "blog/reword-function-student-success-story/index.png",
    "revision": "a4ec73425f5f10e3330268320f8f114b"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.html",
    "revision": "3d76cbd809dc7d313c598630cd389673"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.png",
    "revision": "4400663ee9f606c9bc7c832e0f5ca3b5"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "30ffa28f7bd46d4f9bf5b1b234558039"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.png",
    "revision": "01ebe1541c7f967b621491088e50b561"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "d3914f8754fbd3953df5fe5221a2e593"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.png",
    "revision": "452d4e8557f7664ba0db68b9e49a7718"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "512035c7c734da4ea85da50e94517341"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.png",
    "revision": "7b29c99874ad50438fc90b4d2009b24e"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "e51eb735cab58ab7a12411c197ef0fbe"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.png",
    "revision": "6d4de0704a19ffeee27d3318021d722c"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "03cd00e7b23d28541f24cf6a7053d614"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.png",
    "revision": "f23f528aa1d9bcafbd7c6345de58e46f"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "2c48f5fe34d414775d13bf0b4bdcfaf0"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.png",
    "revision": "1e55f7a58e067bde42189a38c6d80845"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "058b7877bdea5fad67867cb22b687c82"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.png",
    "revision": "a08b57d3c12073ed036ac54723c85dea"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "424c171aee16076f9810ccdc95a8d9dd"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.png",
    "revision": "6bc4b01575a1968a762881381ede2723"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "b612b45d19f99ddaf59e00dd373fdc38"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.png",
    "revision": "7407d17a7d63e915a6ff35805d2500de"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "f268e2e44e1ec06773a49f286a2e9d6c"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.png",
    "revision": "83206967ee26cb90132a47d73d25ada1"
  },
  {
    "url": "blog/transforming-challenges-into-strengths/index.html",
    "revision": "df6533023c8d427a4822c5c7884dd545"
  },
  {
    "url": "blog/transforming-challenges-into-strengths/index.png",
    "revision": "182ad80343ef774d93962a418c9e2895"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "510927b2181ec7876bf5a41d069119f6"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.png",
    "revision": "a72348b42a763fff4838b2229153d56e"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "2bf55c99c77a2a8d8eba40757c61946b"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.png",
    "revision": "c9b1f72d0ed66eb65a5aede39170952a"
  },
  {
    "url": "blog/why-internet-access-is-crucial-for-educational-equity-and-innovation/index.html",
    "revision": "24f65f13a0f9c59754599440d5cea2c9"
  },
  {
    "url": "blog/why-internet-access-is-crucial-for-educational-equity-and-innovation/index.png",
    "revision": "92d63ba8027bb3ccd6c557688f182d97"
  },
  {
    "url": "chrome/index.html",
    "revision": "abde5775a8fa695d2d1437f240f34455"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.html",
    "revision": "a3ba3d974102b64b5c14e75b9dadb384"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.png",
    "revision": "819c07b52a3e982ede47014587ac0217"
  },
  {
    "url": "compare/index.html",
    "revision": "1460522f4545747fe6c9b406550d66c7"
  },
  {
    "url": "compare/index.png",
    "revision": "2e859817dff77bee017ffb99853e6936"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "9af0695e0c4a8b47263b16eab3e29dae"
  },
  {
    "url": "compare/read-and-write-alternative/index.png",
    "revision": "35bfa7c07559c6db37ec9b6c1fdd6755"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "8f15efe5772f02a41a7f1c2217fa2859"
  },
  {
    "url": "compare/snap-and-read-alternative/index.png",
    "revision": "14674aad30a1ca1875541c73b117cf87"
  },
  {
    "url": "compliance/index.html",
    "revision": "02c4710fe5067e007fa5b5a7739ec222"
  },
  {
    "url": "compliance/index.png",
    "revision": "267fee6ba41bfd409948e803150a9344"
  },
  {
    "url": "contact/index.html",
    "revision": "56d99faf822814cd975da4269d31d332"
  },
  {
    "url": "contact/index.png",
    "revision": "75577815a9127c1f398977b3b83575d2"
  },
  {
    "url": "edge/index.html",
    "revision": "c3ebd50d546918025169d62bdc52e471"
  },
  {
    "url": "edu/index.html",
    "revision": "102f8815738071412988247776cb313e"
  },
  {
    "url": "edu/index.png",
    "revision": "1614a96c22921d097817ce81a0b11ac5"
  },
  {
    "url": "enterprise/index.html",
    "revision": "a3b744971571bde0d25d5903ccb03237"
  },
  {
    "url": "enterprise/index.png",
    "revision": "ad1af8d3a578b806d6bded1077d3c3bd"
  },
  {
    "url": "extension/index.html",
    "revision": "8b4e6126692ccde60a2897ade40f3157"
  },
  {
    "url": "extension/index.png",
    "revision": "f3d3108022ad121a9bbb7a2d2bccf039"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "b0db4747c34003c09b3028786618f4df"
  },
  {
    "url": "features/adjust-letters-and-words/index.png",
    "revision": "4c053c69e3a28494e79be9af92cc3e52"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "8b8fac6bbb6c172af5ae278f7f145bd3"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.png",
    "revision": "7426ac3344cbcecaa9b4761b4bb7dea2"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "584ac3e1c01732d77228357cd15bb201"
  },
  {
    "url": "features/analyze/index.png",
    "revision": "c7e26494dd04ff0fdaf4465a45118119"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "1d5bca340f1256a51beae194386be08e"
  },
  {
    "url": "features/annotation/index.png",
    "revision": "1cf7ea0ba3d98257af1577a7026ccd7c"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "b6b0237e594fcebef0a626f9c4bd8a34"
  },
  {
    "url": "features/auto-scroll/index.png",
    "revision": "b5a1ba515d6c180057f1a91cbf3bf8ce"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "3d34db8f834e8a96260def0499e48bd3"
  },
  {
    "url": "features/bookmarks/index.png",
    "revision": "dd25b297879e816c9ec989a111deef3a"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "721328d5143a9cb00828e5725f3b912c"
  },
  {
    "url": "features/color-blindness/index.png",
    "revision": "320f408a60256fa424679f68bbb4bd2a"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "3a3f2b5169b2828b4377c4933d44bb19"
  },
  {
    "url": "features/cursor-control/index.png",
    "revision": "d5cf1f5042d8c07ff582a3cf502338c8"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "0fc4ec646f53aca206b9661555a69af5"
  },
  {
    "url": "features/dictionary/index.png",
    "revision": "e7af7fa7e92ebd53c09c99a129f4a662"
  },
  {
    "url": "features/editor/index.html",
    "revision": "fdb83dd703a6d9d747bcfd6c084a1dbb"
  },
  {
    "url": "features/editor/index.png",
    "revision": "73e4784ddf6e274bb1d8d78d587e3a26"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "8b16edc472fd1d31a7fc034aa38934ba"
  },
  {
    "url": "features/font-sizes/index.png",
    "revision": "ddc518a2a5bc110f0a173334ab6bd834"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "8d79a40cfa0e17b02d5163422b22b89c"
  },
  {
    "url": "features/google-translate/index.png",
    "revision": "d438bc4cfb404c066f5130f385f7f7d2"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "75d1eda1aee0b537b961605cf30437b6"
  },
  {
    "url": "features/gray-hue-overlay/index.png",
    "revision": "03b7d4811de1fb5b746a8f1ac3e39a06"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "ff67a70c0a16ba456be4b390963b592f"
  },
  {
    "url": "features/hide-images/index.png",
    "revision": "96cc4d22534dad2994341ad15050b953"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "2881d3e2a3cd40ee6de0ddd62113be72"
  },
  {
    "url": "features/high-contrast/index.png",
    "revision": "bfdca07daff3f02d1971b008229a8b52"
  },
  {
    "url": "features/highlight-menu/index.html",
    "revision": "5a54f4c2faf81f4b0900a8d2bb4a2804"
  },
  {
    "url": "features/highlight-menu/index.png",
    "revision": "e43c6c6d0c79ffe7b86113f652b1f01f"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "f1fcf13fc600d951fd4ad4fbf939da48"
  },
  {
    "url": "features/highlight-paragraphs/index.png",
    "revision": "92c804b8f76ab5eb941468f19862861c"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "52ad4f38e14e8b38b9982d02841d0623"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.png",
    "revision": "c4d0ac0aca79f37bcb6730ac5f24e011"
  },
  {
    "url": "features/index.html",
    "revision": "3e7307bdfcf11697169da21cdad30e19"
  },
  {
    "url": "features/index.png",
    "revision": "804cd692a6f130844fb42f982155fbc1"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "6330da604843e94f9b2592d45e191128"
  },
  {
    "url": "features/mute-videos/index.png",
    "revision": "e3eb32b765f8d5f944d5fd3f77c11e0a"
  },
  {
    "url": "features/notes/index.html",
    "revision": "44f21cdfa2abbff0e7b97168aa431bd7"
  },
  {
    "url": "features/notes/index.png",
    "revision": "b49d61249ac65edf1eeabda088515ec1"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "ab503da728b84a22177bf83eb186148b"
  },
  {
    "url": "features/optical-character-recognition/index.png",
    "revision": "6cb70582566fd42f243f5499992f0494"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "8a697830749c674e21f29b8c8e2c048d"
  },
  {
    "url": "features/overlay/index.png",
    "revision": "3a1dc2218a135ac26966328c534787b6"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "5d484a190624da1cfd3fd91d63e035c8"
  },
  {
    "url": "features/paragraph-widths/index.png",
    "revision": "72d9cf91ce9ce12f9fa6ecb75bd3faac"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "15cf89ec5c39d2d282322f86fab8122e"
  },
  {
    "url": "features/pdfs/index.png",
    "revision": "8bddafc220b30ccaee204af29dcd8d20"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "fab187d384a9994b4c26a3bf12976698"
  },
  {
    "url": "features/printing-tool/index.png",
    "revision": "5c7a033ec12157394726e746792b6797"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "b16184b511b2d095848ef22e2524cf0c"
  },
  {
    "url": "features/privacy/index.png",
    "revision": "f99636300d30a943cc681190b5f61fd5"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "6f18a40b1b23136a3c9725450bbe40c9"
  },
  {
    "url": "features/reading-guide/index.png",
    "revision": "0ac4f34af6c76852a54bcb000c00c027"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.html",
    "revision": "dd9c378f152d89c92d1da92cc4041ce3"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.png",
    "revision": "49e5f4c10de0b3722e4300006ba043d4"
  },
  {
    "url": "features/reword-and-simplify-websites/index.html",
    "revision": "27c8d3d98b5fe6caf6dcda784e31b3c4"
  },
  {
    "url": "features/reword-and-simplify-websites/index.png",
    "revision": "8a177b98125fb8fcec142a893f6adc5d"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "60b4246b4761f085ba9920801546d2be"
  },
  {
    "url": "features/ruler/index.png",
    "revision": "55586186bb226cc0425ab23f084fe7d4"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "033b1766f40b9b82d3790122c00b1a22"
  },
  {
    "url": "features/screenshot/index.png",
    "revision": "c589342a9c5f7f5add560cf3f3de6aaa"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "43582c38c153270ce6eaf78dddbe9702"
  },
  {
    "url": "features/shortcuts/index.png",
    "revision": "1b04811d67706f94d515bd835e813976"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "b9df8a3559a9b0bfea9ec292f5b84fce"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.png",
    "revision": "6e56f8459d107c0016afb938d059532d"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "793f4a1e05ed75aabad733a51e75bb4d"
  },
  {
    "url": "features/speech-to-text/index.png",
    "revision": "4ca4836bd584b76b70c1ef70d20709a8"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "1fe88c3572eebcf1830f5639d5b169e0"
  },
  {
    "url": "features/speed-reading-extension/index.png",
    "revision": "9ca54234dc7d55d22df67490c22cfa25"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "16840a6e0a9f75f224b8d5a2ae76c2ea"
  },
  {
    "url": "features/spell-check/index.png",
    "revision": "25b6d5025b86fc8ef66c29ec95c55947"
  },
  {
    "url": "features/styles/index.html",
    "revision": "f0b327299a672043249bdba3875d8578"
  },
  {
    "url": "features/styles/index.png",
    "revision": "944deafb7b23814f97310e6f65f984b1"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "5e15ca440fdc3bab6fe819bb1f3e2576"
  },
  {
    "url": "features/summarizing-tool/index.png",
    "revision": "41640846fcda32ddcf17bbae4a30e304"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "d54912cad0a058ab04b6d59a3085dd8b"
  },
  {
    "url": "features/text-align/index.png",
    "revision": "c96a2e3ca7e06e4190e822ecc0e5f15f"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "b250e4c5e91a8d34ba3feab68c185e8c"
  },
  {
    "url": "features/text-to-speech/index.png",
    "revision": "a95da60c94b64152dfb20fea347e0964"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.html",
    "revision": "b1f10a5157a8e4664f85f570bf3655ef"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.png",
    "revision": "b08f7de0e205af8a863a0667b19c25e7"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "00ecfab7bcd7641ec9073fb6aa2030b8"
  },
  {
    "url": "features/word-prediction/index.png",
    "revision": "0218dfa620c53bfa1b9f88fc53355c57"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "abbbedf3b784dd352f5053c5bae676fa"
  },
  {
    "url": "features/zoom/index.png",
    "revision": "ef49935619769bf8483f9d29fe334f7c"
  },
  {
    "url": "feedback/index.html",
    "revision": "fd1954aff11235c20918b321baf42aa0"
  },
  {
    "url": "feedback/index.png",
    "revision": "b8b3a1b03234aa34b4a498d376c7f58f"
  },
  {
    "url": "firefox/index.html",
    "revision": "c5ed7c950376bbd031b9e9b4bd39a118"
  },
  {
    "url": "googlea4b2e0ff05c168d5.html",
    "revision": "da84e880591336874cb2e7ce330fa6c0"
  },
  {
    "url": "googlea4b2e0ff05c168d5.png",
    "revision": "a87affc91bbdc7568da902f0fdcf3267"
  },
  {
    "url": "guides/index.html",
    "revision": "b6bf949bb1c5446345e4491d002d7da0"
  },
  {
    "url": "help/account/index.html",
    "revision": "01e73be4e05b3a5cd5f44e9d15de0d3b"
  },
  {
    "url": "help/account/index.png",
    "revision": "daf0c41cb58873112c6acbb823137c94"
  },
  {
    "url": "help/admin/index.html",
    "revision": "16f133d931779676f2c9a717e7af1239"
  },
  {
    "url": "help/admin/index.png",
    "revision": "daf0c41cb58873112c6acbb823137c94"
  },
  {
    "url": "help/apps/index.html",
    "revision": "95d441daf88885e84196c37cdba2b979"
  },
  {
    "url": "help/apps/index.png",
    "revision": "bc9c3a242e5822c6d4e8466e820a8518"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.html",
    "revision": "cc41422a38f7f3a5bc7d39afdd030b0d"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.png",
    "revision": "f0215246b702fba5204681715071a4bf"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.html",
    "revision": "48aa7265368af3f6eb677c86415bb92b"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.png",
    "revision": "83a7f19dc171ceca18b209bb1fcb2ffa"
  },
  {
    "url": "help/feature-not-supported-on-page/index.html",
    "revision": "9d3e19a5d30d10cd5acdbc3a2612931e"
  },
  {
    "url": "help/feature-not-supported-on-page/index.png",
    "revision": "e9d9c024a3be318a3dfa97ed4e919da1"
  },
  {
    "url": "help/features/index.html",
    "revision": "5a89b9367dbf985f1e4d2c4cb4ba7b08"
  },
  {
    "url": "help/features/index.png",
    "revision": "7b766fafc485e2109dac690458373cbc"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.html",
    "revision": "100b1f56136600416679bc895157f8db"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.png",
    "revision": "9d7ee687c411675e5a918f5f399680c2"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "d145f9203f0c66c43ec11462ce593406"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.png",
    "revision": "2c94d6f43223733d603deed283417575"
  },
  {
    "url": "help/helperbird-for-google-drive-addon/index.html",
    "revision": "b787e680360569c1c265aaa1c581149a"
  },
  {
    "url": "help/helperbird-for-google-drive-addon/index.png",
    "revision": "96a324f34498f73ff15fe9048b2e79c3"
  },
  {
    "url": "help/helperbird-for-google-drive/index.html",
    "revision": "3f3427f28323c696d5962d2c112977d9"
  },
  {
    "url": "help/helperbird-for-google-drive/index.png",
    "revision": "40392afa3c7c419a301da22d1f31cfe3"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "9fb030f4cc0fec782e7de3045eb82fa5"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.png",
    "revision": "497b98e1437385e1cb2900549386e8be"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "e24f54eb0e41f92352e578aec7ccaa75"
  },
  {
    "url": "help/helperbird-for-powerpoint-online/index.html",
    "revision": "9c1f724de1966288c4380b94a9d250b0"
  },
  {
    "url": "help/helperbird-for-powerpoint-online/index.png",
    "revision": "d400f0cce363c2a373a16ba2aa90a388"
  },
  {
    "url": "help/helperbird-for-word-online/index.html",
    "revision": "427fc10cb16baabc01d04494c334b30d"
  },
  {
    "url": "help/helperbird-for-word-online/index.png",
    "revision": "f718746ec35820362558573b4094af17"
  },
  {
    "url": "help/helperbird-pro-firewall-issue/index.html",
    "revision": "49ae9c0242267e41be1f08eef1346f14"
  },
  {
    "url": "help/helperbird-pro-firewall-issue/index.png",
    "revision": "2077163f970caad18748f7435a44db0c"
  },
  {
    "url": "help/how-to-access-usage-dashboard/index.html",
    "revision": "e77100e134e3cff3ea6799cb35a87168"
  },
  {
    "url": "help/how-to-access-usage-dashboard/index.png",
    "revision": "fa60ee3adad5c2907c422cc1ce6f561e"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "db2dc60c10518e94cb437b01cdfe6984"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.png",
    "revision": "c9fb42e00409a38851e9f1f19ee39984"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "c3b3c30209051c4a404f16adcc235ef5"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.png",
    "revision": "1bdcdaf60630e42eb1b2f361eb076187"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "0c226ab950fd151114a09b54c53c55bb"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.png",
    "revision": "0b2babdd8610515133882308a950e649"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "b6d2cc1f04014d11b5f1faf86ddf531c"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.png",
    "revision": "fec5e88581309822e0732e927503a560"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "39d0ed8858f3878f30dc0958a02a4a75"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "886d9b04f340c60cebcbb849f8e77cbf"
  },
  {
    "url": "help/how-to-change-my-email/index.html",
    "revision": "531bc816395668f9d7772ef6585f62d2"
  },
  {
    "url": "help/how-to-change-my-email/index.png",
    "revision": "bfa2635ae8515949179d70f00abd46bb"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "3e87f97ec82d9664e7f7fa9308d7dfc8"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.png",
    "revision": "d6f4aac576655ce32097ac59959572bf"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "8f15e7f24dcdba0b308cb5e19bcbb071"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.png",
    "revision": "83162f5ba1402f0f7f210268ce59e03e"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "f731ca10edf8cd48fc5e5f15c266b39e"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.png",
    "revision": "8d4cb740e3871a582320ad04b33cbe38"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "8b3e8a1673204e1a0a1da0f654fe2d83"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.png",
    "revision": "f20eabba9717b0ed6733fa1602d3b575"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "3e5a6d557f14b88de5ce88fb77495f39"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.png",
    "revision": "822009bffca1eec553b6278a5f723609"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "89e60b38838093ae054fbd6f6686e676"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.png",
    "revision": "53a29641bfbd4f0a28afb52e808772bc"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "9ab482239047ed5837033ac0a9c461e2"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.png",
    "revision": "1cf79ed47e8c3a9fac08420602736fbb"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "074a7de0e360bd4dda43ef04c3e2779a"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.png",
    "revision": "73fb58d11a288abbb4b036d708305f18"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "8f3dbe5cea471e0efdb1c3449caa1c71"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.png",
    "revision": "0077eeb7fe4e5cb9ebbe4fa7525d2859"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "3a222f37d5c875ad9c8bf3fd7c7322d2"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.png",
    "revision": "03b8aab013a0c03c0a13d69ac137b4c3"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "b00b0de736783961cd08b9a61bf74634"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.png",
    "revision": "1cf79ed47e8c3a9fac08420602736fbb"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "0a6a455c344020246f4f93c522e34603"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.png",
    "revision": "c96a2e3ca7e06e4190e822ecc0e5f15f"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "dbf25e319f2dd996a2936c497f282762"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.png",
    "revision": "6a1bcbdc4beefc6db04b836afbeac822"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "13629c60d932e17aca064614bae225fa"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.png",
    "revision": "8693fd6c166322a686de0b3bd0bcd1d9"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "42dd7b93d21b506f46499c6ecb210dfa"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.png",
    "revision": "f92058a72bfd81f55772b7b3a4ecf3a9"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "6fd2ca286967830a25b5da5921843852"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.png",
    "revision": "c300049d53177f6a5412347d902f8a09"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "97eb685faa4f8bc39a97a896a3ee6c2b"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.png",
    "revision": "79ad51d7f3a955079f65f243fd74803c"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "a025fbcb36822a01bdaf430dbc2f5ca8"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.png",
    "revision": "287ef8a47f9bdfa62c196ff34ab64ed4"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "6e3a8f1f54a960cdb27dd3cc6e303a70"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.png",
    "revision": "6a9b1bbfa83e0aefc64969ef260ae9f2"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.html",
    "revision": "03fb816238d892f6427df1b69741b0e5"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.png",
    "revision": "6b1de43e04da15779f096934f80dc836"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "828a2b6a922e23b07a36fee6e857c105"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.png",
    "revision": "c272eab5e0a5110f3b3857e6db2aacc4"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "d5fb50b91b8ea80ba12cf9af11d0172c"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.png",
    "revision": "28497dc7101d9f6351126e8a884ee2dd"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "8d23825a96f80f77399a33ee9e0adf53"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.png",
    "revision": "4d50728f6bc1a3079e12e68776225532"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "0dad05105ce99e4feb633ab2a2b9ad27"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.png",
    "revision": "be10a7e0e3681d8692b160389193efbb"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "14c847d26e205636218776497409d920"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.png",
    "revision": "804a70f3d8897279465c50796795636e"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "1635192f5b1d55a1a8fd908b7c5ea5c2"
  },
  {
    "url": "help/how-to-pause-helperbird/index.png",
    "revision": "663831f99d13895decd92d8d2dd74b17"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "450bb4e4c4946b065d9e95909e5efb91"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.png",
    "revision": "7ad0329c10116c8828df150017c40a29"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "118dc0e305592688d13acf93ab3b96c6"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.png",
    "revision": "518c93d79721d6a8d9c4e826f663e7ea"
  },
  {
    "url": "help/how-to-redeem-helperbird-pro-voucher/index.html",
    "revision": "4fdf17eef07fe0535997f776b1e67d90"
  },
  {
    "url": "help/how-to-redeem-helperbird-pro-voucher/index.png",
    "revision": "c1d2f48979fee8202f88f07467d7727d"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "138d2eea0a0217695c5f4db450369e47"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.png",
    "revision": "1c9a490d79176d7376176fea62c67f94"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "7fe162291c5c465026dae9ca8dd348c9"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.png",
    "revision": "042dfe00c83b4b30dd37f148a57e46f5"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "b9d9ae37db40f6062a959f2d4870001a"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.png",
    "revision": "b20cc249a06619ddd2f9e75d46a9bf84"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "ed506911c380bfa46262f74889dd9455"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.png",
    "revision": "da11d1724970afe74b3301bc85f27d31"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "ca2fe91edea26437546f9e92aa2aedc4"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.png",
    "revision": "a7e0f4014caba6236bbb752b0791fb79"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "606a94592a8745fbd4da981f420efde4"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.png",
    "revision": "87f83f60b0ca2a0a7d0ad5fe26ca681a"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.html",
    "revision": "37fdff7cd2e3036b4f0bcf3d1b366d43"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.png",
    "revision": "f7da3b5b3245ae69677d96ce75ee7dbd"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "1d3441bc037f0d70794b66adba73533c"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.png",
    "revision": "55586186bb226cc0425ab23f084fe7d4"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "40a30b5eaee2e894f533e84d9f7a86ad"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.png",
    "revision": "5cd35259036903bfb8afb796d306540d"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "2e847d9d4a43e0e4d95d89d90b3d90f6"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.png",
    "revision": "0ac4f34af6c76852a54bcb000c00c027"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "4ab05038c91afb2d2eb7570223923f8e"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.png",
    "revision": "cd8280a3b82d318eaeef26801189bd20"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.html",
    "revision": "1973b1c585e64d27e0d57dae3593fb29"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.png",
    "revision": "91aa3893e2d59c21c34045e250d63e16"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.html",
    "revision": "6e7ec7e9adf63b9cbbf7167db0477bab"
  },
  {
    "url": "help/how-to-use-helperbird-media-features/index.html",
    "revision": "6e7ec7e9adf63b9cbbf7167db0477bab"
  },
  {
    "url": "help/how-to-use-helperbird-reading-features/index.html",
    "revision": "6e7ec7e9adf63b9cbbf7167db0477bab"
  },
  {
    "url": "help/how-to-use-helperbird-reading-tools-and-features/index.html",
    "revision": "6e7ec7e9adf63b9cbbf7167db0477bab"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "c1978e3d2dfbe91d8f5e7008f9f77fcd"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.png",
    "revision": "06f667bad161874ad5a77f362b4f68d3"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "61fab2c1854115c015f1f1ae67ae22b6"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.png",
    "revision": "58c3742391eee617cd13508226f41c70"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "bf4433508e00103933c6d99bfc8b5a79"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.png",
    "revision": "fd21e4df36b8bad2a507b89b365023d6"
  },
  {
    "url": "help/how-to-use-helperbirds-writing-features/index.html",
    "revision": "6e7ec7e9adf63b9cbbf7167db0477bab"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "fc191f9a5ebb8c336d9eebb715296535"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.png",
    "revision": "c4d0ac0aca79f37bcb6730ac5f24e011"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "f3d206baf3376a0d5c226b805a7f7b4f"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.png",
    "revision": "cbbb87667469e16f66c6841ba21e70b7"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.html",
    "revision": "2cf686d56d8e67eaad180ccac82d346d"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.png",
    "revision": "49e5f4c10de0b3722e4300006ba043d4"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "9b845ab82cd1e5f007c9cf78bbb278f3"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.png",
    "revision": "4ca4836bd584b76b70c1ef70d20709a8"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "7a5f4e4cfa30e24464422b99be164cc7"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.png",
    "revision": "ffb3d789acd1da27ac14f271a0be5dde"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "c054c56cf56a54974c08e66519485afb"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.png",
    "revision": "c0557fda92737f932f2563f57f62e67e"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.html",
    "revision": "8ddbd17847536c72c6645996992d9208"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.png",
    "revision": "e43c6c6d0c79ffe7b86113f652b1f01f"
  },
  {
    "url": "help/how-to-use-the-maths-reader-in-helperbird.md/index.html",
    "revision": "cbebf4ee77a3d10e68efbf1c8cb61d8e"
  },
  {
    "url": "help/how-to-use-the-maths-reader-in-helperbird.md/index.png",
    "revision": "c7e08f21b5284fdee65ef584cb3155df"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "0de0a2af064abaa50d0f3b21575802f0"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.png",
    "revision": "73b86e5c2a1a503dd24d446144eef75c"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.html",
    "revision": "12081d834c8ba48e8cf8c08b367d09e1"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.png",
    "revision": "9ca54234dc7d55d22df67490c22cfa25"
  },
  {
    "url": "help/how-to-use-volume-booster-on-any-website-with-helperbird/index.html",
    "revision": "0651a1776aca2c4ffea2cb9e381064e6"
  },
  {
    "url": "help/how-to-use-volume-booster-on-any-website-with-helperbird/index.png",
    "revision": "1971c7c0e5b7c6c6a506e1e29205aa51"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "8bc8155ba9b82685b816c15700da9886"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.png",
    "revision": "0218dfa620c53bfa1b9f88fc53355c57"
  },
  {
    "url": "help/index.html",
    "revision": "777692db92e9c3e821ff26221607998f"
  },
  {
    "url": "help/index.png",
    "revision": "daf0c41cb58873112c6acbb823137c94"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.html",
    "revision": "7248c01884d5b2a0ed9f4e06b1a34510"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.png",
    "revision": "a4009c68504af75ee1fb7950accacc14"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.html",
    "revision": "e328d6f0f1584b14ce8472d194432962"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.png",
    "revision": "ffad2e0f4b2350eda28b2a542c6280e1"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "106f8217312ccd42fb6ac17573941f0b"
  },
  {
    "url": "help/installing-helperbird/index.png",
    "revision": "e8f733409ecd812e28cb0e0803014e7b"
  },
  {
    "url": "help/introduction/index.html",
    "revision": "0aa6f8b70e124bd25ba179e5a08353a0"
  },
  {
    "url": "help/introduction/index.png",
    "revision": "daf0c41cb58873112c6acbb823137c94"
  },
  {
    "url": "help/ios/index.html",
    "revision": "00033e5fd1b1d07dec7e44dc9dd25845"
  },
  {
    "url": "help/ios/index.png",
    "revision": "daf0c41cb58873112c6acbb823137c94"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "b210e353cb77714e062efa4d233f43ff"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.png",
    "revision": "6328400f2b344eec9d13d6c87557c4e0"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.html",
    "revision": "45d96d246ccbfc1849c26c5e01eb4fe3"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.png",
    "revision": "4823898d0c941b0f9fd9d2c919e44dc6"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.html",
    "revision": "17e1065e57812dd5197a17b44c770cf5"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.png",
    "revision": "8faac7e18801398bd801bca306b8d9da"
  },
  {
    "url": "help/setting-chrome-storage-managed-keys/index.html",
    "revision": "befafc2f361957247de8bde2959f55b8"
  },
  {
    "url": "help/setting-chrome-storage-managed-keys/index.png",
    "revision": "850cb88f4e69118ce1943b6e1af1614b"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.html",
    "revision": "52d151e28bd9d0f92cb2effb8045c86e"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.png",
    "revision": "7adb93b484e7857d3dddd38d50d56cf5"
  },
  {
    "url": "help/sync-data-locally-or-remote-helperbird/index.html",
    "revision": "4b66f72cb58ceb392e4d0a58959f0abc"
  },
  {
    "url": "help/sync-data-locally-or-remote-helperbird/index.png",
    "revision": "15c48e1edb586ef6f9c12d00468903ca"
  },
  {
    "url": "help/trouble/index.html",
    "revision": "a19d25f03bcc62060576d3276dfcd221"
  },
  {
    "url": "help/trouble/index.png",
    "revision": "daf0c41cb58873112c6acbb823137c94"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.html",
    "revision": "25ad32b881f7fad3b617df56f6f0da7e"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.png",
    "revision": "3f5b54fb7cc5bd9b2db4ee1b7e5f0661"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "1919ca640f1b86c3f9c7cc758899952e"
  },
  {
    "url": "help/what-is-helperbird-free/index.png",
    "revision": "eb090d68e34fbfd938090be0dec5735a"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "93b7661ee9450f4857551b8c32495b8a"
  },
  {
    "url": "help/what-is-helperbird-pro/index.png",
    "revision": "3fadfc47888c5798b8d17f40e076628d"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "21f53b8a466a8358a918f4583693ff7d"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.png",
    "revision": "49eb2fb3022046570a7e5f150f852352"
  },
  {
    "url": "help/why-helperbird-and-other-extensions-dont-work-on-certain-pages/index.html",
    "revision": "b778f0ea8244e07bffcd632b4e9fbdf3"
  },
  {
    "url": "help/why-helperbird-and-other-extensions-dont-work-on-certain-pages/index.png",
    "revision": "90df61198ef09d2f8195c1564ef7ab2a"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "4a27649ab904bfe93230bc1cfe78b05d"
  },
  {
    "url": "in-the-news/index.png",
    "revision": "1e433f19067fa63407347bb2ace4c4f1"
  },
  {
    "url": "index.html",
    "revision": "db5583ea71a2b1ccfa63c52500f19567"
  },
  {
    "url": "index.png",
    "revision": "54d3ebce6f122599cb467aacb4e12c4c"
  },
  {
    "url": "key/index.html",
    "revision": "f4b40d9a9c39f667026cf818d7be65b0"
  },
  {
    "url": "key/index.png",
    "revision": "e16bbb6de09f36b00cc23b2363bc1993"
  },
  {
    "url": "login/index.html",
    "revision": "e24f54eb0e41f92352e578aec7ccaa75"
  },
  {
    "url": "order/index.html",
    "revision": "2f6f8624ea750f0009f63e65f39df9b9"
  },
  {
    "url": "order/index.png",
    "revision": "04645d440cff06ae6614f680a4fd9f8b"
  },
  {
    "url": "partners/adriana-garcia/index.html",
    "revision": "3a77598500c5ccbb748216f864b8f289"
  },
  {
    "url": "partners/adriana-garcia/index.png",
    "revision": "551f388fbd5e2de86708b3507a32d57d"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.html",
    "revision": "79ec0ae574c6c973cca95e93d871ff46"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.png",
    "revision": "7e978fceaf6a6585e805d23995d43a4b"
  },
  {
    "url": "partners/index.html",
    "revision": "951cad6e55629da4930125d7f8f85f16"
  },
  {
    "url": "partners/index.png",
    "revision": "de4369e29e433881bf4e81cb2a5b05e2"
  },
  {
    "url": "partners/irene-hughes/index.html",
    "revision": "b7108366b6286a9c1301f36076b91f28"
  },
  {
    "url": "partners/irene-hughes/index.png",
    "revision": "5c61efc35204c2bf77950d079cdc1c32"
  },
  {
    "url": "partners/nova-proton/index.html",
    "revision": "05a610095530846bebefa87aabc4648c"
  },
  {
    "url": "partners/nova-proton/index.png",
    "revision": "e8d0e14d9691222013db88806bfbf114"
  },
  {
    "url": "partners/paul-spencer/index.html",
    "revision": "8a02a9e92312073d75fc4110e2f8fddd"
  },
  {
    "url": "partners/paul-spencer/index.png",
    "revision": "257cbb61b4e775e45cdd091510a94604"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "c08f038bf53c6ae1a0e6f0db25d7f39e"
  },
  {
    "url": "partners/sascharoos/index.png",
    "revision": "606848d5693b937e41fd6e7e5abb2e41"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "c2e0fc264111a4f0ab2fb000b8948850"
  },
  {
    "url": "partners/sprialisconsulting/index.png",
    "revision": "52a34288362d9011a3a2a660039b17a1"
  },
  {
    "url": "pricing/index.html",
    "revision": "0ce180ef28affcec35c66948d809f76e"
  },
  {
    "url": "pricing/index.png",
    "revision": "ac6d7ccfbe6c561ebaad75bc8ecb4df5"
  },
  {
    "url": "privacy/index.html",
    "revision": "8b5099dc35b366a6cc4eaf90c6fae1e2"
  },
  {
    "url": "privacy/index.png",
    "revision": "bf03aa7b6d51ae924df64f26aff42861"
  },
  {
    "url": "products/chrome/index.html",
    "revision": "1f6f5eba95d4aeecaba42ba124043bda"
  },
  {
    "url": "products/chrome/index.png",
    "revision": "5b08f2ceb190b59bd4dce34e8893b9da"
  },
  {
    "url": "products/edge/index.html",
    "revision": "0dc991d865571454c1c58913b8c3c30b"
  },
  {
    "url": "products/edge/index.png",
    "revision": "fb692305ff970c383dbdecbd955424a5"
  },
  {
    "url": "products/firefox/index.html",
    "revision": "2317243d15e7c7cfe860d17ba6105e6d"
  },
  {
    "url": "products/firefox/index.png",
    "revision": "b0fe9d34c3e0930821b497ae9cab5f2d"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "3f7ecdfafd554f606a424739a94f5e89"
  },
  {
    "url": "products/google-addon/index.png",
    "revision": "a1d2571445577f80d5a061cb1b8b160d"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "6431d373d6a4271b885bcfec3d844666"
  },
  {
    "url": "products/ipad/index.png",
    "revision": "cdf490e432a84cfabf19790da83fccfa"
  },
  {
    "url": "recommends/index.html",
    "revision": "86f45c1b62842bf8eaeb0af8a34c066e"
  },
  {
    "url": "recommends/index.png",
    "revision": "8e3db93e5cd233b708163833b893df89"
  },
  {
    "url": "redeem/index.html",
    "revision": "eff63efaca284cd80144aef481926693"
  },
  {
    "url": "redeem/index.png",
    "revision": "11395316e8042e3edd7ac01ad55d0428"
  },
  {
    "url": "refund/index.html",
    "revision": "ce13f815ef5a2b90053d30f429a9f281"
  },
  {
    "url": "refund/index.png",
    "revision": "2871ab09944129faed6438a5b0112c70"
  },
  {
    "url": "reviews/index.html",
    "revision": "49a4c4d380f55da3fe8d1a7e803b7e26"
  },
  {
    "url": "reviews/index.png",
    "revision": "567b9fa948a20e3e2bad91665d7d0773"
  },
  {
    "url": "sales/index.html",
    "revision": "9545fb3582311d14096cb6bdccc42486"
  },
  {
    "url": "sales/index.png",
    "revision": "04645d440cff06ae6614f680a4fd9f8b"
  },
  {
    "url": "security/index.html",
    "revision": "37ffaea5fec9b170456e19b1d2b18ce5"
  },
  {
    "url": "security/index.png",
    "revision": "3bc2f86b4359d9ecaf11de1f18245fe1"
  },
  {
    "url": "sitemap/index.html",
    "revision": "f467153de51c04b9e9de01dc9bc6db53"
  },
  {
    "url": "sitemap/index.png",
    "revision": "7d24e8009ef2a1b80634d8ac5cb7e661"
  },
  {
    "url": "success/index.html",
    "revision": "1e1faf6368947d6f564900fe627dcd47"
  },
  {
    "url": "success/index.png",
    "revision": "367f91d343e37907ba185fb2fd5b0fdb"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.html",
    "revision": "6e4f624d588da7a24b69e7e37dd41f2f"
  },
  {
    "url": "support/cancel/index.html",
    "revision": "dbdefaaffd07da611e06c5917665df4f"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "dbdefaaffd07da611e06c5917665df4f"
  },
  {
    "url": "support/how-to-change-my-email/index.html",
    "revision": "436eba99a03ec6dd078fc1047f280846"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.html",
    "revision": "e24f54eb0e41f92352e578aec7ccaa75"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.html",
    "revision": "9f61c9dc0edf0d876fb524648c2f05a3"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.html",
    "revision": "9d697c4b150c12c8472ba39257cd9521"
  },
  {
    "url": "support/how-to-use-reading-mode-in-google-chrome-firefox-edge/index.html",
    "revision": "fc6d293bc21611f8ebd92ceb5bf48450"
  },
  {
    "url": "support/how-to-use-reading-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.html",
    "revision": "fc6d293bc21611f8ebd92ceb5bf48450"
  },
  {
    "url": "support/index.html",
    "revision": "97daa53b47391f273a4447408e5b22ff"
  },
  {
    "url": "support/index.png",
    "revision": "e4977a66acae81dec924cf70c0f0806c"
  },
  {
    "url": "survey/index.html",
    "revision": "520dd82ffd7ff7665cadc0a4ce95a70b"
  },
  {
    "url": "survey/index.png",
    "revision": "b2ec3cf9ced4b88a516da0d35ab0d0d4"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "e951799a30b17c44e4c19a6d46d3b428"
  },
  {
    "url": "terms-of-service/index.png",
    "revision": "a98ab29a2f0316e320c3e5c0095235aa"
  },
  {
    "url": "testimonials/index.html",
    "revision": "6b79291997517f2acb0d9c2a1562b943"
  },
  {
    "url": "testimonials/index.png",
    "revision": "40b264cf44466cdd6555c4225cc57720"
  },
  {
    "url": "tutorials/index.html",
    "revision": "ae078805a13b230220c125f740467af3"
  },
  {
    "url": "tutorials/index.png",
    "revision": "41f34f3f03bf21b979ac501bc07effb8"
  },
  {
    "url": "updates/102-5-3/index.html",
    "revision": "7bd41daf21515dbb40c986d2a0113f27"
  },
  {
    "url": "updates/102-7-0/index.html",
    "revision": "7bd41daf21515dbb40c986d2a0113f27"
  },
  {
    "url": "updates/102-7-1/index.html",
    "revision": "7bd41daf21515dbb40c986d2a0113f27"
  },
  {
    "url": "updates/index.html",
    "revision": "50d05264af4c6636ec0b4bc9549df7b0"
  },
  {
    "url": "updates/index.png",
    "revision": "93f8507bfde2cbe9e7ccf6552a3a0a61"
  },
  {
    "url": "updates/robin/index.html",
    "revision": "7bd41daf21515dbb40c986d2a0113f27"
  },
  {
    "url": "usecases/index.html",
    "revision": "12231a16c2807696f012eeadbd04c65c"
  },
  {
    "url": "usecases/index.png",
    "revision": "fbd835bdca6d4ae0bd48b317e863be80"
  },
  {
    "url": "welcome/index.html",
    "revision": "8959795bc008b40147d9a489ca01f3ba"
  },
  {
    "url": "welcome/index.png",
    "revision": "cd84828f4a0f2eb9bb22a81f065c67bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
