## 特性

1. use create-react-app

2. preloaded page data

3. code splitting

4. server-sid cookie support

## 安装

1. 安装依赖

```bash
yarn install
```

2. 客户端运行

```bash
yarn start
```

3. SSR模式运行(服务器端运行)

先执行客户端打包再运行server

```bash
yarn build && yarn serve
```

## 注意点

1. `connected-react-router` 要使用 `4.5.0` 版本，5.0 版本暂时报错

## 参考文档

1. [cra-ssr](https://github.com/cereallarceny/cra-ssr)
2. [react-koa2-ssr](https://github.com/yangfan0095/react-koa2-ssr)
3. [react-ssr-boilerplate](https://github.com/justemit/react-ssr-boilerplate)