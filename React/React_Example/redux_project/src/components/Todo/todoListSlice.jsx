import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const todoList = [
    {id:1, title:"공부하기"}
];

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        todoList: todoList,
        nextId: todoList[todoList.length - 1].id + 1  
    },
    // 액션 생성자
    reducers: {
        // todolist 추가하기
        addTodo: (state, action) => {
            state.todoList.push({ id: state.nextId, title: action.payload });
            state.nextId++;
        },
        deleteTodo: (state, action) => {
            // console.log(action.)
            state.todoList = state.todoList.filter((todo) => Number(action.payload) !== todo.id )
        }
    },
});
// 액션생성자와 리듀서를 추출
export const {addTodo, deleteTodo} = todoListSlice.actions;
export default todoListSlice.reducer;