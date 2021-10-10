import { IDataset } from "../../interfaces/dataset";
import { GetParams } from "../../services/dataset";
import DATASET_TYPES from "../types/dataset";

const get = (params: GetParams = {}) => ({
    type: DATASET_TYPES.get,
    payload: params
})

const set = (ds: IDataset[]) => ({
    type: DATASET_TYPES.set,
    payload: ds
})
const setc = (ds: IDataset[]) => ({
    type: DATASET_TYPES.setc,
    payload: ds
})
const create = (data: any) => ({
    type: DATASET_TYPES.get,
    payload: data
})
const update = (id: string, data: any) => ({
    type: DATASET_TYPES.get,
    payload: { id, data }
})
const remove = (id: string) => ({
    type: DATASET_TYPES.get,
    payload: id
})

const datasetActions = {
    get,
    set,
    setc,
    create,
    update,
    remove
}

export default datasetActions