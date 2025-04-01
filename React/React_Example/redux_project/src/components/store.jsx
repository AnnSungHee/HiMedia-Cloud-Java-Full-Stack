import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import todoListReducer from './Todo/todoListSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todoList: todoListReducer
    },
});

export default store;