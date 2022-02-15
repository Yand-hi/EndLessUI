<demo>
Show password
</demo>

<template>
  <Input type="password" v-model:value="text" placeholder="Password"/>
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