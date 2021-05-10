<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-27 20:18:16
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-08 17:31:23
-->
<template>
  <footer class="van-footer">
    底部区域
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style lang="less" scoped>
  .van-footer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: fixed;
    left:0;
    bottom:0;
    background: #fff;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
  }
</style>
