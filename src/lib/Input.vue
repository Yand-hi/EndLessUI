<template>
  <div class="my-input">
    <input
        class="input_inner"
        :type="type"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        :class="{'disabled':disabled}"
        @input="changeText"
    >
  </div>
</template>

<script lang="ts">
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
    }
  },
  setup(props, context) {
    const changeText = (e) => {
      context.emit('update:value', e.target.value)
    }
    return {changeText}
  },
};
</script>

<style lang="scss">
.my-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 220px;

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
}
</style>