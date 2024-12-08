<template>
  <view>
    <form action=""></form>
    <button @click="createBasicInfo">下一步</button>
  </view>
</template>

<script>
const createBasicInfo = ()=>{
  uni.navigateTo({
    url: '/pages/projectGroupCreate/projectGroupCreate'
  })
}
</script>