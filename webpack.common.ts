import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackTagsPlugin from 'html-webpack-tags-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV === 'test' ? '' : '/',
    filename: 'bundle.js',
  },
  plugins: [
    new CopyPlugin({
      patterns:
      [{ from: 'styles/**/*.css', to: 'css', flatten: true }],
    }),
    new HtmlWebpackPlugin(
      process.env.NODE_ENV === 'test' ? {
        base: `file://${__dirname}/dist/`,
        template: 'src/index.ejs',
      } : { template: 'src/index.ejs' },
    ),
    new HtmlWebpackTagsPlugin({ tags: ['custom.css'], append: true, publicPath: '/css' }),
  ],
};

export default config;
