<!--
 * @Description: 价格组件
 * @Author: 王振
 * @Date: 2021-11-16 15:51:59
 * @LastEditors: 王振
 * @LastEditTime: 2021-11-17 14:26:48
-->
<template>
  <div class="price__container" :style="{ color: delColor ? delColor : color }">
    <!-- 设置价格单位 开始 -->
    <text
      :style="{
        color: unitColor ? unitColor : color,
        fontSize: unitSize ? unitSize : size + 'px',
        fontWeight: unitBold ? unitBold : bold,
      }"
    >
      {{ unit }}
    </text>
    <!-- 设置价格单位 结束 -->

    <!-- 设置价格 开始 -->
    <text
      :style="{
        color: valueColor ? valueColor : color,
        fontSize: valueSize ? valueSize : size + 'px',
        fontWeight: valueBold ? valueBold : bold,
      }"
    >
      <text>{{ priceInteger }}</text>
      <text>
        {{ priceDecimal ? '.' : '' }}
      </text>
      <text>
        {{ priceDecimal ? priceDecimal : '' }}
      </text>
    </text>
    <!-- 设置价格 结束 -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

/**
 * @description: 格式化价格数据
 * @param {string} value 设置价格内容
 * @param {string} mode 设置价格内容类型
 * @param {boolean} autofix 是否开启自动补零
 * @param {number} reserveDigit 设置价格小数保留位数
 */
const useFormatPrice = (value: string, mode: string, autofix: boolean, reserveDigit: number) => {
  const priceInteger = ref<string | null>('0'); // 价格整数部分
  const priceDecimal = ref<string | null>('00'); // 价格小数部分

  // 设置价格
  const setPrice = (price: string[]) => {
    if (price.length === 1) {
      priceInteger.value = price[0];
    } else if (price.length === 2) {
      priceInteger.value = price[0];
      priceDecimal.value = price[1];
    } else {
      console.error('price 格式有误，请仔细检查！');
    }
  };

  const reserveNumber = () => {
    // 初始化价格数据
    priceInteger.value = null;
    priceDecimal.value = null;
    const countToNumber = Number(value);
    const isText = isNaN(Number(countToNumber)) || mode === 'text'; // 判断价格内容类型
    if (isText && autofix) {
      // 价格内容类型为文本类型且开启自动补零
      const result = countToNumber.toFixed(reserveDigit);
      const price = result.toString().split('.');
      setPrice(price);
    } else {
      const price = value.split('.');
      setPrice(price);
    }
  };

  watchEffect((value) => reserveNumber()); // 监听父组件传递的value值的变化

  return { priceInteger, priceDecimal };
};

export default defineComponent({
  name: 'Price',
  props: {
    unit: {
      type: String,
      default: '￥',
    }, // 设置价格单位
    unitColor: String, // 设置价格单位颜色
    unitSize: String, // 设置价格单位大小（单位px）
    unitBold: [String, Number], // 设置价格单位字体粗细
    size: {
      type: String,
      default: '14',
    }, // 设置价格整体字体大小
    color: {
      type: String,
      default: '#d81616',
    }, // 设置价格整体颜色
    bold: {
      type: String,
      default: '500',
    }, // 设置价格整体字体粗细
    value: {
      type: String,
      default: '0.00',
    }, // 设置价格内容
    valueColor: String, // 设置价格单位颜色
    valueSize: String, // 设置价格数字大小（单位px）
    valueBold: [String, Number], // 设置价格字体粗细
    deleted: Boolean, // 价格是否为删除态
    delColor: String, // 删除态价格删除线颜色
    reserveDigit: {
      type: Number,
      default: 2,
    }, // 设置价格小数保留位数
    autofix: {
      type: Boolean,
      default: false,
    }, // 是否开启自动补零
    mode: {
      type: String,
      default: 'text',
    }, // 设置价格内容类型
  },

  setup(props) {
    const { priceInteger, priceDecimal } = useFormatPrice(
      props.value,
      props.mode,
      props.autofix,
      props.reserveDigit
    ); // 获取价格
    return { priceInteger, priceDecimal };
  },
});
</script>

<style lang="scss" scoped>
.price__container {
  display: inline-block;
  text-align: center;
  color: #d81616;
  font-size: 14px;
}
.price-del {
  text-decoration: line-through !important;
}
</style>
