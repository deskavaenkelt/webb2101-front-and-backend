import { UserModel } from '../models/UserModel'

// Har finns databas relaterat
let currentId:number = 14

export function getCurrentId() {
	return currentId
}

export function incrementCurrentIdByOne() {
	currentId += 1
}

// Sök i databasen
export function getUserIndex(id: number) {
	for (let i = 0; i < inMemoryDatabase.length; i++) {
		if (inMemoryDatabase[i].id === id) {
			return i
		}
	}
	return -1
}

// Radera användare i databasen
export function deleteUser(index: number) {
	inMemoryDatabase.splice(index, 1)
}

export let inMemoryDatabase: UserModel[] = [
	{
		id: 10,
		name: 'Adam',
		age: 12,
		gender: 'Male',
	},
	{
		id: 11,
		name: 'Bengtina',
		age: 24,
		gender: 'Female',
	},
	{
		id: 12,
		name: 'Cecilia',
		age: 36,
		gender: 'Female',
	},
	{
		id: 13,
		name: 'David',
		age: 48,
		gender: 'Male',
	},
]

