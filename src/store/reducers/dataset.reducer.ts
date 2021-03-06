import { ReduxAction } from "../../interfaces/redux";
import { DatasetState } from "../interfaces";
import DATASET_TYPES from "../types/dataset";

const initalState: DatasetState = {
    list: [],
    current: null
}

export const datasetReducer = (state = initalState, action: ReduxAction) => {
    switch (action.type) {
        case DATASET_TYPES.set:
            return { ...state, list: action.payload }
        case DATASET_TYPES.setc:
            action.payload.analytics = JSON.parse(action.payload.analytics)
            action.payload.price = action.payload.price ? action.payload.price : Math.round(Math.random() * 100000) 
            return { ...state, current: action.payload }
        default:
            return state
    }
}