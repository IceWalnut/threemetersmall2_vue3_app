<!--
 * @Description: 个人中心-头部组件
 * @Author: 王振
 * @Date: 2021-11-18 17:13:29
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-19 09:23:24
-->
<template>
  <div class="container">
    <div class="myBanner">
      <!-- 头像 开始 -->
      <div class="myBanner__avatar">
        <van-image
          width="70"
          height="70"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          class="myBanner__avatar__image"
        />
        <div class="myBanner__avatar__text">
          <text>昵称</text>
        </div>
      </div>

      <!-- 头像 结束 -->

      <!-- 登录 开始 -->
      <van-button color="#DCEBE6" class="myBanner__authBtn">登录</van-button>
      <!-- 登录 结束 -->

      <!-- 优惠券、关于我们 开始 -->
      <div class="myBanner__bottom">
        <div class="myBanner__bottom__wrap">
          <div class="wrap__left">
            <text>0</text>
            <text>优惠券</text>
          </div>
          <div class="wrap__line"></div>
          <div class="wrap__right">
            <van-icon name="info-o" size="20" color="#157658" />
            <text>关于我们</text>
          </div>
        </div>
      </div>
      <!-- 优惠券、关于我们 结束 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MyBanner',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/viriables.scss';
.container {
  width: 100%;
  height: 360px;
  @include center;
  flex-direction: row;
  background-color: #dcebe6;
  .myBanner {
    width: 690px;
    height: 260px;
    padding-left: 38rpx;
    padding-right: 38rpx;
    position: relative;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0px 0px 8px 0px rgba(119, 163, 149, 0.2);
    border-radius: 4rpx;
    &__avatar {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      &__image {
        position: relative;
        top: -18px;
        left: 30px;
        border-radius: 4px;
      }
      &__text {
        width: max-content;
        height: max-content;
        line-height: 40px;
        margin-left: 60px;
        display: inline-block;
        font-size: 28px;
        color: rgba(69, 82, 107, 1);
      }
    }
    &__authBtn {
      position: absolute;
      top: 28px;
      right: 0;
      border-top-left-radius: 60px;
      border-bottom-left-radius: 60px;
      font-size: 24px;
      color: $themeColor;
    }
    &__bottom {
      display: flex;
      flex-direction: row;
      justify-content: center;
      &__wrap {
        width: 580px;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        font-size: 24px;
        color: #999999;
        .wrap__left {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          text:first-child {
            font-size: 36px;
            line-height: 36px;
            color: $themeColor;
            @include center;
            flex-direction: row;
          }
        }
        .wrap__line {
          width: 3px;
          height: 50px;
          background-color: #dddddd;
        }
        .wrap__right {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
