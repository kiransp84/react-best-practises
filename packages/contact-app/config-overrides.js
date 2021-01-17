const {
  override,
  overrideDevServer,  
  addBabelPlugin
} = require("customize-cra");

/*module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log("do stuff with the webpack config...");
  return config;
};*/

// Adding to the plugin array...it gets called first
//module.exports = override(addBabelPlugin("babel-plugin-styled-components"));

module.exports = {
  webpack: override(addBabelPlugin("babel-plugin-styled-components")),
  devServer: overrideDevServer(

    )
};

