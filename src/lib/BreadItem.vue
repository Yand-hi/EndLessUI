<template>
  <div class="bread-item">
    <template v-if="!to">
      <slot></slot>
    </template>
    <template v-else>
      <router-link :to="to"> <slot></slot> </router-link>
    </template>
      <i v-if="separator">{{ separator }}</i>
      <i v-else>&gt;</i>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
  name: 'BreadItem',
  props: {
    to: {
      type: String
    }
  },
  setup () {
    const separator = inject('separator')
    return { separator }
  }
}
</script>

<style lang="scss" scoped>
.bread-item {
  color: #ccc;
  i {
    margin: 0 6px;
    font-size: 10px;
  }
  &:nth-last-of-type(1) {
    i {
      display: none;
    }
  }
}
</style>