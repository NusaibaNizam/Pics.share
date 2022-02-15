import { rootReducer } from "./reducer";
import { createStore } from "redux";
export const MyStore=createStore(rootReducer);