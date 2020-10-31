const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  client: (isProd) => ({
    mode: isProd ? 'production' : 'development',
    entry: './src/index.tsx',
    target: 'web',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist/public'),
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          use: ['babel-loader'],
          test: /\.tsx?$/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: 'src/index.html',
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
  }),

  server: (isProd) => ({
    mode: isProd ? 'production' : 'development',
    entry: './src/server.js',
    target: 'node',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          use: ['babel-loader'],
          test: /\.js$/,
        },
      ],
    },
    externals: [nodeExternals()],
  }),
};
