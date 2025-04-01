import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {id: 1, title: "반갑습니다.", body:"Hello", writer:"김진아"},
    {id: 2, title: "안녕하세요.", body:"안녕하세요", writer:"김진아"}
];

const postListSlice = createSlice({
    name: "postList",
    initialState: {
        postList: [
            {id: 1, title: "반갑습니다.", body:"Hello", writer:"김진아"},
            {id: 2, title: "안녕하세요.", body:"안녕하세요", writer:"김진아"}
        ],
        nextId: initState[initState.length - 1].id + 1
    },
    reducers: {
        onSave:(state, action) => {
            state.postList.push({...action.payload, id: state.nextId});
            state.nextId++;
        },
        onUpdate:(state, action) => {
            const postList = state.postList;
            for(let i = 0; i < postList.length; i++) {
                if(postList[i].id === action.payload.id) {
                    postList[i] = action.payload;
                    break;
                }
            }
        },
        onDelete:(state, action) => {
            state.postList = state.postList.filter((post) => post.id !== action.payload.id);
        }
    }
});

export const {onSave, onUpdate, onDelete} = postListSlice.actions;
export default postListSlice;
