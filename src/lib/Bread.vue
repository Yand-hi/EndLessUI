<template>
  <div class='bread'>
    <slot />
  </div>
</template>

<script lang="ts">
import { provide } from 'vue'
export default {
  name: 'Bread',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  },
  setup (props) {
    provide('separator', props.separator)
  }
};
</script>

<style lang="scss" scoped>
.bread {
  display: flex;
  flex-wrap: wrap;
  padding: 25px 10px;
  ::v-deep &-item {
    a {
      color: #666;
      transition: all 0.4s;
      text-decoration: none;
      &:hover {
        color: #27BA9B;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>