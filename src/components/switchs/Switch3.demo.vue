<demo>
loading 加载中
</demo>

<template>
  <Switch v-model:value="bool" loading />
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