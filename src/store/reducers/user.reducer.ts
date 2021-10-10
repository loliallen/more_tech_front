import { ReduxAction } from "../../interfaces/redux";
import { UserState } from "../interfaces";

const initalState: UserState = {
    list: [],
    current: null
}

export const userReducer = (state = initalState, action: ReduxAction) => {
    switch(action.type){
        default:
            return state
    }
}