const path = require('path') //import path from "path"
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ mode }) => ({
  mode,
  entry: [
    './src/index.jsx',
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
  ],
  devtool: mode === 'production' ? false : 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    publicPath: '/public',
    hot: true,
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './src/assets/logos/favicon.ico',
    }),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.REACT_APP_EMAIL_USER_ID': JSON.stringify(
    //     process.env.REACT_APP_EMAIL_USER_ID,
    //   ),
    //   'process.env.REACT_APP_EMAIL_TEMPLATE_ID': JSON.stringify(
    //     process.env.REACT_APP_EMAIL_TEMPLATE_ID,
    //   ),
    //   'process.env.REACT_APP_EMAIL_SERVICE_ID': JSON.stringify(
    //     process.env.REACT_APP_EMAIL_SERVICE_ID,
    //   ),
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|jpeg)$/,

        use: ['file-loader'],
      },

      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
    // loaders: [
    //   {
    //     test: /\.svg$/,
    //     loader: 'svg-inline-loader',
    //   },
    // ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
})
