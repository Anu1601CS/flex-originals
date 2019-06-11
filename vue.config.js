const path = require('path')
module.exports = {
  outputDir: path.resolve(__dirname, './client/'),
  pwa: {
    name: 'Media Manager',
    themeColor: '#9013FE',
    msTileColor: '#50E3C2'
  },
  devServer: {
    proxy: "http://localhost:3000"
  },
  pluginOptions: {
    electronBuilder: {
      outputDir: 'build'
    }
  }
};
