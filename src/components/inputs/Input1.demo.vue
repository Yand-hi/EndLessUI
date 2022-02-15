<demo>
常规用法
</demo>

<template>
  <Input v-model="input" placeholder="请输入"/>
</template>

<script lang="ts">
import {Input} from "../../lib";

export default {
  components: {
    Input,
  },
  setup() {
    const input = ''
    return {
      input
    }
  },
};
</script>