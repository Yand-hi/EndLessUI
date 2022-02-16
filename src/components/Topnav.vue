<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo"></use>
      </svg>
      <span> EndLess 官方文档</span>
    </router-link>
    <ul class="menu">
      <li>
        <a href="https://www.npmjs.com/package/endless-ui">npm</a>
      </li>
      <li>
        <a href="https://github.com/Yand-hi/EndLessUI/issues">Issue</a>
      </li>
      <li>
        <a href="https://github.com/Yand-hi/EndLessUI/blob/main/README.md">Readme</a>
      </li>
    </ul>
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggleAside icon"
      @click="toggleAside"
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
$color: #646cff;
.topnav {
  box-shadow: 2px 0 2px rgb(51 51 51 / 10%);
  color: $color;
  background: #ffffff;
  display: flex;
  padding: 14px 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    margin-right: auto;
    font-size: 1.5em;
    font-weight: 600;
    &:hover {
      text-decoration: none;
    }
    > svg {
      width: 26px;
      height: 26px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      font-weight: 600;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    background: #fff;
    box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
    padding: 12px 16px;
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
      > svg {
        width: 32px;
        height: 32px;
      }
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>