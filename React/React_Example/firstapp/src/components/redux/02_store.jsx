import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './01_counterSlice'
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
export default store;