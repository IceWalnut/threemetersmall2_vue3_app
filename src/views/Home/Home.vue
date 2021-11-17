<!--
 * @Description: 首页页面
 * @Author: 王振
 * @Date: 2021-11-16 12:14:16
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-17 14:33:12
-->
<template>
  <div class="home">
    <!-- 活动图片 开始 -->
    <van-image width="100%" height="130" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <!-- 活动图片 结束 -->

    <!-- 轮播图 开始 -->
    <van-swipe lazy-render :autoplay="3000" indicator-color="#157658" class="swiper__img">
      <van-swipe-item v-for="image in images" :key="image">
        <van-image :src="image" class="swiper__img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 结束 -->

    <!-- 宫格 开始 -->
    <category-grid :gridList="gridList"></category-grid>
    <!-- 宫格 结束 -->

    <!-- 优惠券 开始 -->
    <div class="home__discount">
      <van-image width="100%" height="155" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <!-- 优惠券 结束 -->

    <!-- 主题活动 开始 -->
    <spu-scroll></spu-scroll>
    <!-- 主题活动 结束 -->

    <!-- 热卖榜单 开始 -->
    <hot-list></hot-list>
    <!-- 热卖榜单 结束 -->

    <!-- 活动图片 开始 -->
    <div class="home__activity">
      <van-image width="100%" height="420" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <!-- 活动图片 结束 -->

    <!-- 为你推荐 开始 -->
    <div class="home__recommend">
      <!-- 推荐头图 开始 -->
      <van-image width="100%" height="35" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <!-- 推荐头图 结束 -->

      <!-- 商品瀑布流 开始 -->
      <goods-list></goods-list>
      <!-- 商品瀑布流 结束 -->
    </div>
    <!-- 为你推荐 结束 -->
  </div>

  <!-- 底部tab 开始 -->
  <bottom-tabs :currentIndex="0"></bottom-tabs>
  <!-- 底部tab 结束 -->
</template>

<script lang="ts">
import BottomTabs from '@/components/BottomTabs/BottomTabs.vue';
import CategoryGrid from '@/components/CategoryGrid/CategoryGrid.vue';
import GoodsList from '@/components/GoodsList/GoodsList.vue';
import HotList from '@/components/HotList/HotList.vue';
import SpuScroll from '@/components/SpuScroll/SpuScroll.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: { BottomTabs, CategoryGrid, SpuScroll, HotList, GoodsList },
  setup() {
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ];
    const gridList = [1, 2, 3, 4]; // 宫格数据
    return { images, gridList };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/viriables.scss';
.home {
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 100px;
  right: 0;
  background-color: $bgColor;
  .swiper__img {
    width: 100%;
    height: 360px;
  }
  &__discount {
    margin: 10px 0;
    display: flex;
  }
  &__activity {
    display: flex;
    margin-top: 32px;
  }
  &__recommend {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    background-color: #fff;
  }
}
</style>
