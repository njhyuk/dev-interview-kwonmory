const path = require('path');
const apiMocker = require('connect-api-mocker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => ({
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash]',
              publicPath: './dist/',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: './favicon.ico', to: './' },
        { from: './data/interviews.json', to: './data' },
        { from: './assets/preview.png', to: './public' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': argv.mode === 'production' ? JSON.stringify('production') : JSON.stringify('development'),
      'process.env.PUBLIC_PATH': JSON.stringify('/'),
      'process.env.API_PATH': argv.mode === 'production' ? JSON.stringify('https://dev-interview.com/data') : false,
    }),
  ],
  devServer: {
    before: (app) => {
      app.use(apiMocker('/api', '/mocks/api'));
    },
    historyApiFallback: true,
  },
});
