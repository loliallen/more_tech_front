import { ReduxAction } from '../../interfaces/redux'
import { AppState } from '../interfaces'
import setToken from '../../services/utlils/setToken'
import APP_TYPES from '../types/app'

const initalState: AppState = {
    authorized: false,
    authorizeStatus: 'none',
    user: null,
}

export const appReducer = (state = initalState, action: ReduxAction): AppState => {
    switch (action.type) {
        case APP_TYPES.authorize:
            setToken(action.payload)
            return { ...state, authorized: true, authorizeStatus: 'done' }
        case APP_TYPES.deauthorize:
            return { ...state, authorized: false, authorizeStatus: 'done', user: null }
        case APP_TYPES.logout:
            return { ...state, authorized: false, authorizeStatus: 'none', user: null }
        case APP_TYPES.login:
            return { ...state, authorizeStatus: 'pending' }
        default:
            return state
    }
}
