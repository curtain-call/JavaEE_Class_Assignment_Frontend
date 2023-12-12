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
	
	<view style="margin-left: 5%;">
		<view style="margin-top: 5%;">
			<text style="color:darkgrey;font-size: 14px;">时长</text>
			<text style="color:darkgrey;font-size: 14px;margin-left: 57%;">2018年至2023年</text>
		</view>
		<view style="margin-top: 2%;">
			<text style="font-size: 30px;font-weight: bold;">{{this.sportsTime}}</text>
			<text style="color:darkgrey;font-size: 14px;margin-left: 2%;">分钟</text>
		</view>
		
		<view style="margin-top: 50rpx;display: flex;">
			<view style="width: 24%;color:darkgrey;font-size: 14px;"><text>
				消耗（千卡）<br><br></text>
			<text style="font-weight: bold;font-size: 18px;color: black;">
				{{this.consume}}</text></view>
		<view class="vertical-divider" style="background-color: lightgrey;"></view>
		<view style="width: 20%;color:darkgrey;font-size: 14px;"><text>
			完成（次）<br><br></text>
		<text style="font-weight: bold;font-size: 18px;color: black;">
			100</text></view>
		<view class="vertical-divider" style="background-color: lightgrey;"></view>
		<view style="width: 20%;color:darkgrey;font-size: 14px;"><text>
			累计（天）<br><br></text>
		<text style="font-weight: bold;font-size: 18px;color: black;">
			66</text></view>
		<view class="vertical-divider" style="background-color: lightgrey;"></view>
		<view style="width: 20%;color:darkgrey;font-size: 14px;"><text>
			连续（天）<br><br></text>
		<text style="font-weight: bold;font-size: 18px;color: black;">
			8</text></view>
		</view>
	</view>
	
	<!-- 运动统计表 -->
	<!-- <view style="margin-top: 5%;">
		<uni-card>折线图</uni-card>
	</view> -->
	
	<!-- 运动视频 -->
	<view>
		<video
			src="../../../../static/video/11月29日.mp4" style="width: 100%; height: 300px;"
		></video>
	</view>
	
	<!-- 运动报告 -->
	<view style="margin-left: 4%;margin-right: 4%;">
		<view style="margin-top: 8%;display: flex;width: 100%;" v-for="(item,index) in schedule_today1">
			<view style="width: 50%;">
				<text style="font-size: 15px;color: dimgrey;">{{item.name}} {{item.count}}×{{item.group}} 次</text><br>
				<text style="font-size: 12px;color: grey;">用时 {{item.time}}分钟    消耗 {{item.consume}} 千卡</text>
			</view>
			<view style="margin-left: 35%;">
				<text style="font-size: 12px;color: lightgrey;margin-top: 3%;">{{item.date}}</text>
			</view>
		</view>
		
		<view class="divider" style="background-color: lightgrey;"></view>
		<view style="margin-top: 8%;display: flex;width: 100%;" v-for="(item,index) in schedule_today2">
			<view style="width: 50%;">
				<text style="font-size: 15px;color: dimgrey;">{{item.name}} {{item.count}}×{{item.group}} 次</text><br>
				<text style="font-size: 12px;color: grey;">用时 {{item.time}}分钟    消耗 {{item.consume}} 千卡</text>
			</view>
			<view style="margin-left: 35%;">
				<text style="font-size: 12px;color: lightgrey;margin-top: 3%;">{{item.date}}</text>
			</view>
		</view>
		<view class="divider" style="background-color: lightgrey;"></view>
		
		<view style="margin-top: 8%;display: flex;justify-content: center;">
			<text style="color: limegreen; font-size: 14px;">查看更多记录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//累计运动时长（分钟）
				sportsTime:1218,
				
				//累计运动消耗（千卡）
				consume:8.344,
				
				//Today日程 1
				schedule_today1: [{
					name: '俯卧撑',
					discription: '自重训练 · 上肢力量',
					time: 30,
					consume: 80,
					count: 20,           //每组次数
					group:3,             //组数
					date:'12月10日',     //Today日期
				}],
				
				//Today日程 2
				schedule_today2: [{
					name: '深蹲',
					discription: '自重训练 · 下肢力量',
					time: 25,
					consume: 110,
					count: 12,           //每组次数
					group:3,             //组数
					date:'12月11日',     //Today日期
				}],
			}
		},
		methods: {
			//返回上一级页面
			goBack() {
			      uni.navigateBack();
			    },
		}
	}
</script>

<style lang="scss">
	body{
		background-color: white;
	}
	
	//分割线
	.vertical-divider {
		height: 56px;
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
