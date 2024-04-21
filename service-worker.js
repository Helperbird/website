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
    "revision": "00e52d73e85143bc10bdb5bb688d4f11"
  },
  {
    "url": "404.png",
    "revision": "705c095a9e5869af74def9b4b87ac1e8"
  },
  {
    "url": "about/index.html",
    "revision": "606fcd602f0abd8a692dc79de634b1be"
  },
  {
    "url": "about/index.png",
    "revision": "d73e548ec1590e13f0c4757f575ed02d"
  },
  {
    "url": "accessibility-statement/index.html",
    "revision": "d9d24211fbe25838ddfb307ac3541306"
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
    "revision": "29df9d36d0566b2010d52ca9865082b8"
  },
  {
    "url": "assets/images/social/android-chrome-512x512.png",
    "revision": "24c64a0a5f542ccbaff81b8672707fad"
  },
  {
    "url": "assets/images/social/apple-touch-icon-precomposed copy.png",
    "revision": "888ac7670681aeb413d3b4426a0ef2e6"
  },
  {
    "url": "assets/images/social/apple-touch-icon-precomposed.png",
    "revision": "562340ffc912d888e3cc1561037abcf1"
  },
  {
    "url": "assets/images/social/apple-touch-icon.png",
    "revision": "562340ffc912d888e3cc1561037abcf1"
  },
  {
    "url": "assets/images/social/facebook.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
  },
  {
    "url": "assets/images/social/favicon-16x16.png",
    "revision": "b81194c9b77c8154b151eb97343a764c"
  },
  {
    "url": "assets/images/social/favicon-32x32.png",
    "revision": "8b02972e39f51e515a6d77cb8358416e"
  },
  {
    "url": "assets/images/social/favicon.ico",
    "revision": "0b53a11c7110e4cb4ed5f0b196d88282"
  },
  {
    "url": "assets/images/social/favicon.png",
    "revision": "f9e5765a2c7b4d10bca7f97a902286e8"
  },
  {
    "url": "assets/images/social/maskable_icon_x128.png",
    "revision": "f9d1440971c513def03332a35e2843d7"
  },
  {
    "url": "assets/images/social/maskable_icon_x144.png",
    "revision": "012f076f4ebecd43f25f5e2172473499"
  },
  {
    "url": "assets/images/social/maskable_icon_x192.png",
    "revision": "dc582f8a0848de0d5b7b518ce8461403"
  },
  {
    "url": "assets/images/social/maskable_icon_x384.png",
    "revision": "54f5b73a7f5a69dd2f04d6589788e647"
  },
  {
    "url": "assets/images/social/maskable_icon_x48.png",
    "revision": "10875e2c4da7f796cf38e93fc53691cf"
  },
  {
    "url": "assets/images/social/maskable_icon_x512.png",
    "revision": "cf2533dcc0c9e8811441e0f7e1ba982e"
  },
  {
    "url": "assets/images/social/maskable_icon_x72.png",
    "revision": "d061b728b4000992eb75664d65fa5b79"
  },
  {
    "url": "assets/images/social/maskable_icon_x96.png",
    "revision": "6c84ad3038e5d4561c4bcf05f7fb02ec"
  },
  {
    "url": "assets/images/social/maskable_icon.png",
    "revision": "cf2533dcc0c9e8811441e0f7e1ba982e"
  },
  {
    "url": "assets/images/social/mstile-150x150.png",
    "revision": "249a339c09e24d7ff189af44cde8c6a0"
  },
  {
    "url": "assets/images/social/safari-pinned-tab.svg",
    "revision": "8fa99aa859ecd9983a4e5bfd65b38ce6"
  },
  {
    "url": "assets/images/social/twitter.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
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
    "revision": "fe177d2d1eb9bd7e9c2716a99e83ab9d"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.html",
    "revision": "c6753a4de99e9195ee17a5573c71918a"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.png",
    "revision": "4d74e75cb116139230da54ebf81f6bff"
  },
  {
    "url": "blog/4-key-strategies-for-communicating-your-child-needs-to-school/index.html",
    "revision": "5ce942b207bacda9808f6f1ac73569aa"
  },
  {
    "url": "blog/4-key-strategies-for-communicating-your-child-needs-to-school/index.png",
    "revision": "4b91a4496f0a111e83907ffa1df1f6f2"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.html",
    "revision": "90f58bedbef6d40c067618a56c97ea1d"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.png",
    "revision": "7a83dedffddf0682184e8c111dca2532"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "072063ace1788a085bbb4a8d1c22410a"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.png",
    "revision": "3b62b938c6e7c2644bea3aa4a62c5a5e"
  },
  {
    "url": "blog/7-steps-to-create-personalised-learning-plans-for-students/index.html",
    "revision": "2a5962cb748c8ce8ed7567cfb16373d6"
  },
  {
    "url": "blog/7-steps-to-create-personalised-learning-plans-for-students/index.png",
    "revision": "f9413d1c1275d41a86be133eafbdd05c"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "8974ec1ae27c136c3cd6a1ec121aab29"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.png",
    "revision": "6b78ba83d51d3019bd49055002ed5a03"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "484f77e61877172fd3c22978054b73a9"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.png",
    "revision": "58632803dcd69b60038ccf1dd6330491"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "8fefa1665e2c637afe86947c435ca7c0"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.png",
    "revision": "c6aeacdb96f35bc702d7137504d3ca2e"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.html",
    "revision": "7920fddd9d2df0074a40ae2051dda7df"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.png",
    "revision": "a056654e362017180bf9ba16628f6c15"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.html",
    "revision": "3e6b8f62de308cc0df32a7a0867e191f"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.png",
    "revision": "aa7eb8115b33f9857a408db74b72999d"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.html",
    "revision": "d5d1fbbe313b76176883b12dfab99de6"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.png",
    "revision": "2c0be92517fe5cbc5b5e2499dc95872d"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.html",
    "revision": "374b81ccaec100d01c2845ebd5092658"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.png",
    "revision": "3a55e0a35d3efcfe157510a0db9204b6"
  },
  {
    "url": "blog/heads-up-helperbirds-got-immersive-reader-too-extension-free/index.html",
    "revision": "d7443e7833b22dc7748ec32e28523c85"
  },
  {
    "url": "blog/heads-up-helperbirds-got-immersive-reader-too-extension-free/index.png",
    "revision": "cf0431ff27105717a9479a773e4b30fd"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.html",
    "revision": "b5938ad2a380906fa8bfe463868e8512"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.png",
    "revision": "5c532b928d132d061b33033b3e757d2a"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.html",
    "revision": "468a226731654f05d8574dece1c908c7"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.png",
    "revision": "60f3bb5eccfc52cccafdecf25f0bc825"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.html",
    "revision": "141935f5c6f2d8d547779c1723163bd1"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.png",
    "revision": "bfcdd986c3952b521a0fa6fd2e5a31da"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "597f53936a04fa547ffdc81faa0447c8"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.png",
    "revision": "05bcb5ec934971f2275cef56b765ec25"
  },
  {
    "url": "blog/helping-students-thrive-with-helperbirds-accessibility-tools/index.html",
    "revision": "9660437274c79cfe2fb524ddaf622811"
  },
  {
    "url": "blog/helping-students-thrive-with-helperbirds-accessibility-tools/index.png",
    "revision": "242c82899f21a8688cf7be4607e1f624"
  },
  {
    "url": "blog/how-helperbird-can-support-homebound-learning-for-recovering-students/index.html",
    "revision": "7b53033802524d0c97d894405a871da9"
  },
  {
    "url": "blog/how-helperbird-can-support-homebound-learning-for-recovering-students/index.png",
    "revision": "30f35355f519ec38ce198e12e4053f9c"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "739ff612b154f30d0da39ba888d83971"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.png",
    "revision": "bbeaa9e99210f7bde69fc4de0b8965b0"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "4732533e463833362c48c3aeb697ecef"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.png",
    "revision": "3e8128aef90c0d6c1b89468fda50056e"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "e1d9e5db2f07b2af59e295ec9c122349"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.png",
    "revision": "86158575242df3838df2ffd57e37d6f6"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "69bffdd743a699ec4747e15c7350471c"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.png",
    "revision": "824cc7a8302c082d84c9d3e5b0089ccd"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "3bf0158fe514b9904d6125df324caea1"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.png",
    "revision": "458bfac3cabe2c6bb35c46febb64a429"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.html",
    "revision": "9198d13cf0a3c14f29ab9c2d0ea18aad"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.png",
    "revision": "bcbcd7bc7675a837ede9d50bcca455ae"
  },
  {
    "url": "blog/index.html",
    "revision": "16368afcbe430b4d09cd5ff68c3a8924"
  },
  {
    "url": "blog/index.png",
    "revision": "bcc3e662977584207cb07f84a6998a44"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "4457e9a72234203811f7fa55764d7cab"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.png",
    "revision": "9679806a64a6851a4412b3aa46c1bac6"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "a65c83e90c6d987e31017970703ac7fb"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.png",
    "revision": "5f4be626ad5a45c7d2fedbaa34b97b7e"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "ebc90e2e7064cc2b04c39d477299b3e7"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.png",
    "revision": "9575babd87f29a023b05444054d595fb"
  },
  {
    "url": "blog/reword-function-student-success-story/index.html",
    "revision": "c5335b70e8b7ac98e8e375cd11100e97"
  },
  {
    "url": "blog/reword-function-student-success-story/index.png",
    "revision": "a4ec73425f5f10e3330268320f8f114b"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.html",
    "revision": "e29f55d532313ef885b7a81cf3683a45"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.png",
    "revision": "4400663ee9f606c9bc7c832e0f5ca3b5"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "849577f8e28449c05649544b178c98ec"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.png",
    "revision": "01ebe1541c7f967b621491088e50b561"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "5f136dfa7bfc8a36ea4d1bd34eb10846"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.png",
    "revision": "452d4e8557f7664ba0db68b9e49a7718"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "7d8de65fb8e91c467975d905a55007fb"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.png",
    "revision": "7b29c99874ad50438fc90b4d2009b24e"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "c77f363ef2be74b6581ada91d2e49d78"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.png",
    "revision": "6d4de0704a19ffeee27d3318021d722c"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "9725b2eb45cde0c454ad08af427d92eb"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.png",
    "revision": "f23f528aa1d9bcafbd7c6345de58e46f"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "0afa60ec6659f4c6e5b10188933465f4"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.png",
    "revision": "1e55f7a58e067bde42189a38c6d80845"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "69789af06c124f9b5693ffd3dd3b18bb"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.png",
    "revision": "a08b57d3c12073ed036ac54723c85dea"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "68bd8bc3777df2b7afe80a9f21bcc926"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.png",
    "revision": "6bc4b01575a1968a762881381ede2723"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "9d9c84b42d69fad2e038d0bb3bfb958d"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.png",
    "revision": "7407d17a7d63e915a6ff35805d2500de"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "f73b454e768661449172ca0ed08f5d97"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.png",
    "revision": "83206967ee26cb90132a47d73d25ada1"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "4fa5eae0f8651e9db4db91ab19eb7e77"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.png",
    "revision": "a72348b42a763fff4838b2229153d56e"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "c9735941105b188863988167bd9a4246"
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
    "revision": "cbaef83a20a25ab9da2acf267d5f3d49"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.png",
    "revision": "819c07b52a3e982ede47014587ac0217"
  },
  {
    "url": "compare/index.html",
    "revision": "19bb2334d22522dee547fb24f1185419"
  },
  {
    "url": "compare/index.png",
    "revision": "2e859817dff77bee017ffb99853e6936"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "827e5f7935839a2c342aacf8e8100f0f"
  },
  {
    "url": "compare/read-and-write-alternative/index.png",
    "revision": "35bfa7c07559c6db37ec9b6c1fdd6755"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "dc139817dfb4f4b05a79068822f7e41b"
  },
  {
    "url": "compare/snap-and-read-alternative/index.png",
    "revision": "14674aad30a1ca1875541c73b117cf87"
  },
  {
    "url": "compliance/index.html",
    "revision": "b19ca0bc49eb202bf6da92b0b9666c2b"
  },
  {
    "url": "compliance/index.png",
    "revision": "267fee6ba41bfd409948e803150a9344"
  },
  {
    "url": "contact/index.html",
    "revision": "9d48a9886deb6eb4a62aecccf1ff0a56"
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
    "revision": "92150ef03d45bf075a9279e20162558e"
  },
  {
    "url": "edu/index.png",
    "revision": "1614a96c22921d097817ce81a0b11ac5"
  },
  {
    "url": "enterprise/index.html",
    "revision": "3291edfdf8118f66250192bf6ec340fb"
  },
  {
    "url": "enterprise/index.png",
    "revision": "ad1af8d3a578b806d6bded1077d3c3bd"
  },
  {
    "url": "extension/index.html",
    "revision": "e4005f3195ab838927827e85d0e2a88b"
  },
  {
    "url": "extension/index.png",
    "revision": "24d4216665f9e5a774cb26372b76e0a5"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "3b7adb4c30ab85b96410f2a363ecc62e"
  },
  {
    "url": "features/adjust-letters-and-words/index.png",
    "revision": "4c053c69e3a28494e79be9af92cc3e52"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "32e1e02d45b61ece83d9a07beb130a7b"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.png",
    "revision": "37b1da1948b2e20c682647ac96a62a64"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "ad3c30a895ef782b1bf00de7a9ddf25b"
  },
  {
    "url": "features/analyze/index.png",
    "revision": "c7e26494dd04ff0fdaf4465a45118119"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "19ab4c62e98e7a0bd66c217d27f24ea4"
  },
  {
    "url": "features/annotation/index.png",
    "revision": "1cf7ea0ba3d98257af1577a7026ccd7c"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "c91a999a8952c8b1214fdf0102462440"
  },
  {
    "url": "features/auto-scroll/index.png",
    "revision": "b5a1ba515d6c180057f1a91cbf3bf8ce"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "6a006d72576bea9f185564d096f20e8e"
  },
  {
    "url": "features/bookmarks/index.png",
    "revision": "f38fb58bbd233e130756a8dd4324bad8"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "fa1a25f8db4dc7f31143dbf6db490d0b"
  },
  {
    "url": "features/color-blindness/index.png",
    "revision": "320f408a60256fa424679f68bbb4bd2a"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "2fffa3c203f515d93c575a4c3623cbd7"
  },
  {
    "url": "features/cursor-control/index.png",
    "revision": "d5cf1f5042d8c07ff582a3cf502338c8"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "b004bfca6c382011966141cb9b44ff27"
  },
  {
    "url": "features/dictionary/index.png",
    "revision": "e7af7fa7e92ebd53c09c99a129f4a662"
  },
  {
    "url": "features/editor/index.html",
    "revision": "5376762dd8cd7c61b994f221f99a83d8"
  },
  {
    "url": "features/editor/index.png",
    "revision": "73e4784ddf6e274bb1d8d78d587e3a26"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "c24e4368dec94edd17cd3104800ec732"
  },
  {
    "url": "features/font-sizes/index.png",
    "revision": "ddc518a2a5bc110f0a173334ab6bd834"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "991c9763786ad0ed310c96b4014f86c1"
  },
  {
    "url": "features/google-translate/index.png",
    "revision": "d438bc4cfb404c066f5130f385f7f7d2"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "d4fd2b125da1f9149dbf4b279a62048a"
  },
  {
    "url": "features/gray-hue-overlay/index.png",
    "revision": "03b7d4811de1fb5b746a8f1ac3e39a06"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "9a4b91de37fd7e9f10e6b3a7da427923"
  },
  {
    "url": "features/hide-images/index.png",
    "revision": "96cc4d22534dad2994341ad15050b953"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "a354e3480b603c0119532e92a7261395"
  },
  {
    "url": "features/high-contrast/index.png",
    "revision": "bfdca07daff3f02d1971b008229a8b52"
  },
  {
    "url": "features/highlight-menu/index.html",
    "revision": "ac49621ec7029a714b99453c9b642d6f"
  },
  {
    "url": "features/highlight-menu/index.png",
    "revision": "e43c6c6d0c79ffe7b86113f652b1f01f"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "d15209c14d7351ccfa09fd52ad4504e3"
  },
  {
    "url": "features/highlight-paragraphs/index.png",
    "revision": "92c804b8f76ab5eb941468f19862861c"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "1703f4bb17d79be8780bf09f915cc120"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.png",
    "revision": "c4d0ac0aca79f37bcb6730ac5f24e011"
  },
  {
    "url": "features/index.html",
    "revision": "a6491d8223b54eb950b747360de60dae"
  },
  {
    "url": "features/index.png",
    "revision": "804cd692a6f130844fb42f982155fbc1"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "4b697a6f8db62b8029727961a64022a1"
  },
  {
    "url": "features/mute-videos/index.png",
    "revision": "c3776a95616e0a3ef00d8017ba90a864"
  },
  {
    "url": "features/notes/index.html",
    "revision": "39064f6b0ae14161af903c0a3eb90bbb"
  },
  {
    "url": "features/notes/index.png",
    "revision": "b49d61249ac65edf1eeabda088515ec1"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "c309f293272b0c9d4e8ec6043166f812"
  },
  {
    "url": "features/optical-character-recognition/index.png",
    "revision": "6cb70582566fd42f243f5499992f0494"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "fc4d30ee0b359e7aed886069c4723196"
  },
  {
    "url": "features/overlay/index.png",
    "revision": "4e448a69e89ceace60f376a57a2c22fe"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "499195405b19a6b5d775bb9225e7a844"
  },
  {
    "url": "features/paragraph-widths/index.png",
    "revision": "926af7398acd9f44a7b221352c1014b3"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "315e6048ffe35022274e461a35cd6309"
  },
  {
    "url": "features/pdfs/index.png",
    "revision": "fc30f3d727108b7bc268f596acb0de5e"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "c2afb7513bc05f1b67668193d099c5cc"
  },
  {
    "url": "features/printing-tool/index.png",
    "revision": "5c7a033ec12157394726e746792b6797"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "ee806d9f7c0a8f256e0f787d954c8dcf"
  },
  {
    "url": "features/privacy/index.png",
    "revision": "09d0d76fdf1d52553daf69143629f385"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "9e386f2424de47ec3a84e70e7e4c4945"
  },
  {
    "url": "features/reading-guide/index.png",
    "revision": "0ac4f34af6c76852a54bcb000c00c027"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.html",
    "revision": "274c824bcb5674cf8028aefa0b0604c6"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.png",
    "revision": "49e5f4c10de0b3722e4300006ba043d4"
  },
  {
    "url": "features/reword-and-simplify-websites/index.html",
    "revision": "1f828ed3052a82306c184bfe244262ad"
  },
  {
    "url": "features/reword-and-simplify-websites/index.png",
    "revision": "f8abc5b075ccd2a5d5addfd7bf7d0128"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "eacf4ef222faebe07d2d25b27eaefc9c"
  },
  {
    "url": "features/ruler/index.png",
    "revision": "55586186bb226cc0425ab23f084fe7d4"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "64985ff9298b68ed8f7f7abead0358f3"
  },
  {
    "url": "features/screenshot/index.png",
    "revision": "c589342a9c5f7f5add560cf3f3de6aaa"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "3655e4180a995d504ea1316593653fa7"
  },
  {
    "url": "features/shortcuts/index.png",
    "revision": "1b04811d67706f94d515bd835e813976"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "3cda9b45781ea1ee29e2c0e72f643585"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.png",
    "revision": "6e56f8459d107c0016afb938d059532d"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "b9988d1425b5993b1c077a0b7fd36810"
  },
  {
    "url": "features/speech-to-text/index.png",
    "revision": "4ca4836bd584b76b70c1ef70d20709a8"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "e9115c8a5e15a25bc8224392b78593ad"
  },
  {
    "url": "features/speed-reading-extension/index.png",
    "revision": "9ca54234dc7d55d22df67490c22cfa25"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "a2603ecca775deba81607d2455ea118c"
  },
  {
    "url": "features/spell-check/index.png",
    "revision": "25b6d5025b86fc8ef66c29ec95c55947"
  },
  {
    "url": "features/styles/index.html",
    "revision": "09f269f36b4645abec2e895553e22c0b"
  },
  {
    "url": "features/styles/index.png",
    "revision": "34493bcf794469e97161606c6a67a0b1"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "ada9d64402325031e57bf0b0c71ed98b"
  },
  {
    "url": "features/summarizing-tool/index.png",
    "revision": "41640846fcda32ddcf17bbae4a30e304"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "c08bccc5725c58e8ad666e06fffc56b0"
  },
  {
    "url": "features/text-align/index.png",
    "revision": "c96a2e3ca7e06e4190e822ecc0e5f15f"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "1c6992cd74923ab7f6fa3962177f38a0"
  },
  {
    "url": "features/text-to-speech/index.png",
    "revision": "a95da60c94b64152dfb20fea347e0964"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.html",
    "revision": "f6733acc64cd862f6ff42a55666a8c39"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.png",
    "revision": "b08f7de0e205af8a863a0667b19c25e7"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "bbe5315b62e696ed687543ca9d100233"
  },
  {
    "url": "features/word-prediction/index.png",
    "revision": "0218dfa620c53bfa1b9f88fc53355c57"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "2cba10e42ab682fbbfa887e4a844a1d6"
  },
  {
    "url": "features/zoom/index.png",
    "revision": "ef49935619769bf8483f9d29fe334f7c"
  },
  {
    "url": "feedback/index.html",
    "revision": "90fde90afdce246a9505f608d89638c0"
  },
  {
    "url": "feedback/index.png",
    "revision": "3bbc4028371723caa3ced91bd439774e"
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
    "revision": "25ae5874a0c377823ce1bcac42cdc74f"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.png",
    "revision": "ccbe2549f9c03027c2e1454732d82b61"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.html",
    "revision": "5cbc4b255e6faf4080e3282d6cad5e29"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.png",
    "revision": "83a7f19dc171ceca18b209bb1fcb2ffa"
  },
  {
    "url": "help/feature-not-supported-on-page/index.html",
    "revision": "e32182f17f8fd03c0f5713579e875826"
  },
  {
    "url": "help/feature-not-supported-on-page/index.png",
    "revision": "e9d9c024a3be318a3dfa97ed4e919da1"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.html",
    "revision": "ecd0f5a939973d6d83fbc52e304951df"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.png",
    "revision": "6993cfbe3ed6a9db4488344b744fcca8"
  },
  {
    "url": "help/helperbird-for-google-classroom/index.html",
    "revision": "8635e2819e319c9f7073c6dde2123126"
  },
  {
    "url": "help/helperbird-for-google-classroom/index.png",
    "revision": "40392afa3c7c419a301da22d1f31cfe3"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "08c48f86178ad56815fa72d1b018cbf6"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.png",
    "revision": "2c94d6f43223733d603deed283417575"
  },
  {
    "url": "help/helperbird-for-google-drive/index.html",
    "revision": "2d8398037a72b7d6e4ef9b04434f5a3b"
  },
  {
    "url": "help/helperbird-for-google-drive/index.png",
    "revision": "96a324f34498f73ff15fe9048b2e79c3"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "49e2e97fc0c3e3988d0ff1c0d99b35f2"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.png",
    "revision": "81128ef0c54b09d9e91a11ff52792b2b"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "0432c883e37828c66466b64d50c4511d"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.png",
    "revision": "e57a5a03aba09d663a394faacb8f47ce"
  },
  {
    "url": "help/helperbird-for-powerpoint-online/index.html",
    "revision": "299566a534e29b5c8009e334b23d8140"
  },
  {
    "url": "help/helperbird-for-powerpoint-online/index.png",
    "revision": "d400f0cce363c2a373a16ba2aa90a388"
  },
  {
    "url": "help/helperbird-for-word-online/index.html",
    "revision": "f3d24e8d2a479c81aaab228eb590159f"
  },
  {
    "url": "help/helperbird-for-word-online/index.png",
    "revision": "f718746ec35820362558573b4094af17"
  },
  {
    "url": "help/how-to-access-our-helperbird-usage-dashboard/index.html",
    "revision": "d7c9c7a97d70c11d2f83be99591dccd4"
  },
  {
    "url": "help/how-to-access-our-helperbird-usage-dashboard/index.png",
    "revision": "7a4e5fcecb740f15e128aba63f335cde"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "70e492b340c63852d749268d7d8a1504"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.png",
    "revision": "c9fb42e00409a38851e9f1f19ee39984"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "f8731eaf5c58813d756cd2755357dbee"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.png",
    "revision": "f281f8888e1048003e979e0fbd911de0"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "69c0a825236236d71501601f7abeb8fd"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.png",
    "revision": "0b2babdd8610515133882308a950e649"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "177a71b171fc3821e7bfeb7df3ff8176"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.png",
    "revision": "fec5e88581309822e0732e927503a560"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "c6b7aa9d659fd3eba1fb53a0c90967a4"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "18318edca3b29c09306a2ef5983e6c9c"
  },
  {
    "url": "help/how-to-change-my-email/index.html",
    "revision": "4cc5926557edb55bc0ed3770e0ebb776"
  },
  {
    "url": "help/how-to-change-my-email/index.png",
    "revision": "b64fd00f6c89c1f9b945c036225dfbc1"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "fe6a91139e66baeb497888b2b0e94da2"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.png",
    "revision": "fee2798e1e147b285c2b5c441994bd2d"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "5e0b7dba63dc1cafb957ad43bf4bd8ea"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.png",
    "revision": "69302dc301ec90e0ea5edd6411200d5b"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "1e3b73c4c2d90523ec3d7e82f7309b7d"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.png",
    "revision": "c46101ebd538f7a135fd3c06de3db274"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "01a84b40c3a5678c758df5b8978d921e"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.png",
    "revision": "0d301146b3c2bc97f19f13101d9b7643"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "58d8bbd05ff510b7dd9c4cc39e399cff"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.png",
    "revision": "822009bffca1eec553b6278a5f723609"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "0c1bd347f5b71bc64e0bcb9f363f50c1"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.png",
    "revision": "53a29641bfbd4f0a28afb52e808772bc"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "8306409e5ea8ba6dba783f6d9169b177"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.png",
    "revision": "1cf79ed47e8c3a9fac08420602736fbb"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "789718b72c6d6400e648dac4fe63e1d8"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.png",
    "revision": "54b2366afb17cdfd9e15cf48bdb0c47c"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "f113ffac71d375507ae60f3d08eda38a"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.png",
    "revision": "b19e6ae1250681a06cf6dff1ad403149"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "114c7320c25ee916277a1a9c6d317691"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.png",
    "revision": "75e6d9e8e5abb91aab86823663e413db"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "dad8f0efaecbd13446b9bc6c90717510"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.png",
    "revision": "1cf79ed47e8c3a9fac08420602736fbb"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "48d48446334f0ca1d7242c6ce6a2a9d2"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.png",
    "revision": "bd976f4b0a0a47135b776bb5146552cf"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "bbb5b193e3288e00c709666352903f21"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.png",
    "revision": "6a1bcbdc4beefc6db04b836afbeac822"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "cab13d47f511f27e6f29fd614eea1b15"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.png",
    "revision": "f36aa1c027756470869c8633fe99c29b"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "e7c052fc78666c3036d69704fc1b43f5"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.png",
    "revision": "cc3df0a4f7e4f07da459f80daa37e2b8"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "8beb6d8da809f09bc2548fa159c6c838"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.png",
    "revision": "f595f63ae4191a7a4d6ec807a069c432"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "0be0f89c0836c1529c68033387590c07"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.png",
    "revision": "4c388eefd57d56e301fc4719e7ca2da9"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "f593dfc5b31f5c7df438c31b5bfd7c7b"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.png",
    "revision": "287ef8a47f9bdfa62c196ff34ab64ed4"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "a94230b62041bb160199fe54fad8347b"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.png",
    "revision": "6a9b1bbfa83e0aefc64969ef260ae9f2"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.html",
    "revision": "d1e59731894add6f15141633c0029da7"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.png",
    "revision": "6b1de43e04da15779f096934f80dc836"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "9a63998a173796613f0ad954127a1eb7"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.png",
    "revision": "c272eab5e0a5110f3b3857e6db2aacc4"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "4035992190e1b48bf581c25511623627"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.png",
    "revision": "63a11386ee4ef3e27a3aa396c91dd7fd"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "0902a7defa9972c2ace93fec175e8b40"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.png",
    "revision": "4d50728f6bc1a3079e12e68776225532"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "6770d0111b675ef47794da562717db7b"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.png",
    "revision": "e77ba2dc4e225408d53037303a1e4f94"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "985e58b09642f808824dcf99df6d89ef"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.png",
    "revision": "b36de80923c3567e9b763d9f782982d2"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "924e29b48fd01714c35e5790efcb62a4"
  },
  {
    "url": "help/how-to-pause-helperbird/index.png",
    "revision": "3c0dba3cfba7ed67f8ab712a200222db"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "c1d6de87e78fff284d766b05020d5a95"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.png",
    "revision": "7ad0329c10116c8828df150017c40a29"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "d672d9c83c2c15cfab9ac1f64f18b427"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.png",
    "revision": "518c93d79721d6a8d9c4e826f663e7ea"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "5363b3c25f57d992eaa3985e50d52c7b"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.png",
    "revision": "1c9a490d79176d7376176fea62c67f94"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "cc368c80a6a19cfe03809d3c017aa963"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.png",
    "revision": "b794cdb9e4dc1e3fa7d3da6fd2a62f86"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "91a624e57f35185a51954a1a50704fce"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.png",
    "revision": "cb941bf726f636256036b065e2618c54"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "f9604c21b0f2d99fec9d8a5152c348e9"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.png",
    "revision": "a16f97cfe3f39771257bbb05894ee9ea"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "7b467d1567e6b3298440a7a94d5e77b9"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.png",
    "revision": "0d6dafb1f3c1a096268d969e8a83b38b"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "14a31b03a39dac0de192682253e538c7"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.png",
    "revision": "87f83f60b0ca2a0a7d0ad5fe26ca681a"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.html",
    "revision": "08f1596313094a007b9717c97086c21c"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.png",
    "revision": "cf5800ab79bfedcb42f71aa900569b4d"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "d4bfe9961d185e50bdbbcfac69fd64ed"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.png",
    "revision": "55586186bb226cc0425ab23f084fe7d4"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "584173c8436a86611b5e2f6041b8fd82"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.png",
    "revision": "99b4342b97343246e1d49cf0d0b55d0b"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "e426b87a8f8338443f4e6f7333d0e93d"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.png",
    "revision": "a05028cf5c016cdccf7adf90d5d08689"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "767d733ceff12705a343fa159ceaa0f2"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.png",
    "revision": "cd8280a3b82d318eaeef26801189bd20"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.html",
    "revision": "45d2d90752823255e08f8316095f07af"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.png",
    "revision": "701dac6d31752921a5bb71c50d3836d2"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.html",
    "revision": "d2061661314607199d5410945f513536"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.png",
    "revision": "f022fdf8d3e3c39fc1f7b8fac86d20a3"
  },
  {
    "url": "help/how-to-use-helperbird-media-features/index.html",
    "revision": "9dbdc7dd3e5668e202aaa714374c32f9"
  },
  {
    "url": "help/how-to-use-helperbird-media-features/index.png",
    "revision": "f022fdf8d3e3c39fc1f7b8fac86d20a3"
  },
  {
    "url": "help/how-to-use-helperbird-reading-features/index.html",
    "revision": "d97228a4bb0de52f60856284f0815e20"
  },
  {
    "url": "help/how-to-use-helperbird-reading-features/index.png",
    "revision": "69054d6cf2c716c06de923cf9f3ac528"
  },
  {
    "url": "help/how-to-use-helperbird-reading-tools-and-features/index.html",
    "revision": "6255fe14582aceb975928a0d28ec4320"
  },
  {
    "url": "help/how-to-use-helperbird-reading-tools-and-features/index.png",
    "revision": "1a7b4e0d13987b81290c093076789fd7"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "5f91e9a28ff50122b694eb9348d4719c"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.png",
    "revision": "bf3a3eaa7c0124dce6520455527a74af"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "9d8597613ad88f9bb6da7642939bf4d7"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.png",
    "revision": "2a23190667a428ed189274d6db55ef6c"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "6e6cd345abebad8eaac167bae670ccc4"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.png",
    "revision": "fd21e4df36b8bad2a507b89b365023d6"
  },
  {
    "url": "help/how-to-use-helperbirds-style-features/index.html",
    "revision": "3d5ed80b66c2f9e208051532c1938bec"
  },
  {
    "url": "help/how-to-use-helperbirds-style-features/index.png",
    "revision": "171d651cab83f101b5bb4e2c9ccfd434"
  },
  {
    "url": "help/how-to-use-helperbirds-writing-features/index.html",
    "revision": "db1d7e215c5be027bea185f28a217aba"
  },
  {
    "url": "help/how-to-use-helperbirds-writing-features/index.png",
    "revision": "650b287b4088a3a3ef7d393e3cc7d2fe"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "435987f8135d17088807189e84b4ca20"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.png",
    "revision": "c4d0ac0aca79f37bcb6730ac5f24e011"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "6a896ccb6b35997bdb76f94e986e44e5"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.png",
    "revision": "af16ea4bcbd2e1803d0d3fafa4e31449"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.html",
    "revision": "795956c19830b53723e83a983637f489"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.png",
    "revision": "49e5f4c10de0b3722e4300006ba043d4"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "014fbc1a6448ecdee37f4bb5ff524f87"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.png",
    "revision": "f60b01c3ce2ca2e3488f4696b0dd06a1"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "4a72e47b765f1c8c265eda8b0e5e1ee4"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.png",
    "revision": "ffb3d789acd1da27ac14f271a0be5dde"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "74a4a17384aa7b271770e8c1aff35480"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.png",
    "revision": "9055e9ee71a2c2de0366ab0d1301a143"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.html",
    "revision": "92f971b872be28526324c1e579454ffd"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.png",
    "revision": "e43c6c6d0c79ffe7b86113f652b1f01f"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "e850e29c3e01e911d13b192b3c6d2258"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.png",
    "revision": "73b86e5c2a1a503dd24d446144eef75c"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.html",
    "revision": "26c1b6d89facfd48a9b377746f1613e5"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.png",
    "revision": "be4a00575fd30da1b2b58653f228150a"
  },
  {
    "url": "help/how-to-use-the-volume-booster-feature/index.html",
    "revision": "51bede91f9a1e9f24437b86056fce84f"
  },
  {
    "url": "help/how-to-use-the-volume-booster-feature/index.png",
    "revision": "1971c7c0e5b7c6c6a506e1e29205aa51"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "381d2ee4e7660af03070e114231b6300"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.png",
    "revision": "0218dfa620c53bfa1b9f88fc53355c57"
  },
  {
    "url": "help/index.html",
    "revision": "52eb2cd4e0e70084cabf9fc64b17883c"
  },
  {
    "url": "help/index.png",
    "revision": "daf0c41cb58873112c6acbb823137c94"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.html",
    "revision": "c159421e86e0fc52150eea9cfbc82070"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.png",
    "revision": "d88d7b28ace0407be426518bf7c09308"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.html",
    "revision": "de1e89bbe1fbd078aaa09cf2ca5b0207"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.png",
    "revision": "e87675d6edd12f0fdba15e2737b1ba07"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "dcae21638439e6f558e21974a38b337f"
  },
  {
    "url": "help/installing-helperbird/index.png",
    "revision": "e8f733409ecd812e28cb0e0803014e7b"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "dbb00823a0c9eab65539189077272b84"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.png",
    "revision": "ae726e978c8f8f995fbd16a3c4759769"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.html",
    "revision": "004665e4fdbd1c64d9ab933ce08ae53c"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.png",
    "revision": "8d9b55c93547ad1caa46dcb09d1b1573"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.html",
    "revision": "d68476a0bba8b0f62c5ccf6206d9dda1"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.png",
    "revision": "b256dffd86ef9b5c970ee77979fc23ad"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.html",
    "revision": "1a4d90842642e58c29721b7456790a4d"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.png",
    "revision": "7adb93b484e7857d3dddd38d50d56cf5"
  },
  {
    "url": "help/sync-data-locally-or-remote-helperbird/index.html",
    "revision": "4e8812ba58360eff96733bf52cc8a40c"
  },
  {
    "url": "help/sync-data-locally-or-remote-helperbird/index.png",
    "revision": "15c48e1edb586ef6f9c12d00468903ca"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.html",
    "revision": "b1a897a721c5a1d8a589fcbc334ceffe"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.png",
    "revision": "f562f704c35ecdc38a145e0798436738"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.html",
    "revision": "834981a8b272f97092f9e50ff2a2a599"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.png",
    "revision": "3f5b54fb7cc5bd9b2db4ee1b7e5f0661"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "ecdf0e2039f03ee4da2f24846efdbc84"
  },
  {
    "url": "help/what-is-helperbird-free/index.png",
    "revision": "eb090d68e34fbfd938090be0dec5735a"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "035e6253f8ad85366f66c52884746e30"
  },
  {
    "url": "help/what-is-helperbird-pro/index.png",
    "revision": "3fadfc47888c5798b8d17f40e076628d"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "c9c593c6308a72bae1c1ddcdd4286d88"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.png",
    "revision": "49eb2fb3022046570a7e5f150f852352"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "7888f04d04ebc0fdadd358430943907f"
  },
  {
    "url": "in-the-news/index.png",
    "revision": "fc9aa6d2a27cfa5a3b694cdcb303dadb"
  },
  {
    "url": "index.html",
    "revision": "dafbf3b8a8aca97cd55b5183a6e405e7"
  },
  {
    "url": "index.png",
    "revision": "2930af88f2f66184eb65f60a4e06048a"
  },
  {
    "url": "key/index.html",
    "revision": "76e908bab6fec10ece20c6667482fa71"
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
    "revision": "253e85feaa03a1aaf3ddcad6044907d7"
  },
  {
    "url": "order/index.png",
    "revision": "d6492998491e95f47b94a99ca216344c"
  },
  {
    "url": "partners/adriana-garcia/index.html",
    "revision": "11b7a04ae9dcde05936d6525a2b661a0"
  },
  {
    "url": "partners/adriana-garcia/index.png",
    "revision": "551f388fbd5e2de86708b3507a32d57d"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.html",
    "revision": "dcbf5d390ce0f1f06c45c6b47880e2b6"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.png",
    "revision": "7e978fceaf6a6585e805d23995d43a4b"
  },
  {
    "url": "partners/index.html",
    "revision": "289c84364dfe707fe0a7bc9488f4b3c7"
  },
  {
    "url": "partners/index.png",
    "revision": "de4369e29e433881bf4e81cb2a5b05e2"
  },
  {
    "url": "partners/irene-hughes/index.html",
    "revision": "05759f5dd497f654cae41f7d4942bcce"
  },
  {
    "url": "partners/irene-hughes/index.png",
    "revision": "5c61efc35204c2bf77950d079cdc1c32"
  },
  {
    "url": "partners/nova-proton/index.html",
    "revision": "b25180203b37e90a4dcdee6ca4f2c040"
  },
  {
    "url": "partners/nova-proton/index.png",
    "revision": "e8d0e14d9691222013db88806bfbf114"
  },
  {
    "url": "partners/paul-spencer/index.html",
    "revision": "8f3a1078e62f42eb4e831edb32044d34"
  },
  {
    "url": "partners/paul-spencer/index.png",
    "revision": "257cbb61b4e775e45cdd091510a94604"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "7cd65502db36ff0328dfc3a3ed92c4eb"
  },
  {
    "url": "partners/sascharoos/index.png",
    "revision": "606848d5693b937e41fd6e7e5abb2e41"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "d7263374f1f874b4b64888e67bef3a31"
  },
  {
    "url": "partners/sprialisconsulting/index.png",
    "revision": "52a34288362d9011a3a2a660039b17a1"
  },
  {
    "url": "pricing/index.html",
    "revision": "963206ce92fff119f48214cc59966b5c"
  },
  {
    "url": "pricing/index.png",
    "revision": "ac6d7ccfbe6c561ebaad75bc8ecb4df5"
  },
  {
    "url": "privacy/index.html",
    "revision": "f8a3e7b2d2a9206a1a653389c9ed09d7"
  },
  {
    "url": "privacy/index.png",
    "revision": "bf03aa7b6d51ae924df64f26aff42861"
  },
  {
    "url": "products/chrome/index.html",
    "revision": "7318a3ca69d0a3dd6adef46d549b663d"
  },
  {
    "url": "products/chrome/index.png",
    "revision": "5b08f2ceb190b59bd4dce34e8893b9da"
  },
  {
    "url": "products/edge/index.html",
    "revision": "3f51b6d9c8583fe302833fbbef524c65"
  },
  {
    "url": "products/edge/index.png",
    "revision": "fb692305ff970c383dbdecbd955424a5"
  },
  {
    "url": "products/firefox/index.html",
    "revision": "aec28dd0320b6a66b1a6183bb07ad40f"
  },
  {
    "url": "products/firefox/index.png",
    "revision": "b0fe9d34c3e0930821b497ae9cab5f2d"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "a732c4f39d98812a75cf6a02480ee38c"
  },
  {
    "url": "products/google-addon/index.png",
    "revision": "692f9b6902270a0be6f0198f39090bfd"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "17e73e656fa8742024d427897b6e1cb5"
  },
  {
    "url": "products/ipad/index.png",
    "revision": "cdf490e432a84cfabf19790da83fccfa"
  },
  {
    "url": "recommends/index.html",
    "revision": "72d08b06e9b1c239297a7649e1eeef6c"
  },
  {
    "url": "recommends/index.png",
    "revision": "8e3db93e5cd233b708163833b893df89"
  },
  {
    "url": "redeem/index.html",
    "revision": "f842eb7043d07e9107fb086717990664"
  },
  {
    "url": "redeem/index.png",
    "revision": "c1d2f48979fee8202f88f07467d7727d"
  },
  {
    "url": "refund/index.html",
    "revision": "62a9372649f4acca73c6215b4ed78962"
  },
  {
    "url": "refund/index.png",
    "revision": "1cd4f969d567f46a94ec1a399a43075b"
  },
  {
    "url": "reviews/index.html",
    "revision": "a6d3aabea344f9cfc21c2bd32f1830bb"
  },
  {
    "url": "reviews/index.png",
    "revision": "567b9fa948a20e3e2bad91665d7d0773"
  },
  {
    "url": "sales/index.html",
    "revision": "3d393fd009328d0bf6907ce3e6a50f07"
  },
  {
    "url": "sales/index.png",
    "revision": "04645d440cff06ae6614f680a4fd9f8b"
  },
  {
    "url": "security/index.html",
    "revision": "49f8fd5185560b858142aedf5bbf8d10"
  },
  {
    "url": "security/index.png",
    "revision": "3bc2f86b4359d9ecaf11de1f18245fe1"
  },
  {
    "url": "sitemap/index.html",
    "revision": "251f1cab90c6a7d6ce221dd3cf4df370"
  },
  {
    "url": "sitemap/index.png",
    "revision": "7d24e8009ef2a1b80634d8ac5cb7e661"
  },
  {
    "url": "success/index.html",
    "revision": "2fa483cbb3de0337789cb94b366824c6"
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
    "revision": "144a5ab08fd2efb959c2ea069c147cc8"
  },
  {
    "url": "support/index.png",
    "revision": "e4977a66acae81dec924cf70c0f0806c"
  },
  {
    "url": "survey/index.html",
    "revision": "f1d7d97bf8ced06662eba62eb71aa0b8"
  },
  {
    "url": "survey/index.png",
    "revision": "b2ec3cf9ced4b88a516da0d35ab0d0d4"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "03413364b27ec02bf319cb7aa9eb577b"
  },
  {
    "url": "terms-of-service/index.png",
    "revision": "a98ab29a2f0316e320c3e5c0095235aa"
  },
  {
    "url": "testimonials/index.html",
    "revision": "f009a2e21d3fcfc4a8c37612089571d4"
  },
  {
    "url": "testimonials/index.png",
    "revision": "40b264cf44466cdd6555c4225cc57720"
  },
  {
    "url": "tutorials/index.html",
    "revision": "0fb9db661e751ee565d0b155121c00f8"
  },
  {
    "url": "tutorials/index.png",
    "revision": "7cf4e18520f3730c54c157235e668b75"
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
    "revision": "82487c4353a3ad90e81cb8e48ea19e12"
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
    "revision": "7a4a8da71511f5698d973811d7d938c4"
  },
  {
    "url": "usecases/index.png",
    "revision": "36e4ec18f396a80f3099efe8235bd22f"
  },
  {
    "url": "welcome/index.html",
    "revision": "956464052324f76cfecd6b8043c2e662"
  },
  {
    "url": "welcome/index.png",
    "revision": "cd84828f4a0f2eb9bb22a81f065c67bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
