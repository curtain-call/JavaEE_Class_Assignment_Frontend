import {
	defineStore
} from 'pinia';

export const useUserStore = defineStore('user', {
	unistorage: true,
	state: () => {
		return {
			"account": "",
			"password": "string",
			"nickname": "string",
			"followerNum": 0,
			"fanNum": 0,
			"likeNum": 0,
			"bodyDataList": [{
				"id": 0,
				"account": "string",
				"weight": 0,
				"height": 0,
				"bmi": 0,
				"age": 0
			}],
			"trainingPlanList": [{
				"id": 0,
				"account": "string",
				"startTime": 0,
				"endTime": 0,
				"motionList": [{
					"id": 0,
					"account": "string",
					"name": "string",
					"description": "string",
					"status": true,
					"standardVideoUrl": "string",
					"userUploadVideoUrl": "string",
					"imageUrl": "string"
				}]
			}],
			"motionList": [{
				"id": 0,
				"account": "string",
				"name": "string",
				"description": "string",
				"status": true,
				"standardVideoUrl": "string",
				"userUploadVideoUrl": "string",
				"imageUrl": "string"
			}]
		};
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},

});