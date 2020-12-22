const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          green: '#4F77AA'
        }
      }
    }
  },
  configureWebpack: config => {
    return {
      plugins: [
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        })
      ],
      externals: {
        'AMap': 'AMap',
        'AMapUI': 'AMapUI',
        'vue': 'Vue',
        'echarts': 'echarts'
      },
      // alias: {
      //   'assets':resolve('src/assets'),
      //   'components':resolve('src/components')
      // }
    }
  },
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('assets',resolve('/src/assets'))
        .set('components',resolve('/src/components'))
        // .set('layout',resolve('src/layout'))
        // .set('base',resolve('src/base'))
        // .set('static',resolve('src/static'))
  }
}
