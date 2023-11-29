<template>
	<uni-card class="item">
		跑步、行走、骑行
	</uni-card>
	
	<view class="bground">
		<view class="calendar" style="mar">
			<uni-calendar 
			:insert="true"
			:lunar="true" 
			:start-date="'2023-5-22'"
			:end-date="'2024-3-22'"
			@change="change"
			 />
		</view>
	</view>
	
	<uni-card class="preference">
		运动偏好推荐</uni-card>
</template>

<style lang="scss">
.calendar{
	margin-top: 10%;
	margin-bottom: 10%;
}
.preference{
	height: 300rpx;
}
.item{
	height: 120rpx;
}
</style>