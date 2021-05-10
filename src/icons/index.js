/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-26 23:00:19
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-26 23:00:30
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'
// 自动加载svg文件
const req = require.context('./svg', false, /\.svg$/)
req.keys().map(req)
Vue.component('svg-icon', SvgIcon)
