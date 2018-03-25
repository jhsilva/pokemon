const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000
  },
  entry: {
    app: './src/index.js',
    commons: Object.keys(pkg.dependencies),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: './[name].js',
    filename: './[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          enforce: true,
        },
      },
    },
    runtimeChunk: {
      name: 'commons',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
