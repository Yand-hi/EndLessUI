<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog" theme="text" level="main">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import {Button, openDialog} from "../lib/index";
import {h} from "vue";

export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("p", {}, "标题"),
        content: "你好",
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