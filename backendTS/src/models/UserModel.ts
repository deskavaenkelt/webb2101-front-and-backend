export interface UserModel {
	id: number;
	name: string;
	age: number;
	gender: string;
}

export interface CreateUser {
	name: string;
	age: number;
	gender: string;
}
