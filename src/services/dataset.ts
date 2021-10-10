import { IDataset } from "../interfaces/dataset"
import axios from "./axios"

export type GetParams = {
    search?: string,
    owner?: number,
    type?: 0 | 1,
    status?: 0 | 1,
}

const get = async (params: GetParams = {}) => {
    const res = await axios.get('/api/datasets/get/', { params })
    return res.data
}

const getc = async (id: string) => {
    const res = await axios.get('/api/datasets/get/', { params: { id } })
    return res.data
}

const create = async (data: IDataset) => {
    const res = await axios({
        url: '/api/datasets/create/',
        method: 'post',
        data
    })
    return res.data
}
const update = async (id: string, data: any) => {
    const res = await axios({
        url: `/api/datasets/update/${id}`,
        method: 'put',
        data
    })
    return res.data
}
const remove = async (id: string) => {
    const res = await axios({
        url: `/api/datasets/delete/${id}`,
        method: 'delete',
    })
    return res.data
}

const datasetApiRequests = {
    get,
    getc,
    create,
    update,
    remove
}

export default datasetApiRequests