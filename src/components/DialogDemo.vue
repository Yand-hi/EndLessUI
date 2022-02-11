<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo"/>
  <Demo :component="Dialog2Demo"/>
  <DialogAttrs/>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
import Attributes from './SwitchAttrs.vue'
import DialogAttrs from './DialogAttrs.vue'

export default {
  components: {
    DialogAttrs,
    Demo,
    Attributes
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>