<demo>
一键清空
</demo>

<template>
  <Input v-model:value="text" placeholder="请输入内容" clearable/>
</template>

<script lang="ts">
import {ref} from 'vue'
import {Input} from "../../lib";

export default {
  components: {
    Input,
  },
  setup() {
    const text = ref('')
    return {text}
  },
};
</script>