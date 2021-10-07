import { UserModel } from "./UserModel";

export interface StatusWithTextMessage {
	status: number;
	text: string;
}

export interface StatusWithJsonUserData {
	status: number;
	text: UserModel;
}
