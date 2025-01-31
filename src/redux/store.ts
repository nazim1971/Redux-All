import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
// import logger from "./features/middlewares/loger";
import taskReducer from "./features/task/taskSlice"
import userReducer from "./features/user/userSlice"
import { baseApi } from "./features/api/baseApi";

const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: taskReducer,
        user: userReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
}) 

export default store;

export type RoootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch 