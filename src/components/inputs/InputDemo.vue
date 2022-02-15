<template>
  <div>
    <h1>Input 输入框</h1>
    <Demo :component="Input1Demo"/>
    <Demo :component="Input2Demo"/>
    <Demo :component="Input3Demo"/>
    <Demo :component="Input4Demo"/>
    <InputAttrs/>
  </div>
</template>

<script lang="ts">
import Input1Demo from "./Input1.demo.vue"
import Input2Demo from "./Input2.demo.vue"
import Input3Demo from "./Input3.demo.vue"
import Input4Demo from "./Input4.demo.vue"
import InputAttrs from './InputAttrs.vue'
import Demo from "../Demo.vue";

export default {
  components: {
    InputAttrs,
    Demo,
  },
  setup() {
    return {
      Input1Demo,
      Input2Demo,
      Input3Demo,
      Input4Demo
    };
  },
};
</script>