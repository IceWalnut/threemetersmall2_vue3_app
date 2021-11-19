<!--
 * @Description: 个人中心页面
 * @Author: 王振
 * @Date: 2021-11-18 16:42:34
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-19 11:31:27
-->
<template>
  <div class="mine">
    <!-- 头部 开始 -->
    <my-banner></my-banner>
    <!-- 头部 结束 -->

    <!-- 订单、列表 开始 -->
    <div class="mine__main">
      <!-- 订单 -->
      <div class="mine__main__order">
        <my-order-panel></my-order-panel>
      </div>

      <!-- 列表 -->
      <van-cell-group class="mine__main__list" :border="false">
        <van-cell title="全部订单" icon="orders-o" is-link />
        <van-cell title="优惠券" icon="balance-pay" is-link />
        <van-cell title="个人信息" icon="contact" is-link />
        <van-cell title="收货地址" icon="location-o" is-link />
      </van-cell-group>
    </div>
    <!-- 订单、列表 结束 -->
  </div>

  <!-- 底部tab 开始 -->
  <bottom-tabs :currentIndex="3"></bottom-tabs>
  <!-- 底部tab 结束 -->
</template>

<script lang="ts">
import BottomTabs from '@/components/BottomTabs/BottomTabs.vue';
import MyBanner from './components/MyBanner.vue';
import MyOrderPanel from './components/MyOrderPanel.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Mine',
  components: { BottomTabs, MyBanner, MyOrderPanel },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/viriables.scss';
.mine {
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 100px;
  right: 0;
  background-color: $bgColor;
  &__main {
    padding-top: 30px;
    padding-bottom: 10px;
    background-color: #ffffff;
    &__order {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &__list {
      margin-top: 20px;
    }
  }
}
</style>
