<!--
 * @Description: 商品详情页页面
 * @Author: 王振
 * @Date: 2021-11-17 14:58:47
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-18 14:33:25
-->
<template>
  <div class="goodsDetail">
    <!-- 头部导航栏 开始 -->
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <!-- 头部导航栏 结束 -->

    <!-- 轮播图 开始 -->
    <van-swipe lazy-render :autoplay="3000" indicator-color="#157658" class="goodsDetails__swipe">
      <van-swipe-item v-for="image in 4" :key="image">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="swipe__img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 结束 -->

    <!-- 商品名称 开始 -->
    <div class="goodsDetail_info">
      <div class="info__left">
        <!-- 商品名称 -->
        <text class="info__left__title">商品名称</text>
        <!-- 商品标签 -->
        <div class="info__left__tags">
          <van-tag color="#DCEBE6" text-color="#157658" class="tag">标签</van-tag>
          <van-tag color="#DCEBE6" text-color="#157658" class="tag">标签</van-tag>
        </div>
        <!-- 商品介绍 -->
        <text class="info__left__subtitle">subtitle</text>
        <!-- 商品价格 -->
        <div class="info__left__price">
          <price color="#157658" unitSize="24" size="16" value="234" autofix></price>
          <price
            value="234"
            size="16"
            unitSize="24"
            color="#999"
            bold="400"
            deleted
            class="price__discount"
          ></price>
          <van-tag color="#c93756" round>折扣</van-tag>
        </div>
      </div>
      <div class="info__right">
        <!-- 商品分享 -->
        <div class="info__right__share">
          <van-icon name="share-o" color="#157658" />
          <text>分</text>
          <text>享</text>
        </div>
      </div>
    </div>
    <!-- 商品名称 结束 -->

    <!-- 优惠券 开始 -->
    <!-- 优惠券 结束 -->

    <!-- 商品规格 开始 -->
    <!-- 商品规格 结束 -->

    <!-- 商品详情 开始 -->
    <div class="goodsDetail__container">
      <block>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="detail__img" />
      </block>
    </div>
    <!-- 商品详情 结束 -->

    <!-- 购买商品操作栏 开始 -->
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon icon="cart-o" text="购物车" />
      <van-action-bar-button type="warning" color="#be99ff" text="加入购物车" />
      <van-action-bar-button type="danger" color="#157658" text="立即购买" />
    </van-action-bar>
    <!-- 购买商品操作栏 结束 -->
  </div>
</template>

<script lang="ts">
import Price from '@/components/Price/Price.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GoodsDetail',
  components: { Price },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/viriables.scss';
@import '@/styles/mixins.scss';
.goodsDetail {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: $bgColor;
  &__swipe {
    width: 100%;
    background-color: #fff;
    .swipe__img {
      width: 100%;
      height: 400px;
    }
  }
  &_info {
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    padding: 34px 30px 26px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .info__left {
      flex: 1;
      display: flex;
      flex-direction: column;
      &__title {
        font-size: 28px;
        font-weight: 400;
        color: $fontColor;
      }

      &__tags {
        display: flex;
        .tag {
          margin-right: 6px;
        }
      }

      &__subtitle {
        color: #999999;
        font-size: 28px;
        font-weight: 400;
        margin-top: 40px;
        margin-bottom: 16px;
      }

      &__price {
        display: flex;
        align-items: baseline;
        .price__discount {
          margin-left: 20px;
          margin-right: 80px;
        }
      }
    }
    .info__right {
      width: 78px;
      height: 120px;
      margin-left: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      border-left: 2px dashed #f5f5f5;
      &__share {
        width: 50px;
        height: 120px;
        @include center;
        flex-direction: column;
        background-color: #dcebe6;
        text {
          margin-bottom: 5px;
          font-size: 20px;
          color: $themeColor;
        }
      }
    }
  }
  &__container {
    margin-bottom: 200px;
    .detail__img {
      width: 100%;
      display: flex;
    }
  }
}
</style>
