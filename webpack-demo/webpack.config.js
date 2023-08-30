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
      release: 'V3.0.0',
      // 指定上传的配置信息。如果当前项目目录存在tingyun-cli配置文件.tingyunclirc 或 .tingyunclirc.toml可以不写
      beacon: "http://10.128.2.95:8080",
      appToken: "745e2dc4adb342ab8db7c8f8916d0c3d",
      token: "4c1b372361befe35b6580060c6fb6c53861fde6c558ef92d424225cfc14b2820378fafaec714fd61328728c71f5a5cb9ee1ff69ac16627cc41f0cb35755edcb6",
      productType: "web" //web或mp
    }),
    // ...
    // 其他插件
  ]
};
