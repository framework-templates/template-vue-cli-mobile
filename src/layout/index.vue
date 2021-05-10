<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-25 09:47:37
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 15:33:32
-->
<template>
  <div class="layout">
    <Header />
    <div class="layout-container">
      <Container />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header"
import Container from "./components/Container"
import Footer from "./components/Footer"
export default {
  name: "Layout",
  components: {
    Header,
    Container,
    Footer,
  },
  mounted() {
    this.$store.dispatch("user/getInfo")
  },
}
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  margin: 0 auto;
  &-container {
    margin: 60px 0;
    padding: 20px;
  }
}
</style>
