/**
 * webpack配置入口文件
 */
import * as webpack from 'webpack'
import * as path from 'path'
import { BUILD_PATH, __DEV__, devServer, entry, alias, rules, plugins } from './configs'

//设置开发时源代码映射
const devtool: webpack.Options.Devtool = __DEV__ ? 'cheap-module-source-map' : 'source-map'
const jsPrefixPath = 'js'
// const webpackConfig: webpack.Configuration = {
const webpackConfig = {
  devtool,
  devServer,
  entry: entry.apps,
  output: { // 输出的目录和文件名
    path: BUILD_PATH,
    filename: !__DEV__ ? `${jsPrefixPath}/[name].min.js` : `${jsPrefixPath}/[name].js`,
    chunkFilename: `${jsPrefixPath}/[name].chunk.js`,
    sourceMapFilename: 'maps/[file].map'
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    enforceExtension: false,
    extensions: ['.ts', '.js', '.json', '.styl', '.less'], // require的时候可以直接使用require('file')，不用require('file.js')
    alias
  },
  module: {
    //noParse 配置用来配置哪些脚本不需要webpack转译
    // noParse: /node_modules\/(react)/,
    rules // 定义各种loader
  },
  plugins
}

export default webpackConfig
