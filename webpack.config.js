const path = require("path"); //import path from "path"
// const webpack = require("webpack");

module.exports = ({ mode }) => ({
  mode,
  entry: [
    // "react-hot-loader/patch",
    // "webpack-dev-server/client?http://localhost:3000",
    // "webpack/hot/only-dev-server",
    "./src/index.js"],
    devtool: "cheap-eval-source-map",
  output: { 
    path: path.join(__dirname, "dist"), 
          filename: "app.js" },
  // devServer: {
  //   hot: true
  // },
  // plugins: {
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NamedModulesPlugin()
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        use: [
          "file-loader"
        ]
        
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  }
});
