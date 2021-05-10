
/*
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-27 21:56:59
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-08 21:23:46
 */
import { shallowMount } from '@vue/test-utils'
import Jest from '@/views/Jest.vue'

describe('Jest.vue', () => {
  const wrapper = shallowMount(Jest)

  it('测试默认值', async () => {
    expect(wrapper.text()).toBe('这是一段文案')
    await wrapper.setProps({
      msg:'这是一段测试文字'
    })
    expect(wrapper.text()).toBe('这是一段测试文字')
  })
})
