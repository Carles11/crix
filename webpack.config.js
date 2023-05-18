const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ mode }) => ({
  mode,
  entry: [
    './src/index.jsx',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './src/assets/logos/favicon.ico',
    }),
    new webpack.ProgressPlugin(),
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
      {
        test: /\.pdf$/,
        use: ['file-loader'],
      },
      {
        test: /\.node$/,
        use: ['node-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
})
