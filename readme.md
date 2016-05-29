WebBangumiAPI
======================================

这个项目用于把Bangumi的网页版封装成JavaScript可直接调用的API，使用TypeScript编写。

目标：在React Native / Web Browser(with Webpack / browserify) / Node均可直接调用。

目前版本尚未开放外部调用，只能在程序的index.ts里编写测试代码。

## 已实现API
- 登录
- 获取正在观看列表
- 设置观看进度
- 时间线（返回HTML）


## 开发
### 配置环境
```bash
npm install gulp typings -g
npm install
typings install
```
### 实时编译 & 调试
```bash
gulp watch
```
### 编译
```bash
gulp build
```
### 注意事项
- 不可依赖``request``等依赖于Node built-in module的库，也不可依赖``jQuery``等依赖于DOM的库。
- 开发能使用的API以[React Native](https://facebook.github.io/react-native/)可使用的API为准（例如网络访问只能使用``fetch``，在Node上用``node-fetch``作为devDep）


## 测试
不提供测试（用户名密码一改测试就懵逼了）

## 开源协议
The MIT License