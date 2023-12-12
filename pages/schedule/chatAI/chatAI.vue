<template>
	<view class="chat-container">
		<uni-nav-bar left-width="400rpx" right-width="400rpx" class="nav" height="30px" status-bar="true" fixed="true">
			<template #left class="left-slot">

			</template>
			<template>
				ChatAI
			</template>
			<template #right class="right-slot">


			</template>
		</uni-nav-bar>

		<view class="message-container">
			<view class="message-wrapper" v-for="(message, index) in messages" :key="index" >
				<image v-if="!message.isMine" :src="serverAvatar" class="avatar" />
				<view :class="{'message-mine': message.isMine, 'message-theirs': !message.isMine}">
					<text class="message-text">{{ message.text }}</text>
				</view>
				<image v-if="message.isMine" :src="userAvatar" class="avatar" />
			</view>
		</view>


		<view class="input-container">
			<input v-model="newMessage" type="text" placeholder="Type a message..." @keyup.enter="sendMessage"
				:disabled="isSending" />
			<button @click="sendMessage" :disabled="isSending">Send</button>
		</view>
	</view>
</template>



<script>
	export default {
		// 现有的 data 和 methods ...
		data() {
			return {
				// 头像
				userAvatar: '../../../static/default_avatar.png', // 用户自己的头像路径
				serverAvatar: '../../../static/AIchat2.png', // 服务器端的头像路径

				messages: [{
						text: '长字符测试长字符测试长字符测试长字符测试长字符测试长字符测试长字符测试长字符测试长字符测试',
						isMine: true
					},
					{
						text: 'Hi, how are you?',
						isMine: false
					}
				],
				newMessage: '',
				isSending: false
			}
		},
		updated() {
			this.scrollToBottom();
		},
		methods: {
			// 现有的 methods ...

			// scrollToBottom() {
			// 	this.$nextTick(() => {
			// 		const container = this.$refs.messageContainer;
			// 		container.scrollTop = container.scrollHeight;
			// 	});
			// },
			sendMessage() {
				this.isSending = true; // 开始发送，禁用输入和按钮
				if (this.newMessage.trim() !== '') {
					this.messages.push({
						text: this.newMessage,
						isMine: true
					});
					this.newMessage = '';
					// 这里可以添加发送消息到服务器的逻辑


					// 模拟
					setTimeout(() => {
						// 假设消息发送成功，并且这里我们收到了响应
						// 处理服务器的响应...

						this.isSending = false; // 收到响应，重新启用输入和按钮
					}, 1000); // 假设服务器响应大约需要1秒钟

				}
			},


			handleKeyboardShow(event) {
				// 可以通过 event.keyboardHeight 获取键盘高度
				// 更新输入区域的样式，使其上移键盘的高度
				this.$refs.inputContainer.style.bottom = `${event.keyboardHeight + 20}px`;
				this.scrollToBottom();
			},
			handleKeyboardHide() {
				// 键盘隐藏时，重置输入区域的样式
				this.$refs.inputContainer.style.bottom = '0';
				this.scrollToBottom();
			},
			scrollToBottom() {
				// 滚动到消息视图的底部
				const container = this.$refs.messageContainer;
				setTimeout(() => {
					container.scrollTop = container.scrollHeight;
				}, 0);
			}
		},

		mounted() {
			window.addEventListener('keyboardWillShow', this.handleKeyboardShow);
			window.addEventListener('keyboardWillHide', this.handleKeyboardHide);
		},


	}
</script>

<style lang="scss">
	// 导航栏
	.nav {
		margin-bottom: 5px;

		position: relative;
		z-index: 9999;
	}


	.chat-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #f0f0f0;
		/* 聊天背景色 */
	}

	.message-container {
		flex-grow: 1;
		padding: 10px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}
	
	.message-wrapper{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.message-wrapper-toend{
		align-self: flex-end;
	}
	

	.message-text {

		color: white;
		word-wrap: break-word;
	}

	.avatar {
		// width: 40px;
		// height: 40px;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		background-size: cover;
		margin-bottom: 50px;
		// background-position: center;
	}


	.message-mine {
		background-color: #9b59b6;
		/* 发送消息气泡的紫色背景 */
		align-self: flex-end;
		border-bottom-right-radius: 20px;
		border-top-left-radius: 20px;
		/* 发送气泡尾部形状 */

		display: flex;
		flex-direction: row;
		align-items: center;
		// margin-right: 40px;
		max-width: 67%;
		margin-left: 40px;


		padding: 10px 10px;
		margin-bottom: 10px;
	}
	

	.message-theirs {
		background-color: #95a5a6;
		/* 接收消息气泡的灰色背景 */
		align-self: flex-start;
		border-bottom-left-radius: 20px;
		border-top-right-radius: 20px;
		/* 接收气泡尾部形状 */

		display: flex;
		flex-direction: row;
		align-items: center;
		max-width: 67%;
		margin-right: 40px;

		padding: 10px 10px;
		margin-bottom: 10px;
	}

	.input-container {
		display: flex;
		padding: 10px;
		background-color: #fff;
		/* 输入区域背景色 */
	}

	input {
		flex-grow: 1;
		padding: 10px;
		margin-right: 10px;
		border: 1px solid #ccc;
		border-radius: 20px;
		outline: none;
	}

	button {
		padding: 0 10px;
		background-color: #3498db;
		/* 发送按钮背景色 */
		color: white;
		border: none;
		border-radius: 20px;
		cursor: pointer;
	}

	/* 如果您的应用支持暗模式或其他主题，可以在此添加媒体查询或主题类 */

	.chat-container {
		padding-bottom: var(--keyboard-height, 0);
		/* 其他样式... */

	}

	.input-container {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		/* 其他样式... */
	}
</style>