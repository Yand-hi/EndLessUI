<demo>
确定按钮关闭可选
</demo>
<template>
  <div>
    <Button @click="toggle" theme="text" level="main">打开对话框</Button>
    <Dialog
        v-model:visible="x"
        :ok="f1"
        :cancel="f2"
    >
      <template v-slot:content>
        点击确认无法关闭，可通过设置属性选择开启
      </template>
      <template v-slot:title>
        标题
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
      // do something
      return false
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