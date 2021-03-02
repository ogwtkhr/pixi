const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    contentBase: outputPath,
    hot: true,
  },
  plugins: [new HotModuleReplacementPlugin()],
};
