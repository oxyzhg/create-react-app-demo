# Create React App Pattern 

基于 create-react-app 构建应用的模板，不用每次用起来花半小时配置，也不用到处查别人的资料了，审视方便~

- `react` v16.4
- `react-router` v4
- `redux` v4
- `antd` v3.8.2
- `axios`

## 使用方式

将代码下载到本地

```bash
$ git clone https://github.com/oxyzhg/create-react-app-pattern.git
```

进入项目目录

```bash
$ cd create-react-app-pattern
```

全局安装 yarn 包管理工具（有则跳过）

```bash
$ npm install -g yarn
```

安装项目依赖

```bash
# 使用npm
$ npm i

# 或使用yarn
$ yarn
```

开启本地服务

```bash
$ yarn start
```

*可在项目中按需求修改内容*

修改完成后，打包应用

```bash
# 使用npm
$ npm build

# 或使用yarn
$ yarn build
```

打包生成的 *build* 文件夹上即静态文件了~

## 修改日志

2018-08-18

- `A` 使用 create-react-app 新建了项目

2018-08-19

- `U` 生成配置文件
- `U` 创建项目目录
- `U` 修改配置文件, 使用 *@* 符号代替 *src* 路径
- `U` 增加 redux
- `U` 增加 react-router
- `U` 增加 sass-loader, node-sass 对 scss 的支持
- `U` 引入 antd
- `U` 完善基本布局
- `A` 增加 Home, Login, 404 页面
- `U` 更新了登录功能
