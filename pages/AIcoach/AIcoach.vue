<template>
	<view>
		<uni-nav-bar left-width="400rpx" right-width="400rpx" class="nav" height="50px" status-bar="true" fixed="true">
			<template #left class="left-slot">
				<my-avatar class="avatar"></my-avatar>
<!-- 				<view class="date" style="font-weight: bold;">
					{{this.month}} 月 {{this.day}} 日
				</view> -->
			</template>
			<template #right class="right-slot">

				<uni-icons type="upload" class="right-icon" size="26"></uni-icons>
				<view style="width: 10px;" />
				<uni-icons type="settings" size="26"></uni-icons>
				<view style="width: 10px;" />
				<uni-icons type="search" size="26"></uni-icons>
			</template>
		</uni-nav-bar>
		<!-- <scroll-view scroll-y="true"> -->
		<view class="motion-test">
			<p class="title" style="font-size: 18px;font-weight: bold; margin-bottom: 10px; margin-left: 15px;word-wrap: break-word;
  overflow-wrap: break-word;">动作测评</p>
			<scroll-view scroll-x="true" class="">
				<view class="row1">
					<view class="rounded-rectangle" v-for="(item,index) in motions"></view>

					<view class="rounded-rectangle plus">
						<uni-icons type="plus" size="80" class="add"></uni-icons>
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="sports-report">
			<p style="font-size: 18px;font-weight: bold; margin-bottom: 15px; margin-left: 15px;word-wrap: break-word;
  overflow-wrap: break-word;">运动报告</p>
			<view class="statistics">
				
			</view>
		</view>

		<view class="fitness-report">
			<p style="font-size: 18px;font-weight: bold; margin-bottom: 15px; margin-left: 15px;word-wrap: break-word;
  overflow-wrap: break-word;">健康报告</p>
			<view class="statistics">

			</view>
		</view>
		<!-- </scroll-view> -->


	</view>
</template>

<script>
	export default {
		data() {
			return {
				motions: [{
					name: '俯卧撑',
					targetVideo: '',

				},{
					name: '深蹲',
					targetVideo: '',

				}]
			};
		}
	}
</script>

<style lang="scss">
	// 导航栏样式
	.nav {
		margin-bottom: 5px;
	}

	.avatar {
		margin-right: 10px;
	}

	.date {
		font-size: 22px;
	}

	.right-icon {}


	// 动作检测
	.motion-test {
		height: 200px;

		.title {}
	}

	.sports-report {

		height: 250px;
		display: flex;
		flex-direction: column;


		.statistics {
			height: 200px;
			width: 95%;
			background-color: white;
			border-radius: 15px;

			align-self: center;

		}
	}

	.fitness-report {
		height: 250px;
		display: flex;
		flex-direction: column;


		.statistics {
			height: 200px;
			width: 95%;
			background-color: white;
			border-radius: 15px;

			align-self: center;

		}
	}

	.row1 {
		display: flex;
		flex-direction: row;
		align-items: center;


		.rounded-rectangle {
			background-color: white;
			height: 150px;
			/* 您想要的高度 */
			width: 60%;
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
		
		.plus{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			
			.add{
				align-self: center;
				justify-self: center;
				vertical-align: middle;
			}
		}
	}
</style>