<template>
  <div class="attrs">
    <h2>Attributes</h2>
    <table>
      <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>theme</td>
        <td>类型主题</td>
        <td>string</td>
        <td>link / text</td>
        <td>button</td>
      </tr>
      <tr>
        <td>size</td>
        <td>尺寸大小</td>
        <td>string</td>
        <td>small / big</td>
        <td>normal</td>
      </tr>
      <tr>
        <td>level</td>
        <td>等级状态</td>
        <td>string</td>
        <td>main / warning / danger</td>
        <td>normal</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>是否加载中状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
  }
}
</script>

<style lang="scss" scoped>
@import "src/lib/attributes.scss";

thead tr th:first-child, tbody tr td:first-child {
  width: 14%;
}

thead tr th:nth-child(2), tbody tr td:nth-child(2) {
  width: 22%;
}

thead tr th:nth-child(4), tbody tr td:nth-child(4) {
  width: 30%;
}

thead tr th:last-child, tbody tr td:last-child {
  width: 14%;
}
</style>