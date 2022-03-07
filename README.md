<p align="center">
  <img alt="logo" src="./src/assets/logo.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center">EndLess UI 组件库</h3>

<p align="center">
 ✨ <a href="https://yand-hi.github.io/endless-ui/index.html">官方文档</a>
</p>

---

### 介绍
EndLess UI 是一款基于 `Vue 3` 和 `TypeScript` 开发的 UI 组件库，代码简单易读

主要供自己学习和练习使用，强烈不建议将此 UI 库用于生产环境

目前只有几个组件，后续会持续更新🥳

### 安装

```bash
# 通过 npm 安装
npm i endless-ui

# 通过 yarn 安装
yarn add endless-ui
```

## 使用组件

按需引入
```js
import {Tabs, Tab} from "endless-ui"
```

接着就可以在项目中直接使用组件

```html
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">HTML</Tab>
    <Tab title="导航2">CSS</Tab>
    <Tab title="导航3">Javascript</Tab>
  </Tabs>
</template>
<script>
import {Tabs, Tab} from "endless-ui"
export default {
  components: {
    Tabs, 
    Tab
  }
}
</script>
```

## 运行方法

```bash
# 安装项目依赖
yarn

# 执行组件编译
yarn dev
```

打开 http://127.0.0.1:3000

## License

[MIT](https://opensource.org/licenses/MIT)
