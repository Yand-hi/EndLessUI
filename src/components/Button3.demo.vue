<demo>
支持 level
</demo>
<template>
  <div>
    <div>
      <Button level="main">Primary</Button>
      <Button>Default</Button>
      <Button level="danger">Danger</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接</Button>
      <Button theme="link">普通链接</Button>
      <Button theme="link" level="danger">危险链接</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
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