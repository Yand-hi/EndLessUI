<demo>
Loading 加载中
</demo>
<template>
  <div>
    <Button loading>Loading</Button>
    <Button loading disabled>Disabled</Button>
    <Button loading level="warning">Warning</Button>
    <Button loading level="danger">Danger</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../../lib";
export default {
  components: {
    Button,
  },
};
</script>