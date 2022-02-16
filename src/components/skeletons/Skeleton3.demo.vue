<demo>
animate 添加动画
</demo>

<template>
  <Skeleton :rows="6" animate/>
</template>

<script lang="ts">
import Skeleton from '../../lib/Skeleton.vue'

export default {
  components: {Skeleton}
};
</script>