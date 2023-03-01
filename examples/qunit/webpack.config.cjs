const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    'example-test': './example-test.ts',
    'browser-setup': './browser-setup.ts'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: { fs: false, assert: false, path: require.resolve('./browser-shims') },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '({})',
      'process.platform': '"browser"'
    }),
    new webpack.ProvidePlugin({
      'Buffer': require.resolve('./browser-shims')
    }),
  ],
  devServer: {
    static: '.',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};