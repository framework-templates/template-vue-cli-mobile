/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 12:10:34
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 21:06:14
 */
import Vue from "vue"
import VueRouter from "vue-router"
import home from "./home"
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/", //到时候地址栏会显示的路径
      name: "index",
      redirect: "/home",
    },
    ...home,
  ],
})

// 解决菜单跳转相同路径下报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
