<template>
  <view class="page-wrapper h-screen w-screen flex flex-col">
    <view class="page-top h-20 w-100 bg-blue-500">
      <view class="flex justify-center">搜索框</view>
      <view class="flex justify-center">过滤器</view>
    </view>
    <view class="page-main flex-grow w-100 bg-yellow-500">
      <Item></Item>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 系统首页，显示所有比赛
import Item from './component/matchCard.vue'
// 需要有搜索接口
</script>
