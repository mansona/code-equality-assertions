const path = require('path');

module.exports = {
  entry: {
    'example-test': './example-test.ts',
    'browser-setup': './browser-setup.ts'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: '.',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};