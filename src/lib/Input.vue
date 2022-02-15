<template>
  <div class="my-input">
    <input
        class="input_inner"
        :type="type==='password' ? (showPassword ? 'text' : 'password') : type"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        :class="{'disabled':disabled}"
        @input="changeText"
    >
    <span class="eyes" v-if="type==='password'" @click="toggle">
      <svg class="icon" aria-hidden="true">
          <use :xlink:href="showPassword ? '#icon-close' : '#icon-show'"></use>
      </svg>
    </span>
    <span class="clear" v-if="clearable" @click="clear">
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-clear"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String || Number,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const showPassword: Boolean = ref(false)
    const changeText = (e) => {
      context.emit('update:value', e.target.value)
    }
    const toggle = () => {
      showPassword.value = !showPassword.value
    }
    const clear = () => {
      context.emit('update:value', '')
    }
    return {showPassword, changeText, toggle, clear}
  },
};
</script>

<style lang="scss">
.my-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 240px;

  .input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;

    &.disabled {
      background: #f5f7fa;
      cursor: not-allowed;
    }
  }

  .eyes, .clear {
    color: #606266;
    font-size: 1.4em;
    position: absolute;
    right: 10px;
    top: 6px;
    cursor: pointer;
  }

  .clear {
    font-size: 0.8em;
    top: 10px;

    .clear:hover {
      color: #666;
    }
  }
}
</style>