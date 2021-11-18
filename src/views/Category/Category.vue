<!--
 * @Description: 分类页面
 * @Author: 王振
 * @Date: 2021-11-18 14:35:39
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-18 15:47:58
-->
<template>
  <div class="category">
    <!-- 搜索框 开始 -->
    <div class="category__search">
      <van-search placeholder="搜索商品" />
    </div>
    <!-- 搜索框 结束 -->

    <!-- 分类 开始 -->
    <div class="category__main">
      <!-- 一级类别 开始 -->
      <div class="category__main__left">
        <ul class="left__total">
          <li>分类一</li>
        </ul>
      </div>
      <!-- 一级类别 结束 -->

      <!-- 二级类别 开始 -->
      <section class="category__main__right">
        <div class="right__total">
          <!-- banner图片 -->
          <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" class="right__banner" />
          <div class="right__title">- 全部分类 -</div>
          <div>
            <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="(item, index) in 6" :key="index">
                <div class="right__grid">
                  <van-image width="60" height="60" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                  <text class="right__grid__text">手机数码</text>
                </div>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </section>
      <!-- 二级类别 结束 -->
    </div>
    <!-- 分类 结束 -->
  </div>

  <!-- 底部tab 开始 -->
  <bottom-tabs :currentIndex="1"></bottom-tabs>
  <!-- 底部tab 结束 -->
</template>

<script lang="ts">
import BottomTabs from '@/components/BottomTabs/BottomTabs.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Category',
  components: { BottomTabs },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/viriables.scss';
.category {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 100px;
  right: 0;
  background-color: $bgColor;
  &__main {
    &__left {
      position: absolute;
      top: 112px;
      bottom: 0;
      overflow-y: scroll;
      width: 30%;
      background: #f6f6f9;
      .left__total {
        padding-bottom: 120px;
        .left-active {
          background: #fff;
          position: relative;
          color: $themeColor;
        }

        li {
          padding: 30px 8px;
          box-sizing: border-box;
          font-size: 28px;
          text-align: center;
          border-bottom: 1px solid #ececec;
        }
      }
    }
    &__right {
      width: 70%;
      background: #fff;
      position: absolute;
      margin-left: 3px;
      right: 0;
      top: 112px;
      bottom: 0;
      overflow-y: scroll;
      .right__total {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 120px;
        .right__banner {
          margin-top: 16px;
          width: 510px;
          height: 200px;
        }
        .right__title {
          margin: 30px auto;
          font-size: 24px;
          color: #999999;
        }
        .right__grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          &__text {
            margin-top: 10px;
            font-size: 26px;
            color: $fontColor;
          }
        }
      }
    }
  }
}
</style>
