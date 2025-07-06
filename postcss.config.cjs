module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 1920, // 设计稿宽度
      unitPrecision: 5, // 转换精度
      viewportUnit: 'vw', // 转换单位
      selectorBlackList: ['.ignore', '.hairlines'], // 忽略类名
      minPixelValue: 1, // 最小转换值
      mediaQuery: false // 是否转换媒体查询
    },
    'postcss-viewport-units': {
      filterRule: rule => rule.nodes.find(i => i.prop === 'content')
    }
  }
}