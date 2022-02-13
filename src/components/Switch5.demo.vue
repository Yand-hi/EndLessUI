<demo>
定时加载
</demo>

<template>
  <Switch v-model:value="bool" v-model:loading="x" :time="3000"/>
</template>

<script lang="ts">
import {Switch} from "../lib/index";
import {ref} from "vue";

export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    const x = bool.value
    return {
      bool,
      x
    };
  },
};
</script>