import { takeEvery } from "@redux-saga/core/effects";
import APP_TYPES from "../types/app";
import DATASET_TYPES from "../types/dataset";
import appSaga from "./app.saga";
import datasetSaga from "./dataset.saga";

function* sagaWatcher(){
    yield takeEvery(APP_TYPES.login, appSaga.loginWatcher)
    yield takeEvery(APP_TYPES.logout, appSaga.logoutWatcher)
    
    yield takeEvery(DATASET_TYPES.get, datasetSaga.getWatcher)
    yield takeEvery(DATASET_TYPES.getc, datasetSaga.getcWatcher)
    yield takeEvery(DATASET_TYPES.create, datasetSaga.createWatcher)
    yield takeEvery(DATASET_TYPES.update, datasetSaga.updateWatcher)
    yield takeEvery(DATASET_TYPES.delete, datasetSaga.removeWatcher)

}

export default sagaWatcher