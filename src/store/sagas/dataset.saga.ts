import { call, put } from "@redux-saga/core/effects"
import { IDataset } from "../../interfaces/dataset"
import { ReduxAction } from "../../interfaces/redux"
import datasetApiRequests, { GetParams } from "../../services/dataset"
import datasetActions from "../actions/dataset.actions"

function* getWatcher({ payload }: ReduxAction<GetParams>) {
    try {
        const res: IDataset[] = yield call(datasetApiRequests.get, payload)
        yield put(datasetActions.set(res))
    } catch {

    }
}
function* getcWatcher({ payload }: ReduxAction<string>) {
    try {
        const res: IDataset[] = yield call(datasetApiRequests.getc, payload)
        yield put(datasetActions.setc(res))
    } catch {

    }
}
function* createWatcher({ payload }: ReduxAction) {
    try {
        const res: IDataset[] = yield call(datasetApiRequests.create, payload)
        yield put(datasetActions.get())
    } catch {

    }

}
function* updateWatcher({ payload }: ReduxAction) {
    try {
        const res: IDataset[] = yield call(datasetApiRequests.update, payload.id, payload.data)
        yield put(datasetActions.get())
    } catch {

    }

}
function* removeWatcher({ payload }: ReduxAction) {
    try {
        const res: IDataset[] = yield call(datasetApiRequests.remove, payload.id)
        yield put(datasetActions.get())
    }catch{}
}

const datasetSaga = {
    getWatcher,
    getcWatcher,
    createWatcher,
    updateWatcher,
    removeWatcher
}

export default datasetSaga