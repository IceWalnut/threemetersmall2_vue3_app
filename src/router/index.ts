/*
 * @Description: 路由配置文件
 * @Author: 王振
 * @Date: 2021-11-16 12:10:37
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-16 12:26:03
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
