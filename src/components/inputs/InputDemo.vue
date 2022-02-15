<template>
  <div>
    <h1>Input 输入框</h1>
    <Demo :component="Input1Demo"/>
    <InputAttrs/>
  </div>
</template>

<script lang="ts">
import Input1Demo from "./Input1.demo.vue";
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
    };
  },
};
</script>