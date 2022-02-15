<demo>
disabled 禁用
</demo>

<template>
  <Input v-model:value="text" placeholder="禁止输入状态" disabled/>
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