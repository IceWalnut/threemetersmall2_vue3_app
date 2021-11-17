/*
 * @Description: 项目入口文件
 * @Author: 王振
 * @Date: 2021-11-16 11:18:11
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-17 13:38:28
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css'; // 统一各个浏览器之间的显示差异
import './styles/bass.scss';
import 'lib-flexible/flexible'; // 移动端分辨率适配—rem
import 'vant/lib/index.css'; // 全局导入vant
import { Icon, Image as VanImage, Swipe, SwipeItem, Grid, GridItem, List, Tag } from 'vant';

const app = createApp(App); // 创建实例

app.use(Icon).use(VanImage).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(List).use(Tag);
app.use(store);
app.use(router);
app.mount('#app');
