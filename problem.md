## 项目中遇到的问题
1. 只安装webpack-dev-server 项目 run 不起来
```
Please install 'webpack-cli' in addition to webpack itself to use the CLI
-> When using npm: npm i -D webpack-cli
-> When using yarn: yarn add -D webpack-cli
```
原因：安装依赖时webpack 默认为4.x 版本，配置有改变，需要安装webpack-cli
[本地安装](https://webpack.docschina.org/guides/installation/#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85)



[webpack4.0.1安装问题和webpack.config.js的配置变化](https://blog.csdn.net/jiang7701037/article/details/79403637)
