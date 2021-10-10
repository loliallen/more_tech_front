import { takeEvery } from "@redux-saga/core/effects";
import APP_TYPES from "../types/app";
import appSaga from "./app.saga";

function* sagaWatcher(){
    yield takeEvery(APP_TYPES.login, appSaga.loginWatcher)
    yield takeEvery(APP_TYPES.logout, appSaga.logoutWatcher)
}

export default sagaWatcher