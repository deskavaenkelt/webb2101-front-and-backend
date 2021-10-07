import { CreateUser, UserModel } from '../models/UserModel'
import { getUserIndex, getCurrentId, incrementCurrentIdByOne, inMemoryDatabase, deleteUser } from './db'
import { messageSuccess, messageSuccessWithJson, messageUserNotFound } from './response'

// CRUD = Create Read Update Delete
function createNewUser(userData: CreateUser) {
	const user: UserModel = {
		id: getCurrentId(),
		name: userData.name,
		age: userData.age,
		gender: userData.gender,
	}
	incrementCurrentIdByOne()
	inMemoryDatabase.push(user)
}

function getAllUsers() {
	return inMemoryDatabase
}

function getUserById(id: number) {
	const index = getUserIndex(id)

	if (index === -1) {
		return messageUserNotFound()
	} else {
		return messageSuccessWithJson(inMemoryDatabase[index])
	}
}

function updateUser(userData: UserModel) {
	const index = getUserIndex(Number(userData.id))

	if (index === -1) {
		return messageUserNotFound()
	} else {
		if (inMemoryDatabase[index].name !== userData.name) {
			inMemoryDatabase[index].name = userData.name;
		}
		if (inMemoryDatabase[index].age !== userData.age) {
			inMemoryDatabase[index].age = userData.age
		}
		if (inMemoryDatabase[index].gender !== userData.gender) {
			inMemoryDatabase[index].gender = userData.gender
		}

		return messageSuccess('User updated!')
	}
}

function deleteUserById(id: number) {
	const index = getUserIndex(id)

	if (index === -1) {
		return messageUserNotFound()
	} else {
		deleteUser(index)
		return messageSuccess('User deleted!')
	}
}

export {
	createNewUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUserById
}
