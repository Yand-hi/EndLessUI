# 开始使用
请先确保已成功 [安装](#/doc/install) 本组件库。

然后在按需引入相应的组件

```
import {Button, Tabs, Tab, Switch, Dialog, openDialog, Input} from "endless-ui"
```

就可以开始使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Tab, Switch, Dialog, openDialog, Input} from "endless-ui"
export default {
  components: {
    Button,
    Tabs, 
    Tab,
    Switch,
    Dialog,
    Input
  }
}
</script>
```