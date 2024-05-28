const path = require('path');
// 导入sourcemap插件
const TingyunSourceMapWebpackPlugin = require('@tingyun-common/source-map-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  //生成sourcemap文件
  devtool: 'source-map',
  plugins: [
    new TingyunSourceMapWebpackPlugin({
      // 指定打包生成的文件目录, 根据实际情况填写, 例如: './dist'
      include: './dist',
      // 设置上传sourcemap的版本号, 如果不设置, 插件会自动生成, 例如; V1.0.0
      release: '1.0.0',
      // 指定上传的配置信息。如果当前项目目录存在tingyun-cli配置文件.tingyunclirc 或 .tingyunclirc.toml可以不写
      beacon: "http://10.128.2.95:8080",
      appToken: "ec319e17577d4159a40292158522ff01",
      token: "309bc5d78716468c0f749a85801e9c0c0376fb3c84014bbd6ae6a07c8e6f7005cd7007e86326c359125db567125599f814ab3c4c9d943c7e86113cf51f942657",
      productType: "web" //web或mp
    }),
    // ...
    // 其他插件
  ]
};
