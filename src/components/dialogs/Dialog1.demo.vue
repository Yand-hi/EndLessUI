<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle" theme="text" level="main">打开对话框</Button>
    <Dialog
        v-model:visible="x"
        :ok="f1"
        :cancel="f2">
      <template v-slot:content>
        <p>文本内容和标题支持 HTML 标签</p>
      </template>
      <template v-slot:title>
        <strong>标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {Button, Dialog} from "../../lib";
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