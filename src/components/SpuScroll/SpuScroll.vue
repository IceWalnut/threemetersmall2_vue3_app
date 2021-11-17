<!--
 * @Description: 主题活动组件
 * @Author: 王振
 * @Date: 2021-11-16 15:33:24
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-17 10:15:05
-->
<template>
  <div class="container">
    <!-- 主题图片 开始 -->
    <van-image width="100%" height="130" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <!-- 主题图片 结束 -->

    <!-- 主题商品 开始 -->
    <div class="spu">
      <div class="spu__wrap" v-for="item in 4" :key="item">
        <van-image width="80" height="80" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <text class="spu__wrap__text">这是一个商品哈哈哈</text>
        <block class="spu__wrap__price">
          <price value="66"></price>
        </block>
      </div>
    </div>
    <!-- 主题商品 结束 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Price from '@/components/Price/Price.vue';

export default defineComponent({
  components: { Price },
  name: 'SpuScroll',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.container {
  padding: 21px 14px;
  box-sizing: border-box;
  background-color: #fff;
  .spu {
    margin-top: 14px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    &__wrap {
      display: flex;
      align-items: center;
      flex-direction: column;
      &__text {
        width: 150px;
        margin-top: 10px;
        font-size: 12px;
        color: #666666;
        @include ellipsis;
      }
      &__price {
        margin: 5px auto;
      }
    }
  }
}
</style>
