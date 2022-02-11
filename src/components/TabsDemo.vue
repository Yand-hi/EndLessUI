<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
  <Demo :component="Tabs2Demo" />
  <TabsAttrs/>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
import Tabs2Demo from "./Tabs2.demo.vue";
import Attributes from './SwitchAttrs.vue'
import TabsAttrs from './TabsAttrs.vue'
export default {
  components: {
    TabsAttrs,
    Attributes,
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
      Tabs2Demo,
    };
  },
};
</script>
