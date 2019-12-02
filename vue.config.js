const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/product' : '/',
  css: {       
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportUnit: 'vw', 
            fontViewportUnit: 'vw', 
            viewportWidth: 375,
            selectorBlackList: ['.ignore', '.hairlines'],
            unitToConvert: 'px'
          })
        ]
      }
    }
  }
};