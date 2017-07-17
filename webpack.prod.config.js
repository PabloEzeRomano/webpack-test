/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: `${__dirname}/build`,
    publicPath: `${__dirname}/build/static`,
    filename: 'bundle.js',
  },
  module: {

    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'latest'],
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      }],
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=latest,presets[]=react', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]'],
      },
    ],
  },
  plugins: [
    extractSass,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      warnings: false,
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
