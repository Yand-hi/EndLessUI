<demo>
卡片标签
</demo>
<template>
  <Tabs v-model:selected="x" type="card">
    <Tab title="导航1">Card 1</Tab>
    <Tab title="导航2">Card 2</Tab>
    <Tab title="导航3">Card 3</Tab>
    <Tab title="导航4" disabled>这个看不见</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs, Tab} from "../lib/index";
import {ref} from "vue";

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