<template>
	
		<uni-nav-bar left-width="400rpx" right-width="400rpx" class="nav" height="50px" status-bar="true" fixed="true" style="margin-bottom: 0;">
					<template #left class="left-slot">
						<my-avatar class="avatar"></my-avatar>
		<!--				<view class="date" style="font-weight: bold;">
							{{this.month}} 月 {{this.day}} 日
						</view> -->
					</template>
					<template #right class="right-slot">
						<!-- <uni-icons type="upload" class="right-icon" size="26"></uni-icons>
						<view style="width: 10px;" />
						<uni-icons type="settings" size="26"></uni-icons>
						<view style="width: 10px;" />
						<uni-icons type="search" size="26"></uni-icons> -->
						<uni-icons type="closeempty" size="26" @click="goBack"></uni-icons>
					</template>
		</uni-nav-bar>
		
		<view class="middle">
			<view class="scroll-x-wrapper">
				<scroll-view class="scroll-view-x" scroll-x="true">
					<view class="row2">
						<view :class="['chat-manager', 'middle-view']">
		
							<image src="../../static/AIchat2.png" mode="aspectFit"
								style="height: 80%;width: 30%; "></image>
							<view class="vertical-divider" style="background-color: darkgray;">
							</view>
							<p style="font-size: 16px; margin: 0;height: 60%;max-width: 60%;line-height: 1.6;">
								不知道该怎么练? 试试我们的AI健身教练</p>
						</view>
						<view class="statistics middle-view">
		
						</view>
		
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view style="margin-top: 400px;display: flex;">
			<button class="round-button" style="font-size: 12px;margin-top: 18px;margin-left:50px;margin-right: 0;">目标</button>
			<button class="round-button" style="width: 100px;height: 100px;background-color: cornflowerblue;color: #ffffff;">开始</button>
			<button class="round-button" style="font-size: 12px;margin-top: 18px;margin-left:0px;margin-right: 50px;">数据</button>
		</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//返回上一级页面
			goBack() {
			      uni.navigateBack();
			    }
		}
	}
</script>

<style lang="scss">
	.round-button {
		width: 60px;
		height: 60px;
	    border-radius: 50%; 	  /* 将边框半径设置为按钮宽度和高度的一半，即创建一个圆形按钮 */
	    color: black;             /* 按钮背景颜色 */
								  /* 按钮文字颜色 */
	    border: none;             /* 移除边框 */
	    display: flex;
	    justify-content: center;
	    align-items: center;
	  }
	.chat-manager {
		display: flex;
		flex-direction: row;
		align-content: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: center;
		// vertical-align: middle;
	
		image {
			margin: 0;
			padding: 0;
			// vertical-align: middle;
		}
	}
	.vertical-divider {
		height: 50px;
		/* 分割线的高度 */
		width: 2px;
		/* 分割线的宽度 */
	
		margin-right: 5%;
	}
	// 中间块样式
	.middle-view {
		height: 80px;
		width: 400px;
	
		border-radius: 50px;
		margin: 0 0 0 8px;
		/* 两个矩形之间的水平间距 */
		// display: inline-block;
		flex: 0 0 80%;
		background-color: white;
	}
	.scroll-view-x {
		// white-space: nowrap;
		overflow-x: auto;
	}
	// 第二功能栏
	.row2 {
		margin-left: 5px;
		display: flex;
		flex-direction: row;
		height: 115px;
	}

</style>
