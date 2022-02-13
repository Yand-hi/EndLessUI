<demo>
带有文本提示
</demo>

<template>
  <Switch
      v-model:value="bool"
      checked-text="on"
      unchecked-text="off"
  />
</template>

<script lang="ts">
import {Switch} from "../lib/index";
import {ref} from "vue";

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