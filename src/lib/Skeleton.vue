<template>
  <div>
    <div class="skeleton">
      <div class="skeleton-items"
           :class="{'animate':animate}"
           v-for="n in rows"
           :key="n"/>
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
    animate: {
      type: Boolean,
      default: false
    }
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

  .animate {
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%) 100% 50%;
    background-size: 400% 100%;
    animation: skeleton-loading 1.4s ease infinite;
  }

  @keyframes skeleton-loading {
    0% {
      background-position: 100% 50%
    }
    to {
      background-position: 0 50%
    }
  }
}
</style>