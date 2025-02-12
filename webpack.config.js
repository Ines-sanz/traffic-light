const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;
//only for gitpod
if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `wss://${port}-${host}/ws`;
}
//only for codespaces
if (process.env.CODESPACE_NAME) {
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.app.github.dev/ws`;
}

const mode = process.env.NODE_ENV || 'development'; // default to development

module.exports = {
  mode, // Define el modo de Webpack (development o production)
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/, use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/, use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      },
      { test: /\.(woff|woff2|ttf|eot|svg)$/, use: ['file-loader'] },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: mode === 'development' ? 'source-map' : false,
  devServer: {
    port,
    hot: true,
    allowedHosts: "all",
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    client: {
      webSocketURL: publicUrl,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './favicon.ico',
      template: 'template.html',
    }),
  ],
  optimization: {
    minimize: mode === 'production', // Solo minimiza en producción
  },
};
