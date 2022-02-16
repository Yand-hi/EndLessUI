<template>
  <div>
    <div class="skeleton">
      <div class="skeleton-items" v-for="n in rows" :key="n"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    rows: {
      type: Number,
      default: 4
    },
  },

  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.skeleton {
  width: 100%;

  .skeleton-items {
    background: #f2f2f2;
    display: inline-block;
    border-radius: 4px;
    height: 16px;
    margin-top: 16px;
    width: 100%;

    &:first-child {
      width: 33%;
    }

    &:last-child {
      width: 61%;
    }
  }
}
</style>