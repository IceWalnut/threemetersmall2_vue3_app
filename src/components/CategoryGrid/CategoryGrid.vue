<!--
 * @Description: 自定义宫格组件
 * @Author: 王振
 * @Date: 2021-11-16 14:15:16
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-16 16:09:11
-->
<template>
  <div class="container">
    <van-grid class="container__grid" :border="false">
      <van-grid-item v-for="(item, index) in gridList" :key="index">
        <div class="grid">
          <van-image class="grid__img" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <text class="grid__text">文字</text>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoryGrid',
  props: {
    gridList: {
      required: true,
      type: Array,
    }, // 宫格列表数据
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/viriables.scss';
.container {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  background-color: #fff;
  &__grid {
    border: 1px dashed #dcebe6;
    .grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      &__img {
        width: 60px;
        height: 60px;
      }
      &__text {
        margin-top: 8px;
        font-size: 24px;
        color: $fontColor;
      }
    }
  }
}
</style>
