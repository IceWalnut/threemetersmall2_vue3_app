<!--
 * @Description: 商品列表组件
 * @Author: 王振
 * @Date: 2021-11-17 11:10:40
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-17 14:47:23
-->
<template>
  <div class="container">
    <div class="goods" v-for="item in 7" :key="item">
      <div class="goods__img">
        <van-image width="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="goods__wrap">
        <text class="goods__wrap__title">商品名称</text>
        <div class="goods__wrap__tags">
          <block class="tags">
            <van-tag color="#DCEBE6" text-color="#157658">标签</van-tag>
          </block>
        </div>
        <div class="goods__wrap__price">
          <price value="123" valueSize="28" unitSize="20" autofix></price>
        </div>
        <text class="goods__wrap__text">
          这是一个商品哈哈哈红红火火恍恍惚惚哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或
        </text>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Price from '@/components/Price/Price.vue';

export default defineComponent({
  name: 'GoodsList',
  components: { Price },
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
  padding: 0 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .goods {
    width: 48%;
    margin-bottom: 30px;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(119, 163, 149, 0.2);
    &__wrap {
      display: flex;
      flex-direction: column;
      padding: 16px 16px 22px 16px;
      &__title {
        font-size: 28px;
        color: $fontColor;
      }
      &__tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 6px;
        margin-bottom: 8px;
        .tags {
          margin-right: 5px;
        }
      }
      &__price {
        display: flex;
        flex-direction: row;
      }
      &__text {
        font-size: 24px;
        font-weight: 300;
        margin-top: 6px;
        color: #888;
      }
    }
  }
}
</style>
