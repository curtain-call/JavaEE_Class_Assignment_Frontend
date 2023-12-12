<template>
	<view class="gradient-background" style="height: 100%;">	
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
	
	<view>
		<uni-card class="vertical" style="height: 416rpx;border-radius: 8px;">
			<view @click="goTosportReport">
				<view><text style="color: black;font-size: 14px;">运动记录</text></view>
				<view style="margin-top: 5%;"><text style="font-weight: bold;font-size: 36px;color: black;">{{this.sportsTime}}</text>
						<text style="color: black;margin-left: 1%;">分钟</text>
						<uni-icons  type="right" color="lightgrey" style="margin-left: 57%;"></uni-icons>
				</view><view class="divider" style="background-color: lightgrey;"></view>
			</view>
			<view>
				<image src="../../../static/日历.png" style="width: 20px;height: 20px;margin-top: 3rpx"></image>
				<text style="color: limegreen;margin-left: 10rpx;">今日运动</text>
				<uni-icons type="right" style="color: lightgray;margin-left: 420rpx;"></uni-icons></view>
			<view style="display: flex;margin-top: 2%;">
				<view>
					<text style="font-size: 12px;margin-bottom: 3px;">运动时长</text><br>
					<text style="font-weight: bold;font-size: 24px;color: black;">26</text><text style="color: black;margin-left: 5rpx;font-size: 12px;">分钟</text>
				</view>
				<view style="margin-left: 36%;">
					<text style="font-size: 12px;">运动消耗</text><br>
					<text style="font-weight: bold;font-size: 24px;color: black;">67</text><text style="color: black;margin-left: 5rpx;font-size: 12px;">千卡</text>
				</view>
			</view><view class="divider" style="background-color: lightgrey;"></view>
			<view style="display: flex;margin-top: 3px;">
				<image src="../../../static/交换 (limegreen).png" style="width: 16px;height: 20px;"></image>
				<text style="font-size: 12px;margin-left: 8px;">运动数据同步</text>
				<uni-icons type="right" style="color: lightgray;margin-left: 204px;"></uni-icons>
			</view>
			
		</uni-card>
	</view>
	
	<view class="vertical">
		<uni-card class="vertical" style="height: 400rpx;border-radius: 8px;">
			<view >
				<image src="../../../static/体重.png" style="width: 30rpx;height: 30rpx;"></image>
				<text style="margin-left: 6rpx;font-size: 14px;color: limegreen;">
					身高体重</text>
				<text style="color: limegreen;font-size: 14px;margin-left: 265rpx;margin-right: 0;">自动同步数据</text>
				<uni-icons type="right" style="color: limegreen;margin-bottom: 0;"></uni-icons>
			</view>
			<view style="margin-top: 3%;">
				<text style="font-size: 12px;">体重</text>
			</view>
			<view>
				<text style="font-size: 24px;font-weight: bold;color: black;">{{this.weight}}</text>
				<text style="color: black;font-size: 14px;">公斤</text>
				<uni-icons type="right" style="color: lightgrey;margin-left: 70%;"></uni-icons>	
			</view>
			<view style="margin-top: 50rpx;display: flex;">
				<view style="width: 33%;"><text>
					BMI<br></text>
				<text style="font-weight: bold;">
					{{this.BMI}}</text></view>
			<view class="vertical-divider" style="background-color: lightgrey;"></view>
			<view style="width: 33%;"><text>
				体脂率<br></text>
			<text style="font-weight: bold;">
				{{this.bodyFat}}%</text></view>
			<view class="vertical-divider" style="background-color: lightgrey;"></view>
			<view style="width: 30%;"><text>
				身高<br></text>
			<text style="font-weight: bold;">
				{{this.height}}厘米</text></view>
			</view>
		</uni-card >
	</view>
	
	<view>
	<uni-card class="vertical" style="height: 800rpx;border-radius: 8px;">
		<view>
			<text>
				运动报告</text>
		</view>
	</uni-card>
	</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//用户信息
				name:'AICoach体验官',
				like:0,
				fan:0,
				focus:1,
				weight:74.7,      //体重
				height:182.7,     //身高
				BMI:18.9,
				bodyFat:16.8,     //体脂率
				
				//累计运动时长
				sportsTime:1218,
				
				//运动消耗（千卡）
				consume:8.344,
			}
		},
		methods: {
			//返回上一级页面
			goBack() {
			      uni.navigateBack();
			    },
			goTosportReport(){
					uni.navigateTo({
			          url: '/pages/user/bodyData/sportReport/sportReport'
			        });
			},
		}
	}
</script>

<style lang="scss">
	//背景色渐变
	.gradient-background{
		background: linear-gradient(to bottom, #9370d8, #f0f8ff);
		height: 600px; /* 100% 视窗高度，使渐变背景充满整个页面 */
		
	}
	
	//纵向排列
	.vertical {
	    display: flex;
	    flex-direction: column;
	  }
	  
	//分割线
	.vertical-divider {
		height: 50px;
		/* 分割线的高度 */
		width: 1px;
		/* 分割线的宽度 */
		margin-right: 5%;
	}
	
	//水平分割线
	.divider{
		height: 0.5px;
		width:100%;
		margin-top: 2%;
		margin-bottom: 2%;
	}
</style>
