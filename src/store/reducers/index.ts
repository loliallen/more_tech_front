import { combineReducers } from "redux";
import { IReduxStore } from "../interfaces";
import { appReducer } from "./app.reducer";
import { roleReducer } from "./role.reducer";
import { userReducer } from "./user.reducer";

export const reducers = combineReducers<IReduxStore>({ 
    app: appReducer,
    user: userReducer,
    role: roleReducer 
})