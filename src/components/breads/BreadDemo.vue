<template>
  <div>
    <h1>Bread 面包屑</h1>
    <Demo :component="Bread1Demo"/>
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Bread1Demo from "./Bread1.demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Bread1Demo,
    };
  },
};
</script>