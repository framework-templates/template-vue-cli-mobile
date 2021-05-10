/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 14:44:53
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 18:42:43
 */
import axios from "axios"
import { Notify } from "vant"
import store from "@/store"
import { getToken } from "@/utils/auth"

// 创建axioc实例
const service = axios.create({
  baseURL: process.env.BASE_URL, // 请求url = baseURL + requestUrl
  timeout: 5000, // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 请求发送之前
    if (store.getters.token) {
      // 设置请求头token
      config.headers["token"] = getToken()
    }
    return config
  },
  (error) => {
    console.log(error) // 用于debug
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      Notify({
        message: res.message || "Error",
        type: "danger",
        duration: 5 * 1000,
      })
      return Promise.reject(new Error(res.message || "Error"))
    } else {
      return Promise.resolve(res)
    }
  },
  (error) => {
    console.log("err" + error) // for debug
    Notify({
      message: error.message,
      type: "danger",
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  }
)

export default service
