<template>
  <button
      class="free-switch"
      @click="toggle"
      :class="{ 'free-checked': value, 'disabled-checked':disabled, 'loading-checked':loading}"
      :disabled="loading ? true : disabled"
  >
    <span><span class="switch-loading" v-if="loading"></span></span>
    <div :class="[value?'checked-text':'unchecked-text']">{{ text }}</div>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue'

export default {
  props: {
    value: Boolean,
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checkedText: {
      type: String
    },
    uncheckedText: {
      type: String
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    const text = computed(() => {
      if (props.value) {
        return props.checkedText
      }
      return props.uncheckedText
    })
    return {text, toggle};
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
  -webkit-tap-highlight-color: transparent;
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
      margin-top: 2px;
      cursor: wait;
      display: inline-block;
      border-radius: 8px;
      border-color: lighten(#1890ff, 20%) lighten(#1890ff, 10%) #1890ff transparent;
      border-style: solid;
      border-width: 2px;
      animation: free-spin 1s infinite linear;
    }
  }

  &[disabled] {
    cursor: not-allowed;
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

  &.loading-checked {
    background: lighten(#1890ff, 14%);
  }

  &.disabled-checked {
    background: lighten(#1890ff, 24%);

    > span {
      transition: none;
    }
  }

  &.disabled-checked:active, &.loading-checked:active {
    > span {
      width: $h2 + 0;
      margin-left: 0;
    }
  }

  .unchecked-text {
    color: white;
    position: absolute;
    top: 2px;
    right: 2px;
    height: $h2;
    width: $h2;
    line-height: 18px;
    font-size: 14px;
    text-align: center;
    transition: all 250ms;
  }
  .checked-text {
    color: white;
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    line-height: 18px;
    font-size: 14px;
    text-align: center;
    transition: all 250ms;
  }
}
</style>