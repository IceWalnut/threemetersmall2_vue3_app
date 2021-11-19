<!--
 * @Description: 我的订单组件
 * @Author: 王振
 * @Date: 2021-11-19 09:26:57
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-19 10:11:23
-->
<template>
  <view class="container">
    <view class="myOrder__title">
      <text>我的订单</text>
    </view>
    <view class="myOrder__wrap">
      <view class="myOrder__wrap__item">
        <van-badge max="99">
          <van-icon class-prefix="iconfont" name=" icondaizhifu" size="20" color="#157658" />
        </van-badge>
        <text>待支付</text>
      </view>
      <view class="myOrder__wrap__item">
        <van-badge max="99">
          <van-icon class-prefix="iconfont" name=" icondaifahuo1" size="24" color="#157658" />
        </van-badge>
        <text>待发货</text>
      </view>
      <view class="myOrder__wrap__item">
        <van-badge max="99">
          <van-icon class-prefix="iconfont" name=" icondaishouhuo1" size="20" color="#157658" />
        </van-badge>
        <text>待收货</text>
      </view>
      <view class="myOrder__wrap__item">
        <van-icon class-prefix="iconfont" name=" iconyiwancheng" size="20" color="#157658" />
        <text>已完成</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MyOrderPanel',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 690px;
  height: 200px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(119, 163, 149, 0.2);
  .myOrder__title {
    width: 600px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  }
  .myOrder__wrap {
    width: 600px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    &__item {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      color: #666666;
    }
  }
}
</style>
