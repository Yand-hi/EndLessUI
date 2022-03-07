<template>
  <div>
    <h1>Bread 面包屑</h1>
    <Demo :component="Bread1Demo"/>
    <BreadAttrs/>
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import BreadAttrs from "./BreadAttrs.vue"
import Bread1Demo from "./Bread1.demo.vue";

export default {
  components: {
    Demo,
    BreadAttrs
  },
  setup() {
    return {
      Bread1Demo,
    };
  },
};
</script>