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
        <td>separator</td>
        <td>分隔符</td>
        <td>string</td>
        <td>any</td>
        <td>"/"</td>
      </tr>
      <tr>
        <td>to</td>
        <td>激活并添加跳转路径</td>
        <td>string</td>
        <td>any</td>
        <td>—</td>
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