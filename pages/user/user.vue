<template>
	<view class="bground">
		<uni-card class="static1" style="height: 400rpx;">

		<view class="card-container1"  style="height: 100rpx;width: 100%; margin-left: 0;" >
			
			<view>
			<button>头像</button>
			</view>
			
			<view class="btn-contianer" style="margin-left: 12%;margin-top: 5%; ;height: 100%;">
			<button class="focus" @tap="handleButtonClick" >
			<text>关注</text><br>
			<text>0</text>
			</button>
			<button class="fan"  @tap="handleButtonClick" >
			<text>粉丝</text><br>
			<text>0</text>
			</button>
			<button class="like" @tap="handleButtonClick" >
			<text>获赞</text><br>
			<text>0</text></button>
			</view>
			
		</view>
		
		<view class="card-container2" style="margin-top: 20%; margin-right: 5%; ">
			<button class="changeInfo" type="default" plain>
				<text>修改资料</text>
			</button>
			<button class="my2Dcode" type="default" plain>
				<text>我的二维码</text>
			</button>
		</view>
		</uni-card>
		
		<view class="card-container3" style="height: 80px;margin: 0%;">
			<button class="activity" type="primary" plain>
				<text>我的活动</text>
			</button>
			<button class="praise" type="primary" plain>
				<text>收藏和赞</text>
			</button>
			<button class="facility" type="primary" plain>
				<text>我的设备</text>
			</button>
		</view>
		
		<view class="card-container4" >
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
	  handleButtonClick() {
	        // 处理按钮点击事件的逻辑
	        console.log('按钮被点击了');
	      }
    }
};
</script>

<style lang="scss">
.card-container1 {
	display: flex;
}
	
.btn-contianer{
	display: flex;
	margin-left: 12%;
	margin-top: 5%; 
	height: 100%;
	width: 300px;
}
.card-container2 {
	display: flex;
	align-items: center;
}
.card-container3{
	display: flex;
}
.card-container4{
	display: flex;
}

.focus{
	font-size: 12px;
	
	
}
.fan{
	font-size: 12px;
}
.like{
	font-size: 12px;
}
.changeInfo{
	margin-left: 10%;
}
.my2Dcode{
	
}
.praise{
	margin:0;
}

</style>







