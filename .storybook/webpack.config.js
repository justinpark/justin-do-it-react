const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
