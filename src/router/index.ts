/*
 * @Description: 路由配置文件
 * @Author: 王振
 * @Date: 2021-11-16 12:10:37
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-18 16:44:28
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue'),
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "Category" */ '../views/Category/Category.vue'),
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "Mine" */ '../views/Mine/Mine.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/Search/Search.vue'),
  },
  {
    path: '/goodsDetail',
    name: 'GoodsDetail',
    component: () =>
      import(/* webpackChunkName: "GoodsDetail" */ '../views/GoodsDetail/GoodsDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
