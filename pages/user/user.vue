<template>
	<view class="bground">
		<uni-card class="static1" style="height: 400rpx;">

		<view class="card-container1"  style="height: 100rpx;width: 100%; margin-left: 0;" >
			<view>
			<uni-card style="width: 60rpx; height: 100%;padding-right:20% ;">
			</uni-card>
			</view>
			
			<view class="card-contianer11" style="margin-left: 12%;margin-top: 10%; height: 100%;">
			<uni-card class="focus" style="border: none; box-shadow: none;width: 30%;">
			<text style="position: absolute; top: 5rpx;left: 5rpx;">
				关注</text>
			</uni-card>
			<uni-card class="fan"  style="border: none; box-shadow: none;width: 30%;">
			<text style="position: absolute; top: 5rpx;left: 5rpx;">
				粉丝</text>
			</uni-card>
			<uni-card class="like" style="border: none; box-shadow: none;width: 30%;">
			<text style="position: absolute; top: 5rpx;left: 5rpx;">
				获赞</text>
			</uni-card>
			</view>
			
		</view>
		
		<view class="card-container2" style="margin-top: 20%; margin-right: 5%; ">
			<uni-card class="changeInfo" style="height: auto;border-radius: 30px;">
				<text>修改资料</text>
			</uni-card>
			<uni-card class="my2Dcode" style="border-radius: 30px;">
				<text>我的二维码</text>
			</uni-card>
		</view>
		</uni-card>
		
		<uni-card class="statistic2" style="height: 80px;">
			<text><br/><br/>我的订单</text>
			<text>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp我的活动</text>
			<text>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp收藏和赞</text>
			<text>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp我的装备</text>
		</uni-card>
		
		<view class="card-container3" >
		<uni-card class="exercise" style="width:50%; height: 200rpx;margin-right: 0;">
			<text>总运动</text>
		</uni-card>
		
		<uni-card class="information" style="width:50%; height: 200rpx;margin-left: 0;">
			<text>体重</text>
		</uni-card>
		</view>
		
		<uni-card class="album" style="height: 300rpx;">
			<text>动态相册</text>
		</uni-card>
		
	</view>
	
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  methods: {
    }
};
</script>

<style lang="scss">
.card-container1 {
	display: flex;
}
	
.card-contianer11{
	display: flex;
}
.card-container2 {
	display: flex;
}
.card-container3{
	display: flex;
	
}

</style>







