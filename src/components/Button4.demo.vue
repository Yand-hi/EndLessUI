<demo>
支持 disabled
</demo>
<template>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>