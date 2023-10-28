import { configureStore } from "@reduxjs/toolkit";
import { meme } from "./slices/MemeSlice";
import { combineReducers } from 'redux'

const reducer = combineReducers({
    meme
})

const store = configureStore({
    reducer,
    devTools: true,
});

export default store;