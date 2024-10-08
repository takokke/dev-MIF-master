const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    'fb-update': './src/ts/fb-update.ts'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/}],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // すべてのチャンクを分割
    },
  },
  mode: 'development',
};