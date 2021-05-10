/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 14:54:34
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-27 15:00:15
 */
const token = "token"

export function getToken() {
  return localStorage.getItem(token)
}

export function setToken(token) {
  localStorage.setItem(token, token)
}

export function removeToken() {
  localStorage.removeItem(token)
}
