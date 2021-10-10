import { ReduxAction } from "../../interfaces/redux";
import { RoleState } from "../interfaces";

const initalState: RoleState = {
    list: [],
    current: null
}

export const roleReducer = (state = initalState, action: ReduxAction) => {
    switch(action.type){
        default:
            return state
    }
}