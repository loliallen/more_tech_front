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
            return { ...state, current: action.payload }
        default:
            return state
    }
}