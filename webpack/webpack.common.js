/*
  common config
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader') // vue3 中 vue-loader 新用法

const { resolvePath } = require('./utils')

// 共用打包的 js
const vendor = require(resolvePath('vendor.js'));

module.exports = {
  entry: {
    index: resolvePath('src/app.js'),
    vendor: vendor
  },
  output: {
    path: resolvePath('dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@': resolvePath('src')
    }
  },
  module: {
    rules: [{
      // 加载 vue 文件
      test: /\.vue$/,
      exclude: /node_modules/,
      use: 'vue-loader'
    }, {
      // 加载 js 文件
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      // 加载 css 结尾的样式文件及处理 vue模板中的 lang=css 的style
      // 加载 scss/sass 结尾的样式文件及处理 vue模板中的 lang=scss/sass 的style
      test: /\.((c|sa|sc)ss)$/i,
      use: [
        process.env.NODE_ENV == 'production' ? ExtractCssChunks.loader : 'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: resolvePath('src/assets/styles/variable.scss')
          },
        }
      ]
    }, {
      // 加载处理图片
      test: /\.(png|jpg|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/images/',
          publicPath: '',
          limit: 1000
        }
      }]
    }, {
      // 加载字体等
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin(), //  新版 vue-loader必须使用
    new HtmlWebpackPlugin({ // 开发是自动添加响应 js，打包的时候讲 public 目录下面 index.html 迁移到 dist 下面
      title: 'Vue3.0',
      meta: {
        'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, shrink-to-fit=no',
      },
      template: resolvePath('public/index.html'),
      favicon: resolvePath('public/favicon.ico')
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "vendor",
          chunks: "all",
          minChunks: 2
        }
      }
    }
  }
}