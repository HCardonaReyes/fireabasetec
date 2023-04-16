const path = require("path");

module.exports = {
    mode: "development", // It can also be production
    entry: {
        main: path.resolve(__dirname, "src/index.js"),
      },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js", 
      },
    watch: true,
    experiments: {
        topLevelAwait: true
      },  
  };