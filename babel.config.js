/*
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-05-08 21:06:51
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 18:11:12
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style:true
      },
      "vant"
    ],
  ],
}
