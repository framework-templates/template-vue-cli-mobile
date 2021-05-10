<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-26 20:45:02
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-08 17:32:40
-->

<template>
  <Layout />
</template>

<script>
import Layout from "@/layout"
export default {
  components: {
    Layout,
  },
  mounted() {
    console.log("$router", this.$router)
  },
}
</script>
<style lang="less" scoped>

</style>
