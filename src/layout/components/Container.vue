<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-05-07 15:23:47
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 15:39:31
-->
<template>
  <section class="van-container">
    <router-view />
  </section>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.van-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
</style>
