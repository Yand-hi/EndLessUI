<template>
  <div :class="[{cardTabs:type==='card'},'free-tabs']">
    <div :class="[{card:type==='card'},'free-tabs-nav']" ref="container">
      <div
          class="free-tabs-nav-item"
          v-for="(CNode, index) in CNodes"
          :ref="
          (el) => {
            if (CNode.props.title === selected) selectedItem = el;
          }
        "
          @click="select(CNode)"
          :class="
          [CNode.props.title === selected ? 'selected' : ''] +
          [CNode.props.disabled === '' ? 'disabled' : '']
        "
          :key="index"
      >
        {{ CNode.props.title }}
      </div>
      <div class="free-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div :class="[{cardContent:type==='card'},'free-tabs-content']">
      <component
          class="free-tabs-content-item"
          :key="current.props.title"
          :is="current"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import {computed, ref, onMounted, watchEffect, onUpdated} from "vue";

export default {
  props: {
    selected: String,
    type: {
      type: String,
      default: 'tab'
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(
          () => {
            const {width} = selectedItem.value.getBoundingClientRect();
            indicator.value.style.width = width + "px";
            const {left: NavLeft} = container.value.getBoundingClientRect();
            const {left: SelectedLeft} =
                selectedItem.value.getBoundingClientRect();
            const left = SelectedLeft - NavLeft;
            indicator.value.style.left = left + "px";
          },
          // 解决异步
          {
            flush: "post", //效果更新需要缓冲时间
          }
      );
    });
    // 获取插槽结点
    const CNodes = context.slots.default();
    CNodes.forEach((CNode) => {
      // @ts-ignore
      if (CNode.type.name !== Tab.name) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    // 返回当前选中结点
    const current = computed(() => {
      return CNodes.find((CNode) => CNode.props.title === props.selected);
    });
    // 处理点击事件，当有disabled属性时不更新选中结点，否则选中点击结点
    const select = (CNode) => {
      if (CNode.props.disabled === "") {
        return;
      }
      context.emit("update:selected", CNode.props.title);
    };
    return {
      current,
      CNodes,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
$card-bg: #f9fafc;
$card-border-color: #e4e7ed;
.free-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &.disabled {
        color: #ccc;
        cursor: not-allowed;
      }

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }

  .card {
    border: 1px solid $card-border-color;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    transition: transform .3s;

    .free-tabs-nav-item {
      margin: 0;
      padding: 10px 20px;
      border-right: 1px solid $card-border-color;
      border-bottom: 1px solid $card-border-color;

      &.selected {
        border-bottom: none;
        background: $card-bg;
      }
    }

    .free-tabs-nav-indicator {
      height: 0;
      transition: all 250ms;
    }
  }

  .cardContent {
    background: $card-bg;
    padding-left: 18px;
    padding-top: 20px;
    padding-bottom: 50px;
    border-left: 1px solid $card-border-color;
    border-right: 1px solid $card-border-color;
    border-bottom: 1px solid $card-border-color;
  }
}

.cardTabs:hover {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: .5s;
}
</style>