<template>
  <h1>Dialog 对话框</h1>
  <Demo :component="Dialog1Demo"/>
  <Demo :component="Dialog3Demo"/>
  <Demo :component="Dialog4Demo"/>
  <Demo :component="Dialog2Demo"/>
  <DialogAttrs/>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
import Dialog3Demo from "./Dialog3.demo.vue";
import Dialog4Demo from "./Dialog4.demo.vue";
import DialogAttrs from './DialogAttrs.vue'

export default {
  components: {
    DialogAttrs,
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
      Dialog3Demo,
      Dialog4Demo
    };
  },
};
</script>