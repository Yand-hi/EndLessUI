<demo>
disabled 禁用
</demo>

<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import { Switch } from "../../lib";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(true);
    return {
      bool,
    };
  },
};
</script>