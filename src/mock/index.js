/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 15:18:22
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 18:31:59
 */
const Mock = require('mockjs')
const { param2Obj } = require("../utils");
const user = require("./user");
const mocks = [...user];
function mockXHR() {
  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url),
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }
  for (const i of mocks) {
    Mock.mock(
      new RegExp(i.url),
      i.type || "get",
      XHR2ExpressReqWrap(i.response)
    );
  }
}

module.exports = {
  mocks,
  mockXHR
}
