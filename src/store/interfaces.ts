import { IUser } from "../interfaces/user";

export type AppState = {
    authorized: boolean
    authorizeStatus: 'none' | 'pending' | 'done'
    user: IUser | null
}

export interface IReduxStore {
    app: AppState
}