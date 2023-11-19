const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pwa: {
    iconPaths: {
      favicon32: 'src\assets\favicon-32x32.png',
      favicon16: 'src\assets\favicon-32x32.png',
      appleTouchIcon: 'src\assets\favicon-32x32.png',
      maskIcon: 'src\assets\favicon-32x32.png',
      msTileImage: 'src\assets\favicon-32x32.png'
    }
  }
};
