WebBangumiAPI
======================================

这个项目用于把Bangumi的网页版封装成JavaScript可直接调用的API，使用TypeScript编写。

目标：在React Native / Web Browser(with Webpack / browserify) / Node均可直接调用。

目前版本尚未开放外部调用，只能在程序的index.ts里编写测试代码。

## API
- [ ] 首页
  - [x] 登录 ``api/Login``
  - [x] 正在观看列表 ``api/WatchingList``
  - [x] 时间线（返回HTML） ``api/Timeline``
- [ ] 动画
  - [ ] 动画列表
     - [ ] 排行榜
     - [ ] 每日放送
     - [ ] 动画标签
     - [ ] 分类浏览
     - [ ] 动画日志
  - [ ] 动画信息
     - [ ] 首页信息
     - [ ] 角色信息
     - [ ] 制作人员
  - [ ] 动画吐槽
  - [ ] 动画讨论
  - [ ] 单集
     - [x] 设置单集进度 ``api/Anime/Watched``
     - [ ] 单集评论
  - [ ] 设置整部动画观看进度
- [ ] 个人信息
     - [ ] TO BE CONTINUED...
- [ ] 书籍
     - [ ] TO BE CONTINUED...
- [ ] 音乐
     - [ ] TO BE CONTINUED...
- [ ] 游戏
     - [ ] TO BE CONTINUED...
- [ ] 小组
  - [ ] 随便看看
  - [ ] 小组列表
  - [ ] 话题 / 回复
      - [ ] 新建
      - [ ] 编辑
      - [ ] 删除
  - [ ] 小组API
      - [ ] 加入小组
      - [ ] 创建小组
      - [ ] 退出小组
      - [ ] 设置小组
- [ ] 搜索
- [ ] TO BE CONTINUED...
      

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