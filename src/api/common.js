/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 15:49:02
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 16:49:14
 */
import request from "@/utils/request"
export default {
  getInfo: (token) => {
    return request({
      url: "/user/info",
      method: "get",
      params: { ...token },
    })
  },
}
