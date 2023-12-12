<template>
		<uni-nav-bar left-width="400rpx" right-width="400rpx" class="nav" height="50px" status-bar="true" fixed="true">
			<template #left class="left-slot">
				<my-avatar class="avatar"></my-avatar>
<!--				<view class="date" style="font-weight: bold;">
					{{this.month}} 月 {{this.day}} 日
				</view> -->
			</template>
<!--			<template #right class="right-slot">
		
				<uni-icons type="upload" class="right-icon" size="26"></uni-icons>
				<view style="width: 10px;" />
				<uni-icons type="settings" size="26"></uni-icons>
				<view style="width: 10px;" />
				<uni-icons type="search" size="26"></uni-icons>
			</template> -->
		</uni-nav-bar>
		
		<view class="bground" style="height: 150rpx;">
			<button plain="true" size="mini" style="position: absolute;left: 480rpx;color: white;background-color: rebeccapurple;border-radius: 20px;border: none;">
				<uni-icons type="arrow-up" color="white" size="15"></uni-icons>
				<text>点击更换封面</text>
				</button>
		</view>
		
		<scroll-view scroll-y="true" class="scroll-view-y">
			<uni-card>
		
		<view class="card-container1"  style="display: flex;height: 100rpx;width: 100%; margin-left: 0;" >
			<view style="width: 240rpx; height: 400rpx;">
			
			<!-- <uni-icons type="starhalf" size="50" style="margin-left: 40rpx;"></uni-icons> -->
			<image class="profile-image" src="../../static/selected_user.png"></image>
			<br><text style="font-weight: bold;width: 200rpx;">
				{{this.name}}</text>
			</view>
			<view style="">	
			<text style="margin-left: 60rpx; font-weight: bold;">
				关注&emsp;&emsp;粉丝&emsp;&emsp;获赞<br>
				&emsp;&emsp;&emsp;&ensp;{{this.focus}}&emsp;&emsp;&emsp;&ensp;{{this.fan}}&emsp;&emsp;&emsp;&ensp;{{this.like}}
			</text>
			</view>
		</view>
			
		<view style="margin-top: 20rpx;">
			<text style="color: lightgray;">{{this.joinTime}}加入AICoach&ensp;|&ensp;IP属地：{{this.IP}}</text>
		</view>
		<view class="card-container2"  style="align-items: center;;display: flex;margin-top: 30rpx;margin-bottom: 50rpx;">
			<button class="changeInfo" size="mini" style="width: 200rpx;background-color:lavender;border-radius: 15px;border: none;margin: 0;">
				<text style="font-size:12px">修改资料</text>
			</button>
			<button class="my2Dcode" size="mini" style="width: 200rpx;background-color:lavender;border-radius: 15px;border: none;">
				<text>我的二维码</text>
			</button>
			<button class="round-button" style="background-color: lavender;">
				<uni-icons type="redo"></uni-icons>
			</button>
		</view>
		
		
		<view style="display: flex;margin-bottom: 40rpx;">
			<button size="mini" style="width: 33%;display: flex;flex-direction: column;background-color: transparent; ">
				<uni-icons type="fire-filled" size=24></uni-icons>
				<text style="font-size: 12px;margin-top: 0;">我的活动</text>
			</button>
			<button size="mini" style="width: 33%;display: flex;flex-direction: column;background-color: transparent; ">
				<uni-icons type="star-filled" size=24></uni-icons>
				<text style="font-size: 12px;margin-top: 0;">我的收藏</text>
			</button>
			<button size="mini" style="width: 33%;display: flex;flex-direction: column;background-color: transparent; ">
				<uni-icons type="headphones"  size=24></uni-icons>
				<text style="font-size: 12px;margin-top: 0;">我的设备</text>
			</button>
		</view>

		
		
			<view style="display: flex;margin: 0;height: 300rpx;">
				<!-- 总运动 -->
				<button style="margin: 0;width: 300rpx;height: 100%;background-color: transparent;border: none;">					
					<view style="display: flex;">
					<image src="../../static/闪电.png" style="width: 30rpx;height: 30rpx;margin-top: 26rpx;"></image>
					<text style="font-size: 14px;color: rebeccapurple;margin-top:10rpx;margin-left: 8rpx;">
						总运动</text>
					<uni-icons type="right" style="color: lightgrey;margin-left: 90rpx;margin-top: 5rpx;"></uni-icons>
					</view>
					<text style="font-weight: bold;font-size: 24px;margin-right: 5rpx;">{{this.sportsTime}}</text>
						<text style="font-size: 12px;margin-right: 80rpx">分钟</text>
					<text style="font-size: 10px;color: darkgrey;margin-right: 70rpx;">
					本周消耗{{this.consume}}千卡</text>
					
				</button>
				<!-- 体重 -->
				<button @click="goTobodyData" style="margin:0;width:300rpx;height: 100%;background-color: transparent;border:none;">
					<image src="../../static/体重.png" style="width: 30rpx;height: 30rpx;"></image>
					<text style="font-size: 14px;color: limegreen;">
						体重</text>
					<uni-icons type="right" style="color: lightgrey;margin-left: 90rpx;"></uni-icons>
					<br><text style="font-weight: bold;font-size: 24px;margin-right: 5rpx;">{{this.weight}}</text>
						<text style="font-size: 12px;margin-right: 80rpx">千克</text>
						<text style="font-size: 10px;color: darkgrey;margin-right: 70rpx;">
						上次记录{{this.record}}天前</text>
				</button>
			</view>
		
		
		<button class="album" style="height: 500rpx;margin-top: 40rpx;;margin-left: 0;margin-right: 0;background-color: transparent;">
			<view style="display: flex;">
			<image src="../../static/相册.png" style="width: 60rpx;height: 60rpx;margin-top: 15rpx;"></image>
			<text style="font-size: 14px;color:pink;margin-left: 10rpx;margin-top: 12rpx;">动态相册</text>
			</view>
		</button>
		
		</uni-card>
		</scroll-view>
	
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
		weight:74.7,
		
		//IP属地
		IP:'武汉',
    
		//加入时间
		joinTime:'2018.12.13',
		
		//累计运动时长
		sportsTime:1218,
		
		//运动消耗（千卡）
		consume:0,
		
		//上次登录时间（xxx天前）
		record:39,
    };
  },
  methods: {
		goTobodyData(){	
			uni.navigateTo({
	          url: '/pages/user/bodyData/bodyData'
	        });
    }
	}
};
</script>

<style lang="scss">
	body{
		background-color: mediumpurple;
	}

		//圆形按钮
		.round-button {
			width: 40px;  /* 设置按钮的宽度 */
			height: 40px; /* 设置按钮的高度 */
			border-radius: 50%; /* 将按钮的边框半径设置为50%，使其变成圆形 */
			// background-color: lavender; /* 设置按钮的背景色，可根据需要调整颜色值 */
			display: flex;
			justify-content: center;
			align-items: center;
			border: none; /* 移除按钮的边框 */
		}
		
		//用户头像
		.profile-image {
		    width: 60rpx; /* 使图片充满边框容器 */
		    height: 60rpx; /* 使图片充满边框容器 */
		    object-fit: cover; /* 保持图片宽高比并填充整个容器 */
			margin-left: 50rpx;
		  }
		
		//纵向排列
		.vertical {
		    display: flex;
		    flex-direction: column;
		  }
</style>







