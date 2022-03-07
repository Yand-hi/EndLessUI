# 开始使用
请先确保已成功 [安装](#/doc/install) 本组件库。

然后在按需引入相应的组件

```
import {Tabs, Tab} from "endless-ui"
```

就可以开始使用我提供的组件了。

## 代码示例

```
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