import { StatusWithJsonUserData, StatusWithTextMessage } from '../models/responseModel'
import { UserModel } from '../models/UserModel'

// Svarskommunikation från API
function messageUserNotFound() {
	const message: StatusWithTextMessage = {
		status: 404,
		text: 'User not found!'
	}
	return message
}

function messageSuccess(text: string) {
	const message: StatusWithTextMessage = {
		status: 200,
		text
	}
	return message
}

function messageSuccessWithJson(json: UserModel) {
	const message: StatusWithJsonUserData = {
		status: 200,
		text: json
	}
	return message
}

export {
	messageUserNotFound,
	messageSuccess,
	messageSuccessWithJson
}
