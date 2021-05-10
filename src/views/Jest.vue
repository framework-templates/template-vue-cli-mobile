<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-27 21:34:35
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 23:28:59
-->
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Jest",
  props: {
    msg: {
      type: String,
      default: "这是一段文案",
    },
  },
}
</script>

<style></style>
