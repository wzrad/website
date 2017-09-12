const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('webpack-html-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.js'
  ],
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'dst')
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin([
      'dst'
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html.ejs',
      filename: 'index.html',
      title: 'hello.',
      inject: 'body'
    })
  ]
}
