<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <div class="figure">
          <svg class="logo">
            <use xlink:href="#icon-logo"></use>
          </svg>
        </div>
        <h1>Infinite UI</h1>
        <h2>一个充满无限可能的 UI 框架</h2>
        <p class="actions">
          <span class="start">
            <router-link to="/doc">
            Get Started
          </router-link>
          </span>
          <span class="github">
            <a href="https://github.com/Yand-hi/FreeUI">
            <svg class="top-icon">
              <use xlink:href="#icon-github"></use>
            </svg>
            &nbspGithub
          </a>
          </span>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>TypeScript</h3>
          <p>源代码采用 TypeScript 编写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-npm"></use>
          </svg>
          <h3>发布至 npm</h3>
          <p>使用 Rollup 打包并上传至 npm</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-code"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
$colorH1: #2c3e50;
$colorH2: #476582;
$bgcolor: #646cff;
$hover-color: #747bff;
$border-radius: 24px;
.features {
  border-top: 1px solid #e7e7e8;
  margin: 56px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 25%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
        margin: 0 0 0 30px;
      }
      > h3 {
        color: $colorH1;
        grid-area: title;
        font-size: 28px;
        margin: 0 0 0 30px;
      }
      > p {
        color: $colorH2;
        grid-area: text;
        margin: 0 0 0 30px;
      }
    }
  }
}
.banner {
  padding: 120px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: $colorH1;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 5px;
  }
  h2 {
    color: $colorH2;
    margin-bottom: 20px;
  }
  .figure {
    margin: 0;
    .logo {
      width: 200px;
      height: 200px;
      margin-bottom: 40px;
    }
  }
  > .actions {
    padding: 10px 0;
    .start {
      color: $bgcolor;
    }
    .github {
      color: $bgcolor;
    }
    a {
      margin: 0 10px;
      border:  2px solid $bgcolor;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      text-align: center;
      font-weight: 600;
      font-size: 18px;
      &:hover {
        color: #ffffff;
        background: $hover-color;
        text-decoration: none;
      }
      .top-icon {
        width: 20px;
        height: 20px;
        margin-bottom: 4px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>