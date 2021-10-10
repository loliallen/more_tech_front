import { ReduxAction } from '../../interfaces/redux'
import { AppState } from '../interfaces'
import setToken from '../../services/utlils/setToken'
import APP_TYPES from '../types/app'

const initalStore: AppState = {
    authorized: false,
    authorizeStatus: 'none',
    user: null,
}

export const appReducer = (store = initalStore, action: ReduxAction): AppState => {
    switch (action.type) {
        case APP_TYPES.authorize:
            setToken(action.payload)
            return { ...store, authorized: true, authorizeStatus: 'done' }
        case APP_TYPES.deauthorize:
            return { ...store, authorized: false, authorizeStatus: 'done', user: null }
        case APP_TYPES.logout:
            return { ...store, authorized: false, authorizeStatus: 'none', user: null }
        case APP_TYPES.login:
            return { ...store, authorizeStatus: 'pending' }
        default:
            return store
    }
}
