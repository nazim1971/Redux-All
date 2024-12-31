import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"

const store = configureStore({
    reducer:{
        counter: counterReducer
    },
}) 

export default store;

export type RoootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch 