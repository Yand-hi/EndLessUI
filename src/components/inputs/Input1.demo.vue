<demo>
基础用法
</demo>

<template>
  <Input v-model:value="text" placeholder="请输入..."/>
  <span>{{ text }}</span>
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

<style lang="scss" scoped>
span {
  color: #606266;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
}
</style>