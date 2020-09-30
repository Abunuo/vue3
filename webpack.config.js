const webpack = require('webpack');
const path = require('path');

// vue3 中 vue-loader 新用法
const { VueLoaderPlugin } = require('vue-loader')
const vendor = require('./vendor.js');

// 读取当前环境下的全局变量
const NODE_ENV = process.env.NODE_ENV;
// const configFilePath = `./.env.${NODE_ENV ? NODE_ENV : 'development'}`;
// const configFile = require(configFilePath);
const webpackConfigPath = `./webpack/webpack.${NODE_ENV ? NODE_ENV : 'development'}.config.js`;
const customWebpackConfig = require(webpackConfigPath);

function resolvePath(filePath) {
  return path.resolve(process.cwd(), filePath)
}

const defaultWebpackConfig = {
  entry: {
    index: resolvePath('src/app.js'),
    vendor: vendor
  },
  output: {
    path: resolvePath('dist'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: 'chunk/[name].js'
  },
  resolve: {
    alias: {
      '@': resolvePath('src')
    }
  },
  module: {
    rules: [{
      // 加载 js 文件
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      // 加载 css 结尾的样式文件
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }, {
      // 加载 vue 文件
      test: /\.vue$/,
      exclude: /node_modules/,
      use: 'vue-loader'
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
     new VueLoaderPlugin(),  //  新版 vue-loader必须使用
  ]
}

function mergeConfig(config1, config2) {
  let config = Object.assign({}, config1, config2);
  let toString = Object.prototype.toString;
  
  for(let key in config1) {
    if(config1.hasOwnProperty(key) && config2.hasOwnProperty(key)) {
      if(toString.call(config1[key]) !== toString.call(config2[key])) {
        config[key] = config2[key];
      }
      if(toString.call(config1[key]) == '[object Array]') {
        config[key] = config1[key].concat(config2[key])
      }
      if(toString.call(config1[key]) == '[object object]') {
        config[key] = Object.assign({}, config1[key], config2[key])
      }
    }
  }
  return config;
}

// 合并 webpack 配置
module.exports = mergeConfig(defaultWebpackConfig, customWebpackConfig);


