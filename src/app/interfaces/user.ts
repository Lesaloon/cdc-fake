import { RoleEnum } from '../enums/role-enum';

export interface User {
	id: number | null;
	username: string;
	password: string;
	role: RoleEnum;
}
