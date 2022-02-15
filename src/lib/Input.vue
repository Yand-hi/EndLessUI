<template>
  <div class="my-input">
    <input :type="type" :value="value" :placeholder="placeholder" :class="{disabled:disabled}">
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String || Number,
    }
  },
  setup() {
  },
};
</script>

<style lang="scss">
.my-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 220px;

  input {
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
    //cursor: pointer;

    .disabled {
      cursor: not-allowed;
      background: #f5f7fa;
    }
  }
}
</style>