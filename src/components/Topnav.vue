<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo"></use>
      </svg>
      <span> Infinite </span>
    </router-link>
    <ul class="menu">
      <li>
        <a href="#">npm</a>
      </li>
      <li>
        <a href="#">Gitee</a>
      </li>
      <li>
        <router-link to="/doc">文 档</router-link>
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
  border-bottom: 1px solid #e7e7e8;
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
    max-width: 6em;
    margin-right: auto;
    font-size: 1.5em;
    font-weight: 600;
    &:hover {
      text-decoration: none;
    }
    > svg {
      width: 25px;
      height: 25px;
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