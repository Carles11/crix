const path = require("path"); //import path from "path"

module.exports = ({ mode }) => ({
  mode,
  entry: ["./src/index.js"],
  output: { path: path.join(__dirname, "dist"), filename: "app.js" },
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
    extensions: [".js", ".jsx"]
  }
});
