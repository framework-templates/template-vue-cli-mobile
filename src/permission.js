/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 13:09:35
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 18:40:29
 */
import router from "./router"
import NProgress from "nprogress" // 页面顶部加载进度条
import "nprogress/nprogress.css" // 页面顶部加载进度条样式
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title
  console.log("beforeEach-to", to)
  console.log("beforeEach-from", from)
  NProgress.start()
  next()
})

router.afterEach(async (to, from) => {
  console.log("befoafterEachreEach-to", to)
  console.log("befoafterEachreEach-from", from)
  NProgress.done()
})
