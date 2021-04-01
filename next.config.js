//importing image
const withImages = require("next-images");
module.exports = withImages({});

//gsap
// next.config.js
const withTM = require("next-transpile-modules")(["gsap"]);
module.exports = withTM();
