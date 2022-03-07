<demo>
基础用法
</demo>
<template>
  <div>
     <Bread separator="＞＞">
       <BreadItem to="/">Home</BreadItem>
       <BreadItem>Switch</BreadItem>
       <BreadItem>Button</BreadItem>
       <BreadItem>Dialog</BreadItem>
       <BreadItem>Tabs</BreadItem>
       <BreadItem>Input</BreadItem>
       <BreadItem>Skeleton</BreadItem>
       <BreadItem>Bread</BreadItem>
     </Bread>
  </div>
</template>

<script lang="ts">
import {Bread, BreadItem} from "../../lib";
export default {
  components: {
    Bread,
    BreadItem
  },
};
</script>