const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 4200
  },

  entry: ['babel-polyfill', path.resolve(__dirname, "src/index.js")],

  resolve: {
    alias: {
      "packages": path.resolve(__dirname, './src/packages/'),
    },
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'build.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Personal Playground',
      template: 'static/index.html'
    })
  ],

}