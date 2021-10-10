import { IRole } from "../interfaces/role";
import { IUser } from "../interfaces/user";

export type AppState = {
    authorized: boolean
    authorizeStatus: 'none' | 'pending' | 'done'
    user: IUser | null
}

type CRUDState<T> = {
    list: T[]
    current: T | null
}

export type UserState = CRUDState<IUser>
export type RoleState = CRUDState<IRole>


export interface IReduxStore {
    app: AppState,
    user: UserState,
    role: RoleState,
}