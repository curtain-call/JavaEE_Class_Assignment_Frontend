<template>
	<view class="month-box">

		<view class="box-title">
			<text class="titletext">{{year}}年{{month}}月</text>
		</view>
		<view class="month">
			<view class="item" v-for="item in days">
				<view @click="selectDay(item)"
					:class="{'item-con': true, 'itemno': !item.isSelect, 'item-sel': (item.timeNo==value[0] || item.timeNo==value[1]),  'item-jian': (item.timeNo>value[0] && item.timeNo<value[1])}"
					v-if="item">
					<text class="text">{{item.date}}</text>
					<text class="kai" v-if="item.timeNo==value[0]">{{startText}}</text>
					<text class="jie" v-if="item.timeNo==value[1]">{{endText}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			year: {
				type: String | Number,
				default: '2023'
			},
			startText: {
				type: String,
				default: '开始'
			},
			endText: {
				type: String,
				default: '结束'
			},
			month: {
				type: String | Number,
				default: '4'
			},
			maxDate: {
				type: Boolean | Number,
				default: false
			},
			minDate: {
				type: Boolean | Number,
				default: false
			},
			value: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				day: 24 * 3600 * 1000,
				max: 0,
				min: new Date(this.year + '/' + this.month).getTime(),
			}
		},
		methods: {
			selectDay(day) {
				if(day.isSelect){
					this.$emit('change', day.timeNo)
				}
			},
		},
		computed: {
			days() {
				let dataArr = [];
				if(new Date(this.min).getDay() == 0){
					dataArr[5] = undefined;
				} else if(new Date(this.min).getDay()>=2){
					dataArr[new Date(this.min).getDay()-2] = undefined;
				}
				if (this.month == 12) {
					this.max = new Date((this.year - 0 + 1) + '/1').getTime()
				} else {
					this.max = new Date(this.year + '/' + (this.month - 0 + 1)).getTime()
				}
				let i = 0;
				let isSelect = true;
				while (this.min + i * this.day < this.max) {
					if (this.maxDate && this.min + i * this.day > this.maxDate) {
						dataArr.push({
							date: i + 1,
							isSelect: false,
							timeNo: this.min + i * this.day
						})
					} else if (this.minDate && this.min + i * this.day < this.minDate) {
						dataArr.push({
							date: i + 1,
							isSelect: false,
							timeNo: this.min + i * this.day
						})
					} else {
						dataArr.push({
							date: i + 1,
							isSelect: true,
							timeNo: this.min + i * this.day
						})
					}
					i++
				}
				return dataArr;
			}
		}
	}
</script>

<style scoped lang="less">
	.box-title {
		display: flex;
		align-items: center;
		justify-content: center;

		.titletext {
			color: #000;
			padding-top: 30rpx;
			font-size: 32rpx;
			font-weight: bold;
			padding-bottom: 20rpx;
		}
	}

	.month {
		padding: 0 25rpx;
		display: flex;
		flex-flow: row;
		flex-wrap: wrap;

		.item {
			width: 100rpx;
			height: 100rpx;

			.item-con {
				width: 100rpx;
				height: 100rpx;
				color: #333;
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-items: center;

				&.itemno {
					color: #999;
				}

				&.item-sel {
					background-color: rgb(60, 156, 255);

					.text {
						color: white;
					}

					.kai {
						font-size: 20rpx;
						line-height: 1;
						color: white;
					}

					.jie {
						font-size: 20rpx;
						line-height: 1;
						color: white;
					}
				}

				&.item-jian {
					background-color: rgb(236, 245, 255);

					.text {
						color: rgb(60, 156, 255);
					}
				}
			}
		}
	}
</style>
