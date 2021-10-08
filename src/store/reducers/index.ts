import { combineReducers } from "redux";
import { IReduxStore } from "../interfaces";
import { appReducer } from "./app.reducer";

export const reducers = combineReducers<IReduxStore>({ app: appReducer })