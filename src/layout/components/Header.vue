<!--
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-24 23:19:34
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 15:36:41
-->
<template>
  <header class="van-header">
    <div class="left">
      {{ name }}
      <svg-icon iconClass="money" />
    </div>
    <div class="right">
      <van-field v-model="searchVal" placeholder="请输入关键字" @input="searchInput" />
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "Header",
  data() {
    return {
      searchVal: "",
    }
  },
  computed: {
    ...mapGetters(["name"]),
  },
  methods: {
    searchInput() {
      console.log(this.searchVal)
    },
  },
  mounted() {
    console.log("vuex", this.$store)
  },
}
</script>
<style lang="less" scoped>
.van-header{
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  position:fixed;
  top:0;
  box-sizing: border-box;
  color: @primary-color;
}
</style>
