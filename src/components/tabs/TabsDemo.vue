<template>
  <h1>Tabs 标签页</h1>
  <Demo :component="Tabs1Demo"/>
  <Demo :component="Tabs2Demo"/>
  <Demo :component="Tabs3Demo"/>
  <TabsAttrs/>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
import Tabs2Demo from "./Tabs2.demo.vue";
import Tabs3Demo from "./Tabs3.demo.vue";
import TabsAttrs from './TabsAttrs.vue'

export default {
  components: {
    TabsAttrs,
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
      Tabs2Demo,
      Tabs3Demo
    };
  },
};
</script>
