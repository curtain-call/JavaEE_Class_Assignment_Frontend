<template>


	<view class="container">

		<uni-nav-bar left-width="400rpx" right-width="400rpx" class="nav" height="50px" status-bar="true" fixed="true">
			<template #left class="left-slot">
				<my-avatar class="avatar"></my-avatar>
				<view class="date" style="font-weight: bold;">
					{{this.month}} 月 {{this.day}} 日
				</view>
			</template>
			<template #right class="right-slot">

				<uni-icons type="upload" class="right-icon" size="26"></uni-icons>
				<view style="width: 10px;" />
				<uni-icons type="settings" size="26"></uni-icons>
				<view style="width: 10px;" />
				<uni-icons type="search" size="26"></uni-icons>
			</template>
		</uni-nav-bar>


		<scroll-view scroll-y="true" class="scroll-view-y" @scroll="handleScroll">
			<view class="header" :style="{ opacity: headerOpacity }">
				<!-- 横向滑动的 wrapper -->
				
				<view class="calendar-wrapper">
					<!-- 日历 -->
					<view class="calendar" style="mar">
						<uni-calendar :insert="true" :lunar="false" :start-date="'2023-5-22'" :end-date="'2024-3-22'"
							:showMonth="false" :range="false" />
					</view>
				</view>
			</view>

			<view class="middle-down-wrapper">
				<view class="middle">
					<view class="scroll-x-wrapper">
						<scroll-view class="scroll-view-x" scroll-x="true">
							<view class="row2">
								<view :class="['chat-manager', 'middle-view']" @click="chatAI">

									<image src="../../static/AIchat2.png" mode="aspectFit"
										style="height: 80%;width: 30%; "></image>
									<view class="vertical-divider" style="background-color: darkgray;">
									</view>
									<p style="font-size: 16px; margin: 0;height: 60%;max-width: 60%;line-height: 1.6;">
										不知道该怎么练? 试试我们的AI健身教练</p>
								</view>
								<view class="statistics middle-view">
									{{userStore.account}}
								</view>

							</view>
						</scroll-view>
					</view>
				</view>

				<view class="down">
					<view :class="['personal-schedule']" v-if="schedule_today.length > 0">
						<p style="font-size: 16px; margin-bottom: 15px; margin-left: 15px;word-wrap: break-word;
  overflow-wrap: break-word;"> 自选日程 </p>
						<view class="schedule-wrapper">
							<view class="schedule" v-for="(item,index) in schedule_today">
								<view class="vertical-divider divider-schedule"
									:style="{'background-color': this.colors[index]}">
								</view>

								<view class="">
									<p class="item-discription">
										{{item.discription}}
									</p>
									<p v-if="item.time===0" class="content-discription">
										今日暂无训练记录
									</p>
									<p v-else class="content-discription">
										训练 {{item.time}}分钟 · 消耗能量{{item.consume}}千卡
									</p>
								</view>

							</view>
						</view>

					</view>

					<view :class="['recommend-course']">
						<p style="font-size: 16px; margin-bottom: 15px; margin-left: 15px;"> 根据你的运动偏好推荐 </p>
						<view class="recommendation-wrapper">
							<view class="recomendation" v-for="(item,index) in recommendation">
								<image :src="item.imageUrl" mode="aspectFit" style="height: 100%; width: 25%;"></image>
								<view class="" style="margin-left: 15px;">
									<p class="item-discription">{{item.keyword[0]}} · {{item.keyword[1]}}</p>
									<p class="content-discription">{{item.discription}}</p>
								</view>

							</view>
						</view>

					</view>
				</view>
				
				<uni-fab ref="fab" :pattern="pattern" :horizontal="'right'" :vertical="'bottom'" @click="openPopup"></uni-fab>
				<uni-popup ref="addSchedule" class="popup-add-schedule">
					<view class="menu">
						<view class="add-schedule" @click="uni.navigateTo({
							url: '',
							events: {},
							success: ()=>{},
							fail: ()=>{}
						})">
							<uni-icons type="calendar" size="50"></uni-icons>
							<p>创建日程</p>
						</view>
						<view class="add-diet">
							<uni-icons type="compose" size="50"></uni-icons>
							<p>记饮食</p>
						</view>
					</view>
				</uni-popup>
			</view>



		</scroll-view>
		
	</view>





</template>

<script>
	// import avatar from './avatar.vue'
	import {useUserStore} from '@/stores/user.js'
	import {mapStores} from 'pinia'

	export default {
		computed:{
			...mapStores(useUserStore)
		},
		data() {
			return {
				colors: ['green', 'blue', 'purple', 'purple', 'green'],

				// 滚动遮罩效果
				scrollTop: 0,
				headerOpacity: 1,

				// 头像地址
				avatarURl: '',

				// 日期效果
				month: 0,
				day: 0,

				// 日程
				schedule_today: [{
					name: '俯卧撑',
					discription: '自重训练 · 上肢力量',
					time: 10,
					consume: 100,
				}],
				schdule_icon: [],

				// 推荐
				recommendation: [{
					name: '深蹲',
					keyword: ['瘦子增肌', '下半身塑形'],
					imageUrl: '',
					duration: 0,
					discription: '拯救细弱身材，打造完美体魄！'
				}],

				// 悬浮按钮`
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				}
			}
		},
		methods: {
			handleScroll(e) {
				// console.log("be functioning")
				// 获取滚动条当前的位置
				const scrollTop = e.detail.scrollTop;
				// 计算透明度，假设滚动超过100px开始变化，200px完全透明
				let newOpacity = 1;
				if (scrollTop > 70) {
					newOpacity = Math.max(1 - (scrollTop - 70) / 70, 0);
				}
				// 更新透明度
				this.headerOpacity = newOpacity;
			},
			openPopup() {
				this.$refs.addSchedule.open('bottom')
				console.log("openpopup")
			},
			chatAI(){
				console.log("chatAI popup")
				uni.navigateTo({ url:'./chatAI/chatAI' })
			}
		},
		mounted() {
			// console.log("mounted")
			// 拿到当前的时间
			var timeStamp = Date.parse(new Date())
			console.log(timeStamp)
			console.log(this.userStore.account)

			// 后端请求
		},

	};
</script>

<style lang="scss">
	.container {}

	// 状态栏占位
	.zhanwei {
		margin-top: 12%;
		position: sticky;
	}

	// 导航栏样式
	.nav {
		margin-bottom: 5px;
		
		position: relative;
		z-index: 9999;
	}

	.avatar {
		margin-right: 10px;
	}

	.date {
		font-size: 22px;
	}

	.right-icon {}



	// 日历组件样式

	.calendar-wrapper {
		background-color: white;
		padding: 5px;
		margin-bottom: 55px;
		border-radius: 15px;
		margin-left: 10px;
		margin-right: 10px;
		height: 100px;
	}


	// 卡片排列样式
	.row1 {
		margin-left: 5px;
		display: flex;
		flex-direction: row;
		height: 115px;
	}

	.moving-icon {
		height: 50%;
	}

	.discription {
		height: 50%;
		padding-left: 5%;
	}

	// 第二功能栏
	.row2 {
		margin-left: 5px;
		display: flex;
		flex-direction: row;
		height: 115px;
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

	.rounded-rectangle {
		height: 110px;
		/* 您想要的高度 */
		width: 80%;
		/* 根据需要设置宽度，留出间隙 */
		border-radius: 15px;
		/* 圆角大小 */
		margin: 0 0 0 8px;
		/* 两个矩形之间的水平间距 */
		// box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影样式 */
		display: inline-block;
		/* 使元素保持在同一行 */
		flex: 0 0 45%;
	}

	.scroll-view-x {
		// white-space: nowrap;
		overflow-x: auto;
	}

	.green {
		background-color: #4CAF50;
		/* 绿色 */
	}

	.blue {
		background-color: #2196F3;
		/* 蓝色 */
	}

	.purple {
		background-color: mediumpurple;
	}


	// 滚动遮罩效果
	.scroll-view-y {
		height: 700px;
		/* 设置滚动视图的高度 */
	}

	.header {
		position: sticky;
		top: 0;
		/* 使头部粘贴到顶部 */
		transition: opacity 0.3s;
		/* 平滑过渡效果 */
		/* 设置头部的其他样式 */
		height: 300px;
		margin-bottom: 5px;
		// z-index: 9999;
	}


	.middle-down-wrapper {
		padding-top: 15px;
		height: 700px;
		width: 100%;
		background-color: #F8F8F8;
position: relative;
		z-index: 9998;
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



	//底部块样式
	.down {}

	.personal-schedule {
		// height: 90px;
	}

	.schedule-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content: center;

	}

	.schedule {
		background-color: white;
		padding: 5px;
		border-radius: 15px;
		height: 80px;
		width: 90%;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;

		.divider-schedule {
			width: 4px;
			border-radius: 500px;
			margin-left: 5%;
		}

		.item-discription {
			font-size: 16px;
			width: 100%;
			margin-bottom: 5px;
		}

		.content-discription {
			font-size: 12px;
			color: darkgrey;
		}
	}

	.recommend-course {
		// height: 90px;
	}

	.recommendation-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content: center;
	}

	.recomendation {
		background-color: white;
		padding: 5px;
		border-radius: 15px;
		height: 80px;
		width: 90%;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;

		.item-discription {
			font-size: 16px;
			width: 100%;
			margin-bottom: 5px;
		}

		.content-discription {
			font-size: 12px;
			color: darkgrey;
		}
	}

	.popup-add-schedule {
		height: 80px;
		width: 100%;

		.menu {
			height: 120px;
			border-radius: 15px 15px 0 0;
			background-color: white;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;


			.add-schedule {
							margin: 10px;
				border-color: grey;
				border-width: 4px;
				border-radius: 20px;

				width: 40%;
				height: 80%;
				
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}

			.add-diet {
							margin: 10px;
				border-color: grey;
				border-width: 4px;
				border-radius: 20px;
				width: 40%;
				height: 80%;
				
				display: flex;
				flex-direction: column;
				align-items: center;
								justify-content: center;
			}
		}
	}
</style>