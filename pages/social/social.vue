<template>
	<!-- 搜索框 -->
		 <view class="search-bar">
			 <view class="search-bar-box">
			 <input type="text" value=""  placeholder="请输入搜索内容" class="search-text" maxlength="10" focus/>
			 <button class="search-btn">搜索</button>
			 </view>
		 </view>
	

	<view>
		<uni-card>
			精选、跟练、晒奖牌、跑步分享
		</uni-card>
	</view>
	
	<view class="share">
		<uni-card class="item" style="height: 400rpx;"></uni-card>
		<uni-card class="item" style="height: 320rpx"></uni-card>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	// 搜索框
	.search-bar{
		width: 100%;
		height: 100rpx;
		margin-top: 2%;
	}
	.search-bar-box{
		display: flex;
		margin: 0 auto;
		width: 620rpx;
		height: 70rpx;
		border:5rpx solid #00a8cc;
		border-radius: 50rpx;
	}
	.search-text{
		width: 100%;
		margin-top: 10rpx;
		margin-left: 20rpx;
		font-size: 30rpx;
		color: #7f7f81;
	}
	.search-btn{
		background-color: #00a8cc; /* Green */
		color: white;
		text-align: center;
		display: inline-block;
		font-size: 35rpx;
		width: 240rpx;
		height: 70rpx;
		line-height: 65rpx;
		border-radius: 30rpx;
		letter-spacing: 3rpx;
	}

.share{
	width: 98%;
	display: flex;
	flex-wrap: wrap;
	 justify-content: flex-start; // 替代原先的space-between布局方式
	}
	.item{
	// 每个item
	      flex: 1;
	      height: 120px;
	      margin: 0 5px 5px 0; // 间隙为5px
	      background-color: #fff;
	      width: calc(
	        (100% - 5px) / 2
	      ); // 这里的10px = (分布个数2-1)*间隙5px, 可以根据实际的分布个数和间隙区调整
	      min-width: calc((100% - 5px) / 2); // 加入这两个后每个item的宽度就生效了
	      max-width: calc((100% - 5px) / 2); // 加入这两个后每个item的宽度就生效了
	      &:nth-child(2n+2) {
	        // 去除第2n个的margin-right
	        margin-right: 0;
	      }
	}
</style>
