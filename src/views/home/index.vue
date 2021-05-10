<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-27 12:23:00
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 15:51:51
-->
<template>
  <div class="home-container">
    <p>图片使用</p>
    <img class="image-box" src="~@/assets/png-1.jpg" alt="" />
    <p>背景图片使用</p>
    <div class="background-image"></div>
  </div>
</template>
<script>
export default {
  name: "Home",
}
</script>
<style lang="less" scoped>
.home-container {
  width: 100%;
  text-align: center;
  .image-box{
    width: 200px;
  }
  .background-image {
    width: 100%;
    height: 500px;
    background: url("~@/assets/png-2.jpg") no-repeat center center;
  }
}
</style>
