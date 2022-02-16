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
        <td>rows</td>
        <td>行数</td>
        <td>number</td>
        <td>any</td>
        <td>4</td>
      </tr>
      <tr>
        <td>animate</td>
        <td>是否开启动画</td>
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
</style>