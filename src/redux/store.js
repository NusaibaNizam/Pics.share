import { rootReducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


export const MyStore=createStore(rootReducer,applyMiddleware(thunk));