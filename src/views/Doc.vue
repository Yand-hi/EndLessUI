<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">&nbsp&nbsp&nbsp介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">&nbsp&nbsp&nbsp安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">&nbsp&nbsp&nbsp快速上手</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">&nbsp&nbsp&nbspSwitch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">&nbsp&nbsp&nbspButton 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">&nbsp&nbsp&nbspDialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">&nbsp&nbsp&nbspTabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">&nbsp&nbsp&nbspInput 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/skeleton">&nbsp&nbsp&nbspSkeleton 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/bread">&nbsp&nbsp&nbspBread 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from "../components/Topnav.vue";
import {inject, Ref} from "vue";

export default {
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return {asideVisible};
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
$color: #2c3e50;
$color-active: #646cff;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    margin: 10px 80px;
    @media (min-width: 800px) {
      padding: 16px 40px 16px 140px;
    }
    @media (max-width: 500px) {
      margin: 10px 30px;
    }
  }
}

aside {
  background: #fff;
  box-shadow: 2px 0 2px rgb(51 51 51 / 10%);
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 80px 0 16px;
  height: 100%;
  z-index: $aside-index;

  > h2 {
    color: $color;
    margin-bottom: 4px;
    margin-top: 4px;
    padding: 4px 16px;
    font-weight: 600;
  }

  > ol {
    > li {
      :hover {
        color: $color-active;
      }

      > a {
        display: block;
        padding: 12px 16px 8px;
        text-decoration: none;
      }

      .router-link-active {
        color: $color-active;
        border-left: 4px solid $color-active;
      }
    }
  }

  @media (min-width: 800px) {
    width: 240px;
  }
}

main {
  overflow: auto;
}
</style>