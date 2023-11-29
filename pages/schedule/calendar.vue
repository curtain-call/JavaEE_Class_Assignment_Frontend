<template>
	<view class="calendar" v-if="show">
		<view class="bg" @click="close">

		</view>
		<view class="con">
			<view class="con-top">
				<view class="con-title">
					<view class="con-clear" @click="clear">
						<text class="textclear">清除</text>
					</view>
					<view class="title">
						<text class="texttitle">日期选择</text>
					</view>
					<view class="con-cancle" @click="close">
						<text class="cancle">关闭</text>
					</view>
				</view>
				
				<view class="date">
					<text v-for="i in zhou">{{i}}</text>
				</view>
			</view>
			<view class="con-center">
				<scroll-view class="scroll" scroll-y="true" :scroll-into-view="toview" scroll-top="120">
					<month @change="change" :startText="option.startText" :endText="option.endText" :id="'a'+item.year+item.month" v-for="item in monthArr"
						:maxDate="option.maxDate" :minDate="option.minDate" :value="selectValue" :month="item.month"
						:year="item.year"></month>
				</scroll-view>
			</view>
			<view class="con-button" @click="sureDate" :class="{on: isClick}">
				<text class="sure">确定</text>
			</view>
		</view>
	</view>
</template>

<script>
	import month from "./month.vue"
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			option: {
				type: Object,
				default: {}
			},
			value: {
				type: Array,
				default: []
			}
		},
		components: {
			month
		},
		computed: {
			isClick(){
				return (this.selectValue.length == this.option.dateNum) || this.selectValue.length == 2
			}
		},
		data() {
			let value = [];
			if (this.value) {
				if (this.value[0]) {
					value[0] = new Date(new Date(this.value[0]).toDateString()).getTime();
				}
				if (this.value[1]) {
					value[1] = new Date(new Date(this.value[1]).toDateString()).getTime()
				}
			}
			return {
				toview: '',
				zhou: ['一', '二', '三', '四', '五', '六', '日'],
				monthArr: [],
				selectValue: value,
				isShow: false
			}
		},
		mounted() {
			this.option.maxDate = new Date(this.option.maxDate).getTime() || new Date().getTime() + 183 * 24 * 3600 * 1000
			this.option.minDate = new Date(this.option.minDate).getTime() || new Date().getTime() - 183 * 24 * 3600 * 1000
			let maxYear = new Date(this.option.maxDate).getFullYear();
			let maxMonth = new Date(this.option.maxDate).getMonth() + 1;
			let minYear = new Date(this.option.minDate).getFullYear();
			let minMonth = new Date(this.option.minDate).getMonth()+1;
			let i = 0;
			let monthArr = [];
			while (new Date(new Date(minYear + '/' + minMonth).setMonth(minMonth - 1 + i)).getTime() <= new Date(maxYear +
					'/' + maxMonth).getTime()) {
				monthArr.push({
					year: new Date(new Date(minYear + '/' + minMonth).setMonth(minMonth - 1 + i)).getFullYear(),
					month: new Date(new Date(minYear + '/' + minMonth).setMonth(minMonth - 1 + i)).getMonth() + 1
				});
				i++;
			}
			this.monthArr = monthArr;
			let toview = '';
			if (this.selectValue[0]) {
				toview = 'a' + new Date(this.selectValue[0]).getFullYear() + (new Date(this.selectValue[0]).getMonth() + 1)
			}
			this.$nextTick(() => {
				this.toview = toview
			})
		},
		methods: {
			formatter(date, formatter){
				let year = new Date(date).getFullYear()
				let month = new Date(date).getMonth()+1
				let day = new Date(date).getDate()
				return formatter.replace(/yyyy/i, year).replace(/mm/i, month).replace(/dd/i, day)
			},
			sureDate(){
				if(!this.isClick) return
				let value = [];
				if(this.option.formatter){
					value = [this.formatter(this.selectValue[0], this.option.formatter)]
					if(this.selectValue[1]){
						value.push(this.formatter(this.selectValue[1], this.option.formatter))
					}
				}
				this.$emit('input', value)
				this.$emit('update:show', false)
				this.$emit('change')
				this.$emit('close')
			},
			close(){
				this.$emit('update:show', false)
				this.$emit('close')
			},
			clear(){
				this.$emit('input', [])
				this.$emit('update:show', false)
				this.$emit('change', [])
				this.$emit('close')
			},
			change(day) {
				if(this.option.dateNum && this.option.dateNum == 1){
					this.selectValue = [day];
					return;
				}
				if (!this.selectValue.length) {
					this.selectValue = [day];
				} else if (this.selectValue.length == 1) {
					if (this.selectValue[0] > day) {
						this.selectValue = [day]
					} else {
						if (this.option.minRange) {
							if (this.option.minRange * 3600 * 24 * 1000 + this.selectValue[0] > day) {
								uni.showToast({
									icon: 'none',
									title: `选择间隔时间必须大于${this.option.minRange}天`
								})
							} else {
								this.selectValue = [this.selectValue[0], day];
							}
						} else {
							this.selectValue = [this.selectValue[0], day];
						}
					}
				} else {
					this.selectValue = [day]
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.calendar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		height: 100vh;

		.bg {
			width: 750rpx;
			height: 100vh;
			background: rgba(0, 0, 0, 0.5);
		}

		.con {
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			background: #fff;
			padding-top: 20rpx;

			.con-title {
				display: flex;
				height: 80rpx;
				flex-flow: row;
				justify-content: space-between;
				align-items: center;
				padding: 0 40rpx;
				padding-bottom: 20rpx;
			}

			.date {
				display: flex;
				flex-flow: row;
				height: 60rpx;
				justify-content: space-between;
				align-items: center;
				padding: 0 40rpx;
				border-bottom: 2rpx solid #eee;
			}

			.con-center {
				height: 800rpx;
				padding: 20rpx 0;
				.scroll {
					height: 800rpx;

					.item {
						height: 500rpx;
					}
				}
			}
			.con-button{
				height: 80rpx;
				width: 650rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 20rpx 50rpx;
				background-color: rgb(60, 156, 255);
				border-radius: 40rpx;
				opacity: .5;
				&.on{
					opacity: 1;
				}
				.sure{
					font-size: 40rpx;
					color: #fff;
				}
			}
		}
	}
</style>
