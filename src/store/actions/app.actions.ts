import APP_TYPES from "../types/app"

const login = (login: string, password: string) => ({
    type: APP_TYPES.login,
    payload: { login, password }
})

const authorize = (token: string) => ({
    type: APP_TYPES.authorize,
    payload: token
})
const deauthorize = () => ({
    type: APP_TYPES.deauthorize
})

const appActions = {
    login,
    authorize,
    deauthorize
}
export default appActions