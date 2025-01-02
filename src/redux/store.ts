import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import logger from "./features/middlewares/loger";

const store = configureStore({
    reducer:{
        counter: counterReducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
}) 

export default store;

export type RoootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch 