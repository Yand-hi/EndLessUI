<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog" theme="text" level="main">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import {Button, openDialog} from "../../lib";
import {h} from "vue";

export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("p", {}, "函数创建"),
        content: "绑定点击事件调用外部函数，通过渲染函数渲染 Dialog 组件并挂载",
        ok() {
        },
        cancel() {
        },
      });
    };
    return {
      showDialog,
    };
  },
};
</script>