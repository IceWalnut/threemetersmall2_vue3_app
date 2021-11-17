<!--
 * @Description: 热卖榜单组件
 * @Author: 王振
 * @Date: 2021-11-17 10:28:52
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-17 10:50:58
-->
<template>
  <div class="container">
    <!-- 热卖榜单头图 开始 -->
    <van-image width="100%" height="45" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <!-- 热卖榜单头图 结束 -->

    <!-- 热卖榜单商品 开始 -->
    <div class="goods">
      <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" class="goods__left" />
      <div class="goods__right">
        <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" class="goods__right__size" />
        <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" class="goods__right__size" />
      </div>
    </div>
    <!-- 热卖榜单商品 结束 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HotList',
  props: {
    banner: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 32px;
  padding-top: 20px;
  background-color: #fff;
  .goods {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__left {
      width: 346px;
      height: 522px;
      display: flex;
    }
    &__right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &__size {
        width: 400px;
        height: 260px;
        display: flex;
      }
    }
  }
}
</style>
