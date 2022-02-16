<template>
  <div>
    <h1>Skeleton 骨架图</h1>
    <Demo :component="Skeleton1Demo"/>
    <SkeletonAttrs/>
  </div>
</template>

<script lang="ts">
import Skeleton1Demo from "./Skeleton1.demo.vue"
import SkeletonAttrs from './SkeletonAttrs.vue'
import Demo from "../Demo.vue";

export default {
  components: {
    SkeletonAttrs,
    Demo,
  },
  setup() {
    return {
      Skeleton1Demo,
    };
  },
};
</script>