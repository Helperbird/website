const shimmer = require("shimmer");

module.exports = async function () {
  const { EleventyRenderPlugin, EleventyI18nPlugin, EleventyHtmlBasePlugin } =
    await import("@11ty/eleventy");

  configFunction: (cfg, options = {}) => {
    process.on("unhandledRejection", (reason) => {
      console.log("Reason: " + reason);
    });
    function postBuild() {
      shimmer.wrap(Eleventy.prototype, "logFinished", function (orig) {
        return function () {
          const swBuild = require("./src/builder");
          swBuild(options, cfg.dir.output).then((res) => console.log(res));
          return orig.apply(this);
        };
      });
    }
    setImmediate(postBuild);
  };
};
