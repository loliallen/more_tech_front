import { call, put } from 'redux-saga/effects'
import { ReduxAction } from "../../interfaces/redux";
import authApiRequests from '../../services';
import appActions from '../actions/app.actions';


function* loginWatcher({ payload }: ReduxAction) {
    try {
        const response: { key: string } = yield call(authApiRequests.login, payload.login, payload.password)
        yield put(appActions.authorize(response.key))
    } catch {
        yield put(appActions.deauthorize())
    }
}
function* logoutWatcher() {
    try {
        yield call(authApiRequests.logout)
    } finally {
        yield put(appActions.deauthorize())
    }
}

const appSaga = {
    loginWatcher,
    logoutWatcher
}
export default appSaga