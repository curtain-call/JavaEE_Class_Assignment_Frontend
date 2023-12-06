<template>
  <view class="avatar-container">
    <image class="avatar" :src="avatarUrl" mode="aspectFill" />
  </view>
</template>

<script>
export default {
	name:'myAvatar',
  props: {
    avatarUrl: {
      default: '../../static/uni.png' // 默认头像图片路径
    }
  }
}
</script>

<style>
.avatar-container {
  /* 容器大小，确保宽高一致 */
  width: 35px; /* 或者其他尺寸 */
  height: 35px; /* 或者其他尺寸 */
  border-radius: 50%; /* 创建圆形效果 */
  overflow: hidden; /* 隐藏超出容器部分的图片 */
  margin-top: 5px 
}

.avatar {
  width: 35px; /* 填满容器 */
  height: 35px; /* 填满容器 */
}
</style>
