'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// -- 增加部分 --//
// dev环境中获取配置的--env=XXX参数
let params = process.argv[4]
let mergeObj = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
}
switch (params) {
  case "--env=pro":
    mergeObj.BASE_API = '"https://test_pro.com"' // 正式地址前缀
    break;
  case "--env=test":
    mergeObj.BASE_API = '"https://test_test.com"' // 测试地址前缀
    break;
  case "--env=local":
    mergeObj.BASE_API = '"https://test_local.com"' // 本地地址前缀
    break;
  default:
    mergeObj.BASE_API = '"https://test_default.com"' // 默认地址前缀
    break;
}
// 合并到全局环境中
module.exports = merge(prodEnv, mergeObj)
// -- 增加部分 --//
