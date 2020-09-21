const CompressPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: './',
  configureWebpack: {
    plugins: [
      new CompressPlugin({
        test: /\.js$|\.html$|\.css/,
        threshold: 10240
      })
    ]
  }
}