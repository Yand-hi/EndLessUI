<template>
  <div>
    <h1>Switch 开关</h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
    <Demo :component="Switch3Demo"/>
    <Demo :component="Switch4Demo"/>
    <Demo :component="Switch5Demo"/>
    <SwitchAttrs/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Switch3Demo from "./Switch3.demo.vue";
import Switch4Demo from "./Switch4.demo.vue";
import Switch5Demo from "./Switch5.demo.vue";
import SwitchAttrs from './SwitchAttrs.vue'
import Demo from "../Demo.vue";

export default {
  components: {
    SwitchAttrs,
    Demo,
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
      Switch3Demo,
      Switch4Demo,
      Switch5Demo
    };
  },
};
</script>