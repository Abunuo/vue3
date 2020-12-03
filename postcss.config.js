module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 75, // 设计稿 750 ，根元素 10vw 相当于 75px
      propList: ['*']
    }
  }
}
