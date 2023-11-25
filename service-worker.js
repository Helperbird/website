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
    "revision": "7323cb4e916a6850c4806c2ec7b04656"
  },
  {
    "url": "404.png",
    "revision": "4850b717dc9703d8ee3eedd74f8870b8"
  },
  {
    "url": "about/index.html",
    "revision": "17713fddbc7959ee1a613faca6bde806"
  },
  {
    "url": "about/index.png",
    "revision": "454662d61604ff563b2cd9de7790b02f"
  },
  {
    "url": "admin/index.html",
    "revision": "2b3577df8cfcbcd55baf49bc4a83df37"
  },
  {
    "url": "admin/index.png",
    "revision": "530c1239145780bc32fde719620dc45a"
  },
  {
    "url": "admin/style.css",
    "revision": "636d37b2ac0d3ab0f06deb6dbbfd6f82"
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
    "revision": "d4feea127680ec3423e8d96eb214ca5b"
  },
  {
    "url": "assets/images/blog/how-to-use-immersive-reader-in-google-docs/how-to-turn-on-helperbirds-google-toolbar.png",
    "revision": "1b402b9cdb3bed51128abb621566f7d7"
  },
  {
    "url": "assets/images/blog/how-to-use-immersive-reader-in-google-docs/immersive-reader-loading-in-google-docs.png",
    "revision": "0f9bf5412758d71f41c9b963c6bfe639"
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
    "revision": "7bbd00b5848311a34ce3e9c33e7c2b3b"
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
    "revision": "f267fa80c095966ef741a8506f8b9b92"
  },
  {
    "url": "assets/js/main.css",
    "revision": "5ef2be8322c3d9263d23bf61438509d2"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.html",
    "revision": "30f90c2a7a53df9cbf49a7bee27a011d"
  },
  {
    "url": "blog/10-essential-assistive-technology-tools-web-accessibility/index.png",
    "revision": "1ab24b4d86aadb1e674d843117a841b7"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.html",
    "revision": "1a2becee4430317cc325cba1ea1e32f6"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.png",
    "revision": "8f7e3b0470ecc5bb5cd43da59e3a1cff"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "c5021f756fca9bfb5aa98bdb6be0b934"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.png",
    "revision": "d4afcb54ad5f38068c5ae51eb993e366"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "2b606ec6fc22af6fa1afbfb23dfab4bc"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.png",
    "revision": "d1e475e1e632b585714df746f4f7b3a0"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "19d75175b9c10ff135599b2dc4e418d6"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.png",
    "revision": "43549bcd1c190a4dea6c0c3b73a429ec"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "149267740a02d82d1856e565a457e1a1"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.png",
    "revision": "e3ad7a8f74c7df3b117455319fc30ec4"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.html",
    "revision": "87af9e91ed8723246f5d8e5b0a4e8a95"
  },
  {
    "url": "blog/boosting-classroom-accessibility/index.png",
    "revision": "10134b5d8f5a08e174587dd4af8c58db"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.html",
    "revision": "7686841f1a05188dca6d39e26e4ac6c8"
  },
  {
    "url": "blog/creating-accessible-emails-a-step-by-step-guide/index.png",
    "revision": "0e2d3411190c72d77f30571fe6360b49"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.html",
    "revision": "e76252fa722dc4eefecde3daa97a7f19"
  },
  {
    "url": "blog/enhancing-inclusivity-role-of-accessibility-software-in-modern-classrooms-with-helperbird/index.png",
    "revision": "0133994a4e8cb3b73b6cc74c96e3fc51"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.html",
    "revision": "005ee4adb980b1048fa49bed7cf36847"
  },
  {
    "url": "blog/fostering-inclusivity-at-work/index.png",
    "revision": "59456cf5c891276deed1180ba37da810"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.html",
    "revision": "03f5a7b7ba749c2c2c359bd8fae5e7d6"
  },
  {
    "url": "blog/helperbird-dyslexia-solutions-jamies-story/index.png",
    "revision": "99607b5a87f84c8613797964cba96aab"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.html",
    "revision": "ea463b7edf117fa4e79beae99d452b83"
  },
  {
    "url": "blog/helperbird-immersive-reader-marketing-alexs-story/index.png",
    "revision": "3f9fb0df6ed707dd0f966d8308141678"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.html",
    "revision": "033790e08922c3226990faf74aa68f84"
  },
  {
    "url": "blog/helperbird-pdf-reader-rorys-story/index.png",
    "revision": "ee7e3630f5216c4b644e35eeccdee4ce"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "1707fc4dfe32988b7c06915cb2794b6a"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.png",
    "revision": "3a60f6dcb9aa18cf58ba36a788b408e3"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "248ad9d89bf01b9d4bec8de42ae960fd"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.png",
    "revision": "ae233ec5d490752b810e77c550728f66"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "a96a31294c80a1ca4bc0e305cd70b1c9"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.png",
    "revision": "c192243a95021b69ba9743e817eba409"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "f7d606a88155f6f181ae8f7500b47c1f"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.png",
    "revision": "3973f5a9a08a3ddd0d55fec984ceaa78"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "8fdffbd1fb503a62b8d850ff514da20f"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.png",
    "revision": "5522c307a4bdf6ec6cc475ffa02e6517"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "74fa20aac9326593c5643218bcf7220f"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.png",
    "revision": "f04653d3bd2713f99d0b9ec972db9272"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.html",
    "revision": "913ba1004cd1eaf592596cde292971a1"
  },
  {
    "url": "blog/importance-dyslexia-friendly-design-websites-apps/index.png",
    "revision": "aaeed2c39a8c1a055880ee80c3136dbf"
  },
  {
    "url": "blog/index.html",
    "revision": "096fc09a98c06e5b8584388aed771d49"
  },
  {
    "url": "blog/index.png",
    "revision": "2b6d7aeb71ed04c6d30d88a437a33063"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "0b9af7c7af96a6df41db94d5b32a56df"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.png",
    "revision": "7eea4f78e8ab21c0016243fa00c048a9"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "516fc686bde7626aae96e11ca101c1d1"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.png",
    "revision": "c95097524c65e300ab8f6c04f27c05b8"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "cf480a60aff5f80a51249db42d00cffb"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.png",
    "revision": "14216fe2f5fa3b6536a90ca4aed62074"
  },
  {
    "url": "blog/reword-function-student-success-story/index.html",
    "revision": "ff3c7576f59f564c5d3ecd51b5545e42"
  },
  {
    "url": "blog/reword-function-student-success-story/index.png",
    "revision": "dc3b8828dbcaf1e2b900a53f0c41d0ab"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.html",
    "revision": "15aa5ae76d61d06552d412a34342e0ea"
  },
  {
    "url": "blog/see-the-future-of-helperbird-2023-2024/index.png",
    "revision": "8dedcb9fe38f2ecd3216c0f18567facf"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "7aa8b86ab566bbb0542b27bf24cca7ae"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.png",
    "revision": "b44aa99542aa23d1cffb6da00393d0b0"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "a04696e812fecda0e0bcfa3dc6140dce"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.png",
    "revision": "554a02a7b0e71fe4727e7638ed135181"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "97a13f619e52f2db9b4cfe63ccefab66"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.png",
    "revision": "b6febb75cfa6ba22417437cefc8fd08e"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "9dcb98865fb07098b01a9849feefa7b1"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.png",
    "revision": "cda4dce8686d61940954f041d413debd"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "416890016f6a4a7dfb75c3538f258ae6"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.png",
    "revision": "4063f529f75e150ca10c99d48a1d4956"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "c72efa0b3fe9201abe71d343af544091"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.png",
    "revision": "a49a7b49419938054339d8683c163996"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "2fd01b20c7babd838b31860dfc7a90d5"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.png",
    "revision": "e1cbc49eb83fd0ef0098c7fca1792960"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "65d85ae5ae005d81b4782d0fe9b57da1"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.png",
    "revision": "cccd463de1729c6aad3aca810fd629eb"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "0742335761fba6f2a898f739eb2ca538"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.png",
    "revision": "b040927fe3fd3d57f6fce1fe07a210aa"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "cd247eb6f1e8d7b28d6781ae9fd500cd"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.png",
    "revision": "393aba5397496b52bcbd7a74956c5de0"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "ce534daa3fbc4fea89072c12f3600e86"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.png",
    "revision": "ce8859fa4b137e40a9e366aca3c180ae"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "b8d153e8b30bb265e7fea19cbe55272f"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.png",
    "revision": "2485a0e69ac8373b88519cf896fce672"
  },
  {
    "url": "chrome/index.html",
    "revision": "abde5775a8fa695d2d1437f240f34455"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.html",
    "revision": "582203616a9b7990b9374f0e58821fd2"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.png",
    "revision": "e2835ecc8dcd853c69121e6583373088"
  },
  {
    "url": "compare/index.html",
    "revision": "20f58f102c92777bb2712f87097d637e"
  },
  {
    "url": "compare/index.png",
    "revision": "bcf1cdb5713cc1f7a4ddd7d664bec376"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "9b46f340012309fe7d6c528e0ccb1828"
  },
  {
    "url": "compare/read-and-write-alternative/index.png",
    "revision": "729f777bb9d27a61357a523ff4aa00ef"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "87fbe393193eda1dcf91ea9ab8055fd4"
  },
  {
    "url": "compare/snap-and-read-alternative/index.png",
    "revision": "b62fcb2ae9704366539f8aff78186cec"
  },
  {
    "url": "compliance/index.html",
    "revision": "0575adc7895a2c7750d41f6653a11033"
  },
  {
    "url": "compliance/index.png",
    "revision": "c67f5c6b78b540b7461b84444dff2ffc"
  },
  {
    "url": "contact/index.html",
    "revision": "4f6d6b830efc5a1a63fe85535b0c4885"
  },
  {
    "url": "contact/index.png",
    "revision": "31e46a052b1d5bc46d89c997d497a63a"
  },
  {
    "url": "edge/index.html",
    "revision": "c3ebd50d546918025169d62bdc52e471"
  },
  {
    "url": "edu/index.html",
    "revision": "46bc98d28e65e38687a30a521a76ee58"
  },
  {
    "url": "edu/index.png",
    "revision": "ccd7005030d0fcd93933c342509ecbe1"
  },
  {
    "url": "enterprise/index.html",
    "revision": "16e49328d86b540911a64fefa08d5b1e"
  },
  {
    "url": "enterprise/index.png",
    "revision": "bb412c08655fc1f65cd1738f9486e690"
  },
  {
    "url": "extension/index.html",
    "revision": "21023d9db43a1c22ab29f7fc55de83a2"
  },
  {
    "url": "extension/index.png",
    "revision": "0dc20301c4da12e581f80e9de56ec440"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "a7ed214f709c1a28524dcbc96522377c"
  },
  {
    "url": "features/adjust-letters-and-words/index.png",
    "revision": "c99434baecda8e10372f790ea159efc1"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "88edf23df80d6aa322c046821211268c"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.png",
    "revision": "e21caa92331a26f204eabf40774b320b"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "7713ca9162f1e9975aa98edb32c30c25"
  },
  {
    "url": "features/analyze/index.png",
    "revision": "e9c368f7827ba888d070130c8ecbd7af"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "8f833d858ab485f64a17caea2de136c1"
  },
  {
    "url": "features/annotation/index.png",
    "revision": "c59c687676f0f481c2f0eedff92efd2b"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "6c7067394fff48827b9c188d53ce15ff"
  },
  {
    "url": "features/auto-scroll/index.png",
    "revision": "2102249745872404b5fbfe3a13eba11d"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "c0a1a1d08b3723a5f4a34d9dcf5a400f"
  },
  {
    "url": "features/bookmarks/index.png",
    "revision": "526bcda864eac9f811c7ea5f158b53d7"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "b772fe0584b83a19d8ddc399dafbe3f0"
  },
  {
    "url": "features/color-blindness/index.png",
    "revision": "4e1374c9843c7a57a50c21cc2f5097c7"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "fd8b88bd1e6878282acd9d9f67278850"
  },
  {
    "url": "features/cursor-control/index.png",
    "revision": "459f09bdfcfb946bbdeb513ad481c595"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "8bb617ee1cb75d2090465e9379a144d1"
  },
  {
    "url": "features/dictionary/index.png",
    "revision": "0fd5199427e173f5f6bbab94bbf44900"
  },
  {
    "url": "features/editor/index.html",
    "revision": "47fa9e419eaa20a65fb54c2a298c4cec"
  },
  {
    "url": "features/editor/index.png",
    "revision": "cf8acedb2ce6801c823ef053adafecfb"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "35c10ecaab7266c004d81ea3b058eb03"
  },
  {
    "url": "features/font-sizes/index.png",
    "revision": "a162ce67f9423561516d15bad376b76c"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "6134596837bd9a748f6cdd67b3b0c8bf"
  },
  {
    "url": "features/google-translate/index.png",
    "revision": "27a4de42f426ffad4b34794d4938cd3e"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "118e6216ab9f7b074dc71794fb59285e"
  },
  {
    "url": "features/gray-hue-overlay/index.png",
    "revision": "669719591f1f65a9a411ddcb1402ab1b"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "4a452671f3eb264761a040ad4a7054c3"
  },
  {
    "url": "features/hide-images/index.png",
    "revision": "c934c23518e8f92d027d4e85fa3391a8"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "aa1289f65ea4e8a645c09bb86b053fef"
  },
  {
    "url": "features/high-contrast/index.png",
    "revision": "436eff21bb0889b17ff431ac1ef83706"
  },
  {
    "url": "features/highlight-menu/index.html",
    "revision": "10a84424d3996fdabf9047425c98b075"
  },
  {
    "url": "features/highlight-menu/index.png",
    "revision": "5f2e233044bd1b0ed53932d5f1f1148b"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "6a4a9f91ba5dac9fef8476bfcde42082"
  },
  {
    "url": "features/highlight-paragraphs/index.png",
    "revision": "6598849475f61f6938dcb1972027df6e"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "721a43bfa5a6a626d74910a1294b4d0a"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.png",
    "revision": "a083e2021ae5822abb662f1b72b4736e"
  },
  {
    "url": "features/index.html",
    "revision": "de2a1a69814149e89eebe3ae83ad2c35"
  },
  {
    "url": "features/index.png",
    "revision": "3c7721cb68b336db185b86b09c14ee63"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "ffc9cd1d81605108360ff2215c7bc811"
  },
  {
    "url": "features/mute-videos/index.png",
    "revision": "b525c3755681d7e27a4053689679e0e3"
  },
  {
    "url": "features/notes/index.html",
    "revision": "12bd0f784342a08858d74a4db98d298d"
  },
  {
    "url": "features/notes/index.png",
    "revision": "819aa44a1eb6bbb5d0ca64b2b3ad950c"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "0108349e98b36198aff6f742fafc566f"
  },
  {
    "url": "features/optical-character-recognition/index.png",
    "revision": "936aa25f51dc72137e0ab5700d9de534"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "c95bc8b87f86417980cefb14d6c4cbef"
  },
  {
    "url": "features/overlay/index.png",
    "revision": "67c2078bcb5c081ae2c487f9358215fe"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "33dfd231eab012d56a790ef760eb5aa4"
  },
  {
    "url": "features/paragraph-widths/index.png",
    "revision": "efbc131e66f1a3b2c639676f4952d4e3"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "06f9214e245e2a67c5ad0c6a3767d2f0"
  },
  {
    "url": "features/pdfs/index.png",
    "revision": "d9b82aa03215e3077d9b2ad9522612a4"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "d2bb59b0f6c97b5c2e644bacba89b16b"
  },
  {
    "url": "features/printing-tool/index.png",
    "revision": "10fda63ec531b9ac7bdd4b6fe7306572"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "599b1342236bcb9dc756b094884265a5"
  },
  {
    "url": "features/privacy/index.png",
    "revision": "e60b1115272e9ecfced463d67eac5106"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "a008efec98b74f9c2376c223ab0cb402"
  },
  {
    "url": "features/reading-guide/index.png",
    "revision": "f7f745c687269371680082b989fb701d"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.html",
    "revision": "9fd50aaf3acc5299353b8a223bd2c199"
  },
  {
    "url": "features/reading-mode-for-chrome-and-firefox/index.png",
    "revision": "08f0094f1e7271569147748d094e2017"
  },
  {
    "url": "features/reword-and-simplify-websites/index.html",
    "revision": "8e5949ec93ff6fba05c0e58e561c95d1"
  },
  {
    "url": "features/reword-and-simplify-websites/index.png",
    "revision": "ab708e46060b43ec23e5188741a0ac35"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "c89f10fe480338431f05488150d83381"
  },
  {
    "url": "features/ruler/index.png",
    "revision": "73c8c207ab65cab96ed35ae34032bf22"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "4e598acea4974f6079b1559d3d0d1fd6"
  },
  {
    "url": "features/screenshot/index.png",
    "revision": "0d0f447248fda5ea4745a44269d3a4ed"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "8ee3c027026ac3c066985649b23323e1"
  },
  {
    "url": "features/shortcuts/index.png",
    "revision": "bb25c67f190c3635580d190e4871d50d"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "20477da04373481283f2a633818132e4"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.png",
    "revision": "2cf0b3b1d86e10a3902b53397576dc5c"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "b77c9e3aaf2baa6eb8eb6abdc1a5f143"
  },
  {
    "url": "features/speech-to-text/index.png",
    "revision": "ff9c0b7c61689cea41126b85f47efb66"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "07eabb527b2407fd43dec36603fb0f03"
  },
  {
    "url": "features/speed-reading-extension/index.png",
    "revision": "98a62ed9ef8a5b9b9a2f41114327be47"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "66fe3a9a956ec96dd185aebd8a25aca9"
  },
  {
    "url": "features/spell-check/index.png",
    "revision": "192acd5b8c24990b7b12b51bce3df3de"
  },
  {
    "url": "features/styles/index.html",
    "revision": "6d164fe96a2dab0b0312d7e34a501097"
  },
  {
    "url": "features/styles/index.png",
    "revision": "078aa2f2ca2ea67c5903cfda6c48ccd9"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "4f05c35b29b895ebdc639f0c89a4884d"
  },
  {
    "url": "features/summarizing-tool/index.png",
    "revision": "cf42cfd44190db4fbb29e03049dba902"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "6fb70c983dc7416d45836fd3e9196c8c"
  },
  {
    "url": "features/text-align/index.png",
    "revision": "e7ec61ff02800928616833cf37ed19ee"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "6c84e5228a12754a55cf90d43e898937"
  },
  {
    "url": "features/text-to-speech/index.png",
    "revision": "2b7c05c32ceb56e58c27a1894649e57b"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.html",
    "revision": "7bb63b0b5d19dcc7179bb4c476baf511"
  },
  {
    "url": "features/web-highlighter-and-pdfs/index.png",
    "revision": "52a7d0a00f9e29ef47f0aa1e9b9e458a"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "197033de76cd07af211d1499706604fa"
  },
  {
    "url": "features/word-prediction/index.png",
    "revision": "2257e060c299c0bd32837e0e9282b264"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "b261653ad1a935d38ae188b38b1af950"
  },
  {
    "url": "features/zoom/index.png",
    "revision": "2d1b44d3545c7249f8cd07d8afb9f7c8"
  },
  {
    "url": "feedback/index.html",
    "revision": "6fdccb03bbad700412bb31944c397d3d"
  },
  {
    "url": "feedback/index.png",
    "revision": "3be3485b7f7b7b3d364eb4d5454787a6"
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
    "revision": "530c1239145780bc32fde719620dc45a"
  },
  {
    "url": "guides/index.html",
    "revision": "b6bf949bb1c5446345e4491d002d7da0"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.html",
    "revision": "ad1c1d205263fff6c22dcfa5abf60bf7"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.png",
    "revision": "dea97568db47848f8a3c8d8b60d06c56"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.html",
    "revision": "b453dc89e13afe78ead8b6a324657aa1"
  },
  {
    "url": "help/family-sharing-helperbird-installation-guide/index.png",
    "revision": "8889dcf3c96db64a6677420e4016f5ee"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.html",
    "revision": "7455308889e4ab0e53b85619f29ab43b"
  },
  {
    "url": "help/forcing-the-installation-of-the-helperbird-extension/index.png",
    "revision": "b3d47d25582f327945a4659857c09123"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "1f46597a1e0f23a74be076eee6b945f3"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.png",
    "revision": "4beb3a1650746fc4b552f61861837063"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "979a4a3e62b216733a284869a354471a"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.png",
    "revision": "928c8731fc855f68a58656919c1d7706"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "81aebd1505b7aeb85811d24c9be04cd8"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.png",
    "revision": "bd542e43667bf3e4722f35df54305249"
  },
  {
    "url": "help/how-to-access-our-helperbird-usage-dashboard/index.html",
    "revision": "b9fe864d11b849849efcbcb5b9c973cc"
  },
  {
    "url": "help/how-to-access-our-helperbird-usage-dashboard/index.png",
    "revision": "7092787641fdc4b040fb5cbefd170644"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "4e57bcb81129bbec43bd7444e0fc5208"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.png",
    "revision": "63612fb5d3b311ab7c19f9154426457b"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "3e2c352164d0108ad1871e6e1ba96b14"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.png",
    "revision": "c4f870dca7405db11bbd59a11f1deefb"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "da5838365754b9fade626976e060a696"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.png",
    "revision": "deecdeabc76238cdafeb41ec0ddbddb2"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "735098fb868921e06e127823698ae0ec"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.png",
    "revision": "3718dbd6ad1d9f6b535e234677c0cb97"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "16a2d07dc082b3ae9cf38213d9d7b23c"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "28172ceb01403c1f6342ee30bead6f8c"
  },
  {
    "url": "help/how-to-change-my-email/index.html",
    "revision": "671d931f9539a0e3b5fcb5defb8f6f1d"
  },
  {
    "url": "help/how-to-change-my-email/index.png",
    "revision": "ff5e44ce61b4da757cf99688cbf18284"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "84940538ec638fa5d11320ebd14883d4"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.png",
    "revision": "5df7fffe4ed48ee7ecccddb43e819862"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "01fb430979650e25c0a7ad16308b903a"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.png",
    "revision": "131cd0202d9f58896ed0a459740bc4f8"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "e40adb55d3e125de61cb1b59a3387711"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.png",
    "revision": "43267d9361d8dfdedbc1705b1686fc30"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "77872bab03698be8e964a2b42f82a070"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.png",
    "revision": "6f0e4fe9e4711e8844e26546259684a6"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "7e38260276ac0e233ac0f2d4e0fc421e"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.png",
    "revision": "8a0d500add6e221a9270639760696fb5"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "3033813b654637d80e795fecb2616603"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.png",
    "revision": "d1654b61c8663c8218c593b001336212"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "63b832908dc08adec3e5d4d9bd98c969"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.png",
    "revision": "badb8a6331d07ff64c693af81b81cd8c"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "fd1a4952baaafcdffde4036a83a2cc15"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.png",
    "revision": "076b77bb7d0d9186683f7760f6da9a42"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "aabbc8a318064ec177cbbe9e42854ccc"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.png",
    "revision": "71c8743763e0b2344cf98be9f8c46383"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "c937ef08832e96155441717a5da34ba7"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.png",
    "revision": "0ada138d64f442b9fdb5fa821fc5b656"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "d124ef7ba2d100e63bbed5077c5f84f1"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.png",
    "revision": "badb8a6331d07ff64c693af81b81cd8c"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "1e70bf4cb8550af361650aab2b79848e"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.png",
    "revision": "b221208cd0ceb8970b6713b033c1871a"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "668816137cd86e4245b149ccbd1f5345"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.png",
    "revision": "f406d354ae693670302b89db9e71bec7"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "d21ad3ba6dd793618682c2d66f47775d"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.png",
    "revision": "8cc8db21a372bd2b576e8a33803c3054"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "288f7a8799e9f5e226acaf33e39e4c81"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.png",
    "revision": "671429425ae0cf495b5db8305b10e453"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "37e1239df29ab85cc5365aef72d3ac73"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.png",
    "revision": "e644ff56138764e9643532501bff3228"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "dec318ea4e43b2bb43ffcb58353f3e65"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.png",
    "revision": "55ef4fcf531c05b26375fd7d25b21b8c"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "4d1c465eb98524dadd9cab8c18fea1ad"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.png",
    "revision": "7b686d4982d859a17e323db6f2c8ad3e"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "f466079f776b4ba3ba7a4ced8cc51316"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.png",
    "revision": "6d47f1531968b5c11dfe24b8e9dfa84c"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.html",
    "revision": "8e56f9b7595dd31fb9686d20677cebe2"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.png",
    "revision": "9fa14165fb2fe9e7fb1ba3b47f4cac06"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "cd99bc8d8273a4dccf030ffe8517c25e"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.png",
    "revision": "58e588f5c38f6d95b4870ef71693ff0d"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "ce05201c6cacf9e2ebf1c8de4a253840"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.png",
    "revision": "fd51eebab54117c3ce0eb66e502565bc"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "071674317532b32b9aeff8132efab1c7"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.png",
    "revision": "589815dd20a870fea3cc2d1911a93104"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "6a9214a8d8a70bece02f9a61cb3a0a96"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.png",
    "revision": "0d86155934416c1a9c0143833c903eb7"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "74c83dde748b9c84ed407eb4f1fb89b3"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.png",
    "revision": "324aafb20a4c9bd1a3aba5336013a6a9"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "64e6fa09d732c51cc3524dc90fe865be"
  },
  {
    "url": "help/how-to-pause-helperbird/index.png",
    "revision": "98eb32d192ddce0cd017ca328abe5ef5"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "3728ba9d5bdff06a2dacbb29ee26cb7f"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.png",
    "revision": "e158fac3c6f115ed3011e997be542a00"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "b38762ec76e24fb73adb633bb833688c"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.png",
    "revision": "27d8bb58abb5b6bb36980540c8e4efcd"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "5aa66903654b09897d93c1b27f4e791c"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.png",
    "revision": "ad4731c45c0fb4785c6fdfd487191e2b"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "089bed7569e9aae3a4510bdbfb3fe943"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.png",
    "revision": "eebb5c1963b8de1ac6bdfc752e8eac29"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "2c1ce572353b9df4b936b4f38b9e5c45"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.png",
    "revision": "541e0e6a6e47aa159793c7fcb4f783a6"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "8bcc4fbf54bd47a9de755750407b29a2"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.png",
    "revision": "04f97a67d72373c0ca316c5d1342bbef"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "626e262e46ad8fd1edcdbc1e681dcf12"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.png",
    "revision": "ca14706e7d8832ecc4ac67a4b5e7c829"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "c2d2340b407c11f6a978bb417d0029b8"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.png",
    "revision": "3436c7b364f4dac3d3edc3ca580857b5"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.html",
    "revision": "00a01363648633440a182a1bb443d75f"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.png",
    "revision": "4340e598dd3e5d309b094436822d2062"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "6bfa046670aabd91142ca124e16ccf98"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.png",
    "revision": "73c8c207ab65cab96ed35ae34032bf22"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "cf99991cd758d7cee723dc29966c95ed"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.png",
    "revision": "cec13dbe177e008ba720a21379d11993"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "576af4843085792a096f58f111791b69"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.png",
    "revision": "1f0b17e36c49d7d26547d219a2d63f05"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "fd842b90f83f20bd2df7e4b2342370d4"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.png",
    "revision": "741d55f860ff4c3065f67c6792045741"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.html",
    "revision": "401fc21c6e220071083a25766602fd33"
  },
  {
    "url": "help/how-to-use-editor-app-in-helperbird/index.png",
    "revision": "e143dd73604a873327d6f3209bce19f4"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.html",
    "revision": "8ca77a5ffb0f6b04ae00616fee82e2c7"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.png",
    "revision": "13a113f83dbd2a52998aef029fd751c0"
  },
  {
    "url": "help/how-to-use-helperbird-media-features/index.html",
    "revision": "623a59c9b72e12c10960bca6b527b069"
  },
  {
    "url": "help/how-to-use-helperbird-media-features/index.png",
    "revision": "13a113f83dbd2a52998aef029fd751c0"
  },
  {
    "url": "help/how-to-use-helperbird-reading-features/index.html",
    "revision": "3e1730a8f719e3eb39ccec04b3e6054b"
  },
  {
    "url": "help/how-to-use-helperbird-reading-features/index.png",
    "revision": "945d6f2278b1864eedf9c02aa6b1484e"
  },
  {
    "url": "help/how-to-use-helperbird-reading-tools-and-features/index.html",
    "revision": "e49fbdee50897859f43c05b4016ebb8a"
  },
  {
    "url": "help/how-to-use-helperbird-reading-tools-and-features/index.png",
    "revision": "1877d42f7df52157919bdcf57f97a041"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "7750b6cdcabeafba6352c3c58e53c3b0"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.png",
    "revision": "3db657e8dd2f620c4bd0cd0a2d3df320"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "6f14b9ef963f712411ca1f030072c17a"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.png",
    "revision": "ac3fbe50a528afc006d77d7ab8978744"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "02d6f3ad1906989b7500c3b2e415e0a3"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.png",
    "revision": "b47155522b69517c0a34f819ee24ae50"
  },
  {
    "url": "help/how-to-use-helperbirds-style-features/index.html",
    "revision": "816b7cdd5cdd783817ab60bfe368167d"
  },
  {
    "url": "help/how-to-use-helperbirds-style-features/index.png",
    "revision": "b582a7ca8841e4a44cefdca50eb4c029"
  },
  {
    "url": "help/how-to-use-helperbirds-writing-features/index.html",
    "revision": "2831d9474d68f15cc39381e25609c2a4"
  },
  {
    "url": "help/how-to-use-helperbirds-writing-features/index.png",
    "revision": "d4ffd33b86f7d43099d3429f766a0fd8"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "3b979e56ef835291ec2282ac13f77b91"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.png",
    "revision": "a083e2021ae5822abb662f1b72b4736e"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "9d84eb54f883c414b74ea10588d2503f"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.png",
    "revision": "706e793bf114d74495bfaaf2af37e6d6"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.html",
    "revision": "dc693cabcc349835663ba91a652d0776"
  },
  {
    "url": "help/how-to-use-reading-mode-and-remove-ads-on-any-website/index.png",
    "revision": "08f0094f1e7271569147748d094e2017"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "15bb1b04196508d006ce5de4a880a47c"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.png",
    "revision": "2db891c3c870a7da6a683fe5330eb705"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "c8c027be4bbc11bb1d65bdbe3c92e318"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.png",
    "revision": "103fb8ee1b6fb5f37d6db0ce32f92c0f"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "7f36de5e898e0706e19f72899ea936bf"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.png",
    "revision": "cb23d28d4c01a3d637df9a220a88cd4c"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.html",
    "revision": "e44fa523cd489c7deb0aed6c4a2518bb"
  },
  {
    "url": "help/how-to-use-the-highlight-menu-in-helperbird/index.png",
    "revision": "5f2e233044bd1b0ed53932d5f1f1148b"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "ad49ad407277f78736f6964ee88f5c48"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.png",
    "revision": "333b36d9ffbb7839f75831e4481a0396"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.html",
    "revision": "ee277cfe78624259e504e79d81e6794e"
  },
  {
    "url": "help/how-to-use-the-speed-reading-feature-in-helperbird-with-syllables/index.png",
    "revision": "d8189be2de815797d85a89486276fe72"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "b3a888ea3adf5a74358d5c441c5fd7d1"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.png",
    "revision": "2257e060c299c0bd32837e0e9282b264"
  },
  {
    "url": "help/index.html",
    "revision": "d3f7117675bfbf77c496c81bc1ba915f"
  },
  {
    "url": "help/index.png",
    "revision": "48bcd626a162fdd48ccfd57dc1af0987"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.html",
    "revision": "ea287ba73e335da1098b9e57a882ca85"
  },
  {
    "url": "help/installing-helperbird-extension-through-the-g-suite-admin-panel/index.png",
    "revision": "a0cb39063571869f6ea24a81bda54b47"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.html",
    "revision": "3028364f50ef54118d32b86a261e5108"
  },
  {
    "url": "help/installing-helperbird-to-certain-users/index.png",
    "revision": "89f4ddcf74db43248c468cf53b8886bb"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "c17d9d3e4f9da2539c267cd53de27137"
  },
  {
    "url": "help/installing-helperbird/index.png",
    "revision": "6feadb59b2169025946e853daf973b9f"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "57b6f9998e26a3b68ab12b47e2d30334"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.png",
    "revision": "04ea86b80a94aa64d12c5ea11485859b"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.html",
    "revision": "70c4e8c5087dc27f971ffdb3802ae12f"
  },
  {
    "url": "help/pinning-helperbird-for-all-users/index.png",
    "revision": "8f5d1295b61297eb038e007f94fe1446"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.html",
    "revision": "4a1212cc69ca754b5e294f2b1339c919"
  },
  {
    "url": "help/removing-helperbird-for-everyone/index.png",
    "revision": "79639155dd6a207d26351857196ecb7a"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.html",
    "revision": "6cb6b1953a4accf1971db76c48b2ad1d"
  },
  {
    "url": "help/setting-helperbird-policies-in-enterprise-environments/index.png",
    "revision": "b856011bc490aab066852347bf09420b"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.html",
    "revision": "bf10fedb9ff757e39e3e2829f191ab3a"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.png",
    "revision": "5d49530810872e54cb3c70df1fb7c287"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.html",
    "revision": "5aae52d95fcc6b68762c6f8280567d99"
  },
  {
    "url": "help/what-are-the-helperbird-shortcuts/index.png",
    "revision": "a96ce67a91f27fc68c062f695f29f82f"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "6cce54d5fe851d61343b19f86650a87b"
  },
  {
    "url": "help/what-is-helperbird-free/index.png",
    "revision": "9497c31a35326b88c3e29002eef26ffe"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "a38753e6c57e9e5f41fdd80e7d84acb7"
  },
  {
    "url": "help/what-is-helperbird-pro/index.png",
    "revision": "019048437f844e2f8745bbcaba871cbb"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "d003a1996f49314148888abb5dff3d57"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.png",
    "revision": "3edfd4f52cc066240503dad27e4e0a6e"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "d8ffca072b717317ad9e4ab5ad68aeb6"
  },
  {
    "url": "in-the-news/index.png",
    "revision": "c1cec7602241e8bba68a14c9cf919973"
  },
  {
    "url": "index.html",
    "revision": "1155a0c8b6dac3d0d934a6c75ae131f1"
  },
  {
    "url": "index.png",
    "revision": "ea9a64757e40083423027c94fddd22df"
  },
  {
    "url": "key/index.html",
    "revision": "16052782f896fd4a1c528d1c454bb038"
  },
  {
    "url": "key/index.png",
    "revision": "76b41b5e340cd828c8c0fed823bb6f14"
  },
  {
    "url": "login/index.html",
    "revision": "e24f54eb0e41f92352e578aec7ccaa75"
  },
  {
    "url": "order/index.html",
    "revision": "bd03802d37d91bf961dcb9e15b24c3f3"
  },
  {
    "url": "order/index.png",
    "revision": "2ce540ba796f241112e7825f4aa434ee"
  },
  {
    "url": "partners/adriana-garcia/index.html",
    "revision": "e9234790b6105906966216ae602f1d2e"
  },
  {
    "url": "partners/adriana-garcia/index.png",
    "revision": "f0a21d8d3786bdac98a00f808929ff2e"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.html",
    "revision": "a7f3d330363b7497c80bd4e64229472c"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.png",
    "revision": "cf81603749a3356f9d9a2b5bc68a652b"
  },
  {
    "url": "partners/index.html",
    "revision": "6e11d9a7ce3f61d7c200ba481ee81c5d"
  },
  {
    "url": "partners/index.png",
    "revision": "ac1371856c865e71caef1657d995aab9"
  },
  {
    "url": "partners/irene-hughes/index.html",
    "revision": "ace1a57d8eca0fcd76b2473d88e223c8"
  },
  {
    "url": "partners/irene-hughes/index.png",
    "revision": "ffac1b137f9c8a5d661f84396179f395"
  },
  {
    "url": "partners/nova-proton/index.html",
    "revision": "59d83acb78473d8a0cae0e82b4b9e5f0"
  },
  {
    "url": "partners/nova-proton/index.png",
    "revision": "630017afa77121898196b36554b259bf"
  },
  {
    "url": "partners/paul-spencer/index.html",
    "revision": "2f285de58aa265e59c9bab713a15575b"
  },
  {
    "url": "partners/paul-spencer/index.png",
    "revision": "c9a88dd8b591ad6ab8ef99cbc8056234"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "d8036eec467be1b67cd2b7fe5a7785f3"
  },
  {
    "url": "partners/sascharoos/index.png",
    "revision": "4946567d2c0dfb29bfee0081acc5d208"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "48ae3f66b64ca70f277866abd3d7fc72"
  },
  {
    "url": "partners/sprialisconsulting/index.png",
    "revision": "6acdbcffe13a0c5452fec4f02a50791a"
  },
  {
    "url": "pricing/index.html",
    "revision": "4efbdb7d4daf9a39fc888c385ba41325"
  },
  {
    "url": "pricing/index.png",
    "revision": "b700e99ffb4bd121a093843280d5038d"
  },
  {
    "url": "privacy/index.html",
    "revision": "a6688af7aea975bde8a0def15e57abe4"
  },
  {
    "url": "privacy/index.png",
    "revision": "872cbe88904e0e36fe9e69ca97b81911"
  },
  {
    "url": "products/chrome/index.html",
    "revision": "e02d92e2bceddd5c45951df2100afd04"
  },
  {
    "url": "products/chrome/index.png",
    "revision": "feb062f43471f3da26b1261e230b7526"
  },
  {
    "url": "products/edge/index.html",
    "revision": "2f0a0790695c42a5c49ea66b8a85f773"
  },
  {
    "url": "products/edge/index.png",
    "revision": "f5e31976f0b8f175727a7f39dd4ba994"
  },
  {
    "url": "products/firefox/index.html",
    "revision": "2e4c575f7c4cd67d52c1ff7931be8031"
  },
  {
    "url": "products/firefox/index.png",
    "revision": "52f7f4d288503545701f6ce0f80854a6"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "6499607ea3e20a065c58373edfa4ee65"
  },
  {
    "url": "products/google-addon/index.png",
    "revision": "92494cd66f3e29d00718f33d2c5899b4"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "3e671ac02aa7983ebdbf87105ca7a0d2"
  },
  {
    "url": "products/ipad/index.png",
    "revision": "68c2e228c24132a532ddb649ff023210"
  },
  {
    "url": "recommends/index.html",
    "revision": "16d6b3614b9142fb88948fa3b13c7f1d"
  },
  {
    "url": "recommends/index.png",
    "revision": "be5bf7a8b0b93ee5cb1f7dec177fe8f0"
  },
  {
    "url": "redeem/index.html",
    "revision": "97b4f768bf8147fd2363e7b35d7d63b9"
  },
  {
    "url": "redeem/index.png",
    "revision": "a705b6a471b51e6efd14ff99e45422e5"
  },
  {
    "url": "refund/index.html",
    "revision": "f25a1eccf1da73759885f18a690b6fe0"
  },
  {
    "url": "refund/index.png",
    "revision": "4582ef70512a59f9c5904d4e0486c7fd"
  },
  {
    "url": "reviews/index.html",
    "revision": "47302550e0c18c810c5e312bdb2208d1"
  },
  {
    "url": "reviews/index.png",
    "revision": "967a4f85c933c13a086a10c9c586e71d"
  },
  {
    "url": "sales/index.html",
    "revision": "b9c352eb369006fc6afd4ad0793cedf8"
  },
  {
    "url": "sales/index.png",
    "revision": "28d27cd877a0737471d9a3e56a2e94a3"
  },
  {
    "url": "security/index.html",
    "revision": "dd7eb40234224a7152f4f0412e3eeaef"
  },
  {
    "url": "security/index.png",
    "revision": "5106a64aa92d480ca90b09b7751639ec"
  },
  {
    "url": "sitemap/index.html",
    "revision": "4f3de3100f9d4efa0005618091e492d3"
  },
  {
    "url": "sitemap/index.png",
    "revision": "12a0e14550b8b29b8515e71c4cdfa242"
  },
  {
    "url": "success/index.html",
    "revision": "2a1053aabdd7cc54c10d6b109afb45e4"
  },
  {
    "url": "success/index.png",
    "revision": "a2ae9b087c267fe25532e04cafe2440a"
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
    "revision": "b0cef692fac02f120587d84d76fd8ec0"
  },
  {
    "url": "support/index.png",
    "revision": "0658b9e34f964d7d795631bd88b86ca5"
  },
  {
    "url": "survey/index.html",
    "revision": "e9a8f707ab2a9a22633a8001e09f3016"
  },
  {
    "url": "survey/index.png",
    "revision": "15eea8ae150842c7a5d63fb506c48e0b"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "1023a394180cdcb8e1c50c3b8bed88d0"
  },
  {
    "url": "terms-of-service/index.png",
    "revision": "a35c46eb584eb607e86d28597f253c01"
  },
  {
    "url": "testimonials/index.html",
    "revision": "12fcab4a197cac19cca004a6691f2ee1"
  },
  {
    "url": "testimonials/index.png",
    "revision": "ef7d9944280f9211a834a648eb9520d8"
  },
  {
    "url": "tutorials/index.html",
    "revision": "03ca32710370f4fda8facb777113bdfe"
  },
  {
    "url": "tutorials/index.png",
    "revision": "c09bb690b80df544289bb9846f3bfbe6"
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
    "revision": "835ff58eb1e33f3608bca9ae9df59297"
  },
  {
    "url": "updates/index.png",
    "revision": "170a4a81eaec65a057f77d3d96b37e42"
  },
  {
    "url": "updates/robin/index.html",
    "revision": "7bd41daf21515dbb40c986d2a0113f27"
  },
  {
    "url": "usecases/index.html",
    "revision": "e794fdd9eeca45defda3eab9be99cfd9"
  },
  {
    "url": "usecases/index.png",
    "revision": "4ae3dda15c6c55c9b97172af60e71f3f"
  },
  {
    "url": "welcome/index.html",
    "revision": "cfd70dc7560dcc1e69b3f333a2d310a8"
  },
  {
    "url": "welcome/index.png",
    "revision": "ef1beeb2b0b09b93b6e08f13ae830fbe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
