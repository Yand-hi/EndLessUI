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
        <td>title</td>
        <td>Tab 栏标题</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>type</td>
        <td>标签页类型</td>
        <td>string</td>
        <td>card</td>
        <td>tab</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用状态</td>
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
$color-th: #909399;
$color-td: #606266;
$border-color: #d9d9d9;
.attrs {
  padding: 40px 24px;

  > table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;

    th, td {
      padding-left: 10px;
      border-bottom: 1px solid $border-color;
    }

    thead {
      th {
        color: $color-th;
        font-weight: normal;
        height: 70px;
      }
    }

    tbody {
      td {
        color: $color-td;
        height: 50px;
        width: 84px;
      }

    }
    thead tr th:first-child, tbody tr td:first-child {
      width: 19%;
    }

    thead tr th:nth-child(2), tbody tr td:nth-child(2) {
      width: 24%;
    }
  }
}
</style>