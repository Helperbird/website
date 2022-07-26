const shimmer = require("shimmer");
const Eleventy = require("@11ty/eleventy/src/Eleventy");

module.exports = {
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
  }
};
