export type ReduxAction<T = any> = {
    type: string
    payload: T
}