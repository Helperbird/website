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
    "revision": "ab5bc4b23612766a062a49ff883cca96"
  },
  {
    "url": "404.png",
    "revision": "705c095a9e5869af74def9b4b87ac1e8"
  },
  {
    "url": "about/index.html",
    "revision": "087dbdc236bd095c2648f6d94d95fb48"
  },
  {
    "url": "about/index.png",
    "revision": "d73e548ec1590e13f0c4757f575ed02d"
  },
  {
    "url": "accessibility-statement/index.html",
    "revision": "5053f34eaa12dabcaf79e5e51572c653"
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
    "revision": "c6c05902e86194ac0d1cd3addef98979"
  },
  {
    "url": "assets/js/main.css",
    "revision": "55171ab713c444656288750df76eb5fc"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.html",
    "revision": "dd24426c6398d29be3680b10470c31b2"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.png",
    "revision": "4d74e75cb116139230da54ebf81f6bff"
  },
  {
    "url": "blog/4-key-strategies-for-communicating-your-child-needs-to-school/index.html",
    "revision": "9f6f6edfaa40e955d292564875ffffe0"
  },
  {
    "url": "blog/4-key-strategies-for-communicating-your-child-needs-to-school/index.png",
    "revision": "4b91a4496f0a111e83907ffa1df1f6f2"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.html",
    "revision": "c88f16b3d333b7d8047bcc0d25709125"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.png",
    "revision": "7a83dedffddf0682184e8c111dca2532"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "6af7d025a9fd80b723223116b8100c1c"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.png",
    "revision": "3b62b938c6e7c2644bea3aa4a62c5a5e"
  },
  {
    "url": "blog/7-steps-to-create-personalised-learning-plans-for-students/index.html",
    "revision": "8302fb106c67d9e70ade75f6d5e1c760"
  },
  {
    "url": "blog/7-steps-to-create-personalised-learning-plans-for-students/index.png",
    "revision": "f9413d1c1275d41a86be133eafbdd05c"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "6ce06ea56c1a337143908f25831f1a6d"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.png",
    "revision": "6b78ba83d51d3019bd49055002ed5a03"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "09a948884599b7610a6aca53684707d6"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.png",
    "revision": "58632803dcd69b60038ccf1dd6330491"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "9e8d685002c72ff470cd4f77a41807fd"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.png",
    "revision": "c6aeacdb96f35bc702d7137504d3ca2e"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.html",
    "revision": "b57b61ec823768f282e6e5a082c56e1f"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.png",
    "revision": "a056654e362017180bf9ba16628f6c15"
  },
  {
    "url": "blog/celebrating-10-years-of-helperbird/index.html",
    "revision": "43aa962d543a9c65d30ce70070269483"
  },
  {
    "url": "blog/celebrating-10-years-of-helperbird/index.png",
    "revision": "3efead1a7735c445386327d660d2516f"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.html",
    "revision": "5d85dc30ea9d9742d2b0a50a9832da24"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.png",
    "revision": "aa7eb8115b33f9857a408db74b72999d"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.html",
    "revision": "7a4a81becc754cdbba557c5593fa9a81"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.png",
    "revision": "2c0be92517fe5cbc5b5e2499dc95872d"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.html",
    "revision": "49b3943910645579f215c9f89eb6e6c3"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.png",
    "revision": "3a55e0a35d3efcfe157510a0db9204b6"
  },
  {
    "url": "blog/heads-up-helperbirds-got-immersive-reader-too-extension-free/index.html",
    "revision": "13f7a14ff79b425b7a84df8ba0a25961"
  },
  {
    "url": "blog/heads-up-helperbirds-got-immersive-reader-too-extension-free/index.png",
    "revision": "cf0431ff27105717a9479a773e4b30fd"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.html",
    "revision": "f2e36383ba78bde8173c875cb71e4d12"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.png",
    "revision": "5c532b928d132d061b33033b3e757d2a"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.html",
    "revision": "c7a0c9eeca9ef581641ba3146cd49986"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.png",
    "revision": "60f3bb5eccfc52cccafdecf25f0bc825"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.html",
    "revision": "91e3f0bca85bee2a949a642a96d1e16e"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.png",
    "revision": "bfcdd986c3952b521a0fa6fd2e5a31da"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "cb7f0c17447b66164c02f643701c7f87"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.png",
    "revision": "05bcb5ec934971f2275cef56b765ec25"
  },
  {
    "url": "blog/helping-students-thrive-with-helperbirds-accessibility-tools/index.html",
    "revision": "8bdb6b64342ce059fc6bbaf0b1cf1be7"
  },
  {
    "url": "blog/helping-students-thrive-with-helperbirds-accessibility-tools/index.png",
    "revision": "242c82899f21a8688cf7be4607e1f624"
  },
  {
    "url": "blog/how-extracurriculars-boost-self-esteem-in-dyslexic-learners/index.html",
    "revision": "ef4b979c031a730bd1fd4f88ec2a2e5d"
  },
  {
    "url": "blog/how-extracurriculars-boost-self-esteem-in-dyslexic-learners/index.png",
    "revision": "e3e376946ca97c0cd5f97f1f6620d493"
  },
  {
    "url": "blog/how-helperbird-can-support-homebound-learning-for-recovering-students/index.html",
    "revision": "e5e7eb0b783d021c90707cb834a27ae7"
  },
  {
    "url": "blog/how-helperbird-can-support-homebound-learning-for-recovering-students/index.png",
    "revision": "30f35355f519ec38ce198e12e4053f9c"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "671e03e23bb4f87a3c0107fc6f1d5798"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.png",
    "revision": "bbeaa9e99210f7bde69fc4de0b8965b0"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "cea0e17cfb02019d378fe757e9d58085"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.png",
    "revision": "3e8128aef90c0d6c1b89468fda50056e"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "ead773f1ef95189531e1b0c58d628551"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.png",
    "revision": "86158575242df3838df2ffd57e37d6f6"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "189b129ed84837b8d9b50ddebf0f0624"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.png",
    "revision": "824cc7a8302c082d84c9d3e5b0089ccd"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "bcc4f240a0d5437506daf4d9c1af5bb3"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.png",
    "revision": "458bfac3cabe2c6bb35c46febb64a429"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.html",
    "revision": "25f9955666f85538b06f31d9556dfa97"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.png",
    "revision": "bcbcd7bc7675a837ede9d50bcca455ae"
  },
  {
    "url": "blog/index.html",
    "revision": "8bd312b1217571774ae05c113380e26a"
  },
  {
    "url": "blog/index.png",
    "revision": "bcc3e662977584207cb07f84a6998a44"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "378df58147faf8efded5a198a29e1320"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.png",
    "revision": "9679806a64a6851a4412b3aa46c1bac6"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "2d63b46d082c01b8806cf3c1ab00797b"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.png",
    "revision": "5f4be626ad5a45c7d2fedbaa34b97b7e"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "23a97113633c53b7101c2a156214d1da"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.png",
    "revision": "9575babd87f29a023b05444054d595fb"
  },
  {
    "url": "blog/reword-function-student-success-story/index.html",
    "revision": "a7b477e6af374d7d45a692b8e32f4e30"
  },
  {
    "url": "blog/reword-function-student-success-story/index.png",
    "revision": "a4ec73425f5f10e3330268320f8f114b"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.html",
    "revision": "60fd0427ffd14c7dc8d953623b7d87b7"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.png",
    "revision": "4400663ee9f606c9bc7c832e0f5ca3b5"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "f05319a23400bf22462ab357991b01c6"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.png",
    "revision": "01ebe1541c7f967b621491088e50b561"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "868a5808dfdc2d015c1ae0ab47db425b"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.png",
    "revision": "452d4e8557f7664ba0db68b9e49a7718"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "699292cd55d9018393e2c7646acbf407"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.png",
    "revision": "7b29c99874ad50438fc90b4d2009b24e"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "1a656f5d25875447278375abec328d08"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.png",
    "revision": "6d4de0704a19ffeee27d3318021d722c"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "16f1a5dccd6ca1f9146f69c4dba99c03"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.png",
    "revision": "f23f528aa1d9bcafbd7c6345de58e46f"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "f7d9e430d0dad4b6ca71d20be651a0fd"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.png",
    "revision": "1e55f7a58e067bde42189a38c6d80845"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "fc8ee93e409d2a4d444ef964fb2d7f3a"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.png",
    "revision": "a08b57d3c12073ed036ac54723c85dea"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "a7e60818d2c3a665fb0ca2c74e776913"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.png",
    "revision": "6bc4b01575a1968a762881381ede2723"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "5d6df1b78e9c6b0693302636db8274bf"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.png",
    "revision": "7407d17a7d63e915a6ff35805d2500de"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "3cdfed56e7260e6fef6ef676b3eb3168"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.png",
    "revision": "83206967ee26cb90132a47d73d25ada1"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "e8768b20ce258cbc256ad8a3728c4360"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.png",
    "revision": "a72348b42a763fff4838b2229153d56e"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "260f1f696e095b05bd9a4aa3587a82c4"
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
    "revision": "8e342a2c3d92147c81b21dae2b31796c"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.png",
    "revision": "819c07b52a3e982ede47014587ac0217"
  },
  {
    "url": "compare/index.html",
    "revision": "ed58a9aaa9d2600577a1bd5e23931369"
  },
  {
    "url": "compare/index.png",
    "revision": "2e859817dff77bee017ffb99853e6936"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "f5c12026afedf7703824c4012b5c8b07"
  },
  {
    "url": "compare/read-and-write-alternative/index.png",
    "revision": "35bfa7c07559c6db37ec9b6c1fdd6755"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "2d31be97898ba1079fe0cf582aee530f"
  },
  {
    "url": "compare/snap-and-read-alternative/index.png",
    "revision": "14674aad30a1ca1875541c73b117cf87"
  },
  {
    "url": "compliance/index.html",
    "revision": "f7d77ce526eeb89fcf8ad81d3f0bcece"
  },
  {
    "url": "compliance/index.png",
    "revision": "267fee6ba41bfd409948e803150a9344"
  },
  {
    "url": "contact/index.html",
    "revision": "f8c9ac22057d50adc0966e5f35ff66cd"
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
    "revision": "8a4bd4eb7a1da04d518d2bf5031115a3"
  },
  {
    "url": "edu/index.png",
    "revision": "1614a96c22921d097817ce81a0b11ac5"
  },
  {
    "url": "enterprise/index.html",
    "revision": "d605f87eb2a8711b7b281ab7addbe988"
  },
  {
    "url": "enterprise/index.png",
    "revision": "ad1af8d3a578b806d6bded1077d3c3bd"
  },
  {
    "url": "extension/index.html",
    "revision": "cfe9be459547e8c292debf32b538bf9d"
  },
  {
    "url": "extension/index.png",
    "revision": "f3d3108022ad121a9bbb7a2d2bccf039"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "58e8614bd120228f0acb6ece70931d1f"
  },
  {
    "url": "features/adjust-letters-and-words/index.png",
    "revision": "4c053c69e3a28494e79be9af92cc3e52"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "6862bf66b170cd8370aa4a2678157b27"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.png",
    "revision": "7426ac3344cbcecaa9b4761b4bb7dea2"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "de140c25323dc527c65b22ace526826d"
  },
  {
    "url": "features/analyze/index.png",
    "revision": "c7e26494dd04ff0fdaf4465a45118119"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "c13ce5d3eb57ce83faec901f0fdea91d"
  },
  {
    "url": "features/annotation/index.png",
    "revision": "1cf7ea0ba3d98257af1577a7026ccd7c"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "b7d5346513198a59be42ffb508c0e69b"
  },
  {
    "url": "features/auto-scroll/index.png",
    "revision": "b5a1ba515d6c180057f1a91cbf3bf8ce"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "cc070ba130fcbd52a47e377401444351"
  },
  {
    "url": "features/bookmarks/index.png",
    "revision": "dd25b297879e816c9ec989a111deef3a"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "4254acd017ba5b367d19df7494f7914b"
  },
  {
    "url": "features/color-blindness/index.png",
    "revision": "320f408a60256fa424679f68bbb4bd2a"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "5a0d9c296738b1290a9a85184fcc11ce"
  },
  {
    "url": "features/cursor-control/index.png",
    "revision": "d5cf1f5042d8c07ff582a3cf502338c8"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "46d3a0c4965d39559e16a39ce18ca8c4"
  },
  {
    "url": "features/dictionary/index.png",
    "revision": "e7af7fa7e92ebd53c09c99a129f4a662"
  },
  {
    "url": "features/editor/index.html",
    "revision": "392b8546f45adba3a7a97db05dff68b8"
  },
  {
    "url": "features/editor/index.png",
    "revision": "73e4784ddf6e274bb1d8d78d587e3a26"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "27c3b399423f9326fb4bec2ed58623e8"
  },
  {
    "url": "features/font-sizes/index.png",
    "revision": "ddc518a2a5bc110f0a173334ab6bd834"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "f8e782e938301bc0d1b3a2e47e8c9a52"
  },
  {
    "url": "features/google-translate/index.png",
    "revision": "d438bc4cfb404c066f5130f385f7f7d2"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "748c9610322d702a97f516082dabf2dc"
  },
  {
    "url": "features/gray-hue-overlay/index.png",
    "revision": "03b7d4811de1fb5b746a8f1ac3e39a06"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "1956bca7f2171bb451973c20773f028b"
  },
  {
    "url": "features/hide-images/index.png",
    "revision": "96cc4d22534dad2994341ad15050b953"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "e69d4dcd812b97f94605c2b63616792c"
  },
  {
    "url": "features/high-contrast/index.png",
    "revision": "bfdca07daff3f02d1971b008229a8b52"
  },
  {
    "url": "features/highlight-menu/index.html",
    "revision": "6abdeca68949e889eb3417abdfd5b882"
  },
  {
    "url": "features/highlight-menu/index.png",
    "revision": "e43c6c6d0c79ffe7b86113f652b1f01f"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "2e46b6b5f0a089e50b0ce5aad60dfd77"
  },
  {
    "url": "features/highlight-paragraphs/index.png",
    "revision": "92c804b8f76ab5eb941468f19862861c"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "06283f490bb5b742e9de7f1ffd5d2af8"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.png",
    "revision": "c4d0ac0aca79f37bcb6730ac5f24e011"
  },
  {
    "url": "features/index.html",
    "revision": "b1a32081475e9da9d426fedfb0b917a8"
  },
  {
    "url": "features/index.png",
    "revision": "804cd692a6f130844fb42f982155fbc1"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "967679885f9f9bb26e89918effc48605"
  },
  {
    "url": "features/mute-videos/index.png",
    "revision": "e3eb32b765f8d5f944d5fd3f77c11e0a"
  },
  {
    "url": "features/notes/index.html",
    "revision": "001a45458e47749145995bf1e09405a7"
  },
  {
    "url": "features/notes/index.png",
    "revision": "b49d61249ac65edf1eeabda088515ec1"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "c64185aa3ac6683f0b9a06e0dccbe076"
  },
  {
    "url": "features/optical-character-recognition/index.png",
    "revision": "6cb70582566fd42f243f5499992f0494"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "2d170d8f3fe6d054612d21fc46099b60"
  },
  {
    "url": "features/overlay/index.png",
    "revision": "3a1dc2218a135ac26966328c534787b6"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "b48828f7362d405a3a658ae64c9cc586"
  },
  {
    "url": "features/paragraph-widths/index.png",
    "revision": "72d9cf91ce9ce12f9fa6ecb75bd3faac"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "0b6bf10c2863a3116e988650996ea0b9"
  },
  {
    "url": "features/pdfs/index.png",
    "revision": "8bddafc220b30ccaee204af29dcd8d20"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "c2fea9ebbd1720efaa475a7009013a51"
  },
  {
    "url": "features/printing-tool/index.png",
    "revision": "5c7a033ec12157394726e746792b6797"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "eb7b77cd6e8738581fcf9b767fe9715e"
  },
  {
    "url": "features/privacy/index.png",
    "revision": "f99636300d30a943cc681190b5f61fd5"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "046be4f822217baaaded5b55ef79cb7f"
  },
  {
    "url": "features/reading-guide/index.png",
    "revision": "0ac4f34af6c76852a54bcb000c00c027"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.html",
    "revision": "4b283a91dc6444f27ff1c49cf7ce903c"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.png",
    "revision": "49e5f4c10de0b3722e4300006ba043d4"
  },
  {
    "url": "features/reword-and-simplify-websites/index.html",
    "revision": "822dface4803752ba4eb6d848f564324"
  },
  {
    "url": "features/reword-and-simplify-websites/index.png",
    "revision": "8a177b98125fb8fcec142a893f6adc5d"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "5dac7497feaddfdae1e485710658d431"
  },
  {
    "url": "features/ruler/index.png",
    "revision": "55586186bb226cc0425ab23f084fe7d4"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "cf74bac0013dd1247e4a1e36b7ad516d"
  },
  {
    "url": "features/screenshot/index.png",
    "revision": "c589342a9c5f7f5add560cf3f3de6aaa"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "7d25280783156e9e182d0e3cf34135ac"
  },
  {
    "url": "features/shortcuts/index.png",
    "revision": "1b04811d67706f94d515bd835e813976"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "0ed43a09ac1f49d41924f15257387cd9"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.png",
    "revision": "6e56f8459d107c0016afb938d059532d"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "9ae3015b9080fb9a509ae9e921c1d434"
  },
  {
    "url": "features/speech-to-text/index.png",
    "revision": "4ca4836bd584b76b70c1ef70d20709a8"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "06a7ffe67ed145297fec6a6a5de60781"
  },
  {
    "url": "features/speed-reading-extension/index.png",
    "revision": "9ca54234dc7d55d22df67490c22cfa25"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "6b7de012dd71eaff8992a8533bbf92d9"
  },
  {
    "url": "features/spell-check/index.png",
    "revision": "25b6d5025b86fc8ef66c29ec95c55947"
  },
  {
    "url": "features/styles/index.html",
    "revision": "f9d3f31b5bfe3a5274154296275c744b"
  },
  {
    "url": "features/styles/index.png",
    "revision": "944deafb7b23814f97310e6f65f984b1"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "7801b091d26c5fc1c8107fedf9b2ab79"
  },
  {
    "url": "features/summarizing-tool/index.png",
    "revision": "41640846fcda32ddcf17bbae4a30e304"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "6a2001547d1561c1ea1d75e75baebb0d"
  },
  {
    "url": "features/text-align/index.png",
    "revision": "c96a2e3ca7e06e4190e822ecc0e5f15f"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "7358bc413bd0c7b95ee28e70fd6535a5"
  },
  {
    "url": "features/text-to-speech/index.png",
    "revision": "a95da60c94b64152dfb20fea347e0964"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.html",
    "revision": "e4b65e5355a054c6f0c1934506010d22"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.png",
    "revision": "b08f7de0e205af8a863a0667b19c25e7"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "95d8de54816c2ca3da6e9a3fbdc8b6aa"
  },
  {
    "url": "features/word-prediction/index.png",
    "revision": "0218dfa620c53bfa1b9f88fc53355c57"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "d5c2ce229f2c980a079e65a1b135a604"
  },
  {
    "url": "features/zoom/index.png",
    "revision": "ef49935619769bf8483f9d29fe334f7c"
  },
  {
    "url": "feedback/index.html",
    "revision": "0be4c5398a628f573b0ea80335785c3d"
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
    "revision": "df5d5660c378e97924d58f4aeaf36abf"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.png",
    "revision": "ccbe2549f9c03027c2e1454732d82b61"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.html",
    "revision": "06f33e23fefdc5029ffa1842f3057cea"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.png",
    "revision": "83a7f19dc171ceca18b209bb1fcb2ffa"
  },
  {
    "url": "help/feature-not-supported-on-page/index.html",
    "revision": "62fc28423970d97be1ee9d4e7940258c"
  },
  {
    "url": "help/feature-not-supported-on-page/index.png",
    "revision": "e9d9c024a3be318a3dfa97ed4e919da1"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.html",
    "revision": "66d9755169434df62bb64d0fbf14eb6a"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.png",
    "revision": "6993cfbe3ed6a9db4488344b744fcca8"
  },
  {
    "url": "help/helperbird-for-google-classroom/index.html",
    "revision": "f8f690de44923cfc9096e32e7b5b2b76"
  },
  {
    "url": "help/helperbird-for-google-classroom/index.png",
    "revision": "40392afa3c7c419a301da22d1f31cfe3"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "0e2a26a925fd85b14c63f8cddfb24c9e"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.png",
    "revision": "2c94d6f43223733d603deed283417575"
  },
  {
    "url": "help/helperbird-for-google-drive/index.html",
    "revision": "d2e2f3bbf542acb88e5076d412204cc9"
  },
  {
    "url": "help/helperbird-for-google-drive/index.png",
    "revision": "96a324f34498f73ff15fe9048b2e79c3"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "f4fe85c76c75a1b41b50bd60d37d695e"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.png",
    "revision": "81128ef0c54b09d9e91a11ff52792b2b"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "e890bc5f83c1d3380ac15929c2f82aa6"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.png",
    "revision": "e57a5a03aba09d663a394faacb8f47ce"
  },
  {
    "url": "help/helperbird-for-powerpoint-online/index.html",
    "revision": "9a3f794b0a36e7399ed5bb8b0d127114"
  },
  {
    "url": "help/helperbird-for-powerpoint-online/index.png",
    "revision": "d400f0cce363c2a373a16ba2aa90a388"
  },
  {
    "url": "help/helperbird-for-word-online/index.html",
    "revision": "fcea8b2f8ec9065d85b608917e260f4a"
  },
  {
    "url": "help/helperbird-for-word-online/index.png",
    "revision": "f718746ec35820362558573b4094af17"
  },
  {
    "url": "help/how-to-access-our-helperbird-usage-dashboard/index.html",
    "revision": "2580c5693600515f581ce80957b345bb"
  },
  {
    "url": "help/how-to-access-our-helperbird-usage-dashboard/index.png",
    "revision": "7a4e5fcecb740f15e128aba63f335cde"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "770f0a3cf878985491a0a8ac873df83f"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.png",
    "revision": "c9fb42e00409a38851e9f1f19ee39984"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "53b0ece1ab1c3d99aef5e1bec7118f22"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.png",
    "revision": "f281f8888e1048003e979e0fbd911de0"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "cda7ba5976ebedd8f53b9176af8c14c4"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.png",
    "revision": "0b2babdd8610515133882308a950e649"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "71085664c0c5c21a2b94809c48229318"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.png",
    "revision": "fec5e88581309822e0732e927503a560"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "9667bb0108cdd1ef0c28a472b42a9b05"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "18318edca3b29c09306a2ef5983e6c9c"
  },
  {
    "url": "help/how-to-change-my-email/index.html",
    "revision": "424a50e5554172e0efbd07c9273d997d"
  },
  {
    "url": "help/how-to-change-my-email/index.png",
    "revision": "b64fd00f6c89c1f9b945c036225dfbc1"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "b99797e2d6d5345a6464d6572b5ab801"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.png",
    "revision": "fee2798e1e147b285c2b5c441994bd2d"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "16babfdf6c6008ef70cf1530dd5b29a1"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.png",
    "revision": "69302dc301ec90e0ea5edd6411200d5b"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "37c404596a47b42fed99d6f27d89ee0f"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.png",
    "revision": "c46101ebd538f7a135fd3c06de3db274"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "5217136dc40332fb4d2633f770541e5a"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.png",
    "revision": "0d301146b3c2bc97f19f13101d9b7643"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "815348e5f4a16ec6075120b7b2682f3e"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.png",
    "revision": "822009bffca1eec553b6278a5f723609"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "a10faecf7974e3f28a12ec88e092fd64"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.png",
    "revision": "53a29641bfbd4f0a28afb52e808772bc"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "055db7ddba1dd9dd421558edcec50a45"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.png",
    "revision": "1cf79ed47e8c3a9fac08420602736fbb"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "1410f08ca1bb62204d3aae92f68150f6"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.png",
    "revision": "54b2366afb17cdfd9e15cf48bdb0c47c"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "e9719bb1d7b1fd9eba8a1e2b357ee6a7"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.png",
    "revision": "b19e6ae1250681a06cf6dff1ad403149"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "b1fc3ec60e0b068765f77ecd75f264ef"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.png",
    "revision": "75e6d9e8e5abb91aab86823663e413db"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "dca64c414844966b93f25bb489812e7d"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.png",
    "revision": "1cf79ed47e8c3a9fac08420602736fbb"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "9275fa5860e7b19db6a8fe3920e26ea8"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.png",
    "revision": "bd976f4b0a0a47135b776bb5146552cf"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "9cfb5972acb548ab8fd20b25d36a69d5"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.png",
    "revision": "6a1bcbdc4beefc6db04b836afbeac822"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "490437aeaa825287b75c19237cffb8d0"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.png",
    "revision": "f36aa1c027756470869c8633fe99c29b"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "9aa3103fdf5895e061c8490ddd63f15f"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.png",
    "revision": "cc3df0a4f7e4f07da459f80daa37e2b8"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "33c3ee80cfe542f5e87f61563d868a45"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.png",
    "revision": "f595f63ae4191a7a4d6ec807a069c432"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "52824957ce3f27f5c1fad96d23800554"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.png",
    "revision": "4c388eefd57d56e301fc4719e7ca2da9"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "850469b5054d1f6d0eb4daa300713a95"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.png",
    "revision": "287ef8a47f9bdfa62c196ff34ab64ed4"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "7dc61dd1f10390f8b04ad69fbeae9d82"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.png",
    "revision": "6a9b1bbfa83e0aefc64969ef260ae9f2"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.html",
    "revision": "f56777bfb4577c1811b8647358c28ca2"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.png",
    "revision": "6b1de43e04da15779f096934f80dc836"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "7d1d98b25750424eefc03f97bd651386"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.png",
    "revision": "c272eab5e0a5110f3b3857e6db2aacc4"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "d650cfa0e080525a5ce47455982df41f"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.png",
    "revision": "63a11386ee4ef3e27a3aa396c91dd7fd"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "839a58d649bdb9d5e01ecc054f929a9c"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.png",
    "revision": "4d50728f6bc1a3079e12e68776225532"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "fba1dff27d36020ac11ec3730007ff16"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.png",
    "revision": "e77ba2dc4e225408d53037303a1e4f94"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "bdde1d2863ce82d7405e1571a4e332d1"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.png",
    "revision": "b36de80923c3567e9b763d9f782982d2"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "608c369d0268f67a9b45208d38affabf"
  },
  {
    "url": "help/how-to-pause-helperbird/index.png",
    "revision": "3c0dba3cfba7ed67f8ab712a200222db"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "a1c4cf0b21488b3790cf6ff7a102736e"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.png",
    "revision": "7ad0329c10116c8828df150017c40a29"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "909301975eb897d5b0f00abb7545d054"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.png",
    "revision": "518c93d79721d6a8d9c4e826f663e7ea"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "99683b7b0fb9b93c7e341f3a1f58df03"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.png",
    "revision": "1c9a490d79176d7376176fea62c67f94"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "8f2509d21708b10fea9fbe7483802c3a"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.png",
    "revision": "b794cdb9e4dc1e3fa7d3da6fd2a62f86"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "aaf98b76c869dd57de228df2d28e4f62"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.png",
    "revision": "cb941bf726f636256036b065e2618c54"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "19cd91e3e7744b9f1ec75459deced1a8"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.png",
    "revision": "a16f97cfe3f39771257bbb05894ee9ea"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "f2580c20abe01059567860a8dafdc5e1"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.png",
    "revision": "0d6dafb1f3c1a096268d969e8a83b38b"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "3afc0c775bca18eba73be0ea233bf7ef"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.png",
    "revision": "87f83f60b0ca2a0a7d0ad5fe26ca681a"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.html",
    "revision": "a3272a088f69f77a8ff177037f7b5b61"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.png",
    "revision": "cf5800ab79bfedcb42f71aa900569b4d"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "4014284a4f4bb7476fac1195dc7b6a70"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.png",
    "revision": "55586186bb226cc0425ab23f084fe7d4"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "0912b9ac0d46691b0f7f9092b28aac8d"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.png",
    "revision": "99b4342b97343246e1d49cf0d0b55d0b"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "0e0dc5abcdb12e30332ff87d0e15b827"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.png",
    "revision": "a05028cf5c016cdccf7adf90d5d08689"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "f92ddcbaa1e0fd6c3faec6d02421f11c"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.png",
    "revision": "cd8280a3b82d318eaeef26801189bd20"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.html",
    "revision": "5422f21c330c0ee60e0578dbe411afe0"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.png",
    "revision": "701dac6d31752921a5bb71c50d3836d2"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.html",
    "revision": "99ec0a66d6d3b8284de5c7719491d85c"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.png",
    "revision": "f022fdf8d3e3c39fc1f7b8fac86d20a3"
  },
  {
    "url": "help/how-to-use-helperbird-media-features/index.html",
    "revision": "b241c74eb41dd7c1480b46243a0bc028"
  },
  {
    "url": "help/how-to-use-helperbird-media-features/index.png",
    "revision": "f022fdf8d3e3c39fc1f7b8fac86d20a3"
  },
  {
    "url": "help/how-to-use-helperbird-reading-features/index.html",
    "revision": "9c613593593dc40d1b208acbcd35e21f"
  },
  {
    "url": "help/how-to-use-helperbird-reading-features/index.png",
    "revision": "69054d6cf2c716c06de923cf9f3ac528"
  },
  {
    "url": "help/how-to-use-helperbird-reading-tools-and-features/index.html",
    "revision": "2fd337d101ec615907598c8e07c6b3cb"
  },
  {
    "url": "help/how-to-use-helperbird-reading-tools-and-features/index.png",
    "revision": "1a7b4e0d13987b81290c093076789fd7"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "71767a1d9a90d23e172584e23133131d"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.png",
    "revision": "bf3a3eaa7c0124dce6520455527a74af"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "47c0c0a8546c5cacf920aacfb0cdc847"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.png",
    "revision": "2a23190667a428ed189274d6db55ef6c"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "a0c0a6bafc6ee227860fb6bbbc46c6d3"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.png",
    "revision": "fd21e4df36b8bad2a507b89b365023d6"
  },
  {
    "url": "help/how-to-use-helperbirds-style-features/index.html",
    "revision": "48fef66199a069e9c12b09a8a5557c4b"
  },
  {
    "url": "help/how-to-use-helperbirds-style-features/index.png",
    "revision": "171d651cab83f101b5bb4e2c9ccfd434"
  },
  {
    "url": "help/how-to-use-helperbirds-writing-features/index.html",
    "revision": "7726cdfed9694fc7d9d3b36d97c95e80"
  },
  {
    "url": "help/how-to-use-helperbirds-writing-features/index.png",
    "revision": "650b287b4088a3a3ef7d393e3cc7d2fe"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "aad2f36b8d9d3eab64fbc168307f6644"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.png",
    "revision": "c4d0ac0aca79f37bcb6730ac5f24e011"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "224699806765e481a99265a9d5c06ec1"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.png",
    "revision": "af16ea4bcbd2e1803d0d3fafa4e31449"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.html",
    "revision": "3ffe249e63fe3769a40576fa1da404fc"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.png",
    "revision": "49e5f4c10de0b3722e4300006ba043d4"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "a2d4ad97e0d86c8cc26b3e2e4f068073"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.png",
    "revision": "f60b01c3ce2ca2e3488f4696b0dd06a1"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "4fe397637c2cb5f0a3c2c86c38cf0bd1"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.png",
    "revision": "ffb3d789acd1da27ac14f271a0be5dde"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "22fa4b2fcb043de15f95cd847630890d"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.png",
    "revision": "9055e9ee71a2c2de0366ab0d1301a143"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.html",
    "revision": "b72a7cc3202c669457fedf85bc987b13"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.png",
    "revision": "e43c6c6d0c79ffe7b86113f652b1f01f"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "a01986070bd4aed9c4f3de3d18311b2b"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.png",
    "revision": "73b86e5c2a1a503dd24d446144eef75c"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.html",
    "revision": "1a8663f96a77247f47f32721f03c0fd5"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.png",
    "revision": "be4a00575fd30da1b2b58653f228150a"
  },
  {
    "url": "help/how-to-use-the-volume-booster-feature/index.html",
    "revision": "286d2e4e01ee2c3954094d8d4a894ee2"
  },
  {
    "url": "help/how-to-use-the-volume-booster-feature/index.png",
    "revision": "1971c7c0e5b7c6c6a506e1e29205aa51"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "faffbd661c4c9eb239afb04e96e81cdc"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.png",
    "revision": "0218dfa620c53bfa1b9f88fc53355c57"
  },
  {
    "url": "help/index.html",
    "revision": "7c51c61d2fbf079d3ca4d00b0b1da664"
  },
  {
    "url": "help/index.png",
    "revision": "daf0c41cb58873112c6acbb823137c94"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.html",
    "revision": "0627ba7930175798f33f6ea7c241d4f2"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.png",
    "revision": "d88d7b28ace0407be426518bf7c09308"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.html",
    "revision": "a1f86e69bc67a41f81205aeeef4b1d46"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.png",
    "revision": "e87675d6edd12f0fdba15e2737b1ba07"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "b2e6a102d52512851a0942e6eb306071"
  },
  {
    "url": "help/installing-helperbird/index.png",
    "revision": "e8f733409ecd812e28cb0e0803014e7b"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "3970caaef4336d5b12d102d8bfc274df"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.png",
    "revision": "ae726e978c8f8f995fbd16a3c4759769"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.html",
    "revision": "919f124ef541278bded81d27306faabb"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.png",
    "revision": "8d9b55c93547ad1caa46dcb09d1b1573"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.html",
    "revision": "bde4d52abca488446e67e021aba405c4"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.png",
    "revision": "b256dffd86ef9b5c970ee77979fc23ad"
  },
  {
    "url": "help/setting-chrome-storage-managed-keys/index.html",
    "revision": "bf87a22df73dbaa8dcfd4bc99d059e07"
  },
  {
    "url": "help/setting-chrome-storage-managed-keys/index.png",
    "revision": "850cb88f4e69118ce1943b6e1af1614b"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.html",
    "revision": "cda5d03d1c600284b3cc27b7b3f0a2f0"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.png",
    "revision": "7adb93b484e7857d3dddd38d50d56cf5"
  },
  {
    "url": "help/sync-data-locally-or-remote-helperbird/index.html",
    "revision": "69d8fed504089e5cabb7d43cdeb8f0b1"
  },
  {
    "url": "help/sync-data-locally-or-remote-helperbird/index.png",
    "revision": "15c48e1edb586ef6f9c12d00468903ca"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.html",
    "revision": "964c9337f52d64d256c7c2b4fafbfeb8"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.png",
    "revision": "f562f704c35ecdc38a145e0798436738"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.html",
    "revision": "9278eb31b8a5a830adfb4df7df9a4ba4"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.png",
    "revision": "3f5b54fb7cc5bd9b2db4ee1b7e5f0661"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "1b342a8879e8b4be4cf2104b4626ee5f"
  },
  {
    "url": "help/what-is-helperbird-free/index.png",
    "revision": "eb090d68e34fbfd938090be0dec5735a"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "d9c2d5356e61f44bc49b6e9997da0596"
  },
  {
    "url": "help/what-is-helperbird-pro/index.png",
    "revision": "3fadfc47888c5798b8d17f40e076628d"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "3f7c9a2f8a966e493ee74124fbd4fee6"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.png",
    "revision": "49eb2fb3022046570a7e5f150f852352"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "099a91bf8b577f65b58e2fec58ddc8d3"
  },
  {
    "url": "in-the-news/index.png",
    "revision": "1e433f19067fa63407347bb2ace4c4f1"
  },
  {
    "url": "index.html",
    "revision": "b28fb8798b039adcaf5720adf63602a4"
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
    "revision": "301def6fdaa19611f7a5ef91b214fbd8"
  },
  {
    "url": "order/index.png",
    "revision": "04645d440cff06ae6614f680a4fd9f8b"
  },
  {
    "url": "partners/adriana-garcia/index.html",
    "revision": "4a5629d373bac74cb9cb62be8981d37d"
  },
  {
    "url": "partners/adriana-garcia/index.png",
    "revision": "551f388fbd5e2de86708b3507a32d57d"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.html",
    "revision": "35850f99aa90eb2dd9435033c4b73f9d"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.png",
    "revision": "7e978fceaf6a6585e805d23995d43a4b"
  },
  {
    "url": "partners/index.html",
    "revision": "4548037c4d923594e56c1590ace09a0b"
  },
  {
    "url": "partners/index.png",
    "revision": "de4369e29e433881bf4e81cb2a5b05e2"
  },
  {
    "url": "partners/irene-hughes/index.html",
    "revision": "10bae3e264d168d5f03d8659dc30d41a"
  },
  {
    "url": "partners/irene-hughes/index.png",
    "revision": "5c61efc35204c2bf77950d079cdc1c32"
  },
  {
    "url": "partners/nova-proton/index.html",
    "revision": "18dcff3edd6654e5717f1350645c0e45"
  },
  {
    "url": "partners/nova-proton/index.png",
    "revision": "e8d0e14d9691222013db88806bfbf114"
  },
  {
    "url": "partners/paul-spencer/index.html",
    "revision": "f351f50a21aa3770f857d30fb49a3fa9"
  },
  {
    "url": "partners/paul-spencer/index.png",
    "revision": "257cbb61b4e775e45cdd091510a94604"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "c8faf876bc98a1c9b33986890d0b24b9"
  },
  {
    "url": "partners/sascharoos/index.png",
    "revision": "606848d5693b937e41fd6e7e5abb2e41"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "c556e75c9d883f66a943c1816d91e842"
  },
  {
    "url": "partners/sprialisconsulting/index.png",
    "revision": "52a34288362d9011a3a2a660039b17a1"
  },
  {
    "url": "pricing/index.html",
    "revision": "e56ae609d179f0b93d34dce408362bc6"
  },
  {
    "url": "pricing/index.png",
    "revision": "ac6d7ccfbe6c561ebaad75bc8ecb4df5"
  },
  {
    "url": "privacy/index.html",
    "revision": "06a724d64a6be2b3033bc2cd9ea644ba"
  },
  {
    "url": "privacy/index.png",
    "revision": "bf03aa7b6d51ae924df64f26aff42861"
  },
  {
    "url": "products/chrome/index.html",
    "revision": "1ff58780709ed6861b3fab2297a1a2c5"
  },
  {
    "url": "products/chrome/index.png",
    "revision": "5b08f2ceb190b59bd4dce34e8893b9da"
  },
  {
    "url": "products/edge/index.html",
    "revision": "551b3a1e11ebf913a15dd5905a541062"
  },
  {
    "url": "products/edge/index.png",
    "revision": "fb692305ff970c383dbdecbd955424a5"
  },
  {
    "url": "products/firefox/index.html",
    "revision": "f5fae574ad4db733d43de3c295961de2"
  },
  {
    "url": "products/firefox/index.png",
    "revision": "b0fe9d34c3e0930821b497ae9cab5f2d"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "2cc04aaeccfccf2d47613598ae864591"
  },
  {
    "url": "products/google-addon/index.png",
    "revision": "692f9b6902270a0be6f0198f39090bfd"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "407c16fc80ee13228cb7a83e66114ce4"
  },
  {
    "url": "products/ipad/index.png",
    "revision": "cdf490e432a84cfabf19790da83fccfa"
  },
  {
    "url": "recommends/index.html",
    "revision": "2d71f35fa857de97588f22c168cde619"
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
    "revision": "502926f1fe80e58794221bc3c2a8b635"
  },
  {
    "url": "refund/index.png",
    "revision": "2871ab09944129faed6438a5b0112c70"
  },
  {
    "url": "reviews/index.html",
    "revision": "ffd8aebf3ca43e680f6ca9eaccf19866"
  },
  {
    "url": "reviews/index.png",
    "revision": "567b9fa948a20e3e2bad91665d7d0773"
  },
  {
    "url": "sales/index.html",
    "revision": "3f6392369f118ea26a7c345870f1cb1b"
  },
  {
    "url": "sales/index.png",
    "revision": "04645d440cff06ae6614f680a4fd9f8b"
  },
  {
    "url": "security/index.html",
    "revision": "1cd588397184f916f789b818c4f4d412"
  },
  {
    "url": "security/index.png",
    "revision": "3bc2f86b4359d9ecaf11de1f18245fe1"
  },
  {
    "url": "sitemap/index.html",
    "revision": "ac7e5eeedd9dac5f49c8319149cf3858"
  },
  {
    "url": "sitemap/index.png",
    "revision": "7d24e8009ef2a1b80634d8ac5cb7e661"
  },
  {
    "url": "success/index.html",
    "revision": "31270cb2734dd2170a32b6fc64798d23"
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
    "revision": "0be10757c942cf2a9e8f600c18c613a7"
  },
  {
    "url": "support/index.png",
    "revision": "e4977a66acae81dec924cf70c0f0806c"
  },
  {
    "url": "survey/index.html",
    "revision": "406abd077ea190f82e94a6588c601f7a"
  },
  {
    "url": "survey/index.png",
    "revision": "b2ec3cf9ced4b88a516da0d35ab0d0d4"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "a9d5d8167e455d8bb8b23f78521f70f9"
  },
  {
    "url": "terms-of-service/index.png",
    "revision": "a98ab29a2f0316e320c3e5c0095235aa"
  },
  {
    "url": "testimonials/index.html",
    "revision": "549e89ba2d6fd722d48b10b3a3bde383"
  },
  {
    "url": "testimonials/index.png",
    "revision": "40b264cf44466cdd6555c4225cc57720"
  },
  {
    "url": "tutorials/index.html",
    "revision": "036d8909b21bd0ea52bc6f548f5bb8a5"
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
    "revision": "69fbc7ab5d05150979ae850a11d7e963"
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
    "revision": "d2c846e2af2b285caf972582b9e4b87c"
  },
  {
    "url": "usecases/index.png",
    "revision": "fbd835bdca6d4ae0bd48b317e863be80"
  },
  {
    "url": "welcome/index.html",
    "revision": "aa9eed618bdc884d8d2c7446f23f224f"
  },
  {
    "url": "welcome/index.png",
    "revision": "cd84828f4a0f2eb9bb22a81f065c67bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
