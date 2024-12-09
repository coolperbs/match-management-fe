<template>
  <view class="container">
    <view class="search-bar">
      <uv-input placeholder="请输入搜索内容" />
    </view>
    <view class="dropdowns">
      <uv-drop-down ref="dropDown" sign="dropDown_1" :defaultValue="[0, '0', 'all']">
        <uv-drop-down-item name="order" type="2" label="综合排序" value="all"></uv-drop-down-item>
        <uv-drop-down-item name="type" type="2" label="文档格式" value="0"></uv-drop-down-item>
        <uv-drop-down-item name="vip_type" type="1" label="VIP文档" :value="0"></uv-drop-down-item>
      </uv-drop-down>
      <uv-drop-down-popup sign="dropDown_1">
        <view style="width: 750rpx; height: 300rpx; background-color: #fff"></view>
      </uv-drop-down-popup>
    </view>
    <view class="list">
      <uv-list>
        <uv-list-item v-for="item in list" :key="item.id">
          {{ item.name }}
        </uv-list-item>
      </uv-list>
    </view>
    <uni-bottom-nav>
      <uni-bottom-nav-item icon="home" text="首页" />
      <uni-bottom-nav-item icon="person" text="个人中心" />
    </uni-bottom-nav>
  </view>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    const current = reactive(0)
    const list = ref([
      { id: 1, name: '项目1' },
      { id: 2, name: '项目2' },
      { id: 3, name: '项目3' },
      // 更多项目...
    ])
    return {
      list,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: 100vh;
}

.search-bar {
  width: 100%;
  padding: 10px;
}

.dropdowns {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
}

.list {
  width: 100%;
  padding: 10px;
}
</style>
