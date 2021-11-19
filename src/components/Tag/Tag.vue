<!--
 * @Description: 标签组件
 * @Author: 王振
 * @Date: 2021-11-18 16:15:17
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-18 16:27:13
-->
<template>
  <div class="tag__wrap" @click="OnClickTag">
    <div class="tag">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Tag',
  props: {
    text: {
      type: String,
      default: '',
    }, // 标签文本
  },
  emits: ['onClick'],
  setup(props, { emit }) {
    // 标签点击事件
    const OnClickTag = () => {
      emit('onClick');
    };
    return { OnClickTag };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.tag__wrap {
  display: flex;
  justify-content: center;
  padding: 12px 34px;
  background-color: #f7f7f9;
  border-radius: 32px;
  .tag {
    width: 100%;
    @include ellipsis;
    font-size: 30px;
    color: #272e37;
  }
}
</style>
