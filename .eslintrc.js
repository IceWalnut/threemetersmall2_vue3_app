/*
 * @Description: eslint配置文件
 * @Author: 王振
 * @Date: 2021-11-16 11:23:43
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-16 12:24:51
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off', // 关闭vue多字组件名称检查
  },
};
