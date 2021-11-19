<!--
 * @Description: 标签分组组件
 * @Author: 王振
 * @Date: 2021-11-18 16:10:57
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-18 16:38:47
-->
<template>
  <div class="tag__group__wrap">
    <!-- 分组标题，按钮 开始 -->
    <div class="tag__group__header">
      <div class="header__text">{{ headerText }}</div>
      <div class="header__btn" @click="onBtnClick">{{ btnText }}</div>
    </div>
    <!-- 分组标题，按钮 结束 -->

    <!-- 分组标签 开始 -->
    <div class="tag__group">
      <div class="tag__group__inner" v-for="(item, index) in value" :key="index">
        <tag :text="item" @onClick="onTagClick(item, index)"></tag>
      </div>
    </div>
    <!-- 分组标签 结束 -->
  </div>
</template>

<script lang="ts">
import Tag from '@/components/Tag/Tag.vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TagGroup',
  components: { Tag },
  props: {
    headerText: {
      type: String,
    }, // 标题文本
    btnText: {
      type: String,
    }, // 按钮文本
    value: {
      type: Array as PropType<string[]>,
    }, // 标签数据
  },
  emits: ['onTagClick', 'onBtnClick'],
  setup(props, { emit }) {
    // 标签点击事件
    const onTagClick = (text: string, index: number) => {
      emit('onTagClick', text, index);
    };
    // 按钮点击事件
    const onBtnClick = () => {
      emit('onBtnClick');
    };
    return { onTagClick, onBtnClick };
  },
});
</script>

<style lang="scss" scoped>
.tag__group__wrap {
  margin-top: 30px;
  .tag__group__header {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    line-height: 40px;
    font-size: 30px;
    .header__text {
      color: #333;
    }
    .header__btn {
      color: #3696ef;
    }
  }
  .tag__group {
    display: flex;
    flex-flow: row wrap;
    padding: 8px 20px 0 20px;
    &__inner {
      padding: 24px 12px 0 12px;
    }
  }
}
</style>
