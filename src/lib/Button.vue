<template>
  <button class="free-button" :class="classes" :disabled="disabled">
    <span v-if="loading"
          :class="[level==='normal'?'free-loadingIndicator':'no-normal']"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const {theme, size, level, disabled} = props;
    const classes = computed(() => {
      return {
        [`free-theme-${theme}`]: theme,
        [`free-size-${size}`]: size,
        [`free-level-${level}`]: level,
      };
    });
    return {classes};
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$warn: #e6a23c;
$grey: grey;
$link: #1d2c40;
.free-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.free-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.free-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: lighten(white, 5%);
    }
  }

  &.free-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.free-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.free-theme-button {
    &.free-level-main {
      background: $blue;
      color: white;
      border-color: $blue;

      &:hover,
      &:focus {
        background: lighten($blue, 10%);
        border-color: lighten($blue, 10%);
      }
    }

    &.free-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: lighten($red, 10%);
        border-color: lighten($red, 10%);
      }
    }

    &.free-level-warning {
      background: $warn;
      border-color: $warn;
      color: white;

      &:hover,
      &:focus {
        background: lighten($warn, 10%);
        border-color: lighten($warn, 10%);
      }
    }
  }

  &.free-theme-link {
    &.free-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: lighten($red, 10%);
      }
    }

    &.free-level-warning {
      color: $warn;

      &:hover,
      &:focus {
        color: lighten($warn, 10%);
      }
    }
  }

  &.free-theme-text {
    &.free-level-main {
      color: $blue;

      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }

    &.free-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: lighten($red, 10%);
      }
    }

    &.free-level-warning {
      color: $warn;

      &:hover,
      &:focus {
        color: lighten($warn, 10%);
      }
    }
  }

  &.free-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.free-theme-link,
  &.free-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .free-loadingIndicator {
    cursor: wait;
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: free-spin 1s infinite linear;
  }

  > .no-normal {
    cursor: wait;
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: white white white transparent;
    border-style: solid;
    border-width: 2px;
    animation: free-spin 1s infinite linear;
  }
}

@keyframes free-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>