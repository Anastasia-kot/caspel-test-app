import {combineReducers, createStore } from "redux";
import appReducer from "./app-reducer.ts";


let rootReducer = combineReducers({appPage: appReducer});

export type RootReducerType = typeof rootReducer;


export let store = createStore(rootReducer);


// window.store = store;