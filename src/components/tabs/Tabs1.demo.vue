<demo>
基础用法
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">HTML</Tab>
    <Tab title="导航2">CSS</Tab>
    <Tab title="导航3">Javascript</Tab>
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
    const x = ref("导航1");
    return {
      x,
    };
  },
};
</script>