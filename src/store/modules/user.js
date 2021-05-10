/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 14:52:05
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 18:40:41
 */
import { getToken } from "@/utils/auth"
import api from "@/api"
const state = {
  token: getToken(),
  name: "Weize",
  roles: [],
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
}

const actions = {
  // 获取用户信息
  getInfo({ commit }) {
    api.getInfo({ token: "token" }).then((res) => {
      commit("SET_NAME", res.data.name)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
