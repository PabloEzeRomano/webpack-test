module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=latest,presets[]=react', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        loaders: ['file-loader?name=[name].[ext]'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 8181,
  },
};
