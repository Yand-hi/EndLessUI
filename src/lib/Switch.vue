<template>
  <button
    class="free-switch"
    @click="toggle"
    :class="{ 'free-checked': value }"
    :disabled="loading ? true : disabled"
  >
    <span><span class="switch-loading" v-if="loading"></span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.free-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h / 2;
  position: relative;
  cursor: pointer;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
    > .switch-loading {
      width: 14px;
      height: 14px;
      margin: 1px 0 0;
      cursor: wait;
      display: inline-block;
      border-radius: 8px;
      border-color: lighten(#1890ff, 20%) lighten(#1890ff, 10%) #1890ff
        transparent;
      border-style: solid;
      border-width: 2px;
      animation: free-spin 1s infinite linear;
    }
  }
  &[disabled] {
    pointer-events: none;
  }
  &.free-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.free-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>