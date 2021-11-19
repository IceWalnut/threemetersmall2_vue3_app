<!--
 * @Description: 搜索页面
 * @Author: 王振
 * @Date: 2021-11-18 15:55:51
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-18 16:39:32
-->
<template>
  <div class="search">
    <!-- 顶部搜索框 开始 -->
    <van-search v-model="keyword" placeholder="搜索商品" />
    <!-- 顶部搜索框 结束 -->

    <!-- 历史搜索 开始 -->
    <tag-group header-text="热门搜索" btn-text="换一批"></tag-group>
    <!-- 历史搜索 结束 -->

    <!-- 热门搜索 开始 -->
    <tag-group :value="historySearch" header-text="历史搜索" btn-text="清空"></tag-group>
    <!-- 热门搜索 结束 -->
  </div>
</template>

<script lang="ts">
import TagGroup from '@/components/TagGroup/TagGroup.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Search',
  components: { TagGroup },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
