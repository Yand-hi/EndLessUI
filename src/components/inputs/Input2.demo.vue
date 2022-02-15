<demo>
type 类型
</demo>

<template>
  <Input type="date" v-model="input" placeholder="请输入"/>
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