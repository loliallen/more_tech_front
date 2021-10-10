import { IDataset } from "../interfaces/dataset";
import { IRole } from "../interfaces/role";
import { ITag } from "../interfaces/tag";
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
export type DatasetState = CRUDState<IDataset>
export type TagState = CRUDState<ITag>


export interface IReduxStore {
    app: AppState,
    user: UserState,
    role: RoleState,
    dataset: DatasetState,
}