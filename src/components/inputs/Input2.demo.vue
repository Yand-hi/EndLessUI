<demo>
type 类型
</demo>

<template>
  <Input type="date" v-model:value="text" placeholder="请选择日期"/>
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