<demo>
rows 自定义行数
</demo>

<template>
  <Skeleton :rows="6"/>
</template>

<script lang="ts">
import Skeleton from '../../lib/Skeleton.vue'

export default {
  components: {Skeleton},
};
</script>