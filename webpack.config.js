const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const sourcePath = path.resolve(__dirname, 'src');
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
    alias: {
      '@': sourcePath,
    },
  },
  devServer: {
    contentBase: outputPath,
    hot: true,
  },
  plugins: [new HotModuleReplacementPlugin()],
};
