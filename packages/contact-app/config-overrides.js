const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  addBabelPlugin
} = require("customize-cra");

/*module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log("do stuff with the webpack config...");
  return config;
};*/

// Adding to the plugin array...it gets called first
module.exports = override(addBabelPlugin("babel-plugin-styled-components"));
