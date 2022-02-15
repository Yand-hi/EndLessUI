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
        <td>value</td>
        <td>双向数据绑定</td>
        <td>string / number</td>
        <td>any</td>
        <td>' '</td>
      </tr>
      <tr>
        <td>type</td>
        <td>input 类型</td>
        <td>string</td>
        <td>所有 input 原生 type</td>
        <td>text</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>占位符</td>
        <td>string</td>
        <td>any</td>
        <td>请输入内容</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用状态</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>clearable</td>
        <td>一键清空</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>showPassword</td>
        <td>显示和隐藏密码</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="attrs">
    <h2>Events</h2>
    <table>
      <thead>
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>changeText</td>
        <td>更新 input 数据</td>
        <td></td>
      </tr>
      <tr>
        <td>toggle</td>
        <td>点击 icon 切换密码显示</td>
        <td></td>
      </tr>
      <tr>
        <td>clear</td>
        <td>点击清空 input</td>
        <td></td>
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
        font-size: 14px;
        color: $color-td;
        height: 50px;
        width: 84px;
      }

    }

    thead tr th:first-child, tbody tr td:first-child {
      width: 20%;
    }

    thead tr th:nth-child(2), tbody tr td:nth-child(2) {
      width: 26%;
    }
  }
}
</style>