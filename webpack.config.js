const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 4200
  },

  entry: ['babel-polyfill', path.resolve(__dirname, "src/index.tsx")],

  resolve: {
    alias: {
      "@packages": path.resolve(__dirname, './src/packages'),
      "@constants": path.resolve(__dirname, './src/constants')
    },
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'build.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
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