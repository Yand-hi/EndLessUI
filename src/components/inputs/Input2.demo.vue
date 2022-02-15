<demo>
type 类型
</demo>

<template>
  <Input type="date" v-model:value="text"/>
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