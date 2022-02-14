<demo>
disabled 禁用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">Vue</Tab>
    <Tab title="导航2">React</Tab>
    <Tab title="导航3" disabled>这个看不见</Tab>
  </Tabs>
</template>

<script lang="ts">
import { Tabs, Tab } from "../../lib";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("导航2");
    return {
      x,
    };
  },
};
</script>