<demo>
遮罩层关闭可选
</demo>
<template>
  <div>
    <Button @click="toggle" theme="text" level="main">打开对话框</Button>
    <Dialog
        v-model:visible="x"
        :on-click-overlay="false"
        :ok="f1"
        :cancel="f2">
      <template v-slot:content>
        点击遮罩层无法关闭，可通过设置属性选择开启
      </template>
      <template v-slot:title>
        标题
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {Button, Dialog} from "../lib/index";
import {ref} from "vue";

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
    };
    return {
      x,
      toggle,
      f1,
      f2,
    };
  },
};
</script>