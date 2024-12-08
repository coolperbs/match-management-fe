<template>
  <view class="item-wrapper">
    <view class="image">image</view>
    <view class="name" @click="toMatchInfo">toMatchInfo</view>
    <view class="time">time</view>
    <view class="address">address</view>

    <view class="image">image</view>
    <view class="name" @click="toMatchInfo">toCreateMatch</view>
    <view class="time">time</view>
    <view class="address">address</view>
  </view>
</template>

<script setup lang="ts">
const toMatchInfo = () => {
  uni.navigateTo({
    url: '/pages/matchInfo/matchInfo',
  })
}

const toCreateMatch = () => {
  uni.navigateTo({
    url: '/pages/createMatch/createMatch',
  })
}
</script>
