/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 15:32:38
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 17:27:10
 */

const users = {
  token: {
    name: "WeiZe",
  },
}

module.exports = [
  // get user info
  {
    url: "/user/info",
    type: "get",
    response: (config) => {
      const { token } = config.query
      const info = users[token]
      return {
        code: 200,
        data: info,
      }
    },
  },
]
