<demo>
基础用法
</demo>
<template>
  <div>
    <Button>抽烟</Button>
    <Button theme="link">喝酒</Button>
    <Button theme="text">烫头</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>