<demo>
点击后加载中
</demo>

<template>
  <Switch v-model:value="bool" :loading="bool"/>
</template>

<script lang="ts">
import {Switch} from "../lib/index";
import {ref} from "vue";

export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>