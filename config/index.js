const path = require('path');

module.exports = {
  dev: {
    host: 'localhost',
    port: 8080,
    proxyTable: {},
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    devtool: 'cheap-module-eval-source-map',
    poll: false,
    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    bundleAnalyzerReport: false,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: '#source-map'
  }
};
