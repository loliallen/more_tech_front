import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { reducers } from "./reducers"

export const saga = createSagaMiddleware()
export const store = createStore(
    reducers, 
    composeWithDevTools(applyMiddleware(saga))
)